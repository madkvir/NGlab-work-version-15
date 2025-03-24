import React from 'react';
import { TrendingUp, Target, ShoppingCart, PieChart } from 'lucide-react';

export const SalesTab: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* SEO-оптимизированный заголовок */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          ИИ чат-бот для автоматизации продаж
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Увеличьте конверсию и объем продаж с помощью интеллектуального чат-бота. 
          Автоматизируйте процесс продаж и обеспечьте персонализированный подход к каждому клиенту.
        </p>
      </div>

      {/* Ключевые показатели */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Рост конверсии</h3>
          <p className="text-3xl font-bold text-emerald-400">+45%</p>
          <p className="text-sm text-gray-400 mt-2">В среднем для бизнеса</p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Квалификация лидов</h3>
          <p className="text-3xl font-bold text-emerald-400">90%</p>
          <p className="text-sm text-gray-400 mt-2">Точность определения</p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
            <ShoppingCart className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Средний чек</h3>
          <p className="text-3xl font-bold text-emerald-400">+30%</p>
          <p className="text-sm text-gray-400 mt-2">Увеличение</p>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
            <PieChart className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">ROI</h3>
          <p className="text-3xl font-bold text-emerald-400">300%</p>
          <p className="text-sm text-gray-400 mt-2">В первый год</p>
        </div>
      </div>

      {/* Возможности автоматизации */}
      <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
        <h3 className="text-2xl font-semibold mb-6">
          Возможности автоматизации продаж
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-emerald-400">
              Квалификация лидов
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Автоматическая оценка потенциала клиента</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Сбор ключевой информации о потребностях</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Определение готовности к покупке</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-emerald-400">
              Персонализация предложений
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Индивидуальные рекомендации товаров</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Динамическое ценообразование</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Специальные предложения на основе поведения</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SEO-блок */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          <h3 className="text-2xl font-semibold mb-6">
            Преимущества автоматизации продаж
          </h3>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-6">
              Автоматизация процесса продаж с помощью ИИ чат-бота позволяет значительно 
              увеличить эффективность вашего бизнеса. Система работает круглосуточно, 
              обрабатывая сотни запросов одновременно и конвертируя посетителей в клиентов.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Увеличение количества квалифицированных лидов</li>
              <li>Сокращение цикла продаж</li>
              <li>Повышение среднего чека</li>
              <li>Снижение нагрузки на отдел продаж</li>
              <li>Аналитика и оптимизация воронки продаж</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          <h3 className="text-2xl font-semibold mb-6">
            Как это работает?
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-400 font-semibold">1</span>
              </div>
              <div>
                <h4 className="font-medium mb-2">Привлечение посетителя</h4>
                <p className="text-gray-400 text-sm">
                  Чат-бот проактивно начинает диалог с посетителем сайта, предлагая помощь
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-400 font-semibold">2</span>
              </div>
              <div>
                <h4 className="font-medium mb-2">Квалификация и анализ</h4>
                <p className="text-gray-400 text-sm">
                  ИИ анализирует поведение и запросы клиента, определяя его потребности
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-400 font-semibold">3</span>
              </div>
              <div>
                <h4 className="font-medium mb-2">Персонализация предложения</h4>
                <p className="text-gray-400 text-sm">
                  Формирование индивидуального предложения на основе собранных данных
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-400 font-semibold">4</span>
              </div>
              <div>
                <h4 className="font-medium mb-2">Закрытие сделки</h4>
                <p className="text-gray-400 text-sm">
                  Автоматическое проведение клиента через воронку продаж до совершения покупки
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 