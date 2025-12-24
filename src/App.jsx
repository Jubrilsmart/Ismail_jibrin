import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
import Service from './components/services/Service';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';




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
      <Hero isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Skills />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App