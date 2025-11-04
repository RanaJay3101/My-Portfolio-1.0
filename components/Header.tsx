import React from 'react';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  return (
    <nav className="hidden lg:block" aria-label="In-page navigation">
      <ul className="mt-16 w-max">
        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <li key={link.name}>
              <a href={link.href} className="group flex items-center py-3">
                <span
                  className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                    isActive ? 'w-16 bg-slate-200' : ''
                  }`}
                ></span>
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                    isActive ? 'text-slate-200' : ''
                  }`}
                >
                  {link.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;