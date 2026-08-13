import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig
      transition={{ duration: 0.3, ease: 'easeOut' }}
      reducedMotion="user"
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:p-4 focus:bg-brand focus:text-brand-foreground focus:z-50"
      >
        Skip to main content
      </a>
      <App />
    </MotionConfig>
  </StrictMode>
)