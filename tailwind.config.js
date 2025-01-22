/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}"
    ],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors: {
          background: {
            DEFAULT: "#08062B",
          },
          indigo: {
            DEFAULT: "#240096",
          },
          plum: {
            DEFAULT: "#5706F7",
          },
          violet: {
            DEFAULT: "#935DFF",
          },
          amber: {
            DEFAULT: "#FEB800",
          },
          rose: {
            DEFAULT: "#FF3ACC",
          },
          ivory: {
            DEFAULT: "#FFF6E0",
          },
        },
        fontFamily: {
          nregular: ["Nunito-Regular", "sans-serif"],
          nbold: ["Nunito-Bold", "sans-serif"],
          nblack: ["Nunito-Black", "sans-serif"],
          wsbold: ["WorkSans-Bold", "sans-serif"],
        },
      },
    },
    plugins: [],
  };