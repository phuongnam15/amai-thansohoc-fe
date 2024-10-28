/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C7540",
        "primary-1": "#245601",
        "primary-2": "#FEF8E7",
        "primary-3": "#FCE9B3",
      },
      fontFamily: {
        segoeui: ["Segoe-UI", "sans-serif"],
        "segoeui-bold": ["Segoe-UI-Bold", "sans-serif"],
        "lora-regular": ["Lora-Regular", "sans-serif"],
        "lora-medium": ["Lora-Medium", "sans-serif"],
        "lora-semibold": ["Lora-Semibold", "sans-serif"],
        "lora-bold": ["Lora-Bold", "sans-serif"],
      },
      backgroundImage: {
        "linear-1":
          "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.6))",
        "linear-2": "linear-gradient(180deg, #E4BEB0 0%, #FFFFFF 100%)",
        "cloud-1": "url('/src/assets/images/backgrounds/cloud-11.webp')",
        "cloud-2": "url('/src/assets/images/backgrounds/cloud-21.webp')",
        "cloud-3": "url('/src/assets/images/backgrounds/cloud-31.webp')",
        "radial-glow":
          "radial-gradient(circle, rgba(249, 218, 127, 1) 0%, rgba(249, 218, 127, 0) 70%)",
      },
      boxShadow: {
        "inset-1": "0px 0px 20px 6px #581C0540 inset",
      },
    },
  },
  plugins: [],
};
