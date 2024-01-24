/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        violet: "#5964E0",
        "light-violet": "#939BF4",
        "very-dark-blue": "#19202D",
        midnight: "#121721",
        "light-grey": "#F4F6F8",
        gray: "#9DAEC2",
        "dark-grey": "#6E8098",
      },
    },
  },
  plugins: [],
};
