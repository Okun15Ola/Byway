import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // ensure public images load correctly on Vercel
  },
};

export default nextConfig;
