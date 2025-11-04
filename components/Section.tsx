import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children, icon }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 transition-opacity duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`} 
      aria-label={title}
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          {title}
        </h2>
      </div>
      <div>
        {children}
      </div>
    </section>
  );
};

export default Section;