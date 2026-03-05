/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: "/Portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
