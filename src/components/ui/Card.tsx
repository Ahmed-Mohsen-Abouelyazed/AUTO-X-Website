import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'panel' | 'elevated'
  hover?: boolean
}

export function Card({
  variant = 'default',
  hover = true,
  className,
  children,
  ...props
}: CardProps) {
  const variants = {
    default: 'bg-bg-panel border border-border-subtle rounded-card shadow-card p-6',
    panel: 'bg-bg-panel border border-border-subtle rounded-card shadow-card p-6',
    elevated: 'bg-bg-elevated border border-border-standard rounded-panel shadow-elevated p-8',
  }

  const hoverStyles = hover
    ? 'transition-colors duration-base ease-out hover:border-border-standard hover:shadow-elevated'
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

type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  )
}

type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement>

export function CardTitle({ className, children, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn('text-section-heading text-text-primary', className)}
      {...props}
    >
      {children}
    </h3>
  )
}

type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>

export function CardDescription({ className, children, ...props }: CardDescriptionProps) {
  return (
    <p className={cn('text-body text-text-secondary mt-2', className)} {...props}>
      {children}
    </p>
  )
}

type CardContentProps = React.HTMLAttributes<HTMLDivElement>

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  )
}

type CardFooterProps = React.HTMLAttributes<HTMLDivElement>

export function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div className={cn('mt-4 pt-4 border-t border-border-subtle flex items-center gap-3', className)} {...props}>
      {children}
    </div>
  )
}