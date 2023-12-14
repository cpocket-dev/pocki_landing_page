/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#80bc00',
        secondary: '#749414',
        terciary: '#6a6161',
      },
      width: {
        'swiperCont': '45rem',
      }
    },
  },
  plugins: [],
}

