import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { KeyRound, Mail, User } from 'lucide-react';

const registerSchema = z.object({
  email: z.string().email('Некорректный email'),
  displayName: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  password: z.string().min(6, 'Пароль должен содержать минимум 6 символов'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Пароли не совпадают',
  path: ['confirmPassword'],
});

type RegisterFormData = z.infer<typeof registerSchema>;

export function RegisterPage() {
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    // TODO: Реальная логика регистрации через API
    console.log('Register data:', data);
    
    // Имитация успешной регистрации
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Редирект на главную
    navigate('/');
  };

  return (
    <AuthLayout>
      <div className="bg-bg-card rounded-2xl p-8 shadow-xl border border-gray-800">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Создать аккаунт</h1>
          <p className="text-gray-400">Присоединяйтесь к Shia LaPuff Production</p>
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
            label="Отображаемое имя"
            type="text"
            placeholder="Как вас называть"
            iconLeft={<User className="w-5 h-5" />}
            error={errors.displayName?.message}
            {...register('displayName')}
          />

          <Input
            label="Пароль"
            type="password"
            placeholder="••••••••"
            iconLeft={<KeyRound className="w-5 h-5" />}
            error={errors.password?.message}
            {...register('password')}
          />

          <Input
            label="Подтвердите пароль"
            type="password"
            placeholder="••••••••"
            iconLeft={<KeyRound className="w-5 h-5" />}
            error={errors.confirmPassword?.message}
            {...register('confirmPassword')}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            isLoading={isSubmitting}
          >
            Зарегистрироваться
          </Button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-gray-400">
          Уже есть аккаунт?{' '}
          <Link
            to="/auth/login"
            className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
          >
            Войти
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
