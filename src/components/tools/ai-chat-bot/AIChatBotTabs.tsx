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
      <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center relative">
        <div className="hidden sm:block absolute -bottom-[1.5mm] left-0 right-0 h-[1px] bg-gray-800/50"></div>
        <motion.div 
          className="hidden sm:block absolute -bottom-[1.5mm] h-[2px] bg-emerald-400"
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
              px-6 py-4 rounded-xl 
              transition-all duration-200 ease-in-out
              text-left flex-1 
              cursor-pointer
              border-2
              hover:shadow-lg hover:shadow-emerald-500/20
              relative
              ${
                activeTab === tab.id
                  ? 'bg-emerald-500/20 border-emerald-500'
                  : 'bg-gray-900/95 border-gray-800 hover:border-emerald-400 hover:bg-gray-900/80'
              }
            `}
          >
            <div className="flex items-center gap-3">
              <div className={`
                transition-all duration-200
                transform group-hover:scale-110
                ${activeTab === tab.id ? 'text-emerald-300' : 'text-gray-600'}
              `}>
                {tab.icon}
              </div>
              <div>
                <h3 className={`
                  font-semibold mb-1
                  transition-colors duration-200
                  ${activeTab === tab.id ? 'text-white' : 'text-gray-600'}
                `}>
                  {tab.title}
                </h3>
                <p className={`
                  text-sm
                  ${activeTab === tab.id ? 'text-emerald-300' : 'text-gray-700'}
                `}>
                  {tab.subtitle}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial="enter"
          animate="center"
          exit="exit"
          variants={tabVariants}
          transition={{ duration: 0.3 }}
        >
          {React.createElement(tabConfig[activeTab].component)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}; 