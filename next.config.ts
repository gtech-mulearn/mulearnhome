import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.example.com', // replace with your CDN host
        pathname: '/**',             // allow all paths
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',        // allow UFO image host
        pathname: '/**',
      },
    ],
  },
};
export default nextConfig;
