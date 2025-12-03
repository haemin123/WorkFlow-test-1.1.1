// src/components/KnowledgeHub.tsx
import React, { useState, useEffect } from 'react';
import { knowledgeService } from '../services/knowledgeService';
import { KnowledgeResource, BasicInfo }re-importing from "../types";
import { PlusCircle, Search, Trash2, ArrowRight } from 'lucide-react';
import { AIViews } from './AIViews'; // Assuming AIViews is in the same folder

const KnowledgeHub: React.FC = () => {
  const [resources, setResources] = useState<KnowledgeResource[]>([]);
  const [filteredResources, setFilteredResources] = useState<KnowledgeResource[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [urlInput, setUrlInput] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedResource, setSelectedResource] = useState<KnowledgeResource | null>(null);

  const fetchResources = async () => {
    try {
      setLoading(true);
      const data = await knowledgeService.getResources();
      setResources(data);
      setFilteredResources(data);
      setError(null);
    } catch (err) {
      setError('Failed to load resources.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

  useEffect(() => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = resources.filter(resource =>
      resource.basicInfo.title.toLowerCase().includes(lowercasedTerm) ||
      resource.basicInfo.summary.toLowerCase().includes(lowercasedTerm) ||
      resource.basicInfo.tags.some(tag => tag.toLowerCase().includes(lowercasedTerm)) ||
      resource.searchOptimization.keywords.some(kw => kw.toLowerCase().includes(lowercasedTerm))
    );
    setFilteredResources(filtered);
  }, [searchTerm, resources]);

  const handleAddResource = async () => {
    if (!urlInput.trim()) return;
    setIsAnalyzing(true);
    setError(null);
    try {
      await knowledgeService.addResourceFromUrl(urlInput);
      setUrlInput('');
      await fetchResources(); // Refetch all resources
    } catch (err) {
      setError('Failed to analyze and add the resource.');
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };
  
  const handleDeleteResource = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this resource?')) return;
    try {
      await knowledgeService.deleteResource(id);
      await fetchResources(); // Refetch
    } catch (err) {
      setError('Failed to delete the resource.');
      console.error(err);
    }
  };
  
  if (selectedResource) {
    return (
      <AIViews 
        resource={selectedResource} 
        onBack={() => setSelectedResource(null)}
      />
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Knowledge Hub</h1>
        <p className="mt-2 text-lg text-gray-600">Centralized intelligence from articles, videos, and documents.</p>
      </header>

      <div className="mb-8 p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Add New Knowledge</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            placeholder="Enter a URL (e.g., article, YouTube video)"
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition"
            disabled={isAnalyzing}
          />
          <button
            onClick={handleAddResource}
            disabled={isAnalyzing || !urlInput.trim()}
            className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
          >
            <PlusCircle size={20} className="mr-2" />
            {isAnalyzing ? 'Analyzing...' : 'Add Resource'}
          </button>
        </div>
        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by title, tag, or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-10">
          <p className="text-gray-500">Loading resources...</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredResources.map(resource => (
            <ResourceCard 
              key={resource.id} 
              resource={resource} 
              onDelete={handleDeleteResource}
              onSelect={() => setSelectedResource(resource)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Sub-component for displaying a single resource
const ResourceCard: React.FC<{ resource: KnowledgeResource; onDelete: (id: string) => void; onSelect: () => void; }> = ({ resource, onDelete, onSelect }) => {
  const { title, summary, level, tags, contentType } = resource.basicInfo;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 h-full flex flex-col">
      <div className="p-5 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
            contentType === 'video' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
          }`}>{contentType}</span>
           <span className={`text-xs font-medium px-2 py-1 rounded-full ${
              level === 'BEGINNER' ? 'bg-green-100 text-green-800'
            : level === 'INTERMEDIATE' ? 'bg-yellow-100 text-yellow-800'
            : 'bg-purple-100 text-purple-800'
          }`}>{level}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 truncate">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">{summary}</p>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map(tag => (
            <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs font-medium rounded-md">{tag}</span>
          ))}
        </div>
      </div>
      <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
        <button onClick={(e) => { e.stopPropagation(); onDelete(resource.id); }} className="text-gray-400 hover:text-red-500">
          <Trash2 size={18} />
        </button>
        <button onClick={onSelect} className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center">
          View Details <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default KnowledgeHub;
