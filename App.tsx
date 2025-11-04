
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-slate-900 z-0">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
        
        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <main id="content" className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
              <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24">
                <Hero />
              </div>
              <div className="pt-24 lg:w-1/2 lg:py-24">
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Contact />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
