import React from "react";
import { Building2, ArrowRight } from "lucide-react";
import ToolPageTemplate from "../../../../components/ToolPageTemplate";
import { keepinCrmTranslations } from "../../../../locales/keepinCRMTranslations";
import Image from "next/image";
import getServerPageLang from "../../../../utils/getServerPageLang";
import { Link } from "../../../../i18n/routing";
import ImageWithFallback from "./ImageWithFallback";
import GlowingButton from "../../../../components/common/GlowingButton";

// Компонент с шагами настройки интеграции
const IntegrationSetupSteps = () => {
  return (
    <div className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Налаштування Інтеграції</h2>
        <p className="text-xl text-gray-400 max-w-4xl mx-auto">
          Покрокова інструкція для налаштування інтеграції з KeepinCRM
        </p>
      </div>
      
      {/* Шаг 1 */}
      <div className="bg-gray-900/50 rounded-xl p-8 mb-8 hover:bg-gray-900/70 transition-all duration-300 border border-gray-800/50">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0 bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white">
            1
          </div>
          <div className="flex-grow">
            <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Створення облікового запису</h3>
            <div className="prose prose-invert max-w-none">
              <p className="mb-4">
                Для налаштування інтеграції необхідно зв'язатися з нами для отримання Безкоштовної Консультації і доступу до інтеграції. 
                Для цього вам потрібно:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Перейти на сторінку сайта <Link href="/contacts" className="text-emerald-400 hover:text-emerald-300 transition-colors">Контакти</Link></li>
                <li>Заповнити форму зворотнього зв'язку</li>
                <li>Очікувати на дзвінок або відповідь від нашого експерта</li>
              </ul>
              <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                <p className="text-amber-400 font-semibold mb-2">Важливо:</p>
                <p className="text-sm">
                  Безкоштовна консультація допоможе вам краще зрозуміти, які можливості інтеграції, скільки коштує інтеграція і що для цього необхідно.
                  Наші експерти детально розглянуть ваш запит і запропонують найкращі рішення.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Шаг 2 */}
      <div className="bg-gray-900/50 rounded-xl p-8 mb-8 hover:bg-gray-900/70 transition-all duration-300 border border-gray-800/50">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0 bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white">
            2
          </div>
          <div className="flex-grow">
            <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Підключення акаунту KeepinCRM</h3>
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8">
                {/* Пункт 1 */}
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/30">
                  <h4 className="text-xl font-medium mb-3 text-emerald-300">1. Отримання API ключа</h4>
                  <p className="mb-4">
                    Перейдіть у розділ «Профіль компанії – API» у вашій CRM та скопіюйте API ключ.
                  </p>
                  <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-700/50 mb-2">
                    <div className="aspect-[16/9] relative">
                      <ImageWithFallback 
                        src="/assets/tools/keepincrm/api-key.png"
                        alt="Отримання API ключа в KeepinCRM"
                        fallbackText="Фото: Отримання API ключа"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Пункт 2 */}
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/30">
                  <h4 className="text-xl font-medium mb-3 text-emerald-300">2. Підключення к плагіну в аккаунті Zappr</h4>
                  <p className="mb-4">
                    У кабінеті інтеграції вставте API ключ для встановлення зв'язку з KeepinCRM.
                  </p>
                  <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-700/50 mb-2">
                    <div className="aspect-[16/9] relative">
                      <ImageWithFallback 
                        src="/assets/tools/keepincrm/plugin-connect.png"
                        alt="Підключення к плагіну в аккаунті Zappr"
                        fallbackText="Фото: Підключення к плагіну"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Пункт 3 */}
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/30">
                  <h4 className="text-xl font-medium mb-3 text-emerald-300">3. Налаштуйте форми під ваші карточки</h4>
                  <p className="mb-4">
                    Налаштуйте форми під ваші карточки Ліда, Клієнта, Угоди.
                  </p>
                  <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-700/50 mb-2">
                    <div className="aspect-[16/9] relative">
                      <ImageWithFallback 
                        src="/assets/tools/keepincrm/form-setup.png"
                        alt="Налаштування форм під ваші карточки"
                        fallbackText="Фото: Налаштування форм"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Шаг 3 */}
      <div className="bg-gray-900/50 rounded-xl p-8 mb-8 hover:bg-gray-900/70 transition-all duration-300 border border-gray-800/50">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0 bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white">
            3
          </div>
          <div className="flex-grow">
            <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Конфігурація ШІ агента</h3>
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8">
                {/* Раздел 1 */}
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/30">
                  <h4 className="text-xl font-medium mb-3 text-emerald-300">Сценарії відповідей (Prompt)</h4>
                  <p className="mb-4">
                    Налаштуйте шаблони відповідей для найбільш поширених запитів. 
                    Тон і характер спілкування.
                  </p>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                    <p className="text-amber-400 font-semibold mb-2">Порада:</p>
                    <p className="text-sm">
                      Створіть кілька варіантів відповідей для одного типу запитань, щоб спілкування з ШІ агентом виглядало більш природним і менш шаблонним.
                    </p>
                  </div>
                </div>
                
                {/* Раздел 2 */}
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/30">
                  <h4 className="text-xl font-medium mb-3 text-emerald-300">Навчання та адаптація</h4>
                  <p className="mb-4">
                    Встановіть алгоритми розпізнавання запитів та інтегруйте систему FAQ для швидкої обробки звернень. 
                    Додайте все що потрібно до бази знань.
                  </p>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                    <p className="text-amber-400 font-semibold mb-2">Важливо:</p>
                    <p className="text-sm">
                      Регулярно аналізуйте запити, які не були розпізнані системою, і додавайте їх до бази знань для постійного вдосконалення ШІ агента.
                    </p>
                  </div>
                </div>
                
                {/* Раздел 3 */}
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/30">
                  <h4 className="text-xl font-medium mb-3 text-emerald-300">Налаштування відображення</h4>
                  <p className="mb-4">
                    Вкажіть параметри віджету (позицію, кольорову гаму, текст привітання тощо) через налаштування в адмінці інтеграції.
                  </p>
                  <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-700/50 mb-2">
                    <div className="aspect-[16/9] relative">
                      <ImageWithFallback 
                        src="/assets/tools/keepincrm/widget-settings.png"
                        alt="Налаштування відображення віджету"
                        fallbackText="Фото: Налаштування відображення віджету"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Шаг 4 */}
      <div className="bg-gray-900/50 rounded-xl p-8 mb-8 hover:bg-gray-900/70 transition-all duration-300 border border-gray-800/50">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0 bg-emerald-500 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white">
            4
          </div>
          <div className="flex-grow">
            <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Тестування та Встановлення віджету</h3>
            <div className="prose prose-invert max-w-none">
              <div className="space-y-8">
                {/* Раздел 1 */}
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/30">
                  <h4 className="text-xl font-medium mb-3 text-emerald-300">Перевірка роботи</h4>
                  <p className="mb-4">
                    Відправте тестовий запит через віджет і переконайтеся, що дані правильно передаються до KeepinCRM.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <div className="flex-1 bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                      <p className="text-amber-400 font-semibold mb-2">Що перевірити:</p>
                      <ul className="list-disc pl-6 space-y-2 text-sm text-gray-300">
                        <li>Коректність відображення віджету на сайті</li>
                        <li>Правильність роботи ШІ агента при різних запитах</li>
                        <li>Передачу даних до KeepinCRM після заповнення форми</li>
                        <li>Створення нових записів у CRM-системі</li>
                      </ul>
                    </div>
                    <div className="flex-1 bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                      <p className="text-emerald-400 font-semibold mb-2">Порада:</p>
                      <p className="text-sm text-gray-300">
                        Проведіть тестування з різних пристроїв (комп'ютер, планшет, мобільний телефон) 
                        та браузерів для забезпечення коректної роботи на всіх платформах.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Раздел 2 - Фінальне налаштування */}
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/30">
                  <h4 className="text-xl font-medium mb-3 text-emerald-300">Фінальне налаштування</h4>
                  <p className="mb-4">
                    При успішному тестуванні переходьте до встановлення віджету на основний сайт.
                  </p>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                    <p className="text-amber-400 font-semibold mb-2">Важливо:</p>
                    <p className="text-sm">
                      Після встановлення на основний сайт продовжуйте моніторинг роботи інтеграції 
                      протягом перших кількох місяців для виявлення та усунення можливих проблем.
                    </p>
                  </div>
                </div>
                
                {/* Раздел 3 - Встановлення віджету на сайт */}
                <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/30">
                  <h4 className="text-xl font-medium mb-3 text-emerald-300">Встановлення віджету на сайт</h4>
                  <p className="mb-4">
                    Скопіюйте JavaScript-код віджету та вставте його перед закриваючим тегом &lt;/body&gt; на вашому сайті.
                  </p>
                  <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-700/50 mb-4">
                    <div className="aspect-[16/9] relative">
                      <ImageWithFallback 
                        src="/assets/tools/keepincrm/widget-code.png"
                        alt="Інсталяційний код віджету"
                        fallbackText="Фото: Інсталяційний код віджету"
                      />
                    </div>
                  </div>
                  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                    <p className="text-amber-400 font-semibold mb-2">Технічна порада:</p>
                    <p className="text-sm">
                      Для оптимальної продуктивності рекомендується розмістити код віджету перед закриваючим тегом body, 
                      щоб він завантажувався після основного контенту сторінки. Це забезпечить швидше завантаження сайту.
                    </p>
                  </div>
                  
                  <div className="mt-6 bg-emerald-900/30 p-4 rounded-lg border border-emerald-700/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="font-medium text-emerald-300">
                        Вітаємо! Ви успішно налаштували інтеграцію з KeepinCRM.
                      </p>
                    </div>
                    <p className="mt-2 text-sm text-gray-300 pl-12">
                      Тепер ваш бізнес готовий до автоматизованої обробки запитів та ефективного управління клієнтами.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Кнопка Get Started */}
      <div className="text-center space-y-4 mt-16">
        <GlowingButton
          to="/contacts"
          size="lg"
          icon={
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          }
        >
          Get Started
        </GlowingButton>
      </div>
    </div>
  );
};

const KeepinCRMPage = async ({ params }) => {
  const language = await getServerPageLang(params);
  const t = keepinCrmTranslations[language] || keepinCrmTranslations.en;

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<Building2 className="w-8 h-8 text-blue-500" />}
      features={t.features}
      benefits={t.benefits}
      integrations={t.integrations}
      sectionTitles={t.sectionTitles}
      metaTitle={t.metaTitle}
      metaDescription={t.metaDescription}
      isComingSoon={false}
      articleContent={t.articleContent}
      imageComponent={
        <>
          <IntegrationSetupSteps />
        </>
      }
    />
  );
};

export default KeepinCRMPage; 