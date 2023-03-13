/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      orange: "#FF9383",
      black: "#000000",
      white: "#FFFFFF",
      gray: "#757575",
      darkgray: "#524F4C",
      green: "#B1CC33",
    },
  },

  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
