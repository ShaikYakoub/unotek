import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // Enterprise Image Optimization
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // Cache images for 1 year
  },

  // Aggressive Media Caching Headers
  async headers() {
    return [
      {
        // Next static chunks are content-hashed; cache aggressively.
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Target all major static media/assets in public directory
        source:
          "/:path*\\.(avif|webp|png|jpg|jpeg|svg|gif|ico|mp4|webm|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Accept-Ranges",
            value: "bytes",
          },
          {
            key: "Vary",
            value: "Accept-Encoding",
          },
        ],
      },
      {
        // Cache optimized image responses from Next image optimizer.
        source: "/_next/image",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
