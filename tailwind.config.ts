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
        gradientTextStart: "rgba(var(--gradientTextStart))",
        gradientTextEnd: "rgba(var(--gradientTextEnd))",
        primary: "rgba(var(--primary))",
        neutral: {
          1000: "rgba(var(--neutral1000))",
          800: "rgba(var(--neutral800))",
          600: "rgba(var(--neutral600))",
          500: "rgba(var(--neutral500))",
          400: "rgba(var(--neutral400))",
          300: "rgba(var(--neutral300))",
          200: "rgba(var(--neutral200))",
          DEFAULT: "rgba(var(--neutral))",
        },
      },
    },
  },
  plugins: [],
};
export default config;
