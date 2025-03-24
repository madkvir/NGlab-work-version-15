import React from 'react';
import { useAIChatBotTranslations } from '../../../hooks/useAIChatBotTranslations';

type Feature = string | { key: string; text: string };

export const AIChatBotFeatures: React.FC = () => {
  const { t } = useAIChatBotTranslations();

  return (
    <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300">
      <h2 className="text-2xl font-semibold mb-6 text-emerald-400">
        {t.sectionTitles.features}
      </h2>
      <ul className="space-y-4">
        {(t.features as readonly Feature[]).map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-emerald-400">•</span>
            <span className="text-gray-300">
              {typeof feature === 'string' ? (
                feature
              ) : (
                <>
                  <strong className="font-semibold text-emerald-300">{feature.key}</strong> – {feature.text}
                </>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}; 