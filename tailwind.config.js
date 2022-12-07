/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      translate: {
        'finput': '172px',
        'finput-s': '200px',
        'sinput': '85px',
        'sinput-s': '112px',
        'tinput': '3px',
        'tinput-s': '23px',
        'frinput': '91px',
        'frinput-s': '64px',
        'one': '85px',
        'two': '112px',
      },
      animation: {
        'all': 'all 4s easy-in-out',
      },
    },
  },
  plugins: [],
}
