/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "orange-500": "hsl(26, 100%, 55%)",
      "orange-300": "hsl(25, 100%, 94%)",
      "blue-800": "hsl(220, 13%, 13%)",
      "blue-400": "hsl(219, 9%, 45%)",
      "blue-300": "hsl(220, 14%, 75%)",
      "blue-200": "hsl(223, 64%, 98%)",
      white: "#FFFFFF",
      black: "hsla(0,0%,0%,.75)", //use 75% opacity
      link: "#0000FF",
    },
    extend: {
      fontFamily: {
        khumb: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
