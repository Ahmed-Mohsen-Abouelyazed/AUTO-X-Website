export interface StatusPulseProps {
  status: 'online' | 'warning' | 'offline'
  size?: number
  className?: string
  ariaLabel?: string
}

export function StatusPulse({ status, size = 8, className, ariaLabel }: StatusPulseProps) {
  const statusConfig = {
    online: {
      color: 'var(--color-success, #10b981)',
      animation: 'auplc-pulse-ring 400ms ease-out infinite',
    },
    warning: {
      color: 'var(--color-warning, #f59e0b)',
      animation: 'auplc-pulse-ring 400ms ease-out infinite',
    },
    offline: {
      color: 'var(--color-error, #ef4444)',
      animation: 'none',
    },
  }

  const config = statusConfig[status]

  return (
    <span
      className={`inline-block rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: config.color,
        animation: config.animation,
        boxShadow: config.animation !== 'none' ? '0 0 0 0 currentColor' : 'none',
      } as React.CSSProperties}
      aria-label={ariaLabel || `Status: ${status}`}
      role="status"
    />
  )
}