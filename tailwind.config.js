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
        beige: '#F0F0F0',
      },
    },
  },
  plugins: [],
}