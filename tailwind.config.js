/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image":
          "url('https://images.pexels.com/photos/1427273/pexels-photo-1427273.jpeg')",
        "collections-image":
          "url('https://images.pexels.com/photos/6056777/pexels-photo-6056777.jpeg?auto=compress&cs=tinysrgb&w=800')",
      },
      fontFamily: {
        baskerville: ["Baskervville", "serif"],
      },
    },
  },
  plugins: [],
};
