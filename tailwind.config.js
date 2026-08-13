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
        // Background Surfaces
        'bg-deepest': '#050607',
        'bg-page': '#0a0c0e',
        'bg-panel': '#111418',
        'bg-elevated': '#1a1e24',
        'bg-hover': '#22272e',

        // Text & Content
        'text-primary': '#f0f2f5',
        'text-secondary': '#b8bcc8',
        'text-tertiary': '#8a8f9a',
        'text-quaternary': '#5c616a',

        // Brand Accent (Industrial Violet)
        'accent-primary': '#6d5dfc',
        'accent-hover': '#8a7eff',
        'accent-muted': '#3d366b',
        'accent-border': '#4d46a0',

        // Brand tokens (for @apply in CSS)
        'brand': '#6d5dfc',
        'brand-foreground': '#fafafa',
        'brand-muted': '#3d366b',
        'accent-warm': '#f59e0b',

        // Status Colors
        success: '#10b981',
        'success-bg': 'rgba(16, 185, 129, 0.15)',
        warning: '#f59e0b',
        'warning-bg': 'rgba(245, 158, 11, 0.15)',
        error: '#ef4444',
        'error-bg': 'rgba(239, 68, 68, 0.15)',

        // Borders & Dividers
        'border-subtle': 'rgba(255, 255, 255, 0.04)',
        'border-standard': 'rgba(255, 255, 255, 0.08)',
        'border-strong': 'rgba(255, 255, 255, 0.12)',
        'border-accent': 'rgba(109, 93, 252, 0.3)',

        // Light Mode
        'bg-page-light': '#fafbfc',
        'bg-panel-light': '#ffffff',
        'text-primary-light': '#0d1117',
        'text-secondary-light': '#424a5a',
        'border-light': '#d0d7e0',
      },
      fontFamily: {
        sans: ['Geist Variable', 'Geist', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        display: ['Space Grotesk Variable', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-hero': ['3.5rem', { lineHeight: '1.00', letterSpacing: '-2.24px', fontWeight: '600' }],
        'display-large': ['3rem', { lineHeight: '1.05', letterSpacing: '-1.92px', fontWeight: '600' }],
        'display-medium': ['2.5rem', { lineHeight: '1.10', letterSpacing: '-1.6px', fontWeight: '600' }],
        'section-heading': ['2rem', { lineHeight: '1.15', letterSpacing: '-1.28px', fontWeight: '600' }],
        'sub-heading-large': ['1.5rem', { lineHeight: '1.33', letterSpacing: '-0.96px', fontWeight: '600' }],
        'sub-heading': ['1.25rem', { lineHeight: '1.40', letterSpacing: '-0.8px', fontWeight: '600' }],
        'body-large': ['1.25rem', { lineHeight: '1.70', fontWeight: '400' }],
        'body': ['1.06rem', { lineHeight: '1.65', fontWeight: '400' }],
        'body-small': ['0.94rem', { lineHeight: '1.60', fontWeight: '400' }],
        'ui-label': ['0.88rem', { lineHeight: '1.40', fontWeight: '500' }],
        'caption': ['0.81rem', { lineHeight: '1.50', fontWeight: '400' }],
        'micro': ['0.69rem', { lineHeight: '1.40', fontWeight: '500' }],
        'mono-body': ['0.88rem', { lineHeight: '1.60', fontWeight: '400' }],
        'mono-caption': ['0.75rem', { lineHeight: '1.50', fontWeight: '500' }],
        'mono-label': ['0.69rem', { lineHeight: '1.40', fontWeight: '500' }],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '32': '128px',
      },
      borderRadius: {
        'micro': '2px',
        'subtle': '4px',
        'standard': '6px',
        'card': '8px',
        'panel': '12px',
        'pill': '9999px',
        'circle': '50%',
      },
      boxShadow: {
        'ring': '0px 0px 0px 1px rgba(255, 255, 255, 0.06)',
        'ambient': '0px 2px 4px rgba(0, 0, 0, 0.2)',
        'card': '0px 0px 0px 1px rgba(255, 255, 255, 0.06), 0px 4px 12px rgba(0, 0, 0, 0.25), 0px 16px 32px -16px rgba(0, 0, 0, 0.3)',
        'elevated': '0px 0px 0px 1px rgba(255, 255, 255, 0.08), 0px 8px 24px rgba(0, 0, 0, 0.3), 0px 24px 48px -24px rgba(0, 0, 0, 0.4)',
        'focus': '0px 0px 0px 2px #6d5dfc, 0px 0px 0px 4px rgba(109, 93, 252, 0.3)',
        'accent-glow': '0px 0px 24px rgba(109, 93, 252, 0.4), 0px 0px 48px rgba(109, 93, 252, 0.2)',
      },
      transitionDuration: {
        'fast': '100ms',
        'base': '150ms',
        'slow': '250ms',
        'slower': '350ms',
      },
      transitionTimingFunction: {
        'out': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      maxWidth: {
        'container': '1200px',
        'hero': '800px',
        'text': '720px',
        'data': '960px',
      },
    },
  },
  plugins: [],
}