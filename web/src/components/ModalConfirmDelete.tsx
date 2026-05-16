interface ModalConfirmDeleteProps {
  onClose: () => void;
  onConfirm: () => void;
}

const CustomTrashX = ({ className, size = 18 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <path d="M10 11l4 4" />
    <path d="M14 11l-4 4" />
  </svg>
);

export function ModalConfirmDelete({ onClose, onConfirm }: ModalConfirmDeleteProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[24px] w-full max-w-[400px] p-8 shadow-2xl animate-in fade-in zoom-in duration-200 flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-full bg-danger-light flex items-center justify-center mb-6">
          <CustomTrashX className="text-danger-main" size={24} />
        </div>
        
        <h3 className="text-xl leading-tight font-sora font-bold text-text-main mb-3 px-2">
          Tem certeza que deseja excluir este card?
        </h3>
        <p className="text-sm text-text-support mb-8 leading-relaxed">
          Esta ação não pode ser desfeita e o card será removido permanentemente da sua biblioteca.
        </p>
        
        <div className="flex w-full gap-4">
          <button 
            onClick={onClose}
            className="flex-1 px-5 py-3.5 rounded-full font-bold text-text-main bg-bg-page hover:bg-[#E0E7EB] transition-colors"
          >
            Cancelar
          </button>
          <button 
            onClick={onConfirm}
            className="flex-1 bg-danger-main hover:opacity-90 text-white px-5 py-3.5 rounded-full font-bold transition-colors"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
