import { GoogleGenerativeAI } from "@google/generative-ai";
import { Task, AIAnalysis, Subtask, Priority, Resource, AcceptanceCriterion } from "../types";
import { AI_CONFIG } from "../constants";
import { PromptTemplates } from "./prompts";
import { getSystemContext, getDoDContext } from "./contextData";

// --- Initialize Google Generative AI SDK ---
const API_KEY = "AIzaSyAZfKtZGcFEcUsOg-s3kXSTSeTp40pfUoI"; // Provided API Key

if (!API_KEY) {
    console.error("Gemini API Key is missing!");
}

const genAI = new GoogleGenerativeAI(API_KEY);

// Helper to get model
const getModel = (modelId: string = AI_CONFIG.MODEL_SMART, systemInstruction?: string) => {
    return genAI.getGenerativeModel({
        model: modelId,
        generationConfig: {
            temperature: 0.7,
        },
        // System Instruction is supported in newer models/SDKs
        systemInstruction: systemInstruction
    }, { apiVersion: 'v1beta' });
};

// --- Exported AI Functions (Using @google/generative-ai) ---

export const draftTaskWithAI = async (rawInput: string): Promise<Partial<Task>[]> => {
  const model = getModel(AI_CONFIG.MODEL_FAST, getSystemContext());
  const prompt = `${PromptTemplates.draftTask(rawInput)}\n\nIMPORTANT: Output ONLY valid JSON array.`;
  
  const result = await model.generateContent(prompt);
  const text = result.response.text();
  
  return parseJsonSafe<any[]>(text).map(item => ({
      title: item.title,
      description: item.description,
      product: item.product,
      type: item.type,
      priority: item.priority === 'HIGH' ? Priority.HIGH : item.priority === 'LOW' ? Priority.LOW : Priority.MEDIUM,
      styleTag: item.styleTag 
  }));
};

export const analyzeTaskWithAI = async (task: Task): Promise<AIAnalysis> => {
  const model = getModel(AI_CONFIG.MODEL_SMART);
  const prompt = `${PromptTemplates.analyzeTask(task)}\n\nIMPORTANT: Output ONLY valid JSON.`;
  
  const result = await model.generateContent(prompt);
  const data = parseJsonSafe<any>(result.response.text());
  
  return { ...data, lastUpdated: Date.now() };
};

export const generateSubtasksAI = async (task: Task): Promise<Omit<Subtask, 'id' | 'completed'>[]> => {
  const model = getModel(AI_CONFIG.MODEL_SMART);
  const prompt = `${PromptTemplates.generateSubtasks(task)}\n\nIMPORTANT: Output ONLY valid JSON array.`;
  
  const result = await model.generateContent(prompt);
  return parseJsonSafe<any[]>(result.response.text());
};

/**
 * Generates Acceptance Criteria (DoD) with RAG
 */
export const generateAcceptanceCriteriaAI = async (task: Task): Promise<AcceptanceCriterion[]> => {
    const model = getModel(AI_CONFIG.MODEL_SMART, getDoDContext());
    const prompt = `${PromptTemplates.generateAcceptanceCriteria(task)}\n\nIMPORTANT: Output ONLY valid JSON array of strings.`;

    const result = await model.generateContent(prompt);
    const rawData = parseJsonSafe<string[]>(result.response.text());

    return rawData.map((content, idx) => ({
        id: `ac-${Date.now()}-${idx}`,
        content,
        checked: false
    }));
};

export const generateSolutionDraftAI = async (task: Task): Promise<string> => {
    const model = getModel(AI_CONFIG.MODEL_SMART);
    const result = await model.generateContent(PromptTemplates.generateSolutionDraft(task));
    return result.response.text();
};

export const recommendResourcesAI = async (task: Task): Promise<Resource[]> => {
    const model = getModel(AI_CONFIG.MODEL_SMART);
    const prompt = `${PromptTemplates.recommendResources(task)}\n\nIMPORTANT: Output ONLY valid JSON array.`;
    
    const result = await model.generateContent(prompt);
    return parseJsonSafe<Resource[]>(result.response.text());
};

/**
 * Chat with Guide
 */
export const chatWithGuide = async (history: {role: string, parts: {text: string}[]}[], message: string, contextTask: Task) => {
    const systemInstruction = `${getSystemContext()}\n${PromptTemplates.chatGuideSystem(contextTask)}`;
    const model = getModel(AI_CONFIG.MODEL_SMART, systemInstruction);
    
    // Map history to SDK format (User/Model)
    const chat = model.startChat({
        history: history.map(h => ({
            role: h.role === 'assistant' ? 'model' : h.role, // Ensure 'model' role
            parts: h.parts
        }))
    });

    const result = await chat.sendMessage(message);
    return result.response.text();
}

// --- Helper: Safe JSON Parser ---
function parseJsonSafe<T>(text: string): T {
    try {
        const cleanText = text.replace(/```json\n?|```/g, '').trim();
        const firstOpen = cleanText.search(/[{[]/);
        const lastClose = cleanText.search(/[}\]]$/);
        
        if (firstOpen !== -1 && lastClose !== -1) {
            return JSON.parse(cleanText.substring(firstOpen, lastClose + 1)) as T;
        }
        return JSON.parse(cleanText) as T;
    } catch (e) {
        console.error("JSON Parse Failed", e);
        throw new Error("AI Response is not valid JSON");
    }
}

// --- Mock Stream ---
export const getGeminiChatStream = async (
    history: any[], 
    message: string,
    modelId: string
) => {
    const model = getModel(modelId);
    const result = await model.generateContent(message);
    const text = result.response.text();
    return { stream: (async function* () { yield { text: () => text }; })() };
};

export const getWeeklyInsight = async (tasks: Task[], teamStats: any): Promise<string> => {
    const model = getModel(AI_CONFIG.MODEL_SMART);
    const result = await model.generateContent(PromptTemplates.generateInsights(tasks, teamStats));
    return result.response.text();
};
