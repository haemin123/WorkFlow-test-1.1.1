import { getFunctions, httpsCallable } from "firebase/functions";
import { app } from "../firebaseConfig";
import { Task, AIAnalysis, Subtask, Priority, Resource, AcceptanceCriterion } from "../types";
import { AI_CONFIG } from "../constants";
import { PromptTemplates } from "./prompts";

// Initialize Cloud Functions (Region must match backend: us-west1)
const functions = getFunctions(app, "us-west1");
const vertexAIProxy = httpsCallable(functions, 'vertexAIProxy');

// --- Types for Schema Definition (Simplified for Client) ---
const Type = {
  STRING: "STRING",
  NUMBER: "NUMBER",
  INTEGER: "INTEGER",
  BOOLEAN: "BOOLEAN",
  ARRAY: "ARRAY",
  OBJECT: "OBJECT"
};

// Helper to call Backend Vertex AI
async function callVertexAI<T>(params: { 
    prompt: string, 
    schema?: any, 
    history?: any[], 
    model?: string 
}): Promise<T | string> {
    try {
        const result = await vertexAIProxy({
            model: params.model || AI_CONFIG.MODEL_SMART,
            prompt: params.prompt,
            schema: params.schema,
            history: params.history
        });
        
        const data = result.data as any;
        if (!data || !data.result) {
            throw new Error("AI response is empty");
        }
        
        const text = data.result;

        // If schema was provided, parse JSON
        if (params.schema) {
            // Clean up markdown code blocks if present
            const cleanText = text.replace(/```json\n?|\n?```/g, '').trim();
            return JSON.parse(cleanText) as T;
        }
        
        return text;
    } catch (error) {
        console.error("Vertex AI Proxy Error:", error);
        throw error;
    }
}

/**
 * Drafts 3 versions of professional tasks from a raw user input.
 */
export const draftTaskWithAI = async (rawInput: string): Promise<Partial<Task>[]> => {
  const prompt = PromptTemplates.draftTask(rawInput);

  const schema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING },
        description: { type: Type.STRING },
        priority: { type: Type.STRING, enum: ['HIGH', 'MEDIUM', 'LOW'] },
        product: { type: Type.STRING },
        type: { type: Type.STRING },
        styleTag: { type: Type.STRING }
      }
    }
  };

  const data = await callVertexAI<any[]>({ prompt, schema, model: AI_CONFIG.MODEL_FAST });
  
  if (!data || !Array.isArray(data)) throw new Error("Draft generation failed");

  return data.map(item => {
      let priority = Priority.MEDIUM;
      if (item.priority === 'HIGH') priority = Priority.HIGH;
      if (item.priority === 'LOW') priority = Priority.LOW;
      
      return {
          title: item.title,
          description: item.description,
          product: item.product,
          type: item.type,
          priority: priority,
          styleTag: item.styleTag 
      };
  });
};

/**
 * Analyzes a task to provide a strategy and learning resources.
 */
export const analyzeTaskWithAI = async (task: Task): Promise<AIAnalysis> => {
  const prompt = PromptTemplates.analyzeTask(task);

  const schema = {
    type: Type.OBJECT,
    properties: {
      strategy: { type: Type.STRING, description: "핵심 파악 사항과 실행 전략이 포함된 마크다운" },
      suggestedResources: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            url: { type: Type.STRING }
          }
        }
      }
    }
  };

  const data = await callVertexAI<any>({ prompt, schema });
  if (data) return { ...data, lastUpdated: Date.now() };
  throw new Error("Analysis failed");
};

/**
 * Generates a checklist of subtasks.
 */
export const generateSubtasksAI = async (task: Task): Promise<Omit<Subtask, 'id' | 'completed'>[]> => {
  const prompt = PromptTemplates.generateSubtasks(task);

  const schema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING }
      }
    }
  };

  const data = await callVertexAI<any[]>({ prompt, schema });
  return data || [];
};

/**
 * Generates Acceptance Criteria (DoD)
 */
