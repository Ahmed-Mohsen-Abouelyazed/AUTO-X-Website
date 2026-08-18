import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle({ className = '' }: { className?: string }) {
  const [isDark, setIsDark] = useState<boolean>(true) // Default to dark for industrial vibe
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
    const storedTheme = localStorage.getItem('theme')
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    // Determine initial theme: stored preference > OS preference > default dark
    const shouldBeDark = storedTheme ? storedTheme === 'dark' : systemDark
    setIsDark(shouldBeDark)
    if (shouldBeDark) {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'light')
    }

    // Listen for OS system theme changes if user hasn't set manual preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches)
        if (e.matches) {
          document.documentElement.classList.add('dark')
          document.documentElement.setAttribute('data-theme', 'dark')
        } else {
          document.documentElement.classList.remove('dark')
          document.documentElement.setAttribute('data-theme', 'light')
        }
      }
    }

    mediaQuery.addEventListener('change', handleSystemChange)
    return () => mediaQuery.removeEventListener('change', handleSystemChange)
  }, [])

  const toggleTheme = () => {
    const nextDark = !isDark
    setIsDark(nextDark)
    if (nextDark) {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
  }

  if (!mounted) {
    // Render placeholder with same dimensions to prevent layout shift
    return (
      <div className={`w-8 h-8 rounded-standard border border-border-subtle bg-bg-panel ${className}`} aria-hidden="true" />
    )
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`p-2 rounded-standard text-text-secondary hover:text-text-primary hover:bg-bg-hover border border-border-subtle hover:border-border-standard transition-all cursor-pointer flex items-center justify-center ${className}`}
      aria-label={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
      title={isDark ? 'Switch to Light mode' : 'Switch to Dark mode'}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 animate-in spin-in-90 duration-200" />
      ) : (
        <Moon className="w-4 h-4 text-accent-primary animate-in spin-in-90 duration-200" />
      )}
    </button>
  )
}
