"use client";
import React from 'react';

const navItems = [
  {
    id: "stage1",
    title: "С ЧЕГО НАЧИНАЕМ",
    stage: "Этап 1",
  },
  {
    id: "stage2",
    title: "КАК ПРОХОДИТ РАБОТА",
    stage: "Этап 2",
  },
  {
    id: "stage3",
    title: "КАКИЕ УЛУЧШЕНИЯ",
    stage: "Этап 3",
  },
  {
    id: "stage4",
    title: "РЕЗУЛЬТАТЫ",
    stage: "Этап 4",
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
              <div className="text-sm font-medium mb-1 opacity-80">{item.stage}</div>
              <div className="font-semibold text-sm md:text-base">{item.title}</div>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GuideSidebar; 