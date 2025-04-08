import React from 'react';
import {
  Info,
  Store,
  Briefcase,
  GraduationCap,
  ShoppingCart,
  DollarSign,
  Car,
  ChevronDown,
  MessageSquare,
  Clock,
  PieChart,
  BarChart3,
  Globe,
  Building,
  BookOpen,
  BadgeCheck,
  Zap,
  AlarmClock,
  Timer,
  BanknoteIcon,
  CheckCircle2,
  Target,
  TrendingUp,
  ShoppingBag,
  Phone,
  LineChart,
  Users,
  Repeat,
  Bell,
  MessageCircle,
  BarChart,
  Smartphone
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ContentProps {
  content: {
    industriesTitle: string;
    industriesText: string;
    industries: ReadonlyArray<{
      readonly icon: string;
      readonly name: string;
      readonly description: string;
    }>;
    topReasonsTitle: string;
    reasonList: ReadonlyArray<{
      readonly title: string;
      readonly content: {
        readonly text: string;
        readonly list: readonly string[];
      };
    }>;
    finalConclusion: {
      readonly title: string;
      readonly text: string;
    };
  };
}

// Функция для получения иконки по названию отрасли
const getIndustryIcon = (iconName: string, name: string) => {
  // Мапинг эмодзи на компоненты Lucide React
  switch (true) {
    case /retail|розничн|einzelhandel|minorista/i.test(name):
      return <Store className='w-10 h-10 text-emerald-400' />;
    case /services|услуг|послуг|dienstleistungen|servicios/i.test(name):
      return <Briefcase className='w-10 h-10 text-emerald-400' />;
    case /education|образован|освіт|bildung|educación/i.test(name):
      return <GraduationCap className='w-10 h-10 text-emerald-400' />;
    case /e-commerce|электрон|електрон|commerce/i.test(name):
      return <ShoppingCart className='w-10 h-10 text-emerald-400' />;
    case /financ|финанс|фінанс|finanzen/i.test(name):
      return <DollarSign className='w-10 h-10 text-emerald-400' />;
    case /auto|авто|automobil/i.test(name):
      return <Car className='w-10 h-10 text-emerald-400' />;
    default:
      return <div className='text-4xl text-emerald-400'>{iconName}</div>;
  }
};

// Функция для получения иконки по ключевым словам в заголовке
const getIconByTitle = (title: string) => {
  switch (true) {
    case /как ии помогает|консультаци|support|automated/i.test(title):
      return <MessageSquare className='w-5 h-5 text-emerald-400 mr-2 inline-block' />;
    case /персонализац|benefits/i.test(title):
      return <TrendingUp className='w-5 h-5 text-emerald-400 mr-2 inline-block' />;
    case /сбор|квалификац|лид/i.test(title):
      return <Target className='w-5 h-5 text-emerald-400 mr-2 inline-block' />;
    case /сопровожд|покупк/i.test(title):
      return <ShoppingBag className='w-5 h-5 text-emerald-400 mr-2 inline-block' />;
    case /автоматизац|коммуникац/i.test(title):
      return <Phone className='w-5 h-5 text-emerald-400 mr-2 inline-block' />;
    case /выгод|benefits|результат/i.test(title):
      return <LineChart className='w-5 h-5 text-emerald-400 mr-2 inline-block' />;
    case /клиент|customer|users/i.test(title):
      return <Users className='w-5 h-5 text-emerald-400 mr-2 inline-block' />;
    case /повтор|retention/i.test(title):
      return <Repeat className='w-5 h-5 text-emerald-400 mr-2 inline-block' />;
    case /уведомлен|notification/i.test(title):
      return <Bell className='w-5 h-5 text-emerald-400 mr-2 inline-block' />;
    case /преимуществ|benefits/i.test(title):
      return (
        <BadgeCheck className='w-5 h-5 text-emerald-400 mr-2 inline-block' />
      );
    case /использу|used|where/i.test(title):
      return (
        <Building className='w-5 h-5 text-emerald-400 mr-2 inline-block' />
      );
    case /важно|important|why/i.test(title):
      return <Zap className='w-5 h-5 text-emerald-400 mr-2 inline-block' />;
    case /экономи|costs|cost|budget|затрат|расход/i.test(title):
      return (
        <DollarSign className='w-5 h-5 text-emerald-400 mr-2 inline-block' />
      );
    case /результат|фактор|impact|results/i.test(title):
      return (
        <BarChart3 className='w-5 h-5 text-emerald-400 mr-2 inline-block' />
      );
    case /пример|example|case/i.test(title):
      return (
        <Briefcase className='w-5 h-5 text-emerald-400 mr-2 inline-block' />
      );
    default:
      return <BookOpen className='w-5 h-5 text-emerald-400 mr-2 inline-block' />;
  }
};

// Функция для распознавания lucide иконок в тексте
const processLucideIcons = (text: string) => {
  if (!text.includes("<i class='lucide-")) return text;
  
  // Извлекаем имя иконки
  const match = text.match(/<i class='lucide-([^']+)/);
  if (!match) return text;
  
  const iconName = match[1].replace(/\s+text-emerald-400\s+mr-2'><\/i>\s*/, '');
  let icon;
  
  // Сопоставляем имя иконки с компонентом
  switch (iconName) {
    case 'message-circle':
      icon = <MessageCircle className="text-emerald-400 mr-2" />;
      break;
    case 'bar-chart':
      icon = <BarChart className="text-emerald-400 mr-2" />;
      break;
    case 'target':
      icon = <Target className="text-emerald-400 mr-2" />;
      break;
    case 'shopping-cart':
      icon = <ShoppingCart className="text-emerald-400 mr-2" />;
      break;
    case 'smartphone':
      icon = <Smartphone className="text-emerald-400 mr-2" />;
      break;
    case 'zap':
      icon = <Zap className="text-emerald-400 mr-2" />;
      break;
    default:
      return text;
  }
  
  // Заменяем тег иконки текстом без тега
  return {
    icon,
    text: text.replace(/<i class='lucide-[^>]+><\/i>\s*/, '')
  };
};

// Функция для рендеринга основного текста с поддержкой разметки Markdown (жирного текста)
const renderMarkdownText = (text: string) => {
  if (!text.includes('**')) return text;
  
  // Разбиваем текст на части и преобразуем **текст** в JSX элементы с жирным шрифтом
  const parts: string[] = [];
  let currentIndex = 0;
  
  // Находим все вхождения ** в тексте
  const matches = text.match(/\*\*/g);
  if (!matches) return text;
  
  const positions: number[] = [];
  let pos = -1;
  
  while ((pos = text.indexOf('**', pos + 1)) !== -1) {
    positions.push(pos);
  }
  
  // Обрабатываем каждую пару **
  for (let i = 0; i < positions.length; i++) {
    const pos = positions[i];
    
    // Добавляем текст до **
    if (pos > currentIndex) {
      parts.push(text.substring(currentIndex, pos));
    }
    
    // Обновляем текущую позицию
    currentIndex = pos + 2;
  }
  
  // Добавляем оставшийся текст
  if (currentIndex < text.length) {
    parts.push(text.substring(currentIndex));
  }
  
  // Создаем JSX элементы
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index} className="text-emerald-300">{part}</strong>;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
};

