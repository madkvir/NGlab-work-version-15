"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { useMemo } from "react";

const backToHomeTranslations = {
  en: {
    text: "Back to Home"
  },
  de: {
    text: "Zurück zur Startseite"
  },
  es: {
    text: "Volver al Inicio"
  },
  ru: {
    text: "На главную"
  },
  ua: {
    text: "На головну"
  }
};

const BackToHome = () => {
  const { language } = useLanguage();

  const translation = useMemo(() => {
    return backToHomeTranslations[language as keyof typeof backToHomeTranslations] || backToHomeTranslations.en;
  }, [language]);

  return (
    <Link
      href="/"
      className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group"
    >
      <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
      {translation.text}
    </Link>
  );
};

export default BackToHome;
