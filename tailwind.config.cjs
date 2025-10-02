/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#adb5bd",
        tertiary: "#1a1a1a",
        "black-100": "#151515",
        "black-200": "#0d0d0d",
        "white-100": "#f8f9fa",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #000000",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
