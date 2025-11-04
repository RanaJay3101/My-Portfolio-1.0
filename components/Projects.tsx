
import React from 'react';
import { PROJECTS_DATA } from '../constants';
import Section from './Section';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects">
      <ul className="group/list">
        {PROJECTS_DATA.map((project, index) => (
          <li key={index} className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:col-span-8">
                <h3 className="font-medium leading-snug text-slate-200">
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-cyan-300 focus-visible:text-cyan-300 group/link text-base"
                    href={project.githubUrl || project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={project.title}
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>{project.title}
                      {project.liveUrl && <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"/>}
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal text-slate-400">{project.description}</p>
                <div className="mt-2 flex items-center space-x-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub repository" className="text-slate-400 hover:text-cyan-300">
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label="Live demo" className="text-slate-400 hover:text-cyan-300">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                <ul className="mt-2 flex flex-wrap">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300">
                        {tech}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Projects;
