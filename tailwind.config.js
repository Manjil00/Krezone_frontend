/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Mona: ['"Mona Sans"', 'sans-serif'],
      },
      colors: {
        customBlue: '#2E4D70',
        beige: '#f5e2ab',
      },
    },
  },
  plugins: [],
}