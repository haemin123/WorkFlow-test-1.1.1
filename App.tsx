import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import { Layout } from './components/Layout';
import { Task, TaskStatus, Priority, ViewMode } from './types';
import { taskService } from './services/taskService'; 
import { Plus, Search } from './components/Icons';
import { LoginPage } from './components/LoginPage';
import { LandingPage } from './components/LandingPage'; // Import LandingPage
import { auth } from './firebaseConfig';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { authService } from './services/authService';
import { 
  generateSubtasksAI, 
  generateAcceptanceCriteriaAI, 
  generateSolutionDraftAI, 
  recommendResourcesAI 
} from './services/geminiService';
import { CommonHeader } from './components/CommonHeader';

// Lazy load heavy components
const KanbanBoard = lazy(() => import('./components/Kanban').then(module => ({ default: module.KanbanBoard })));
const AIModal = lazy(() => import('./components/AIModal').then(module => ({ default: module.AIModal })));
const GeminiPage = lazy(() => import('./components/GeminiPage').then(module => ({ default: module.GeminiPage })));
const SettingsPage = lazy(() => import('./components/SettingsPage').then(module => ({ default: module.SettingsPage })));
const Insights = lazy(() => import('./components/Insights').then(module => ({ default: module.Insights })));
const ArchivePage = lazy(() => import('./components/ArchivePage').then(module => ({ default: module.ArchivePage })));
const ProfilePage = lazy(() => import('./components/ProfilePage').then(module => ({ default: module.ProfilePage })));
const KnowledgeHub = lazy(() => import('./components/KnowledgeHub').then(module => ({ default: module.KnowledgeHub }))); // Added
const GoogleProfileModal = lazy(() => import('./components/GoogleProfileModal').then(module => ({ default: module.GoogleProfileModal })));

