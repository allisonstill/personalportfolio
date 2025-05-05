// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,html}', // adjust based on your project
  ],
  darkMode: 'class', // or 'media' if you prefer auto based on OS
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        'primary-light': 'var(--primary-light)',
        'primary-dark': 'var(--primary-dark)',
        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        success: 'var(--success)',
        'success-foreground': 'var(--success-foreground)',
        warning: 'var(--warning)',
        'warning-foreground': 'var(--warning-foreground)',
        error: 'var(--error)',
        'error-foreground': 'var(--error-foreground)',
      },
      transitionDuration: {
        fast: 'var(--transition-fast)',
        normal: 'var(--transition-normal)',
        slow: 'var(--transition-slow)',
      },
      transitionTimingFunction: {
        'ease-in-out': 'var(--ease-in-out)',
        'ease-in': 'var(--ease-in)',
        'ease-out': 'var(--ease-out)',
        bounce: 'var(--ease-bounce)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
