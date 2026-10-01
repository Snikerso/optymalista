/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#FACD2D",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "Helvetica", "sans-serif"],
        ibm: [
          "var(--font-ibm-plex-sans)",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
