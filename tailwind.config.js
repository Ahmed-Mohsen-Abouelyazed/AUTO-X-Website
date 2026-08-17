/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dynamic Background Surfaces (CSS variable-driven)
        'bg-deepest': 'var(--bg-deepest)',
        'bg-page': 'var(--bg-page)',
        'bg-panel': 'var(--bg-panel)',
        'bg-elevated': 'var(--bg-elevated)',
        'bg-hover': 'var(--bg-hover)',

        // Text & Content
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'text-quaternary': 'var(--text-quaternary)',

        // Brand Accent (Industrial Blue)
        'accent-primary': 'var(--accent-primary)',
        'accent-hover': 'var(--accent-hover)',
        'accent-muted': 'var(--accent-muted)',
        'accent-border': 'var(--accent-border)',

        // Brand tokens
        'brand': 'var(--brand)',
        'brand-foreground': 'var(--brand-foreground)',
        'brand-muted': 'var(--brand-muted)',
        'accent-warm': 'var(--accent-primary)',

        // Status Colors
        success: 'var(--success)',
        'success-bg': 'var(--success-bg)',
        warning: 'var(--warning)',
        'warning-bg': 'var(--warning-bg)',
        error: 'var(--error)',
        'error-bg': 'var(--error-bg)',

        // Dynamic Borders & Dividers
        'border-subtle': 'var(--border-subtle)',
        'border-standard': 'var(--border-standard)',
        'border-strong': 'var(--border-strong)',
        'border-accent': 'var(--border-accent)',
      },
      fontFamily: {
        sans: ['Geist Variable', 'Geist', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        display: ['Geist Variable', 'Geist', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
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
        'ring': '0px 0px 0px 1px var(--border-subtle)',
        'ambient': '0px 2px 4px rgba(0, 0, 0, 0.1)',
        'card': '0px 0px 0px 1px var(--border-subtle), 0px 4px 12px rgba(0, 0, 0, 0.08), 0px 16px 32px -16px rgba(0, 0, 0, 0.12)',
        'elevated': '0px 0px 0px 1px var(--border-subtle), 0px 8px 24px rgba(0, 0, 0, 0.12), 0px 24px 48px -24px rgba(0, 0, 0, 0.18)',
        'focus': '0px 0px 0px 2px #2F80FF, 0px 0px 0px 4px rgba(47, 128, 255, 0.3)',
        'accent-glow': '0px 0px 24px rgba(47, 128, 255, 0.3), 0px 0px 48px rgba(47, 128, 255, 0.15)',
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