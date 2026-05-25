# Shia LaPuff Production

Домашний алкобар с каталогом напитков, рецептами, отзывами и системой оценок.

## 🚀 Быстрый старт

### Требования
- Docker и Docker Compose
- Node.js 18+ (для локальной разработки frontend)
- Java 17+ (для локальной разработки backend)

### Запуск через Docker (рекомендуется)

```bash
# Запустите все сервисы
docker-compose up --build

# После запуска:
# Frontend: http://localhost:5173
# Backend API: http://localhost:8080/api
# База данных: localhost:5432
```

### Тестовые учетные записи

**Администратор:**
- Email: `admin@shialapuff.com`
- Пароль: `admin`

**Пользователь:**
- Email: `user@shialapuff.com`
- Пароль: `user`

## 📁 Структура проекта

```
ShiaLaPuff-Production/
├── frontend/              # React + Vite + TypeScript
│   ├── src/
│   │   ├── components/    # UI компоненты
│   │   ├── pages/         # Страницы приложения
│   │   ├── context/       # Context API (Auth, App)
│   │   ├── data/          # Mock данные
│   │   ├── api/           # API клиент
│   │   └── App.tsx
│   ├── package.json
│   └── Dockerfile
├── backend/               # Spring Boot 3
│   ├── src/main/java/com/shialapuff/
│   │   ├── core/          # Конфигурация, Security
│   │   ├── user/          # Пользователи, Auth
│   │   ├── catalog/       # Напитки, каталог
│   │   ├── reviews/       # Отзывы, оценки
│   │   ├── process/       # Рецепты, процесс производства
│   │   └── accounting/    # Бухгалтерия
│   ├── pom.xml
│   └── Dockerfile
├── docker-compose.yml
└── .env                   # Переменные окружения
```

## 🛠 Локальная разработка

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
./mvnw spring-boot:run
# или
mvn spring-boot:run
```

### База данных

PostgreSQL запускается автоматически через Docker Compose.
Для подключения:
- Host: `localhost`
- Port: `5432`
- Database: `shialapuff`
- User: `shialapuff`
- Password: `shialapuff`

## 📋 Функционал

### Для гостей и пользователей
- 🍾 Каталог напитков с фильтрами и поиском
- ⭐ Система оценок (запах, вкус, крепость, впечатления)
- 📝 Рецензии с лайками и расширением текста
- 👤 Личный кабинет с историей и достижениями
- 🔍 Поиск по напиткам и рецептам

### Для администратора
- 📖 Управление рецептами (ингредиенты, процесс)
- 🛢 Контроль процесса производства (бочки, банки, прогресс)
- 📊 Бухгалтерский учёт (пришло/ушло/остаток)
- 👥 Модерация отзывов

## 🔐 Безопасность

- JWT аутентификация
- Разделение ролей (USER, ADMIN)
- Защита маршрутов (AuthGuard, AdminGuard)
- CORS настроен для localhost:5173

## 🎨 Дизайн

Тёмная тема в стиле киберпанк:
- Основной фон: `#121212`
- Карточки: `#1a1a1a`
- Акценты: градиент от синего к фиолетовому
- Скругления: `rounded-2xl` для карточек, `rounded-xl` для кнопок

## 📝 Лицензия

Проект создан для личного использования.

---

**Разработано с ❤️ для Shia LaPuff Production**
