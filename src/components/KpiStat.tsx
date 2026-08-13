import { useEffect, useRef, useState } from 'react'

export interface KpiStatProps {
  value: number
  label: string
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
  decimals?: number
}

export function KpiStat({
  value,
  label,
  prefix = '',
  suffix = '',
  duration = 1200,
  className,
  decimals = 0,
}: KpiStatProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const frameRef = useRef<number>()
  const startTimeRef = useRef<number>()

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (reducedMotion) {
      setDisplayValue(value)
      return
    }

    const start = performance.now()
    startTimeRef.current = start

    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // cubic ease-out
      const current = value * eased
      setDisplayValue(current)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [value, duration, reducedMotion])

  const formattedValue = displayValue.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <div className={className}>
      <div className="font-display font-semibold text-display-medium text-text-primary">
        {prefix}
        <span style={{ fontVariantNumeric: 'tabular-nums' }}>{formattedValue}</span>
        {suffix}
      </div>
      <div className="text-body-small text-text-tertiary mt-1">{label}</div>
    </div>
  )
}