import { useState, useMemo } from 'react';
import { mockDrinks } from '../../data/mockDrinks';
import { BottleCard } from '../../components/catalog/BottleCard';
import { VariantModal } from '../../components/catalog/VariantModal';
import { Drink } from '../../types';

type SortOption = 'rating' | 'price' | 'name' | 'date';

interface CatalogFiltersProps {
  onFilterChange: (filters: CatalogFiltersState) => void;
}

interface CatalogFiltersState {
  minStrength: number;
  maxStrength: number;
  minPrice: number;
  maxPrice: number;
  sortBy: SortOption;
}

export function CatalogFilters({ onFilterChange }: CatalogFiltersProps) {
  const [filters, setFilters] = useState<CatalogFiltersState>({
    minStrength: 0,
    maxStrength: 100,
    minPrice: 0,
    maxPrice: 1000,
    sortBy: 'rating',
  });

  const handleStrengthMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const newFilters = { ...filters, minStrength: value };
    if (value > filters.maxStrength) {
      newFilters.maxStrength = value;
    }
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleStrengthMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const newFilters = { ...filters, maxStrength: value };
    if (value < filters.minStrength) {
      newFilters.minStrength = value;
    }
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const newFilters = { ...filters, minPrice: value };
    if (value > filters.maxPrice) {
      newFilters.maxPrice = value;
    }
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const newFilters = { ...filters, maxPrice: value };
    if (value < filters.minPrice) {
      newFilters.minPrice = value;
    }
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilters = { ...filters, sortBy: e.target.value as SortOption };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-bg-card rounded-2xl p-6 mb-6 space-y-4">
      <h2 className="text-xl font-bold text-white mb-4">Фильтры</h2>
      
      {/* Крепость */}
      <div>
        <label className="text-gray-300 text-sm block mb-2">
          Крепость: {filters.minStrength}% - {filters.maxStrength}%
        </label>
        <div className="flex gap-4 items-center">
          <input
            type="range"
            min="0"
            max="100"
            value={filters.minStrength}
            onChange={handleStrengthMinChange}
            className="w-full accent-purple-500"
          />
          <input
            type="range"
            min="0"
            max="100"
            value={filters.maxStrength}
            onChange={handleStrengthMaxChange}
            className="w-full accent-purple-500"
          />
        </div>
      </div>

      {/* Цена */}
      <div>
        <label className="text-gray-300 text-sm block mb-2">
          Цена: {filters.minPrice}₽ - {filters.maxPrice}₽
        </label>
        <div className="flex gap-4 items-center">
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.minPrice}
            onChange={handlePriceMinChange}
            className="w-full accent-blue-500"
          />
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.maxPrice}
            onChange={handlePriceMaxChange}
            className="w-full accent-blue-500"
          />
        </div>
      </div>

      {/* Сортировка */}
      <div>
        <label className="text-gray-300 text-sm block mb-2">Сортировка</label>
        <select
          value={filters.sortBy}
          onChange={handleSortChange}
          className="w-full bg-primary-dark border border-gray-700 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-purple-500 transition-colors"
        >
          <option value="rating">По рейтингу</option>
          <option value="price">По цене</option>
          <option value="name">По алфавиту</option>
          <option value="date">По дате добавления</option>
        </select>
      </div>
    </div>
  );
}
