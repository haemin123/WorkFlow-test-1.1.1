import * as functions from "firebase-functions";
import { VertexAI } from "@google-cloud/vertexai";

// [CRITICAL FIX] Vertex AI Model Location
// Gemini 1.5 Pro/Flash models are primarily available in 'us-central1'.
// Even if the function runs in 'us-west1', we must query the model in 'us-central1'.
const project = process.env.GCLOUD_PROJECT || "my-vertex-demo-477402";
const location = "us-central1"; 

const vertex_ai = new VertexAI({ project: project, location: location });

// Cloud Function Region: us-west1 (Keep existing region)
export const vertexAIProxy = functions
    .region('us-west1')
    .runWith({
        timeoutSeconds: 120, 
        memory: "512MB"      
    })
    .https.onCall(async (data, context) => {
    
    // Default model
    const modelName = data.model || 'gemini-1.5-flash-001'; 
    const prompt = data.prompt;
    const history = data.history || [];
    const schema = data.schema || null;

    if (!prompt && history.length === 0) {
        throw new functions.https.HttpsError('invalid-argument', 'The function must be called with a "prompt" or "history".');
    }

    try {
        const generativeModel = vertex_ai.getGenerativeModel({
            model: modelName,
            generationConfig: {
                responseMimeType: schema ? "application/json" : "text/plain",
                responseSchema: schema
            }
        });

        let result;

        if (history.length > 0) {
            const chat = generativeModel.startChat({ history: history });
            const chatResult = await chat.sendMessage(prompt || "");
            const response = await chatResult.response;
            
            if (!response.candidates || response.candidates.length === 0) {
                 throw new Error("No candidates returned from Vertex AI");
            }
            result = response.candidates[0].content.parts[0].text;
        } else {
            const req = {
                contents: [{ role: 'user', parts: [{ text: prompt }] }],
            };
            const streamingResp = await generativeModel.generateContent(req);
            const response = await streamingResp.response;
            
            if (!response.candidates || response.candidates.length === 0) {
                 throw new Error("No candidates returned from Vertex AI");
            }
            result = response.candidates[0].content.parts[0].text;
        }

        return { result };

    } catch (error: any) {
        console.error("Vertex AI Detailed Error:", JSON.stringify(error));
        // Return clear error message to client
        throw new functions.https.HttpsError('internal', `Vertex AI Error: ${error.message || 'Unknown error'}`);
    }
});
