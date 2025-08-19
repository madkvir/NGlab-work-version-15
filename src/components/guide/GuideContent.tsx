"use client";
import React, { useState, useEffect } from "react";
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
  Smile,
  BrainCircuit,
} from "lucide-react";
import BackToHome from "../BackToHome";
import IconWrapper from "../common/IconWrapper";
import GuideSidebar from "./GuideSidebar";
import DemoModal from "../modals/DemoModal";
import BookDemoBtn from "../BookDemoBtn";
import { guideTranslations } from "../../locales/guideTranslations";
import { Link } from "../../i18n/routing";
import getPageLangUnit from "../../utils/getPageLangUnit";

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
          На встрече мы стремимся понять, в какой части бизнес-процесса возникают сложности. Можно
          сказать, что мы проводим «диагностику» выясняем, какие задачи наиболее критичны.
        </p>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Цели и Задачи</h3>
        <p className="text-gray-400 mb-6">
          Расспрашиваем о ваших целях, анализируем основные проблемы. Хотите сократить время отклика
          клиентам? Какую информацию чаще всего запрашивают ваши клиенты? Какие вопросы вызывают у
          сотрудников наибольшую сложность?
        </p>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Сбор информации</h3>
        <p className="text-gray-400 mb-6">
          Что делаете вы? Просто делитесь информацией о том, как устроен бизнес процес и какие
          задачи планируете решать за счёт интеграции ИИ Агента. Технические и IT-вопросы мы берём
          на себя. Собираем предварительную информацию о количестве возможных запросов, анализируем
          их природу (технические, клиентские, операционные) и оцениваем, какие задачи можно
          автоматизировать с помощью ИИ. Выясняем пиковые нагрузки, среднее количество обращений в
          день/месяц и прогнозируем потенциал роста.
        </p>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Демонстрация Кейсов</h3>
        <p className="text-gray-400 mb-6">
          Проводим демонстрацию релевантного кейса с разбором успешных примеров внедрения ИИ в
          аналогичных бизнесах. Показываем, как работают наши инструменты в реальном времени, какие
          задачи они решают и какие результаты можно ожидать. Отвечаем на все вопросы и обсуждаем
          потенциальные возможности адаптации под ваш бизнес.
        </p>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">
          Определение Источников и Систем с которыми необходимо взаимодействовать
        </h3>
        <p className="text-gray-400 mb-6">
          Выясняем, какие источники необходимо подключить:{" "}
          <a href="/en/tools/facebook-messenger" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            Facebook
          </a>
          ,{" "}
          <a href="/en/tools/ai-chat-bot" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            Виджет на сайт
          </a>
          ,{" "}
          <a href="/en/tools/whatsapp" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            WhatsApp
          </a>
          ,{" "}
          <a href="/en/tools/instagram" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            Instagram
          </a>{" "}
          и другие платформы. Анализируем используемые системы управления, такие как{" "}
          <a href="/en/tools/hubspot" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            HubSpot
          </a>
          ,{" "}
          <a href="/en/tools/salesforce" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            Salesforce
          </a>
          ,{" "}
          <Link href="/en/tools/email" className="text-white hover:text-emerald-400 transition-colors">
            Email
          </Link>
          , базы данных{" "}
          <a href="/en/tools/custom-development" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            SQL или NoSQL
          </a>{" "}
          . Оцениваем необходимость интеграции с API, автоматизированного сбора данных и
          синхронизации между различными платформами для бесперебойной работы.
        </p>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">
          Предварительная оценка проекта и интеграции 
        </h3>
        <p className="text-gray-400 mb-6">
          Предварительно оцениваем количество и форматы информации для создания базы знаний,
          анализируем их структуру и необходимость обновлений. Определяем, какие данные должны быть
          загружены в систему, в каком виде и с какой частотой. Оцениваем возможности
          автоматического обновления базы знаний, а также интеграцию с внешними источниками данных
          для поддержания её актуальности.
        </p>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Итоги первого этапа</h3>
        <p className="text-gray-400 mb-6">
          На базе полученной информации и проведённой встречи специалисты компании{" "}
          <Link href="/en/contacts" className="text-white hover:text-emerald-400 transition-colors">
            NeuroGen Lab
          </Link>{" "}
          смогут детально оценить масштаб проекта, определить возможные точки интеграции и
          предложить оптимальное решение для вашей компании. Также мы прогнозируем сроки реализации
          и ресурсы, необходимые для успешного внедрения.
        </p>
      </>
    ),
  },
  stage2: {
    title: "ПРАВОВЫЕ АСПЕКТЫ",
    subtitle: "Оферта, Договор, Техническое задание",
    content: (
      <>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">
          Составление технического задания (Оферта)
        </h3>
        <p className="text-gray-400 mb-6">
          На данном этапе мы разрабатываем подробное техническое задание (ТЗ), в котором фиксируем
          все требования, задачи и ожидаемые результаты проекта. ТЗ включает:
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
          <li>Описание целей и задач внедрения ИИ-решения.</li>
          <li>Определение ключевых функций и интеграций с вашими системами.</li>
          <li>Уточнение источников данных и способов их обработки.</li>
          <li>Сроки и этапы реализации проекта.</li>
          <li>Детали касательно обучения и тестирования системы перед запуском.</li>
        </ul>
        <p className="text-gray-400 mb-8">
          Это документ, который обеспечивает прозрачность и полное понимание между нашей командой и
          клиентом, а также служит основой для дальнейшей реализации проекта.
        </p>

        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Утверждение офера</h3>
        <p className="text-gray-400 mb-8">
          После согласования всех деталей технического задания мы утверждаем финальные условия
          сотрудничества. Этот этап включает в себя финальную проверку всех требований, сроков и
          интеграций, после чего документ передаётся на подписание.
        </p>

        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Подписание договора</h3>
        <p className="text-gray-400 mb-6">
          На этом этапе мы фиксируем все согласованные условия в официальном договоре. Документ
          включает в себя сроки реализации, объём работ, технические параметры проекта и
          обязательства сторон. После подписания мы приступаем к непосредственному внедрению
          решений.
        </p>
      </>
    ),
  },
  stage3: {
    title: "КАК ПРОХОДИТ РАБОТА",
    subtitle: "От разработки до внедрения",
    content: (
      <>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Сбор данных для Базы знаний</h3>
        <p className="text-gray-400 mb-6">
          Мы берём исходные данные, приводим их в порядок и настраиваем загрузку в нашу систему. Чем
          лучше подготовлены материалы, тем точнее будет работать ИИ. Зачем это нужно? Чтобы «умный
          помощник» понимал, с чем имеет дело. Например данные о товарах или услугах — это своего
          рода «топливо» для ИИ.
        </p>

        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Промпт Инженеринг</h3>
        <p className="text-gray-400 mb-8">
          Паралельно сбору данных наши специалисты подготавливают Промпт (Инструкцию) для ИИ Агента,
          где будет указано то, как Агент должен себя вести и какие у него задачи.
        </p>

        <h3 className="text-emerald-400 text-xl font-semibold mb-4">
          Настройка инструментов (Включаем систему)
        </h3>
        <p className="text-gray-400 mb-6">
          Выбор решения: Мы подбираем модули, которые действительно необходимы вашему бизнесу:{" "}
          <Link
            href="/en/tools/ai-chat-bot"
            className="text-white hover:text-emerald-400 transition-colors"
          >
            ИИ Чат Агент
          </Link>
          ,{" "}
          <Link
            href="/en/tools/ai-voice-bot"
            className="text-white hover:text-emerald-400 transition-colors"
          >
            ИИ Голосовой Агент
          </Link>
          ,{" "}
          <Link
            href="/en/tools/best-search"
            className="text-white hover:text-emerald-400 transition-colors"
          >
            Поиск по Таблицам
          </Link>
          ,{" "}
          <Link
            href="/en/tools/custom-development"
            className="text-white hover:text-emerald-400 transition-colors"
          >
            Индивидуальное решение
          </Link>
          . Подбираем Интеграцию в каналы:{" "}
          <Link href="/en/tools/email" className="text-white hover:text-emerald-400 transition-colors">
            Email
          </Link>
          ,{" "}
          <Link
            href="/en/tools/whatsapp"
            className="text-white hover:text-emerald-400 transition-colors"
          >
            WhatsApp
          </Link>
          ,{" "}
          <Link
            href="/en/tools/instagram"
            className="text-white hover:text-emerald-400 transition-colors"
          >
            Instagram
          </Link>
          ,{" "}
          <Link
            href="/en/tools/hubspot"
            className="text-white hover:text-emerald-400 transition-colors"
          >
            HubSpot
          </Link>
          ,{" "}
          <Link
            href="/en/tools/salesforce"
            className="text-white hover:text-emerald-400 transition-colors"
          >
            Salesforce
          </Link>
          . Если требуется защита от спама, устанавливаем{" "}
          <Link
            href="/en/tools/anti-spam"
            className="text-white hover:text-emerald-400 transition-colors"
          >
            Антиспам Систему
          </Link>
          . Полный цикл настройки: Вам не нужно писать код или разбираться в технических деталях —
          мы всё подключаем и тестируем.
        </p>

        <h3 className="text-emerald-400 text-xl font-semibold mb-4">
          Тестирование (Проверка в деле)
        </h3>
        <ul className="list-disc list-inside text-gray-400 mb-8 space-y-2">
          <li>
            Запуск пилотной версии: Мы проверяем, насколько корректно ИИ обрабатывает запросы.
          </li>
          <li>Оценка эффективности: Вы и ваша команда даёте обратную связь.</li>
          <li>
            Исправляем и улучшаем: Если возникают сложности, мы оперативно делаем корректировки.
          </li>
        </ul>

        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Релиз</h3>
        <p className="text-gray-400 mb-6">
          На этом этапе мы запускаем ИИ-решение в реальной рабочей среде. Мы проводим финальные
          тестирования, проверяем стабильность системы и готовность к нагрузке. После успешной
          проверки:
        </p>
        <ul className="list-disc list-inside text-gray-400 mb-8 space-y-2">
          <li>Оповещаем клиента о завершении внедрения.</li>
          <li>Настраиваем мониторинг системы для отслеживания её работы.</li>
          <li>Осуществляем техническую поддержку на протяжении всего времени работы ИИ Агента.</li>
          <li>Проводим анализ первых данных для возможных улучшений.</li>
        </ul>

        <h3 className="text-emerald-400 text-xl font-semibold mb-4">
          Обучение и расширение (Постоянный рост)
        </h3>
        <p className="text-gray-400 mb-6">
          До обучение ИИ: Со временем система всё точнее интерпретирует запросы пользователей. Для
          этого у нас есть собственная система тонкого до обучения вашего ИИ Агента. При
          необходимости подключение новых модулей: Например,{" "}
          <Link
            href="/en/tools/ai-avatar"
            className="text-white hover:text-emerald-400 transition-colors"
          >
            ИИ Аватар
          </Link>{" "}
          для видеообращений или{" "}
          <Link
            href="/en/tools/custom-development"
            className="text-white hover:text-emerald-400 transition-colors"
          >
            Индивидуальное Решение
          </Link>{" "}
          для уникальных задач.
        </p>
        <p className="text-gray-400 mb-6">
          Гибкость: Мы настраиваем ИИ так, чтобы он работал максимально эффективно.
        </p>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Admin Panel</h3>
        <p className="text-gray-400 mb-6">
          Ваши сотрудники будут интегрированы в нашу систему контроля ИИ Агента. Время обучения тому
          как работать с системой- 30 минут. Ни каких сложных технических задач нет, а справится
          сможет даже ребёнок.
        </p>
      </>
    ),
  },
  stage4: {
    title: "РЕЗУЛЬТАТЫ",
    subtitle: "Какие улучшения вы получите",
    content: (
      <>
        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Меньше рутины</h3>
        <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
          <li>
            Снижение нагрузки на операторов: Благодаря ИИ сотрудники могут обрабатывать на 60%
            больше сложных запросов, уделяя внимание ключевым задачам.
          </li>
          <li>
            Автоматическая сортировка заявок: ИИ анализирует входящие запросы, классифицирует их и
            направляет нужному специалисту.
          </li>
          <li>
            Уменьшение ошибок: Исключение человеческого фактора снижает вероятность ошибок и
            улучшает качество сервиса.
          </li>
          <li>
            Ускорение выполнения задач: Среднее время выполнения стандартных задач сокращается в 2-7
            раз, позволяя быстрее реагировать на запросы клиентов.
          </li>
          <li>
            Гибкость в масштабировании: Система адаптируется под рост бизнеса, увеличивая мощность
            обработки без необходимости найма дополнительных сотрудников.
          </li>
        </ul>
        <p className="text-gray-400 mb-8">
          ИИ обрабатывает до 80% стандартных вопросов, заявок и писем, сокращая нагрузку на
          сотрудников и ускоряя время обработки информации. В среднем это снижает объём рутинной
          работы на 50-70%, позволяя персоналу сосредоточиться на более сложных и стратегически
          важных задачах. Такой подход не только улучшает производительность, но и повышает
          удовлетворённость клиентов за счёт быстрого и точного ответа на их запросы.
        </p>

        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Защита и стабильность</h3>
        <p className="text-gray-400 mb-8">
          <Link
            href="/en/tools/anti-spam"
            className="text-white hover:text-emerald-400 transition-colors"
          >
            Антиспам Система
          </Link>{" "}
          фильтрует назойливые сообщения, облегчая вашу почту и чаты. Этот инструмент анализирует
          входящие запросы, выявляет подозрительные или нежелательные сообщения. Это снижает
          количество спама, улучшает качество коммуникации и защищает сотрудников от нежелательной
          нагрузки.
        </p>

        <h3 className="text-emerald-400 text-xl font-semibold mb-4">Довольные клиенты</h3>
        <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
          <li>
            Быстрые ответы: Среднее время обработки запроса с ИИ составляет 7-15 секунды, что
            сокращает ожидание клиентов на 90%.
          </li>
          <li>
            Современный подход: Ваш бизнес демонстрирует высокие технологии и заботу о клиентах.
          </li>
          <li>
            Мультиязычность: ИИ способен обрабатывать запросы на нескольких языках, адаптируясь под
            клиентов из разных стран. Это позволяет вашему бизнесу эффективно взаимодействовать с
            глобальной аудиторией, предоставляя поддержку и сервис без языковых барьеров.
          </li>
          <li>
            Круглосуточная доступность: ИИ-агент работает 24/7 без выходных и праздников,
            обеспечивая мгновенный отклик на запросы клиентов в любое время суток. Это особенно
            важно для компаний, работающих в международном формате или имеющих высокую загрузку в
            разные часы дня.
          </li>
        </ul>
      </>
    ),
  },
};

