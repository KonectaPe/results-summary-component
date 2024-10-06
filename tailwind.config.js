/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightSlateBlue: "hsl(252, 100%, 67%)",
        lightRoyalBlue: "hsl(241, 81%, 54%)",
        violetBlue: "hsla(256, 72%, 46%, 1)",
        persianBlue: "hsla(241, 72%, 46%, 0)",
      },
      backgroundImage: {
        "card-gradient":
          "linear-gradient(to bottom, hsl(252, 100%, 67%), hsl(241, 81%, 54%))",
        "circle-gradient":
          "linear-gradient(to bottom, hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0))",
      },
    },
  },
  plugins: [],
};
