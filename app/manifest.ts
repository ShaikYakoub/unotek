import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Unotek",
    short_name: "Unotek",
    description:
      "Premium AAC blocks engineered for structural performance, thermal efficiency, and faster construction.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/logo.avif",
        sizes: "192x192",
        type: "image/avif",
      },
      {
        src: "/logo.avif",
        sizes: "512x512",
        type: "image/avif",
      },
    ],
  };
}
