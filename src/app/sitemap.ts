import { MetadataRoute } from 'next'

const LANGUAGES = ['ru', 'en', 'de', 'es', 'uk'] as const
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://neurogenlab.de'

// Основные маршруты
const mainRoutes = [
  {
    path: '',
    changefreq: 'daily',
    priority: 1,
  },
  {
    path: '/about-us',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    path: '/blog',
    changefreq: 'daily',
    priority: 0.9,
  },
  {
    path: '/contacts',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    path: '/cookie-policy',
    changefreq: 'yearly',
    priority: 0.3,
  },
  {
    path: '/disclaimer',
    changefreq: 'yearly',
    priority: 0.3,
  },
  {
    path: '/guide',
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    path: '/impressum',
    changefreq: 'yearly',
    priority: 0.3,
  },
  {
    path: '/privacy',
    changefreq: 'yearly',
    priority: 0.3,
  },
  {
    path: '/responsible-ai-policy',
    changefreq: 'yearly',
    priority: 0.4,
  },
  {
    path: '/terms',
    changefreq: 'yearly',
    priority: 0.3,
  }
] as const

// Маршруты инструментов
const toolsRoutes = [
  '/tools/ai-assistant',
  '/tools/ai-avatar',
  '/tools/ai-chat-bot',
  '/tools/ai-security',
  '/tools/ai-voice-bot',
  '/tools/anti-spam',
  '/tools/best-search',
  '/tools/counseling',
  '/tools/custom-development',
  '/tools/discord',
  '/tools/email',
  '/tools/facebook-messenger',
  '/tools/hubspot',
  '/tools/instagram',
  '/tools/intercom',
  '/tools/jira',
  '/tools/livechat',
  '/tools/microsoft-teams',
  '/tools/salesforce',
  '/tools/slack',
  '/tools/tables',
  '/tools/whatsapp',
  '/tools/zapier',
].map(path => ({
  path,
  changefreq: 'weekly' as const,
  priority: 0.6
}))

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...mainRoutes, ...toolsRoutes]
  
  return routes.flatMap(route => 
    LANGUAGES.map(lang => ({
      url: `${baseUrl}/${lang}${route.path}`,
      lastModified: new Date().toISOString(),
      changeFrequency: route.changefreq,
      priority: route.priority,
      // Добавляем языковые альтернативы
      alternateRefs: LANGUAGES.map(l => ({
        href: `${baseUrl}/${l}${route.path}`,
        hreflang: l
      }))
    }))
  )
} 