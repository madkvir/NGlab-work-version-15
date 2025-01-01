import React from 'react';
import { Activity, Cast, Sparkles, FileCheck } from 'lucide-react';

const advantages = [
  {
    icon: <Activity className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Effortless Content AI",
    description: "Let our AI-powered service take the hard work out of content creation."
  },
  {
    icon: <Cast className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Your Words, Our Tech",
    description: "Discover how AI can transform your ideas into engaging content."
  },
  {
    icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "AI Generation Simple",
    description: "Experience the ease of content creation with our AI service."
  },
  {
    icon: <FileCheck className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Quality AI Content",
    description: "Get professionally written content in no time with our AI service."
  }
];

const AdvantageCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto mt-8 sm:mt-16 px-4 sm:px-0">
      {advantages.map((advantage, index) => (
        <div
          key={index}
          className="group relative bg-gray-900/50 rounded-xl p-4 sm:p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] overflow-hidden cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-3 sm:mb-4 text-gray-400 group-hover:text-emerald-400 transform group-hover:scale-110 transition-all duration-500">
              {advantage.icon}
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 group-hover:text-emerald-300 transition-colors duration-500">
              {advantage.title}
            </h3>

            <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
              {advantage.description}
            </p>
          </div>

          <div className="absolute inset-0 border border-emerald-500/0 group-hover:border-emerald-500/20 rounded-xl transition-all duration-500" />
        </div>
      ))}
    </div>
  );
};

export default AdvantageCards;