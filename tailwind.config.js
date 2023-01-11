/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
    theme: {
      extend: {
        fontFamily: {
          body: ['Raleway'],
          bodyalt: ['SF Pro Display'],
        },
        keyframes: {
          wiggle: {
            '0%': { display: 'none', opacity: '0' },
            '80%': { display: 'none', opacity: '0' },
            '100%': { display: 'block', opacity: '1' },
          }
        },
        animation: {
          wiggle: 'wiggle 1s ease-in-out',
        },
        boxShadow: {
          card: '0px 0px 20px rgba(223, 223, 223, 0.15)',
          drop: '0px 4px 14px rgba(133, 133, 133, 0.1)',
        },
        dropShadow: {
          drop: '0px 4px 14px rgba(133, 133, 133, 0.1)',
          dropActive: '0px 4px 14px rgba(255, 183, 0, 0.1)'
        }
      },
    },
    plugins: [],
  }