export const AIChatBotContent: React.FC<ContentProps> = ({ content }) => {
  // Сбрасываем флаг при каждом рендере компонента
  React.useEffect(() => {
    operationalCostsRendered = false;
  }, [content]);

  // Проверка, нужно ли отображать карточки преимуществ
  const shouldRenderAdvantageCards = (title: string) => {
    return /как ии-чатботы|how ai chat|ai change|ии меняют/i.test(title);
  };

  // Функция для отображения карточек преимуществ
  const renderAdvantageCards = () => {
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12'>
        {/* Карточка 1 - Круглосуточная доступность */}
        <motion.div
          className='bg-gradient-to-br from-gray-800/90 to-gray-900/95 rounded-lg p-5 flex flex-col items-center text-center border border-gray-700/30 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10'
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className='bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 rounded-full p-4 mb-4 shadow-inner'>
            <AlarmClock className='w-8 h-8 text-emerald-400' />
          </div>
          <h6 className='font-bold text-emerald-300 text-lg mb-2'>
            Круглосуточная доступность
          </h6>
          <p className='text-gray-300 leading-relaxed'>
            Ваш бизнес работает даже когда сотрудники спят. ИИ-чатбот всегда
            онлайн.
          </p>
        </motion.div>

        {/* Карточка 2 - Мгновенная реакция */}
        <motion.div
          className='bg-gradient-to-br from-gray-800/90 to-gray-900/95 rounded-lg p-5 flex flex-col items-center text-center border border-gray-700/30 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10'
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className='bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 rounded-full p-4 mb-4 shadow-inner'>
            <Zap className='w-8 h-8 text-emerald-400' />
          </div>
          <h6 className='font-bold text-emerald-300 text-lg mb-2'>
            Мгновенная реакция
          </h6>
          <p className='text-gray-300 leading-relaxed'>
            ИИ обрабатывает запросы в течение секунд, обеспечивая высокий
            уровень удовлетворённости.
          </p>
        </motion.div>

        {/* Карточка 3 - Экономия ресурсов */}
        <motion.div
          className='bg-gradient-to-br from-gray-800/90 to-gray-900/95 rounded-lg p-5 flex flex-col items-center text-center border border-gray-700/30 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10'
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className='bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 rounded-full p-4 mb-4 shadow-inner'>
            <BanknoteIcon className='w-8 h-8 text-emerald-400' />
          </div>
          <h6 className='font-bold text-emerald-300 text-lg mb-2'>
            Экономия ресурсов
          </h6>
          <p className='text-gray-300 leading-relaxed'>
            Автоматизация позволяет существенно сократить затраты на call-центр
            и персонал поддержки.
          </p>
        </motion.div>

        {/* Карточка 4 - Стабильное качество */}
        <motion.div
          className='bg-gradient-to-br from-gray-800/90 to-gray-900/95 rounded-lg p-5 flex flex-col items-center text-center border border-gray-700/30 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10'
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className='bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 rounded-full p-4 mb-4 shadow-inner'>
            <CheckCircle2 className='w-8 h-8 text-emerald-400' />
          </div>
          <h6 className='font-bold text-emerald-300 text-lg mb-2'>
            Стабильное качество
          </h6>
          <p className='text-gray-300 leading-relaxed'>
            ИИ не устаёт, не ошибается и всегда вежлив. Это гарантирует высокий
            уровень обслуживания.
          </p>
        </motion.div>
      </div>
    );
  };

  // Используем статическую переменную для отслеживания, был ли уже отрендерен операционный контент
  let operationalCostsRendered = false;

  // Функция для отображения содержимого "Снижения операционных расходов"
  const renderOperationalCostsContent = (
    title: string,
    index: number,
    allTitles: string[]
  ) => {
    // Проверяем, относится ли этот раздел к снижению расходов
    const isCostReduction =
      /снижение|costs|reduce|operational|операцион|расход/i.test(title);

    if (!isCostReduction) return null;

    // Если контент уже был отрендерен, возвращаем null
    if (operationalCostsRendered) return null;

    // Помечаем, что контент был отрендерен
    operationalCostsRendered = true;

    return (
      <div className='space-y-6'>
        <p className='text-gray-300'>
          Во многих компаниях обслуживание клиентов занимает значительную часть
          бюджета: зарплаты, обучение, текучка кадров, оборудование и нагрузка
          на инфраструктуру. Внедрение ИИ-чатбота позволяет оптимизировать
          затраты, автоматизируя рутинные процессы и обеспечивая высокое
          качество обслуживания 24/7.
        </p>

        <div>
          <h5 className='text-xl font-bold text-emerald-400 mb-3 flex items-center'>
            <DollarSign className='w-5 h-5 text-emerald-400 mr-2 inline-block' />
            Что именно экономит бизнес при использовании ИИ:
          </h5>
          <div className='space-y-4'>
            <div>
              <p className='text-white font-medium mb-1'>
                Сокращение затрат на персонал поддержки
              </p>
              <p className='text-gray-300'>
                <span className='text-emerald-400 mr-2'>•</span>ИИ обрабатывает обращения без участия операторов, снижая необходимость в большом штате сотрудников.
              </p>
            </div>

            <div>
              <p className='text-white font-medium mb-1'>
                Меньше времени — выше эффективность
              </p>
              <p className='text-gray-300'>
                <span className='text-emerald-400 mr-2'>•</span>Ответы на типовые запросы предоставляются мгновенно, что снижает общую нагрузку на команду и ускоряет цикл обслуживания.
              </p>
            </div>

            <div>
              <p className='text-white font-medium mb-1'>
                Автоматизация повторяющихся задач
              </p>
              <p className='text-gray-300'>
                <span className='text-emerald-400 mr-2'>•</span>Часто задаваемые вопросы, проверка статуса заказов, уточнение информации — всё это передаётся ИИ, без участия человека.
              </p>
            </div>

            <div>
              <p className='text-white font-medium mb-1'>
                Снижение расходов на обучение и адаптацию
              </p>
              <p className='text-gray-300'>
                <span className='text-emerald-400 mr-2'>•</span>Нет необходимости постоянно обучать новых сотрудников — большая часть клиентских сценариев уже покрыта ИИ-ботом.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h5 className='text-xl font-bold text-emerald-400 mb-3 flex items-center'>
            <BarChart3 className='w-5 h-5 text-emerald-400 mr-2 inline-block' />
            Реальные результаты автоматизации
          </h5>
          <ul className='space-y-2'>
            <li className='text-gray-300 flex items-start'>
              <span className='text-emerald-400 mr-2'>•</span>
              <span>Компании сокращают до 40% затрат на поддержку уже в первые месяцы.</span>
            </li>
            <li className='text-gray-300 flex items-start'>
              <span className='text-emerald-400 mr-2'>•</span>
              <span>Снижается текучесть кадров и выгорание операторов — ИИ берёт на себя рутину.</span>
            </li>
            <li className='text-gray-300 flex items-start'>
              <span className='text-emerald-400 mr-2'>•</span>
              <span>Сокращается время реакции на запросы и увеличивается количество обслуженных клиентов без дополнительных ресурсов.</span>
            </li>
          </ul>
        </div>

        <div>
          <h5 className='text-xl font-bold text-emerald-400 mb-3 flex items-center'>
            <Briefcase className='w-5 h-5 text-emerald-400 mr-2 inline-block' />
            Примеры, как ИИ помогает сэкономить:
          </h5>
          <ul className='space-y-2'>
            <li className='text-gray-300 flex items-start'>
              <span className='text-emerald-400 mr-2'>•</span>
              <span>Онлайн-магазин сократил количество операторов на 40%, передав ИИ-боту работу с заказами, доставкой и возвратами.</span>
            </li>
            <li className='text-gray-300 flex items-start'>
              <span className='text-emerald-400 mr-2'>•</span>
              <span>Сервисная компания избавилась от затрат на ночные смены, внедрив круглосуточного виртуального помощника.</span>
            </li>
            <li className='text-gray-300 flex items-start'>
              <span className='text-emerald-400 mr-2'>•</span>
              <span>Банк уменьшил нагрузку на контакт-центр на 60%, автоматизировав ответы на вопросы по тарифам и продуктам.</span>
            </li>
            <li className='text-gray-300 flex items-start'>
              <span className='text-emerald-400 mr-2'>•</span>
              <span>Автосалон сэкономил более €2,000 в месяц, автоматизировав консультации по наличию автомобилей и записи на тест-драйв.</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  // Обновляем функцию renderListItem для обработки иконок Lucide
  const renderListItem = (
    item: string,
    reasonTitle: string,
    index: number,
    allReasonTitles: string[]
  ) => {
    // Попытка рендеринга операционных расходов (если это подходящий заголовок)
    const operationalCostsContent = renderOperationalCostsContent(
      reasonTitle,
      index,
      allReasonTitles
    );
    if (operationalCostsContent) {
      return operationalCostsContent;
    }
    
    // Проверяем, относится ли элемент к разделу "Увеличение продаж и конверсий"
    const isSalesConversionSection = /Увеличение продаж и конверсий|Збільшення продажів та конверсій/i.test(reasonTitle);
    
    // Специальная обработка для раздела "Увеличение продаж и конверсий"
    if (isSalesConversionSection) {
      // Проверяем, является ли это элементом "2. Персонализация предложений" или "3. Сбор и квалификация лидов" или "4. Сопровождение до покупки" или "5. Автоматизация до- и постпродажной коммуникации"
      if (item.match(/^2\.\s+Персонализация предложений/) || item.match(/^📊\s+Персонализация предложений/) || item.match(/^📊\s+2\.\s+Персонализация предложений/) || 
          item.match(/^3\.\s+Сбор и квалификация лидов/) || 
          item.match(/^4\.\s+Сопровождение до покупки/) ||
          item.match(/^5\.\s+Автоматизация до- и постпродажной коммуникации/)) {
        // Разделяем на заголовок и содержимое
        const textWithoutPrefix = item.replace(/^(📊\s+)?(2\.|3\.|4\.|5\.)\s+/, '');
        const parts = textWithoutPrefix.split('\n\n');
        
        // Определяем заголовок в зависимости от номера
        let title;
        if (item.startsWith("2.")) {
          title = "2. " + parts[0];
        } else if (item.startsWith("3.")) {
          title = "3. " + parts[0];
        } else if (item.startsWith("4.")) {
          title = "4. " + parts[0];
        } else if (item.startsWith("5.")) {
          title = "5. " + parts[0];
        } else {
          title = "2. " + parts[0]; // Для случая с эмодзи перед "2."
        }
        
        const description = parts.length > 1 ? parts[1] : "";
        const listContent = parts.slice(2).join('\n\n');
        
        // Отображаем как подзаголовок с маркированным списком
        return (
          <div className="mb-4">
            <h6 className="text-white font-medium mb-2">{title}</h6>
            {description && <p className="text-gray-300 mb-3">{description}</p>}
            <div className="space-y-3">
              {listContent.split('\n\n').map((part, idx) => {
                if (part.includes('• ')) {
                  const bullets = part.split('• ').filter(b => b.trim());
                  return (
                    <ul key={idx} className="list-none space-y-2">
                      {bullets.map((bullet, bidx) => (
                        <li key={bidx} className="text-gray-300 flex items-start">
                          <span className="text-emerald-400 mr-2">•</span>
                          <span>{bullet.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <p key={idx} className="text-gray-300">{part}</p>;
              })}
            </div>
          </div>
        );
      }
      
      // Остальной код для обработки элементов с эмодзи может остаться как есть
      if (item.match(/^(💬|📊|🎯|⚡️)/) && !item.match(/^🛒\s*Сопровождение до покупки/) && !item.match(/^📱\s*Автоматизация до- и постпродажной коммуникации/)) {
        const emojiMatch = item.match(/^(💬|📊|🎯|⚡️)/);
        const emoji = emojiMatch ? emojiMatch[0] : '';
        
        // Удаляем эмодзи из начала строки
        const textWithoutEmoji = item.replace(/^(💬|📊|🎯|⚡️)\s*/, '');
        
        // Разбиваем на заголовок и содержимое
        const parts = textWithoutEmoji.split('\n\n');
        const title = parts[0];
        const content = parts.slice(1).join('\n\n');
        
        // Определяем соответствующую иконку Lucide на основе эмодзи
        let icon;
        switch (emoji) {
          case '💬':
            icon = <MessageCircle className="w-5 h-5 text-emerald-400 mr-2" />;
            break;
          case '📊':
            icon = <BarChart className="w-5 h-5 text-emerald-400 mr-2" />;
            break;
          case '🎯':
            icon = <Target className="w-5 h-5 text-emerald-400 mr-2" />;
            break;
          case '⚡️':
            icon = <Zap className="w-5 h-5 text-emerald-400 mr-2" />;
            break;
          default:
            icon = <BookOpen className="w-5 h-5 text-emerald-400 mr-2" />;
        }
        
        return (
          <div className='mb-4'>
            <h5 className='text-xl font-bold text-emerald-400 mb-3 flex items-center'>
              {icon}
              {title}
            </h5>
            <div className='space-y-3'>
              {content.split('\n\n').map((part, idx) => {
                // Проверяем, содержит ли часть номерной формат (например, "1. Консультации в режиме реального времени")
                if (part.match(/^\d+\.\s/)) {
                  const subparts = part.split('\n');
                  const subtitle = subparts[0]; // Подзаголовок (например, "1. Консультации в режиме реального времени")
                  const subcontent = subparts.slice(1).join('\n'); // Остальное содержимое
                  
                  return (
                    <div key={idx} className="mb-3">
                      <h6 className="text-white font-medium mb-2">{subtitle}</h6>
                      <p className="text-gray-300">{subcontent}</p>
                    </div>
                  );
                } else if (part.includes('• ')) {
                  const listItems = part.split('• ').filter(i => i.trim());
                  return (
                    <ul key={idx} className='list-none space-y-2'>
                      {listItems.map((li, liIdx) => (
                        <li key={liIdx} className='text-gray-300 flex items-start'>
                          <span className='text-emerald-400 mr-2'>•</span>
                          <span>{li.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <p key={idx} className='text-gray-300'>{part}</p>;
              })}
            </div>
          </div>
        );
      }
    }

    // Проверяем, относится ли элемент к разделу "Мгновенная масштабируемость для высоких нагрузок"
    const isScalabilitySection = /масштабируемость|scalability|масштабованість/i.test(reasonTitle);
    
    // Проверяем, относится ли элемент к разделу "Улучшение клиентского опыта"
    const isCustomerExperience = /Улучшение клиентского опыта|Покращений клієнтський досвід/i.test(reasonTitle);
    
    // Специальная обработка для раздела "Улучшение клиентского опыта"
    if (isCustomerExperience && 
        (item.startsWith("Что даёт ИИ в клиентском сервисе?") || 
         item.startsWith("Как ИИ повышает удовлетворённость клиентов?") || 
         item.startsWith("Реальные примеры:") || 
         item.startsWith("Преимущества ИИ в улучшении клиентского опыта") ||
         item.startsWith("Що дає ШІ в клієнтському сервісі?") ||
         item.startsWith("Як ШІ підвищує задоволеність клієнтів?") ||
         item.startsWith("Реальні приклади:") ||
         item.startsWith("Переваги ШІ у покращенні клієнтського досвіду"))) {
      
      // Разделяем на заголовок и содержимое
      const parts = item.split('\n\n');
      const title = parts[0];
      const content = parts.slice(1).join('\n\n');
      
      // Находим подходящую иконку для заголовка
      let icon;
      if (title.includes("даёт") || title.includes("дає")) {
        icon = <Info className='w-5 h-5 text-emerald-400 mr-2' />;
      } else if (title.includes("повышает") || title.includes("підвищує")) {
        icon = <TrendingUp className='w-5 h-5 text-emerald-400 mr-2' />;
      } else if (title.includes("примеры") || title.includes("приклади")) {
        icon = <Briefcase className='w-5 h-5 text-emerald-400 mr-2' />;
      } else if (title.includes("Преимущества") || title.includes("Переваги")) {
        icon = <BadgeCheck className='w-5 h-5 text-emerald-400 mr-2' />;
      } else {
        icon = getIconByTitle(title);
      }
      
      return (
        <div className='mb-4'>
          <h5 className='text-xl font-bold text-emerald-400 mb-3 flex items-center'>
            {icon}
            {title}
          </h5>
          <div className='space-y-3'>
            {content.split('\n\n').map((part, partIdx) => {
              if (part.includes('- ')) {
                const listItems = part.split('- ').filter((i) => i.trim());
                return (
                  <ul key={partIdx} className='list-none space-y-2'>
                    {listItems.map((li, liIdx) => (
                      <li key={liIdx} className='text-gray-300 flex items-start'>
                        <span className='text-emerald-400 mr-2'>•</span>
                        <span>{li.trim()}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={partIdx} className='text-gray-300'>
                  {renderMarkdownText(part)}
                </p>
              );
            })}
          </div>
        </div>
      );
    }

    // Специальная обработка для раздела "Мгновенная масштабируемость для высоких нагрузок"
    if (isScalabilitySection && 
        (item.startsWith("Почему масштабируемость важна?") || 
         item.startsWith("Как ИИ-чатботы обеспечивают стабильность при высоких нагрузках?") || 
         item.startsWith("Примеры масштабируемости в действии") || 
         item.startsWith("Преимущества масштабируемого ИИ-решения") ||
         item.startsWith("Чому масштабованість важлива?") ||
         item.startsWith("Як ШІ-чатботи забезпечують стабільність при високих навантаженнях?") ||
         item.startsWith("Приклади масштабованості в дії") ||
         item.startsWith("Переваги масштабованого ШІ-рішення"))) {
      
      // Разделяем на заголовок и содержимое
      const parts = item.split('\n\n');
      const title = parts[0];
      const content = parts.slice(1).join('\n\n');
      
      // Находим подходящую иконку для заголовка
      const icon = getIconByTitle(title);
      
      return (
        <div className='mb-4'>
          <h5 className='text-xl font-bold text-emerald-400 mb-3 flex items-center'>
            {icon}
            {title}
          </h5>
          <div className='space-y-3'>
            {content.split('\n\n').map((part, partIdx) => {
              if (part.includes('• ') || part.includes('•')) {
                const listItems = part.includes('• ') 
                  ? part.split('• ').filter((i) => i.trim())
                  : part.split('•').filter((i) => i.trim());
                return (
                  <ul key={partIdx} className='list-none space-y-2'>
                    {listItems.map((li, liIdx) => (
                      <li key={liIdx} className='text-gray-300 flex items-start'>
                        <span className='text-emerald-400 mr-2'>•</span>
                        <span>{li.trim()}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={partIdx} className='text-gray-300'>
                  {part}
                </p>
              );
            })}
          </div>
        </div>
      );
    }

    // Обработка маркированных списков
    if (item.includes(' • ') || item.includes('•')) {
      const lines = item.includes(' • ') ? item.split(' • ') : item.split('•');
      let intro = '';
      let listItems = lines;

      // Проверка на наличие интро-текста
      if (lines[0] && !lines[0].startsWith('•') && lines.length > 1) {
        intro = lines[0];
        listItems = lines.slice(1);
      }

      return (
        <div>
          {intro && <p className='text-gray-300 mb-4'>{intro}</p>}
          <ul className='list-none space-y-2'>
            {listItems
              .filter((li) => li.trim())
              .map((li, i) => (
                <li key={i} className='text-gray-300 flex items-start'>
                  <span className='text-emerald-400 mr-2'>•</span>
                  <span>{li.trim()}</span>
                </li>
              ))}
          </ul>
        </div>
      );
    }

    // Обработка секций с маркером 🔹
    if (item.includes('🔹')) {
      // Разбиваем текст на заголовок и содержимое
      const parts = item.split('\n');
      const title = parts[0];
      const content = parts.slice(1).join('\n');

      // Разбиваем содержимое на абзацы и списки
      const contentParts = content.split('\n\n');

      // Находим подходящую иконку для заголовка
      const icon = getIconByTitle(title);

      return (
        <div className='mb-4'>
          <h5 className='text-xl font-bold text-emerald-400 mb-3 flex items-center'>
            {icon}
            {title.replace('🔹 ', '')}
          </h5>
          <div className='space-y-3'>
            {contentParts.map((part, partIdx) => {
              if (part.includes('• ') || part.includes('•')) {
                const listItems = part.includes('• ') 
                  ? part.split('• ').filter((i) => i.trim())
                  : part.split('•').filter((i) => i.trim());
                return (
                  <ul key={partIdx} className='list-none space-y-2'>
                    {listItems.map((li, liIdx) => (
                      <li key={liIdx} className='text-gray-300 flex items-start'>
                        <span className='text-emerald-400 mr-2'>•</span>
                        <span>{li.trim()}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={partIdx} className='text-gray-300'>
                  {part}
                </p>
              );
            })}
          </div>
        </div>
      );
    }

    // Обычный текст
    return <p className='text-gray-300'>{item}</p>;
  };

  return (
    <article className='prose prose-invert max-w-none'>
      <section className='mb-16'>
        <h3 className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6'>
          {content.industriesTitle}
        </h3>
        <p className='mb-8 text-gray-300 leading-relaxed'>
          {content.industriesText}
        </p>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {content.industries.map((industry, index) => (
            <motion.div
              key={index}
              className='bg-gradient-to-br from-gray-800/70 to-gray-900/80 rounded-lg p-8 relative border border-gray-800/30 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/10'
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className='absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-full blur-2xl'></div>
              <Info className='absolute top-3 right-3 w-5 h-5 text-emerald-400/70' />
              <div className='w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-5 shadow-lg border border-gray-700/30 mb-6 flex items-center justify-center'>
                {getIndustryIcon(industry.icon, industry.name)}
              </div>
              <h4 className='text-xl font-bold text-emerald-300 mb-4'>
                {industry.name}
              </h4>
              <p className='text-gray-300 leading-relaxed'>
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className='mb-16'>
        <h3 className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-8'>
          {content.topReasonsTitle}
        </h3>
        <div className='space-y-4'>
          {content.reasonList.map((reason, index) => (
            <details
              key={index}
              className='bg-gray-800/50 rounded-lg overflow-hidden group cursor-pointer'
              open={index === 0}
            >
              <summary className='flex items-center justify-between p-8 relative hover:bg-gray-800/40 transition-colors duration-300'>
                <div className='flex items-center gap-4'>
                  <div className='w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400'>
                    {index + 1}
                  </div>
                  <h4 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300'>
                    {reason.title}
                  </h4>
                </div>
                <div className='bg-gray-900/80 rounded-full p-2'>
                  <ChevronDown className='w-5 h-5 text-emerald-400 transform group-open:rotate-180 transition-transform duration-300' />
                </div>

                {/* Декоративный элемент */}
                <div className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400/0 via-emerald-400 to-emerald-400/0 group-open:opacity-100 opacity-0 transition-opacity duration-300'></div>
              </summary>

              <div className='p-6 pt-2'>
                <p className='mb-4 text-gray-300'>{renderMarkdownText(reason.content.text)}</p>

                {/* Отображаем карточки преимуществ для подходящих заголовков */}
                {shouldRenderAdvantageCards(reason.title) &&
                  renderAdvantageCards()}

                <div className='space-y-10'>
                  {reason.content.list.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {renderListItem(
                        item,
                        reason.title,
                        index,
                        content.reasonList.map((r) => r.title)
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      {content.finalConclusion && (
        <section className='mb-10'>
          <h3 className='text-3xl font-extrabold text-emerald-400 mb-6'>
            {content.finalConclusion.title}
          </h3>
          <p className='text-gray-300 leading-relaxed'>
            {content.finalConclusion.text}
          </p>
        </section>
      )}
    </article>
  );
};
