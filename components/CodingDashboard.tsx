import React from 'react';
import { CODING_STATS_DATA } from '../constants';
import Section from './Section';
import { ExternalLink, CodeSquare } from 'lucide-react';

const CodingDashboard: React.FC = () => {
  return (
    <Section id="coding-profiles" title="Coding Profiles" icon={<CodeSquare size={16} />}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CODING_STATS_DATA.map((profile) => (
          <a
            key={profile.platform}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-lg border border-slate-200/10 bg-slate-800/20 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-slate-800/40 hover:scale-[1.03]"
          >
            <div className="flex justify-between items-start">
              <div className="text-cyan-400">{profile.icon}</div>
              <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-300 transition-colors" />
            </div>
            <h3 className="text-lg font-bold text-slate-200 mt-2">{profile.platform}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {profile.stats.map((stat) => (
                <li key={stat.label} className="flex justify-between">
                  <span className="text-slate-400">{stat.label}</span>
                  <span className="font-medium text-slate-200">{stat.value}</span>
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default CodingDashboard;