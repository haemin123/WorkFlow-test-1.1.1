import React, { useState, useMemo, useEffect } from 'react';
import { Task, TaskStatus, Priority, User } from '../types';
import { KANBAN_COLUMNS, MOCK_USERS } from '../constants';
import { getSortedAndFilteredTasks, SortOption } from '../utils/taskHelpers';
import { KanbanToolbar } from './KanbanToolbar';
import { KanbanColumn } from './KanbanColumn';
import { authService } from '../services/authService';

interface KanbanProps {
  tasks: Task[];
  onTaskClick: (task: Task) => void;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDeleteTask: (taskId: string) => void;
  onArchiveTask?: (taskId: string) => void; 
  onArchiveAll?: (tasks: Task[]) => void; 
  currentUser?: any; 
}

export const KanbanBoard: React.FC<KanbanProps> = ({
  tasks,
  onTaskClick,
  onStatusChange,
  onDeleteTask,
  onArchiveTask,
  onArchiveAll,
  currentUser
}) => {
  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);
  const [dragOverColumn, setDragOverColumn] = useState<TaskStatus | null>(null);

  // Filter & Sort State
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPriority, setFilterPriority] = useState<Priority | 'ALL'>('ALL');
  const [onlyMyTasks, setOnlyMyTasks] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>('NONE');

  // Multi-Select Org Filters
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]); // Job Titles

  const [departments, setDepartments] = useState<string[]>([]);
  const [teams, setTeams] = useState<string[]>([]);
  const [positions, setPositions] = useState<string[]>([]);
  const [userMap, setUserMap] = useState<Record<string, User>>({});

  // Load Users for Filtering
  useEffect(() => {
      const loadUsers = async () => {
          try {
              const users = await authService.getAllUsers();
              
              // Enhance Mock Users with Fake Org Data for Demo
              const enhancedMockUsers = MOCK_USERS.map(u => ({
                  ...u,
                  department: u.id === 'u1' ? '웹 애플리케이션' : '모바일 앱',
                  team: u.id === 'u1' ? '프론트엔드' : '디자인',
                  jobTitle: u.id === 'u1' ? '팀장' : '파트원'
              }));

              const map: Record<string, User> = {};
              
              [...enhancedMockUsers, ...users].forEach(u => {
                  map[u.id] = u;
              });

              const deptSet = new Set<string>();
              const teamSet = new Set<string>();
              const posSet = new Set<string>();

              Object.values(map).forEach(u => {
                  if (u.department) deptSet.add(u.department);
                  if (u.team) teamSet.add(u.team);
                  if (u.jobTitle) posSet.add(u.jobTitle);
              });

              setUserMap(map);
              setDepartments(Array.from(deptSet).sort());
              setTeams(Array.from(teamSet).sort());
              setPositions(Array.from(posSet).sort());
          } catch (e) {
              console.error("Failed to load users for filtering", e);
          }
      };
      loadUsers();
  }, []);

  // --- Smart Logic using Utility + Org Filter ---
  const processedTasks = useMemo(() => {
    // 1. First, filter out archived tasks and trashed tasks for the main board
    let activeTasks = tasks.filter(t => !t.archived && !t.inTrash);

    // 2. Org Filtering (Department, Team, Position) - Multi-Select Support
    if (selectedDepartments.length > 0) {
        activeTasks = activeTasks.filter(t => {
            const user = userMap[t.assigneeId];
            return user && user.department && selectedDepartments.includes(user.department);
        });
    }

    if (selectedTeams.length > 0) {
        activeTasks = activeTasks.filter(t => {
            const user = userMap[t.assigneeId];
            return user && user.team && selectedTeams.includes(user.team);
        });
    }

    if (selectedPositions.length > 0) {
        activeTasks = activeTasks.filter(t => {
            const user = userMap[t.assigneeId];
            return user && user.jobTitle && selectedPositions.includes(user.jobTitle);
        });
    }

    // 3. Then apply sorting and filtering (Search, Priority, MyTasks)
    return getSortedAndFilteredTasks(
      activeTasks,
      {
        query: searchQuery,
        priority: filterPriority,
        onlyMyTasks,
        currentUserId: currentUser?.uid || 'u1', 
      },
      sortBy
    );
  }, [tasks, searchQuery, filterPriority, onlyMyTasks, sortBy, currentUser, selectedDepartments, selectedTeams, selectedPositions, userMap]);

  // Drag Handlers (omitted for brevity, same as before)
  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    setDraggedTaskId(taskId);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', taskId);
    const el = e.target as HTMLElement;
    setTimeout(() => el.classList.add('opacity-50', 'scale-95', 'grayscale'), 0);
  };

  const handleDragEnd = (e: React.DragEvent, status: TaskStatus) => {
    setDraggedTaskId(null);
    setDragOverColumn(null);
    const el = e.target as HTMLElement;
    el.classList.remove('opacity-50', 'scale-95', 'grayscale');
  };

  const handleDragOver = (e: React.DragEvent, status: TaskStatus) => {
    e.preventDefault();
    if (dragOverColumn !== status) setDragOverColumn(status);
  };

  const handleDragLeave = () => {
    setDragOverColumn(null);
  };

  const handleDrop = (e: React.DragEvent, status: TaskStatus) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/plain');
    if (taskId) onStatusChange(taskId, status);
    setDragOverColumn(null);
    setDraggedTaskId(null);
  };

  return (
    <div className="flex flex-col h-full">
      {/* --- Smart Toolbar --- */}
      <KanbanToolbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onlyMyTasks={onlyMyTasks}
        setOnlyMyTasks={setOnlyMyTasks}
        filterPriority={filterPriority}
        setFilterPriority={setFilterPriority}
        sortBy={sortBy}
        setSortBy={setSortBy}
        
        departments={departments}
        selectedDepartments={selectedDepartments}
        setSelectedDepartments={setSelectedDepartments}
        
        teams={teams}
        selectedTeams={selectedTeams}
        setSelectedTeams={setSelectedTeams}

        positions={positions}
        selectedPositions={selectedPositions}
        setSelectedPositions={setSelectedPositions}
      />

      {/* --- Kanban Columns (Dynamic Rendering) --- */}
      <div className="flex gap-8 h-full min-w-max pb-4 flex-1">
        {KANBAN_COLUMNS.map((col) => {
          const colTasks = processedTasks.filter((t) => {
              if (col.id === TaskStatus.CHECKED) {
                  return t.status === TaskStatus.CHECKED || (t.status as string) === 'SENT';
              }
              return t.status === col.id;
          });

          return (
            <KanbanColumn
              key={col.id}
              id={col.id}
              label={col.label}
              dotColor={col.dotColor}
              tasks={colTasks}
              draggedTaskId={draggedTaskId}
              dragOverColumn={dragOverColumn}
              onTaskClick={onTaskClick}
              onDragStart={handleDragStart}
              onDragEnd={(e) => handleDragEnd(e, col.id)}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onDeleteTask={onDeleteTask}
              onArchiveTask={onArchiveTask} 
              onArchiveAll={onArchiveAll} 
            />
          );
        })}
      </div>
    </div>
  );
};
