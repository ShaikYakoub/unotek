import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allows local images in the /public folder with next/image
    unoptimized: false,
  },
};

export default nextConfig;
