/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Change to true;
  swcMinify: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
