/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: {
          primary: 'hsl(180, 29%, 50%)',
          'bg-color': 'hsl(180, 52%, 96%)',
          'filter-color': 'hsl(180, 31%, 95%)',
          dark: 'hsl(180, 8%, 52%)',
          'very-dark': 'hsl(180, 14%, 20%)',
        },
      },
      fontSize: {
        base: '0.9375rem',
      },
      fontFamily: {
        body: ['League Spartan'],
      },
    },
  },
  plugins: [],
}
