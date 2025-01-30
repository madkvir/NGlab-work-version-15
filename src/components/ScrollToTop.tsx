"use client";
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed right-4 bottom-4 p-2 rounded-full bg-emerald-500/20 
                     hover:bg-emerald-500/30 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6 text-emerald-400" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
