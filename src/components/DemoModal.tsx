import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { demoModalTranslations } from "../locales/translations";
import getPageLangUnit from "../utils/getPageLangUnit";

// Добавляем объект с URL видео для каждого языка
const videoUrls = {
  en: "https://www.youtube.com/embed/axm6-QvyfsA", // URL для английского
  de: "https://www.youtube.com/embed/dbCejo-WOYg", // URL для немецкого
  es: "https://www.youtube.com/embed/axm6-QvyfsA", // URL для испанского
  ru: "https://www.youtube.com/embed/0uyiC4cxcVA", // URL для русского
  ua: "https://www.youtube.com/embed/Xtmx1CQPryc", // URL для украинского
};

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

const DemoModal = ({
  isOpen,
  onClose,
  videoUrl,
}: DemoModalProps) => {
  // Создаем ref для iframe для предзагрузки
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Обработчик нажатия клавиши Escape
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    
    // Добавляем обработчик при открытии модального окна
    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }
    
    // Удаляем обработчик при закрытии
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);
  
  // Предзагрузка видео
  useEffect(() => {
    if (isOpen && iframeRef.current) {
      // Принудительная загрузка iframe
      iframeRef.current.src = iframeRef.current.src;
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const language = getPageLangUnit(demoModalTranslations);
  const t = demoModalTranslations[language];
  
  // Используем URL из пропсов, если он передан, иначе берем URL для текущего языка
  const videoSrc = videoUrl || videoUrls[language] || videoUrls.en;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        onClick={onClose} 
      />

      {/* Modal с анимацией */}
      <div 
        className="relative z-10 w-full max-w-4xl mx-4 bg-[#0B0F19] border border-emerald-400/20 rounded-2xl overflow-hidden shadow-2xl
                  animate-fadeIn"
        style={{
          animation: isOpen ? 'fadeIn 0.3s ease-out forwards' : 'fadeOut 0.2s ease-in forwards'
        }}
      >
        {/* Header */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-emerald-400/20 transition-colors"
            aria-label={t.closeButton}
          >
            <X className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
        </div>

        {/* Video Container */}
        <div className="relative pb-[56.25%] h-0">
          <iframe
            ref={iframeRef}
            className="absolute top-0 left-0 w-full h-full"
            src={videoSrc}
            title="Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="eager" // Для более быстрой загрузки
          />
        </div>

        {/* Footer */}
        <div className="p-4 text-center text-gray-400">
          <p>{t.watchDemo}</p>
        </div>
      </div>
    </div>
  );
};

// Добавляем стили анимации в глобальные стили или в компонент
const animationStyles = `
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes fadeOut {
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.95); }
}
`;

export default DemoModal;
