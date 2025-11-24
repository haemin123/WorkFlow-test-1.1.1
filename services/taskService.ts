import { Task, TaskStatus, Priority } from "../types";
import { INITIAL_TASKS } from "../constants";

const STORAGE_KEY = 'nexus_ai_tasks';

const loadTasksFromStorage = (): Task[] => {
  if (typeof window === 'undefined') return [...INITIAL_TASKS];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [...INITIAL_TASKS];
  } catch (error) {
    console.error("Failed to load tasks from storage:", error);
    return [...INITIAL_TASKS];
  }
};

let memoryTasks: Task[] = loadTasksFromStorage();

const saveTasksToStorage = (tasks: Task[]) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Failed to save tasks to storage:", error);
  }
};

export const taskService = {
  getAllTasks: async (): Promise<Task[]> => {
    memoryTasks = loadTasksFromStorage();
    return new Promise((resolve) => {
      setTimeout(() => resolve([...memoryTasks]), 300);
    });
  },

  createTask: async (task: Task): Promise<Task> => {
    const newTask = { 
      ...task, 
      createdAt: Date.now(), 
      updatedAt: Date.now() 
    };
    memoryTasks = [...memoryTasks, newTask];
    saveTasksToStorage(memoryTasks);
    return newTask;
  },

  updateTask: async (updatedTask: Task): Promise<Task> => {
    const taskIndex = memoryTasks.findIndex(t => t.id === updatedTask.id);
    if (taskIndex > -1) {
      const newVersion = { ...updatedTask, updatedAt: Date.now() };
      memoryTasks[taskIndex] = newVersion;
      saveTasksToStorage(memoryTasks);
      return newVersion;
    }
    throw new Error("Task not found");
  },

  deleteTask: async (taskId: string): Promise<void> => {
    memoryTasks = memoryTasks.filter(t => t.id !== taskId);
    saveTasksToStorage(memoryTasks);
  },

  updateStatus: async (taskId: string, status: TaskStatus): Promise<Task> => {
    const task = memoryTasks.find(t => t.id === taskId);
    if (task) {
      return await taskService.updateTask({ ...task, status });
    }
    throw new Error("Task not found");
  },

  // New: Export data as JSON file
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
