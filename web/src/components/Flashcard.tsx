import { useState } from 'react';
import { Flashcard as FlashcardType } from '../services/api';
import { Pencil, Trash2, RefreshCw } from 'lucide-react';

interface FlashcardProps {
  card: FlashcardType;
  onEdit: () => void;
  onDelete: () => void;
}

export function Flashcard({ card, onEdit, onDelete }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full min-h-[280px] perspective-1000">
      <div 
        className={`w-full h-full absolute transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front */}
        <div className="w-full h-full absolute backface-hidden bg-bg-card rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-border-light/50 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <span className="px-3 py-1 bg-bg-page rounded-full text-[10px] font-bold text-text-muted uppercase tracking-wider">
              {card.category}
            </span>
          </div>
          
          <div className="flex-1 flex items-center justify-center py-4">
            <p className="text-center font-medium text-lg text-text-main line-clamp-4 px-2">
              {card.question}
            </p>
          </div>
          
          <div className="flex justify-end mt-auto">
            <button 
              onClick={() => setIsFlipped(true)}
              className="w-10 h-10 bg-bg-page rounded-full flex items-center justify-center text-text-main hover:bg-gray-200 transition-colors"
            >
              <RefreshCw size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Back */}
        <div className="w-full h-full absolute backface-hidden rotate-y-180 bg-bg-card rounded-2xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-border-light/50 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <span className="px-3 py-1 bg-bg-page rounded-full text-[10px] font-bold text-text-muted uppercase tracking-wider">
              {card.category}
            </span>
            <div className="flex gap-3">
              <button onClick={onEdit} className="text-text-muted hover:text-text-main transition-colors">
                <Pencil size={18} strokeWidth={2} />
              </button>
              <button onClick={onDelete} className="text-danger-main hover:text-red-700 transition-colors">
                <Trash2 size={18} strokeWidth={2} />
              </button>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center py-4 gap-2">
            <p className="text-center text-sm text-text-support line-clamp-2 px-2">
              {card.question}
            </p>
            <p className="text-center font-medium text-lg text-brand-primary overflow-auto px-2">
              {card.answer}
            </p>
          </div>
          
          <div className="flex justify-end mt-auto">
            <button 
              onClick={() => setIsFlipped(false)}
              className="w-10 h-10 bg-bg-page rounded-full flex items-center justify-center text-text-main hover:bg-gray-200 transition-colors"
            >
              <RefreshCw size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
