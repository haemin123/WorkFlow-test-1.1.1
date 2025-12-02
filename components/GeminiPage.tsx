import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Mic, ImageIcon, Compass, Lightbulb, Code, ChevronDown, X, Calendar, Trash2, MessageSquare, LayoutDashboard } from './Icons';
import { startChatWithTaskContext, chatWithGuide } from '../services/geminiService';
import { AVAILABLE_MODELS, GeminiModel } from '../constants';
import { Task } from '../types';
import { User as FirebaseUser } from 'firebase/auth';

interface Message {
    id: string;
    role: 'user' | 'model';
    text: string;
    image?: string; 
    isStreaming?: boolean;
    modelName?: string; 
    timestamp: number; 
}

interface GeminiPageProps {
    tasks?: Task[];
    currentUser?: FirebaseUser | null;
}

type ChatMode = 'general' | 'project';

const SUGGESTIONS = [
    { icon: <ImageIcon className="w-5 h-5 text-purple-500" />, text: "Create an image", sub: "of a futuristic workspace" },
    { icon: <Lightbulb className="w-5 h-5 text-yellow-500" />, text: "Brainstorm ideas", sub: "for a marketing campaign" },
    { icon: <Code className="w-5 h-5 text-blue-500" />, text: "Write code", sub: "for a React component" },
    { icon: <Compass className="w-5 h-5 text-green-500" />, text: "Plan a trip", sub: "to Seoul with team" },
];

