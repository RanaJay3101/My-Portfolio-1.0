import React from 'react';
import Section from './Section';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Contact" icon={<Mail size={16}/>}>
      <div className="text-center lg:text-left">
        <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl">Get in Touch</h2>
        <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-lg leading-8 text-slate-400">
          My inbox is always open! Whether you have a question, a project proposal, or just want to say hello, I'll get back to you. I'm currently open to new opportunities and collaborations.
        </p>
        <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
          <a
            href="mailto:ranajay206@gmail.com"
            className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 transition-colors"
          >
            Say Hello
          </a>
          <a href="https://www.linkedin.com/in/jayrana31/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold leading-6 text-slate-200 hover:text-cyan-300">
            Connect on LinkedIn <span aria-hidden="true">→</span>
          </a>
        </div>
        <footer className="mt-16 text-sm text-slate-500">
            <p>Coded in Visual Studio Code. Built with React & Tailwind CSS, deployed with Vercel.</p>
            <p>Design inspired by modern portfolio trends. All text is my own.</p>
        </footer>
      </div>
    </Section>
  );
};

export default Contact;