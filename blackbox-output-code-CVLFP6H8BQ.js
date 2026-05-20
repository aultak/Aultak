/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aultak-black': '#0a0a0a',
        'aultak-gold': '#D4AF37', // Premium Gold
        'aultak-gray': '#1f1f1f',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'], // Luxury feel
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}