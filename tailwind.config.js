/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Mona: ['"Mona Sans"', 'sans-serif'],
      },
      colors: {
        customBlue: '#3D3D4E',
        beige: '#F0F0F0',
        darkBeige: '#D9D9D9',
      },
    },
  },
  plugins: [],
}