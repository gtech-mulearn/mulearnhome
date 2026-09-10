import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  images: {
    // Serve next-gen formats (AVIF > WebP > fallback)
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimized images for 7 day
    minimumCacheTTL: 604800,
    qualities: [75, 85, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.ap-south-1.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.mulearn",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mulearn.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.propeers.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dev.mulearn.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.madhyamam.com",
        pathname: "/**",
      },
    ],
  },
};
export default nextConfig;
