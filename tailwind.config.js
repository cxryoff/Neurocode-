/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tech-blue': '#2A5D8A',
        'eco-green': '#4CAF50',
      }
    },
  },
  plugins: [],
}