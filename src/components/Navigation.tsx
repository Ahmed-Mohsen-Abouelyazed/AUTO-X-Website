import { useState, useEffect, useCallback } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { href: '#problem', label: 'Problem' },
  { href: '#pillars', label: 'How it Works' },
  { href: '#platx-os', label: 'PlatX OS' },
  { href: '#products', label: 'Products & Modules' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

/**
 * Top navigation bar with scroll spy, responsive mobile menu drawer, and keyboard accessibility.
 */
export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)

    // Check if bottom of page reached
    const isBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50
    if (isBottom) {
      setActiveSection('contact')
      return
    }

    const sections = navLinks.map((link) => link.href.substring(1))
    const scrollPos = window.scrollY + 120

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

    // ESC key closes mobile menu
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-bg-panel/90 backdrop-blur-md border-b border-border-standard shadow-sm py-3.5'
          : 'bg-bg-page/80 backdrop-blur-sm border-b border-border-subtle py-5'
      }`}
    >
      <nav
        className="max-w-container mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group" aria-label="AUTO-X Home">
          <div className="w-9 h-9 rounded-standard bg-accent-primary/10 border border-accent-border flex items-center justify-center text-accent-primary font-bold transition-transform group-hover:scale-105">
            <span className="font-mono text-sm tracking-tighter">AX</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-lg tracking-tight text-text-primary leading-tight">
              AUTO-X
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-text-tertiary">
              PlatX Platform
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-bg-elevated/70 p-1.5 rounded-pill border border-border-subtle">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-pill text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-white text-accent-primary shadow-sm font-semibold'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-xs font-semibold text-text-secondary hover:text-text-primary px-3 py-2 rounded-standard transition-colors"
          >
            Book a Demo
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-standard bg-accent-primary text-white text-xs font-semibold shadow-sm hover:bg-accent-hover transition-all hover:shadow-md"
          >
            <span>Join Waitlist</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-standard text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-colors cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-border-subtle bg-bg-panel/95 backdrop-blur-md px-6 py-5 shadow-elevated animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 rounded-standard text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-bg-hover"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border-subtle flex flex-col gap-2 mt-2">
              <a
                href="#contact"
                className="w-full text-center py-2.5 px-4 rounded-standard border border-border-standard text-sm font-medium text-text-primary hover:bg-bg-hover"
                onClick={() => setIsOpen(false)}
              >
                Book a Demo
              </a>
              <a
                href="#contact"
                className="w-full text-center py-2.5 px-4 rounded-standard bg-accent-primary text-white text-sm font-semibold hover:bg-accent-hover"
                onClick={() => setIsOpen(false)}
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}