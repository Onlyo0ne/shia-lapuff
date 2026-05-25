// Mock данные для отзывов
export interface Review {
  id: string;
  userId: string;
  userName: string;
  avatarUrl: string;
  date: string;
  drinkId: string;
  drinkName: string;
  ratings: {
    smell: number;
    taste: number;
    strength: number;
    impression: number;
  };
  totalScore: number;
  text: string;
  likes: number;
  isLikedByCurrentUser: boolean;
}

export const mockReviews: Review[] = [
  {
    id: '1',
    userId: 'user1',
    userName: 'Алексей П.',
    avatarUrl: '/avatar1.jpg',
    date: '2024-03-15',
    drinkId: '1',
    drinkName: 'Шиа ЛаПафф Классик',
    ratings: { smell: 8, taste: 9, strength: 7, impression: 8 },
    totalScore: 8.0,
    text: 'Отличный продукт! Мягкий вкус, приятное послевкусие. Чувствуется качество сырья и правильный подход к производству. Рекомендую всем любителям классики.',
    likes: 12,
    isLikedByCurrentUser: false
  },
  {
    id: '2',
    userId: 'user2',
    userName: 'Дмитрий К.',
    avatarUrl: '/avatar2.jpg',
    date: '2024-03-18',
    drinkId: '2',
    drinkName: 'Бородинская Крепкая',
    ratings: { smell: 9, taste: 8, strength: 9, impression: 8 },
    totalScore: 8.5,
    text: 'Интересный вкус с нотками ржаного солода. Крепость чувствуется, но не перебивает общий букет. Хорошая закуска под мясные блюда.',
    likes: 8,
    isLikedByCurrentUser: true
  },
  {
    id: '3',
    userId: 'user3',
    userName: 'Сергей В.',
    avatarUrl: '/avatar3.jpg',
    date: '2024-03-20',
    drinkId: '5',
    drinkName: 'Вишнёвая Настойка',
    ratings: { smell: 7, taste: 9, strength: 6, impression: 8 },
    totalScore: 7.5,
    text: 'Сладкая, ароматная настойка. Идеально подходит для десерта или как дижестив. Вишня чувствуется очень хорошо, возможно даже слишком сладко для моего вкуса, но жена в восторге.',
    likes: 15,
    isLikedByCurrentUser: false
  },
  {
    id: '4',
    userId: 'user1',
    userName: 'Алексей П.',
    avatarUrl: '/avatar1.jpg',
    date: '2024-03-22',
    drinkId: '6',
    drinkName: 'Хреновуха',
    ratings: { smell: 8, taste: 7, strength: 8, impression: 7 },
    totalScore: 7.5,
    text: 'Острая, ядрёная настойка. Хрен чувствуется очень хорошо. Отлично идёт под солёные огурцы и сало. Не для слабонервных!',
    likes: 6,
    isLikedByCurrentUser: false
  },
  {
    id: '5',
    userId: 'user4',
    userName: 'Ирина М.',
    avatarUrl: '/avatar4.jpg',
    date: '2024-03-25',
    drinkId: '7',
    drinkName: 'Лимончелло Домашнее',
    ratings: { smell: 9, taste: 10, strength: 7, impression: 9 },
    totalScore: 8.75,
    text: 'Просто восхитительно! Настоящий итальянский вкус. Лимонная цедра ощущается в каждом глотке. Подаю охлаждённым после ужина - гости всегда в восторге.',
    likes: 20,
    isLikedByCurrentUser: true
  },
  {
    id: '6',
    userId: 'user5',
    userName: 'Михаил Р.',
    avatarUrl: '/avatar5.jpg',
    date: '2024-03-28',
    drinkId: '4',
    drinkName: 'Бородинская Экстра',
    ratings: { smell: 10, taste: 9, strength: 10, impression: 10 },
    totalScore: 9.75,
    text: 'Премиум качество! Выдержка в дубовой бочке даёт невероятный аромат и вкус. Это уже не просто самогон, а настоящий элитный напиток. Стоит своих денег.',
    likes: 25,
    isLikedByCurrentUser: false
  },
  {
    id: '7',
    userId: 'user2',
    userName: 'Дмитрий К.',
    avatarUrl: '/avatar2.jpg',
    date: '2024-03-30',
    drinkId: '3',
    drinkName: 'Бородинская Лайт',
    ratings: { smell: 7, taste: 8, strength: 6, impression: 7 },
    totalScore: 7.0,
    text: 'Лёгкая версия для тех, кто не любит крепкое. Вкус приятный, но не хватает той глубины, что у оригинальной Бородинской. Хорошо идёт в чистом виде.',
    likes: 4,
    isLikedByCurrentUser: false
  }
];
