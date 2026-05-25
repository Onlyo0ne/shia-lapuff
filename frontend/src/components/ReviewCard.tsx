import { useState } from 'react';
import { Review } from '../../data/mockReviews';
import { RatingDots } from '../rating/RatingDots';

interface ReviewCardProps {
  review: Review;
  onLike?: (id: string) => void;
  onViewProduct?: (drinkId: string) => void;
}

export function ReviewCard({ review, onLike, onViewProduct }: ReviewCardProps) {
  const [expanded, setExpanded] = useState(false);
  const isLongText = review.text.length > 150;
  
  const displayText = isLongText && !expanded 
    ? review.text.slice(0, 150) + '...' 
    : review.text;

  const handleLike = () => {
    onLike?.(review.id);
  };

  return (
    <div className="bg-bg-card rounded-2xl p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <img 
            src={review.avatarUrl} 
            alt={review.userName}
            className="w-12 h-12 rounded-full object-cover bg-gray-700"
          />
          <div>
            <h4 className="font-semibold text-white">{review.userName}</h4>
            <p className="text-sm text-text-secondary">{review.date}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-accent-purple">{review.totalScore.toFixed(1)}</div>
          <div className="text-xs text-text-secondary">общий балл</div>
        </div>
      </div>

      {/* Drink Info */}
      <div className="mb-4">
        <span className="text-sm text-text-secondary">Напиток:</span>
        <p className="text-white font-medium">{review.drinkName}</p>
      </div>

      {/* Ratings */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <RatingDots value={review.ratings.smell} readonly label={`Запах: ${review.ratings.smell}/10`} />
        <RatingDots value={review.ratings.taste} readonly label={`Вкус: ${review.ratings.taste}/10`} />
        <RatingDots value={review.ratings.strength} readonly label={`Крепость: ${review.ratings.strength}/10`} />
        <RatingDots value={review.ratings.impression} readonly label={`Впечатление: ${review.ratings.impression}/10`} />
      </div>

      {/* Review Text */}
      <div className="mb-4">
        <p className="text-text-primary leading-relaxed">
          {displayText}
        </p>
        {isLongText && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-accent-purple text-sm mt-2 hover:underline"
          >
            {expanded ? 'Свернуть' : 'Читать далее'}
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 transition-colors ${
            review.isLikedByCurrentUser ? 'text-red-500' : 'text-text-secondary hover:text-red-500'
          }`}
        >
          <span>{review.isLikedByCurrentUser ? '❤️' : '🤍'}</span>
          <span>{review.likes}</span>
        </button>
        
        {onViewProduct && (
          <button
            onClick={() => onViewProduct(review.drinkId)}
            className="text-accent-blue text-sm hover:underline flex items-center gap-1"
          >
            🍾 К продукту
          </button>
        )}
      </div>
    </div>
  );
}
