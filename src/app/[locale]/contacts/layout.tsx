import React from "react";

export default async function ContactsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <>
      {children}
    </>
  );
} 