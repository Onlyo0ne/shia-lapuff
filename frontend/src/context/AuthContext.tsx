import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../data/mockAdmin';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, name: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  };

  const login = async (email: string, password: string) => {
    // Mock login - в реальности будет запрос к API
    setIsLoading(true);
    try {
      // Имитация задержки сети
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Простая проверка для демо
      if (email === 'admin@shialapuff.ru' || email === 'arseny@shialapuff.ru') {
        const mockUser: User = {
          id: 'user1',
          name: 'Арсений',
          email: email,
          avatarUrl: '/avatar-user.jpg',
          role: 'ADMIN',
          stats: { reviewsCount: 15, triedCount: 28 },
          triedDrinkIds: ['1', '2', '3', '4', '5', '6', '7', '8'],
          achievements: []
        };
        
        const newToken = 'mock-jwt-token-' + Date.now();
        setToken(newToken);
        setUser(mockUser);
        localStorage.setItem('token', newToken);
        localStorage.setItem('user', JSON.stringify(mockUser));
      } else if (email === 'user@shialapuff.ru') {
        const mockUser: User = {
          id: 'user2',
          name: 'Пользователь',
          email: email,
          avatarUrl: '/avatar-user.jpg',
          role: 'USER',
          stats: { reviewsCount: 3, triedCount: 5 },
          triedDrinkIds: ['1', '2', '3'],
          achievements: []
        };
        
        const newToken = 'mock-jwt-token-' + Date.now();
        setToken(newToken);
        setUser(mockUser);
        localStorage.setItem('token', newToken);
        localStorage.setItem('user', JSON.stringify(mockUser));
      } else {
        throw new Error('Неверный email или пароль');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, name: string, password: string) => {
    // Mock registration
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const mockUser: User = {
        id: 'user' + Date.now(),
        name: name,
        email: email,
        avatarUrl: '/avatar-user.jpg',
        role: 'USER',
        stats: { reviewsCount: 0, triedCount: 0 },
        triedDrinkIds: [],
        achievements: []
      };
      
      const newToken = 'mock-jwt-token-' + Date.now();
      setToken(newToken);
      setUser(mockUser);
      localStorage.setItem('token', newToken);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      token, 
      isAuthenticated: !!token, 
      isLoading, 
      login, 
      register, 
      logout,
      checkAuth
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
