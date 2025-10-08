/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF1493',        /* Rose fuchsia pour les accents */
        secondary: '#FF1493',      /* Même rose pour la cohérence */
        dark: '#1E3A8A',           /* Bleu foncé pour les textes */
        light: '#FEF7ED',          /* Fond crème/beige */
        gray: {
          900: '#1E3A8A',          /* Bleu foncé */
          800: '#FEF7ED',          /* Fond crème */
          700: '#FEF7ED',          /* Fond crème */
          300: '#6B7280',          /* Texte gris */
        }
      },
    },
  },
  plugins: [],
}
