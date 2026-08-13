export function initSmoothScroll() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const onClick = (e: MouseEvent) => {
    const anchor = (e.target as HTMLElement)?.closest(
      'a[href*="#"]'
    ) as HTMLAnchorElement | null
    if (!anchor) return

    const url = new URL(anchor.href, window.location.href)
    const samePage = url.pathname === window.location.pathname || url.pathname === '/'
    if (!samePage) return

    const hash = url.hash
    if (!hash || hash.length < 2) return

    const el = document.getElementById(hash.slice(1))
    if (!el) return

    e.preventDefault()

    const rect = el.getBoundingClientRect()
    const absTop = rect.top + window.scrollY
    const offset =
      el.offsetHeight >= window.innerHeight
        ? 96
        : (window.innerHeight - el.offsetHeight) / 2
    const targetY = Math.max(0, absTop - offset)

    window.scrollTo({ top: targetY, behavior: prefersReduced ? 'auto' : 'smooth' })

    let done = false
    const flash = () => {
      if (done) return
      done = true
      el.classList.add('section-arrive')
      window.setTimeout(() => el.classList.remove('section-arrive'), 1000)
    }

    if (prefersReduced) {
      flash()
    } else {
      window.addEventListener('scrollend', flash, { once: true })
      window.setTimeout(flash, 2000)
    }
  }

  document.addEventListener('click', onClick)
  return () => document.removeEventListener('click', onClick)
}
