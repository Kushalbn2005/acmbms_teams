/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
        bellefair: ['"Bellefair"', 'serif'],},
  },
  plugins: [],
}
}

