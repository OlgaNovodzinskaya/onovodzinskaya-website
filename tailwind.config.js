/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  // theme: {
  //   screens: {
  //     mb: "480px",
  //     tl: "768px",
  //     dt: "1200px",
  //   },
  //   extend: {},
  // },

  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
