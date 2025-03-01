/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003087', // PayPal blue as requested
          light: '#0070ba',
          dark: '#001c64',
        },
        secondary: {
          DEFAULT: '#009cde',
          light: '#33b1e5',
          dark: '#0077a6',
        },
        success: '#4CAF50',
        warning: '#FFC107',
        danger: '#FF5252',
        info: '#2196F3',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}