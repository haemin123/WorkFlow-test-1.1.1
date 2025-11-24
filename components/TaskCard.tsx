import React from 'react';
import { Task, Priority } from '../types';
import { AlertCircle, Calendar, Clock, Trash2 } from './Icons';
import { formatDate } from '../utils/formatters';

interface TaskCardProps {
  task: Task;
  draggedTaskId: string | null;
  onClick: (task: Task) => void;
  onDragStart: (e: React.DragEvent, taskId: string) => void;
  onDragEnd: (e: React.DragEvent) => void;
  onDelete: (taskId: string) => void;
  index: number;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  draggedTaskId,
  onClick,
  onDragStart,
  onDragEnd,
  onDelete,
  index,
}) => {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, task.id)}
      onDragEnd={onDragEnd}
      className={`clean-card rounded-2xl cursor-grab active:cursor-grabbing group relative bg-white transition-all duration-300 flex flex-col overflow-hidden
          ${draggedTaskId === task.id ? 'shadow-none' : 'hover:translate-y-[-2px]'}
      `}
      style={{
        animationDelay: `${index * 50}ms`,
      }}
      onClick={() => onClick(task)}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <span
            className={`text-[10px] font-bold px-2.5 py-1 rounded-md select-none flex items-center gap-1
                  ${
                    task.priority === Priority.HIGH
                      ? 'bg-red-50 text-red-600'
                      : task.priority === Priority.MEDIUM
                      ? 'bg-orange-50 text-orange-600'
                      : 'bg-green-50 text-green-600'
                  }`}
          >
            {task.priority === Priority.HIGH && <AlertCircle className="w-3 h-3" />}
            {task.priority === Priority.HIGH
              ? '높음'
              : task.priority === Priority.MEDIUM
              ? '중간'
              : '낮음'}
          </span>

          {/* Explicit Circular Delete Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (confirm('이 업무를 삭제하시겠습니까?')) {
                onDelete(task.id);
              }
            }}
            className="flex items-center justify-center w-7 h-7 rounded-full border border-gray-200 text-gray-400 hover:bg-red-50 hover:border-red-200 hover:text-red-500 transition-all opacity-0 group-hover:opacity-100 z-10 bg-white"
            title="업무 삭제"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>

        <h4 className="text-gray-800 font-semibold text-[15px] mb-2 leading-snug group-hover:text-blue-600 transition-colors select-none">
          {task.title}
        </h4>
        <p className="text-gray-500 text-xs line-clamp-2 mb-4 font-light select-none leading-relaxed">
          {task.description}
        </p>

        <div className="flex items-end justify-between pt-3 border-t border-gray-100">
          {/* Left: Dates (Created + Due) */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5 text-[11px] text-gray-400" title="생성일">
              <Clock className="w-3 h-3" />
              <span>{formatDate(task.createdAt || Date.now())}</span>
            </div>
            <div
              className={`flex items-center gap-1.5 text-[11px] font-medium transition-colors
                      ${new Date(task.dueDate) < new Date() ? 'text-red-500' : 'text-gray-500'}`}
              title="마감일"
            >
              <Calendar className="w-3 h-3" />
              <span>{formatDate(task.dueDate)}</span>
            </div>
          </div>

          {/* Right: Meta info */}
          <div className="flex flex-col items-end gap-1.5">
            <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md max-w-[80px] truncate">
              {task.product}
            </span>
            <img
              src={`https://picsum.photos/seed/${task.assigneeId}/30/30`}
              className="w-6 h-6 rounded-full ring-2 ring-white shadow-sm select-none"
              alt="Assignee"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
