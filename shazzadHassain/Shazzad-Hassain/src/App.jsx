import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import WorkProcess from './components/WorkProcess'
import Services from './components/Service'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  const [showUp, setShowUp] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Refs for each section
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const workprocessRef = useRef(null)
  const servicesRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setShowUp(window.scrollY > 100)
      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'about', ref: aboutRef },
        { id: 'workprocess', ref: workprocessRef },
        { id: 'services', ref: servicesRef },
        { id: 'contact', ref: contactRef },
      ]
      const scrollPos = window.scrollY + window.innerHeight / 3
      let current = 'home'
      for (const section of sections) {
        if (section.ref.current) {
          const offsetTop = section.ref.current.offsetTop
          if (scrollPos >= offsetTop) {
            current = section.id
          }
        }
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      workprocess: workprocessRef,
      services: servicesRef,
      contact: contactRef,
    }
    refs[id]?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='bg-gradient-to-r from-white to-blue-50 scroll-smooth'>
        <Header activeSection={activeSection} onNavClick={scrollToSection} />
        <div ref={homeRef} id="home">
          <Home />
        </div>
        <div ref={aboutRef} id="about">
          <About />
        </div>
        <div ref={workprocessRef} id="workprocess">
          <WorkProcess />
        </div>
        <div ref={servicesRef} id="services">
          <Services />
        </div>
        <div ref={contactRef} id="contact">
          <Contact />
        </div>
        <Footer />
        {showUp && (
          <button
            onClick={() => scrollToSection('home')}
            className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-6 rounded-full shadow-lg hover:bg-blue-800 transition"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        )}
    </div>
  )
}

export default App
