import { useState, useEffect, useCallback } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const navLinks = [
  { href: '#problem', label: 'Problem' },
  { href: '#comparison', label: 'Why AUTO-X' },
  { href: '#standards', label: 'Standards' },
  { href: '#platx-os', label: 'PlatX OS' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#products', label: 'Products' },
  { href: '#security', label: 'Security' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

/**
 * Top navigation bar with theme-aware square logos, transparent animated buttons,
 * center-screen smooth scrolling, and section flash animation.
 */
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isDark, setIsDark] = useState(true)

  // Track dark mode for logo image swap
  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    updateTheme()

    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme'],
    })

    return () => observer.disconnect()
  }, [])

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)

    const isBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50
    if (isBottom) {
      setActiveSection('contact')
      return
    }

    const sections = navLinks.map((link) => link.href.substring(1))
    const scrollPos = window.scrollY + window.innerHeight / 3

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i])
      if (el && el.offsetTop <= scrollPos) {
        setActiveSection(sections[i])
        break
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleScroll, isOpen])

  // Center-Viewport Smooth Scroll with Left-to-Right Section Flash
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetEl = document.getElementById(targetId)

    if (targetEl) {
      setIsOpen(false)
      setActiveSection(targetId)

      // Calculate scroll position to place section in vertical center of viewport
      const elementRect = targetEl.getBoundingClientRect()
      const absoluteElementTop = elementRect.top + window.pageYOffset
      const targetCenter = absoluteElementTop - window.innerHeight / 2 + targetEl.clientHeight / 2

      window.scrollTo({
        top: Math.max(0, targetCenter),
        behavior: 'smooth',
      })

      // Trigger left-to-right section flash highlight animation
      targetEl.classList.remove('section-flash-highlight')
      void targetEl.offsetWidth // Force reflow
      targetEl.classList.add('section-flash-highlight')

      setTimeout(() => {
        targetEl.classList.remove('section-flash-highlight')
      }, 1800)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-bg-panel/90 backdrop-blur-md border-b border-border-standard shadow-sm py-2.5'
          : 'bg-bg-page/80 backdrop-blur-sm border-b border-border-subtle py-3.5'
      }`}
    >
      <nav
        className="max-w-container mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Theme-Aware Transparent Logo & Title */}
        <a
          href="#"
          className="flex items-center gap-3 group flex-shrink-0"
          aria-label="AUTO-X Home"
        >
          <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <img
              src={isDark ? '/logo-dark.png' : '/logo-light.png'}
              alt="AUTO-X Logo"
              width="40"
              height="40"
              className="w-10 h-10 object-contain drop-shadow-sm"
              loading="eager"
            />
          </div>
          <span className="font-bold text-lg tracking-tight text-text-primary group-hover:text-accent-primary transition-colors">
            AUTO-X
          </span>
        </a>

        {/* Desktop Navigation Links with Transparent Background & Hover Motion */}
        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3 py-1.5 text-xs font-medium transition-all duration-200 rounded-standard group cursor-pointer ${
                  isActive
                    ? 'text-accent-primary font-semibold'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover/60 hover:-translate-y-0.5'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent-primary rounded-full animate-in fade-in duration-200" />
                )}
              </a>
            )
          })}
        </div>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="text-xs font-semibold text-text-secondary hover:text-text-primary px-3 py-1.5 rounded-standard hover:bg-bg-hover transition-all cursor-pointer"
          >
            Book Demo
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-standard bg-accent-primary text-white text-xs font-semibold shadow-sm hover:bg-accent-hover transition-all hover:shadow-md hover:scale-[1.02] cursor-pointer"
          >
            <span>Get Pilot Access</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Menu & Theme Toggle Buttons */}
        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="p-2 rounded-standard text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-colors cursor-pointer border border-border-subtle"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="xl:hidden border-t border-border-subtle bg-bg-panel/95 backdrop-blur-md px-6 py-5 shadow-elevated animate-in fade-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 rounded-standard text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-colors"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-border-subtle flex flex-col gap-2 mt-1">
              <a
                href="#contact"
                className="w-full text-center py-2.5 px-4 rounded-standard border border-border-standard text-xs font-medium text-text-primary hover:bg-bg-hover"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Book Demo
              </a>
              <a
                href="#contact"
                className="w-full text-center py-2.5 px-4 rounded-standard bg-accent-primary text-white text-xs font-semibold hover:bg-accent-hover"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Get Pilot Access
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}