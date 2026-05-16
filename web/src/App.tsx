import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { EmptyState } from './components/EmptyState';
import { FlashcardGrid } from './components/FlashcardGrid';
import { ModalFlashcard } from './components/ModalFlashcard';
import { ModalConfirmDelete } from './components/ModalConfirmDelete';
import { api, Flashcard } from './services/api';

const CATEGORIES = ['Tudo', 'JavaScript', 'React', 'Tailwind CSS', 'Node.js'];

function App() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [filteredCards, setFilteredCards] = useState<Flashcard[]>([]);
  const [activeCategory, setActiveCategory] = useState('Tudo');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCard, setEditingCard] = useState<Flashcard | null>(null);
  
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingCardId, setDeletingCardId] = useState<string | null>(null);

  useEffect(() => {
    fetchFlashcards();
  }, []);

  useEffect(() => {
    if (activeCategory === 'Tudo') {
      setFilteredCards(flashcards);
    } else {
      setFilteredCards(flashcards.filter(c => c.category === activeCategory));
    }
  }, [activeCategory, flashcards]);

  const fetchFlashcards = async () => {
    try {
      const response = await api.get('/flashcards');
      setFlashcards(response.data);
    } catch (error) {
      console.error('Failed to fetch flashcards:', error);
    }
  };

  const handleCreateNew = () => {
    setEditingCard(null);
    setIsModalOpen(true);
  };

  const handleEdit = (card: Flashcard) => {
    setEditingCard(card);
    setIsModalOpen(true);
  };

  const handleDeleteRequest = (id: string) => {
    setDeletingCardId(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!deletingCardId) return;
    try {
      await api.delete(`/flashcards/${deletingCardId}`);
      setFlashcards(prev => prev.filter(c => c.id !== deletingCardId));
    } catch (error) {
      console.error('Failed to delete flashcard:', error);
    } finally {
      setIsDeleteModalOpen(false);
      setDeletingCardId(null);
    }
  };

  const handleSaveCard = async (data: { question: string; answer: string; category: string }) => {
    try {
      if (editingCard) {
        const response = await api.put(`/flashcards/${editingCard.id}`, data);
        setFlashcards(prev => prev.map(c => c.id === editingCard.id ? response.data : c));
      } else {
        const response = await api.post('/flashcards', data);
        setFlashcards([response.data, ...flashcards]);
      }
    } catch (error) {
      console.error('Failed to save flashcard:', error);
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Header onCreateNew={handleCreateNew} />
      
      <main className="mt-12">
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-6 mb-12">
          <div>
            <span className="block text-xs font-bold text-brand-primary uppercase tracking-widest mb-2">Painel de Aprendizado</span>
            <h1 className="text-[32px] font-sora font-bold text-text-main leading-tight max-w-[400px]">
              Domine tecnologia com foco total.
            </h1>
          </div>
          
          <div className="flex items-center bg-black/[0.03] p-1 rounded-full">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat 
                    ? 'bg-brand-primary/10 text-brand-primary' 
                    : 'text-text-muted hover:text-text-main'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {flashcards.length === 0 ? (
          <EmptyState onCreateNew={handleCreateNew} />
        ) : (
          <FlashcardGrid 
            cards={filteredCards} 
            onCreateNew={handleCreateNew}
            onEdit={handleEdit}
            onDelete={handleDeleteRequest}
          />
        )}
      </main>

      {isModalOpen && (
        <ModalFlashcard 
          initialData={editingCard}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveCard}
        />
      )}

      {isDeleteModalOpen && (
        <ModalConfirmDelete
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </div>
  );
}

export default App;
