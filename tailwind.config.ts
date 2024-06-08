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
        // gradient: "linear-gradient(90deg, #FF9898, #8054FF)",

        // gradient: "linear-gradient(90deg, #00c6ff, #0072ff)",
        // gradient: "linear-gradient(90deg, #0072ff, #00ff7f)",
        // gradient: "linear-gradient(90deg, #0052d4, #4364f7, #6fb1fc)",
        // gradient: "linear-gradient(90deg, #0072ff, #f06292)",
        // gradient: "linear-gradient(90deg, #0072ff, #f09433)",
        // gradient: "linear-gradient(90deg, #0072ff, #ffeb3b)",
        // gradient: "linear-gradient(90deg, #0072ff, #ff416c)",
        // gradient: "linear-gradient(90deg, #4b6cb7, #182848)",
        gradient: "linear-gradient(90deg, #0052d4, #4364f7, #6fb1fc)",

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
