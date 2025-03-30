import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessagesSquare, HeadsetIcon, TrendingUp } from 'lucide-react';
import { ConsultationTab } from './tabs/ConsultationTab';
import { SupportTab } from './tabs/SupportTab';
import { SalesTab } from './tabs/SalesTab';
import { useAIChatBotTranslations } from '../../../hooks/useAIChatBotTranslations';

const tabVariants = {
  enter: {
    opacity: 0,
    y: 20,
  },
  center: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

export const AIChatBotTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { tabs } = useAIChatBotTranslations();

  const tabConfig = [
    {
      id: 0,
      title: tabs.consultation.title,
      subtitle: tabs.consultation.subtitle,
      component: ConsultationTab,
      icon: <MessagesSquare className="w-5 h-5" />,
    },
    {
      id: 1,
      title: tabs.support.title,
      subtitle: tabs.support.subtitle,
      component: SupportTab,
      icon: <HeadsetIcon className="w-5 h-5" />,
    },
    {
      id: 2,
      title: tabs.sales.title,
      subtitle: tabs.sales.subtitle,
      component: SalesTab,
      icon: <TrendingUp className="w-5 h-5" />,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Tabs Navigation */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center relative">
        <div className="hidden sm:block absolute -bottom-[1.5mm] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>
        <motion.div 
          className="hidden sm:block absolute -bottom-[1.5mm] h-[2px] bg-gradient-to-r from-emerald-400/80 via-emerald-400 to-emerald-400/80"
          animate={{
            left: `${(100 / tabConfig.length) * activeTab + (100 / tabConfig.length) * (1/3)}%`,
            width: `${(100 / tabConfig.length) / 3}%`
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        />
        {tabConfig.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-6 py-5 rounded-xl 
              transition-all duration-300 ease-in-out
              text-left flex-1 
              cursor-pointer
              border-2
              hover:shadow-lg hover:shadow-emerald-500/20
              relative
              backdrop-blur-sm
              ${
                activeTab === tab.id
                  ? 'bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border-emerald-500/70'
                  : 'bg-gray-900/95 border-gray-800/50 hover:border-emerald-400/50 hover:bg-gray-900/80'
              }
            `}
          >
            <div className="flex items-center gap-4">
              <div className={`
                transition-all duration-300
                transform group-hover:scale-110
                bg-gray-800/80 rounded-full p-2
                ${activeTab === tab.id ? 'text-emerald-300' : 'text-gray-500'}
              `}>
                {tab.icon}
              </div>
              <div>
                <h3 className={`
                  font-semibold mb-1 text-lg
                  transition-colors duration-300
                  ${activeTab === tab.id ? 'text-emerald-300' : 'text-gray-400'}
                `}>
                  {tab.title}
                </h3>
                <p className={`
                  text-sm
                  ${activeTab === tab.id ? 'text-emerald-200/80' : 'text-gray-500'}
                `}>
                  {tab.subtitle}
                </p>
              </div>
            </div>
            
            {/* Индикатор активного таба */}
            {activeTab === tab.id && (
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content с улучшенной анимацией */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial="enter"
          animate="center"
          exit="exit"
          variants={{
            enter: { opacity: 0, y: 20, filter: "blur(5px)" },
            center: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: { opacity: 0, y: -20, filter: "blur(5px)" }
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {React.createElement(tabConfig[activeTab].component)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}; 