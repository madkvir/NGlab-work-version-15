import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Assistant for Business | NeuroGen Lab - Automate and Innovate",
  description:
    "Optimize your business operations with our AI Assistant. Automate tasks, enhance productivity, and make data-driven decisions with advanced artificial intelligence.",
  keywords: [
    "AI assistant",
    "business automation",
    "productivity tools",
    "artificial intelligence",
  ],
  openGraph: {
    title: "AI Assistant - Intelligent Business Automation | NeuroGen Lab",
    description:
      "Transform your business operations with our AI Assistant. Automate tasks and boost productivity with advanced AI technology.",
    url: "https://neurogenlab.de/tools/ai-assistant",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  twitter: {
    title: "AI Assistant - Smart Business Automation",
    description: "Enhance your business efficiency with our AI Assistant",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/tools/ai-assistant",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}