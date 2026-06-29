import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#080a09",
        panel: "#0f1310",
        acid: "#c8ff52",
        ink: "#f3f6ef",
        muted: "#929b92",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        glow: "0 0 50px rgba(200,255,82,.12)",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,.045) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
