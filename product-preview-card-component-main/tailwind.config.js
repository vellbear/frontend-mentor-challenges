/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      tablet: "580px",
      desktop: "1440px",
    },
    fontSize: {
      sm: "0.75rem",
      base: "0.875rem",
      xl: "1.093rem",
      "2xl": "1.367rem",
      "3xl": "1.708rem",
      "4xl": "2.135rem",
      "5xl": "2.670rem",
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
