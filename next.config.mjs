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
  // i18n: {
  //   locales: ["en-US", "uk", "ru", "de", "es"],
  //   defaultLocale: "en-US",
  // },
};

export default withNextIntl(nextConfig);
