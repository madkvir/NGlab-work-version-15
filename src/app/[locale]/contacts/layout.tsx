import React from "react";
import HreflangTags from '../../../components/HreflangTags';

export default async function ContactsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  return (
    <>
      <HreflangTags path="contacts" currentLocale={locale} />
      {children}
    </>
  );
} 