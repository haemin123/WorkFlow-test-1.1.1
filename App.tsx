
import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { KanbanBoard } from './components/Kanban';
import { AIModal } from './components/AIModal';
import { GeminiPage } from './components/GeminiPage';
import { SettingsPage } from './components/SettingsPage';
import { Insights } from './components/Insights';
import { Task, TaskStatus, Priority, ViewMode } from './types';
import { taskService } from './services/taskService'; 
import { Plus, LogOut } from './components/Icons';
import { LoginPage } from './components/LoginPage';
import { auth } from './firebaseConfig';
import { onAuthStateChanged, signOut, User as FirebaseUser } from 'firebase/auth';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('BOARD');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempTask, setTempTask] = useState<Task | null>(null);
  
  // Auth State
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      loadTasks(user.uid);
    } else {
      setTasks([]);
    }
  }, [user]);

  const loadTasks = async (userId: string) => {
    try {
        const loadedTasks = await taskService.getAllTasks(userId);
        setTasks(loadedTasks);
    } catch (error) {
        console.error("Failed to load tasks", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    setTempTask(null);
    setIsModalOpen(true);
  };

  const handleUpdateTask = async (updated: Task) => {
    if (tempTask) {
       setTempTask(updated);
    } else {
       setTasks(prev => prev.map(t => t.id === updated.id ? updated : t));
       setSelectedTask(updated);
       try {
         await taskService.updateTask(updated);
       } catch (error) {
         console.error("Failed to update task", error);
         alert("수정사항 저장에 실패했습니다.");
         if (user) loadTasks(user.uid); 
       }
    }
  };

  const handleStatusChange = async (taskId: string, newStatus: TaskStatus) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: newStatus } : t));
    try {
      await taskService.updateStatus(taskId, newStatus);
    } catch (error) {
      console.error("Failed to update status", error);
      alert("상태 변경에 실패했습니다.");
      if (user) loadTasks(user.uid);
    }
  };
  
  const handleDeleteTask = async (taskId: string) => {
    const backup = [...tasks];
    setTasks(prev => prev.filter(t => t.id !== taskId));
    if (selectedTask?.id === taskId) {
        setIsModalOpen(false);
        setSelectedTask(null);
    }
    try {
        await taskService.deleteTask(taskId);
    } catch (error) {
        console.error("Failed to delete task", error);
        alert("삭제에 실패했습니다.");
        setTasks(backup);
    }
  };

  const handleStartCreateTask = () => {
    if (!user) return;
    const newTaskTemplate: Task = {
        id: `t${Date.now()}`,
        title: '새로운 업무 요청',
        description: '',
        product: '일반',
        type: '기타',
        priority: Priority.MEDIUM,
        status: TaskStatus.REQUESTED,
        dueDate: new Date().toISOString(),
        assigneeId: user.uid, // Default to self
        requesterId: user.uid,
        subtasks: [],
        createdAt: Date.now(),
        updatedAt: Date.now(),
        userId: user.uid // Set Owner
    };
    setTempTask(newTaskTemplate);
    setSelectedTask(null);
    setIsModalOpen(true);
  }

  const handleFinalizeCreateTask = async (finalTask: Task) => {
    try {
        const createdTask = await taskService.createTask(finalTask);
        setTasks(prev => [...prev, createdTask]);
        setIsModalOpen(false);
        setTempTask(null);
    } catch (error: any) {
        console.error("Failed to create task", error);
        alert(`저장 실패: ${error.message}`);
    }
  }

  const renderContent = () => {
      switch (currentView) {
          case 'INSIGHT':
              return <Insights tasks={tasks} />;
          case 'BOARD':
              return (
                <>
                    <header className="h-20 flex items-center justify-between px-8 z-10 shrink-0 backdrop-blur-sm bg-white/50 sticky top-0">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">프로젝트 보드</h1>
                            <p className="text-sm text-gray-500 mt-1">팀의 업무 흐름을 AI와 함께 최적화하세요.</p>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <button onClick={handleStartCreateTask} className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg active:scale-95">
                                <Plus className="w-4 h-4" />
                                <span>새 요청 만들기</span>
                            </button>
                            
                            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                                {user?.photoURL ? (
                                    <img src={user.photoURL} alt={user.displayName || 'User'} className="w-10 h-10 rounded-full border border-gray-200" />
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-sm">
                                        {user?.email?.charAt(0).toUpperCase() || 'U'}
                                    </div>
                                )}
                                <button onClick={handleLogout} className="text-gray-500 hover:text-red-600 transition-colors p-2" title="로그아웃">
                                    <LogOut className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </header>

                    <div className="flex-1 overflow-x-auto overflow-y-hidden p-8 pt-4">
                        <KanbanBoard 
                            tasks={tasks} 
                            onTaskClick={handleTaskClick}
                            onStatusChange={handleStatusChange}
                            onDeleteTask={handleDeleteTask}
                        />
                    </div>
                </>
              );
          case 'GEMINI':
              return <GeminiPage />;
          case 'SETTINGS':
              return <SettingsPage />;
          default:
            return null;
      }
  }

  if (authLoading) {
      return (
          <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
      );
  }

  if (!user) {
      return <LoginPage />;
  }

  return (
    <Layout currentView={currentView} onNavigate={setCurrentView}>
      {renderContent()}
      
      {(selectedTask || tempTask) && (
        <AIModal 
          task={selectedTask || tempTask!}
          isOpen={isModalOpen}
          onClose={() => {
              setIsModalOpen(false);
              setTempTask(null);
          }}
          onUpdateTask={handleUpdateTask}
          onCreateTask={tempTask ? handleFinalizeCreateTask : undefined}
        />
      )}
    </Layout>
  );
}
