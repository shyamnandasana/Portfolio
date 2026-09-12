'use client';

import { useState } from 'react';

import { ExternalLink, Code2, Info, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';
import { projectsData, Project } from '@/data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)]/50 border-y border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 text-xs font-semibold uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" /> Hands-on Projects
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)]">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-base text-[var(--text-muted)]">
            Practical web applications and REST APIs built using .NET Core, C#, SQL Server, EF Core, and Next.js.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] overflow-hidden hover:border-sky-500/50 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-5 p-6 sm:p-7">

                {/* Header & Category */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-sky-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)] group-hover:text-sky-500 transition-colors">
                    {project.name}
                  </h3>
                </div>

                {/* Short Description */}
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features Preview (Top 4) */}
                <div className="space-y-1.5 pt-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-main)]">Highlights</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {project.features.slice(0, 4).map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                        <span className="truncate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technology.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-[var(--text-muted)] border border-[var(--border-color)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="px-6 py-4 bg-slate-500/5 border-t border-[var(--border-color)] flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-[var(--text-muted)] hover:text-sky-500 flex items-center gap-1 transition-colors"
                >
                  <Info className="w-3.5 h-3.5" /> More Details
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white transition-all flex items-center gap-2 shadow-xs"
                >
                  <GithubIcon className="w-4 h-4" />
                  View on GitHub
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
