import { Wine } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AuthLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function AuthLayout({ children, className }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-primary-dark flex">
      {/* Left Column - Form */}
      <div className={cn("flex-1 flex items-center justify-center p-8", className)}>
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>

      {/* Right Column - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-purple-700 items-center justify-center p-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center">
          <div className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Wine className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Shia LaPuff Production
          </h1>
          <p className="text-xl text-white/80 max-w-md">
            Твой персональный каталог домашних напитков с рецептами, отзывами и историей создания
          </p>
        </div>
      </div>
    </div>
  );
}
