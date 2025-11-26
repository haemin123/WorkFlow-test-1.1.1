"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vertexAIProxy = void 0;
const functions = require("firebase-functions");
const vertexai_1 = require("@google-cloud/vertexai");
// Initialize Vertex AI with Project and Location
const project = process.env.GCLOUD_PROJECT || "my-vertex-demo-477402";
const location = "us-west1"; // Changed to us-west1
const vertex_ai = new vertexai_1.VertexAI({ project: project, location: location });
// Cloud Function to proxy requests to Vertex AI
// Set the region to us-west1
exports.vertexAIProxy = functions.region('us-west1').https.onCall(async (data, context) => {
    // Optional: Check authentication
    // if (!context.auth) {
    //     throw new functions.https.HttpsError('unauthenticated', 'The function must be called while authenticated.');
    // }
    const modelName = data.model || 'gemini-1.5-pro-preview-0409'; // Default model
    const prompt = data.prompt;
    const history = data.history || []; // For chat
    const schema = data.schema || null; // For JSON output
    if (!prompt && history.length === 0) {
        throw new functions.https.HttpsError('invalid-argument', 'The function must be called with a "prompt" or "history".');
    }
    try {
        // Instantiate the model
        const generativeModel = vertex_ai.getGenerativeModel({
            model: modelName,
            generationConfig: {
                responseMimeType: schema ? "application/json" : "text/plain",
                responseSchema: schema
            }
        });
        let result;
        if (history.length > 0) {
            // Chat mode
            const chat = generativeModel.startChat({
                history: history
            });
            const chatResult = await chat.sendMessage(prompt || "");
            const response = await chatResult.response;
            if (!response.candidates || response.candidates.length === 0) {
                throw new Error("No candidates returned from Vertex AI");
            }
            result = response.candidates[0].content.parts[0].text;
        }
        else {
            // Single generation mode
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
    }
    catch (error) {
        console.error("Vertex AI Error:", error);
        throw new functions.https.HttpsError('internal', error.message || 'An error occurred with Vertex AI.');
    }
});
//# sourceMappingURL=index.js.map