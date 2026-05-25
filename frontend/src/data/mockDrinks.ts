// Mock данные для напитков
export interface Drink {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  strength: number;
  rating: number;
  variants?: string[];
  category?: string;
  createdAt?: string;
}

export const mockDrinks: Drink[] = [
  {
    id: '1',
    name: 'Шиа ЛаПафф Классик',
    description: 'Классический рецепт с мягким вкусом и приятным послевкусием',
    imageUrl: '/bottle1.svg',
    price: 450,
    strength: 40,
    rating: 4.8,
    category: 'Водка',
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    name: 'Бородинская Крепкая',
    description: 'Настойка на ржаном солоде с нотками кориандра',
    imageUrl: '/bottle2.svg',
    price: 520,
    strength: 45,
    rating: 4.6,
    variants: ['3', '4'],
    category: 'Настойка',
    createdAt: '2024-02-10'
  },
  {
    id: '3',
    name: 'Бородинская Лайт',
    description: 'Облегченная версия Бородинской с меньшим содержанием спирта',
    imageUrl: '/bottle3.svg',
    price: 480,
    strength: 35,
    rating: 4.5,
    category: 'Настойка',
    createdAt: '2024-02-12'
  },
  {
    id: '4',
    name: 'Бородинская Экстра',
    description: 'Премиум версия с выдержкой в дубовой бочке',
    imageUrl: '/bottle4.svg',
    price: 650,
    strength: 50,
    rating: 4.9,
    category: 'Настойка',
    createdAt: '2024-02-15'
  },
  {
    id: '5',
    name: 'Вишнёвая Настойка',
    description: 'Сладкая настойка на спелой вишне',
    imageUrl: '/bottle5.svg',
    price: 550,
    strength: 30,
    rating: 4.7,
    category: 'Ликёр',
    createdAt: '2024-03-01'
  },
  {
    id: '6',
    name: 'Хреновуха',
    description: 'Острая настойка на хрене с мёдом',
    imageUrl: '/bottle6.svg',
    price: 490,
    strength: 42,
    rating: 4.4,
    category: 'Настойка',
    createdAt: '2024-03-10'
  },
  {
    id: '7',
    name: 'Лимончелло Домашнее',
    description: 'Итальянский лимонный ликёр по домашнему рецепту',
    imageUrl: '/bottle7.svg',
    price: 580,
    strength: 28,
    rating: 4.8,
    variants: ['8'],
    category: 'Ликёр',
    createdAt: '2024-03-20'
  },
  {
    id: '8',
    name: 'Лимончелло Экстра',
    description: 'Усиленная версия с цедрой сицилийских лимонов',
    imageUrl: '/bottle8.svg',
    price: 620,
    strength: 32,
    rating: 4.9,
    category: 'Ликёр',
    createdAt: '2024-03-22'
  }
];
