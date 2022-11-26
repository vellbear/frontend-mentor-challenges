/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./dist/**/*.{html,js}",
    "./home/**/*.{html,js}",
  ],
  theme: {
    screens: {
      tablet: "580px",
    },
    fontSize: {
      small: ".75rem",
      normal: "0.875rem",
      large: "2rem",
    },
    extend: {
      colors: {
        "dark-cyan": "hsl(158, 36%, 37%)",
        "very-dark-cyan": "hsl(158, 36%, 19%)",
        cream: "hsl(30, 38%, 92%)",
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
