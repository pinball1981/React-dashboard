/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          50: '#f2fef8',
          100: '#e2fbee',
        },
        teal: {
          500: '#319795',
        },
        gray: {
          800: '#2d3748',
        },
      },
    },
  },
  plugins: [],
};