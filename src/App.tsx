import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Products } from './components/Products'
import { About } from './components/About'
import { Contact } from './components/Contact'

function App() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <Features />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App