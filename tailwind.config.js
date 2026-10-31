/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#05070a',
          900: '#080c14',
          850: '#0d131f',
          800: '#121a2a',
          700: '#1b263b',
          600: '#2b3b55',
        },
        brand: {
          emerald: '#10b981',
          teal: '#14b8a6',
          violet: '#8b5cf6',
          purple: '#a855f7',
          cyan: '#06b6d4',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        glowPulse: {
          '0%': { opacity: '0.4', filter: 'blur(40px)' },
          '100%': { opacity: '0.8', filter: 'blur(60px)' },
        }
      }
    },
  },
  plugins: [],
}
