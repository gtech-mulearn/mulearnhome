import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: process.env.CDN_HOSTNAME!,
        pathname: process.env.CDN_PATH!,
      },
    ],
  },
};
export default nextConfig;
