/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#DCC1AB",
        secondary: "#F5F0EC",
        accent: "#1B5B31",
        hvr: "#854d0e",
        text: "#111111",
      },
      screens: {
        tablet: "640px",
        pc: "1440px",
      },
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
