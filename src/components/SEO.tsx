import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
    author?: string;
    canonical?: string;
    favicon?: string;
}

const SEO: React.FC<SEOProps> = ({
    title = '',
    description = '',
    keywords = '',
    ogTitle = '',
    ogDescription = '',
    ogImage = '',
    ogUrl = '',
    twitterTitle = '',
    twitterDescription = '',
    twitterImage = '',
    author = '',
    canonical = '',
    favicon = '',
}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={ogDescription} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={ogUrl} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={twitterTitle} />
            <meta name="twitter:description" content={twitterDescription} />
            <meta name="twitter:image" content={twitterImage} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={canonical} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content={author} />
            <link rel="icon" href={favicon} type="image/x-icon" />
            {/* Добавьте другие мета-теги по необходимости */}
        </Helmet>
    );
};

export default SEO;