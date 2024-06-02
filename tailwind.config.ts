import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
      center: true,

      screens: {
        sm: "36rem",
        md: "42rem",
        lg: "56rem",
        xl: "72rem",
      },
    },
    extend: {
      backgroundImage: {
        gradient: "linear-gradient(90deg, #FF9898, #8054FF)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontWeight: {
        titleBold: "var(--titleBold)",
        PRegular: "var(--PRegular)",
        Bold: "var(--Bold)",
        medium: "var(--medium)",
        ExtraBold: "var(--ExtraBold)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        brown: "#755B3E",
        darkbrown: "#54422e",
        yellow: "#B29600",
        light_blue: "#91D8F7",
        blue: "#0098DA",
        pink: "#cc3bb1",
        dark_yellow: "#857001",
        dark_blue_black: "#343a40",
        gray: "#9E9E9E",
        grey1: "#9E9E9E",
        grey2: "#e9ecef",
        grey3: "#6c757d",
      },
    },
  },
  plugins: [],
};
export default config;
