import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MenuHighlights from './components/MenuHighlights';
import Specials from './components/Specials';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header scrolled={scrolled} />
      <Hero />
      <About />
      <MenuHighlights />
      <Specials />
      <Events />
      <Gallery />
      <Contact />
      <Footer />

      <a
        href="#contact"
        className="fixed bottom-6 right-6 bg-red-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-800 transition-all duration-300 font-semibold z-40 md:hidden"
      >
        Order Now
      </a>
    </div>
  );
}

export default App;
