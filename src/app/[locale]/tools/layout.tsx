import React from "react";
import HreflangTags from '../../../components/HreflangTags';

export default async function ToolsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  return (
    <>
      <HreflangTags path="tools" currentLocale={locale} />
      {children}
    </>
  );
}
