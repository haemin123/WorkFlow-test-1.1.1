// services/geminiService.ts (최종 개선 버전 - 프롬프트 엔지니어링 적용)
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

// Vite 환경변수 로딩
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
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
      console.error("❌ Gemini API Key is missing. Please check .env file.");
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
    throw new Error(`AI 생성 실패: ${error.message || '알 수 없는 오류'}`);
  }
}

/**
 * JSON 파싱 헬퍼 (마크다운 코드 블록 제거)
 */
function parseJSONResponse(text: string): any {
  try {
    // 마크다운 코드 블록 제거
    const cleaned = text
      .replace(/```json\n?/g, '')
      .replace(/```\n?/g, '')
      .trim();
    
    return JSON.parse(cleaned);
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

  console.warn(`⚠️ [Array Length Mismatch] Expected ${expectedLength}, got ${arr.length}`);

  if (arr.length < expectedLength) {
    // 부족하면 기본 항목으로 채우기
    while (arr.length < expectedLength) {
      arr.push(defaultItem);
    }
  } else {
    // 초과하면 자르기
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
  // 프롬프트 빌드 (지식 베이스 + Few-Shot 포함)
  const prompt = await buildExecutionPlanPrompt(task);
  
  // AI 호출
  const response = await callGeminiAPI(prompt, AI_CONFIG.MODEL_SMART, {
    temperature: 0.7,  // 창의성과 일관성의 균형
    maxTokens: 1000
  });

  // JSON 파싱
  const steps = parseJSONResponse(response);

  // 4-6개 범위 검증
  if (steps.length < 4 || steps.length > 6) {
    console.warn(`⚠️ [Step Count] Expected 4-6, got ${steps.length}`);
  }

  // Subtask 형식으로 변환
  return steps.map((step: any, index: number) => ({
    id: `ep-${Date.now()}-${index}`,
    title: step.title || step,  // step이 string일 수도 있음
    completed: false
  }));
}

// ============================================
// 3. 완료 조건 (Definition of Done)
// ============================================

export async function generateAcceptanceCriteriaAI(task: Task): Promise<string[]> {
  // 프롬프트 빌드 (지식 베이스 + Few-Shot 포함)
  const prompt = await buildDoDPrompt(task);
  
  // AI 호출 (더 결정적인 응답을 위해 temperature 낮춤)
  const response = await callGeminiAPI(prompt, AI_CONFIG.MODEL_SMART, {
    temperature: 0.5,
    maxTokens: 1000
  });

  // JSON 파싱
  let criteria = parseJSONResponse(response);

  // 정확히 7개로 조정
  const defaultCriteria = [
    '기능 요구사항을 충족합니다',
    '단위 테스트 및 통합 테스트를 통과했습니다',
    '코드 리뷰가 완료되고 승인되었습니다',
    '관련 문서가 업데이트되었습니다',
    '스테이징 환경에서 검증되었습니다',
    '보안 스캔을 통과했습니다',
    '이해관계자의 최종 승인을 받았습니다'
  ];

  criteria = ensureArrayLength(
    criteria,
    7,
    defaultCriteria[criteria.length % defaultCriteria.length]
  );

  console.log(`✅ [DoD Generated] ${criteria.length} criteria`);

  return criteria;
}

// ============================================
// 4. 솔루션 초안 (Solution Draft)
// ============================================

export async function generateSolutionDraftAI(task: Task): Promise<string> {
  // 프롬프트 빌드
  const prompt = await buildSolutionDraftPrompt(task);
  
  // AI 호출 (창의적인 솔루션을 위해 temperature 높임)
  const response = await callGeminiAPI(prompt, AI_CONFIG.MODEL_SMART, {
    temperature: 0.8,
    maxTokens: 2000
  });

  console.log(`✅ [Solution Draft] ${response.length} chars`);

  return response;
}

// ============================================
// 5. 학습 자료 추천 (Resource Recommender)
// ============================================

interface Resource {
  title: string;
  url: string;
  description: string;
}

export async function recommendResourcesAI(task: Task): Promise<Resource[]> {
  // 프롬프트 빌드
  const prompt = await buildResourceRecommendationPrompt(task);
  
  // AI 호출
  const response = await callGeminiAPI(prompt, AI_CONFIG.MODEL_FAST, {
    temperature: 0.6,
    maxTokens: 1000
  });

  // JSON 파싱
  const resources = parseJSONResponse(response);

  // 정확히 3개로 조정
  const defaultResource: Resource = {
    title: '관련 기술 문서',
    url: 'https://developer.mozilla.org',
    description: '기본 웹 기술 참고 자료'
  };

  const finalResources = ensureArrayLength(resources, 3, defaultResource);

  console.log(`✅ [Resources] ${finalResources.length} recommendations`);

  return finalResources;
}

// ============================================
// 6. AI 가이드 채팅
// ============================================

interface ChatHistory {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export async function chatWithGuide(
  history: ChatHistory[],
  userMessage: string,
  contextTask: Task
): Promise<string> {
  // 시스템 프롬프트 생성
  const systemPrompt = buildChatSystemPrompt(contextTask);

  // 채팅 세션 시작
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

  // 메시지 전송
  const result = await chat.sendMessage(userMessage);
  const response = await result.response;
  
  console.log(`💬 [Chat] User: "${userMessage.substring(0, 50)}..." → Response: ${response.text().length} chars`);

  return response.text();
}

// ============================================
// 7. 팀 인사이트 분석 (Team Insights)
// ============================================

interface TeamStats {
  total: number;
  completionRate: number;
  inProgress: number;
  overdue: number;
  busiestMember: string;
}

export async function generateInsights(
  tasks: Task[],
  teamStats: TeamStats
): Promise<string> {
  const prompt = `
# 시스템 역할 (System Role)

당신은 데이터 기반으로 팀의 성과를 분석하는 AI 전문가입니다.

[당신의 역할]
- 프로젝트 데이터를 분석하여 핵심 인사이트 도출
- 팀 리더가 실행 가능한 조언 제공
- 긍정적이면서도 현실적인 피드백

# 데이터 분석 (Data Analysis)

다음 프로젝트 데이터를 분석하여, 팀 리더에게 제공할 **주간 핵심 인사이트**를 2~3문장으로 요약해 주세요.

## 팀 통계
- 전체 업무 수: ${teamStats.total}
- 완료율: ${teamStats.completionRate}%
- 진행 중 업무: ${teamStats.inProgress}
- 마감 기한 초과: ${teamStats.overdue}
- 업무가 가장 많은 팀원: ${teamStats.busiestMember}

# 제약 조건 (Constraints)

1. 현재 팀의 **긍정적인 흐름**을 먼저 언급하세요 (예: 완료율이 높음, 진행이 원활함)
2. **주의가 필요한 부분**이나 **리스크**(예: 특정 인원 과부하, 마감 초과)를 부드럽게 지적하세요
3. 구체적인 **액션 아이템** 하나를 제안하세요
4. 전문적이면서도 격려하는 톤으로 작성하세요
5. 답변은 JSON이 아닌 **일반 텍스트**로 제공하세요
6. 2-3문장으로 간결하게 작성하세요

# 출력 형식 (Output Format)

일반 텍스트로 2-3문장의 인사이트를 제공하세요.
  `;

  const response = await callGeminiAPI(prompt, AI_CONFIG.MODEL_FAST, {
    temperature: 0.7,
    maxTokens: 500
  });

  console.log(`📊 [Insights] Generated: ${response.length} chars`);

  return response.trim();
}

// ============================================
// 8. 분석 전략 (전체 AI 분석) - 통합 함수
// ============================================

/**
 * 업무에 대한 전체 AI 분석 수행
 * 실행 전략 + DoD + 솔루션 초안 + 학습 자료를 한 번에 생성
 */
export async function analyzeTaskWithAI(task: Task): Promise<{
  executionPlan: Subtask[];
  acceptanceCriteria: string[];
  solutionDraft?: string;
  learningResources?: Resource[];
}> {
  console.log(`🔍 [Full Analysis] Starting for task: ${task.title}`);

  try {
    // 병렬로 모든 AI 분석 수행
    const [executionPlan, acceptanceCriteria, solutionDraft, learningResources] = await Promise.all([
      generateSubtasksAI(task),
      generateAcceptanceCriteriaAI(task),
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
// Export
// ============================================

export default {
  draftTaskWithAI,
  generateSubtasksAI,
  generateAcceptanceCriteriaAI,
  generateSolutionDraftAI,
  recommendResourcesAI,
  chatWithGuide,
  generateInsights,
  analyzeTaskWithAI
};