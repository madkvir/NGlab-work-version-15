"use client";
import React from "react";
import { useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { usePathname } from "../i18n/routing";

const ScrollToTopOnNavigate = () => {
  const location = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="fixed bottom-24 right-4 sm:right-8 p-2 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg transition-all z-40"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6 text-emerald-500" />
    </button>
  );
};

export default ScrollToTopOnNavigate;
