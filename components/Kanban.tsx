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
}

export const KanbanBoard: React.FC<KanbanProps> = ({
  tasks,
  onTaskClick,
  onStatusChange,
  onDeleteTask,
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
    return getSortedAndFilteredTasks(
      tasks,
      {
        query: searchQuery,
        priority: filterPriority,
        onlyMyTasks,
        currentUserId: 'u1', // Assuming 'u1' is logged in
      },
      sortBy
    );
  }, [tasks, searchQuery, filterPriority, onlyMyTasks, sortBy]);

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
          const colTasks = processedTasks.filter((t) => t.status === col.id);

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
            />
          );
        })}
      </div>
    </div>
  );
};
