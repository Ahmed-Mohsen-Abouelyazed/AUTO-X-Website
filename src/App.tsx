import { useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { TrustBand } from './components/TrustBand'
import { Problem } from './components/Problem'
import { Features } from './components/Features'
import { PlatXStory } from './components/PlatXStory'
import { Products } from './components/Products'
import { About } from './components/About'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { initSmoothScroll } from '@/lib/scroll'

function App() {
  useEffect(() => initSmoothScroll(), [])

  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <TrustBand />
        <Problem />
        <Features />
        <PlatXStory />
        <Products />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
