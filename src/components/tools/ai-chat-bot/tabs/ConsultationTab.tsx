import React from 'react';
import { MessageSquare, CheckCircle, Users, Brain, Database, Settings, Search, TrendingUp } from 'lucide-react';
import { useAIChatBotTranslations } from '../../../../hooks/useAIChatBotTranslations';

export const ConsultationTab: React.FC = () => {
  const { t } = useAIChatBotTranslations();

  return (
    <div className="space-y-12">
      {/* SEO-оптимизированный заголовок */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-emerald-400">
          {t.tabs.consultation.title}
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {t.tabs.consultation.subtitle}
        </p>
      </div>

      {/* Ключевые преимущества с иконками */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
            <MessageSquare className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-xl font-semibold mb-3">
            {t.tabs.consultation.features?.instantAnswers || "Мгновенные ответы"}
          </h3>
          <p className="text-gray-400 leading-relaxed">
            {t.tabs.consultation.features?.instantAnswersDesc || "Автоматические ответы на типичные вопросы клиентов в режиме реального времени"}
          </p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
            <Brain className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-xl font-semibold mb-3">
            {t.tabs.consultation.features?.smartKnowledge || "Умная база знаний"}
          </h3>
          <p className="text-gray-400 leading-relaxed">
            {t.tabs.consultation.features?.smartKnowledgeDesc || "Интеллектуальная система QA для дообучения ИИ-агента"}
          </p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-xl font-semibold mb-3">
            {t.tabs.consultation.features?.workloadReduction || "Снижение нагрузки"}
          </h3>
          <p className="text-gray-400 leading-relaxed">
            {t.tabs.consultation.features?.workloadReductionDesc || "Уменьшение нагрузки на службу поддержки до 90% за счет автоматизации"}
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
              <li key={index} className="flex items-start gap-3 leading-relaxed">
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
              <li key={index} className="flex items-start gap-3 leading-relaxed">
                <span className="text-emerald-400">•</span>
                <span className="text-gray-300">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Детальное описание */}
      <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
        <h3 className="text-2xl font-semibold mb-6 text-sky-300">
          {t.tabs.consultation.detailedDescription?.title || "Как работает ИИ-консультант?"}
        </h3>
        
        {/* Формирование и настройка базы знаний */}
        <div className="mb-8 bg-gray-900/30 rounded-lg p-6 border border-gray-800/50">
          <h4 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
            <Database className="w-5 h-5" />
            {t.tabs.consultation.detailedDescription?.knowledgeBase?.title || "Формирование и настройка базы знаний"}
          </h4>
          <p className="text-gray-300 mb-4 leading-relaxed">
            <span className="text-gray-200">{t.tabs.consultation.detailedDescription?.knowledgeBase?.subtitle || "Профессиональная настройка и интеграция"}</span>
          </p>
          <p className="text-gray-400 mb-4 leading-relaxed">
            {t.tabs.consultation.detailedDescription?.knowledgeBase?.description || "Специалисты NeuroGen Lab вручную создают и настраивают базу знаний вашего ИИ-консультанта, тщательно анализируя и интегрируя следующие источники информации:"}
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4 leading-relaxed">
            {t.tabs.consultation.detailedDescription?.knowledgeBase?.items?.map((item, index) => (
              <li key={index}>{item}</li>
            )) || [
              "Содержание вашего сайта (каталог, описания товаров, блог, страницы FAQ);",
              "Документы и презентации компании (инструкции, технические спецификации, регламенты, PDF, DOC);",
              "Видеоконтент компании (например, YouTube, вебинары);",
              "Данные из CRM, ERP и других корпоративных баз данных."
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Качественная настройка промптов */}
        <div className="mb-8 bg-gray-900/30 rounded-lg p-6 border border-gray-800/50">
          <h4 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5" />
            {t.tabs.consultation.detailedDescription?.promptTuning?.title || "Качественная настройка промптов"}
          </h4>
          <p className="text-gray-400 leading-relaxed">
            {t.tabs.consultation.detailedDescription?.promptTuning?.description || "Команда NeuroGen Lab обеспечивает тонкую настройку и оптимизацию промптов — инструкций, по которым ИИ-консультант понимает запросы и генерирует релевантные ответы. Это позволяет обеспечить точность и персонализировать общение с клиентами."}
          </p>
        </div>

        {/* Контекстное понимание запросов */}
        <div className="mb-8 bg-gray-900/30 rounded-lg p-6 border border-gray-800/50">
          <h4 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
            <Search className="w-5 h-5" />
            {t.tabs.consultation.detailedDescription?.contextualUnderstanding?.title || "Контекстное понимание запросов"}
          </h4>
          <div className="space-y-4">
            <div>
              <h5 className="text-lg font-medium text-gray-300 mb-2">
                <span className="text-gray-200">{t.tabs.consultation.detailedDescription?.contextualUnderstanding?.intentRecognition?.title || "Распознавание намерений пользователей"}</span>
              </h5>
              <p className="text-gray-400 leading-relaxed">
                {t.tabs.consultation.detailedDescription?.contextualUnderstanding?.intentRecognition?.description || "ИИ-консультант глубоко анализирует смысл каждого вопроса и учитывает контекст беседы, а не просто ищет ключевые слова. Благодаря этому он способен отвечать даже на сложные или многоступенчатые вопросы."}
              </p>
            </div>
            <div>
              <h5 className="text-lg font-medium text-gray-300 mb-2">
                <span className="text-gray-200">{t.tabs.consultation.detailedDescription?.contextualUnderstanding?.relevance?.title || "Релевантность и точность ответов"}</span>
              </h5>
              <p className="text-gray-400 leading-relaxed">
                {t.tabs.consultation.detailedDescription?.contextualUnderstanding?.relevance?.description || "За счёт качественной первичной настройки от NeuroGen Lab, система чётко различает похожие запросы, избегая ошибок и недопонимания."}
              </p>
            </div>
          </div>
        </div>

        {/* Постоянное улучшение качества */}
        <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800/50">
          <h4 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            {t.tabs.consultation.detailedDescription?.continuousImprovement?.title || "Постоянное улучшение качества"}
          </h4>
          <div className="space-y-4">
            <div>
              <h5 className="text-lg font-medium text-gray-300 mb-2">
                <span className="text-gray-200">{t.tabs.consultation.detailedDescription?.continuousImprovement?.continuousLearning?.title || "Непрерывное обучение"}</span>
              </h5>
              <p className="text-gray-400 leading-relaxed">
                {t.tabs.consultation.detailedDescription?.continuousImprovement?.continuousLearning?.description || "Каждое взаимодействие пользователя с ИИ-консультантом используется системой для самосовершенствования. Это позволяет вашему виртуальному консультанту непрерывно повышать качество ответов."}
              </p>
            </div>
            <div>
              <h5 className="text-lg font-medium text-gray-300 mb-2">
                <span className="text-gray-200">{t.tabs.consultation.detailedDescription?.continuousImprovement?.qualityControl?.title || "Контроль качества"}</span>
              </h5>
              <p className="text-gray-400 leading-relaxed">
                {t.tabs.consultation.detailedDescription?.continuousImprovement?.qualityControl?.description || "Каждое взаимодействие пользователя с ИИ-консультантом контролируется специалистами NeuroGen Lab и проходит через систему контроля качества (QA). Это позволяет тонко и непрерывно совершенствовать базу знаний и точность ответов виртуального консультанта."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 