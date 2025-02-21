import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Используем условный baseUrl в зависимости от окружения
  const baseUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000'
    : 'https://neurogenlab.de'
  
  // Поддерживаемые языки
  const languages = ['de', 'en', 'ru', 'uk', 'es']

  // Основные разделы
  const mainRoutes = [
    '',
    '/guide',
    '/faq',
    '/blog',
    '/about-us',
    '/pricing',
    '/contacts',
  ]

  // AI Tools разделы
  const aiToolsRoutes = [
    '/ai-chat-bot',
    '/ai-voice-bot',
    '/ai-avatar',
    '/ai-assistant',
    '/custom-development',
    '/counseling',
  ]

  // Messaging разделы
  const messagingRoutes = [
    '/facebook-messenger',
    '/instagram',
    '/whatsapp',
    '/discord',
  ]

  // Integration разделы
  const integrationRoutes = [
    '/jira',
    '/zapier',
    '/tables',
  ]

  // Security & Search разделы
  const securityRoutes = [
    '/anti-spam',
    '/best-search',
  ]

  // Communication разделы
  const communicationRoutes = [
    '/email',
    '/slack',
    '/livechat',
    '/intercom',
  ]

  // Объединяем все маршруты
  const allPaths = [
    ...mainRoutes,
    ...aiToolsRoutes,
    ...messagingRoutes,
    ...integrationRoutes,
    ...securityRoutes,
    ...communicationRoutes,
  ]

  // Создаем массив всех маршрутов с учетом языков
  const allRoutes: MetadataRoute.Sitemap = allPaths.flatMap(route => {
    return languages.map(lang => {
      // Для главной страницы используем только код языка
      const path = route === '' ? lang : `/${lang}${route}`
      
      return {
        url: `${baseUrl}${path}`,
        lastModified: new Date().toISOString(),
        // Используем только 'daily' или 'weekly'
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      }
    })
  })

  // Добавляем корневой URL
  allRoutes.unshift({
    url: baseUrl,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: 1.0,
  })

  return allRoutes
} 