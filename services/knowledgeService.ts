// services/knowledgeService.ts
import { KnowledgeResource } from "../types"; // Make sure this path is correct
import { analyzeResourceAI } from "./geminiService"; // Make sure this path is correct

// In-memory database for simplicity
let resources: KnowledgeResource[] = [
    // You can add some initial data for testing if you want
    {
        id: `kr-${Date.now()}-1`,
        basicInfo: {
            title: 'React 19: The New Features',
            summary: 'A deep dive into the new React Compiler, Actions, and other features coming in React 19.',
            level: 'INTERMEDIATE',
            tags: ['React', 'JavaScript', 'Frontend'],
            author: 'React Team',
            contentType: 'article',
        },
        metadata: {
            category: '개발',
            subCategory: 'Frontend',
            uploadedAt: new Date().toISOString(),
            department: 'R&D',
            duration: 0,
            language: 'en',
        },
        searchOptimization: {
            keywords: ['React 19', 'React Compiler', 'Actions', 'useOptimistic', 'useFormStatus'],
            searchableText: 'This article covers the upcoming features in React 19, focusing on the performance improvements from the new compiler and the new hooks for managing forms and server actions.',
            chapters: [],
        },
        managementInfo: {
            status: 'active',
            visibility: 'team',
            originalFileUrl: 'https://react.dev/blog/2024/04/25/react-19',
            thumbnailUrl: null,
            fileSize: null,
            lastUpdated: new Date().toISOString(),
        },
    }
];

class KnowledgeService {
  /**
   * Fetches all knowledge resources.
   */
  async getResources(): Promise<KnowledgeResource[]> {
    // In a real app, this would fetch from a server.
    // Here, we just return a sorted copy of our in-memory array.
    return [...resources].sort((a, b) => 
        new Date(b.metadata.uploadedAt).getTime() - new Date(a.metadata.uploadedAt).getTime()
    );
  }

  /**
   * Analyzes a URL, creates a new resource, and adds it to our list.
   */
  async addResourceFromUrl(url: string): Promise<KnowledgeResource> {
    console.log(`[KnowledgeService] Starting analysis for URL: ${url}`);
    
    // 1. Call the AI service to get structured data from the URL
    const analysisResult = await analyzeResourceAI(url);

    // 2. Format the AI response into our KnowledgeResource data structure
    const newResource: KnowledgeResource = {
      id: `kr-${Date.now()}`,
      ...analysisResult, // The AI result should match the structure
      // Ensure critical fields from the analysis are correctly placed
      basicInfo: {
        ...analysisResult.basicInfo,
        contentType: analysisResult.basicInfo.contentType || (url.includes('youtube.com') ? 'video' : 'article'),
      },
      managementInfo: {
          ...analysisResult.managementInfo,
          originalFileUrl: url,
          lastUpdated: new Date().toISOString(),
      },
      metadata: {
        ...analysisResult.metadata,
        uploadedAt: new Date().toISOString(),
      }
    };

    // 3. Add the new resource to the beginning of our list
    resources.unshift(newResource);

    console.log(`[KnowledgeService] Successfully added new resource: ${newResource.basicInfo.title}`);
    return newResource;
  }

  /**
   * Deletes a resource by its ID.
   */
  async deleteResource(resourceId: string): Promise<void> {
    const initialLength = resources.length;
    resources = resources.filter(r => r.id !== resourceId);
    
    if (resources.length < initialLength) {
        console.log(`[KnowledgeService] Deleted resource with ID: ${resourceId}`);
    } else {
        console.warn(`[KnowledgeService] Could not find resource with ID to delete: ${resourceId}`);
    }
    // In a real app, you'd return a success/fail status.
  }
}

// Export a singleton instance of the service
export const knowledgeService = new KnowledgeService();
