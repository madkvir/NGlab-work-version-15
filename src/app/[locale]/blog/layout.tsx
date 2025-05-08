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
        url: "", // TODO: add url and alt
        alt: "",
      },
    ],
  },
  twitter: {
    title: "Blog - Latest Insights on AI Technology",
    description:
      "Stay updated with the latest insights about AI technology and implementation. Explore our blog for articles, tips, and trends.",
    images: [
      {
        url: "", // TODO: add url and alt
        alt: "",
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
