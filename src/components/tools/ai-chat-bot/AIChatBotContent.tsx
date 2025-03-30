import React from 'react';
import { Info, Store, Briefcase, GraduationCap, ShoppingCart, DollarSign, Car, ChevronDown, 
  MessageSquare, Clock, PieChart, BarChart3, Globe, Building, BookOpen, BadgeCheck, Zap,
  AlarmClock, Timer, BanknoteIcon, CheckCircle2 } from 'lucide-react';
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
      return <Store className="w-10 h-10 text-emerald-400" />;
    case /services|услуг|послуг|dienstleistungen|servicios/i.test(name):
      return <Briefcase className="w-10 h-10 text-emerald-400" />;
    case /education|образован|освіт|bildung|educación/i.test(name):
      return <GraduationCap className="w-10 h-10 text-emerald-400" />;
    case /e-commerce|электрон|електрон|commerce/i.test(name):
      return <ShoppingCart className="w-10 h-10 text-emerald-400" />;
    case /financ|финанс|фінанс|finanzen/i.test(name):
      return <DollarSign className="w-10 h-10 text-emerald-400" />;
    case /auto|авто|automobil/i.test(name):
      return <Car className="w-10 h-10 text-emerald-400" />;
    default:
      return <div className="text-4xl text-emerald-400">{iconName}</div>;
  }
};

