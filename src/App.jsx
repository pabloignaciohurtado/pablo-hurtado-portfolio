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
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      <Navbar />
      <main>
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
      <Analytics />
    </>
  )
}

export default App
