import React from "react";
import HreflangTags from '../../../../components/HreflangTags';

export default function AIAssistantLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <HreflangTags path="tools/ai-assistant" currentLocale={params.locale} />
      {children}
    </>
  );
}