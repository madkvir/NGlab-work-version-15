"use client";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Показываем кнопку после прокрутки на 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Вычисляем прогресс прокрутки
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-28 right-8 z-50">
      <div className="relative h-10 w-10">
        {/* Круг прогресса */}
        <svg className="absolute -rotate-90 w-10 h-10">
          <circle
            cx="20"
            cy="20"
            r="15"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="text-emerald-500/20"
          />
          <circle
            cx="20"
            cy="20"
            r="15"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            className="text-emerald-500"
            strokeDasharray={`${2 * Math.PI * 15}`}
            strokeDashoffset={`${2 * Math.PI * 15 * (1 - scrollProgress / 100)}`}
            style={{
              transition: "stroke-dashoffset 0.2s ease"
            }}
          />
        </svg>
        {/* Кнопка */}
        <button
          onClick={scrollToTop}
          className="absolute inset-0 flex items-center justify-center bg-dark-800 rounded-full hover:bg-emerald-500/10 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 text-emerald-400" />
        </button>
      </div>
    </div>
  );
};

export default ScrollToTop;
