import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'error' | 'brand'
  size?: 'sm' | 'md'
}

export function Badge({
  variant = 'default',
  size = 'md',
  className,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: 'bg-transparent text-text-secondary border border-border-subtle',
    accent: 'bg-accent-muted text-accent-primary border-transparent',
    success: 'bg-success-bg text-success border-transparent',
    warning: 'bg-warning-bg text-warning border-transparent',
    error: 'bg-error-bg text-error border-transparent',
    brand: 'bg-brand/10 text-brand border-brand/30',
  }

  const sizes = {
    sm: 'px-2.5 py-0.5 text-micro',
    md: 'px-3 py-1 text-micro',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-medium rounded-pill',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}