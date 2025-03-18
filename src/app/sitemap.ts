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
  },
  {
    path: '/tools/ai-assistant',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/ai-avatar',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/ai-chat-bot',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/ai-security',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/ai-voice-bot',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/anti-spam',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/best-search',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/counseling',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/custom-development',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/discord',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/email',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/facebook-messenger',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/hubspot',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/instagram',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/intercom',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/jira',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/keepincrm',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/livechat',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/microsoft-teams',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/salesforce',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/slack',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/tables',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/whatsapp',
    changefreq: 'weekly',
    priority: 0.6,
  },
  {
    path: '/tools/zapier',
    changefreq: 'weekly',
    priority: 0.6,
  }
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return mainRoutes.flatMap(route => 
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