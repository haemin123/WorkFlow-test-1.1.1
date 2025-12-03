import React, { useState } from 'react';
import { Priority } from '../types';
import { Search, Filter, User, ArrowUpDown, Sparkles, XCircle, ChevronDown } from './Icons';
import { SortOption } from '../utils/taskHelpers';
import { MultiSelectDropdown } from './MultiSelectDropdown';

interface KanbanToolbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onlyMyTasks: boolean;
  setOnlyMyTasks: (onlyMy: boolean) => void;
  filterPriority: Priority | 'ALL';
  setFilterPriority: (priority: Priority | 'ALL') => void;
  sortBy: SortOption;
  setSortBy: (sort: SortOption) => void;
  
  // Multi-Select Filters
  departments: string[];
  selectedDepartments: string[];
  setSelectedDepartments: (depts: string[]) => void;
  
  teams: string[];
  selectedTeams: string[];
  setSelectedTeams: (teams: string[]) => void;

  positions: string[]; // Job Titles (직책)
  selectedPositions: string[];
  setSelectedPositions: (positions: string[]) => void;
}

export const KanbanToolbar: React.FC<KanbanToolbarProps> = ({
  searchQuery,
  setSearchQuery,
  onlyMyTasks,
  setOnlyMyTasks,
  filterPriority,
  setFilterPriority,
  sortBy,
  setSortBy,
  departments = [],
  selectedDepartments,
  setSelectedDepartments,
  teams = [],
  selectedTeams,
  setSelectedTeams,
  positions = [],
  selectedPositions,
  setSelectedPositions
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleSort = () => {
    const modes: SortOption[] = ['NONE', 'SMART', 'DUE_DATE', 'PRIORITY'];
    const nextIdx = (modes.indexOf(sortBy) + 1) % modes.length;
    setSortBy(modes[nextIdx]);
  };

  const activeFilterCount = selectedDepartments.length + selectedTeams.length + selectedPositions.length;

  return (
    <div className="flex flex-col gap-4 mb-6 px-2 flex-shrink-0">
      
      {/* Top Row: Search & Basic Filters */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          {/* Left: Search */}
          <div className="relative group w-full xl:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            <input
              type="text"
              placeholder="업무, 태그, 설명 검색..."
              className="w-full bg-white pl-10 pr-8 py-2.5 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500"
              >
                <XCircle className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Right: Filters & Sort */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 xl:pb-0 no-scrollbar">
            {/* Filter Toggle Button */}
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all whitespace-nowrap mr-2
                ${isFilterOpen || activeFilterCount > 0 
                    ? 'bg-blue-50 border-blue-200 text-blue-700' 
                    : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>필터</span>
              {activeFilterCount > 0 && (
                  <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full ml-1">
                      {activeFilterCount}
                  </span>
              )}
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* My Tasks Toggle */}
            <button
              onClick={() => setOnlyMyTasks(!onlyMyTasks)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all whitespace-nowrap
                            ${
                              onlyMyTasks
                                ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200'
                                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                            }`}
            >
              <User className="w-4 h-4" />
              내 업무
            </button>

            {/* Priority Chips */}
            <div className="flex bg-white rounded-full p-1 border border-gray-200 shadow-sm">
              {(['ALL', Priority.HIGH, Priority.MEDIUM, Priority.LOW] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setFilterPriority(p)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap
                                    ${
                                      filterPriority === p
                                        ? 'bg-gray-900 text-white shadow-sm'
                                        : 'text-gray-500 hover:bg-gray-100'
                                    }`}
                >
                  {p === 'ALL'
                    ? '전체'
                    : p === Priority.HIGH
                    ? '높음'
                    : p === Priority.MEDIUM
                    ? '중간'
                    : '낮음'}
                </button>
              ))}
            </div>

            <div className="w-px h-6 bg-gray-200 mx-2 hidden md:block"></div>

            {/* Sort Dropdown */}
            <button
              onClick={toggleSort}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all whitespace-nowrap min-w-[140px] justify-center
                            ${
                              sortBy !== 'NONE'
                                ? 'bg-indigo-50 text-indigo-600 border-indigo-100'
                                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                            }`}
            >
              {sortBy === 'SMART' ? (
                <Sparkles className="w-4 h-4 text-indigo-500" />
              ) : (
                <ArrowUpDown className="w-4 h-4" />
              )}
              <span>
                {sortBy === 'NONE' && '정렬 없음'}
                {sortBy === 'SMART' && '스마트 정렬'}
                {sortBy === 'DUE_DATE' && '마감일순'}
                {sortBy === 'PRIORITY' && '우선순위순'}
              </span>
            </button>
          </div>
      </div>

      {/* Bottom Row: Multi-Select Org Filters (Collapsible) */}
      {isFilterOpen && (
        <div className="flex flex-wrap items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 animate-fade-in-down">
            <div className="text-sm font-bold text-gray-500 mr-2">조직 필터:</div>
            
            <MultiSelectDropdown 
                label="본부" 
                options={departments} 
                selected={selectedDepartments} 
                onChange={setSelectedDepartments} 
            />
            
            <MultiSelectDropdown 
                label="팀" 
                options={teams} 
                selected={selectedTeams} 
                onChange={setSelectedTeams} 
            />

            <MultiSelectDropdown 
                label="직책" 
                options={positions} 
                selected={selectedPositions} 
                onChange={setSelectedPositions} 
            />
            
            {/* Reset Filters Button */}
            {(selectedDepartments.length > 0 || selectedTeams.length > 0 || selectedPositions.length > 0) && (
                <button 
                    onClick={() => {
                        setSelectedDepartments([]);
                        setSelectedTeams([]);
                        setSelectedPositions([]);
                    }}
                    className="text-xs text-gray-400 hover:text-red-500 underline ml-auto sm:ml-2"
                >
                    선택 초기화
                </button>
            )}
        </div>
      )}
    </div>
  );
};