export const generateAcceptanceCriteriaAI = async (task: Task): Promise<AcceptanceCriterion[]> => {
    const prompt = PromptTemplates.generateAcceptanceCriteria(task);
    const schema = {
        type: Type.ARRAY,
        items: { type: Type.STRING }
    };
    const rawData = await callVertexAI<string[]>({ prompt, schema });
    
    if (!rawData) return [];

    return rawData.map((content, idx) => ({
        id: `ac-${Date.now()}-${idx}`,
        content,
        checked: false
    }));
};

/**
 * Generates Solution Draft (Markdown)
 */
export const generateSolutionDraftAI = async (task: Task): Promise<string> => {
    const prompt = PromptTemplates.generateSolutionDraft(task);
    // Markdown response (no schema)
    const result = await callVertexAI<string>({ prompt });
    return typeof result === 'string' ? result : "";
};

/**
 * Generates Recommended Resources
 */
export const recommendResourcesAI = async (task: Task): Promise<Resource[]> => {
    const prompt = PromptTemplates.recommendResources(task);
    const schema = {
        type: Type.ARRAY,
        items: {
            type: Type.OBJECT,
            properties: {
                title: { type: Type.STRING },
                url: { type: Type.STRING },
                description: { type: Type.STRING }
            }
        }
    };
    const data = await callVertexAI<Resource[]>({ prompt, schema });
    return data || [];
};


/**
 * Chat with the AI guide about the specific task.
 */
export const chatWithGuide = async (history: {role: string, parts: {text: string}[]}[], message: string, contextTask: Task) => {
    // Construct history for backend
    const systemPrompt = PromptTemplates.chatGuideSystem(contextTask);
    
    // Backend expects history without system prompt usually, or we prepend it
    // Here we just send the message and history. 
    // Ideally, system instruction should be sent separately if backend supports it.
    // For now, let's prepend system prompt to history as user message if it's new chat
    
    const chatHistory = [
        {
            role: 'user',
            parts: [{ text: systemPrompt }]
        },
        {
            role: 'model',
            parts: [{ text: "네, 알겠습니다. 업무 진행을 도와드리겠습니다." }]
        },
        ...history
    ];

    const result = await callVertexAI<string>({ 
        prompt: message, 
        history: chatHistory 
    });
    
    return typeof result === 'string' ? result : "";
}

/**
 * General purpose streaming chat for Gemini Pro Page
 * Note: Streaming is harder with Cloud Functions onCall. 
 * We will use simple request/response for now.
 */
export const getGeminiChatStream = async (
    history: {role: string, parts: {text?: string, inlineData?: any}[]}[], 
    message: string,
    modelId: string = AI_CONFIG.MODEL_SMART,
    imageBase64?: string,
    imageMimeType?: string
) => {
    // Construct history
    const initialHistory = [
           {
                role: 'user',
                parts: [{ text: "당신은 Nexus AI 플랫폼의 지능형 어시스턴트 Gemini입니다. 사용자의 업무 생산성을 높이고, 창의적인 아이디어를 제공하며, 친절하고 전문적인 태도로 대화하세요. 한국어로 답변하세요." }]
            },
            {
                role: 'model',
                parts: [{ text: "반갑습니다! Nexus AI Gemini입니다. 무엇을 도와드릴까요?" }]
            },
            ...history
    ];

    // Handle Multimodal input (simplification: append image description to prompt if possible, 
    // or backend needs to handle inlineData. 
    // Current backend implementation in index.ts might need update for images.
    // For now, assume text only or backend handles it if passed correctly.)
    
    // We are using simple response, not stream, because onCall streaming is complex.
    // To mock the stream interface expected by UI:
    const result = await callVertexAI<string>({
        prompt: message,
        history: initialHistory,
        model: modelId
    });

    const text = typeof result === 'string' ? result : "";

    // Return an object that looks like a stream response for compatibility
    return {
        stream: (async function* () {
            yield { text: () => text };
        })()
    };
};

/**
 * Generate weekly insight for dashboard
 */
export const getWeeklyInsight = async (tasks: Task[], teamStats: any): Promise<string> => {
    const prompt = PromptTemplates.generateInsights(tasks, teamStats);
    const result = await callVertexAI<string>({ prompt });
    return typeof result === 'string' ? result : "인사이트를 생성할 수 없습니다.";
};