export const AIChatBotContent: React.FC<ContentProps> = ({ content }) => {
  // Функция для отображения карточек преимуществ
  const renderAdvantageCards = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {/* Карточка 1 - Круглосуточная доступность */}
        <motion.div 
          className="bg-gradient-to-br from-gray-800/90 to-gray-900/95 rounded-lg p-5 flex flex-col items-center text-center border border-gray-700/30 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 rounded-full p-4 mb-4 shadow-inner">
            <AlarmClock className="w-8 h-8 text-emerald-400" />
          </div>
          <h6 className="font-bold text-emerald-300 text-lg mb-2">Круглосуточная доступность</h6>
          <p className="text-gray-300 leading-relaxed">Ваш бизнес работает даже когда сотрудники спят. ИИ-чатбот всегда онлайн.</p>
        </motion.div>
        
        {/* Карточка 2 - Мгновенная реакция */}
        <motion.div 
          className="bg-gradient-to-br from-gray-800/90 to-gray-900/95 rounded-lg p-5 flex flex-col items-center text-center border border-gray-700/30 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 rounded-full p-4 mb-4 shadow-inner">
            <Zap className="w-8 h-8 text-emerald-400" />
          </div>
          <h6 className="font-bold text-emerald-300 text-lg mb-2">Мгновенная реакция</h6>
          <p className="text-gray-300 leading-relaxed">ИИ обрабатывает запросы в течение секунд, обеспечивая высокий уровень удовлетворённости.</p>
        </motion.div>
        
        {/* Карточка 3 - Экономия ресурсов */}
        <motion.div 
          className="bg-gradient-to-br from-gray-800/90 to-gray-900/95 rounded-lg p-5 flex flex-col items-center text-center border border-gray-700/30 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 rounded-full p-4 mb-4 shadow-inner">
            <BanknoteIcon className="w-8 h-8 text-emerald-400" />
          </div>
          <h6 className="font-bold text-emerald-300 text-lg mb-2">Экономия ресурсов</h6>
          <p className="text-gray-300 leading-relaxed">Автоматизация позволяет существенно сократить затраты на call-центр и персонал поддержки.</p>
        </motion.div>
        
        {/* Карточка 4 - Стабильное качество */}
        <motion.div 
          className="bg-gradient-to-br from-gray-800/90 to-gray-900/95 rounded-lg p-5 flex flex-col items-center text-center border border-gray-700/30 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 rounded-full p-4 mb-4 shadow-inner">
            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
          </div>
          <h6 className="font-bold text-emerald-300 text-lg mb-2">Стабильное качество</h6>
          <p className="text-gray-300 leading-relaxed">ИИ не устаёт, не ошибается и всегда вежлив. Это гарантирует высокий уровень обслуживания.</p>
        </motion.div>
      </div>
    );
  };

  return (
    <article className="prose prose-invert max-w-none">
      <section className="mb-16">
        <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-6">
          {content.industriesTitle}
        </h3>
        <p className="mb-8 text-gray-300 leading-relaxed">{content.industriesText}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.industries.map((industry, index) => (
            <motion.div 
              key={index} 
              className="bg-gradient-to-br from-gray-800/70 to-gray-900/80 rounded-lg p-8 relative border border-gray-800/30 backdrop-blur-sm hover:shadow-lg hover:shadow-emerald-500/10"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 rounded-full blur-2xl"></div>
              <Info className="absolute top-3 right-3 w-5 h-5 text-emerald-400/70" />
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-5 shadow-lg border border-gray-700/30 mb-6 flex items-center justify-center">
                {getIndustryIcon(industry.icon, industry.name)}
              </div>
              <h4 className="text-xl font-bold text-emerald-300 mb-4">{industry.name}</h4>
              <p className="text-gray-300 leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-8">
          {content.topReasonsTitle}
        </h3>
        <div className="space-y-6">
          {content.reasonList.map((reason, index) => (
            <motion.details 
              key={index} 
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/70 rounded-lg overflow-hidden group cursor-pointer border border-gray-800/50" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <summary className="flex items-center justify-between p-8 relative hover:bg-gray-800/40 transition-colors duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    {index + 1}
                  </div>
                  <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    {reason.title}
                  </h4>
                </div>
                <div className="bg-gray-900/80 rounded-full p-2">
                  <ChevronDown className="w-5 h-5 text-emerald-400 transform group-open:rotate-180 transition-transform duration-300" />
                </div>
                
                {/* Декоративный элемент */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400/0 via-emerald-400 to-emerald-400/0 group-open:opacity-100 opacity-0 transition-opacity duration-300"></div>
              </summary>
              
              {/* Контент аккордеона */}
              <div className="p-8 pt-2 bg-gray-900/40">
                <p className="mb-8 text-gray-300 leading-relaxed text-lg">{reason.content.text}</p>
                
                {/* Отображаем карточки преимуществ для первого элемента (индекс 0) */}
                {index === 0 && reason.title.includes('Как ИИ-чатботы') && renderAdvantageCards()}
                
                <div className="space-y-10">
                  {reason.content.list.map((item, itemIndex) => {
                    // Проверяем, содержит ли элемент маркер 🔹
                    if (item.includes('🔹')) {
                      // Разбиваем текст на заголовок и содержимое
                      const parts = item.split('\n');
                      const title = parts[0];
                      const content = parts.slice(1).join('\n');
                      
                      // Разбиваем содержимое на абзацы и списки
                      const contentParts = content.split('\n\n');
                      
                      // Подбираем соответствующую иконку для заголовка
                      let icon;
                      if (title.includes('автоматизированная поддержка') || title.includes('automated customer support')) {
                        icon = <MessageSquare className="w-5 h-5 text-emerald-400 mr-2 inline-block" />;
                      } else if (title.includes('Преимущества') || title.includes('Benefits')) {
                        icon = <BadgeCheck className="w-5 h-5 text-emerald-400 mr-2 inline-block" />;
                      } else if (title.includes('используется') || title.includes('used')) {
                        icon = <Building className="w-5 h-5 text-emerald-400 mr-2 inline-block" />;
                      } else if (title.includes('важно') || title.includes('important')) {
                        icon = <Zap className="w-5 h-5 text-emerald-400 mr-2 inline-block" />;
                      } else {
                        icon = <BookOpen className="w-5 h-5 text-emerald-400 mr-2 inline-block" />;
                      }
                      
                      return (
                        <div key={itemIndex} className="mb-10">
                          <h5 className="text-xl font-bold text-emerald-400 mb-5 flex items-center">
                            {icon}
                            {title.replace('🔹 ', '')}
                          </h5>
                          <div className="space-y-6">
                            {contentParts.map((part, partIdx) => {
                              // Пропускаем отображение блока "Преимущества ИИ-поддержки 24/7" с нумерованным списком
                              // так как мы уже отобразили его в виде карточек
                              if (title.includes('Преимущества') && part.includes('1. Круглосуточная доступность')) {
                                return null;
                              }
                              
                              // Если текст содержит маркеры списка (для других блоков)
                              else if (part.includes('• ') || part.includes('1. ')) {
                                // Для нумерованных списков
                                if (part.includes('1. ')) {
                                  const listItems = part.split('\n').filter(i => i.trim());
                                  return (
                                    <div key={partIdx} className="mb-6 mt-4">
                                      {listItems.map((li, liIdx) => {
                                        // Обработка нумерованного списка с описанием
                                        if (li.match(/^\d+\.\s/)) {
                                          const [numPart, ...descPart] = li.split('\n');
                                          
                                          return (
                                            <div key={liIdx} className="mb-5">
                                              <div className="font-medium text-white flex items-start mb-2">
                                                <span className="font-semibold">{numPart}</span>
                                              </div>
                                              {descPart.length > 0 && (
                                                <p className="text-gray-300 leading-relaxed pl-6 mt-2">{descPart.join('\n')}</p>
                                              )}
                                            </div>
                                          );
                                        }
                                        return null;
                                      })}
                                    </div>
                                  );
                                } else {
                                  // Для маркированных списков
                                  const listItems = part.split('• ').filter(i => i.trim());
                                  return (
                                    <ul key={partIdx} className="list-disc pl-6 space-y-3 mb-6 mt-4">
                                      {listItems.map((li, liIdx) => (
                                        <li key={liIdx} className="text-gray-300 leading-relaxed pl-2">{li}</li>
                                      ))}
                                    </ul>
                                  );
                                }
                              } else {
                                // Обычный текст
                                return <p key={partIdx} className="text-gray-300 leading-relaxed mb-6">{part}</p>;
                              }
                            })}
                          </div>
                        </div>
                      );
                    } else {
                      // Обычный текст без особого форматирования
                      return (
                        <p key={itemIndex} className="text-gray-300 leading-relaxed mb-6">{item}</p>
                      );
                    }
                  })}
                </div>
              </div>
            </motion.details>
          ))}
        </div>
      </section>

      {content.finalConclusion && (
        <section className="mb-10">
          <h3 className="text-3xl font-extrabold text-emerald-400 mb-6">{content.finalConclusion.title}</h3>
          <p className="text-gray-300 leading-relaxed">{content.finalConclusion.text}</p>
        </section>
      )}
    </article>
  );
}; 