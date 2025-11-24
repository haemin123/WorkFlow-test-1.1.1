
export enum TaskStatus {
  REQUESTED = 'REQUESTED',
  CHECKED = 'CHECKED',
  WIP = 'WIP',
  SENT = 'SENT',
  FEEDBACK = 'FEEDBACK',
  DONE = 'DONE',
  CANCELLED = 'CANCELLED'
}

export enum Priority {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW'
}

export type ViewMode = 'BOARD' | 'GEMINI' | 'INSIGHT' | 'SETTINGS';

export interface User {
  id: string;
  name: string;
  role: 'REQUESTER' | 'ASSIGNEE';
  avatar?: string;
  email?: string; 
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
  // Legacy field - might migrate later
  strategy?: string;
  
  // New Intelligent Modal Fields
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
  assigneeId: string;
  requesterId: string;
  subtasks: Subtask[];
  aiAnalysis?: AIAnalysis;
  createdAt?: number; // Added for DB sorting
  updatedAt?: number; // Added for DB syncing
  styleTag?: string; // Added for AI Draft UI context
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: number;
}
