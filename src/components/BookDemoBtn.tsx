"use client";

import { translations } from "../locales/translations";
import { useLanguage } from "../context/LanguageContext";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const BookingModal = dynamic(() => import("./BookingModal"));

const BookDemoBtn = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[language];
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`
                    bg-gradient-to-r from-emerald-400 to-green-300 
                    hover:from-emerald-500 hover:to-green-400 
                    text-white 
                    min-w-[140px] 
                    h-10
                    px-4 lg:px-6 
                    rounded-lg 
                    transition-all 
                    duration-300 
                    hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] 
                    text-center
                    flex
                    items-center
                    justify-center
                    whitespace-nowrap
                    text-sm
                    font-medium
                  `}
      >
        <span className="inline-block transform hover:scale-105 transition-transform">
          {t.BookADemo}
        </span>
      </button>
      <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default BookDemoBtn;