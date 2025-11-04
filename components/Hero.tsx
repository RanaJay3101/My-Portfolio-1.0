import React from 'react';
import { SOCIAL_LINKS, CONTACT_INFO } from '../constants';
import { Code } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <div className="flex items-center mb-6">
          <div className="relative mr-6">
            <img 
              src="https://api.dicebear.com/8.x/pixel-art/svg?seed=JayRana" 
              alt="Jay Rana Profile Picture" 
              className="w-36 h-36 rounded-full border-2 border-slate-600 object-cover shadow-xl shadow-cyan-500/20" 
            />
            <div className="absolute bottom-1 right-1 w-7 h-7 bg-green-400 rounded-full border-4 border-slate-900" title="Open to work"></div>
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              <a href="/">Jay Rana</a>
            </h1>
            <div className="mt-2 flex items-center">
              <Code size={20} className="text-slate-400 mr-2" />
              <h2 className="text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Software Developer
              </h2>
            </div>
          </div>
        </div>

        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          I build efficient, scalable, and user-friendly web applications that solve real-world problems.
        </p>
      </div>

      <div className="mt-8">
        {CONTACT_INFO.map((item, index) => (
          <a key={index} href={item.href} className="group flex items-center mt-3 text-slate-400 hover:text-cyan-400 transition-colors">
            {item.icon}
            <span className="ml-3">{item.value}</span>
          </a>
        ))}
      </div>

      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        {SOCIAL_LINKS.map((link) => (
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