/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0f0f1a',
        'secondary-dark': '#1a1a2e',
        'accent-purple': '#8b5cf6',
        'accent-blue': '#3b82f6',
        'text-primary': '#ffffff',
        'text-secondary': '#a1a1aa',
      },
    },
  },
  plugins: [],
}
