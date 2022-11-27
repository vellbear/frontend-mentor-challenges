/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors:{
        "bright-orange": "hsl(31, 77%, 52%)",
        "dark-cyan": "hsl(184, 100%, 22%)",
        "very-dark-cyan": "hsl(179, 100%, 13%)",
        "transparent-white": "hsla(0, 0%, 100%, 0.75)",
        "very-light-gray": "hsl(0, 0%, 95%)",
      },
      fontSize:{
        normal: ".9375rem"
      },
      fontFamily:{
        'bigshoulders': ('Big Shoulders Display', 'cursive'),
        'lexend': ('Lexend Deca', 'sans-serif'),
      }
    },
  },
  plugins: [],
}
