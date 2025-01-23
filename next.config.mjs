/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  distDir: "./dist", // Changes the build output directory to `./dist/`.
  images: {
    unoptimized: true, // для статической генерации
  },
};

export default nextConfig;
