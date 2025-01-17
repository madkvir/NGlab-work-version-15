"use client";

import BookDemoBtn from "./BookDemoBtn";
import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import SolutionsMenu from "./SolutionsMenu";
import { useClickOutside } from "./hooks/useClickOutside";
import { useScrollLock } from "./hooks/useScrollLock";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { translations } from "../locales/translations";
import { useLanguage } from "../context/LanguageContext";

const buttonTranslations = {
  en: {
    signUp: "Sign Up Free",
    signIn: "Sign In",
    length: "short",
  },
  de: {
    signUp: "Kostenlos Registrieren",
    signIn: "Anmelden",
    length: "long",
  },
  es: {
    signUp: "Registrarse Gratis",
    signIn: "Iniciar Sesión",
    length: "medium",
  },
  ru: {
    signUp: "Регистрация",
    signIn: "Войти",
    length: "medium",
  },
  ua: {
    signUp: "Реєстрація",
    signIn: "Увійти",
    length: "medium",
  },
};

const dealershipButtonTranslations = {
  en: {
    text: "For Dealership",
    tag: "Coming",
    length: "short",
  },
  de: {
    text: "Für Autohäuser",
    tag: "Demnächst",
    length: "short",
  },
  es: {
    text: "Concesionarios",
    tag: "Próximo",
    length: "medium",
  },
  ru: {
    text: "Для дилеров",
    tag: "Скоро",
    length: "short",
  },
  ua: {
    text: "Для дилерів",
    tag: "Скоро",
    length: "short",
  },
};

