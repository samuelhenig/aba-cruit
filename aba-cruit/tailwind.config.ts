import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#102033",
        blue: "#2F6FED",
        warm: "#FFF8EF",
        cream: "#F8F3EA",
        soft: "#F5F8FC",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(16, 32, 51, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
