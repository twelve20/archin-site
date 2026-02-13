import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        accent: {
          DEFAULT: "#C45A3C",
          hover: "#A8482F",
          light: "#D4715A",
        },
        warm: "#FAFAF8",
        secondary: "#F0EEEB",
        text: {
          DEFAULT: "#2D2D2D",
          light: "#6B6B6B",
          muted: "#999999",
        },
        border: "#E5E3E0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)", "var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        button: "12px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0, 0, 0, 0.06)",
        "card-hover": "0 8px 40px rgba(0, 0, 0, 0.12)",
        modal: "0 24px 80px rgba(0, 0, 0, 0.15)",
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
} satisfies Config;
