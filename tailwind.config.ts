import { postcss, type Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'retro-yellow': '#FFE135',
        'retro-orange': '#FF8C00',
        'retro-dark': '#1a1a2e',
        'retro-light': '#f0f0f0',
      },
      fontFamily: {
        'retro': ['Press Start 2P', 'cursive'],
        'mono': ['VT323', 'monospace'],
      },
      boxShadow: {
        'retro': '4px 4px 0px rgba(0, 0, 0, 0.3)',
        'retro-lg': '8px 8px 0px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'blink': 'blink 1s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}

export default config
