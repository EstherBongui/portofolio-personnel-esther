/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5D0D18',        /* Bloodstone pour les accents */
        secondary: '#9FB2AC',      /* Misty Sage pour les secondaires */
        dark: '#5D0D18',           /* Bloodstone pour les textes */
        light: '#FFF9EB',          /* Vanilla Custard pour le fond */
        gray: {
          900: '#5D0D18',          /* Bloodstone */
          800: '#FFF9EB',          /* Vanilla Custard */
          700: '#FFF9EB',          /* Vanilla Custard */
          300: '#9FB2AC',          /* Misty Sage */
        }
      },
      fontFamily: {
        heading: ['Hatton', 'Playfair Display', 'Cormorant Garamond', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
