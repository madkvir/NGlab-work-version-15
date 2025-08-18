import React from "react";
import { Metadata } from "next";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import BackToHome from "./BackToHome";

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

function renderStructuredArticleContent(content: any) {
  if (!content || typeof content !== 'object') return null;

  const {
    mainTitle,
    subtitle,
    introText,
    introList,
    howItWorksTitle,
    howItWorksText,
    howItWorksList,
    howItWorks,
    keyFeaturesTitle,
    features,
    industriesTitle,
    industriesText,
    industries,
    conclusionTitle,
    conclusionText,
    conclusionList,
    topReasonsTitle,
    reasonList,
    finalConclusion
  } = content;

  return (
    <div className="space-y-10 text-gray-200">
      {mainTitle && (
        <header className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">{mainTitle}</h2>
          {subtitle && <p className="text-gray-400">{subtitle}</p>}
        </header>
      )}

      {(introText || (Array.isArray(introList) && introList.length > 0)) && (
        <section>
          {introText && <p className="mb-4">{introText}</p>}
          {Array.isArray(introList) && introList.length > 0 && (
            <ul className="list-disc pl-6 space-y-1">
              {introList.map((item: any, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      )}

      {(howItWorksTitle || howItWorksText || (Array.isArray(howItWorksList) && howItWorksList.length > 0) || (Array.isArray(howItWorks) && howItWorks.length > 0)) && (
        <section>
          {howItWorksTitle && (
            <h3 className="text-2xl font-semibold text-white mb-3">{howItWorksTitle}</h3>
          )}
          {howItWorksText && <p className="mb-4">{howItWorksText}</p>}
          {Array.isArray(howItWorksList) && howItWorksList.length > 0 && (
            <ol className="list-decimal pl-6 space-y-1">
              {howItWorksList.map((step: any, idx: number) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          )}
          {Array.isArray(howItWorks) && howItWorks.length > 0 && (
            <div className="space-y-6">
              {howItWorks.map((item: any, idx: number) => (
                <div key={idx} className="bg-gray-800 rounded-lg p-6">
                  {item.title && (
                    <h4 className="text-lg font-semibold text-white mb-3">{item.title}</h4>
                  )}
                  {Array.isArray(item.points) && item.points.length > 0 && (
                    <ul className="list-disc pl-6 space-y-1">
                      {item.points.map((point: any, pointIdx: number) => (
                        <li key={pointIdx}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {(keyFeaturesTitle || (features && typeof features === 'object')) && (
        <section>
          {keyFeaturesTitle && (
            <h3 className="text-2xl font-semibold text-white mb-3">{keyFeaturesTitle}</h3>
          )}
          {features && typeof features === 'object' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.values(features).map((f: any, idx: number) => (
                <div key={idx} className="bg-gray-800 rounded-lg p-5">
                  <h4 className="text-lg font-semibold text-white mb-2">{f?.title}</h4>
                  {f?.description && <p className="text-gray-300">{f.description}</p>}
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {(industriesTitle || industriesText || (Array.isArray(industries) && industries.length > 0)) && (
        <section>
          {industriesTitle && (
            <h3 className="text-2xl font-semibold text-white mb-3">{industriesTitle}</h3>
          )}
          {industriesText && <p className="mb-4">{industriesText}</p>}
          {Array.isArray(industries) && industries.length > 0 && (
            <ul className="list-disc pl-6 space-y-1">
              {industries.map((it: any, idx: number) => (
                <li key={idx}>
                  {typeof it === 'object' && it.icon && it.name ? (
                    <span>{it.icon} {it.name}: {it.description}</span>
                  ) : typeof it === 'object' && it.name ? (
                    <span><strong>{it.name}</strong>: {it.description}</span>
                  ) : (
                    it
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {(conclusionTitle || conclusionText || (Array.isArray(conclusionList) && conclusionList.length > 0)) && (
        <section>
          {conclusionTitle && (
            <h3 className="text-2xl font-semibold text-white mb-3">{conclusionTitle}</h3>
          )}
          {conclusionText && <p className="mb-4">{conclusionText}</p>}
          {Array.isArray(conclusionList) && conclusionList.length > 0 && (
            <ul className="list-disc pl-6 space-y-1">
              {conclusionList.map((it: any, idx: number) => (
                <li key={idx}>{it}</li>
              ))}
            </ul>
          )}
        </section>
      )}

      {(topReasonsTitle || (Array.isArray(reasonList) && reasonList.length > 0)) && (
        <section>
          {topReasonsTitle && (
            <h3 className="text-2xl font-semibold text-white mb-3">{topReasonsTitle}</h3>
          )}
          {Array.isArray(reasonList) && reasonList.length > 0 && (
            <div className="space-y-4">
              {reasonList.map((reason: any, idx: number) => {
                // Если элемент — простая строка
                if (typeof reason === 'string') {
                  return (
                    <ul key={idx} className="list-disc pl-6">
                      <li>{reason}</li>
                    </ul>
                  );
                }

                // Если элемент — объект с title/content или title/description
                const reasonTitle = reason?.title;
                const reasonContent = reason?.content;
                const reasonDescription = reason?.description;
                const reasonText = reasonContent?.text || reasonDescription;
                const reasonListItems: any[] = Array.isArray(reasonContent?.list)
                  ? reasonContent.list
                  : [];

                return (
                  <div key={idx} className="bg-gray-800 rounded-lg p-5">
                    {reasonTitle && (
                      <h4 className="text-lg font-semibold text-white mb-2">{reasonTitle}</h4>
                    )}
                    {reasonText && <p className="text-gray-300 mb-2">{reasonText}</p>}
                    {reasonListItems.length > 0 && (
                      <ul className="list-disc pl-6 space-y-1">
                        {reasonListItems.map((item: any, itemIdx: number) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}

      {finalConclusion && (finalConclusion.title || finalConclusion.text) && (
        <section className="bg-gray-800/60 rounded-lg p-6">
          {finalConclusion.title && (
            <h3 className="text-2xl font-semibold text-white mb-2">{finalConclusion.title}</h3>
          )}
          {finalConclusion.text && <p className="text-gray-300">{finalConclusion.text}</p>}
        </section>
      )}
    </div>
  );
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

  const renderArticle = () => {
    if (!articleContent) return null;
    if (React.isValidElement(articleContent)) return articleContent;
    if (typeof articleContent === 'string') return <p>{articleContent}</p>;
    if (Array.isArray(articleContent)) {
      // Проверяем, что все элементы валидны
      const validElements = articleContent.filter(item => 
        item && (typeof item === 'string' || typeof item === 'object' || React.isValidElement(item))
      );
      return <>{validElements}</>;
    }
    return renderStructuredArticleContent(articleContent);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />

        {/* Основной контент */}
      <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 py-8">
            {/* Кнопка "Назад" */}
            <div className="mb-8">
            <BackToHome />
          </div>

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
            {features && Array.isArray(features) && features.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  {sectionTitles?.features || "Features"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features.map((feature, index) => {
                    // Защита от невалидных данных
                    if (!feature || (typeof feature !== 'string' && typeof feature !== 'object')) {
                      return null;
                    }
                    
                    // Обработка разных структур
                    let title = '';
                    let description = '';
                    
                    if (typeof feature === 'string') {
                      title = feature;
                    } else if (feature.key && feature.text) {
                      // Структура keepincrm: {key, text}
                      title = feature.key;
                      description = feature.text;
                    } else if (feature.title) {
                      // Стандартная структура: {title, description}
                      title = feature.title;
                      description = feature.description || '';
                    } else if (feature.name) {
                      // Альтернативная структура: {name, description}
                      title = feature.name;
                      description = feature.description || '';
                    } else {
                      return null;
                    }
                    
                    return (
                      <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                        {description && (
                          <p className="text-gray-300">{description}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Benefits */}
            {benefits && Array.isArray(benefits) && benefits.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  {sectionTitles?.benefits || "Benefits"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => {
                    // Защита от невалидных данных
                    if (!benefit || (typeof benefit !== 'string' && typeof benefit !== 'object')) {
                      return null;
                    }
                    
                    // Обработка разных структур
                    let title = '';
                    let description = '';
                    
                    if (typeof benefit === 'string') {
                      title = benefit;
                    } else if (benefit.key && benefit.text) {
                      // Структура keepincrm: {key, text}
                      title = benefit.key;
                      description = benefit.text;
                    } else if (benefit.title) {
                      // Стандартная структура: {title, description}
                      title = benefit.title;
                      description = benefit.description || '';
                    } else if (benefit.name) {
                      // Альтернативная структура: {name, description}
                      title = benefit.name;
                      description = benefit.description || '';
                    } else {
                      return null;
                    }
                    
                    return (
                      <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                        {description && (
                          <p className="text-gray-300">{description}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Integrations */}
            {integrations && Array.isArray(integrations) && integrations.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  {sectionTitles?.integrations || "Integrations"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {integrations.map((integration, index) => {
                    // Защита от невалидных данных
                    if (!integration || (typeof integration !== 'string' && typeof integration !== 'object')) {
                      return null;
                    }
                    
                    // Обработка разных структур
                    let title = '';
                    let description = '';
                    
                    if (typeof integration === 'string') {
                      title = integration;
                    } else if (integration.name) {
                      // Структура keepincrm: {name, description}
                      title = integration.name;
                      description = integration.description || '';
                    } else if (integration.title) {
                      // Стандартная структура: {title, description}
                      title = integration.title;
                      description = integration.description || '';
                    } else if (integration.key) {
                      // Альтернативная структура: {key, text}
                      title = integration.key;
                      description = integration.text || '';
                    } else {
                      return null;
                    }
                    
                    return (
                      <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                        {description && (
                          <p className="text-gray-300">{description}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Article Content */}
            {articleContent && (
              <section className="mb-12">
                {renderArticle()}
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
      </main>

      <ScrollToTop />
      <Footer />
    </div>
    </>
  );
}
