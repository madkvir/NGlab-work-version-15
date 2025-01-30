"use client";
import React, { useState } from "react";
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
import GuideSidebar from "./GuideSidebar";

interface StageContent {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

type StageContentMap = {
  [key: string]: StageContent;
};

const stageContent: StageContentMap = {
  stage1: {
    title: "С ЧЕГО НАЧИНАЕМ",
    subtitle: "Первая встреча (Знакомство) и Анализ потребностей",
    content: (
      <>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Диагностика</h3>
        <p className="text-gray-400 mb-6">
          На встрече мы стремимся понять, в какой части бизнес-процесса
          возникают сложности. Можно сказать, что мы проводим
          «диагностику» выясняем, какие задачи наиболее критичны.
        </p>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Цели и Задачи</h3>
        <p className="text-gray-400 mb-6">
          Расспрашиваем о ваших целях, анализируем основные проблемы. 
          Хотите сократить время отклика клиентам? Какую информацию
          чаще всего запрашивают ваши клиенты? Какие вопросы
          вызывают у сотрудников наибольшую сложность?
        </p>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Сбор информации</h3>
        <p className="text-gray-400 mb-6">
          Что делаете вы? Просто делитесь информацией о том, как 
          устроен бизнес процес и какие задачи планируете решать за счёт
          интеграции ИИ Агента. Технические и IT-вопросы мы берём на
          себя. Собираем предварительную информацию о количестве
          возможных запросов, анализируем их природу (технические,
          клиентские, операционные) и оцениваем, какие задачи можно
          автоматизировать с помощью ИИ. Выясняем пиковые нагрузки,
          среднее количество обращений в день/месяц и прогнозируем
          потенциал роста.
        </p>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Демонстрация Кейсов</h3>
        <p className="text-gray-400 mb-6">
          Проводим демонстрацию релевантного кейса с разбором 
          успешных примеров внедрения ИИ в аналогичных бизнесах.
          Показываем, как работают наши инструменты в реальном
          времени, какие задачи они решают и какие результаты можно
          ожидать. Отвечаем на все вопросы и обсуждаем потенциальные
          возможности адаптации под ваш бизнес.
        </p>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">
          Определение Источников и Систем с которыми необходимо взаимодействовать
        </h3>
        <p className="text-gray-400 mb-6">
          Выясняем, какие источники необходимо подключить: {' '}
          <Link href="/tools/facebook-messenger" className="text-white hover:text-emerald-400 transition-colors">
            Facebook
          </Link>
          ,{' '}
          <Link href="/tools/ai-chat-bot" className="text-white hover:text-emerald-400 transition-colors">
            Виджет на сайт
          </Link>
          ,{' '}
          <Link href="/tools/whatsapp" className="text-white hover:text-emerald-400 transition-colors">
            WhatsApp
          </Link>
          ,{' '}
          <Link href="/tools/instagram" className="text-white hover:text-emerald-400 transition-colors">
            Instagram
          </Link>
          {' '}и другие платформы. Анализируем используемые системы управления, такие как{' '}
          <Link href="/tools/hubspot" className="text-white hover:text-emerald-400 transition-colors">
            HubSpot
          </Link>
          ,{' '}
          <Link href="/tools/salesforce" className="text-white hover:text-emerald-400 transition-colors">
            Salesforce
          </Link>
          ,{' '}
          <Link href="/tools/email" className="text-white hover:text-emerald-400 transition-colors">
            Email
          </Link>
          , базы данных{' '}
          <Link href="/tools/custom-development" className="text-white hover:text-emerald-400 transition-colors">
            SQL или NoSQL
          </Link>
          {' '}. Оцениваем необходимость интеграции с API, автоматизированного сбора данных и синхронизации между различными платформами для бесперебойной работы.
        </p>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Предварительная оценка проекта и интеграции </h3>
        <p className="text-gray-400 mb-6">
          Предварительно оцениваем количество и форматы информации для создания базы знаний, 
          анализируем их структуру и необходимость обновлений. Определяем, какие данные должны быть
          загружены в систему, в каком виде и с какой частотой. Оцениваем возможности автоматического
          обновления базы знаний, а также интеграцию с внешними источниками данных для поддержания
          её актуальности.
        </p>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">
          Итоги первого этапа
        </h3>
        <p className="text-gray-400 mb-6">
          На базе полученной информации и проведённой встречи специалисты компании{' '}
          <Link href="/contacts" className="text-white hover:text-emerald-400 transition-colors">
            NeuroGen Lab
          </Link>
          {' '}смогут детально оценить масштаб проекта, определить возможные точки интеграции и предложить оптимальное решение для вашей компании. Также мы прогнозируем сроки реализации и ресурсы, необходимые для успешного внедрения.
        </p>
      </>
    )
  },
  stage2: {
    title: "КАК ПРОХОДИТ РАБОТА",
    subtitle: "Процесс разработки",
    content: (
      <>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Этапы работы</h3>
        <p className="text-gray-400 mb-6">
          На этом этапе мы погружаемся в процессы вашей компании и начинаем
          разработку решений.
        </p>
      </>
    )
  },
  stage3: {
    title: "КАКИЕ УЛУЧШЕНИЯ",
    subtitle: "Результаты внедрения",
    content: (
      <>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Что улучшается</h3>
        <p className="text-gray-400 mb-6">
          После внедрения наших решений вы заметите значительные улучшения в
          работе компании.
        </p>
      </>
    )
  },
  stage4: {
    title: "РЕЗУЛЬТАТЫ",
    subtitle: "Итоги внедрения",
    content: (
      <>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Финальный этап</h3>
        <p className="text-gray-400 mb-6">
          На этом этапе мы анализируем результаты внедрения и планируем
          дальнейшее развитие.
        </p>
      </>
    )
  }
};

const GuideContent = () => {
  const [activeStage, setActiveStage] = useState('stage1');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-900">
      <div className="absolute inset-0 bg-gray-900" />
      <div className="relative pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center text-sm text-gray-400 hover:text-emerald-400 transition-colors"
            >
              ← На главную
            </Link>
          </div>

          {/* Header section */}
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-emerald-500/20 mb-6">
              <IconWrapper icon={Book} className="w-8 h-8 text-emerald-400" />
            </div>
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
              ИНСТРУКЦИЯ ПО ВНЕДРЕНИЮ ИИ
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Представьте, что ваш бизнес — это целая экосистема, в которой каждая часть важна. 
              Наша задача — дополнить эту экосистему «умным помощником», который возьмёт на себя 
              рутинные задачи и поможет компании расти.
            </p>
          </div>

          {/* Мобильная кнопка меню */}
          <div className="md:hidden mb-8">
            <button 
              className="w-full p-4 bg-gray-800/50 text-emerald-400 rounded-lg hover:bg-gray-800/70 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? 'Скрыть меню' : 'Показать меню'}
            </button>
          </div>

          {/* Main content */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
              <GuideSidebar activeStage={activeStage} setActiveStage={(stage) => {
                setActiveStage(stage);
                setIsMobileMenuOpen(false);
              }} />
            </div>
            
            <div className="flex-1 max-w-full md:max-w-3xl">
              <div className="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300">
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">
                  {stageContent[activeStage].title}
                </h2>
                <h3 className="text-xl text-gray-200 mb-8">
                  {stageContent[activeStage].subtitle}
                </h3>
                {stageContent[activeStage].content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GuideContent; 