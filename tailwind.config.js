/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        content: "var(--content)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
      },
      borderColor: {
        DEFAULT: "var(--border)",
      },
      boxShadow: {
        "sm": "var(--shadow-sm)"
      }
    },
  },
  plugins: [],
};
