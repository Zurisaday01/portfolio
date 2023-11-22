/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-1': '#00FFF0',
        'primary-2': '#00CEFF',
        'primary-3': '#085061',
        'gray': '#282828',
        'gray-transparent': '#28282857',
        'gray-transparent-strong': '#2828286B',
      }
    },
  },
  plugins: [],
}

