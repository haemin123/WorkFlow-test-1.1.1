// services/geminiService.ts (Updated with Chat Context)
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Task, Subtask } from '../types';
import { AI_CONFIG } from '../constants';
import {
  buildExecutionPlanPrompt,
  buildDoDPrompt,
  buildSolutionDraftPrompt,
  buildResourceRecommendationPrompt,
  buildChatSystemPrompt,
  optimizePromptSize
} from './promptEngineering';

// Types needed for Chat
interface ChatPart {
  text: string;
}
interface ChatHistory {
  role: 'user' | 'model';
  parts: ChatPart[];
}
interface Resource {
    title: string;
    url: string;
    description?: string;
}

// 하드코딩된 API Key (배포 이슈 해결용)
const API_KEY = "AIzaSyAZfKtZGcFEcUsOg-s3kXSTSeTp40pfUoI"; 

const genAI = new GoogleGenerativeAI(API_KEY);

// ============================================
// 헬퍼 함수
// ============================================

/**
 * Gemini API 호출 헬퍼
 */
async function callGeminiAPI(
  prompt: string,
  modelName: string = AI_CONFIG.MODEL_FAST,
  options?: {
    temperature?: number;
    maxTokens?: number;
  }
): Promise<string> {
  if (!API_KEY) {
      console.error("❌ Gemini API Key is missing.");
      throw new Error("API Key가 설정되지 않았습니다.");
  }

  try {
    // 프롬프트 크기 최적화
    const optimizedPrompt = optimizePromptSize(prompt, 8000);
    
    // 프롬프트 크기 로깅
    const size = {
      chars: optimizedPrompt.length,
      tokens: Math.ceil(optimizedPrompt.length / 4)
    };
    console.log(`📊 [Prompt Size] ${size.chars} chars (~${size.tokens} tokens)`);

    const model = genAI.getGenerativeModel({ 
      model: modelName,
      generationConfig: {
        temperature: options?.temperature ?? 0.7,
        maxOutputTokens: options?.maxTokens ?? AI_CONFIG.MAX_TOKENS,
      }
    });

    const result = await model.generateContent(optimizedPrompt);
    const response = await result.response;
    return response.text();
  } catch (error: any) {
    console.error('❌ [Gemini API Error]', error);
    
    let errorMessage = error.message || '알 수 없는 오류';
    
    // 에러 메시지 사용자 친화적으로 변환
    if (errorMessage.includes('403') || errorMessage.includes('BLOCKED')) {
        errorMessage = 'API 호출이 거부되었습니다. (403 Forbidden). 해당 API Key에 Gemini API 사용 권한이 있는지 확인해주세요.';
    } else if (errorMessage.includes('404')) {
        errorMessage = `모델을 찾을 수 없습니다 (${modelName}). 모델명을 확인해주세요.`;
    } else if (errorMessage.includes('429')) {
        errorMessage = '요청 한도를 초과했습니다. 잠시 후 다시 시도해주세요.';
    }

    throw new Error(`AI 생성 실패: ${errorMessage}`);
  }
}

/**
 * JSON 파싱 헬퍼
 */
function parseJSONResponse(text: string): any {
  try {
    // 1. 마크다운 코드 블록 제거 (```json ... ```)
    let cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '');
    
    // 2. JSON 객체/배열 부분만 추출 (앞뒤 사족 제거)
    const firstOpenBrace = cleaned.indexOf('{');
    const firstOpenBracket = cleaned.indexOf('[');
    let startIdx = -1;

    if (firstOpenBrace !== -1 && firstOpenBracket !== -1) {
        startIdx = Math.min(firstOpenBrace, firstOpenBracket);
    } else if (firstOpenBrace !== -1) {
        startIdx = firstOpenBrace;
    } else if (firstOpenBracket !== -1) {
        startIdx = firstOpenBracket;
    }

    if (startIdx !== -1) {
        const lastCloseBrace = cleaned.lastIndexOf('}');
        const lastCloseBracket = cleaned.lastIndexOf(']');
        const endIdx = Math.max(lastCloseBrace, lastCloseBracket);
        
        if (endIdx !== -1 && endIdx > startIdx) {
            cleaned = cleaned.substring(startIdx, endIdx + 1);
        }
    }

    return JSON.parse(cleaned.trim());
  } catch (error) {
    console.error('❌ [JSON Parse Error]', error);
    console.log('Raw response:', text);
    throw new Error('AI 응답을 JSON으로 파싱할 수 없습니다');
  }
}

