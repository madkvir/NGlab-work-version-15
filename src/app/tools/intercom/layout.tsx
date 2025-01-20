import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intercom Integration | NeuroGen Lab - Customer Messaging Solution",
  description:
    "Optimize your customer messaging with our Intercom integration. Automate support, engage customers intelligently, and improve conversion rates through targeted communication.",
  keywords: [
    "intercom integration",
    "customer messaging",
    "support automation",
    "customer engagement",
  ],
  openGraph: {
    title: "Intercom Integration - Smart Customer Support | NeuroGen Lab",
    description: "Enhance customer messaging with intelligent automation",
    url: "https://neurogenlab.de/tools/intercom",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  twitter: {
    title: "Intercom Integration - Customer Messaging",
    description: "Optimize support with smart Intercom automation",
    images: [
      {
        url: "", // TODO: add URL
        alt: "", // TODO: add alt text
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/intercom",
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 