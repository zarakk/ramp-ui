import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "128": "32rem",
        "144": "36rem",
        "156": "40rem",
      },
      maxWidth: {
        "3xl": "48rem", // 768px
        "4xl": "56rem", // 896px
        "5xl": "64rem", // 1024px
      },
    },
  },
  plugins: [],
};
export default config;
