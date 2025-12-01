import React from 'react';
import { Task, TaskStatus } from '../types';
import { TaskCard } from './TaskCard';
import { Archive } from './Icons';

interface KanbanColumnProps {
  id: TaskStatus;
  label: string;
  dotColor: string;
  tasks: Task[];
  draggedTaskId: string | null;
  dragOverColumn: TaskStatus | null;
  onTaskClick: (task: Task) => void;
  onDragStart: (e: React.DragEvent, taskId: string) => void;
  onDragEnd: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent, status: TaskStatus) => void;
  onDragLeave: () => void;
  onDrop: (e: React.DragEvent, status: TaskStatus) => void;
  onDeleteTask: (taskId: string) => void;
  onArchiveTask?: (taskId: string) => void; // Added for archive functionality
  onArchiveAll?: (tasks: Task[]) => void; // Added for bulk archive
}

export const KanbanColumn: React.FC<KanbanColumnProps> = ({
  id,
  label,
  dotColor,
  tasks,
  draggedTaskId,
  dragOverColumn,
  onTaskClick,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDragLeave,
  onDrop,
  onDeleteTask,
  onArchiveTask,
  onArchiveAll,
}) => {
  const isDragOver = dragOverColumn === id;

  return (
    <div
      className={`w-[340px] flex flex-col h-full rounded-3xl transition-colors duration-300 ease-in-out px-2 py-2
            ${isDragOver ? 'bg-blue-50/60 ring-2 ring-blue-200 ring-inset' : 'bg-transparent'}
        `}
      onDragOver={(e) => onDragOver(e, id)}
      onDragLeave={onDragLeave}
      onDrop={(e) => onDrop(e, id)}
    >
      <div className="flex items-center justify-between mb-6 px-2 mt-2">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${dotColor}`}></div>
          <h3 className="font-bold text-gray-700 text-sm">{label}</h3>
        </div>
        <div className="flex items-center gap-2">
            {onArchiveAll && tasks.length > 0 && id === TaskStatus.DONE && (
                <button 
                    onClick={() => onArchiveAll(tasks)}
                    className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-md transition-colors"
                    title="이 컬럼의 모든 업무 보관"
                >
                    <Archive className="w-3 h-3" />
                    <span>모두 보관</span>
                </button>
            )}
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full transition-colors
                ${isDragOver ? 'bg-blue-200 text-blue-700' : 'bg-gray-100 text-gray-500'}
            `}
            >
              {tasks.length}
            </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-1 space-y-4 pb-20 custom-scrollbar">
        {tasks.length === 0 && !isDragOver ? (
          <div className="flex flex-col items-center justify-center h-32 text-gray-300 border-2 border-dashed border-gray-100 rounded-2xl">
            <span className="text-xs">업무 없음</span>
          </div>
        ) : (
          tasks.map((task, index) => (
            <TaskCard
              key={task.id}
              task={task}
              index={index}
              draggedTaskId={draggedTaskId}
              onClick={onTaskClick}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
              onDelete={onDeleteTask}
              onArchive={onArchiveTask && id === TaskStatus.DONE ? onArchiveTask : undefined} // Only pass onArchive for DONE column
            />
          ))
        )}

        {isDragOver && tasks.length === 0 && (
          <div className="h-32 rounded-2xl border-2 border-dashed border-blue-200 bg-blue-50/30 flex items-center justify-center">
            <span className="text-blue-400 text-sm font-medium">여기에 놓으세요</span>
          </div>
        )}
      </div>
    </div>
  );
};
