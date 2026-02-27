import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Enterprise Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // Cache images for 1 year
  },

  // Aggressive Media Caching Headers
  async headers() {
    return [
      {
        // Target all video files in your public directory
        source: '/(.*\\.mp4)',
        headers: [
          {
            key: 'Cache-Control',
            // Cache videos locally in the browser for 1 year (immutable)
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes', // Allows the browser to stream the 6s video in chunks
          }
        ],
      },
      {
        // Cache all static assets (fonts, SVGs)
        source: '/(.*\\.(woff2|svg|png|jpg|jpeg))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      }
    ];
  },
};

export default nextConfig;