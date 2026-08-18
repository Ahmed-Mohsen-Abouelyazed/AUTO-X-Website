/**
 * Initializes accessible smooth scrolling for intra-page anchor links.
 * Respects prefers-reduced-motion media query.
 */
export function initSmoothScroll(): () => void {
  if (typeof window === 'undefined') {
    return () => {}
  }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const onClick = (e: MouseEvent) => {
    const anchor = (e.target as HTMLElement)?.closest('a[href*="#"]') as HTMLAnchorElement | null
    if (!anchor) return

    const url = new URL(anchor.href, window.location.href)
    const samePage = url.pathname === window.location.pathname || url.pathname === '/'
    if (!samePage) return

    const hash = url.hash
    if (!hash || hash.length < 2) return

    const targetId = decodeURIComponent(hash.slice(1))
    const el = document.getElementById(targetId)
    if (!el) return

    e.preventDefault()

    const rect = el.getBoundingClientRect()
    const absTop = rect.top + window.scrollY
    const offset = 96
    const targetY = Math.max(0, absTop - offset)

    window.scrollTo({
      top: targetY,
      behavior: prefersReduced ? 'auto' : 'smooth',
    })

    // Update browser URL hash without jump
    window.history.pushState(null, '', hash)
  }

  document.addEventListener('click', onClick)
  return () => document.removeEventListener('click', onClick)
}
