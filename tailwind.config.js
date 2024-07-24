/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: '#0c1915',
        creamGreen: '#E9FCD1',
        subtitleGreen: '#229D7E',
        paragraphGreen: '#BACDC4',
        creamWhite: '#FBFAF8',
        bgBlack: '#1E1E1E'

      },
      fontFamily: {
        sansita: ['Sansita Swashed', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
