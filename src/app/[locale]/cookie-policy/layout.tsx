import React from 'react';
import { generatePageMetadata } from '../../../utils/metadata';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

export const metadata = generatePageMetadata(
  'cookie-policy',
  'Cookie Policy | NeuroGen Lab',
  'Learn about how NeuroGen Lab uses cookies to enhance your experience and protect your privacy.',
  `${baseUrl}/assets/images/og-cookie-policy.jpg`,
  'NeuroGen Lab Cookie Policy'
);

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 