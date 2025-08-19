import React from 'react';
import { Clock, Zap, BarChart3, Shield } from 'lucide-react';
import { useAIChatBotTranslations } from '../../../../hooks/useAIChatBotTranslations';

export const SupportTab: React.FC = () => {
  const { t } = useAIChatBotTranslations();

  return (
    <div className="space-y-12">
      {/* SEO-оптимизированный заголовок */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          {t.tabs.support.mainTitle}
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          {t.tabs.support.mainDescription}
        </p>
      </div>

      {/* Статистика */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 text-center">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Clock className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="text-3xl font-bold text-emerald-400 mb-2">{t.tabs.support.stats.availability.value}</div>
          <p className="text-gray-400">{t.tabs.support.stats.availability.description}</p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 text-center">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Zap className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="text-3xl font-bold text-emerald-400 mb-2">{t.tabs.support.stats.responseTime.value}</div>
          <p className="text-gray-400">{t.tabs.support.stats.responseTime.description}</p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 text-center">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <BarChart3 className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="text-3xl font-bold text-emerald-400 mb-2">{t.tabs.support.stats.accuracy.value}</div>
          <p className="text-gray-400">{t.tabs.support.stats.accuracy.description}</p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 text-center">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Shield className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="text-3xl font-bold text-emerald-400 mb-2">{t.tabs.support.stats.security.value}</div>
          <p className="text-gray-400">{t.tabs.support.stats.security.description}</p>
        </div>
      </div>

      {/* Основные возможности */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          <h3 className="text-2xl font-semibold mb-6">
            {t.tabs.support.features.title}
          </h3>
          <ul className="space-y-4">
            {t.tabs.support.features.items.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          <h3 className="text-2xl font-semibold mb-6">
            {t.tabs.support.benefits.title}
          </h3>
          <ul className="space-y-4">
            {t.tabs.support.benefits.items.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SEO-блок */}
      <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
        <h3 className="text-2xl font-semibold mb-6">
          {t.tabs.support.seo.title}
        </h3>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-6">
            {t.tabs.support.seo.description1}
          </p>
          <p className="text-gray-400">
            {t.tabs.support.seo.description2}
          </p>
        </div>
      </div>
    </div>
  );
}; 