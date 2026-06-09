import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06B6D4",
        accent: "#67E8F9",
        bg: "#0A0E14",
        surface: "#1A2433",
        "bg-contrast": "#1A2433",
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Space Mono", "ui-monospace", "monospace"],
        mono: ["var(--font-body)", "Space Mono", "ui-monospace", "monospace"],
        serif: ["var(--font-display)", "Space Grotesk", "ui-sans-serif", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
