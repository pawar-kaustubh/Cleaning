/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['ap-south-1.graphassets.com'], // ✅ fix here
  },
};

export default nextConfig;
