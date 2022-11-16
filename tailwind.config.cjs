/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0045FB",
          DEFAULT: "#0045FB",
        },
      },

      fontFamily: {
        //poppins: ["Poppins", "sans-serif"],
      },
    },
    container: {
      center: true,
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1440px",
    },
  },
  plugins: [],
};

//npm class sort install -D prettier prettier-plugin-tailwindcss