/**
 * 배열 길이 검증 및 조정
 */
function ensureArrayLength<T>(arr: T[], expectedLength: number, defaultItem: T): T[] {
  if (!Array.isArray(arr)) {
      console.warn(`⚠️ [Type Error] Expected array, got ${typeof arr}`);
      return Array(expectedLength).fill(defaultItem);
  }

  if (arr.length === expectedLength) {
    return arr;
  }

  if (arr.length < expectedLength) {
    while (arr.length < expectedLength) {
      arr.push(defaultItem);
    }
  } else {
    arr = arr.slice(0, expectedLength);
  }

  return arr;
}

// ============================================
// 1. 스마트 업무 초안 (Smart Draft)
// ============================================

export async function draftTaskWithAI(rawInput: string): Promise<Partial<Task>[]> {
  const prompt = `
# 시스템 역할 (System Role)

당신은 IT 선도 기업의 수석 PM(Project Manager)입니다.

[당신의 역할]
- 거친 업무 아이디어를 전문적인 명세서로 변환하는 전문가
- 개발팀이 즉시 착수할 수 있는 명확한 문서 작성
- 다양한 스타일로 유연하게 대응

# 사용자 요청 (User Request)

사용자가 입력한 거친(Rough) 업무 아이디어를 분석하여, 개발팀이나 디자인팀이 즉시 착수할 수 있는 "전문적인 업무 명세서" 초안을 **3가지 스타일**로 제안하세요.

[입력 메시지]
"${rawInput}"

# 제약 조건 (Constraints)

1. 반드시 3가지 스타일(표준, 상세, 간결)을 모두 제공해야 합니다
2. 각 스타일의 특성을 명확히 구분해야 합니다:
   - **표준(Standard)**: 균형잡힌 전문적 스타일 (2-3 문단)
   - **상세(Detailed)**: 배경, 요건, 기대효과까지 구체적으로 (4-5 문단)
   - **간결(Concise)**: 핵심만 빠르게 (1-2 문단)
3. 입력에서 추론 가능한 제품군, 업무 타입, 우선순위를 포함해야 합니다
4. 한국어로 작성해야 합니다

# 출력 형식 (Output Format)

다음 필드를 가진 JSON 배열을 출력하세요:

\`\`\`json
[
  {
    "title": "명확하고 전문적인 제목",
    "description": "스타일에 맞춘 상세 설명 (줄바꿈 포함 가능)",
    "priority": "HIGH | MEDIUM | LOW",
    "product": "제품군 추론",
    "type": "기능 | 버그 | UX | 디자인 | 인프라 등",
    "styleTag": "표준 | 상세 | 간결"
  }
]
\`\`\`
  `;

  const response = await callGeminiAPI(prompt, AI_CONFIG.MODEL_SMART);
  return parseJSONResponse(response);
}

// ============================================
// 2. 실행 전략 (Execution Plan)
// ============================================

export async function generateSubtasksAI(task: Task): Promise<Subtask[]> {
  const prompt = await buildExecutionPlanPrompt(task);
  
  const response = await callGeminiAPI(prompt, AI_CONFIG.MODEL_SMART, {
    temperature: 0.7, 
    maxTokens: 1000
  });

  const steps = parseJSONResponse(response);

  return steps.map((step: any, index: number) => ({
    id: `ep-${Date.now()}-${index}`,
    title: step.title || step, 
    completed: false
  }));
}

// ============================================
// 3. 완료 조건 (Definition of Done)
// ============================================

export async function generateAcceptanceCriteriaAI(task: Task): Promise<any[]> {
    const prompt = await buildDoDPrompt(task);
    
    const response = await callGeminiAPI(prompt, AI_CONFIG.MODEL_SMART, {
      temperature: 0.5,
      maxTokens: 1000
    });
  
    let criteria = parseJSONResponse(response);
  
    // 배열인지 확인 후 처리
    if (!Array.isArray(criteria)) {
        console.warn("AI response is not an array, attempting to fix", criteria);
        criteria = []; 
    }

    return criteria.map((item: any, index: number) => {
      const textContent = typeof item === 'string' ? item : (item.content || item.text || item.description || '내용 없음');
      
      return {
        id: `ac-${Date.now()}-${index}`, 
        content: textContent,
        checked: false
      };
    });
}

