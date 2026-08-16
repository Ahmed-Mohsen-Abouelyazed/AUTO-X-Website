import * as React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface elevation level */
  variant?: 'default' | 'panel' | 'elevated'
  /** Whether to show subtle hover transition */
  hover?: boolean
}

/**
 * Surface card container with consistent border and shadow tokens.
 */
export function Card({
  variant = 'default',
  hover = true,
  className,
  children,
  ...props
}: CardProps) {
  const variants = {
    default: 'bg-bg-page border border-border-standard rounded-card shadow-sm p-6',
    panel: 'bg-bg-panel border border-border-standard rounded-panel shadow-sm p-6 md:p-8',
    elevated: 'bg-bg-elevated border border-border-standard rounded-panel shadow-elevated p-6 md:p-8',
  }

  const hoverStyles = hover
    ? 'transition-all duration-base ease-out hover:border-accent-border hover:shadow-card'
    : ''

  return (
    <div
      className={cn(variants[variant], hoverStyles, className)}
      {...props}
    >
      {children}
    </div>
  )
}

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div className={cn('mb-4 flex flex-col gap-1', className)} {...props}>
      {children}
    </div>
  )
}

export type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>

export function CardTitle({ className, children, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn('text-sub-heading font-semibold text-text-primary', className)}
      {...props}
    >
      {children}
    </h3>
  )
}

export type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>

export function CardDescription({ className, children, ...props }: CardDescriptionProps) {
  return (
    <p className={cn('text-xs text-text-secondary leading-relaxed', className)} {...props}>
      {children}
    </p>
  )
}

export type CardContentProps = React.HTMLAttributes<HTMLDivElement>

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={cn('text-xs text-text-secondary', className)} {...props}>
      {children}
    </div>
  )
}

export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>

export function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div
      className={cn('mt-4 pt-4 border-t border-border-subtle flex items-center justify-between gap-3', className)}
      {...props}
    >
      {children}
    </div>
  )
}