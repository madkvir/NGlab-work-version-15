"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { redirect } from "../i18n/routing";

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};

const defaultLanguage = "en";

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => null,
});

export function LanguageProvider({
  initialLanguage = defaultLanguage,
  children,
}: {
  children: React.ReactNode;
  initialLanguage?: string;
}) {
  const [language, setLanguage] = useState(initialLanguage);

  const handleSetLanguage = (lang: string) => {
    setLanguage(lang);
    Cookies.set("NEXT_LOCALE", lang, { path: "/" });
  };

  useEffect(() => {
    const cookieLanguage = Cookies.get("NEXT_LOCALE");
    if (cookieLanguage && cookieLanguage !== language) {
      setLanguage(cookieLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
