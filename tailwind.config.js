/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        content: "var(--content)",
        "muted-foreground": "var(--mutedForeground)",
      },
      borderColor: {
        DEFAULT: "var(--border)",
      },
    },
  },
  plugins: [],
};
