/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-primary': '#6D28D9',
        'brand-gradient-start': '#7C3AED',
        'text-main': '#2A3439',
        'text-muted': '#566166',
        'text-support': '#717C82',
        'bg-page': '#F0F4F7',
        'bg-card': '#FFFFFF',
        'bg-empty': '#F3E8FF',
        'border-light': '#D9E4EA',
        'danger-main': '#9E3F4E',
        'danger-light': 'rgba(255, 139, 154, 0.2)',
      }
    },
  },
  plugins: [],
}
