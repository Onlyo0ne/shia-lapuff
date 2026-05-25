import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Mail } from 'lucide-react';

const forgotPasswordSchema = z.object({
  email: z.string().email('Некорректный email'),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    // TODO: Реальная логика восстановления пароля через API
    console.log('Forgot password data:', data);
    
    // Имитация отправки письма
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <AuthLayout>
      <div className="bg-bg-card rounded-2xl p-8 shadow-xl border border-gray-800">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Восстановление пароля</h1>
          <p className="text-gray-400">
            {isSubmitSuccessful 
              ? 'Инструкции отправлены на ваш email' 
              : 'Введите email для восстановления пароля'}
          </p>
        </div>

        {isSubmitSuccessful ? (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-300">
              Проверьте вашу почту. Мы отправили инструкцию по сбросу пароля.
            </p>
            <Link
              to="/auth/login"
              className="inline-block text-purple-400 hover:text-purple-300 font-medium transition-colors"
            >
              Вернуться ко входу
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <Input
              label="Email"
              type="email"
              placeholder="your@email.com"
              iconLeft={<Mail className="w-5 h-5" />}
              error={errors.email?.message}
              {...register('email')}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              isLoading={isSubmitting}
            >
              Отправить инструкции
            </Button>
          </form>
        )}

        {/* Footer */}
        <p className="mt-6 text-center text-gray-400">
          Вспомнили пароль?{' '}
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
