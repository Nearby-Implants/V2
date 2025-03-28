import type { Config } from 'tailwindcss';
import { colors, typography, spacing, breakpoints } from './src/config/theme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors,
    fontFamily: typography.fonts,
    fontSize: typography.sizes,
    fontWeight: typography.weights,
    lineHeight: typography.lineHeights,
    spacing,
    screens: breakpoints,
    extend: {
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite',
      },
    },
  },
  plugins: [],
};

export default config; 