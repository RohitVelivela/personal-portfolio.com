/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0A192F', // Deep Navy Blue
          light: '#112240',
          dark: '#020C1B'
        },
        text: {
          DEFAULT: '#8892B0',
          light: '#CCD6F6',
          dark: '#495670'
        },
        navy: {
          DEFAULT: '#0A192F',
          light: '#112240',
          dark: '#020C1B'
        },
        neon: {
          DEFAULT: '#64FFDA',
          light: '#9FFFEB',
          dark: '#4AC29A'
        },
        cyan: {
          DEFAULT: '#33CCCC',
          light: '#5CE1E6',
          dark: '#2B8A8A'
        },
        primary: {
          DEFAULT: 'rgb(var(--color-primary-rgb))',
          light: 'rgb(var(--color-primary-rgb) / 0.8)',
          dark: 'rgb(var(--color-primary-rgb) / 0.9)',
          hover: 'rgb(var(--color-primary-rgb) / 0.7)'
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary-rgb))',
          light: 'rgb(var(--color-secondary-rgb) / 0.8)',
          dark: 'rgb(var(--color-secondary-rgb) / 0.9)'
        },
        accent: {
          DEFAULT: '#64FFDA',
          hover: '#7AFFDF'
        },
        slate: {
          light: '#CCD6F6',
          DEFAULT: '#8892B0',
          dark: '#495670'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        cal: ['Cal Sans', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typewriter': 'typewriter 2s steps(20) forwards',
        'blink': 'blink 1s steps(2) infinite',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 15s linear infinite',
        'counter': 'counter 2s ease-out forwards',
        'grid-flow': 'grid-flow 20s linear infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'ripple': 'ripple 0.6s linear',
        'gradient': 'gradient 8s linear infinite'
      },
      keyframes: {
        glow: {
          '0%': { 'box-shadow': '0 0 5px rgb(100 255 218 / 0.2), 0 0 10px rgb(100 255 218 / 0.2)' },
          '100%': { 'box-shadow': '0 0 20px rgb(100 255 218 / 0.6), 0 0 30px rgb(100 255 218 / 0.4)' }
        },
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        blink: {
          '50%': { borderColor: 'transparent' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'grid-flow': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' }
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        ripple: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' }
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        }
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48 L6 48 L6 6 L54 6 L54 48' stroke='%2364FFDA' stroke-opacity='0.1' fill='none' /%3E%3C/svg%3E\")",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        '300%': '300% 300%',
      }
    },
  },
  safelist: [
    {
      pattern: /bg-(primary|secondary)\/[0-9]+/,
    }
  ],
  plugins: [],
}
