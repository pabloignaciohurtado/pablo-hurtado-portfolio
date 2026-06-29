import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Differentiators from './components/Differentiators'
import ImpactStats from './components/ImpactStats'
import LogosWall from './components/LogosWall'
import Experience from './components/Experience'
import Projects from './components/Projects'
import AIProjects from './components/AIProjects'
import Expertise from './components/Expertise'
import Education from './components/Education'
import CTA from './components/CTA'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-teal focus:px-4 focus:py-2 focus:text-white focus:font-semibold"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <About />
        <Differentiators />
        <ImpactStats />
        <LogosWall />
        <Experience />
        <Projects />
        <AIProjects />
        <Expertise />
        <Education />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
      <Analytics />
    </>
  )
}

export default App
