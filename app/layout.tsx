import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import ScrollProgressBar from "./components/ScrollProgressBar";
import PageTransition from "./components/PageTransition";
import "./globals.css";

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
  title: "Unotek | Premium AAC Blocks — Engineered for the Future",
  description:
    "Next-generation Autoclaved Aerated Concrete engineered for monumental structural integrity and zero environmental compromise. Request a quotation for your enterprise project.",
  openGraph: {
    title: "Unotek | Premium AAC Blocks",
    description:
      "Enterprise-grade Autoclaved Aerated Concrete. 66% lighter, 15% steel savings, 35% labour cost reduction.",
    type: "website",
  },
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
          href="/videos/Slow-motion%20extreme%20close-up%20of%20dark%20fly%20ash%20slurry%20and%20pure%20white%20lime%20powder%20blending.mp4"
        />
      </head>
      <body className="antialiased selection:bg-enterprise-blue selection:text-white">
        <ScrollProgressBar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
