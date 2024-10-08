import colors from "tailwindcss/colors"


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Assurez-vous que les fichiers à surveiller par Tailwind sont inclus
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: colors.neutral[200],
          hover: colors.neutral[300],
          border: colors.neutral[400],
          text: colors.neutral[500],
          dark: colors.neutral[800],
          darkhover: colors.neutral[900],
        },
      },
    },
  },
  plugins: [],
}

