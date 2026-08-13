import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'pill' | 'pill-accent' | 'pill-success' | 'pill-warning'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

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
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-colors duration-fast ease-out focus-visible:shadow-focus disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-accent-primary text-white rounded-standard shadow-card hover:bg-accent-hover hover:shadow-accent-glow active:scale-[0.98]',
    secondary: 'bg-transparent text-text-primary rounded-standard border border-border-standard hover:bg-bg-hover hover:border-border-strong',
    tertiary: 'bg-transparent text-text-secondary rounded-standard border border-transparent hover:bg-bg-hover hover:text-text-primary focus-visible:border-border-standard',
    pill: 'bg-transparent text-text-secondary rounded-pill border border-border-subtle hover:bg-bg-hover hover:text-text-primary hover:border-border-standard',
    'pill-accent': 'bg-accent-muted text-accent-primary rounded-pill border-transparent',
    'pill-success': 'bg-success-bg text-success rounded-pill border-transparent',
    'pill-warning': 'bg-warning-bg text-warning rounded-pill border-transparent',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-caption',
    md: 'px-5 py-2.5 text-ui-label',
    lg: 'px-6 py-3 text-ui-label',
  }

  return (
    <button
      type={type}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-4 w-4"
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
        <span className="flex-shrink-0">{leftIcon}</span>
      ) : null}
      {children}
      {!isLoading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </button>
  )
}