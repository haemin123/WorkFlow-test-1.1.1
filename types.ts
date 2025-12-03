export enum TaskStatus {
  REQUESTED = 'REQUESTED',
  CHECKED = 'CHECKED',
  WIP = 'WIP',
  // SENT Removed as per user request to merge into CHECKED
  FEEDBACK = 'FEEDBACK',
  DONE = 'DONE',
  CANCELLED = 'CANCELLED',
  ARCHIVED = 'ARCHIVED',
  TRASH = 'TRASH'
}

export enum Priority {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW'
}

// 'KNOWLEDGE' mode has been added for the Knowledge Hub feature
export type ViewMode = 'BOARD' | 'GEMINI' | 'INSIGHT' | 'SETTINGS' | 'ARCHIVE' | 'PROFILE' | 'KNOWLEDGE';

// Extended User Interface for Firestore Profile
export interface User {
  id: string; // auth.uid
  email: string;
  name: string;
  role: 'REQUESTER' | 'ASSIGNEE' | 'ADMIN'; // Added ADMIN
  avatar?: string; // Legacy field (might use profileImageUrl)
  profileImageUrl?: string; // New field for custom profile image
  
  // Profile Fields
  department?: string; // 본부
  team?: string;       // 팀
  position?: string;   // 직급
  jobTitle?: string;   // 직책
  
  createdAt?: number;
  updatedAt?: number;
}

export interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

export interface Resource {
    title: string;
    url: string;
    description?: string;
}

export interface AcceptanceCriterion {
  id: string;
  content: string;
  checked: boolean;
}

export interface AIAnalysis {
  strategy?: string;
  executionPlan?: Subtask[];
  learningResources?: Resource[];
  acceptanceCriteria?: AcceptanceCriterion[];
  solutionDraft?: string;
  lastUpdated: number;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  product: string;
  type: string;
  priority: Priority;
  status: TaskStatus;
  dueDate: string; // ISO string
  
  // Owner Info (Explicit)
  ownerUid: string;       // auth.currentUser.uid
  ownerEmail?: string;    
  
  // Assignee Info
  assigneeId: string;
  assigneeName?: string; 
  assigneeAvatar?: string; 
  
  requesterId: string;
  subtasks: Subtask[];
  aiAnalysis?: AIAnalysis;
  aiStatus?: 'GENERATING' | 'COMPLETED' | 'FAILED'; // New field for AI loading state
  
  createdAt?: number; 
  updatedAt?: number; 
  styleTag?: string; 
  
  // Legacy field support (userId was used as owner previously)
  userId?: string; 

  archived?: boolean; 
  inTrash?: boolean; 
  originalStatus?: TaskStatus;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: number;
}

// --- NEW TYPES FOR KNOWLEDGE HUB ---

export type ResourceType = 'video' | 'article' | 'document' | 'other';

export interface BasicInfo {
  title: string;
  summary: string;
  level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  tags: string[];
  author?: string | null;
  contentType: ResourceType;
}

export interface MetaData {
  duration?: number; // seconds
  language?: string;
  category?: string;
  subCategory?: string;
  uploadedAt?: string;
  department?: string | null;
}

export interface Chapter {
  title: string;
  timestamp: string;
  summary: string;
}

export interface SearchOptimization {
  keywords: string[];
  searchableText?: string;
  chapters: Chapter[];
}

export interface ManagementInfo {
  status: 'active' | 'draft' | 'archived';
  visibility: 'public' | 'team' | 'private';
  originalFileUrl?: string | null;
  thumbnailUrl?: string | null;
  fileSize?: number | null;
  lastUpdated: string;
}

export interface KnowledgeResource {
  id: string;
  basicInfo: BasicInfo;
  metadata: MetaData;
  searchOptimization: SearchOptimization;
  managementInfo: ManagementInfo;
}
