/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(html)$/,
      use: { loader: "html-loader" },
    });

    return config;
  },
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
