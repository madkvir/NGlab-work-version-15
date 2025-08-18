import React from "react";
import { Metadata } from "next";
import { generateHrefLangs } from '../utils/generateHrefLangs';

interface ToolPageTemplateProps {
  toolName?: string;
  toolPath?: string;
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  icon?: React.ReactNode;
  features?: any[];
  benefits?: any[];
  integrations?: any[];
  sectionTitles?: any;
  metaTitle?: string;
  metaDescription?: string;
  isComingSoon?: boolean;
  articleContent?: any;
  commonT?: any;
  imageComponent?: React.ReactNode;
  children?: React.ReactNode;
}

export function generateToolMetadata({
  toolName,
  toolPath,
  title,
  description,
  keywords,
  ogImage
}: {
  toolName?: string;
  toolPath?: string;
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

  return {
    title,
    description,
    keywords,
    openGraph: {
      type: 'website',
      title,
      description,
      url: toolPath ? `${baseUrl}/${toolPath}` : baseUrl,
      siteName: "NeuroGen Lab",
      images: ogImage ? [
        {
          url: `${baseUrl}/assets/images/${ogImage}`,
          width: 1200,
          height: 630,
          alt: toolName ? `${toolName} Integration` : 'Tool Integration',
          type: 'image/jpeg',
        },
      ] : [],
      locale: 'en',
      alternateLocale: ['de', 'es', 'ru', 'uk'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [`${baseUrl}/assets/images/${ogImage}`] : [],
      creator: "@neurogenlab",
      site: "@neurogenlab",
    },
    alternates: toolPath ? generateHrefLangs(toolPath) : {},
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
    authors: [{ name: "NeuroGen Lab Team" }],
  };
}

export default function ToolPageTemplate({
  toolName,
  toolPath,
  title,
  description,
  keywords,
  ogImage,
  icon,
  features,
  benefits,
  integrations,
  sectionTitles,
  metaTitle,
  metaDescription,
  isComingSoon,
  articleContent,
  commonT,
  imageComponent,
  children
}: ToolPageTemplateProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": toolName || title,
    "description": description,
    "url": toolPath ? `${baseUrl}/${toolPath}` : baseUrl,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "NeuroGen Lab",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Основной контент */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 py-8">
          {/* Заголовок */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              {icon}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {description}
            </p>
          </div>

          {/* Изображение */}
          {imageComponent && (
            <div className="mb-12">
              {imageComponent}
            </div>
          )}

          {/* Features */}
          {features && features.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                {sectionTitles?.features || "Features"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title || feature}</h3>
                    {feature.description && (
                      <p className="text-gray-300">{feature.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Benefits */}
          {benefits && benefits.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                {sectionTitles?.benefits || "Benefits"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title || benefit}</h3>
                    {benefit.description && (
                      <p className="text-gray-300">{benefit.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Integrations */}
          {integrations && integrations.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                {sectionTitles?.integrations || "Integrations"}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors">
                    <span className="text-white font-medium">{integration}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Article Content */}
          {articleContent && (
            <section className="mb-12">
              {articleContent}
            </section>
          )}

          {/* Coming Soon Badge */}
          {isComingSoon && (
            <div className="text-center mb-8">
              <span className="inline-block bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Coming Soon
              </span>
            </div>
          )}

          {/* Дополнительный контент */}
          {children}
        </div>
      </div>
    </>
  );
}
