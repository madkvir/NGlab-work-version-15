/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  distDir: "./dist", // Changes the build output directory to `./dist/`.
  images: {
    unoptimized: true, // для статической генерации
  },
  async headers() {
    return [
      {
        source: '/assets/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          }
        ],
      },
    ]
  },
};

export default nextConfig;
