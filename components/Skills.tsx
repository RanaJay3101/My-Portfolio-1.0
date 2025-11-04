
import React from 'react';
import { SKILL_DATA } from '../constants';
import Section from './Section';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills">
      {SKILL_DATA.map((category, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-lg font-semibold text-slate-300 mb-4">{category.title}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <div key={skill.name} className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
};

export default Skills;
