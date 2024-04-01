/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        bgPassword: "url('/public/light.jpg')",
      },
    },
  },
  plugins: [],
};
