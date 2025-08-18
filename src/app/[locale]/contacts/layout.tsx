import React from "react";
import HreflangTags from '../../../components/HreflangTags';

export default function ContactsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <HreflangTags path="contacts" currentLocale={params.locale} />
      {children}
    </>
  );
} 