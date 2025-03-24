import React from 'react';
import { Clock, Zap, BarChart3, Shield } from 'lucide-react';

export const SupportTab: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* SEO-оптимизированный заголовок */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          ИИ чат-бот для службы поддержки клиентов
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Революционное решение для автоматизации клиентской поддержки. 
          Обеспечьте мгновенную, качественную поддержку 24/7 с помощью искусственного интеллекта.
        </p>
      </div>

      {/* Статистика */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 text-center">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Clock className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
          <p className="text-gray-400">Круглосуточная поддержка без выходных</p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 text-center">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Zap className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="text-3xl font-bold text-emerald-400 mb-2">&lt;3с</div>
          <p className="text-gray-400">Среднее время ответа на запрос</p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 text-center">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <BarChart3 className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="text-3xl font-bold text-emerald-400 mb-2">95%</div>
          <p className="text-gray-400">Точность ответов на запросы</p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 text-center">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
            <Shield className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
          <p className="text-gray-400">Безопасность данных клиентов</p>
        </div>
      </div>

      {/* Основные возможности */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          <h3 className="text-2xl font-semibold mb-6">
            Возможности ИИ-поддержки
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>Мультиязычная поддержка клиентов</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>Автоматическая маршрутизация запросов</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>Интеграция с CRM-системами</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>Аналитика обращений клиентов</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>Персонализированные ответы</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          <h3 className="text-2xl font-semibold mb-6">
            Преимущества для бизнеса
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>Сокращение расходов на поддержку до 70%</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>Увеличение удовлетворенности клиентов</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>Масштабируемость без дополнительных затрат</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>Снижение нагрузки на операторов</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span>Улучшение качества обслуживания</span>
            </li>
          </ul>
        </div>
      </div>

      {/* SEO-блок */}
      <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
        <h3 className="text-2xl font-semibold mb-6">
          Почему выбирают наш чат-бот для службы поддержки?
        </h3>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-6">
            Наш ИИ чат-бот для службы поддержки - это современное решение, которое помогает 
            бизнесу автоматизировать обработку клиентских запросов, сократить время ожидания 
            и повысить качество обслуживания. Благодаря использованию передовых технологий 
            искусственного интеллекта, система способна понимать контекст обращений и 
            предоставлять точные, персонализированные ответы.
          </p>
          <p className="text-gray-400">
            Интеграция чат-бота в вашу службу поддержки позволит обрабатывать тысячи 
            запросов одновременно, обеспечивая высокое качество обслуживания 24/7, 
            без перерывов и выходных. Это особенно важно для компаний, работающих 
            на международном рынке и обслуживающих клиентов в разных часовых поясах.
          </p>
        </div>
      </div>
    </div>
  );
}; 