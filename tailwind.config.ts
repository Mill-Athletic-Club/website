import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050608",         // primary background, matches logo backdrop
        surface: "#101318",    // card/section surfaces, slightly lifted
        text: "#F3F5F6",       // primary text on dark background
        muted: "#8A9099",      // secondary text, captions
        teal: "#2FE8C8",       // gradient start
        blue: "#2B5FE0",       // gradient end
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #2FE8C8 0%, #2B5FE0 100%)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
    },
  },
  plugins: [],
};

export default config;
