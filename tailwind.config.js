/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
}

// module.exports = {
//   content: [
//       "./pages/**/*.{js,ts,jsx,tsx}",
//       "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//       extend: {},
//   },
//   plugins: [
//       require("@tailwindcss/forms"),
//       require("tailwind-scrollbar-hide"),
//   ],
// };