/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'slider-image':"url('/assets/images/slider/background.svg')"
      }
    },
  },
  plugins: [],
}

