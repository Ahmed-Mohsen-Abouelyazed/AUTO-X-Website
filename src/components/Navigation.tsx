import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { href: '#how', label: 'Features' },
  { href: '#products', label: 'Products' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 20)
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'bg-bg-panel/80 border-b border-border-subtle',
        'transition-colors duration-base ease-out',
        isScrolled ? 'shadow-card' : '',
        isVisible ? 'translate-y-0' : '-translate-y-full'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <nav className="max-w-container mx-auto px-6 md:px-8 lg:px-16" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
            <a href="/" className="brand-link flex items-center gap-3" aria-label="AUTO-X Home">
              <img
                src="/AUTO-X_Dark_Theme_Logo_Design_V2-removebg-preview.png"
                alt=""
                className="h-9 w-9 object-contain"
                aria-hidden="true"
                width="36"
                height="36"
              />
              <span className="brand-wordmark font-display font-semibold text-display-medium text-text-primary tracking-tight">
                AUTO-X
              </span>
            </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-3">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="nav-link"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                whileHover={{ y: -2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5">
            <span className="hidden md:block w-px h-6 bg-border-subtle" aria-hidden="true" />
            <a href="#how" className="btn-tertiary">
              How it works
            </a>
            <a href="#contact" className="btn-primary">
              Join Waitlist
              <ChevronDown className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-standard text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              className="md:hidden py-6 border-t border-border-subtle animate-slide-down"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="nav-link px-2 py-3 text-left"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t border-border-subtle">
                  <Button type="button" variant="secondary" className="w-full" onClick={() => setIsOpen(false)}>
                    How it works
                  </Button>
                  <Button type="button" variant="primary" className="w-full justify-center" onClick={() => setIsOpen(false)}>
                    Join Waitlist
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}