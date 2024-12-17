import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import SEO from '../../components/SEO';

interface ToolPageProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  benefits: string[];
  integrations?: string[];
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  ogImage: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  author: string;
  canonical: string;
  favicon: string;
}

const ToolPageTemplate: React.FC<ToolPageProps> = ({
  title,
  description,
  icon,
  features,
  benefits,
  integrations,
  metaTitle,
  metaDescription,
  metaKeywords,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
  twitterTitle,
  twitterDescription,
  twitterImage,
  author,
  canonical,
  favicon
}) => {
  const seoData = {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    ogTitle,
    ogDescription,
    ogUrl,
    ogImage,
    twitterTitle,
    twitterDescription,
    twitterImage,
    author,
    canonical,
    favicon
  };

  React.useEffect(() => {
    document.title = metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', metaDescription);
    }
  }, [metaTitle, metaDescription]);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <SEO {...seoData} />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-emerald-500/10 mb-6">
              {icon}
            </div>
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Features */}
            <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-6 text-emerald-400">Key Features</h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-emerald-400">•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-6 text-emerald-400">Benefits</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-emerald-400">•</span>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {integrations && (
            <div className="bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300 mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-emerald-400">Integrations</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {integrations.map((integration, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-4 text-center">
                    {integration}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-center">
            <Link
              to="/contacts"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-emerald-400 to-green-300 hover-gradient text-white rounded-lg transition-all hover:animate-glow"
            >
              Get Started
            </Link>
          </div>
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default ToolPageTemplate;