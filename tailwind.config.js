/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F5F4F2',
        surface: '#FFFFFF',
        border: '#E8E6E3',
        ink: '#1A1A1A',
        muted: '#888580',
        accent: '#111111',
        warm: '#C9A97A',
        alert: '#E05252',
        tag: '#F0EEE9',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Thai', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(26,26,26,0.04), 0 2px 8px rgba(26,26,26,0.04)',
      },
    },
  },
  plugins: [],
}
