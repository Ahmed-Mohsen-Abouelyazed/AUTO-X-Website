import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual button style */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'pill' | 'pill-accent' | 'pill-success' | 'pill-warning'
  /** Size scale */
  size?: 'sm' | 'md' | 'lg'
  /** Shows spinner and disables interaction */
  isLoading?: boolean
  /** Icon placed before text */
  leftIcon?: React.ReactNode
  /** Icon placed after text */
  rightIcon?: React.ReactNode
}

/**
 * Standardized interactive Button with accessible focus rings and loading states.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-fast ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40 focus-visible:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'

  const variants = {
    primary:
      'bg-accent-primary text-white rounded-standard shadow-card hover:bg-accent-hover active:scale-[0.98]',
    secondary:
      'bg-transparent text-text-primary rounded-standard border border-border-standard hover:bg-bg-hover hover:border-border-strong',
    tertiary:
      'bg-transparent text-text-secondary rounded-standard border border-transparent hover:bg-bg-hover hover:text-text-primary',
    pill:
      'bg-transparent text-text-secondary rounded-pill border border-border-subtle hover:bg-bg-hover hover:text-text-primary hover:border-border-standard',
    'pill-accent':
      'bg-accent-primary/10 text-accent-primary rounded-pill border border-accent-border hover:bg-accent-primary/20',
    'pill-success':
      'bg-success-bg text-success rounded-pill border border-success/30',
    'pill-warning':
      'bg-warning-bg text-warning rounded-pill border border-warning/30',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-xs',
    lg: 'px-6 py-3 text-sm',
  }

  return (
    <button
      type={type}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : leftIcon ? (
        <span className="flex-shrink-0" aria-hidden="true">
          {leftIcon}
        </span>
      ) : null}
      {children}
      {!isLoading && rightIcon && (
        <span className="flex-shrink-0" aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </button>
  )
}