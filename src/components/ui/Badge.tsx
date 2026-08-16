import * as React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual variant reflecting semantic status */
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'error' | 'brand'
  /** Size scale */
  size?: 'sm' | 'md'
}

/**
 * Standardized Badge chip component conforming to AUTO-X design tokens.
 */
export function Badge({
  variant = 'default',
  size = 'md',
  className,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default: 'bg-transparent text-text-secondary border border-border-subtle',
    accent: 'bg-accent-primary/10 text-accent-primary border border-accent-border',
    success: 'bg-success-bg text-success border border-success/30',
    warning: 'bg-warning-bg text-warning border border-warning/30',
    error: 'bg-error-bg text-error border border-error/30',
    brand: 'bg-brand/10 text-brand border border-brand/30',
  }

  const sizes = {
    sm: 'px-2 py-0.5 text-[10px] font-mono',
    md: 'px-2.5 py-1 text-xs font-mono',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-medium rounded-pill transition-colors',
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