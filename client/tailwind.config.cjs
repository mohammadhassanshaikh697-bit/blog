/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  // The typography plugin is a Tailwind plugin, so it goes here.
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
