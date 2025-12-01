import React, { useState, useMemo } from 'react';
import { Task, TaskStatus, Priority } from '../types';
import { KANBAN_COLUMNS } from '../constants';
import { getSortedAndFilteredTasks, SortOption } from '../utils/taskHelpers';
import { KanbanToolbar } from './KanbanToolbar';
import { KanbanColumn } from './KanbanColumn';

interface KanbanProps {
  tasks: Task[];
  onTaskClick: (task: Task) => void;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDeleteTask: (taskId: string) => void;
  onArchiveTask?: (taskId: string) => void; // Optional Archive Handler
  onArchiveAll?: (tasks: Task[]) => void; // Bulk Archive
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

  // --- Smart Logic using Utility ---
  const processedTasks = useMemo(() => {
    // 1. First, filter out archived tasks and trashed tasks for the main board
    const activeTasks = tasks.filter(t => !t.archived && !t.inTrash);

    // 2. Then apply sorting and filtering
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
  }, [tasks, searchQuery, filterPriority, onlyMyTasks, sortBy, currentUser]);

  // Drag Handlers
  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    setDraggedTaskId(taskId);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', taskId);
    const el = e.target as HTMLElement;
    setTimeout(() => el.classList.add('opacity-50', 'scale-95', 'grayscale'), 0);
  };

  const handleDragEnd = (e: React.DragEvent) => {
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
      />

      {/* --- Kanban Columns (Dynamic Rendering) --- */}
      <div className="flex gap-8 h-full min-w-max pb-4 flex-1">
        {KANBAN_COLUMNS.map((col) => {
          // Fix: CHECKED 컬럼에 SENT(승인) 상태도 포함하여 데이터 호환성 확보
          // '검토/승인' 탭에서 Checked 상태와 Sent 상태를 모두 보여줍니다.
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
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onDeleteTask={onDeleteTask}
              onArchiveTask={onArchiveTask} // Pass archive handler
              onArchiveAll={onArchiveAll} // Pass bulk archive handler
            />
          );
        })}
      </div>
    </div>
  );
};
