import React from 'react';
import { TrendingUp, Target, ShoppingCart, PieChart } from 'lucide-react';
import { useAIChatBotTranslations } from '../../../../hooks/useAIChatBotTranslations';

export const SalesTab: React.FC = () => {
  const { t } = useAIChatBotTranslations();

  return (
    <div className="space-y-12">
      {/* SEO-оптимизированный заголовок */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          {t.tabs.sales.mainTitle}
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          {t.tabs.sales.mainDescription}
        </p>
      </div>

      {/* Ключевые показатели */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{t.tabs.sales.metrics.conversion.title}</h3>
          <p className="text-3xl font-bold text-emerald-400">{t.tabs.sales.metrics.conversion.value}</p>
          <p className="text-sm text-gray-400 mt-2">{t.tabs.sales.metrics.conversion.description}</p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{t.tabs.sales.metrics.leads.title}</h3>
          <p className="text-3xl font-bold text-emerald-400">{t.tabs.sales.metrics.leads.value}</p>
          <p className="text-sm text-gray-400 mt-2">{t.tabs.sales.metrics.leads.description}</p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
            <ShoppingCart className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{t.tabs.sales.metrics.averageOrder.title}</h3>
          <p className="text-3xl font-bold text-emerald-400">{t.tabs.sales.metrics.averageOrder.value}</p>
          <p className="text-sm text-gray-400 mt-2">{t.tabs.sales.metrics.averageOrder.description}</p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
            <PieChart className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{t.tabs.sales.metrics.roi.title}</h3>
          <p className="text-3xl font-bold text-emerald-400">{t.tabs.sales.metrics.roi.value}</p>
          <p className="text-sm text-gray-400 mt-2">{t.tabs.sales.metrics.roi.description}</p>
        </div>
      </div>

      {/* Возможности автоматизации */}
      <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
        <h3 className="text-2xl font-semibold mb-6">
          {t.tabs.sales.automation.title}
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-emerald-400">
              {t.tabs.sales.automation.leadQualification.title}
            </h4>
            <ul className="space-y-3 text-gray-400">
              {t.tabs.sales.automation.leadQualification.items.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-emerald-400">
              {t.tabs.sales.automation.personalization.title}
            </h4>
            <ul className="space-y-3 text-gray-400">
              {t.tabs.sales.automation.personalization.items.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* SEO-блок */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          <h3 className="text-2xl font-semibold mb-6">
            {t.tabs.sales.benefits.title}
          </h3>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-6">
              {t.tabs.sales.benefits.description}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              {t.tabs.sales.benefits.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          <h3 className="text-2xl font-semibold mb-6">
            {t.tabs.sales.howItWorks.title}
          </h3>
          <div className="space-y-6">
            {t.tabs.sales.howItWorks.steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-400 font-semibold">{index + 1}</span>
                </div>
                <div>
                  <h4 className="font-medium mb-2">{step.title}</h4>
                  <p className="text-gray-400 text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 