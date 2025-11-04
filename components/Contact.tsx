
import React from 'react';
import Section from './Section';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Contact">
      <div className="mt-8 text-center lg:text-left">
        <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl">Get in Touch</h2>
        <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-lg leading-8 text-slate-400">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out. My inbox is always open!
        </p>
        <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
          <a
            href="mailto:ranajayh3101@gmail.com"
            className="rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 transition-colors"
          >
            Say Hello
          </a>
          <a href="https://linkedin.com/in/jayrana3101" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold leading-6 text-slate-200 hover:text-cyan-300">
            Connect on LinkedIn <span aria-hidden="true">→</span>
          </a>
        </div>
        <footer className="mt-16 text-sm text-slate-500">
            <p>Built with React & Tailwind CSS. Inspired by modern portfolio designs.</p>
        </footer>
      </div>
    </Section>
  );
};

export default Contact;
