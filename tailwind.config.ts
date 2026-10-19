import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#111A24",
          dark: "#0B1119",
          light: "#1A2533",
          surface: "#141F2B",
          card: "#182432",
        },
        ivory: {
          DEFAULT: "#F8F5EF",
          light: "#FDFAF5",
          dark: "#ECE7DC",
          card: "#FFFFFF",
        },
        champagne: {
          DEFAULT: "#B9975B",
          light: "#D4B77D",
          dark: "#967840",
          accent: "#C8A96E",
        },
        charcoal: {
          DEFAULT: "#24282D",
          light: "#33383F",
          dark: "#1A1D21",
        },
        warmgrey: {
          DEFAULT: "#77756F",
          light: "#A4A19B",
          dark: "#54524D",
          border: "#D8D4CA",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxury: "0.2em",
        subtle: "0.08em",
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(17, 26, 36, 0.06)",
        card: "0 10px 30px -4px rgba(17, 26, 36, 0.08)",
        modal: "0 25px 60px -15px rgba(0, 0, 0, 0.45)",
        gold: "0 4px 20px rgba(185, 151, 91, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
