import React, { useState, useEffect } from 'react';
import { KnowledgeResource, ResourceType } from '../types';
import { knowledgeService } from '../services/knowledgeService';
import { Plus, X, Loader2, Trash2, ExternalLink, Video, FileText, File, User, Sparkles, CheckCircle2 } from './Icons';

// --- Resource Card Component ---
const ResourceCard = ({ 
    resource, 
    onDelete, 
    onClick 
}: { 
    resource: KnowledgeResource; 
    onDelete: (id: string) => void;
    onClick: (resource: KnowledgeResource) => void;
}) => {
    const { basicInfo, metadata, managementInfo } = resource;
    
    // Level Badge Colors
    const getLevelColor = (level: string) => {
        switch(level) {
            case 'BEGINNER': return 'bg-green-100 text-green-700';
            case 'INTERMEDIATE': return 'bg-blue-100 text-blue-700';
            case 'ADVANCED': return 'bg-purple-100 text-purple-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    // Type Icon
    const getTypeIcon = (type: ResourceType) => {
        switch(type) {
            case 'video': return <Video className="w-4 h-4 text-red-500" />;
            case 'article': return <FileText className="w-4 h-4 text-blue-500" />;
            default: return <File className="w-4 h-4 text-gray-500" />;
        }
    };

    return (
        <div 
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all group relative flex flex-col h-full cursor-pointer"
            onClick={() => onClick(resource)}
        >
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100 flex items-center gap-1.5">
                        {getTypeIcon(basicInfo.contentType)}
                        {basicInfo.contentType}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded ${getLevelColor(basicInfo.level)}`}>
                        {basicInfo.level}
                    </span>
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(resource.id);
                        }}
                        className="text-gray-300 hover:text-red-500 transition-colors p-1"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors flex items-center gap-2">
                    {basicInfo.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-3 mb-4 leading-relaxed">
                    {basicInfo.summary}
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {basicInfo.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="text-xs bg-gray-50 text-gray-600 px-2.5 py-1 rounded-full border border-gray-100">
                        #{tag}
                    </span>
                ))}
            </div>

            <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400 mt-auto">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-[10px]">
                        {basicInfo.author ? basicInfo.author.charAt(0) : <User className="w-3 h-3"/>}
                    </div>
                    <span>{basicInfo.author || 'Unknown'}</span>
                </div>
                <span>{metadata.uploadedAt || managementInfo.lastUpdated}</span>
            </div>
        </div>
    );
};

// --- Detail Modal Component ---
const ResourceDetailModal = ({ 
    resource, 
    isOpen, 
    onClose 
}: { 
    resource: KnowledgeResource | null; 
    isOpen: boolean; 
    onClose: () => void;
}) => {
    if (!isOpen || !resource) return null;

    const { basicInfo, metadata, searchOptimization, managementInfo } = resource;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative">
                {/* Header Section */}
                <div className="sticky top-0 bg-white z-10 px-8 py-6 border-b border-gray-100 flex items-start justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-[10px] font-bold uppercase bg-red-50 text-red-600 px-2 py-1 rounded flex items-center gap-1.5">
                                {basicInfo.contentType}
                            </span>
                            {metadata.uploadedAt && (
                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                    <CheckCircle2 className="w-3 h-3" /> {metadata.uploadedAt}
                                </span>
                            )}
                            {metadata.duration && (
                                <span className="text-xs text-gray-400 flex items-center gap-1">
                                    ⏱️ {Math.round(metadata.duration / 60)}분
                                </span>
                            )}
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">{basicInfo.title}</h2>
                        <p className="text-sm text-gray-500">By {basicInfo.author || 'Unknown'}</p>
                    </div>
                    <button 
                        onClick={onClose} 
                        className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-all"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content Body */}
                <div className="p-8 space-y-8">
                    {/* AI Summary Section */}
                    <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
                        <div className="flex items-center gap-2 mb-3">
                            <Sparkles className="w-5 h-5 text-blue-600" />
                            <h3 className="font-bold text-gray-900">AI 요약</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-sm">
                            {basicInfo.summary}
                        </p>
                    </div>

                    {/* Chapters Section */}
                    {searchOptimization.chapters && searchOptimization.chapters.length > 0 && (
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                                <h3 className="font-bold text-gray-900">주요 챕터</h3>
                            </div>
                            <div className="space-y-3">
                                {searchOptimization.chapters.map((chapter, idx) => (
                                    <div key={idx} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                        <div className="flex-shrink-0 w-16 text-xs font-mono text-gray-500 bg-white rounded border border-gray-200 flex items-center justify-center h-8">
                                            {chapter.timestamp}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-sm mb-1">{chapter.title}</h4>
                                            <p className="text-xs text-gray-500">{chapter.summary}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tags Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <File className="w-5 h-5 text-gray-400" />
                            <h3 className="font-bold text-gray-900">관련 태그</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {basicInfo.tags.map((tag, idx) => (
                                <span key={idx} className="px-3 py-1.5 bg-gray-50 text-gray-600 rounded-full text-sm font-medium border border-gray-200 hover:border-gray-300 transition-colors">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="sticky bottom-0 bg-white p-6 border-t border-gray-100 flex justify-between items-center rounded-b-3xl">
                     <a 
                        href={managementInfo.originalFileUrl || '#'} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 bg-gray-900 hover:bg-black text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors mr-4"
                     >
                        원본 자료 보러가기
                        <ExternalLink className="w-4 h-4" />
                     </a>
                     <button 
                        onClick={onClose}
                        className="px-8 py-3.5 border border-gray-200 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition-colors"
                     >
                        닫기
                     </button>
                </div>
            </div>
        </div>
    );
};

// --- Add Modal Component ---
const AddResourceModal = ({ isOpen, onClose, onAdd }: { isOpen: boolean; onClose: () => void; onAdd: (url: string) => Promise<void> }) => {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!url.trim()) return;
        
        setLoading(true);
        setError('');
        try {
            await onAdd(url);
            setUrl('');
            onClose();
        } catch (err: any) {
            setError(err.message || '분석 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <X className="w-5 h-5" />
                </button>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">새로운 자료 추가</h3>
                <p className="text-sm text-gray-500 mb-6">URL을 입력하면 AI가 자동으로 내용을 요약하고 태그를 생성합니다.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input 
                            type="url" 
                            placeholder="https://..." 
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                            autoFocus
                        />
                        {error && <p className="text-xs text-red-500 mt-2 ml-1">{error}</p>}
                    </div>
                    
                    <button 
                        type="submit" 
                        disabled={loading || !url}
                        className="w-full py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                        {loading ? 'AI 분석 중...' : '추가하기'}
                    </button>
                </form>
            </div>
        </div>
    );
};

interface KnowledgeHubProps {
    searchQuery: string;
    isAddModalOpen: boolean;
    onCloseAddModal: () => void;
}

// --- Main Page Component ---
export const KnowledgeHub: React.FC<KnowledgeHubProps> = ({ searchQuery, isAddModalOpen, onCloseAddModal }) => {
    const [resources, setResources] = useState<KnowledgeResource[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedResource, setSelectedResource] = useState<KnowledgeResource | null>(null);

    // Initial Load
    useEffect(() => {
        loadResources();
    }, []);

    const loadResources = async () => {
        setLoading(true);
        try {
            const data = await knowledgeService.getAllResources();
            setResources(data);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const handleAddResource = async (url: string) => {
        await knowledgeService.addResourceFromUrl(url);
        await loadResources(); // Refresh list
    };

    const handleDeleteResource = async (id: string) => {
        if (!confirm('정말 삭제하시겠습니까?')) return;
        await knowledgeService.deleteResource(id);
        setResources(prev => prev.filter(r => r.id !== id));
        if (selectedResource?.id === id) {
            setSelectedResource(null);
        }
    };

    // Filter Logic
    const filteredResources = resources.filter(r => 
        r.basicInfo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.basicInfo.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-8 bg-gray-50/30">
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <Loader2 className="w-8 h-8 text-gray-300 animate-spin" />
                    </div>
                ) : filteredResources.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-96 text-gray-400">
                        <FileText className="w-12 h-12 mb-4 opacity-20" />
                        <p>등록된 자료가 없습니다.</p>
                        {/* We can't easily trigger the modal from here if the button is in the header, 
                            unless we pass a prop for 'requestOpenModal'. 
                            But for now, let's just show the message. */}
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredResources.map(resource => (
                                <ResourceCard 
                                    key={resource.id} 
                                    resource={resource} 
                                    onDelete={handleDeleteResource}
                                    onClick={setSelectedResource}
                                />
                            ))}
                        </div>
                        <div className="mt-8 text-xs text-gray-400 text-right">
                            Total {filteredResources.length} resources
                        </div>
                    </>
                )}
            </div>

            {/* Modals */}
            <AddResourceModal 
                isOpen={isAddModalOpen} 
                onClose={onCloseAddModal} 
                onAdd={handleAddResource}
            />
            
            <ResourceDetailModal 
                resource={selectedResource}
                isOpen={!!selectedResource}
                onClose={() => setSelectedResource(null)}
            />
        </div>
    );
};
