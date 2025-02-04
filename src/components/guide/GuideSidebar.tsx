"use client";
import React from 'react';
import { Lightbulb, ScrollText, Cog, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { guideTranslations } from '../../locales/guideTranslations';

const getNavItems = (translations: any) => [
  {
    id: "stage1",
    title: translations.sidebar.stage1.title,
    stage: translations.sidebar.stage1.stage,
    icon: Lightbulb,
  },
  {
    id: "stage2",
    title: translations.sidebar.stage2.title,
    stage: translations.sidebar.stage2.stage,
    icon: ScrollText,
  },
  {
    id: "stage3",
    title: translations.sidebar.stage3.title,
    stage: translations.sidebar.stage3.stage,
    icon: Cog,
  },
  {
    id: "stage4",
    title: translations.sidebar.stage4.title,
    stage: translations.sidebar.stage4.stage,
    icon: CheckCircle,
  },
];

interface GuideSidebarProps {
  activeStage: string;
  setActiveStage: (stage: string) => void;
}

const GuideSidebar: React.FC<GuideSidebarProps> = ({ activeStage, setActiveStage }) => {
  const { language } = useLanguage();
  const t = guideTranslations[language];
  const navItems = getNavItems(t);

  return (
    <nav className="w-full md:w-64">
      <ul className="space-y-3 md:space-y-4">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActiveStage(item.id)}
              className={`w-full p-4 text-left transition-all rounded-lg
                ${activeStage === item.id 
                  ? 'bg-emerald-500/20 text-emerald-400' 
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-emerald-400'
                }`}
            >
              <div className="flex items-center gap-3 mb-1">
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-medium opacity-80">{item.stage}</span>
              </div>
              <div className="font-semibold text-sm md:text-base">{item.title}</div>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GuideSidebar; 