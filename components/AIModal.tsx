import React, { useState, useEffect } from 'react';
import { Task, Subtask, Resource, Priority, ChatMessage, TaskStatus } from '../types';
import { 
    analyzeTaskWithAI, 
    generateSubtasksAI, 
    generateAcceptanceCriteriaAI, 
    generateSolutionDraftAI, 
    recommendResourcesAI,
    draftTaskWithAI,
    chatWithGuide
} from '../services/geminiService';
import { 
    LayoutDashboard, ListTodo, BrainCircuit, CheckCircle2, 
    BookOpen, Code2, AlertCircle, X, Loader2, PenLine, 
    Calendar, User, Trash2, Wand2, Sparkles, MessageSquare, CheckSquare, Square, Archive, RotateCcw
} from './Icons';
import { UI_TEXTS } from '../constants';
import { DraftView, ChatView } from './AIViews';

// --- Props ---
interface AIModalProps {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
  onUpdateTask: (updatedTask: Task) => void;
  onCreateTask?: (newTask: Task) => void;
  onDeleteTask?: (taskId: string) => void;
  onRestoreTask?: (taskId: string) => void; 
}

type TabType = 'DETAILS' | 'HISTORY' | 'DRAFT' | 'STRATEGY' | 'DOD' | 'SOLUTION' | 'RESOURCES' | 'CHAT';

// --- Sub Components ---

