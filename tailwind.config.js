/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Pretendard', 'sans-serif'],
      },
      colors: {
        google: {
          grey: '#F8F9FA',
          text: '#202124',
          subtext: '#5F6368',
          blue: '#1A73E8',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'shimmer': 'shimmer 3s linear infinite',
        'shine': 'shine 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
            '0%': { backgroundPosition: '200% center' },
            '100%': { backgroundPosition: '-200% center' },
        },
        shine: {
            '100%': { transform: 'translateX(100%)' },
        }
      }
    }
  },
  plugins: [],
}
