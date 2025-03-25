"use client";
import React from 'react';
import { MessagesSquare, ArrowRight } from "lucide-react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import ScrollToTop from "../../ScrollToTop";
import GlowingButton from "../../common/GlowingButton";
import BackToHome from "../../BackToHome";
import { useAIChatBotTranslations } from '../../../hooks/useAIChatBotTranslations';
import { AIChatBotContent } from './AIChatBotContent';
import { AIChatBotIntegrations } from './AIChatBotIntegrations';
import { AIChatBotTabs } from './AIChatBotTabs';

interface AIChatBotTemplateProps {
  imageComponent?: React.ReactNode;
}

const AIChatBotTemplate: React.FC<AIChatBotTemplateProps> = ({
  imageComponent
}) => {
  const { t } = useAIChatBotTranslations();

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-8">
            <BackToHome />
          </div>

          <div className="text-center mb-12">
            <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-emerald-500/10 mb-6">
              <MessagesSquare className="w-8 h-8 text-emerald-400" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              {t.title}
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t.description}
            </p>
          </div>

          {/* Интеграции сразу после заголовка */}
          <AIChatBotIntegrations />
          
          {/* Табы */}
          <AIChatBotTabs />
          
          {/* Изображение */}
          {imageComponent && <div className="mb-12">{imageComponent}</div>}
          
          {/* Основной контент */}
          <AIChatBotContent content={t.articleContent} />
          
          {/* Блок "Нужна дополнительная информация? Свяжитесь с отделом продаж" */}
          <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800/50 mt-12">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">
                {t.contactBlock.title}
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                {t.contactBlock.description}
              </p>
              <GlowingButton
                to="/contacts"
                size="md"
                icon={
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                }
              >
                {t.contactBlock.buttonText}
              </GlowingButton>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AIChatBotTemplate; 