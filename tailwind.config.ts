import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      screens: {
            sm: "320px",
            md: "500px",
            lg: "768px",
            xl: "900px",
            "2xl": "1268px",
      },
      fontFamily: {
        sans: ['"KiwiMaru"', ...defaultTheme.fontFamily.sans],
        montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
        anon: ['"Anonymous Pro"', ...defaultTheme.fontFamily.sans],
        merienda: ['"Merienda"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        neutral: {
          DEFAULT: "#404040",
          50: "#9C9C9C",
          100: "#929292",
          200: "#7D7D7D",
          300: "#696969",
          400: "#545454",
          500: "#404040",
          600: "#242424",
          700: "#080808",
          800: "#000000",
          900: "#000000",
          950: "#000000",
        },
        gray: {
          DEFAULT: "#D9D9D9",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#EDEDED",
          500: "#D9D9D9",
          600: "#BDBDBD",
          700: "#A1A1A1",
          800: "#858585",
          900: "#696969",
          950: "#5B5B5B",
        },
      },
      boxShadow: {
        card: "2px 4px 4px rgba(0,0,0,0.25)",
        soft: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        softNoTop: "0px 4px 4px -4px rgba(0, 0, 0, 0.25)",
        softNoBottom: "0px -4px 4px -4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-soft": {
          textShadow: "2px 6px 6px rgba(0, 0, 0, 0.25)",
        },
      });
    }),
  ],
};
