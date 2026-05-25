import { useState, useEffect } from 'react';
import { mockDrinks } from '../../data/mockDrinks';
import { BottleCard } from '../../components/catalog/BottleCard';
import { VariantModal } from '../../components/catalog/VariantModal';
import { CatalogFilters } from '../../components/catalog/CatalogFilters';
import { Drink } from '../../types';

type SortOption = 'rating' | 'price' | 'name' | 'date';

interface CatalogFiltersState {
  minStrength: number;
  maxStrength: number;
  minPrice: number;
  maxPrice: number;
  sortBy: SortOption;
}

export function CatalogPage() {
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);
  const [filters, setFilters] = useState<CatalogFiltersState>({
    minStrength: 0,
    maxStrength: 100,
    minPrice: 0,
    maxPrice: 1000,
    sortBy: 'rating',
  });

  const filteredAndSortedDrinks = (() => {
    let result = [...mockDrinks];

    // Фильтрация
    result = result.filter(
      (drink) =>
        drink.strength >= filters.minStrength &&
        drink.strength <= filters.maxStrength &&
        drink.price >= filters.minPrice &&
        drink.price <= filters.maxPrice
    );

    // Сортировка
    switch (filters.sortBy) {
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'price':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'date':
        result.sort((a, b) => b.id.localeCompare(a.id)); // Для моков используем id как дату
        break;
    }

    return result;
  })();

  const handleFilterChange = (newFilters: CatalogFiltersState) => {
    setFilters(newFilters);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Каталог напитков</h1>

      {/* Фильтры */}
      <CatalogFilters onFilterChange={handleFilterChange} />

      {/* Сетка каталога */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredAndSortedDrinks.map((drink) => (
          <BottleCard
            key={drink.id}
            drink={drink}
            onClick={setSelectedDrink}
          />
        ))}
      </div>

      {filteredAndSortedDrinks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">Напитки не найдены</p>
        </div>
      )}

      {/* Модалка выбора вариантов */}
      <VariantModal
        drink={selectedDrink}
        onClose={() => setSelectedDrink(null)}
      />
    </div>
  );
}
