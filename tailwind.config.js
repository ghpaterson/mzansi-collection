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
        "about-image":
          "url('https://images.pexels.com/photos/9001055/pexels-photo-9001055.jpeg')",
        "goldblatt-image":
          "url('https://framemark.vam.ac.uk/collections/2010EM4833/full/1400,/0/default.jpg')",
        "muholi-image":
          "url('https://framemark.vam.ac.uk/collections/2021NB6175/full/1400,/0/default.jpg')",
        "victor-image":
          "url('https://framemark.vam.ac.uk/collections/2014HA5040/full/1400,/0/default.jpg')",
        "collections-image":
          "url('https://images.pexels.com/photos/3158/black-and-white-africa-animals-wilderness.jpg')",
      },
      fontFamily: {
        baskerville: ["Baskervville", "serif"],
      },
    },
  },
  plugins: [],
};
