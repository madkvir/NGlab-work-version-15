import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Latest Insights on AI Technology",
  description:
    "Stay updated with the latest insights about AI technology and implementation. Explore our blog for articles, tips, and trends.",
  keywords: ["AI", "technology", "blog", "insights", "articles"],
  openGraph: {
    title: "Blog - Latest Insights on AI Technology",
    description:
      "Stay updated with the latest insights about AI technology and implementation. Explore our blog for articles, tips, and trends.",
    url: "https://neurogenlab.de/blog",
    images: [
      {
        url: "/assets/images/og-guide.jpg",
        alt: "NeuroGen Lab Blog",
      },
    ],
  },
  twitter: {
    title: "Blog - Latest Insights on AI Technology",
    description:
      "Stay updated with the latest insights about AI technology and implementation. Explore our blog for articles, tips, and trends.",
    images: [
      {
        url: "/assets/images/og-guide.jpg",
        alt: "NeuroGen Lab Blog",
      },
    ],
  },
  authors: [{ name: "NeuroGen Lab" }],
  alternates: {
    canonical: "https://neurogenlab.de/blog",
  },
};

export default function BlogLayout({ children }) {
  return <main>{children}</main>;
}
