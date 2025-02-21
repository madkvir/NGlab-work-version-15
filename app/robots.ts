import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
      {
        userAgent: '*',
        allow: ['/de/', '/en/', '/ru/', '/uk/', '/es/'],
      },
    ],
    sitemap: 'https://neurogenlab.de/sitemap.xml',
  }
} 