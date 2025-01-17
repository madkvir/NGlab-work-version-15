'use client';

import React from "react";
import type { FC } from 'react';
import { ImageIcon } from "lucide-react";
import ToolPageTemplate from "../../../components/ToolPageTemplate";
import { useLanguage } from "../../../context/LanguageContext";
import { aiAvatarTranslations } from "../../../locales/translations";

const AiAvatar: FC = () => {
  const { language } = useLanguage();
  const t = aiAvatarTranslations[language];

  return (
    <ToolPageTemplate
      title={t.title}
      description={t.description}
      icon={<ImageIcon className="w-8 h-8 text-emerald-400" />}
      features={t.features}
      benefits={t.benefits}
      integrations={t.integrations}
      sectionTitles={t.sectionTitles}
      metaTitle={t.metaTitle}
      metaDescription={t.metaDescription}
    />
  );
};

export default AiAvatar;
