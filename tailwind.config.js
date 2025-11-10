/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      dropShadow: {
        'logo': '0 0 2em #646cffaa',
        'logo-react': '0 0 2em #61dafbaa',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}