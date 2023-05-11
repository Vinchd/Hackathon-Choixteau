/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["montserrat, Arial, sans-serif"],
        montserrat_italic: ["montserrat_italic, montserrat, Arial, sans-serif"],
      },
    },
    colors: {
      primary: "#1A345E",
      secondary: "#F8DE7E",
      tertiary: "#FFFDF8",
    },
  },
  plugins: [],
};
