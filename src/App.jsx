import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { navLinks } from './data/portfolio'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'

export default function App() {
  const sectionIds = navLinks.map((link) => link.id)
  const activeSection = useScrollSpy(sectionIds)
  useRevealOnScroll()

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
