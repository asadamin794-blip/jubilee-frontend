

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat'],
        playfair: ['Roboto'],
      },

      colors: {
        brand: {
          50: '#f1f6ff',
          100: '#e0ecff',
          200: '#bdd6ff',
          300: '#8cb8ff',
          400: '#5692ff',
          500: '#2f6bff',
          600: '#1e4ce6',
          700: '#173bb6',
          800: '#142f8f',
          900: '#122a76',
        },
        ink: {
          50: '#f6f7fb',
          100: '#eceff7',
          200: '#d1d8ea',
          300: '#aab6d4',
          400: '#7d8db8',
          500: '#5a6a9b',
          600: '#45527a',
          700: '#333e5d',
          800: '#242c41',
          900: '#151a28',
        },
      },

      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.10)',
      },
      borderRadius: {
        '2xl': '1.25rem',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        floaty: 'floaty 8s ease-in-out infinite',
        scroll: 'scroll 20s linear infinite',
      },
    },
  },
  plugins: [],
}
