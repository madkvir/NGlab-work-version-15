import { Activity, Cast, Sparkles, FileCheck } from "lucide-react";
import React from "react";
import { advantageCardsTranslations } from "../locales/translations";
import getPageLangUnit from "../utils/getPageLangUnit";

const icons = [
  <Activity className="w-6 h-6 sm:w-8 sm:h-8" />,
  <Cast className="w-6 h-6 sm:w-8 sm:h-8" />,
  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />,
  <FileCheck className="w-6 h-6 sm:w-8 sm:h-8" />,
];

interface AdvantageCardsProps {
  language: "en" | "de" | "es" | "ru" | "ua";
}

const AdvantageCards = () => {
  const language = getPageLangUnit(advantageCardsTranslations);
  const t = advantageCardsTranslations[language];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto mt-8 sm:mt-16 px-4 sm:px-0">
      {t.cards.map((advantage, index) => (
        <div
          key={index}
          className="group relative bg-gray-900/50 rounded-xl p-4 sm:p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] overflow-hidden cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-3 sm:mb-4 text-gray-400 group-hover:text-emerald-400 transform group-hover:scale-110 transition-all duration-500">
              {icons[index]}
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 group-hover:text-emerald-300 transition-colors duration-500">
              {advantage.title}
            </h3>

            <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
              {advantage.description}
            </p>
          </div>

          <div className="absolute inset-0 border border-emerald-500/0 group-hover:border-emerald-500/20 rounded-xl transition-all duration-500" />
        </div>
      ))}
    </div>
  );
};

export default AdvantageCards;
