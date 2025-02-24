export const seoConfig = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://neurogenlab.de',
  languages: ['ru', 'en', 'de', 'es', 'uk'] as const,
  defaultLanguage: 'en' as const,
  
  // Глобальные SEO настройки
  globalSeo: {
    titleTemplate: '%s | NeuroGen Lab',
    defaultTitle: 'NeuroGen Lab - Scientific Research',
    defaultDescription: 'Advanced neuroscience research and tools',
  },
  
  // Настройки для sitemap
  sitemap: {
    defaultChangefreq: 'weekly' as const,
    defaultPriority: 0.7,
    excludePaths: ['/404', '/500', '/maintenance'],
  },
  
  // Настройки для robots
  robots: {
    defaultCrawlDelay: 2,
    allowedPaths: ['/', '/blog', '/tools'],
    disallowedPaths: ['/api', '/admin', '/private'],
  }
} 