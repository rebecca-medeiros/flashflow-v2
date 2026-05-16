import { Plus } from 'lucide-react';

interface HeaderProps {
  onCreateNew: () => void;
}

const CustomZap = ({ className, size = 18 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={3} strokeLinejoin="round" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 2L7 13.5H12L10.5 22L18 10.5H13L14.5 2Z" />
  </svg>
);

export function Header({ onCreateNew }: HeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center">
          <CustomZap className="text-white" size={18} />
        </div>
        <span className="font-sora font-bold text-xl tracking-tight text-text-main">
          Flash Flow
        </span>
      </div>
      
      <button 
        onClick={onCreateNew}
        className="flex items-center gap-2 bg-brand-primary hover:bg-brand-gradient-start text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
      >
        <span>Novo Flashcard</span>
      </button>
    </header>
  );
}
