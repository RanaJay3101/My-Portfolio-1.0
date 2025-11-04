
import React from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="hidden lg:block lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        {/* This space is intentionally left for the Hero component on large screens */}
      </div>
      <nav className="w-full">
        <ul className="flex flex-col space-y-4">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="group flex items-center py-3">
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  {link.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
