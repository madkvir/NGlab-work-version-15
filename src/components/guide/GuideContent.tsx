"use client";
import React from "react";
import { 
  Book, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  PlayCircle, 
  MessageCircle,
  Users,
  Database,
  Settings,
  Activity,
  Shield,
  Clock,
  Smile
} from "lucide-react";
import Link from "next/link";
import BackToHome from "../BackToHome";
import IconWrapper from "../common/IconWrapper";

const GuideContent = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackToHome />
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex justify-center items-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-emerald-500/10 mb-6 md:mb-8">
            <IconWrapper icon={Book} className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">ИНСТРУКЦИЯ ПО ВНЕДРЕНИЮ ИИ</h1>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Представьте, что ваш бизнес — это целая экосистема, в которой каждая часть важна. 
            Наша задача — дополнить эту экосистему «умным помощником», который возьмёт на себя 
            рутинные задачи и поможет компании расти.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="space-y-16 md:space-y-24">
          {/* Step 1 */}
          <section>
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <IconWrapper icon={Users} className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">С ЧЕГО НАЧИНАЕМ</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* First Meeting - улучшаем внутренние отступы */}
              <div className="bg-gray-900/50 rounded-xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-6">
                  Первая встреча (Знакомство)
                </h3>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h4 className="font-semibold text-emerald-400 mb-2">Почему это важно?</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Мы стремимся понять, в чём именно ваш бизнес силён, а где возникают сложности. 
                      Можно сказать, что мы проводим «диагностику»: выясняем, какие задачи наиболее критичны.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-400 mb-2">Что делаем мы?</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Расспрашиваем о ваших целях, анализируем основные проблемы. 
                      Хотите сократить время отклика клиентам? Сократить время обработки запросов?
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-400 mb-2">Что делаете вы?</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Просто делитесь информацией о том, как устроен бизнес и какие задачи планируете 
                      решать в ближайшем будущем. Технические и IT-вопросы мы берём на себя.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-400 mb-2">Юридический аспект</h4>
                    <p className="text-gray-400 leading-relaxed">
                    Мы подготавливаем для вас "Техническое задание-Предложение" и если вас всё устраивает, то подписываем договор.
                    </p>
                  </div>
                </div>

              </div>

              {/* Data Preparation - аналогичные улучшения */}
              <div className="bg-gray-900/50 rounded-xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-6">
                  Подготовка данных
                </h3>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h4 className="font-semibold text-emerald-400 mb-2">Зачем это нужно?</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Чтобы «умный помощник» понимал, с чем имеет дело. Для вашего ИИ Агента необходима 
                      вся информация о вашей компании для того, чтобы он мог оперировать данными.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-400 mb-2">Как мы действуем?</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Мы берём исходные данные, приводим их в порядок и настраиваем загрузку в нашу систему. 
                      Чем лучше подготовлены материалы, тем точнее будет работать ИИ.
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link 
                    href="/counseling"
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>📌 Закажите консультацию</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Step 2 - обновляем сетку */}
          <section>
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <IconWrapper icon={Settings} className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">КАК ПРОХОДИТ РАБОТА</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {/* Tools Setup - улучшаем списки */}
              <div className="bg-gray-900/50 rounded-xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-6">
                  Настройка инструментов
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start gap-3">
                    <IconWrapper icon={CheckCircle} className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-400 leading-relaxed">Подбор необходимых модулей</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconWrapper icon={CheckCircle} className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-400 leading-relaxed">Интеграция с каналами связи</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconWrapper icon={CheckCircle} className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-400 leading-relaxed">Полный цикл настройки</span>
                  </li>
                </ul>
              </div>

              {/* Testing */}
              <div className="bg-gray-900/50 rounded-xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-6">
                  Тестирование
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start gap-3">
                    <IconWrapper icon={CheckCircle} className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-400 leading-relaxed">Запуск пилотной версии</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconWrapper icon={CheckCircle} className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-400 leading-relaxed">Оценка эффективности</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconWrapper icon={CheckCircle} className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-400 leading-relaxed">Внесение корректировок</span>
                  </li>
                </ul>
              </div>

              {/* Training */}
              <div className="bg-gray-900/50 rounded-xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-6">
                  Обучение и расширение
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start gap-3">
                    <IconWrapper icon={CheckCircle} className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-400 leading-relaxed">Тонкая настройка ИИ</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconWrapper icon={CheckCircle} className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-400 leading-relaxed">Подключение новых модулей</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconWrapper icon={CheckCircle} className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-400 leading-relaxed">Обучение персонала</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits - улучшаем карточки */}
          <section>
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <IconWrapper icon={Activity} className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">КАКИЕ УЛУЧШЕНИЯ ВЫ ЗАМЕТИТЕ</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {/* Benefit Cards - унифицируем высоту */}
              <div className="bg-gray-900/50 rounded-xl p-6 md:p-8 h-full">
                <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">
                  Меньше рутины
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start gap-3">
                    <IconWrapper icon={CheckCircle} className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-400 leading-relaxed">80% автоматизации стандартных задач</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconWrapper icon={CheckCircle} className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-400 leading-relaxed">70% экономии рабочего времени</span>
                  </li>
                </ul>
              </div>

              {/* Security */}
              <div className="bg-gray-900/50 rounded-xl p-6 md:p-8 h-full">
                <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">
                  Защита и стабильность
                </h3>

                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start gap-3">
                    <IconWrapper icon={CheckCircle} className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-400 leading-relaxed">Надёжная защита данных</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconWrapper icon={CheckCircle} className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-400 leading-relaxed">Фильтрация спама</span>
                  </li>
                </ul>
              </div>

              {/* Happy Clients */}
              <div className="bg-gray-900/50 rounded-xl p-6 md:p-8 h-full">
                <h3 className="text-xl md:text-2xl font-semibold text-emerald-400 mb-4">
                  Довольные клиенты
                </h3>

                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start gap-3">
                    <IconWrapper icon={CheckCircle} className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-400 leading-relaxed">Ответ за 7-15 секунд</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <IconWrapper icon={CheckCircle} className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-400 leading-relaxed">Современный подход</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
            Готовы внедрить ИИ в свой бизнес?
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            <button className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all">
              <IconWrapper icon={Phone} className="w-5 h-5" />
              <span>Связаться с нами</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all">
              <IconWrapper icon={MessageCircle} className="w-5 h-5" />
              <span>Получить консультацию</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GuideContent; 