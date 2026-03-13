import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import ScrollProgressBar from "./shared/components/ScrollProgressBar";
import FloatingWhatsApp from "./shared/components/FloatingWhatsApp";
import PageTransition from "./shared/components/PageTransition";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://unotek.in";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Unotek | Premium AAC Blocks",
    template: "%s | Unotek",
  },
  description:
    "Next-generation Autoclaved Aerated Concrete engineered for monumental structural integrity and zero environmental compromise. Request a quotation for your enterprise project.",
  keywords: [
    "AAC blocks",
    "Autoclaved Aerated Concrete",
    "lightweight blocks",
    "construction materials India",
    "thermal insulation blocks",
    "Unotek",
  ],
  alternates: {
    canonical: "/",
  },
  applicationName: "Unotek",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo.avif",
    shortcut: "/logo.avif",
    apple: "/logo.avif",
  },
  openGraph: {
    title: "Unotek | Premium AAC Blocks",
    description:
      "Enterprise-grade Autoclaved Aerated Concrete. 66% lighter, 15% steel savings, 35% labour cost reduction.",
    url: siteUrl,
    siteName: "Unotek",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Unotek premium AAC blocks preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unotek | Premium AAC Blocks",
    description:
      "Enterprise-grade AAC blocks engineered for speed, thermal performance, and structural reliability.",
    images: ["/twitter-image"],
  },
  category: "construction",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* Preload first process video for LCP improvement */}
        <link
          rel="preload"
          as="video"
          href="/homepage/videos/fly-ash-slurry-and-lime-blending.webm"
        />
      </head>
      <body className="antialiased selection:bg-enterprise-blue selection:text-white">
        <ScrollProgressBar />
        <PageTransition>{children}</PageTransition>
        <FloatingWhatsApp whatsappLink="https://wa.me/9515168868?text=Hello,%20I%20am%20inquiring%20from%20your%20website." />
      </body>
    </html>
  );
}
