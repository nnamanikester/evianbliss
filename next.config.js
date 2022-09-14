/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Change to true;
  swcMinify: true,
  images: {
    domains: ["via.placeholder.com"],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
