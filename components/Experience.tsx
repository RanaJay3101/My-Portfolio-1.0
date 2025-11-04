import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import Section from './Section';
import { ArrowRight, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience" icon={<Briefcase size={16}/>}>
      <ol className="group/list">
        {EXPERIENCE_DATA.map((item, index) => (
          <li key={index} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg lg:group-hover:scale-[1.01]"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={item.date}>
                {item.date}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-cyan-300 focus-visible:text-cyan-300 group/link text-base"
                      href={item.companyUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${item.role} at ${item.company}`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {item.role} · <span className="inline-block">{item.company}</span>
                      </span>
                    </a>
                  </div>
                </h3>
                <div className="mt-2 text-sm text-slate-400 space-y-2">
                    {item.description.map((desc, i) => 
                        typeof desc === 'string' ? <p key={i}>{desc}</p> : <div key={i}>{desc}</div>
                    )}
                </div>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                  {item.tech.map((tech, i) => (
                    <li key={i} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">
                        {tech}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-8">
        <a className="inline-flex items-center font-medium leading-tight text-slate-200 group" href="/resume.pdf" target="_blank" rel="noreferrer noopener" aria-label="View Full Résumé (opens in a new tab)">
          <span className="border-b border-transparent pb-px transition group-hover:border-cyan-300 motion-reduce:transition-none">
            View Full Résumé
          </span>
          <ArrowRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"/>
        </a>
      </div>
    </Section>
  );
};

export default Experience;