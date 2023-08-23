/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'header-desktop': "url('/public/assets/images/bg-header-desktop.svg')",
        'header-mobile': "url('/public/assets/images/bg-header-mobile.svg')",
      },
      colors: {
        cyan: {
          primary: 'hsl(180, 29%, 50%)',
          'bg-color': 'hsl(180, 31%, 95%)',
          'filter-color': 'hsl(180, 31%, 95%)',
          dark: 'hsl(180, 8%, 52%)',
          'very-dark': 'hsl(180, 14%, 20%)',
        },
      },
      dropShadow: {
        lg: '0 10px 8px hsla(180, 29%, 50%, 0.2)',
      },
      fontFamily: {
        body: ['League Spartan'],
      },
      fontSize: {
        base: '0.9375rem',
      },
      screens: {
        sm: '376px',
        md: '1153px'
      },
    },
  },
  plugins: [],
}
