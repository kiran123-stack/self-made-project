/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Scan your React files for Tailwind classes
    "./public/index.html"
  ],
  theme: {
    extend: {}, // Customize theme here later if needed
  },
  plugins: [], // Add plugins like forms, typography if you want
}
