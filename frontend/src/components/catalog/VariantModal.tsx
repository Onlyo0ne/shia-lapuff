import { Drink } from '../../types';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../ui/Modal';
import { BottleCard } from './BottleCard';

interface VariantModalProps {
  drink: Drink | null;
  onClose: () => void;
}

export function VariantModal({ drink, onClose }: VariantModalProps) {
  const navigate = useNavigate();

  if (!drink) return null;

  const hasVariants = drink.variants && drink.variants.length > 0;

  // Для простоты используем моковые данные для вариантов
  // В реальности здесь был бы fetch данных вариантов
  const variantsToDisplay = hasVariants 
    ? [drink, ...drink.variants.map((id, index) => ({
        id: `variant-${index}`,
        name: `${drink.name} (Вариант ${index + 1})`,
        description: drink.description,
        imageUrl: drink.imageUrl,
        price: drink.price + index * 100,
        strength: drink.strength + index * 5,
        rating: drink.rating - index * 0.2,
      } as Drink))]
    : [drink];

  const handleVariantClick = (variantDrink: Drink) => {
    navigate(`/product/${variantDrink.id}`);
    onClose();
  };

  return (
    <Modal isOpen={!!drink} onClose={onClose} title="Выберите вариант">
      <div className="flex flex-col items-center gap-6">
        {!hasVariants ? (
          // Один вариант - показываем крупно
          <div className="w-full flex justify-center">
            <div className="h-80 w-40 relative cursor-pointer" onClick={() => handleVariantClick(drink)}>
              <img
                src={drink.imageUrl || '/placeholder-bottle.svg'}
                alt={drink.name}
                className="h-full w-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMjAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwIiB5PSIxMDAiIGZpbGw9IiM2NjYiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJvdHRsZTwvdGV4dD48L3N2Zz4=';
                }}
              />
            </div>
          </div>
        ) : (
          // Несколько вариантов - показываем в ряд
          <div className="flex flex-wrap justify-center gap-6">
            {variantsToDisplay.map((variant, index) => (
              <div
                key={variant.id || index}
                className="h-64 w-32 relative cursor-pointer group"
                onClick={() => handleVariantClick(variant)}
              >
                <img
                  src={variant.imageUrl || '/placeholder-bottle.svg'}
                  alt={variant.name}
                  className="h-full w-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMjAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwIiB5PSIxMDAiIGZpbGw9IiM2NjYiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJvdHRsZTwvdGV4dD48L3N2Zz4=';
                  }}
                />
                <p className="text-center text-white text-sm mt-2 font-semibold line-clamp-2">
                  {variant.name}
                </p>
              </div>
            ))}
          </div>
        )}

        <p className="text-gray-400 text-sm text-center">
          {hasVariants 
            ? 'Кликните на бутылку, чтобы перейти к детальной информации' 
            : 'Кликните, чтобы перейти к детальной информации'}
        </p>
      </div>
    </Modal>
  );
}
