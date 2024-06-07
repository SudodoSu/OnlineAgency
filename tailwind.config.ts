import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   sm: "36rem",
    //   md: "42rem",
    //   lg: "56rem",
    //   xl: "72rem",
    // },

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
        "gradient-gray-radial":
          "linear-gradient(120deg, #494955 0%,  #141414 100%)",
        "gradient-gray-linear":
          "linear-gradient(0deg, rgba(20,20,20,0.5) 0%, rgba(73,73,85,1) 50%, rgba(20,20,20,0.5) 100%)",
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
        gray1: "#131415",
        gray2: "#18181C",
        gray3: "#222228",
        gray4: "#313139",
      },
    },
  },
  plugins: [],
};
export default config;
