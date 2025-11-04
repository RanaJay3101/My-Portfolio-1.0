import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Education from './components/Education';
import CodingDashboard from './components/CodingDashboard';
import { NAV_LINKS } from './constants';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [activeSection, setActiveSection] = useState('about');

  const sections = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', mouseMove);

    const handleLinkHover = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button')) {
        setCursorVariant('link');
      } else {
        setCursorVariant('default');
      }
    };
    document.addEventListener('mouseover', handleLinkHover);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseover', handleLinkHover);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    NAV_LINKS.forEach((link) => {
      const id = link.href.substring(1);
      const el = document.getElementById(id);
      if (el) {
        sections.current[id] = el;
        observer.observe(el);
      }
    });

    return () => {
      Object.values(sections.current).forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: 'rgb(0, 191, 255)', // Electric Blue
      mixBlendMode: 'difference',
    },
    link: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(0, 191, 255, 0.25)', // Electric Blue
      mixBlendMode: 'normal',
    },
  };

  return (
    <div className="text-slate-300">
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={{ background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`}}></div>

      <div
        className="pointer-events-none fixed z-50 rounded-full transition-transform duration-200"
        style={{
          transform: `translate(${variants[cursorVariant].x}px, ${variants[cursorVariant].y}px)`,
          width: `${variants[cursorVariant].width}px`,
          height: `${variants[cursorVariant].height}px`,
          backgroundColor: variants[cursorVariant].backgroundColor,
          mixBlendMode: variants[cursorVariant].mixBlendMode as 'difference' | 'normal'
        }}
      />
      
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <Hero />
            <Header activeSection={activeSection} />
          </header>
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
            <CodingDashboard />
            <Education />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;