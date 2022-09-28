/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Change to true;
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "lh3.googleusercontent.com"],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
