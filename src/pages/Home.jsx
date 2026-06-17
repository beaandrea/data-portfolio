import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Remove the '#' to isolate the raw ID string
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-grid-pattern font-sans">
      <Navbar />
      
      <main>
        <section id="home" className="scroll-mt-20">
          <Hero />
        </section>
        
        <Services />
        
        <section id="about" className="scroll-mt-20">
          <About />
        </section>
        
        <section id="work" className="scroll-mt-20">
          <Portfolio />
        </section>
        
        <Skills />
        
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>
    </div>
  )
}