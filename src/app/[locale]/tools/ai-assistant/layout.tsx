import React from "react";
import HreflangTags from '../../../../components/HreflangTags';

export default async function AIAssistantLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  return (
    <>
      <HreflangTags path="tools/ai-assistant" currentLocale={locale} />
      {children}
    </>
  );
}