// ============================================
// 4. 솔루션 초안 (Solution Draft)
// ============================================

export async function generateSolutionDraftAI(task: Task): Promise<string> {
  const prompt = await buildSolutionDraftPrompt(task);
  
  const response = await callGeminiAPI(prompt, AI_CONFIG.MODEL_SMART, {
    temperature: 0.8,
    maxTokens: 2000
  });

  return response;
}

// ============================================
// 5. 학습 자료 추천 (Resource Recommender)
// ============================================

export async function recommendResourcesAI(task: Task): Promise<Resource[]> {
  const prompt = await buildResourceRecommendationPrompt(task);
  
  const response = await callGeminiAPI(prompt, AI_CONFIG.MODEL_FAST, {
    temperature: 0.6,
    maxTokens: 1000
  });

  const resources = parseJSONResponse(response);
  const defaultResource: Resource = {
    title: '관련 기술 문서',
    url: 'https://developer.mozilla.org',
    description: '기본 웹 기술 참고 자료'
  };

  return ensureArrayLength(resources, 3, defaultResource);
}

// ============================================
// 6. AI 가이드 채팅 (단일 Task)
// ============================================

export async function chatWithGuide(
  history: ChatHistory[],
  userMessage: string,
  contextTask: Task
): Promise<string> {
  const systemPrompt = buildChatSystemPrompt(contextTask);

  const chat = genAI.getGenerativeModel({ 
    model: AI_CONFIG.MODEL_FAST 
  }).startChat({
    history: [
      { 
        role: 'user', 
        parts: [{ text: systemPrompt }] 
      },
      { 
        role: 'model', 
        parts: [{ text: '네, 해당 업무에 대해 도와드리겠습니다. 무엇이 궁금하신가요?' }] 
      },
      ...history
    ]
  });

  const result = await chat.sendMessage(userMessage);
  const response = await result.response;
  
  return response.text();
}

// ============================================
// 7. 팀 인사이트 분석 (Team Insights)
// ============================================

export async function generateInsights(
  tasks: Task[],
  teamStats: any
): Promise<string> {
  const prompt = `
# 시스템 역할 (System Role)
당신은 데이터 기반으로 팀의 성과를 분석하는 AI 전문가입니다.

# 데이터 분석 (Data Analysis)
다음 프로젝트 데이터를 분석하여, 팀 리더에게 제공할 **주간 핵심 인사이트**를 2~3문장으로 요약해 주세요.

## 팀 통계
- 전체 업무 수: ${teamStats.total}
- 완료율: ${teamStats.completionRate}%
- 진행 중 업무: ${teamStats.inProgress}
- 마감 기한 초과: ${teamStats.overdue}
- 업무가 가장 많은 팀원: ${teamStats.busiestMember}

# 출력 형식 (Output Format)
일반 텍스트로 2-3문장의 인사이트를 제공하세요.
  `;

  const response = await callGeminiAPI(prompt, AI_CONFIG.MODEL_FAST, {
    temperature: 0.7,
    maxTokens: 500
  });

  return response.trim();
}

// ============================================
// 8. 분석 전략 (전체 AI 분석) - 통합 함수
// ============================================

export async function analyzeTaskWithAI(task: Task): Promise<{
  executionPlan: Subtask[];
  acceptanceCriteria: string[];
  solutionDraft?: string;
  learningResources?: Resource[];
}> {
  console.log(`🔍 [Full Analysis] Starting for task: ${task.title}`);

  try {
    const [executionPlan, acceptanceCriteria, solutionDraft, learningResources] = await Promise.all([
      generateSubtasksAI(task),
      generateAcceptanceCriteriaAI(task).then(res => res.map(r => r.content)), 
      generateSolutionDraftAI(task).catch(() => undefined),
      recommendResourcesAI(task).catch(() => undefined)
    ]);

    console.log(`✅ [Full Analysis] Complete`);

    return {
      executionPlan,
      acceptanceCriteria,
      solutionDraft,
      learningResources
    };
  } catch (error) {
    console.error(`❌ [Full Analysis] Failed`, error);
    throw error;
  }
}

