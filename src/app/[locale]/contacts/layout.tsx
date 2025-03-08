import React from 'react';
import { generatePageMetadata } from '../../../utils/metadata';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neurogenlab.de';

export const metadata = generatePageMetadata(
  'contacts',
  'Contact Us | NeuroGen Lab',
  'Get in touch with NeuroGen Lab. Contact our team for AI solutions, support, and business inquiries.',
  `${baseUrl}/assets/images/og-contacts.jpg`,
  'NeuroGen Lab Contact Information'
);

export default function ContactsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 