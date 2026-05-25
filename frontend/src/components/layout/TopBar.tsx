import { useState, useRef, useEffect } from 'react';
import { Search, User as UserIcon, LogOut, Settings, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

interface TopBarProps {
  onMenuClick?: () => void;
}

interface User {
  displayName: string;
  email: string;
  avatar?: string;
}

export function TopBar({ onMenuClick }: TopBarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Mock user data (в реальности будет из контекста авторизации)
  const user: User = {
    displayName: 'Арсений',
    email: 'arseny@example.com',
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Логика выхода (пока заглушка)
    console.log('Logout');
    setIsDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-bg-card/80 backdrop-blur-md border-b border-gray-800 z-30">
      <div className="flex items-center justify-between h-full px-4">
        {/* Left side - Mobile menu button */}
        <div className="flex items-center gap-3">
          <Button
            variant="icon"
            size="sm"
            onClick={onMenuClick}
            className="lg:hidden"
          >
            <Search className="w-5 h-5" />
          </Button>
          
          {/* Search */}
          <div className="relative hidden sm:block w-96">
            <input
              type="text"
              placeholder="Поиск напитков..."
              className="w-full bg-gray-800/50 border border-gray-700 rounded-xl pl-10 pr-4 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Right side - User menu */}
        <div className="flex items-center gap-3" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 p-2 hover:bg-gray-800 rounded-xl transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <UserIcon className="w-5 h-5 text-white" />
            </div>
            <span className="hidden md:block font-medium text-gray-200">{user.displayName}</span>
            <ChevronDown className={cn("w-4 h-4 text-gray-400 transition-transform", isDropdownOpen && "rotate-180")} />
          </button>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute top-full right-4 mt-2 w-56 bg-bg-card border border-gray-700 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="p-4 border-b border-gray-700">
                <p className="font-medium text-white">{user.displayName}</p>
                <p className="text-sm text-gray-400">{user.email}</p>
              </div>
              <div className="p-2">
                <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
                  <UserIcon className="w-5 h-5" />
                  <span>Моя страница</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors">
                  <Settings className="w-5 h-5" />
                  <span>Настройки</span>
                </button>
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-2 text-red-400 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Выход</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
