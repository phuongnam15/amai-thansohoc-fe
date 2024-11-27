/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E0D21",
        "primary-2": "#83838c",
        "primary-3": "#FDFCCD",
        "primary-4": "#FFE8A3",
        "primary-5": "#73CBD5",
        "primary-6": "#F9F89B",
        "primary-7": "#646464",
        footer: "#FCE9B3",
      },
      fontFamily: {
        "prata-regular": ["Prata-Regular", "sans-serif"],
        "ibmplexsans-regular": ["IBMPlexSans-Regular", "sans-serif"],
      },
      backgroundImage: {
        "galaxy-2": "url('/src/assets/images/backgrounds/galaxy-2.webp')",
        "blur-desktop": "url('/src/assets/images/backgrounds/BG.webp')",
        "blur-desktop-2": "url('/src/assets/images/backgrounds/BG-2.webp')",
        "blur-mobile": "url('/src/assets/images/backgrounds/BG-mobile.svg')",
        'custom-gradient': `linear-gradient(120deg, rgba(217, 217, 217, 0.20) 30.52%, rgba(115, 115, 115, 0.20) 69.48%)`,
        stars: "url('/src/assets/images/backgrounds/stars.svg')",
        "linear-1":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), linear-gradient(90deg, rgba(254, 255, 195, 0.80) 0%, rgba(115, 203, 213, 0.80) 50%, rgba(143, 92, 190, 0.80) 100%)",
        "linear-2":
          "linear-gradient(0deg, #ffffff 0%, #ffffff 100%), linear-gradient(90deg, #fefec3 0%, #73cbd5 50%, #8f5cbe 100%)",
        "linear-3":
          "linear-gradient(180deg, #0E0D21 0%, #00112E 50%, #14172A 100%)",
      },
      boxShadow: {
        "shadow-1": "0px 0px 16px 12px rgba(115, 203, 213, 0.20)",
        "shadow-2": "10px 10px 20px 0px rgba(25, 24, 51, 0.10) inset",
      },
    },
  },
  plugins: [],
};
