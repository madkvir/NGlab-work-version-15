import React, { useState, useEffect } from 'react';
import { ArrowUp, ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      // Calculate scroll progress percentage
      const scrolled = document.documentElement.scrollTop;
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`fixed right-6 bottom-24 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative group">
        {/* Outer glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        
        {/* Main button container */}
        <div className="relative">
          <button
            onClick={scrollToTop}
            className="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-gray-900/90 text-emerald-400/70 transition-all duration-300 hover:text-emerald-400 group"
            aria-label="Scroll to top"
          >
            {/* Progress circle */}
            <svg className="absolute w-12 h-12 rotate-[-90deg]">
              <circle
                className="text-gray-700"
                strokeWidth="1"
                stroke="currentColor"
                fill="transparent"
                r="20"
                cx="24"
                cy="24"
              />
              <circle
                className="text-emerald-500 transition-all duration-300"
                strokeWidth="2"
                strokeDasharray={125.6}
                strokeDashoffset={125.6 - (125.6 * scrollProgress) / 100}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="20"
                cx="24"
                cy="24"
              />
            </svg>
            
            {/* Icons */}
            <div className="relative flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-1">
              <ChevronUp className="w-4 h-4 absolute -top-1 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1" />
              <ArrowUp className="w-5 h-5" />
            </div>
          </button>
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 pointer-events-none">
          <div className="bg-gray-900/90 text-white text-sm px-2 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            Back to top
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollToTop;