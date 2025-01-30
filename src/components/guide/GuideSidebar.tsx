"use client";
import React from 'react';
import { Lightbulb, ScrollText, Cog, CheckCircle } from 'lucide-react';

const navItems = [
  {
    id: "stage1",
    title: "С ЧЕГО НАЧИНАЕМ",
    stage: "Этап 1",
    icon: Lightbulb,
  },
  {
    id: "stage2",
    title: "ПРАВОВЫЕ АСПЕКТЫ",
    stage: "Этап 2",
    icon: ScrollText,
  },
  {
    id: "stage3",
    title: "КАК ПРОХОДИТ РАБОТА",
    stage: "Этап 3",
    icon: Cog,
  },
  {
    id: "stage4",
    title: "РЕЗУЛЬТАТЫ",
    stage: "Этап 4",
    icon: CheckCircle,
  },
];

interface GuideSidebarProps {
  activeStage: string;
  setActiveStage: (stage: string) => void;
}

const GuideSidebar: React.FC<GuideSidebarProps> = ({ activeStage, setActiveStage }) => {
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