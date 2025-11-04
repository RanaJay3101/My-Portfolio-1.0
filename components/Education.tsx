
import React from 'react';
import { EDUCATION_DATA } from '../constants';
import Section from './Section';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <ol className="group/list">
        {EDUCATION_DATA.map((item, index) => (
          <li key={index} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={item.date}>
                {item.date}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                   <div className="text-base font-medium text-slate-200">{item.institution}</div>
                </h3>
                <p className="text-slate-400">{item.degree}</p>
                 <ul className="mt-2 text-sm text-slate-400">
                    {item.details.map((detail, i) => <li key={i}>{detail}</li>)}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Education;
