import { Flashcard as FlashcardType } from '../services/api';
import { Flashcard } from './Flashcard';
import { Plus } from 'lucide-react';

interface FlashcardGridProps {
  cards: FlashcardType[];
  onCreateNew: () => void;
  onEdit: (card: FlashcardType) => void;
  onDelete: (id: string) => void;
}

export function FlashcardGrid({ cards, onCreateNew, onEdit, onDelete }: FlashcardGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map(card => (
        <Flashcard 
          key={card.id} 
          card={card} 
          onEdit={() => onEdit(card)}
          onDelete={() => onDelete(card.id)}
        />
      ))}
      
      <button 
        onClick={onCreateNew}
        className="flex flex-col items-center justify-center min-h-[280px] bg-bg-page/50 border-2 border-dashed border-border-light rounded-2xl hover:border-brand-primary/50 transition-all group"
      >
        <div className="w-12 h-12 bg-border-light/60 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Plus className="text-text-muted" size={24} strokeWidth={2} />
        </div>
        <p className="text-text-main font-medium">Criar novo card</p>
        <p className="text-[13px] text-text-support text-center px-6 mt-1">
          Adicione um novo desafio à sua biblioteca e mantenha o ritmo.
        </p>
      </button>
    </div>
  );
}
