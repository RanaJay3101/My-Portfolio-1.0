import React from 'react';
import { ACHIEVEMENTS_DATA } from '../constants';
import Section from './Section';
import { Trophy } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <Section id="achievements" title="Achievements" icon={<Trophy size={16} />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACHIEVEMENTS_DATA.map((item, index) => (
          <div key={index} className="bg-slate-800/20 p-6 rounded-lg border border-slate-200/10 transition-transform hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="flex flex-col items-start">
              {item.icon}
              <h3 className="text-base font-bold text-slate-200 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;