import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const apiClient: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - добавляет токен авторизации
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - обрабатывает ошибки авторизации
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Токен недействителен - logout
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;

// Auth API
export const authAPI = {
  login: (email: string, password: string) => 
    apiClient.post('/auth/login', { email, password }),
  register: (email: string, name: string, password: string) => 
    apiClient.post('/auth/register', { email, name, password }),
  logout: () => apiClient.post('/auth/logout'),
};

// Drinks API
export const drinksAPI = {
  getAll: () => apiClient.get('/drinks'),
  getById: (id: string) => apiClient.get(`/drinks/${id}`),
  create: (data: any) => apiClient.post('/drinks', data),
  update: (id: string, data: any) => apiClient.put(`/drinks/${id}`, data),
  delete: (id: string) => apiClient.delete(`/drinks/${id}`),
};

// Reviews API
export const reviewsAPI = {
  getAll: (params?: any) => apiClient.get('/reviews', { params }),
  getById: (id: string) => apiClient.get(`/reviews/${id}`),
  create: (data: any) => apiClient.post('/reviews', data),
  like: (id: string) => apiClient.post(`/reviews/${id}/like`),
};

// Profile API
export const profileAPI = {
  getProfile: () => apiClient.get('/profile'),
  updateProfile: (data: any) => apiClient.put('/profile', data),
  uploadAvatar: (file: File) => {
    const formData = new FormData();
    formData.append('avatar', file);
    return apiClient.post('/profile/avatar', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
};

// Admin API
export const adminAPI = {
  // Recipes
  getRecipes: () => apiClient.get('/admin/recipes'),
  createRecipe: (data: any) => apiClient.post('/admin/recipes', data),
  updateRecipe: (id: string, data: any) => apiClient.put(`/admin/recipes/${id}`, data),
  deleteRecipe: (id: string) => apiClient.delete(`/admin/recipes/${id}`),
  
  // Process
  getProcessItems: () => apiClient.get('/admin/process'),
  updateProcessItem: (id: string, data: any) => apiClient.put(`/admin/process/${id}`, data),
  
  // Accounting
  getAccounting: () => apiClient.get('/admin/accounting'),
  addAccountingRecord: (data: any) => apiClient.post('/admin/accounting', data),
  
  // Stats
  getStats: () => apiClient.get('/admin/stats'),
};
