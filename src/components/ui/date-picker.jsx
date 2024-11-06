// src/components/ui/date-picker.jsx
import { useState } from 'react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Calendar } from 'lucide-react';

const months = [
  { value: '2024-09', label: '2024년 9월' },
  { value: '2024-10', label: '2024년 10월' },
  { value: '2024-11', label: '2024년 11월' },
];

export function DatePicker({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white border rounded-lg hover:bg-gray-50"
      >
        <Calendar className="w-4 h-4" />
        {months.find(m => m.value === value)?.label || '기간 선택'}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="p-1">
            {months.map((month) => (
              <button
                key={month.value}
                onClick={() => {
                  onChange(month.value);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-sm text-left rounded-md ${
                  value === month.value 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'hover:bg-gray-100'
                }`}
              >
                {month.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}