/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aiBase: '#030712',
        aiCard: '#0f172a',
        aiBorder: '#1e293b',
        aiAccent: '#8b5cf6', // violet-500
        aiSecondary: '#0ea5e9', // sky-500
        aiSuccess: '#10b981', // emerald-500
        textMuted: '#94a3b8', // slate-400
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
