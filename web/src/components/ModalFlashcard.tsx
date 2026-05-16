import { useState } from 'react';
import { Flashcard } from '../services/api';
import { Folder, HelpCircle, AlignLeft, ChevronDown } from 'lucide-react';

interface ModalFlashcardProps {
  initialData: Flashcard | null;
  onClose: () => void;
  onSave: (data: { question: string; answer: string; category: string }) => void;
}

const CATEGORIES = ['JavaScript', 'React', 'Tailwind CSS', 'Node.js'];

export function ModalFlashcard({ initialData, onClose, onSave }: ModalFlashcardProps) {
  const [question, setQuestion] = useState(initialData?.question || '');
  const [answer, setAnswer] = useState(initialData?.answer || '');
  const [category, setCategory] = useState(initialData?.category || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim() || !category) return;
    onSave({ question, answer, category });
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[24px] w-full max-w-lg p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
        <h2 className="text-2xl font-sora font-bold text-text-main mb-1">
          {initialData ? 'Editar Flashcard' : 'Criar Flashcard'}
        </h2>
        <p className="text-sm text-text-support mb-8">
          Organize seu conhecimento com precisão e clareza.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block text-[11px] font-bold text-text-muted uppercase tracking-widest mb-2">
              Categoria
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-support">
                <Folder size={18} strokeWidth={2} />
              </div>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-border-light rounded-xl pl-12 pr-10 py-3.5 appearance-none outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors text-text-main bg-white"
                required
              >
                <option value="" disabled>
                  Selecione a categoria do card
                </option>
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat} className="text-text-main">{cat}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-text-support">
                <ChevronDown size={18} />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-[11px] font-bold text-text-muted uppercase tracking-widest mb-2">
              Pergunta
            </label>
            <div className="relative">
              <div className="absolute top-[14px] left-4 text-text-support pointer-events-none">
                <HelpCircle size={18} strokeWidth={2} />
              </div>
              <textarea 
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ex: O que é uma Closure no JavaScript?"
                className="w-full border border-border-light rounded-xl pl-12 pr-4 py-3 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary resize-none min-h-[100px] text-text-main placeholder:text-text-support/60 transition-colors"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-[11px] font-bold text-text-muted uppercase tracking-widest mb-2">
              Resposta
            </label>
            <div className="relative">
              <div className="absolute top-[14px] left-4 text-text-support pointer-events-none">
                <AlignLeft size={18} strokeWidth={2} />
              </div>
              <textarea 
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Ex: Uma closure é a combinação de uma função com o ambiente léxico..."
                className="w-full border border-border-light rounded-xl pl-12 pr-4 py-3 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary resize-none min-h-[120px] text-text-main placeholder:text-text-support/60 transition-colors"
                required
              />
            </div>
          </div>
          
          <div className="flex gap-4 mt-6">
            <button 
              type="button" 
              onClick={onClose}
              className="flex-1 bg-bg-page hover:bg-[#E0E7EB] text-text-main py-3.5 rounded-full font-bold transition-colors"
            >
              Cancelar
            </button>
            <button 
              type="submit"
              disabled={!question.trim() || !answer.trim() || !category}
              className="flex-1 bg-brand-primary hover:bg-brand-gradient-start text-white py-3.5 rounded-full font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