// ============================================
// 9. 전체 TASK 기반 채팅 (Chat with Tasks Context)
// ============================================

export async function startChatWithTaskContext(
  history: ChatHistory[],
  userMessage: string,
  tasks: Task[]
): Promise<string> {
  // 1. Task 정보 포맷팅 (체크된 완료조건 강조)
  const taskContext = tasks.map((t, index) => {
    // 완료 조건 파싱 및 우선순위 처리
    const checkedCriteria = t.aiAnalysis?.acceptanceCriteria
      ?.filter((ac: any) => ac.checked) // 체크된 항목 필터링
      .map((ac: any) => `- [✅우선/달성됨] ${ac.content}`)
      .join('\n      ');

    const otherCriteria = t.aiAnalysis?.acceptanceCriteria
      ?.filter((ac: any) => !ac.checked)
      .map((ac: any) => `- ${ac.content}`)
      .join('\n      ');

    // 실행 계획 파싱
    const executionPlan = t.aiAnalysis?.executionPlan
      ?.map((ep: any) => `- ${ep.title} (${ep.completed ? '완료' : '진행전'})`)
      .join('\n      ');

    return `
    [TASK #${index + 1}] ${t.title}
    - 상태: ${t.status} | 우선순위: ${t.priority} | 마감일: ${t.dueDate}
    - 담당자: ${t.assigneeName || '미지정'}
    - 설명: ${t.description}
    - 완료 조건 (DoD) - 체크박스(✅) 항목 우선 반영:
      ${checkedCriteria || ''}
      ${otherCriteria || ''}
    - 실행 계획:
      ${executionPlan || '(없음)'}
    `;
  }).join('\n----------------------------------\n');

  // 2. 시스템 프롬프트 구성
  const systemPrompt = `
# Role: Nexus AI Project Manager
당신은 사용자의 전체 프로젝트와 업무(Task) 상황을 꿰뚫어 보고 있는 유능한 AI PM입니다.

# Context (User's Tasks)
현재 사용자가 관리 중인 업무 목록은 다음과 같습니다.
특히 **[✅우선/달성됨]** 표시가 있는 완료 조건은 사용자가 이미 확인했거나 가장 중요하게 생각하는 기준이므로,
답변 시 이를 최우선으로 고려하고 반영해야 합니다.

${taskContext}

# Instruction
위 컨텍스트를 바탕으로 사용자의 질문에 답변하세요.
- 사용자의 질문이 특정 업무와 관련 있다면, 해당 업무의 상태, 완료 조건(특히 체크된 항목), 실행 계획을 구체적으로 언급하며 조언하세요.
- 업무 간의 연관성이나 일정 충돌 등이 보이면 선제적으로 경고하거나 제안하세요.
- 답변은 전문적이고 친절한 어조로 작성하세요.
  `;

  // 3. 채팅 세션 시작 및 메시지 전송
  try {
      // 1.5-flash or 2.0-flash 모델 사용 권장 (Smart Model)
      const model = genAI.getGenerativeModel({ model: AI_CONFIG.MODEL_SMART }); 
      
      const chat = model.startChat({
        history: [
          { role: 'user', parts: [{ text: systemPrompt }] },
          { role: 'model', parts: [{ text: '네, 사용자의 모든 업무 상황과 우선순위(체크된 완료조건 포함)를 숙지했습니다. 어떤 도움이 필요하신가요?' }] },
          ...history
        ]
      });

      const result = await chat.sendMessage(userMessage);
      const response = await result.response;
      return response.text();
  } catch (error: any) {
      console.error("❌ Chat with Task Context Error:", error);
      throw new Error("채팅 서비스 연결 실패: " + error.message);
  }
}

export default {
  draftTaskWithAI,
  generateSubtasksAI,
  generateAcceptanceCriteriaAI,
  generateSolutionDraftAI,
  recommendResourcesAI,
  chatWithGuide,
  generateInsights,
  analyzeTaskWithAI,
  startChatWithTaskContext // Export new function
};
