import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        md: "16px",
      },
      colors: {
        primary: "var(--primary)",
        light_primary: "var(--light-primary)",
        dark_primary: "var(--dark-primary)",
        secondary: "var(--secondary)",
        light_secondary: "var(--light_secondary)",
        terciary: "var(--terciary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