export default function App() {
  const [showLanding, setShowLanding] = useState<boolean>(() => {
    // URL에 view 파라미터가 있으면 랜딩 페이지를 건너뜀
    if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        return !params.has('view');
    }
    return true;
  }); 

  // Initialize currentView from URL query parameter
  const [currentView, setCurrentView] = useState<ViewMode>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const view = params.get('view');
      // Validate if the view parameter matches ViewMode types
      if (view && ['BOARD', 'INSIGHT', 'ARCHIVE', 'PROFILE', 'GEMINI', 'SETTINGS', 'KNOWLEDGE'].includes(view)) {
        return view as ViewMode;
      }
    }
    return 'BOARD';
  });

  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempTask, setTempTask] = useState<Task | null>(null);
  
  // Auth State
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  
  // Profile Check State
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const [checkingProfile, setCheckingProfile] = useState(false);
  
  // Knowledge Hub State
  const [knowledgeSearchQuery, setKnowledgeSearchQuery] = useState('');
  const [isKnowledgeAddModalOpen, setIsKnowledgeAddModalOpen] = useState(false);

  // Function to update view and URL
  const updateView = (newView: ViewMode) => {
    setCurrentView(newView);
    const url = new URL(window.location.href);
    url.searchParams.set('view', newView);
    window.history.pushState({}, '', url);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const view = params.get('view');
      if (view && ['BOARD', 'INSIGHT', 'ARCHIVE', 'PROFILE', 'GEMINI', 'SETTINGS', 'KNOWLEDGE'].includes(view)) {
        setCurrentView(view as ViewMode);
        setShowLanding(false);
      } else if (!view) {
        setShowLanding(true);
      } else {
        setCurrentView('BOARD');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
          // setShowLanding(false); // Logged in -> REMOVED to respect URL state
          await checkUserProfile(currentUser.uid);
      } else {
          // setShowLanding(true); // Not logged in -> REMOVED to respect URL state
          setIsProfileComplete(false);
          setAuthLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const checkUserProfile = async (uid: string) => {
      setCheckingProfile(true);
      try {
          const profile = await authService.getUserProfile(uid);
          if (profile && profile.name) {
              setIsProfileComplete(true);
              loadTasks();
          } else {
              setIsProfileComplete(false); 
          }
      } catch (e) {
          console.error("Profile check failed", e);
          setIsProfileComplete(false);
      } finally {
          setCheckingProfile(false);
          setAuthLoading(false);
      }
  }

  const handleProfileCompleted = () => {
      setIsProfileComplete(true);
      loadTasks();
  };

  const loadTasks = async () => {
    try {
        const loadedTasks = await taskService.getAllTasks();
        setTasks(loadedTasks);
    } catch (error) {
        console.error("Failed to load tasks", error);
    }
  };

  const handleLogout = async () => {
    try {
      await authService.logout();
      setShowLanding(true); // Show landing page on logout
      const url = new URL(window.location.href);
      url.searchParams.delete('view');
      window.history.pushState({}, '', url);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const handleTaskClick = useCallback((task: Task) => {
    // Removed blocking condition to allow viewing archived/trashed tasks
    setSelectedTask(task);
    setTempTask(null);
    setIsModalOpen(true);
  }, []);

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
         if (user) loadTasks(); 
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
      if (user) loadTasks();
    }
  };

  const handleArchiveTask = async (taskId: string) => {
      if(!confirm('이 업무를 보관함으로 이동하시겠습니까?')) return;

      const targetTask = tasks.find(t => t.id === taskId);
      if(!targetTask) return;

      const updatedTask: Task = { 
          ...targetTask, 
          archived: true,
          originalStatus: targetTask.status, 
          status: TaskStatus.ARCHIVED 
      };

      setTasks(prev => prev.map(t => t.id === taskId ? updatedTask : t));
      
      try {
          await taskService.updateTask(updatedTask);
      } catch (e) {
          console.error("Failed to archive task", e);
          alert("보관함 이동 실패");
          loadTasks();
      }
  };
  
  const handleArchiveAll = async (targetTasks: Task[]) => {
      if(!confirm(`완료된 ${targetTasks.length}개의 업무를 모두 보관함으로 이동하시겠습니까?`)) return;

      const updatedTasks: Task[] = targetTasks.map(t => ({ 
          ...t, 
          archived: true,
          originalStatus: t.status,
          status: TaskStatus.ARCHIVED
      }));

      setTasks(prev => prev.map(t => {
          const found = updatedTasks.find(ut => ut.id === t.id);
          return found || t;
      }));

      try {
          await Promise.all(updatedTasks.map(t => taskService.updateTask(t)));
      } catch (e) {
           console.error("Failed to bulk archive", e);
           alert("일괄 보관 실패");
           loadTasks();
      }
  }

  const handleRestoreTask = async (taskId: string) => {
      if(!confirm('이 업무를 다시 보드로 복구하시겠습니까?')) return;
      
      const targetTask = tasks.find(t => t.id === taskId);
      if(!targetTask) return;

      const updatedTask: Task = { 
          ...targetTask, 
          archived: false, 
          inTrash: false,
          status: targetTask.originalStatus || TaskStatus.DONE 
      };

      setTasks(prev => prev.map(t => t.id === taskId ? updatedTask : t));
      
      try {
          await taskService.updateTask(updatedTask);
      } catch (e) {
          console.error("Failed to restore task", e);
          alert("복구 실패");
          loadTasks();
      }
  };
  
  const handleMoveToTrash = async (taskId: string) => {
      const targetTask = tasks.find(t => t.id === taskId);
      if(!targetTask) return;

      const updatedTask: Task = { 
          ...targetTask, 
          inTrash: true,
          originalStatus: targetTask.status, 
          status: TaskStatus.TRASH 
      };

      setTasks(prev => prev.map(t => t.id === taskId ? updatedTask : t));
      if (selectedTask?.id === taskId) {
          setIsModalOpen(false);
          setSelectedTask(null);
      }
      try {
          await taskService.updateTask(updatedTask);
      } catch (error) {
          console.error("Failed to move to trash", error);
          alert("휴지통 이동 실패");
          loadTasks();
      }
  };

  const handlePermanentDelete = async (taskId: string) => {
      setTasks(prev => prev.filter(t => t.id !== taskId));
      try {
          await taskService.deleteTask(taskId);
      } catch (error) {
          console.error("Failed to delete task", error);
          alert("영구 삭제 실패");
          loadTasks();
      }
  }
  
  const handleEmptyTrash = async () => {
      if(!confirm("휴지통을 비우시겠습니까? 이 작업은 되돌릴 수 없습니다.")) return;
      
      const trashTasks = tasks.filter(t => t.inTrash);
      setTasks(prev => prev.filter(t => !t.inTrash));
      
      try {
          await Promise.all(trashTasks.map(t => taskService.deleteTask(t.id)));
      } catch (e) {
           console.error("Failed to empty trash", e);
           alert("휴지통 비우기 실패");
           loadTasks();
      }
  }

  const handleStartCreateTask = async () => {
    if (!user) return;

    // Use Auth profile which is updated by ProfilePage
    let userProfile = { 
        name: user.displayName || 'User', 
        avatar: user.photoURL || undefined 
    };
    
    const newTaskTemplate: Task = {
        id: `t${Date.now()}`,
        title: '새로운 업무 요청',
        description: '',
        product: '일반',
        type: '기타',
        priority: Priority.MEDIUM,
        status: TaskStatus.REQUESTED,
        dueDate: new Date().toISOString(),
        ownerUid: user.uid,
        ownerEmail: user.email || undefined,
        assigneeId: user.uid, 
        assigneeName: userProfile.name,
        assigneeAvatar: userProfile.avatar,
        requesterId: user.uid,
        subtasks: [],
        createdAt: Date.now(),
        updatedAt: Date.now(),
        userId: user.uid,
        archived: false,
        inTrash: false
    };
    
    setTempTask(newTaskTemplate);
    setSelectedTask(null);
    setIsModalOpen(true);
  }

  const handleFinalizeCreateTask = async (finalTask: Task) => {
    try {
        const taskWithLoading = { ...finalTask, aiStatus: 'GENERATING' as const };
        const createdTask = await taskService.createTask(taskWithLoading);
        setTasks(prev => [...prev, createdTask]);
        
        setIsModalOpen(false);
        setTempTask(null);
        
        // AI Background Analysis
        (async () => {
            try {
                // Initialize analysis object
                let currentAnalysis = { 
                    lastUpdated: Date.now(),
                    executionPlan: [] as any[],
                    acceptanceCriteria: [] as any[],
                    solutionDraft: '',
                    learningResources: [] as any[]
                };

                // Helper to update state and DB incrementally
                const updateProgress = async (partialAnalysis: Partial<typeof currentAnalysis>) => {
                    currentAnalysis = { ...currentAnalysis, ...partialAnalysis };
                    const updatedTask = { 
                        ...createdTask, 
                        aiAnalysis: currentAnalysis,
                        // Keep status GENERATING until all done
                    };
                    
                    // Update DB
                    await taskService.updateTask(updatedTask);
                    
                    // Update Local State
                    setTasks(prev => prev.map(t => t.id === createdTask.id ? updatedTask : t));
                };

                // 1. Strategy
                try {
                    const executionPlan = await generateSubtasksAI(createdTask);
                    await updateProgress({ 
                        executionPlan: executionPlan.map((s, i) => ({ id: `ep-${Date.now()}-${i}`, title: s.title, completed: false })) 
                    });
                } catch(e) { console.error("Strategy Gen Failed", e); }

                // 2. DoD
                try {
                    const acceptanceCriteria = await generateAcceptanceCriteriaAI(createdTask);
                    await updateProgress({ acceptanceCriteria });
                } catch(e) { console.error("DoD Gen Failed", e); }

                // 3. Solution
                try {
                    const solutionDraft = await generateSolutionDraftAI(createdTask);
                    await updateProgress({ solutionDraft });
                } catch(e) { console.error("Solution Gen Failed", e); }

                // 4. Resources
                try {
                    const learningResources = await recommendResourcesAI(createdTask);
                    await updateProgress({ learningResources });
                } catch(e) { console.error("Resources Gen Failed", e); }

                // Final Update: Set status COMPLETED
                const finalTaskUpdate = { 
                    ...createdTask, 
                    aiAnalysis: currentAnalysis, 
                    aiStatus: 'COMPLETED' as const
                };
                await taskService.updateTask(finalTaskUpdate);
                setTasks(prev => prev.map(t => t.id === createdTask.id ? finalTaskUpdate : t));
                
            } catch (e) {
                console.error("Background AI Analysis Failed", e);
                // Mark as failed
                const failedTask = { ...createdTask, aiStatus: 'FAILED' as const };
                await taskService.updateTask(failedTask);
                setTasks(prev => prev.map(t => t.id === createdTask.id ? failedTask : t));
            }
        })();

    } catch (error: any) {
        console.error("Failed to create task", error);
        alert(`저장 실패: ${error.message}`);
    }
  }

  if (authLoading || checkingProfile) {
      return (
          <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
      );
  }

  // Show Landing Page regardless of login status if showLanding is true
  if (showLanding) {
      return <LandingPage onStart={() => {
        setShowLanding(false);
        updateView('BOARD');
      }} />;
  }

  if (!user) {
      return <LoginPage />;
  }

  if (!isProfileComplete) {
      return (
        <Suspense fallback={<div>Loading...</div>}>
            <GoogleProfileModal user={user} onClose={handleProfileCompleted} />
        </Suspense>
      );
  }

  return (
    <Layout currentView={currentView} onNavigate={updateView}>
      {/* ... renderContent switch case ... */}
      {(() => {
          switch (currentView) {
              case 'INSIGHT':
                  return (
                      <div className="flex flex-col h-full">
                          <CommonHeader 
                            title="프로젝트 인사이트" 
                            subtitle="실시간 데이터 기반으로 팀의 업무 효율을 분석합니다." 
                            user={user}
                            onLogout={handleLogout}
                            onNavigateProfile={() => updateView('PROFILE')}
                          />
                          <Suspense fallback={<div className="p-8">Loading Insights...</div>}>
                            <Insights tasks={tasks} />
                          </Suspense>
                      </div>
                  );
              case 'ARCHIVE':
                  return (
                      <Suspense fallback={<div className="p-8">Loading Archive...</div>}>
                        <ArchivePage 
                            tasks={tasks} 
                            onRestoreTask={handleRestoreTask} 
                            onDeleteTask={handlePermanentDelete}
                            onEmptyTrash={handleEmptyTrash}
                            onTaskClick={handleTaskClick}
                            currentUser={user}
                        />
                      </Suspense>
                  );
              case 'PROFILE':
                  return (
                      <div className="flex flex-col h-full">
                          <CommonHeader 
                            title="프로필 관리" 
                            subtitle="개인 정보 및 계정 설정을 관리하세요."
                            user={user}
                            onLogout={handleLogout}
                            onNavigateProfile={() => updateView('PROFILE')}
                          />
                          <Suspense fallback={<div className="p-8">Loading Profile...</div>}>
                            <ProfilePage currentUser={user} />
                          </Suspense>
                      </div>
                  );
              case 'BOARD':
                  return (
                    <>
                        <CommonHeader 
                            title="프로젝트 보드" 
                            subtitle="팀의 업무 흐름을 AI와 함께 최적화하세요."
                            user={user}
                            onLogout={handleLogout}
                            onNavigateProfile={() => updateView('PROFILE')}
                        >
                            <button onClick={handleStartCreateTask} className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg active:scale-95">
                                <Plus className="w-4 h-4" />
                                <span>새 요청 만들기</span>
                            </button>
                        </CommonHeader>

                        <div className="flex-1 overflow-x-auto overflow-y-hidden p-8 pt-4">
                            <Suspense fallback={<div className="p-8">Loading Board...</div>}>
                                <KanbanBoard 
                                    tasks={tasks} 
                                    onTaskClick={handleTaskClick}
                                    onStatusChange={handleStatusChange}
                                    onDeleteTask={handleMoveToTrash} 
                                    onArchiveTask={handleArchiveTask} 
                                    onArchiveAll={handleArchiveAll} 
                                    currentUser={user} 
                                />
                            </Suspense>
                        </div>
                    </>
                  );
              case 'KNOWLEDGE':
                  return (
                      <div className="flex flex-col h-full">
                          <CommonHeader 
                            title="지식 허브" 
                            subtitle="팀 스마트 학습 라이브러리"
                            user={user}
                            onLogout={handleLogout}
                            onNavigateProfile={() => updateView('PROFILE')}
                          >
                             <div className="flex items-center gap-4">
                                <div className="relative w-64">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input 
                                        type="text" 
                                        placeholder="자료 검색..." 
                                        value={knowledgeSearchQuery}
                                        onChange={(e) => setKnowledgeSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                                    />
                                </div>
                                <button 
                                    onClick={() => setIsKnowledgeAddModalOpen(true)}
                                    className="flex items-center gap-2 px-4 py-2 bg-[#306364] text-white rounded-full text-sm font-bold hover:bg-[#254d4e] transition-colors shadow-sm"
                                >
                                    <Plus className="w-4 h-4" />
                                    자료 추가
                                </button>
                             </div>
                          </CommonHeader>
                          <Suspense fallback={<div className="p-8">Loading Knowledge Hub...</div>}>
                              <KnowledgeHub 
                                searchQuery={knowledgeSearchQuery}
                                isAddModalOpen={isKnowledgeAddModalOpen}
                                onCloseAddModal={() => setIsKnowledgeAddModalOpen(false)}
                              />
                          </Suspense>
                      </div>
                  );
              case 'GEMINI':
                  return (
                      <div className="flex flex-col h-full">
                          <CommonHeader 
                            title="Gemini Pro" 
                            subtitle="AI와 대화하며 업무 효율을 높이세요."
                            user={user}
                            onLogout={handleLogout}
                            onNavigateProfile={() => updateView('PROFILE')}
                          />
                          <Suspense fallback={<div className="p-8">Loading Gemini...</div>}>
                              <GeminiPage tasks={tasks} currentUser={user} />
                          </Suspense>
                      </div>
                  );
              case 'SETTINGS':
                  return (
                      <div className="flex flex-col h-full">
                          <CommonHeader 
                            title="환경 설정" 
                            subtitle="앱의 기본 설정을 변경합니다."
                            user={user}
                            onLogout={handleLogout}
                            onNavigateProfile={() => updateView('PROFILE')}
                          />
                          <Suspense fallback={<div className="p-8">Loading Settings...</div>}>
                            <SettingsPage />
                          </Suspense>
                      </div>
                  );
              default:
                return null;
          }
      })()}
      
      {(selectedTask || tempTask) && (
        <Suspense fallback={null}>
            <AIModal 
            task={selectedTask || tempTask!}
            isOpen={isModalOpen}
            onClose={() => {
                setIsModalOpen(false);
                setTempTask(null);
            }}
            onUpdateTask={handleUpdateTask}
            onCreateTask={tempTask ? handleFinalizeCreateTask : undefined}
            onDeleteTask={handleMoveToTrash}
            />
        </Suspense>
      )}
    </Layout>
  );
}
