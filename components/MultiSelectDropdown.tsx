
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, CheckSquare, Square } from './Icons';

interface MultiSelectDropdownProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

export const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  label,
  options,
  selected,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 pl-4 pr-3 py-2 rounded-full text-sm font-medium border transition-all
            ${
              selected.length > 0
                ? 'bg-blue-50 border-blue-200 text-blue-700'
                : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
      >
        <span>
          {selected.length > 0
            ? `${label} (${selected.length})`
            : `${label} 선택`}
        </span>
        <ChevronDown className="w-3 h-3" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 animate-fade-in">
          <div className="max-h-60 overflow-y-auto p-1.5 custom-scrollbar">
            {options.length === 0 ? (
                <div className="p-3 text-center text-xs text-gray-400">옵션이 없습니다.</div>
            ) : (
                options.map((option) => {
                const isSelected = selected.includes(option);
                return (
                    <button
                    key={option}
                    onClick={() => toggleOption(option)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-left
                        ${isSelected ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50 text-gray-700'}`}
                    >
                    {isSelected ? (
                        <CheckSquare className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    ) : (
                        <Square className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    )}
                    <span className="truncate">{option}</span>
                    </button>
                );
                })
            )}
          </div>
          {selected.length > 0 && (
              <div className="border-t border-gray-100 p-2 bg-gray-50">
                  <button 
                    onClick={() => onChange([])}
                    className="w-full py-1.5 text-xs text-gray-500 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
                  >
                      선택 해제
                  </button>
              </div>
          )}
        </div>
      )}
    </div>
  );
};
