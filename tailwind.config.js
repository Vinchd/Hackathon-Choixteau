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
      primary: "#BADA55",
      secondary: "",
      tertiary: "",
    },
  },
  plugins: [],
};
