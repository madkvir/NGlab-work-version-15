import React from "react";
import HreflangTags from '../../../components/HreflangTags';

export default async function AboutUsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  return (
    <>
      <HreflangTags path="about-us" currentLocale={locale} />
      {children}
    </>
  );
} 