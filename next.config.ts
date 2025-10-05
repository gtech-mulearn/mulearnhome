import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',        // allow UFO image host
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 's3.ap-south-1.amazonaws.com',        // allow UFO image host
        pathname: '/**',
      },
    ],
  },
};
export default nextConfig;
