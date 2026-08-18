import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate';
import daisyui from 'daisyui';
// @ts-ignore
import daisyuiThemes from 'daisyui/src/theming/themes';

const config: Config = {
  // Dark mode removed — keep default Tailwind behavior (no explicit dark mode)
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  daisyui: {
    // Keep only the light theme to avoid dark-mode variants
    themes: [
      {
        "light": {
          ...daisyuiThemes["light"],
          primary: '#8CC63F',
          'primary-content': '#0A0E1A',
          'base-100': '#0A0E1A',
          'base-200': '#141A30',
          'base-300': '#1B2340',
          'base-content': '#E8ECF5',
          '.toaster-con': {
            'background-color': '#141A30',
            color: '#E8ECF5',
          },
        },
      },
    ],
  },
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // NutriVKart Athletic Palette
        primary: {
          DEFAULT: '#8CC63F', // Neon lime green
          foreground: '#0A0E1A',
          container: '#7BB336',
        },
        secondary: {
          DEFAULT: '#1B2340', // Navy blue
          foreground: '#ffffff',
          container: '#2A3660',
        },
        surface: {
          DEFAULT: '#0A0E1A', // Dark base
          foreground: '#E8ECF5',
          dim: '#060810',
          bright: '#1B2340',
          container: {
            DEFAULT: '#141A30',
            low: '#0F1322',
            lowest: '#0A0E1A',
            high: '#1B2340',
            highest: '#222C50',
          }
        },
        'on-primary': '#0A0E1A',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#ffffff',
        'on-surface': '#E8ECF5',
        'on-surface-variant': '#9BA5C2',
        brand: {
          DEFAULT: '#8CC63F',
          black: '#0A0E1A',
        },
        outline: {
          DEFAULT: '#2A3660',
          variant: '#3D4D85',
        },
        border: '#2A3660',
        input: '#1B2340',
        ring: '#8CC63F',
        background: '#0A0E1A',
        foreground: '#E8ECF5',
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#141A30',
          foreground: '#9BA5C2',
        },
        accent: {
          DEFAULT: '#8CC63F',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: '#141A30',
          foreground: '#E8ECF5',
        },
        card: {
          DEFAULT: '#141A30',
          foreground: '#E8ECF5',
        },
      },
      borderRadius: {
        lg: '0.25rem',
        md: '0.125rem',
        sm: '0.125rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
      fontFamily: {
        headline: ['Noto Serif', 'serif'],
        body: ['Manrope', 'sans-serif'],
        label: ['Manrope', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindAnimate, daisyui],
};

export default config;
