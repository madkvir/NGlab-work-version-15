import { MetadataRoute } from 'next'

// Конфигурация для разных ботов
type BotConfig = {
  crawlDelay: number;
  customRules: string[];
}

const BOTS_CONFIG: Record<string, BotConfig> = {
  Googlebot: {
    crawlDelay: 2,
    customRules: []
  },
  Yandexbot: {
    crawlDelay: 2,
    customRules: ['/yandex-specific-path']
  },
  Bingbot: {
    crawlDelay: 3,
    customRules: []
  }
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://neurogenlab.de'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Запрещаем индексацию административных и служебных разделов
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/*?*', // Запрещаем параметры URL
          '/*/preview', // Запрещаем preview страницы
          '/*.json$', // Запрещаем JSON файлы
          '/tmp/',
          '/*.php$',
          '/wp-*',  // Блокируем попытки поиска WordPress файлов
          '/feed/',
          '/cgi-bin/',
          '*?preview=true',
          '*&preview=true',
          '/search/',  // Блокируем индексацию результатов поиска
          '*/print/',  // Блокируем версии для печати
          '*?filter=*', // Блокируем URL с фильтрами
          '*?sort=*',  // Блокируем URL с сортировкой
          '/cdn-cgi/', // Блокируем технические пути Cloudflare
          // Добавляем новые правила
          '/*?utm_*',           // UTM параметры
          '/*?fbclid=*',        // Facebook параметры
          '/*?gclid=*',         // Google Ads параметры
          '/assets/downloads/', // Приватные файлы
          '/*.log$',           // Лог файлы
          '/*.txt$',           // Текстовые файлы (кроме robots.txt)
          '/error/',           // Страницы ошибок
          '/debug/',           // Отладочные страницы
          '/test/',            // Тестовые страницы
          '/dev/',             // Страницы разработки
        ]
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/sitemap.xml',
          '/*.js',
          '/*.css',
          '/*.png',
          '/*.jpg',
          '/*.gif',
          '/*.svg',
          '/*.ico'
        ],
      },
      {
        userAgent: 'Yandexbot',
        allow: [
          '/',
          '/sitemap.xml'
        ],
        disallow: [
          '/yandex-specific-path',
          '/admin/*',
          '/*?*'
        ],
        crawlDelay: 2
      },
      {
        userAgent: 'Bingbot',
        allow: [
          '/',
          '/sitemap.xml'
        ],
        crawlDelay: 3
      },
      // DuckDuckBot
      {
        userAgent: 'DuckDuckBot',
        allow: [
          '/',
          '/sitemap.xml',
          '/*.js',
          '/*.css',
          '/*.png',
          '/*.jpg',
          '/*.gif'
        ],
        crawlDelay: 3
      },
      // Applebot
      {
        userAgent: 'Applebot',
        allow: [
          '/',
          '/sitemap.xml',
          '/*.js',
          '/*.css',
          '/images/*'
        ],
        crawlDelay: 2
      },
      // Baidu Spider
      {
        userAgent: 'Baiduspider',
        allow: [
          '/',
          '/sitemap.xml'
        ],
        crawlDelay: 4
      },
      // Facebook External Hit
      {
        userAgent: 'facebookexternalhit',
        allow: [
          '/',
          '/*.jpg',
          '/*.gif',
          '/*.png',
          '/*.svg'
        ],
        disallow: [
          '/private/*',
          '/admin/*',
          '/api/*'
        ],
        crawlDelay: 2
      },
      // Twitter Bot
      {
        userAgent: 'Twitterbot',
        allow: [
          '/',
          '/*.jpg',
          '/*.gif',
          '/*.png',
          '/*.svg'
        ],
        disallow: [
          '/private/*',
          '/admin/*',
          '/api/*'
        ],
        crawlDelay: 2
      },
      // LinkedIn Bot
      {
        userAgent: 'LinkedInBot',
        allow: [
          '/',
          '/*.jpg',
          '/*.gif',
          '/*.png',
          '/*.svg'
        ],
        disallow: [
          '/private/*',
          '/admin/*',
          '/api/*'
        ],
        crawlDelay: 2
      }
    ],
    // Указываем все sitemap файлы
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      // Убираем несуществующие sitemap файлы, пока они не будут созданы
      // `${baseUrl}/sitemaps/blog.xml`,
      // `${baseUrl}/sitemaps/tools.xml`,
      // `${baseUrl}/sitemaps/static.xml`,
    ],
    // Добавляем host директиву (полезно для Яндекса)
    host: baseUrl
  }
} 