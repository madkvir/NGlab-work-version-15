import { Metadata } from 'next';
import { generateHrefLangs, generateOpenGraphAlternateLocales } from './generateHrefLangs';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

export function generatePageMetadata(
  path: string,
  title: string,
  description: string,
  imageUrl?: string,
  imageAlt?: string
): Metadata {
  return {
    title,
    description,
    openGraph: {
      type: 'website',
      title,
      description,
      url: `${baseUrl}/${path}`,
      siteName: 'NeuroGen Lab',
      images: imageUrl ? [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt || title,
          type: 'image/jpeg',
        },
      ] : undefined,
      locale: 'en',
      alternateLocale: generateOpenGraphAlternateLocales(),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
      creator: '@neurogenlab',
      site: '@neurogenlab',
    },
    alternates: generateHrefLangs(path),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    authors: [{ name: 'NeuroGen Lab Team' }],
  };
} 