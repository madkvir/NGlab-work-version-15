/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(html)$/,
      use: { loader: "html-loader" },
    });

    return config;
  },
};

export default nextConfig;
