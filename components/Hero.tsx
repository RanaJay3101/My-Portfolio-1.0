
import React from 'react';
import { Github, Linkedin, Mail, Code, Phone } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/RanaJay3101', icon: <Github /> },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/jayrana3101', icon: <Linkedin /> },
  { name: 'LeetCode', url: 'https://leetcode.com/ranajay206', icon: <Code /> },
];

const contactInfo = [
  { name: 'Email', value: 'ranajayh3101@gmail.com', href: 'mailto:ranajayh3101@gmail.com', icon: <Mail size={20}/> },
  { name: 'Phone', value: '+91 9104102578', href: 'tel:+919104102578', icon: <Phone size={20}/> },
];

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Jay Rana</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Software Developer at Tata Consultancy Services
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          I build efficient and scalable web applications, transforming ideas into reality.
        </p>
      </div>

      <div className="mt-8">
        {contactInfo.map((item, index) => (
          <a key={index} href={item.href} className="group flex items-center mt-3 text-slate-400 hover:text-cyan-300 transition-colors">
            {item.icon}
            <span className="ml-3">{item.value}</span>
          </a>
        ))}
      </div>

      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        {socialLinks.map((link) => (
          <li key={link.name} className="mr-5 shrink-0">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-slate-400 hover:text-slate-200 transition-colors"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hero;
