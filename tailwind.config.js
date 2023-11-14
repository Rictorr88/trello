/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        primary: '#519839'
      },
      fontSize: {
        logo: '14px'
      }
    },
  },
  plugins: [],
};
