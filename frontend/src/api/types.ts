export interface Drink {
  id: number;
  name: string;
  description: string;
  abv: number; // alcohol by volume
  status: 'fermenting' | 'aging' | 'ready' | 'finished';
  createdAt: string;
  imageUrl?: string;
}

export interface Review {
  id: number;
  drinkId: number;
  userId: number;
  rating: number; // 1-10
  comment: string;
  createdAt: string;
}

export interface Recipe {
  id: number;
  drinkId: number;
  ingredients: string;
  process: string;
  notes?: string;
}
