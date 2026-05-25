import { useApp } from '../context/AppContext';

export function ToastContainer() {
  const { notifications, dismissNotification } = useApp();

  if (notifications.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`
            px-4 py-3 rounded-xl shadow-lg backdrop-blur-sm
            transform transition-all duration-300 animate-slide-in
            ${notification.type === 'success' ? 'bg-green-600/90 text-white' : ''}
            ${notification.type === 'error' ? 'bg-red-600/90 text-white' : ''}
            ${notification.type === 'info' ? 'bg-accent-purple/90 text-white' : ''}
          `}
        >
          <div className="flex items-center justify-between gap-4">
            <span>{notification.message}</span>
            <button
              onClick={() => dismissNotification(notification.id)}
              className="text-white/70 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
