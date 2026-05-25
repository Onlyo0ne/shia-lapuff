import axios from 'axios';

const API_BASE_URL = '/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const drinkApi = {
  getAll: () => api.get('/drinks'),
  getById: (id: number) => api.get(`/drinks/${id}`),
};

export const reviewApi = {
  getByDrinkId: (drinkId: number) => api.get(`/drinks/${drinkId}/reviews`),
  create: (drinkId: number, data: { rating: number; comment: string }) => 
    api.post(`/drinks/${drinkId}/reviews`, data),
};
