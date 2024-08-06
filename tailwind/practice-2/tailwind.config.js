/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#FFF6E9",
        secondary: "#3DC2EC",
      },
      fontFamily: {
        famous: ["poppins", "san-serif"],
      },
    },
  },
  plugins: [],
};
