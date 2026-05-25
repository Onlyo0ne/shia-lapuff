// Mock данные для пользователя
export interface Achievement {
  id: string;
  title: string;
  icon: string;
  description: string;
  unlocked: boolean;
  progress: number;
  target: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  role: 'USER' | 'ADMIN';
  stats: {
    reviewsCount: number;
    triedCount: number;
  };
  triedDrinkIds: string[];
  achievements: Achievement[];
}

export const mockUser: User = {
  id: 'user1',
  name: 'Арсений',
  email: 'arseny@shialapuff.ru',
  avatarUrl: '/avatar-user.jpg',
  role: 'ADMIN',
  stats: {
    reviewsCount: 15,
    triedCount: 28
  },
  triedDrinkIds: ['1', '2', '3', '4', '5', '6', '7', '8'],
  achievements: [
    {
      id: 'ach1',
      title: 'Первый шаг',
      icon: '🎯',
      description: 'Оставьте первый отзыв',
      unlocked: true,
      progress: 1,
      target: 1
    },
    {
      id: 'ach2',
      title: 'Критик',
      icon: '✍️',
      description: 'Напишите 10 отзывов',
      unlocked: true,
      progress: 15,
      target: 10
    },
    {
      id: 'ach3',
      title: 'Дегустатор',
      icon: '🍷',
      description: 'Попробуйте 20 разных напитков',
      unlocked: true,
      progress: 28,
      target: 20
    },
    {
      id: 'ach4',
      title: 'Эксперт',
      icon: '🏆',
      description: 'Получите 100 лайков на отзывах',
      unlocked: false,
      progress: 67,
      target: 100
    },
    {
      id: 'ach5',
      title: 'Коллекционер',
      icon: '📚',
      description: 'Попробуйте все напитки из каталога',
      unlocked: false,
      progress: 8,
      target: 12
    },
    {
      id: 'ach6',
      title: 'Мастер слова',
      icon: '📝',
      description: 'Напишите отзыв длиной более 500 символов',
      unlocked: true,
      progress: 1,
      target: 1
    }
  ]
};

// Mock данные для админки
export interface Ingredient {
  id?: string;
  name: string;
  amount: number;
  unit: string;
}

export interface Recipe {
  id: string;
  drinkId: string;
  ingredients: Ingredient[];
  processSteps: string[];
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProcessItem {
  id: string;
  drinkId: string;
  drinkName: string;
  type: 'barrel' | 'jar';
  startDate: string;
  expectedEndDate: string;
  progress: number;
  status: 'fermenting' | 'aging' | 'ready';
  volume: number;
  ingredients: Ingredient[];
}

export interface AccountingRecord {
  id: string;
  type: 'income' | 'expense';
  name: string;
  volume: number;
  amount: number;
  date: string;
}

export const mockRecipes: Recipe[] = [
  {
    id: 'rec1',
    drinkId: '1',
    ingredients: [
      { id: 'i1', name: 'Спирт этиловый', amount: 1, unit: 'л' },
      { id: 'i2', name: 'Вода очищенная', amount: 1.5, unit: 'л' },
      { id: 'i3', name: 'Глюкоза', amount: 20, unit: 'г' }
    ],
    processSteps: [
      'Смешать спирт с водой в пропорции 1:1.5',
      'Добавить глюкозу и перемешать до полного растворения',
      'Отфильтровать через угольный фильтр',
      'Разлить по бутылкам и дать отстояться 3-5 дней'
    ],
    notes: 'Классический рецепт, проверенный временем',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-15'
  },
  {
    id: 'rec2',
    drinkId: '2',
    ingredients: [
      { id: 'i4', name: 'Спирт этиловый', amount: 1, unit: 'л' },
      { id: 'i5', name: 'Ржаной солод', amount: 100, unit: 'г' },
      { id: 'i6', name: 'Кориандр', amount: 5, unit: 'г' },
      { id: 'i7', name: 'Вода', amount: 0.5, unit: 'л' }
    ],
    processSteps: [
      'Обжарить ржаной солод до тёмного цвета',
      'Залить солод кипятком и настоять 2 часа',
      'Процедить настой',
      'Смешать со спиртом и добавить кориандр',
      'Настаивать 7 дней в тёмном месте',
      'Профильтровать и разлить'
    ],
    createdAt: '2024-02-05',
    updatedAt: '2024-02-10'
  }
];

export const mockProcessItems: ProcessItem[] = [
  {
    id: 'p1',
    drinkId: '2',
    drinkName: 'Бородинская Крепкая',
    type: 'barrel',
    startDate: '2024-03-01',
    expectedEndDate: '2024-04-01',
    progress: 75,
    status: 'aging',
    volume: 10,
    ingredients: [
      { name: 'Спирт', amount: 5, unit: 'л' },
      { name: 'Ржаной солод', amount: 500, unit: 'г' }
    ]
  },
  {
    id: 'p2',
    drinkId: '5',
    drinkName: 'Вишнёвая Настойка',
    type: 'jar',
    startDate: '2024-03-15',
    expectedEndDate: '2024-04-15',
    progress: 50,
    status: 'fermenting',
    volume: 5,
    ingredients: [
      { name: 'Вишня', amount: 2, unit: 'кг' },
      { name: 'Спирт', amount: 3, unit: 'л' },
      { name: 'Сахар', amount: 500, unit: 'г' }
    ]
  },
  {
    id: 'p3',
    drinkId: '1',
    drinkName: 'Шиа ЛаПафф Классик',
    type: 'barrel',
    startDate: '2024-02-01',
    expectedEndDate: '2024-03-01',
    progress: 100,
    status: 'ready',
    volume: 20,
    ingredients: [
      { name: 'Спирт', amount: 10, unit: 'л' },
      { name: 'Вода', amount: 15, unit: 'л' }
    ]
  },
  {
    id: 'p4',
    drinkId: '7',
    drinkName: 'Лимончелло Домашнее',
    type: 'jar',
    startDate: '2024-03-20',
    expectedEndDate: '2024-04-20',
    progress: 25,
    status: 'fermenting',
    volume: 3,
    ingredients: [
      { name: 'Лимоны', amount: 10, unit: 'шт' },
      { name: 'Спирт', amount: 2, unit: 'л' },
      { name: 'Сахарный сироп', amount: 1, unit: 'л' }
    ]
  }
];

export const mockAccountingRecords: AccountingRecord[] = [
  { id: 'a1', type: 'income', name: 'Спирт этиловый', volume: 20, amount: 5000, date: '2024-03-01' },
  { id: 'a2', type: 'income', name: 'Вишня свежая', volume: 5, amount: 750, date: '2024-03-10' },
  { id: 'a3', type: 'income', name: 'Лимоны', volume: 20, amount: 400, date: '2024-03-15' },
  { id: 'a4', type: 'expense', name: 'Бутылки (0.5л)', volume: 50, amount: 1500, date: '2024-03-05' },
  { id: 'a5', type: 'expense', name: 'Пробки', volume: 50, amount: 250, date: '2024-03-05' },
  { id: 'a6', type: 'expense', name: 'Этикетки', volume: 100, amount: 300, date: '2024-03-08' },
  { id: 'a7', type: 'income', name: 'Сахар', volume: 10, amount: 500, date: '2024-03-12' },
  { id: 'a8', type: 'income', name: 'Ржаной солод', volume: 2, amount: 600, date: '2024-03-18' }
];
