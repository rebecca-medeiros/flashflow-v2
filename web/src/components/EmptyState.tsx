interface EmptyStateProps {
  onCreateNew: () => void;
}

const CustomZap = ({ className, size = 18 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={3} strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 2L7 13.5H12L10.5 22L18 10.5H13L14.5 2Z" />
  </svg>
);

export function EmptyState({ onCreateNew }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 mt-16">
      <div className="w-12 h-12 bg-border-light rounded-full flex items-center justify-center mb-4">
        <CustomZap className="text-text-muted" size={24} />
      </div>
      <p className="text-text-support mb-6 text-center max-w-sm leading-relaxed text-sm">
        Você ainda não possui flashcards.<br/>Que tal criar um para começar?
      </p>
      <button 
        onClick={onCreateNew}
        className="bg-brand-primary hover:bg-brand-gradient-start text-white px-6 py-2.5 rounded-full font-medium transition-colors"
      >
        Novo Flashcard
      </button>
    </div>
  );
}
