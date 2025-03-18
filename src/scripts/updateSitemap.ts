import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Получаем __dirname для ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APP_DIR = path.resolve(process.cwd(), 'src/app/[locale]');
const SITEMAP_FILE = path.resolve(process.cwd(), 'src/app/sitemap.ts');

// Поддерживаемые языки
const LANGUAGES = ['ru', 'en', 'de', 'es', 'uk'] as const;

// Настройки для различных типов страниц
const pageSettings = {
  // Основные страницы
  main: {
    changefreq: 'daily',
    priority: 1.0,
  },
  about: {
    changefreq: 'monthly',
    priority: 0.8,
  },
  blog: {
    changefreq: 'daily',
    priority: 0.9,
  },
  contacts: {
    changefreq: 'monthly',
    priority: 0.8,
  },
  legal: { // Для юридических страниц
    changefreq: 'yearly',
    priority: 0.3,
  },
  guide: {
    changefreq: 'monthly',
    priority: 0.7,
  },
  responsible: {
    changefreq: 'yearly',
    priority: 0.4,
  },
  // Страницы инструментов
  tools: {
    changefreq: 'weekly',
    priority: 0.6,
  },
  // Значения по умолчанию
  default: {
    changefreq: 'monthly',
    priority: 0.5,
  },
};

// Категории страниц
const pageCategories = {
  main: [''],
  about: ['about-us'],
  blog: ['blog'],
  contacts: ['contacts'],
  legal: ['cookie-policy', 'disclaimer', 'impressum', 'privacy', 'terms'],
  guide: ['guide'],
  responsible: ['responsible-ai-policy'],
  tools: []  // Будет заполнено автоматически
};

/**
 * Получает список всех директорий инструментов
 */
function getToolsPages(): string[] {
  const toolsDir = path.join(APP_DIR, 'tools');
  if (!fs.existsSync(toolsDir)) return [];
  
  return fs.readdirSync(toolsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => `/tools/${dirent.name}`);
}

/**
 * Получает список всех страниц
 */
function getAllPages(): string[] {
  // Получаем директории первого уровня
  const mainPages = fs.readdirSync(APP_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name !== 'tools' && dirent.name !== '[...rest]' && dirent.name !== 'admin')
    .map(dirent => `/${dirent.name}`);
  
  // Добавляем главную страницу
  mainPages.unshift('');
  
  // Получаем страницы инструментов
  const toolsPages = getToolsPages();
  
  // Заполняем категорию инструментов
  pageCategories.tools = toolsPages.map(p => p.substring(1));
  
  return [...mainPages, ...toolsPages];
}

/**
 * Определяет настройки для страницы
 */
function getPageSettings(page: string): { changefreq: string, priority: number } {
  // Удаляем начальный слеш для сравнения
  const normalizedPage = page.startsWith('/') ? page.substring(1) : page;
  
  // Проверяем, к какой категории относится страница
  for (const [category, pages] of Object.entries(pageCategories)) {
    if (pages.includes(normalizedPage)) {
      return pageSettings[category as keyof typeof pageSettings];
    }
  }
  
  // Для страниц инструментов
  if (normalizedPage.startsWith('tools/')) {
    return pageSettings.tools;
  }
  
  // По умолчанию
  return pageSettings.default;
}

/**
 * Генерирует код для sitemap.ts
 */
function generateSitemapCode(): string {
  const allPages = getAllPages();
  
  // Формируем основные маршруты с настройками
  const mainRoutesItems = allPages.map(page => {
    const { changefreq, priority } = getPageSettings(page);
    return `  {
    path: '${page}',
    changefreq: '${changefreq}',
    priority: ${priority},
  }`;
  });
  
  return `import { MetadataRoute } from 'next'

const LANGUAGES = ['ru', 'en', 'de', 'es', 'uk'] as const
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://neurogenlab.de'

// Основные маршруты
const mainRoutes = [
${mainRoutesItems.join(',\n')}
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return mainRoutes.flatMap(route => 
    LANGUAGES.map(lang => ({
      url: \`\${baseUrl}/\${lang}\${route.path}\`,
      lastModified: new Date().toISOString(),
      changeFrequency: route.changefreq,
      priority: route.priority,
      // Добавляем языковые альтернативы
      alternateRefs: LANGUAGES.map(l => ({
        href: \`\${baseUrl}/\${l}\${route.path}\`,
        hreflang: l
      }))
    }))
  )
}`;
}

/**
 * Обновляет файл sitemap.ts
 */
function updateSitemap() {
  const sitemapCode = generateSitemapCode();
  fs.writeFileSync(SITEMAP_FILE, sitemapCode, 'utf-8');
  console.log('Sitemap успешно обновлен!');
}

// Запускаем обновление
updateSitemap(); 