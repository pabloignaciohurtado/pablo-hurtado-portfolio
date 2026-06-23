import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import AIProjects from './components/AIProjects'
import Expertise from './components/Expertise'
import Education from './components/Education'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <AIProjects />
        <Expertise />
        <Education />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
