import { useEffect, useState } from 'react'

export function AuroraBackground() {
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  if (reducedMotion) return null

  return (
    <div
      className="auplc-aurora fixed inset-0 -z-10 pointer-events-none opacity-[0.12]"
      aria-hidden="true"
    />
  )
}