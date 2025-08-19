import React from 'react';
import { generatePageMetadata } from '../../../utils/metadata';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return generatePageMetadata('privacy', 'Privacy Policy | NeuroGen Lab', 'Learn about how NeuroGen Lab protects your privacy and handles your personal data.', `${baseUrl}/assets/images/og-privacy.jpg`, 'NeuroGen Lab Privacy Policy', locale);
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 