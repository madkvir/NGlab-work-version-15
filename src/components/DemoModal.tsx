import React from "react";
import { X } from "lucide-react";
import { demoModalTranslations } from "../locales/translations";
import getPageLangUnit from "../utils/getPageLangUnit";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

const DemoModal = ({
  isOpen,
  onClose,
  videoUrl = "https://www.youtube.com/embed/HK6y8DAPN_0",
}: DemoModalProps) => {
  if (!isOpen) return null;

  const language = getPageLangUnit(demoModalTranslations);
  const t = demoModalTranslations[language];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-4xl mx-4 bg-[#0B0F19] border border-emerald-400/20 rounded-2xl overflow-hidden shadow-2xl">
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
            className="absolute top-0 left-0 w-full h-full"
            src={videoUrl}
            title="Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
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

export default DemoModal;
