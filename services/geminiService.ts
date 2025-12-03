// services/geminiService.ts (Updated with Knowledge Hub Support)
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Task, Subtask, KnowledgeResource } from '../types';
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

// Securely get API Key from environment variables
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  console.error("❌ VITE_GEMINI_API_KEY is not set in your .env file.");
  // The app handles this gracefully in callGeminiAPI
}

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
    tools?: any[]; // Added support for tools (Grounding)
  }
): Promise<string> {
  if (!API_KEY) {
      console.error("❌ Gemini API Key is missing.");
      throw new Error("API Key가 설정되지 않았습니다. .env 파일에 VITE_GEMINI_API_KEY를 추가하세요.");
  }

  try {
    // 프롬프트 크기 최적화 (일반 텍스트만)
    const optimizedPrompt = optimizePromptSize(prompt, 8000);
    
    const model = genAI.getGenerativeModel({ 
      model: modelName,
      generationConfig: {
        temperature: options?.temperature ?? 0.7,
        maxOutputTokens: options?.maxTokens ?? AI_CONFIG.MAX_TOKENS,
        responseMimeType: options?.tools ? "application/json" : undefined // JSON mode for structured output
      },
      tools: options?.tools
    });

    const result = await model.generateContent(optimizedPrompt);
    const response = await result.response;
    return response.text();
  } catch (error: any) {
    console.error('❌ [Gemini API Error]', error);
    // ... Error handling logic same as before ...
    let errorMessage = error.message || '알 수 없는 오류';
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

// ... ensureArrayLength ...
function ensureArrayLength<T>(arr: T[], expectedLength: number, defaultItem: T): T[] {
  if (!Array.isArray(arr)) return Array(expectedLength).fill(defaultItem);
  if (arr.length === expectedLength) return arr;
  if (arr.length < expectedLength) {
    while (arr.length < expectedLength) arr.push(defaultItem);
  } else {
    arr = arr.slice(0, expectedLength);
  }
  return arr;
}

// ... Existing Functions (draftTaskWithAI, generateSubtasksAI, etc.) ...
// (These remain unchanged, included implicitly by file overwrite logic but need to be present)
// For brevity, I'm pasting the FULL content with the NEW additions.

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

export async function generateSubtasksAI(task: Task): Promise<Subtask[]> {
  const prompt = await buildExecutionPlanPrompt(task);
  const response = await callGeminiAPI(prompt, AI_CONFIG.MODEL_SMART, { temperature: 0.7, maxTokens: 1000 });
  const steps = parseJSONResponse(response);
  return steps.map((step: any, index: number) => ({ id: `ep-${Date.now()}-${index}`, title: step.title || step, completed: false }));
}

export async function generateAcceptanceCriteriaAI(task: Task): Promise<any[]> {
    const prompt = await buildDoDPrompt(task);
    const response = await callGeminiAPI(prompt, AI_CONFIG.MODEL_SMART, { temperature: 0.5, maxTokens: 1000 });
    let criteria = parseJSONResponse(response);
    if (!Array.isArray(criteria)) criteria = []; 
    return criteria.map((item: any, index: number) => {
      const textContent = typeof item === 'string' ? item : (item.content || item.text || item.description || '내용 없음');
      return { id: `ac-${Date.now()}-${index}`, content: textContent, checked: false };
    });
}

export async function generateSolutionDraftAI(task: Task): Promise<string> {
  const prompt = await buildSolutionDraftPrompt(task);
  return await callGeminiAPI(prompt, AI_CONFIG.MODEL_SMART, { temperature: 0.8, maxTokens: 2000 });
}

export async function recommendResourcesAI(task: Task): Promise<Resource[]> {
  const prompt = await buildResourceRecommendationPrompt(task);
  const response = await callGeminiAPI(prompt, AI_CONFIG.MODEL_FAST, { temperature: 0.6, maxTokens: 1000 });
  const resources = parseJSONResponse(response);
  const defaultResource: Resource = { title: '관련 기술 문서', url: 'https://developer.mozilla.org', description: '기본 웹 기술 참고 자료' };
  return ensureArrayLength(resources, 3, defaultResource);
}

export async function chatWithGuide(history: ChatHistory[], userMessage: string, contextTask: Task): Promise<string> {
  const systemPrompt = buildChatSystemPrompt(contextTask);
  const chat = genAI.getGenerativeModel({ model: AI_CONFIG.MODEL_FAST }).startChat({
    history: [{ role: 'user', parts: [{ text: systemPrompt }] }, { role: 'model', parts: [{ text: '네, 해당 업무에 대해 도와드리겠습니다. 무엇이 궁금하신가요?' }] }, ...history]
  });
  const result = await chat.sendMessage(userMessage);
  const response = await result.response;
  return response.text();
}

export async function generateInsights(tasks: Task[], teamStats: any): Promise<string> {
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
  const response = await callGeminiAPI(prompt, AI_CONFIG.MODEL_FAST, { temperature: 0.7, maxTokens: 500 });
  return response.trim();
}

export async function analyzeTaskWithAI(task: Task): Promise<{ executionPlan: Subtask[]; acceptanceCriteria: string[]; solutionDraft?: string; learningResources?: Resource[]; }> {
  console.log(`🔍 [Full Analysis] Starting for task: ${task.title}`);
  try {
    const [executionPlan, acceptanceCriteria, solutionDraft, learningResources] = await Promise.all([
      generateSubtasksAI(task),
      generateAcceptanceCriteriaAI(task).then(res => res.map(r => r.content)), 
      generateSolutionDraftAI(task).catch(() => undefined),
      recommendResourcesAI(task).catch(() => undefined)
    ]);
    console.log(`✅ [Full Analysis] Complete`);
    return { executionPlan, acceptanceCriteria, solutionDraft, learningResources };
  } catch (error) {
    console.error(`❌ [Full Analysis] Failed`, error);
    throw error;
  }
}

export async function startChatWithTaskContext(history: ChatHistory[], userMessage: string, tasks: Task[]): Promise<string> {
  const taskContext = tasks.map((t, index) => {
    const checkedCriteria = t.aiAnalysis?.acceptanceCriteria?.filter((ac: any) => ac.checked).map((ac: any) => `- [✅우선/달성됨] ${ac.content}`).join('\n      ');
    const otherCriteria = t.aiAnalysis?.acceptanceCriteria?.filter((ac: any) => !ac.checked).map((ac: any) => `- ${ac.content}`).join('\n      ');
    const executionPlan = t.aiAnalysis?.executionPlan?.map((ep: any) => `- ${ep.title} (${ep.completed ? '완료' : '진행전'})`).join('\n      ');
    return `[TASK #${index + 1}] ${t.title}\n    - 상태: ${t.status} | 우선순위: ${t.priority} | 마감일: ${t.dueDate}\n    - 담당자: ${t.assigneeName || '미지정'}\n    - 설명: ${t.description}\n    - 완료 조건 (DoD) - 체크박스(✅) 항목 우선 반영:\n      ${checkedCriteria || ''}\n      ${otherCriteria || ''}\n    - 실행 계획:\n      ${executionPlan || '(없음)'}`;
  }).join('\n----------------------------------\n');
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
  try {
      const model = genAI.getGenerativeModel({ model: AI_CONFIG.MODEL_SMART }); 
      const chat = model.startChat({
        history: [{ role: 'user', parts: [{ text: systemPrompt }] }, { role: 'model', parts: [{ text: '네, 사용자의 모든 업무 상황과 우선순위(체크된 완료조건 포함)를 숙지했습니다. 어떤 도움이 필요하신가요?' }] }, ...history]
      });
      const result = await chat.sendMessage(userMessage);
      const response = await result.response;
      return response.text();
  } catch (error: any) {
      console.error("❌ Chat with Task Context Error:", error);
      throw new Error("채팅 서비스 연결 실패: " + error.message);
  }
}

// ============================================
// 10. Knowledge Hub - URL 분석 (NEW)
// ============================================

// Helper: YouTube Video ID 추출
function extractYouTubeVideoId(url: string): string | null {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

const analyzeResourcePrompt = (url: string, videoId?: string | null) => {
  const searchTarget = videoId ? `site:youtube.com "${videoId}"` : url;

  return `
    당신은 지식관리(KM) 시스템을 위한 콘텐츠 분석 AI입니다.
    제공된 URL의 콘텐츠를 분석하여 구조화된 JSON 데이터를 추출하세요.

    [TARGET URL]
    ${url}
    
    [CONTEXT]
    Search Query: ${searchTarget}
    Video ID: ${videoId || 'N/A'}
    
    [INSTRUCTIONS]
    1. Google Search 도구를 사용하여 해당 URL의 제목, 내용, 자막(영상인 경우), 메타데이터를 수집하세요.
    2. 영상의 경우 챕터(타임스탬프) 정보를 반드시 추출하거나 재구성하세요.
    3. 반드시 아래 JSON 스키마를 준수하여 응답하세요. (Markdown 포맷 제외, 순수 JSON 문자열만 반환)

    [JSON SCHEMA]
    {
      "basicInfo": {
        "title": "제목 (최대 50자)",
        "summary": "핵심 요약 (1-2문장)",
        "level": "BEGINNER | INTERMEDIATE | ADVANCED",
        "tags": ["태그1", "태그2", ...],
        "author": "작성자/채널명",
        "contentType": "video | article"
      },
      "metadata": {
        "duration": 0, // 초 단위 숫자 (없으면 0)
        "category": "카테고리 (예: 개발, 디자인)",
        "subCategory": "세부 카테고리",
        "uploadedAt": "ISO 8601 Date String"
      },
      "searchOptimization": {
        "keywords": ["키워드1", "키워드2", ...],
        "chapters": [
          { "title": "챕터명", "timestamp": "00:00", "summary": "내용" }
        ]
      },
      "managementInfo": {
        "status": "active",
        "visibility": "team",
        "originalFileUrl": "${url}",
        "lastUpdated": "ISO 8601 Date String"
      }
    }
  `;
};

export const analyzeResourceWithAI = async (url: string): Promise<Omit<KnowledgeResource, 'id' | 'createdAt'>> => {
    const videoId = extractYouTubeVideoId(url);
    const prompt = analyzeResourcePrompt(url, videoId);

    try {
        // Use gemini-2.0-flash-exp (or gemini-1.5-pro) which supports search/tools if configured
        // Note: For actual Google Search Grounding, specific models and paid tier might be needed.
        // Falling back to standard generation if tools fail, or assuming model has internal knowledge.
        
        // For this demo environment, we use the configured smart model.
        // If Google Search tool is not available on this key/model, it will rely on training data.
        const modelName = AI_CONFIG.MODEL_SMART; 

        // Note: Tools configuration requires specific API setup. 
        // We will try to call it without explicit 'tools' config first to avoid 400 errors if not enabled.
        // If you have search enabled, uncomment tools in callGeminiAPI options.
        
        const responseText = await callGeminiAPI(prompt, modelName, {
            temperature: 0.3,
            maxTokens: 2000,
            // tools: [{ googleSearch: {} }] // Uncomment if key supports it
        });

        const data = parseJSONResponse(responseText);
        return data;
    } catch (e) {
        console.error("AI Analysis Failed", e);
        throw e;
    }
};

export default {
  draftTaskWithAI,
  generateSubtasksAI,
  generateAcceptanceCriteriaAI,
  generateSolutionDraftAI,
  recommendResourcesAI,
  chatWithGuide,
  generateInsights,
  analyzeTaskWithAI,
  startChatWithTaskContext,
  analyzeResourceWithAI // Export
};
