import { Task, TaskStatus } from "../types";
import { db } from "../firebaseConfig";
import { 
  collection, 
  doc, 
  getDocs, 
  setDoc, 
  updateDoc, 
  deleteDoc,
  query,
  orderBy,
  where
} from "firebase/firestore";

const COLLECTION_NAME = 'tasks';

// Helper to remove undefined fields because Firestore doesn't support them
const sanitizeForFirestore = (data: any) => {
  return JSON.parse(JSON.stringify(data));
};

export const taskService = {
  getAllTasks: async (userId?: string): Promise<Task[]> => {
    try {
      let q;
      if (userId) {
          q = query(
            collection(db, COLLECTION_NAME), 
            where('userId', '==', userId),
            orderBy('createdAt', 'desc')
          );
      } else {
          q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
      }
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => doc.data() as Task);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      return [];
    }
  },

  createTask: async (task: Task): Promise<Task> => {
    const newTask = { 
      ...task, 
      createdAt: Date.now(), 
      updatedAt: Date.now() 
    };
    // Ensure no undefined values
    const sanitizedTask = sanitizeForFirestore(newTask);
    
    try {
      await setDoc(doc(db, COLLECTION_NAME, newTask.id), sanitizedTask);
      return newTask;
    } catch (error) {
      console.error("Error creating task:", error);
      throw error;
    }
  },

  updateTask: async (updatedTask: Task): Promise<Task> => {
    const newVersion = { ...updatedTask, updatedAt: Date.now() };
    const sanitizedVersion = sanitizeForFirestore(newVersion);

    try {
      await updateDoc(doc(db, COLLECTION_NAME, updatedTask.id), sanitizedVersion);
      return newVersion;
    } catch (error) {
       console.error("Error updating task:", error);
       throw error;
    }
  },

  deleteTask: async (taskId: string): Promise<void> => {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
      throw error;
    }
  },

  updateStatus: async (taskId: string, status: TaskStatus): Promise<Task> => {
    try {
      const taskRef = doc(db, COLLECTION_NAME, taskId);
      await updateDoc(taskRef, { status, updatedAt: Date.now() });
      return { id: taskId, status } as any; 
    } catch (error) {
      console.error("Error updating status:", error);
      throw error;
    }
  },

  // Export data as JSON file (Helper)
  exportTasks: async (): Promise<void> => {
    const tasks = await taskService.getAllTasks();
    const dataStr = JSON.stringify(tasks, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `baro-ai-tasks-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
};