const SidebarTab = ({ active, onClick, icon, label, disabled }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string, disabled?: boolean }) => (
    <button 
        onClick={onClick}
        disabled={disabled}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all mb-1 text-sm font-medium
            ${active ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:bg-gray-100/50 hover:text-gray-700'}
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
        {icon}
        <span>{label}</span>
    </button>
);

const TabButton = ({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) => (
    <button 
        onClick={onClick}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap
            ${active ? 'bg-white text-gray-900 shadow-sm ring-1 ring-black/5' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
    >
        {icon}
        <span>{label}</span>
    </button>
);

const ContentHeader = ({ title, action }: { title: string, action?: React.ReactNode }) => (
    <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        {action}
    </div>
);

// --- Main Modal Component ---

export const AIModal: React.FC<AIModalProps> = ({ task, isOpen, onClose, onUpdateTask, onCreateTask, onDeleteTask, onRestoreTask }) => {
  const [activeTab, setActiveTab] = useState<TabType>('DETAILS');
  const [isLoading, setIsLoading] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  
  // Creation Mode Logic
  const [isCreationMode, setIsCreationMode] = useState(false);
  const [draftInput, setDraftInput] = useState('');
  const [draftResults, setDraftResults] = useState<Partial<Task>[] | null>(null);
  const [selectedDraftIndex, setSelectedDraftIndex] = useState<number | null>(null);
  
  // Chat Logic
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMsg, setInputMsg] = useState('');

  // Read-only logic for archived/trashed items
  const isReadOnly = task.status === TaskStatus.ARCHIVED || task.status === TaskStatus.TRASH;
  
  // Local task state - Synced with props
  const [localTask, setLocalTask] = useState<Task>(task);

  useEffect(() => {
    // Sync localTask whenever task prop changes (crucial for live AI updates)
    setLocalTask(task);
  }, [task]);

  useEffect(() => {
    if (isOpen) {
        // Initial setup only when modal opens
        const isNew = task.title === UI_TEXTS.NEW_TASK_TITLE && (!task.description || task.description === '');
        setIsCreationMode(isNew);

        if (isNew) {
            setActiveTab('DRAFT');
            setDraftInput('');
            setDraftResults(null);
            setSelectedDraftIndex(null);
        } else {
            setActiveTab('DETAILS');
        }
    }
  }, [isOpen, task.id]); // Only runs when modal opens/closes or task ID changes (not on every update)

  if (!isOpen) return null;

  // --- Handlers ---

  const handleUpdateField = (field: keyof Task, value: any) => {
      if (isReadOnly) return;
      const updated = { ...localTask, [field]: value };
      setLocalTask(updated);
      onUpdateTask(updated);
  };
  
  const handleAIAction = async (actionType: 'STRATEGY' | 'DOD' | 'SOLUTION' | 'RESOURCES') => {
      if (isReadOnly) return;
      setIsLoading(true);
      try {
          let updatedAnalysis = localTask.aiAnalysis ? { ...localTask.aiAnalysis } : { lastUpdated: Date.now() };
          
          if (actionType === 'STRATEGY') {
              const subs = await generateSubtasksAI(localTask);
              updatedAnalysis.executionPlan = subs.map((s, i) => ({ id: `ep-${Date.now()}-${i}`, title: s.title, completed: false }));
          } else if (actionType === 'DOD') {
              const criteria = await generateAcceptanceCriteriaAI(localTask);
              updatedAnalysis.acceptanceCriteria = criteria;
          } else if (actionType === 'SOLUTION') {
              const draft = await generateSolutionDraftAI(localTask);
              updatedAnalysis.solutionDraft = draft;
          } else if (actionType === 'RESOURCES') {
              const resources = await recommendResourcesAI(localTask);
              updatedAnalysis.learningResources = resources;
          }
          
          updatedAnalysis.lastUpdated = Date.now();
          handleUpdateField('aiAnalysis', updatedAnalysis);

      } catch (e: any) {
          console.error("AI Action Failed", e);
          alert(`AI 기능 오류 발생: ${e.message || "알 수 없는 오류"}`);
      } finally {
          setIsLoading(false);
      }
  };

  // Draft Handlers
  const handleSmartDraft = async () => {
    if (!draftInput.trim()) return;
    setIsLoading(true);
    setDraftResults(null);
    setSelectedDraftIndex(null);
    try {
        const results = await draftTaskWithAI(draftInput);
        setDraftResults(results);
    } catch (e: any) { 
        console.error(e); 
        alert(`AI 작성 오류: ${e.message}`);
    } 
    finally { setIsLoading(false); }
  };

  const handleSelectDraft = (draft: Partial<Task>, index: number) => {
    setSelectedDraftIndex(index);
    const updated = {
        ...localTask,
        ...draft,
        subtasks: [] 
    };
    setLocalTask(updated);
    onUpdateTask(updated);
  };
  
  // Chat Handlers
  const handleSendMessage = async () => {
    if (!inputMsg.trim()) return;
    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', content: inputMsg, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputMsg('');
    
    const history = messages.map(m => ({ role: m.role, parts: [{ text: m.content }] }));
    try {
        const responseText = await chatWithGuide(history, inputMsg, localTask);
        const modelMsg: ChatMessage = { id: (Date.now() + 1).toString(), role: 'model', content: responseText || "오류가 발생했습니다.", timestamp: Date.now() };
        setMessages(prev => [...prev, modelMsg]);
    } catch (e: any) { 
        console.error(e);
        alert(`AI 채팅 오류: ${e.message}`);
    }
  };


  // --- Render Content based on Tab ---

  const renderContent = () => {
      const analysis = localTask.aiAnalysis || { lastUpdated: 0 };
      const isGenerating = localTask.aiStatus === 'GENERATING';
      
      // Removed: isCreationMode handling inside renderContent as it's now handled in the main return

      switch (activeTab) {
        case 'DETAILS':
            return (
                <div className="animate-fade-in space-y-8">
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <span className="text-xs font-bold text-gray-400 uppercase">진행 상태</span>
                            <div className="mt-2 flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full 
                                    ${localTask.status === 'DONE' ? 'bg-green-500' : 
                                      localTask.status === 'IN PROGRESS' || localTask.status === 'WIP' ? 'bg-blue-500' :
                                      localTask.status === 'CHECKED' ? 'bg-purple-500' :
                                      localTask.status === TaskStatus.ARCHIVED ? 'bg-indigo-500' :
                                      localTask.status === TaskStatus.TRASH ? 'bg-red-500' :
                                      'bg-gray-400'}`}>
                                </div>
                                <select 
                                    value={localTask.status}
                                    onChange={(e) => handleUpdateField('status', e.target.value)}
                                    disabled={isReadOnly}
                                    className="bg-transparent text-sm font-bold text-gray-700 outline-none w-full disabled:cursor-not-allowed disabled:text-gray-400"
                                >
                                    <option value="REQUESTED">REQUESTED</option>
                                    <option value="WIP">IN PROGRESS</option>
                                    <option value="CHECKED">REVIEW / APPROVE</option>
                                    <option value="DONE">DONE</option>
                                    {isReadOnly && <option value={TaskStatus.ARCHIVED}>ARCHIVED</option>}
                                    {isReadOnly && <option value={TaskStatus.TRASH}>TRASH</option>}
                                </select>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <span className="text-xs font-bold text-gray-400 uppercase">우선순위</span>
                            <div className="mt-2">
                                <select 
                                    value={localTask.priority}
                                    onChange={(e) => handleUpdateField('priority', e.target.value)}
                                    disabled={isReadOnly}
                                    className={`bg-transparent text-sm font-bold outline-none uppercase w-full disabled:cursor-not-allowed disabled:text-gray-400
                                        ${localTask.priority === 'HIGH' ? 'text-red-600' : localTask.priority === 'MEDIUM' ? 'text-orange-600' : 'text-blue-600'}`}
                                >
                                    <option value="HIGH">HIGH</option>
                                    <option value="MEDIUM">MEDIUM</option>
                                    <option value="LOW">LOW</option>
                                </select>
                            </div>
                        </div>
                         <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <span className="text-xs font-bold text-gray-400 uppercase">담당자</span>
                            <div className="mt-2 flex items-center gap-2">
                                {localTask.assigneeAvatar ? (
                                    <img src={localTask.assigneeAvatar} alt={localTask.assigneeName} className="w-6 h-6 rounded-full object-cover border border-gray-200" />
                                ) : (
                                    <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">
                                        {localTask.assigneeName ? localTask.assigneeName.charAt(0).toUpperCase() : 'ME'}
                                    </div>
                                )}
                                <span className="text-sm font-bold text-gray-700">{localTask.assigneeName || '담당자 미정'}</span>
                            </div>
                        </div>
                         <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                            <span className="text-xs font-bold text-gray-400 uppercase">마감일</span>
                            <input 
                                type="date"
                                value={localTask.dueDate ? localTask.dueDate.split('T')[0] : ''}
                                onChange={(e) => handleUpdateField('dueDate', e.target.value)}
                                readOnly={isReadOnly}
                                className="mt-2 block w-full bg-transparent text-sm font-bold text-gray-700 outline-none disabled:cursor-not-allowed disabled:text-gray-400"
                            />
                        </div>
                     </div>

                     <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">업무 설명</h3>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 min-h-[200px] relative group">
                            <textarea 
                                value={localTask.description}
                                onChange={(e) => handleUpdateField('description', e.target.value)}
                                readOnly={isReadOnly}
                                className="w-full h-full bg-transparent border-none resize-none focus:ring-0 text-gray-600 leading-relaxed outline-none disabled:cursor-not-allowed"
                                placeholder="업무 설명을 입력하세요..."
                                rows={8}
                            />
                            {!isReadOnly && <PenLine className="absolute top-4 right-4 w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"/>}
                        </div>
                     </div>
                </div>
            );
        
        case 'HISTORY':
            return (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                    <Calendar className="w-12 h-12 mb-4 opacity-50"/>
                    <p>활동 내역 기능은 준비 중입니다.</p>
                </div>
            );

        case 'STRATEGY':
            return (
                <div className="animate-fade-in">
                    <ContentHeader 
                        title="실행 전략 (Execution Plan)" 
                        action={
                            !isReadOnly && (
                                <button onClick={() => handleAIAction('STRATEGY')} disabled={isLoading || isGenerating} className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-bold hover:bg-blue-100 transition-colors disabled:opacity-50">
                                    {isLoading || isGenerating ? <Loader2 className="w-4 h-4 animate-spin"/> : <BrainCircuit className="w-4 h-4"/>}
                                    <span>{isGenerating && !analysis.executionPlan?.length ? 'AI 생성 중...' : 'AI 생성하기'}</span>
                                </button>
                            )
                        }
                    />
                    {(!analysis.executionPlan || analysis.executionPlan.length === 0) ? (
                        <div className="text-center py-20 text-gray-400 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                            {isGenerating ? (
                                <div className="flex flex-col items-center gap-3">
                                    <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
                                    <p className="text-blue-500 font-medium">AI가 실행 전략을 수립하고 있습니다...</p>
                                </div>
                            ) : (
                                <>
                                    <BrainCircuit className="w-12 h-12 mx-auto mb-4 text-gray-300"/>
                                    <p>아직 생성된 실행 전략이 없습니다.</p>
                                </>
                            )}
                        </div>
                    ) : (
                        <div className="space-y-3">
                             {analysis.executionPlan.map((step, idx) => (
                                 <div key={step.id} className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                                     <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs mt-0.5">{idx + 1}</div>
                                     <div className="flex-1">
                                         <p className="text-gray-800 font-medium">{step.title}</p>
                                     </div>
                                 </div>
                             ))}
                        </div>
                    )}
                </div>
            );

        case 'DOD':
            return (
                 <div className="animate-fade-in">
                    <ContentHeader 
                        title="완료 조건 (Definition of Done)" 
                        action={
                            !isReadOnly && (
                                <button onClick={() => handleAIAction('DOD')} disabled={isLoading || isGenerating} className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-lg text-sm font-bold hover:bg-purple-100 transition-colors disabled:opacity-50">
                                    {isLoading || isGenerating ? <Loader2 className="w-4 h-4 animate-spin"/> : <CheckCircle2 className="w-4 h-4"/>}
                                    <span>{isGenerating && !analysis.acceptanceCriteria?.length ? 'AI 생성 중...' : 'AI 생성하기'}</span>
                                </button>
                            )
                        }
                    />
                     {(!analysis.acceptanceCriteria || analysis.acceptanceCriteria.length === 0) ? (
                        <div className="text-center py-20 text-gray-400 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                            {isGenerating ? (
                                <div className="flex flex-col items-center gap-3">
                                    <Loader2 className="w-10 h-10 text-purple-500 animate-spin" />
                                    <p className="text-purple-500 font-medium">AI가 완료 조건을 생성하고 있습니다...</p>
                                </div>
                            ) : (
                                <>
                                    <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-gray-300"/>
                                    <p>완료 조건이 설정되지 않았습니다.</p>
                                </>
                            )}
                        </div>
                    ) : (
                        <ul className="space-y-3">
                            {analysis.acceptanceCriteria.map((criterion, idx) => (
                                <li key={criterion.id} 
                                    className={`p-4 rounded-xl border transition-all flex items-start gap-4
                                        ${criterion.checked ? 'bg-gray-50 border-gray-100' : 'bg-white border-gray-200 hover:border-purple-200 hover:shadow-sm'}
                                        ${!isReadOnly ? 'cursor-pointer group' : ''}`}
                                    onClick={() => {
                                        if (isReadOnly) return;
                                        const newCriteria = analysis.acceptanceCriteria!.map(c => 
                                            c.id === criterion.id ? { ...c, checked: !c.checked } : c
                                        );
                                        const newAnalysis = { ...analysis, acceptanceCriteria: newCriteria, lastUpdated: Date.now() };
                                        handleUpdateField('aiAnalysis', newAnalysis);
                                    }}
                                >
                                    <div className={`mt-0.5 transition-colors ${criterion.checked ? 'text-purple-600' : 'text-gray-300 group-hover:text-purple-400'}`}>
                                        {criterion.checked ? <CheckSquare className="w-6 h-6" /> : <Square className="w-6 h-6" />}
                                    </div>
                                    <span className={`text-base leading-relaxed select-none ${criterion.checked ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                                        {criterion.content}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            );

        case 'SOLUTION':
             return (
                 <div className="animate-fade-in h-full flex flex-col">
                    <ContentHeader 
                        title="솔루션 초안 (Solution Draft)" 
                        action={
                            !isReadOnly && (
                                <button onClick={() => handleAIAction('SOLUTION')} disabled={isLoading || isGenerating} className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-lg text-sm font-bold hover:bg-emerald-100 transition-colors disabled:opacity-50">
                                    {isLoading || isGenerating ? <Loader2 className="w-4 h-4 animate-spin"/> : <Code2 className="w-4 h-4"/>}
                                    <span>{isGenerating && !analysis.solutionDraft ? 'AI 생성 중...' : 'AI 초안 작성'}</span>
                                </button>
                            )
                        }
                    />
                    <div className="flex-1 bg-gray-900 rounded-2xl p-6 overflow-y-auto text-gray-300 font-mono text-sm leading-relaxed shadow-inner">
                        {analysis.solutionDraft ? (
                             <pre className="whitespace-pre-wrap">{analysis.solutionDraft}</pre>
                        ) : (
                             <div className="h-full flex flex-col items-center justify-center text-gray-600">
                                 {isGenerating ? (
                                    <div className="flex flex-col items-center gap-3">
                                        <Loader2 className="w-10 h-10 text-emerald-500 animate-spin" />
                                        <p className="text-emerald-500 font-medium">AI가 솔루션 초안을 작성 중입니다...</p>
                                    </div>
                                 ) : (
                                    <>
                                        <Code2 className="w-12 h-12 mb-4 opacity-50"/>
                                        <p>기술적인 구현 가이드를 작성해드립니다.</p>
                                    </>
                                 )}
                             </div>
                        )}
                    </div>
                </div>
            );

         case 'RESOURCES':
             return (
                 <div className="animate-fade-in">
                    <ContentHeader 
                        title="추천 학습 자료 (Resources)" 
                        action={
                            !isReadOnly && (
                                <button onClick={() => handleAIAction('RESOURCES')} disabled={isLoading || isGenerating} className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-bold hover:bg-indigo-100 transition-colors disabled:opacity-50">
                                    {isLoading || isGenerating ? <Loader2 className="w-4 h-4 animate-spin"/> : <BookOpen className="w-4 h-4"/>}
                                    <span>{isGenerating && !analysis.learningResources?.length ? 'AI 생성 중...' : 'AI 자료 검색'}</span>
                                </button>
                            )
                        }
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {analysis.learningResources?.map((res, idx) => (
                            <a key={idx} href={res.url} target="_blank" rel="noopener noreferrer" className="block p-5 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all group bg-white">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        <BookOpen className="w-5 h-5"/>
                                    </div>
                                    <span className="text-xs font-bold text-gray-400">LINK</span>
                                </div>
                                <h4 className="font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">{res.title}</h4>
                                <p className="text-sm text-gray-500 line-clamp-2">{res.description || 'AI가 추천하는 유용한 기술 자료입니다.'}</p>
                            </a>
                        ))}
                         {(!analysis.learningResources || analysis.learningResources.length === 0) && (
                            <div className="col-span-2 text-center py-20 text-gray-400 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                                {isGenerating ? (
                                    <div className="flex flex-col items-center gap-3">
                                        <Loader2 className="w-10 h-10 text-indigo-500 animate-spin" />
                                        <p className="text-indigo-500 font-medium">AI가 자료를 검색하고 있습니다...</p>
                                    </div>
                                ) : (
                                    <>
                                        <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-300"/>
                                        <p>관련된 학습 자료를 찾지 못했습니다.</p>
                                    </>
                                )}
                            </div>
                         )}
                    </div>
                </div>
            );
            
        case 'CHAT':
            return (
                 <div className="animate-fade-in h-[600px]">
                     <ContentHeader title="AI 가이드 (Assistant)" />
                     <ChatView messages={messages} inputMsg={inputMsg} setInputMsg={setInputMsg} onSend={handleSendMessage} disabled={isReadOnly} />
                 </div>
            );
          
        default: return null;
      }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity">
        <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden flex animate-fade-in border border-white/50
             ${isCreationMode ? 'w-full max-w-[1400px] h-[90vh]' : 'w-full max-w-6xl h-[90vh] flex-col'}`}>
            
            {/* CASE A: CREATION MODE (Split View - Restored) */}
            {isCreationMode ? (
                <>
                    {/* Left Panel: Editor */}
                    <div className="w-[40%] min-w-[400px] bg-white border-r border-gray-100 flex flex-col h-full relative z-10">
                         <div className="h-20 px-8 border-b border-gray-100 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold rounded uppercase tracking-wide">NEW TASK</span>
                            </div>
                        </div>

                        <div className="flex-1 p-8 overflow-y-auto">
                            <div className="mb-6 relative group">
                                <input
                                    value={localTask.title === UI_TEXTS.NEW_TASK_TITLE ? '' : localTask.title}
                                    onChange={(e) => handleUpdateField('title', e.target.value)}
                                    className="w-full text-4xl font-bold text-gray-900 bg-transparent border-none focus:ring-0 p-0 placeholder-gray-200 outline-none leading-tight"
                                    placeholder="업무 제목을 입력하세요"
                                    autoFocus
                                />
                            </div>

                            <div className="relative group h-full">
                                <textarea 
                                    value={localTask.description}
                                    onChange={(e) => handleUpdateField('description', e.target.value)}
                                    className="w-full h-[calc(100%-100px)] text-lg text-gray-600 leading-relaxed bg-transparent border-none focus:ring-0 p-0 resize-none placeholder-gray-200 outline-none"
                                    placeholder={UI_TEXTS.NEW_TASK_DESC_PLACEHOLDER}
                                />
                            </div>
                        </div>

                         <div className="p-6 border-t border-gray-100 bg-white">
                            <button 
                                onClick={() => onCreateTask && onCreateTask(localTask)}
                                disabled={!localTask.title.trim() || localTask.title === UI_TEXTS.NEW_TASK_TITLE}
                                className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <CheckCircle2 className="w-5 h-5"/>
                                <span>업무 생성 완료</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Panel: AI Tools */}
                    <div className="flex-1 bg-gray-50/50 flex flex-col h-full relative">
                         <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between shrink-0 bg-white">
                            <div className="flex gap-1">
                                {/* Only DraftView, no tabs */}
                                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-gray-900 shadow-sm ring-1 ring-black/5">
                                    <Wand2 className="w-4 h-4" />
                                    <span className="text-sm font-medium">AI 작성 (Draft)</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-gray-400">
                                    <Sparkles className="w-4 h-4" />
                                    <span className="text-sm font-medium">가이드</span>
                                </div>
                            </div>
                            <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
                                <X className="w-6 h-6"/>
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto p-8">
                             <DraftView 
                                 input={draftInput}
                                 setInput={setDraftInput}
                                 onGenerate={handleSmartDraft}
                                 results={draftResults}
                                 selectedIdx={selectedDraftIndex}
                                 onSelect={handleSelectDraft}
                             />
                        </div>
                    </div>
                </>
            ) : (
                // CASE B: DETAIL MODE (Existing)
                <>
                    {/* Header */}
                    <div className="h-20 px-8 border-b border-gray-100 flex items-center justify-between shrink-0 bg-white z-10">
                        <div className="flex items-center gap-4 flex-1">
                            <span className="px-2 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold rounded uppercase tracking-wide">
                                {localTask.product || 'PROJECT'}
                            </span>
                            <h1 
                                className={`text-2xl font-bold text-gray-900 truncate ${!isReadOnly && 'cursor-pointer hover:text-gray-600 transition-colors'}`}
                                onClick={() => !isReadOnly && setIsEditingTitle(true)}
                            >
                                {localTask.title}
                            </h1>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                            {/* Restore Button */}
                            {isReadOnly && onRestoreTask && (
                                <button onClick={() => onRestoreTask(task.id)} className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-bold hover:bg-blue-100 transition-colors">
                                    <RotateCcw className="w-4 h-4"/>
                                    <span>보드로 복구</span>
                                </button>
                            )}

                            {/* Delete Button */}
                            {!isReadOnly && onDeleteTask && (
                                <button onClick={() => onDeleteTask(task.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors" title="휴지통으로 이동">
                                    <Trash2 className="w-5 h-5"/>
                                </button>
                            )}

                            <div className="w-px h-6 bg-gray-200 mx-2"></div>
                            <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
                                <X className="w-6 h-6"/>
                            </button>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="flex flex-1 overflow-hidden">
                        {/* Sidebar */}
                        <div className="w-64 bg-gray-50 border-r border-gray-100 p-6 overflow-y-auto shrink-0 hidden md:block">
                             <div className="mb-6">
                                <h3 className="text-xs font-bold text-gray-400 uppercase mb-3 px-4">기본 정보</h3>
                                <SidebarTab active={activeTab === 'DETAILS'} onClick={() => setActiveTab('DETAILS')} icon={<LayoutDashboard className="w-4 h-4"/>} label="업무 상세" />
                            </div>
                            
                            <div>
                                <h3 className="text-xs font-bold text-gray-400 uppercase mb-3 px-4">AI Tools</h3>
                                <SidebarTab active={activeTab === 'STRATEGY'} onClick={() => setActiveTab('STRATEGY')} icon={<ListTodo className="w-4 h-4"/>} label="실행 전략" disabled={isReadOnly} />
                                <SidebarTab active={activeTab === 'DOD'} onClick={() => setActiveTab('DOD')} icon={<CheckCircle2 className="w-4 h-4"/>} label="완료 조건 (DoD)" disabled={isReadOnly} />
                                <SidebarTab active={activeTab === 'SOLUTION'} onClick={() => setActiveTab('SOLUTION')} icon={<Code2 className="w-4 h-4"/>} label="솔루션 초안" disabled={isReadOnly} />
                                <SidebarTab active={activeTab === 'RESOURCES'} onClick={() => setActiveTab('RESOURCES')} icon={<BookOpen className="w-4 h-4"/>} label="학습 자료" disabled={isReadOnly} />
                                <SidebarTab active={activeTab === 'CHAT'} onClick={() => setActiveTab('CHAT')} icon={<MessageSquare className="w-4 h-4"/>} label="AI 가이드" disabled={isReadOnly} />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 bg-white p-8 overflow-y-auto">
                            {renderContent()}
                        </div>
                    </div>
                </>
            )}
        </div>
    </div>
  );
};