const GuideContent = () => {
  const [activeStage, setActiveStage] = useState("stage1");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const language = getPageLangUnit(guideTranslations);
  const t = guideTranslations[language];

  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    // Удаляем атрибуты darkreader при монтировании компонента
    const elements = document.querySelectorAll("[data-darkreader-scheme], [data-darkreader-mode]");
    elements.forEach((el) => {
      el.removeAttribute("data-darkreader-scheme");
      el.removeAttribute("data-darkreader-mode");
    });
  }

  // Используйте фиксированную локаль
  const date = new Date().toLocaleDateString("en-US");

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const savedScrollPosition = sessionStorage.getItem("guideScrollPosition");
    const savedStage = sessionStorage.getItem("guideActiveStage");

    if (savedScrollPosition && savedStage) {
      setActiveStage(savedStage);
      window.scrollTo(0, parseInt(savedScrollPosition));
      // Очищаем сохраненные данные после использования
      sessionStorage.removeItem("guideScrollPosition");
      sessionStorage.removeItem("guideActiveStage");
    }

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (link && !link.href.includes(window.location.origin + "/guide")) {
        // Сохраняем текущую позицию скролла и активный этап
        sessionStorage.setItem("guideScrollPosition", window.scrollY.toString());
        sessionStorage.setItem("guideActiveStage", activeStage);
      }
    };

    // Добавляем обработчик для всех ссылок во всех этапах
    const allContentBlocks = document.querySelectorAll(".guide-content");
    allContentBlocks.forEach((block) => {
      const links = block.querySelectorAll("a");
      links.forEach((link) => {
        link.addEventListener("click", handleLinkClick);
      });
    });

    return () => {
      // Очищаем обработчики при размонтировании
      allContentBlocks.forEach((block) => {
        const links = block.querySelectorAll("a");
        links.forEach((link) => {
          link.removeEventListener("click", handleLinkClick);
        });
      });
    };
  }, [activeStage]); // Добавляем activeStage в зависимости

  // Обновляем обработчик смены этапа
  const handleStageChange = (stage: string) => {
    setActiveStage(stage);
    setIsMobileMenuOpen(false);
    // При смене этапа через меню очищаем сохраненную позицию
    sessionStorage.removeItem("guideScrollPosition");
    sessionStorage.removeItem("guideActiveStage");
  };

  const renderStageContent = () => {
    const stage = t.stages[activeStage];

    return (
      <div className="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4">{stage.title}</h2>
        <h3 className="text-xl text-gray-200 mb-8">{stage.subtitle}</h3>

        {/* Render only non-empty sections */}
        {Object.entries(stage.sections).map(([key, section]) => {
          if (section.title || section.content) {
            return (
              <div key={key}>
                {section.title && (
                  <h3 className="text-emerald-400 text-xl font-semibold mb-4">{section.title}</h3>
                )}
                {section.content && (
                  <p className="text-gray-400 mb-6 whitespace-pre-line">{section.content}</p>
                )}
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      {/* Back button */}
      <div className="mb-10">
        <BackToHome />
      </div>

      {/* Header section */}
      <div className="text-center mb-14">
        <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-emerald-500/20 mb-6">
          <IconWrapper icon={BrainCircuit} className="w-8 h-8 text-emerald-1400" />
        </div>
        <h1 className="text-4xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
          {t.header.title}
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.header.subtitle}</p>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden mb-8">
        <button
          className="w-full p-4 bg-gray-800/50 text-emerald-400 rounded-lg hover:bg-gray-800/70 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? t.mobileMenu.hide : t.mobileMenu.show}
        </button>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:block`}>
          <GuideSidebar activeStage={activeStage} setActiveStage={handleStageChange} />
        </div>

        <div className="flex-1 max-w-full md:max-w-3xl guide-content">{renderStageContent()}</div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 mt-12">
        <Link
          href="/en/contacts"
          className="w-full sm:w-[180px] h-10 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors text-center flex items-center justify-center"
        >
          {t.buttons.contactSales}
        </Link>
        <div className="w-full sm:w-[180px]">
          <BookDemoBtn />
        </div>
      </div>

      {/* DemoModal */}
      <DemoModal showModal={showDemoModal} setShowModal={setShowDemoModal} />
    </div>
  );
};

export default GuideContent;
