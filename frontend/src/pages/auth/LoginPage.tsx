import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { KeyRound, Mail } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email('Некорректный email'),
  password: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginPage() {
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    // TODO: Реальная логика авторизации через API
    console.log('Login data:', data);
    
    // Имитация успешного входа
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Редирект на главную
    navigate('/');
  };

  return (
    <AuthLayout>
      <div className="bg-bg-card rounded-2xl p-8 shadow-xl border border-gray-800">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Добро пожаловать</h1>
          <p className="text-gray-400">Войдите в свой аккаунт</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <Input
            label="Email"
            type="email"
            placeholder="your@email.com"
            iconLeft={<Mail className="w-5 h-5" />}
            error={errors.email?.message}
            {...register('email')}
          />

          <Input
            label="Пароль"
            type="password"
            placeholder="••••••••"
            iconLeft={<KeyRound className="w-5 h-5" />}
            error={errors.password?.message}
            {...register('password')}
          />

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-500 focus:ring-offset-0"
                {...register('rememberMe')}
              />
              <span className="text-sm text-gray-400">Запомнить меня</span>
            </label>
            <Link
              to="/auth/forgot-password"
              className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              Забыли пароль?
            </Link>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            isLoading={isSubmitting}
          >
            Войти
          </Button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-gray-400">
          Нет аккаунта?{' '}
          <Link
            to="/auth/register"
            className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
          >
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
