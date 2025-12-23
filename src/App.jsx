import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Service from './components/services/Service'
import Project from './components/projects/Project'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Collapsible from './components/Collapsible'




function App() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-out',
      delay: 80
    })
  }, [])

  return (
    <div>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Hero isMenuOpen={isMenuOpen}/>
      <Skills />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App