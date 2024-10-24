/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#1C7540",
      },
      fontFamily: {
        "segoeui": ["Segoe-UI", 'sans-serif'],
        "segoeui-bold": ["Segoe-UI-Bold", 'sans-serif'],
        "lora-regular": ["Lora-Regular", 'sans-serif'],
        "lora-medium": ["Lora-Medium", 'sans-serif'],
        "lora-semibold": ["Lora-Semibold", 'sans-serif'],
        "lora-bold": ["Lora-Bold", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
