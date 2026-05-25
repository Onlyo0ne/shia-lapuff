import { useState } from 'react';

interface RatingDotsProps {
  value: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
  label?: string;
}

export function RatingDots({ value, onChange, readonly = false, label }: RatingDotsProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const displayValue = hoverValue !== null ? hoverValue : value;

  return (
    <div className="flex flex-col gap-1">
      {label && <span className="text-sm text-text-secondary">{label}</span>}
      <div className="flex items-center gap-1.5">
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            type="button"
            disabled={readonly}
            className={`
              w-6 h-6 rounded-full transition-all duration-200
              ${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'}
              ${num <= displayValue 
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg' 
                : 'bg-bg-card border border-gray-600'}
            `}
            onClick={() => !readonly && onChange?.(num)}
            onMouseEnter={() => !readonly && setHoverValue(num)}
            onMouseLeave={() => !readonly && setHoverValue(null)}
          />
        ))}
        <span className="ml-2 text-sm text-text-secondary w-6">{displayValue}</span>
      </div>
    </div>
  );
}
