import React from 'react';
import { MessageSquare, CheckCircle, Users, Brain } from 'lucide-react';
import { useAIChatBotTranslations } from '../../../../hooks/useAIChatBotTranslations';

export const ConsultationTab: React.FC = () => {
  const { t } = useAIChatBotTranslations();

  return (
    <div className="space-y-12">
      {/* SEO-оптимизированный заголовок */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          ИИ Консультант и FAQ для бизнеса
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Автоматизируйте консультации клиентов с помощью искусственного интеллекта. 
          Наш чат-бот предоставляет мгновенные ответы на часто задаваемые вопросы 24/7.
        </p>
      </div>

      {/* Ключевые преимущества с иконками */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
            <MessageSquare className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Мгновенные ответы</h3>
          <p className="text-gray-400">
            Автоматические ответы на типичные вопросы клиентов в режиме реального времени
          </p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
            <Brain className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Умная база знаний</h3>
          <p className="text-gray-400">
          Интеллектуальная система QA для дообучения ИИ-агента
          </p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Снижение нагрузки</h3>
          <p className="text-gray-400">
            Уменьшение нагрузки на службу поддержки до 90% за счет автоматизации
          </p>
        </div>
      </div>

      {/* Ключевые возможности и преимущества */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-6 text-emerald-400">
            {t.sectionTitles.features}
          </h2>
          <ul className="space-y-4">
            {t.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-emerald-400">•</span>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-6 text-emerald-400">
            {t.sectionTitles.benefits}
          </h2>
          <ul className="space-y-4">
            {t.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-emerald-400">•</span>
                <span className="text-gray-300">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Детальное описание */}
      <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
        <h3 className="text-2xl font-semibold mb-6">
          Как работает ИИ-консультант?
        </h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-medium mb-2">
                Обучение на основе Базы знаний (сайт, документы, YouTube, базы данных)
              </h4>
              <p className="text-gray-400">
                Система анализирует часто задаваемые вопросы и создает базу знаний для мгновенных ответов
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-medium mb-2">
                Контекстное понимание запросов
              </h4>
              <p className="text-gray-400">
                ИИ понимает контекст вопросов и предоставляет релевантные ответы даже на сложные запросы
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-medium mb-2">
                Постоянное улучшение качества
              </h4>
              <p className="text-gray-400">
                Система учится на каждом взаимодействии, улучшая точность и релевантность ответов
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 