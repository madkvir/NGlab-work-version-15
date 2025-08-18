'use client';

import React, { useEffect, useState } from 'react';

interface HreflangTagsProps {
  path: string;
  currentLocale: string;
}

const LANGUAGES = ['en', 'de', 'es', 'ru', 'uk'] as const;
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

export default function HreflangTags({ path, currentLocale }: HreflangTagsProps) {
  const [currentPath, setCurrentPath] = useState(path);

  useEffect(() => {
    // Получаем текущий путь из URL
    if (typeof window !== 'undefined') {
      const pathSegments = window.location.pathname.split('/').filter(Boolean);
      // Убираем локаль из пути
      if (LANGUAGES.includes(pathSegments[0] as any)) {
        const pathWithoutLocale = pathSegments.slice(1).join('/');
        setCurrentPath(pathWithoutLocale);
      }
    }
  }, []);

  // Убираем начальный слеш если он есть
  const cleanPath = currentPath.startsWith('/') ? currentPath.slice(1) : currentPath;
  
  return (
    <>
      {/* X-default для английской версии */}
      <link 
        rel="alternate" 
        hrefLang="x-default" 
        href={`${baseUrl}/en/${cleanPath}`} 
      />
      
      {/* Hreflang теги для всех языков */}
      {LANGUAGES.map(lang => (
        <link 
          key={lang}
          rel="alternate" 
          hrefLang={lang} 
          href={`${baseUrl}/${lang}/${cleanPath}`} 
        />
      ))}
    </>
  );
}
