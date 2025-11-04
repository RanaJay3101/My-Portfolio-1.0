
import React from 'react';
import { SKILL_DATA } from '../constants';
import Section from './Section';
import { WandSparkles } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills" icon={<WandSparkles size={16}/>}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_DATA.map((category) => (
          <div key={category.title} className="p-6 rounded-lg border border-slate-200/10 bg-slate-800/20 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-slate-800/40 hover:shadow-lg hover:shadow-cyan-500/10">
            <h3 className="text-lg font-semibold text-slate-200 mb-4">{category.title}</h3>
            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <li key={skill.name} className="flex items-center text-slate-300">
                  <span className="text-cyan-400 mr-3">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;