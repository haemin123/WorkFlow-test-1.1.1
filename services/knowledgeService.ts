import { 
    collection, 
    getDocs, 
    setDoc, 
    deleteDoc, 
    doc, 
    query, 
    orderBy 
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { KnowledgeResource } from "../types";
import { analyzeResourceWithAI } from "./geminiService";

const COLLECTION_NAME = 'knowledge_resources';

export const knowledgeService = {
    // Read
    getAllResources: async (): Promise<KnowledgeResource[]> => {
        try {
            const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
            const querySnapshot = await getDocs(q);
            
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as KnowledgeResource[];
        } catch (error) {
            console.error("Error fetching knowledge resources:", error);
            return [];
        }
    },

    // Create (AI Analysis -> Save)
    addResourceFromUrl: async (url: string): Promise<KnowledgeResource> => {
        // 1. AI 분석
        const analysisData = await analyzeResourceWithAI(url);
        
        // 2. ID 생성
        const newId = crypto.randomUUID();

        // 3. 데이터 구성
        const newResource: KnowledgeResource = {
            id: newId,
            ...analysisData,
            createdAt: Date.now()
        };

        // 4. Firestore 저장
        try {
            await setDoc(doc(db, COLLECTION_NAME, newId), newResource);
            return newResource;
        } catch (error) {
            console.error("Error adding knowledge resource:", error);
            throw error;
        }
    },
    
    // Delete
    deleteResource: async (id: string): Promise<void> => {
        try {
            await deleteDoc(doc(db, COLLECTION_NAME, id));
        } catch (error) {
            console.error("Error deleting knowledge resource:", error);
            throw error;
        }
    }
};
