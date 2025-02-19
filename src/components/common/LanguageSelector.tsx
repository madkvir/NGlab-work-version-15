"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

type Language = "en" | "de" | "es" | "ru" | "uk";

const languages: Record<Language, { name: string; flag: React.ReactNode }> = {
  en: {
    name: "English",
    flag: (
      <svg className="w-6 h-4" viewBox="0 0 640 480">
        <path d="M0 0h640v480H0z" fill="#fff" />
        <path
          d="M0 0h640v55.652H0M0 111.304h640v55.652H0M0 222.609h640v55.652H0M0 333.913h640v55.652H0M0 445.217h640V480H0"
          fill="#bf0a30"
        />
        <path d="M0 0h364.8v258.782H0z" fill="#002868" />
        <g fill="#fff">
          <path d="m30.71 11 3.85 11.78h12.24l-9.47 7.43 3.85 11.78-9.47-7.43-9.47 7.43 3.85-11.78-9.47-7.43h12.24zM90.09 11l3.85 11.78h12.24l-9.47 7.43 3.85 11.78-9.47-7.43-9.47 7.43 3.85-11.78-9.47-7.43h12.24zM149.47 11l3.85 11.78h12.24l-9.47 7.43 3.85 11.78-9.47-7.43-9.47 7.43 3.85-11.78-9.47-7.43h12.24zM208.85 11l3.85 11.78h12.24l-9.47 7.43 3.85 11.78-9.47-7.43-9.47 7.43 3.85-11.78-9.47-7.43h12.24zM268.23 11l3.85 11.78h12.24l-9.47 7.43 3.85 11.78-9.47-7.43-9.47 7.43 3.85-11.78-9.47-7.43h12.24zM327.61 11l3.85 11.78h12.24l-9.47 7.43 3.85 11.78-9.47-7.43-9.47 7.43 3.85-11.78-9.47-7.43h12.24z" />
        </g>
      </svg>
    ),
  },
  de: {
    name: "Deutsch",
    flag: (
      <svg className="w-6 h-4" viewBox="0 0 640 480">
        <path fill="#ffce00" d="M0 320h640v160H0z" />
        <path d="M0 0h640v160H0z" />
        <path fill="#d00" d="M0 160h640v160H0z" />
      </svg>
    ),
  },
  es: {
    name: "Español",
    flag: (
      <svg className="w-6 h-4" viewBox="0 0 640 480">
        <path fill="#c60b1e" d="M0 0h640v480H0z" />
        <path fill="#ffc400" d="M0 120h640v240H0z" />
      </svg>
    ),
  },
  ru: {
    name: "Русский",
    flag: (
      <svg className="w-6 h-4" viewBox="0 0 640 480">
        <path fill="#fff" d="M0 0h640v480H0z" />
        <path fill="#0039a6" d="M0 160h640v320H0z" />
        <path fill="#d52b1e" d="M0 320h640v160H0z" />
      </svg>
    ),
  },
  uk: {
    name: "Українська",
    flag: (
      <svg className="w-6 h-4" viewBox="0 0 640 480">
        <path fill="#005bbb" d="M0 0h640v240H0z" />
        <path fill="#ffd500" d="M0 240h640v240H0z" />
      </svg>
    ),
  },
};

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { locale } = useParams();
  const language = locale?.toString() ?? "en";
  const router = useRouter();
  // const { language, setLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (newLang: string) => {
    if (newLang === "ua") {
      Cookies.set("NEXT_LOCALE", "uk", { path: "/" });
      const newPath = `/uk${pathname.substring(3)}`; // Убираем старую локаль из пути
      router.push(newPath);
      // setIsOpen(false);
      return;
    }
    Cookies.set("NEXT_LOCALE", newLang, { path: "/" });
    const newPath = `/${newLang}${pathname.substring(3)}`; // Убираем старую локаль из пути
    router.push(newPath);
    // setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2 py-1.5 text-gray-300 hover:text-white transition-colors"
        aria-label="Select language"
      >
        <span className="text-sm">{languages[language].name}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-40 rounded-lg bg-[#0B0F19] border border-gray-800 shadow-xl z-50">
          <div className="py-0.5">
            {(
              Object.entries(languages) as [
                keyof typeof languages,
                { name: string; flag: React.ReactNode }
              ][]
            ).map(([code, { name, flag }]) => (
              <button
                key={code}
                onClick={() => handleLanguageChange(code)}
                className={`w-full flex items-center justify-between px-3 py-1.5 text-sm ${
                  language === code
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "text-gray-300 hover:bg-gray-800/50"
                }`}
              >
                <span>{name}</span>
                <span className="flex-shrink-0 ml-2">{flag}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
