import { useEffect, useState } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { CaseStudies, Writing } from './components/CaseStudiesWriting';
import { Contact, Footer } from './components/Contact';

const SECTIONS = ['about', 'skills', 'experience', 'projects', 'writing', 'contact'];

export default function App() {
  const [active, setActive] = useState<string>('projects');

  function onNav(id: string) {
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY + 120;
      let current = active;
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      if (current !== active) setActive(current);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [active]);

  return (
    <div className="page" data-screen-label="Portfolio">
      <Nav active={active} onNav={onNav} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CaseStudies />
      <Writing />
      <Contact />
      <Footer />
    </div>
  );
}
