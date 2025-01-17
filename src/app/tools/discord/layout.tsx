import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discord Integration | NeuroGen Lab - Custom Bot Development",
  description: "Enhance your Discord server with custom bots and automation tools. Build engaging communities and streamline server management.",
  keywords: [
    "discord integration",
    "discord bots",
    "server management",
    "community tools",
    "automation",
    "custom commands",
    "discord analytics"
  ],
  openGraph: {
    title: "Discord Integration - Custom Bot Development | NeuroGen Lab",
    description: "Transform your Discord server with powerful integration solutions",
    url: "https://neurogenlab.de/tools/discord",
    images: [
      {
        url: "/images/tools/discord.jpg",
        alt: "Discord Integration by NeuroGen Lab",
      },
    ],
  },
  twitter: {
    title: "Discord Integration - Custom Bot Development",
    description: "Transform your Discord server with powerful tools",
    images: [
      {
        url: "/images/tools/discord.jpg",
        alt: "Discord Integration by NeuroGen Lab",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/discord",
    languages: {
      'en': '/tools/discord',
      'de': '/de/tools/discord',
      'es': '/es/tools/discord',
      'ru': '/ru/tools/discord'
    }
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}