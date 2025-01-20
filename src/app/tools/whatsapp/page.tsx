'use client';

import React from "react";
import { MessageCircle } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { useLanguage } from "../../../context/LanguageContext";
import { whatsappTranslations } from "../../../locales/translations";

const WhatsAppPage = () => {
  const { language } = useLanguage();
  const t = whatsappTranslations[language] || whatsappTranslations.en;

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<MessageCircle className="w-8 h-8 text-green-500" />}
      features={t.features}
      benefits={t.benefits}
      integrations={t.integrations}
      sectionTitles={t.sectionTitles}
      metaTitle={t.metaTitle}
      metaDescription={t.metaDescription}
      isComingSoon={false}
    />
  );
};

export default WhatsAppPage;