const languageOptions = {
  en: {
    label: "English",
    flag: "/flags/us.svg",
  },
  de: {
    label: "Deutsch",
    flag: "/flags/de.svg",
  },
  es: {
    label: "Español",
    flag: "/flags/es.svg",
  },
  ru: {
    label: "Русский",
    flag: "/flags/ru.svg",
  },
  ua: {
    label: "Українська",
    flag: "/flags/ua.svg",
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const location = usePathname();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const langButtonRef = useRef<HTMLButtonElement>(null);

  useClickOutside<HTMLDivElement | HTMLButtonElement>(
    [menuRef, buttonRef],
    () => setIsMenuOpen(false),
    isMenuOpen
  );
  useScrollLock(isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setOpacity(1);
        setIsScrolled(false);
      } else {
        const newOpacity = Math.max(0.95, Math.min(1, 1 - (currentScrollY - 50) / 150));
        setOpacity(newOpacity);
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (location !== "/") {
      const url = `/#${encodeURIComponent(id)}`;
      router.push(url);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isLangMenuOpen) return;

    const itemsCount = Object.keys(languageOptions).length;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % itemsCount);
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + itemsCount) % itemsCount);
        break;
      case "Enter":
        e.preventDefault();
        if (focusedIndex !== -1) {
          const languages = Object.keys(languageOptions);
          setLanguage(languages[focusedIndex] as keyof typeof languageOptions);
          setIsLangMenuOpen(false);
          setFocusedIndex(-1);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsLangMenuOpen(false);
        setFocusedIndex(-1);
        break;
    }
  };

  useEffect(() => {
    if (focusedIndex !== -1) {
      const buttons = langMenuRef.current?.querySelectorAll("button");
      buttons?.[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 border-b border-gray-900/50 ${
          isScrolled ? "bg-[#0B0F19]/95 backdrop-blur-sm py-3" : "bg-transparent py-4"
        }`}
        style={{ opacity }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo />

            <div className="hidden md:flex items-center justify-center flex-1 px-16 space-x-8">
              <div className="relative">
                <button
                  className={`
                    text-sm 
                    px-4 
                    py-2 
                    bg-gray-800/80 
                    hover:bg-gray-800/60 
                    text-gray-400 
                    rounded-lg 
                    transition-all 
                    duration-300 
                    transform 
                    hover:scale-105 
                    cursor-not-allowed
                    flex
                    items-center
                    gap-2
                    min-w-[140px]
                    justify-center
                  `}
                  disabled
                >
                  {dealershipButtonTranslations[language].text}
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-[11px] px-2 py-0.5 rounded-full transform rotate-12">
                    {dealershipButtonTranslations[language].tag}
                  </span>
                </button>
              </div>

              <div className="relative group mx-6">
                <div className="absolute -top-[6px] left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-emerald-500/30 before:animate-ping"></div>
                <button className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-1 group">
                  {t.solutions}
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <SolutionsMenu language={language as "en" | "de" | "es" | "ru" | "ua"} />
              </div>

              <div className="relative group mx-6">
                <button className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-1 group">
                  {t.pages}
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>

                <div className="absolute top-full left-0 mt-2 w-48 bg-[#0B0F19]/95 backdrop-blur-sm rounded-lg border border-gray-900/50 py-2 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link
                    href="/guide"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105"
                  >
                    {t.links.guide}
                  </Link>
                  <a
                    href="#faq"
                    onClick={(e) => handleNavClick(e, "faq")}
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105"
                  >
                    {t.links.faq}
                  </a>
                  <Link
                    href="/blog"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105"
                  >
                    {t.links.blog}
                  </Link>
                  <Link
                    href="/about-us"
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105"
                  >
                    {t.links.aboutUs}
                  </Link>
                </div>
              </div>

              <Link
                href="#pricing"
                onClick={(e) => handleNavClick(e, "pricing")}
                className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105 mx-6"
              >
                {t.links.pricing}
              </Link>

              <Link
                href="/contacts"
                className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105 mx-6"
              >
                {t.links.contacts}
              </Link>
            </div>

            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-2 mr-4">
                {/* <Link
                  href='/signin'
                  className={`
                    px-4 
                    h-10 
                    rounded-lg 
                    transition-all 
                    duration-300 
                    flex 
                    items-center 
                    justify-center 
                    whitespace-nowrap
                    text-sm
                    font-medium
                    border
                    border-gray-700
                    hover:border-emerald-500/50
                    text-gray-300
                    hover:text-white
                    hover:bg-emerald-500/10
                    hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]
                  `}
                >
                  <span className='inline-block transform hover:scale-105 transition-transform'>
                    {t.signIn}
                  </span>
                </Link> */}

                <BookDemoBtn />
              </div>

              <div className="relative group">
                <button
                  ref={langButtonRef}
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 px-3 h-10 rounded-lg border border-gray-700/50 
                             hover:border-emerald-500/50 hover:bg-emerald-500/5 
                             transition-all duration-300 group"
                  aria-expanded={isLangMenuOpen}
                  aria-haspopup="true"
                >
                  <img
                    src={languageOptions[language].flag}
                    alt=""
                    className="w-5 h-4 object-cover rounded-sm"
                  />
                  <span className="text-gray-400 text-sm font-medium">
                    {language.toUpperCase()}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 
                               ${isLangMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  ref={langMenuRef}
                  onKeyDown={handleKeyDown}
                  role="menu"
                  className={`
                    absolute top-full right-0 mt-2 py-2 
                    bg-[#0B0F19]/95 backdrop-blur-sm 
                    border border-gray-700/50 rounded-lg 
                    shadow-lg shadow-black/20
                    transition-all duration-300 transform origin-top-right
                    min-w-[180px] 
                    w-max
                    ${
                      isLangMenuOpen
                        ? "opacity-100 visible scale-100"
                        : "opacity-0 invisible scale-95"
                    }
                  `}
                >
                  {Object.entries(languageOptions).map(([key, value], index) => (
                    <button
                      key={key}
                      role="menuitem"
                      onClick={() => {
                        setLanguage(key as keyof typeof languageOptions);
                        setIsLangMenuOpen(false);
                      }}
                      className={`
                        w-full flex items-center gap-3 px-4 py-2
                        hover:bg-emerald-500/10 transition-colors duration-200
                        focus:outline-none focus:bg-emerald-500/10
                        ${language === key ? "text-emerald-500" : "text-gray-400"}
                        ${focusedIndex === index ? "bg-emerald-500/10" : ""}
                      `}
                    >
                      <img
                        src={value.flag}
                        alt=""
                        className="w-5 h-4 object-cover rounded-sm flex-shrink-0"
                      />
                      <span className="text-sm whitespace-nowrap">{value.label}</span>
                      {language === key && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              ref={buttonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors flex items-center gap-2"
            >
              <span className="text-sm">Menu</span>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden fixed inset-x-0 top-[72px] bg-[#0B0F19]/95 backdrop-blur-md z-40 overflow-y-auto"
          style={{ height: "calc(100vh - 72px)" }}
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            <SolutionsMenu isMobile language="en" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
