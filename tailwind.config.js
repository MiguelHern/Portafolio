/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0074B7", // Azul
        black: "#000000",   // Negro
        accent: "#FFBA52",  // Amarillo
        white75: "rgba(255, 255, 255, 0.50)", // Blanco al 75%
        crema: "#F0F0F0",
        bgsecondary: "#121212"
      },
      fontFamily: {
        montreal: ['PP Neue Montreal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