export const GeminiPage: React.FC<GeminiPageProps> = ({ tasks = [], currentUser }) => {
    // Chat Mode State
    const [chatMode, setChatMode] = useState<ChatMode>('general');

    // Separate Message States for each mode
    const [generalMessages, setGeneralMessages] = useState<Message[]>([]);
    const [projectMessages, setProjectMessages] = useState<Message[]>([]);

    // Get current messages based on mode
    const messages = chatMode === 'general' ? generalMessages : projectMessages;
    const setMessages = (newMessages: Message[] | ((prev: Message[]) => Message[])) => {
        if (chatMode === 'general') {
            setGeneralMessages(newMessages);
        } else {
            setProjectMessages(newMessages);
        }
    };

    const [input, setInput] = useState('');
    const [isStreaming, setIsStreaming] = useState(false);
    const [isListening, setIsListening] = useState(false);
    
    // Image Upload State
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [imageMimeType, setImageMimeType] = useState<string>('image/png');
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Model Selection State
    const [selectedModel, setSelectedModel] = useState<GeminiModel>(AVAILABLE_MODELS[0]);
    const [isModelMenuOpen, setIsModelMenuOpen] = useState(false);
    const modelMenuRef = useRef<HTMLDivElement>(null);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    
    // Auto scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, selectedImage, chatMode]); 

    // Close model menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modelMenuRef.current && !modelMenuRef.current.contains(event.target as Node)) {
                setIsModelMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // --- Handlers ---

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setSelectedImage(result);
                setImageMimeType(file.type);
            };
            reader.readAsDataURL(file);
        }
    };

    const clearImage = () => {
        setSelectedImage(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const handleMicClick = () => {
        if (!('webkitSpeechRecognition' in window)) {
            alert("이 브라우저는 음성 인식을 지원하지 않습니다.");
            return;
        }

        if (isListening) {
            setIsListening(false);
            return;
        }

        const recognition = new (window as any).webkitSpeechRecognition();
        recognition.lang = 'ko-KR';
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => {
            setIsListening(true);
        };

        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            setInput(prev => prev + (prev ? ' ' : '') + transcript);
            setIsListening(false);
        };

        recognition.onerror = (event: any) => {
            console.error("Speech recognition error", event.error);
            setIsListening(false);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognition.start();
    };

    // Send Message Handler
    const handleSend = async (text: string = input) => {
        if ((!text.trim() && !selectedImage) || isStreaming) return;

        const currentImage = selectedImage;
        const userMsg: Message = { 
            id: Date.now().toString(), 
            role: 'user', 
            text: text,
            image: currentImage || undefined,
            timestamp: Date.now()
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        clearImage();
        setIsStreaming(true);

        const history = messages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
        }));

        try {
            const modelMsgId = (Date.now() + 1).toString();
            setMessages(prev => [...prev, { 
                id: modelMsgId, 
                role: 'model', 
                text: '생각 중...', 
                isStreaming: true,
                modelName: selectedModel.name,
                timestamp: Date.now()
            }]);

            let responseText = '';

            if (chatMode === 'general') {
                const dummyContext: Task = {
                    id: 'general', title: 'General Chat', description: 'General conversation', status: 'REQUESTED', priority: 'MEDIUM', product: 'General', type: 'General', dueDate: '', assigneeId: '', requesterId: '', subtasks: [], createdAt: Date.now(), updatedAt: Date.now()
                } as any;
                responseText = await chatWithGuide(history, text, dummyContext);
            } else {
                responseText = await startChatWithTaskContext(history, text, tasks);
            }
            
            setMessages(prev => prev.map(m => 
                m.id === modelMsgId 
                ? { ...m, text: responseText, isStreaming: false } 
                : m
            ));

        } catch (error) {
            console.error("Gemini Chat Error:", error);
            setMessages(prev => [...prev, { 
                id: Date.now().toString(), 
                role: 'model', 
                text: "죄송합니다. 처리 중 오류가 발생했습니다.",
                timestamp: Date.now()
            }]);
        } finally {
            setIsStreaming(false);
            inputRef.current?.focus();
        }
    };

    const handleDelete = (id: string) => {
        setMessages(prev => prev.filter(m => m.id !== id));
    };

    const handleSuggestionClick = (text: string, sub: string) => {
        handleSend(`${text} ${sub}`);
    };

    const handleModelSelect = (model: GeminiModel) => {
        setSelectedModel(model);
        setIsModelMenuOpen(false);
    };

    return (
        <div className="flex flex-col h-full bg-white text-gray-900 font-sans relative overflow-hidden">
            
            <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept="image/*" className="hidden" />

            {/* Header Area */}
            <div className="absolute top-0 left-0 right-0 h-20 z-20 bg-white/90 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6">
                
                {/* Left: Model Selector */}
                <div className="flex items-center gap-2 relative w-48" ref={modelMenuRef}>
                    <button 
                        onClick={() => setIsModelMenuOpen(!isModelMenuOpen)}
                        className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:bg-gray-100 px-3 py-1.5 rounded-lg transition-colors"
                    >
                        <span>{selectedModel.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isModelMenuOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isModelMenuOpen && (
                        <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in z-50">
                            <div className="p-1.5">
                                {AVAILABLE_MODELS.map((model) => (
                                    <button
                                        key={model.id}
                                        onClick={() => handleModelSelect(model)}
                                        className={`w-full text-left p-3 rounded-lg flex items-start gap-3 transition-colors
                                            ${selectedModel.id === model.id ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                                    >
                                        <div className={`mt-1 w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0
                                            ${selectedModel.id === model.id ? 'border-blue-600' : 'border-gray-300'}`}>
                                            {selectedModel.id === model.id && <div className="w-2 h-2 bg-blue-600 rounded-full" />}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className={`font-medium ${selectedModel.id === model.id ? 'text-blue-700' : 'text-gray-700'}`}>
                                                    {model.name}
                                                </span>
                                                {model.isPro && (
                                                    <span className="text-[10px] font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-1.5 py-0.5 rounded">PRO</span>
                                                )}
                                            </div>
                                            <p className="text-xs text-gray-500 mt-0.5 leading-snug">{model.description}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Center: Chat Mode Toggle (Larger & Centered) */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="flex bg-gray-100 p-1.5 rounded-full shadow-inner">
                        <button 
                            onClick={() => setChatMode('general')}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300
                                ${chatMode === 'general' 
                                    ? 'bg-white text-blue-600 shadow-sm scale-105' 
                                    : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            <MessageSquare className="w-4 h-4" />
                            일반 채팅
                        </button>
                        <button 
                            onClick={() => setChatMode('project')}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300
                                ${chatMode === 'project' 
                                    ? 'bg-white text-blue-600 shadow-sm scale-105' 
                                    : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            <LayoutDashboard className="w-4 h-4" />
                            프로젝트 채팅
                        </button>
                    </div>
                </div>

                {/* Right: User Profile */}
                <div className="flex items-center gap-2 w-48 justify-end">
                     <span className="text-sm font-medium text-gray-600 hidden sm:block truncate max-w-[100px]">
                        {currentUser?.displayName || 'User'}
                     </span>
                     <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 text-sm font-bold border border-gray-200">
                        {currentUser?.displayName ? currentUser.displayName.charAt(0).toUpperCase() : 'U'}
                     </div>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 pt-24 pb-32 relative">
                {messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full min-h-[400px] animate-fade-in">
                        <div className="text-center w-full max-w-4xl px-4 mb-12">
                            <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-4">
                                <span className="bg-gradient-to-r from-[#4285F4] via-[#9B72CB] to-[#D96570] bg-clip-text text-transparent">
                                    Hello, {currentUser?.displayName ? currentUser.displayName.split(' ')[0] : 'User'}
                                </span>
                            </h1>
                            <h2 className="text-3xl md:text-4xl font-medium text-[#C4C7C5] tracking-tight mb-4">
                                {chatMode === 'general' ? "무엇이든 물어보세요" : "프로젝트에 대해 이야기해볼까요?"}
                            </h2>
                            <p className="text-gray-400 text-lg">
                                {chatMode === 'general' 
                                    ? "자유로운 주제로 대화를 나눌 수 있습니다." 
                                    : "현재 진행 중인 업무 상황을 바탕으로 AI가 조언해 드립니다."}
                            </p>
                        </div>

                        {chatMode === 'general' && (
                            <div className="w-full max-w-4xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                {SUGGESTIONS.map((s, i) => (
                                    <button 
                                        key={i}
                                        onClick={() => handleSuggestionClick(s.text, s.sub)}
                                        className="p-4 h-40 rounded-2xl bg-[#F0F4F9] hover:bg-[#DCE3E9] transition-colors text-left flex flex-col justify-between group relative overflow-hidden"
                                    >
                                        <div>
                                            <p className="text-gray-800 font-medium text-sm">{s.text}</p>
                                            <p className="text-gray-500 text-sm mt-1">{s.sub}</p>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm self-end group-hover:scale-110 transition-transform">
                                            {s.icon}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                        
                        {chatMode === 'project' && (
                             <div className="w-full max-w-2xl px-4">
                                 <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col gap-4 text-center">
                                     <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm text-blue-600">
                                         <LayoutDashboard className="w-6 h-6" />
                                     </div>
                                     <h3 className="text-xl font-bold text-blue-900">
                                         현재 프로젝트 현황
                                     </h3>
                                     <p className="text-blue-700/80">
                                         총 <span className="font-bold">{tasks.length}</span>개의 업무가 등록되어 있습니다.<br/>
                                         AI가 모든 업무의 진행 상황과 완료 조건을 알고 있습니다.
                                     </p>
                                     <div className="flex justify-center gap-3 mt-4">
                                         <button onClick={() => handleSend("현재 가장 급한 업무가 뭐야?")} className="px-5 py-2.5 bg-white text-blue-600 text-sm font-bold rounded-xl hover:bg-blue-100 transition-colors shadow-sm border border-blue-100">
                                             🔥 가장 급한 업무?
                                         </button>
                                         <button onClick={() => handleSend("이번 주 업무 리포트 써줘")} className="px-5 py-2.5 bg-white text-blue-600 text-sm font-bold rounded-xl hover:bg-blue-100 transition-colors shadow-sm border border-blue-100">
                                             📊 주간 리포트 작성
                                         </button>
                                     </div>
                                 </div>
                             </div>
                        )}
                    </div>
                ) : (
                    <div className="w-full max-w-3xl mx-auto space-y-8">
                        {messages.map((m) => (
                            <div key={m.id} className={`group/message flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 
                                    ${m.role === 'model' ? 'bg-white border border-gray-100' : 'bg-indigo-600'}`}>
                                    {m.role === 'model' ? (
                                        <img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" className="w-full h-full" alt="Gemini" />
                                    ) : (
                                        <span className="text-xs font-bold text-white">
                                            {currentUser?.displayName ? currentUser.displayName.charAt(0).toUpperCase() : 'U'}
                                        </span>
                                    )}
                                </div>
                                
                                <div className={`flex flex-col max-w-[80%] ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                                    {m.image && (
                                        <div className="mb-2 overflow-hidden rounded-lg border border-gray-200 shadow-sm max-w-[200px]">
                                            <img src={m.image} alt="Uploaded content" className="w-full h-auto" />
                                        </div>
                                    )}
                                    <div className={`flex-1 text-base leading-relaxed whitespace-pre-wrap ${m.role === 'user' ? 'bg-[#F0F4F9] px-5 py-3 rounded-[20px] rounded-tr-sm' : 'pt-1 text-gray-800'}`}>
                                        {m.text}
                                        {m.isStreaming && <span className="inline-block w-1.5 h-4 ml-1 bg-blue-500 animate-pulse align-middle"></span>}
                                    </div>
                                    
                                    <div className={`mt-2 flex items-center gap-2 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-50 text-red-500 border border-red-100 select-none shadow-sm">
                                            <Calendar className="w-3 h-3" />
                                            <span className="text-[11px] font-bold tracking-wide">
                                                {new Date(m.timestamp || Date.now()).getMonth() + 1}. {new Date(m.timestamp || Date.now()).getDate()}.
                                            </span>
                                        </div>

                                        <button 
                                            onClick={() => handleDelete(m.id)}
                                            className="group/delete flex items-center justify-center w-7 h-7 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-red-50 hover:border-red-200 transition-all"
                                            title="메시지 삭제"
                                        >
                                            <Trash2 className="w-3.5 h-3.5 text-gray-400 group-hover/delete:text-red-500 transition-colors" />
                                        </button>

                                        {m.role === 'model' && m.modelName && (
                                            <span className={`ml-1 text-[10px] font-bold px-2 py-0.5 rounded-full border flex items-center gap-1 shadow-sm select-none
                                                ${m.modelName.includes('Pro') 
                                                    ? 'bg-indigo-50 text-indigo-600 border-indigo-100' 
                                                    : 'bg-white text-gray-600 border-gray-200'}`}>
                                                <Sparkles className="w-3 h-3" />
                                                {m.modelName}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-white p-6 pb-8">
                <div className="w-full max-w-3xl mx-auto relative group flex flex-col gap-2">
                    {selectedImage && (
                        <div className="bg-[#F0F4F9] rounded-2xl p-3 w-fit relative animate-fade-in shadow-sm border border-gray-200">
                             <div className="relative h-24 w-auto rounded-lg overflow-hidden">
                                <img src={selectedImage} alt="Preview" className="h-full w-auto object-contain" />
                             </div>
                             <button 
                                onClick={clearImage}
                                className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full p-1 hover:bg-black transition-colors"
                            >
                                <X className="w-3 h-3" />
                             </button>
                        </div>
                    )}

                    <div className={`flex items-center gap-2 bg-[#F0F4F9] rounded-full px-4 py-3 transition-all focus-within:shadow-md focus-within:bg-white focus-within:ring-1 focus-within:ring-gray-200 ${isStreaming ? 'opacity-70 cursor-not-allowed' : ''}`}>
                        <button 
                            onClick={() => fileInputRef.current?.click()}
                            className="p-2 rounded-full hover:bg-gray-200 text-gray-600 transition-colors relative"
                            title="이미지 업로드"
                        >
                            <ImageIcon className="w-5 h-5" />
                        </button>
                        <button 
                            onClick={handleMicClick}
                            className={`p-2 rounded-full hover:bg-gray-200 transition-colors relative 
                                ${isListening ? 'text-red-500 bg-red-50 animate-pulse' : 'text-gray-600'}`}
                            title="음성 입력"
                        >
                            <Mic className="w-5 h-5" />
                        </button>

                        <input 
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && !isStreaming && handleSend()}
                            placeholder={isListening ? "듣고 있는 중..." : (chatMode === 'general' ? "Enter a prompt here" : "Ask about your project...")}
                            className="flex-1 bg-transparent border-none focus:ring-0 text-gray-800 placeholder-gray-500 text-base"
                            disabled={isStreaming}
                        />

                        {(input.trim() || selectedImage) && (
                            <button 
                                onClick={() => handleSend()}
                                disabled={isStreaming}
                                className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-all animate-fade-in"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                    <div className="text-center mt-1 text-xs text-gray-400">
                        Gemini may display inaccurate info, including about people, so double-check its responses.
                    </div>
                </div>
            </div>
        </div>
    );
};
