import React from 'react';
import { useAIChatBotTranslations } from '../../../hooks/useAIChatBotTranslations';

type Benefit = string | { key: string; text: string };

export const AIChatBotBenefits: React.FC = () => {
  const { t } = useAIChatBotTranslations();

  return (
    <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300">
      <h2 className="text-2xl font-semibold mb-6 text-emerald-400">
        {t.sectionTitles.benefits}
      </h2>
      <ul className="space-y-4">
        {(t.benefits as readonly Benefit[]).map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-emerald-400">•</span>
            <span className="text-gray-300">
              {typeof benefit === 'string' ? (
                benefit
              ) : (
                <>
                  <strong className="font-semibold text-emerald-300">{benefit.key}</strong> – {benefit.text}
                </>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}; 