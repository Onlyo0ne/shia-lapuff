import { Achievement } from '../../data/mockAdmin';

interface AchievementsGridProps {
  achievements: Achievement[];
}

export function AchievementsGrid({ achievements }: AchievementsGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {achievements.map((achievement) => (
        <div
          key={achievement.id}
          className={`
            relative p-4 rounded-xl border-2 transition-all duration-300
            ${achievement.unlocked 
              ? 'border-accent-purple bg-gradient-to-br from-accent-purple/20 to-transparent' 
              : 'border-gray-700 bg-bg-card opacity-60'}
          `}
        >
          {/* Icon */}
          <div className="text-4xl mb-2">
            {achievement.unlocked ? achievement.icon : '🔒'}
          </div>
          
          {/* Title */}
          <h4 className={`font-semibold mb-1 ${achievement.unlocked ? 'text-white' : 'text-text-secondary'}`}>
            {achievement.title}
          </h4>
          
          {/* Description */}
          <p className="text-xs text-text-secondary mb-3 h-8 overflow-hidden">
            {achievement.description}
          </p>
          
          {/* Status */}
          <div className="text-xs mb-2">
            {achievement.unlocked ? (
              <span className="text-green-400 font-medium">✓ Получено</span>
            ) : (
              <span className="text-text-secondary">{achievement.progress}/{achievement.target}</span>
            )}
          </div>
          
          {/* Progress Bar */}
          {!achievement.unlocked && (
            <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
                style={{ width: `${Math.min((achievement.progress / achievement.target) * 100, 100)}%` }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
