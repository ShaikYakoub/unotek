import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Enterprise Architectural Palette
        titanium: {
          50: "#F8F9FA",
          100: "#F1F3F5",
          200: "#E9ECEF",
        },
        slate: {
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },
        enterprise: {
          blue: "#2563EB",
          hover: "#1D4ED8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "enterprise-sm": "0 4px 20px -5px rgba(0, 0, 0, 0.05)",
        "enterprise-lg": "0 20px 60px -15px rgba(0, 0, 0, 0.1)",
        "enterprise-glow": "0 0 40px rgba(37, 99, 235, 0.15)",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};

export default config;
