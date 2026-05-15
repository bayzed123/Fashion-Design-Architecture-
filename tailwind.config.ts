import type { Config } from "tailwindcss";
import { themeConfig } from "./themeConfig";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: themeConfig.colors.primary,
        secondary: themeConfig.colors.secondary,
        accent: themeConfig.colors.accent,
        background: themeConfig.colors.background,
        text: themeConfig.colors.text,
      },
      fontFamily: {
        heading: [themeConfig.fonts.heading, "serif"],
        body: [themeConfig.fonts.body, "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
