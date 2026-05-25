import { Drink } from '../../types';

interface BottleCardProps {
  drink: Drink;
  onClick: (drink: Drink) => void;
  size?: 'small' | 'medium' | 'large';
  showEdit?: boolean;
  onEdit?: (drink: Drink) => void;
  onDelete?: (drink: Drink) => void;
}

export function BottleCard({ 
  drink, 
  onClick, 
  size = 'medium',
  showEdit = false,
  onEdit,
  onDelete 
}: BottleCardProps) {
  const sizeClasses = {
    small: 'h-32',
    medium: 'h-48',
    large: 'h-64'
  };

  return (
    <div
      className={`relative bg-bg-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-opacity-100 group ${sizeClasses[size]}`}
      onClick={() => onClick(drink)}
      style={{ backgroundColor: '#1a1a1a' }}
    >
      {/* Изображение бутылки */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <img
          src={drink.imageUrl || '/placeholder-bottle.svg'}
          alt={drink.name}
          className="h-full w-auto object-contain drop-shadow-lg"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMjAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwIiB5PSIxMDAiIGZpbGw9IiM2NjYiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJvdHRsZTwvdGV4dD48L3N2Zz4=';
          }}
        />
      </div>

      {/* Кнопки редактирования для админки */}
      {showEdit && (
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit?.(drink);
            }}
            className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
            title="Редактировать"
          >
            ✏️
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete?.(drink);
            }}
            className="p-2 bg-red-600 rounded-full hover:bg-red-700 transition-colors"
            title="Удалить"
          >
            🗑️
          </button>
        </div>
      )}

      {/* Бейджи */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex justify-center gap-2">
          {/* Цена */}
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold text-white shadow-lg">
            {drink.price}
          </div>
          {/* Рейтинг */}
          <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-xs font-bold text-white shadow-lg">
            {drink.rating.toFixed(1)}
          </div>
          {/* Крепость */}
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white shadow-lg">
            {drink.strength}%
          </div>
        </div>
      </div>

      {/* Название напитка */}
      <div className="absolute top-2 left-0 right-0 text-center">
        <h3 className="text-sm font-bold text-white drop-shadow-lg px-2 line-clamp-2">
          {drink.name}
        </h3>
      </div>
    </div>
  );
}
