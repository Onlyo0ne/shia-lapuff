export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-dark">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-purple-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-white mb-4">Страница не найдена</h2>
        <p className="text-gray-400 mb-8 max-w-md">
          К сожалению, страница, которую вы ищете, не существует или была перемещена.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-black/30"
        >
          На главную
        </a>
      </div>
    </div>
  );
}
