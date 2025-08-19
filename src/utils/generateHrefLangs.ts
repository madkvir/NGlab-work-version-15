import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';
const LANGUAGES = ['en', 'de', 'es', 'ru', 'uk'] as const;
const DEFAULT_LANGUAGE = 'en';

export function generateHrefLangs(path: string): Metadata['alternates'] {
  // Убираем начальный слеш если он есть
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Создаем объект с языковыми версиями
  const languages = LANGUAGES.reduce((acc, lang) => {
    acc[lang] = `${baseUrl}/${lang}/${cleanPath}`;
    return acc;
  }, {} as Record<string, string>);

  return {
    canonical: `${baseUrl}/${DEFAULT_LANGUAGE}/${cleanPath}`,
    languages,
  };
}

export function generateHrefLangsForPage(path: string, currentLocale: string): Metadata['alternates'] {
  // Убираем начальный слеш если он есть
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Создаем объект с языковыми версиями, исключая текущую локаль
  const languages = LANGUAGES.reduce((acc, lang) => {
    // Пропускаем текущую локаль, чтобы избежать дублирования
    if (lang !== currentLocale) {
      acc[lang] = `${baseUrl}/${lang}/${cleanPath}`;
    }
    return acc;
  }, {} as Record<string, string>);

  return {
    canonical: `${baseUrl}/${DEFAULT_LANGUAGE}/${cleanPath}`,
    languages,
  };
}

export function generateOpenGraphAlternateLocales() {
  return LANGUAGES.filter(lang => lang !== DEFAULT_LANGUAGE);
}

export const SUPPORTED_LANGUAGES = LANGUAGES; 