import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Wine, 
  MessageSquare, 
  User, 
  BookOpen, 
  FlaskConical, 
  Calculator,
  Menu,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
}

const menuItems = [
  { path: '/', label: 'Главная', icon: Home },
  { path: '/catalog', label: 'Каталог', icon: Wine },
  { path: '/reviews', label: 'Рецензии', icon: MessageSquare },
  { path: '/about', label: 'Обо мне', icon: User },
  { path: '/admin/recipes', label: 'Рецепты', icon: BookOpen },
  { path: '/admin/process', label: 'Процесс', icon: FlaskConical },
  { path: '/admin/accounting', label: 'Бух учет', icon: Calculator },
];

export function Sidebar({ isCollapsed: initialCollapsed = false, onToggle }: SidebarProps) {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(() => {
    const saved = localStorage.getItem('sidebar-collapsed');
    return saved ? JSON.parse(saved) : initialCollapsed;
  });

  useEffect(() => {
    localStorage.setItem('sidebar-collapsed', JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
    onToggle?.();
  };

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-full bg-bg-card border-r border-gray-800 transition-all duration-300 z-40',
        isCollapsed ? 'w-20' : 'w-64'
      )}
    >
      {/* Header with Logo */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        {!isCollapsed && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Wine className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-white text-lg">Shia LaPuff</span>
          </div>
        )}
        {isCollapsed && (
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto">
            <Wine className="w-6 h-6 text-white" />
          </div>
        )}
        <button
          onClick={handleToggle}
          className="p-2 hover:bg-gray-800 rounded-xl text-gray-400 hover:text-white transition-colors"
        >
          {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-3 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200',
                isActive
                  ? 'bg-accent-purple/20 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                isCollapsed && 'justify-center'
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && (
                <span className="font-medium">{item.label}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
          <p className="text-xs text-gray-500 text-center">
            © 2024 Shia LaPuff Production
          </p>
        </div>
      )}
    </aside>
  );
}
