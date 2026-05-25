import { Link, useLocation } from 'react-router-dom';

export function AppLayout() {
  return (
    <div className="min-h-screen bg-primary-dark">
      {/* Header */}
      <header className="bg-bg-card border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            Shia LaPuff Production
          </Link>
          <nav className="flex gap-6">
            <Link to="/catalog" className="text-text-secondary hover:text-white transition-colors">
              Каталог
            </Link>
            <Link to="/reviews" className="text-text-secondary hover:text-white transition-colors">
              Рецензии
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-bg-card border-t border-gray-800 px-6 py-8 mt-auto">
        <div className="max-w-7xl mx-auto text-center text-text-secondary">
          <p>&copy; 2024 Shia LaPuff Production. Домашний алкобар.</p>
        </div>
      </footer>
    </div>
  );
}
