'use client';

import { useEffect } from 'react';

import { X, CheckCircle2, Layers, Cpu, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';
import { Project } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Modal Container */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl shadow-2xl space-y-6 p-6 sm:p-8 text-[var(--text-main)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[var(--text-muted)] hover:text-[var(--text-main)] bg-slate-500/10 rounded-full transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <span className="inline-block px-3 py-1 rounded-md bg-sky-500/10 text-sky-500 text-xs font-semibold uppercase tracking-wider">
            {project.category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">{project.name}</h3>
        </div>


        {/* Description & Architecture */}
        <div className="space-y-4">
          <p className="text-base text-[var(--text-muted)] leading-relaxed">
            {project.description}
          </p>

          {project.architectureDetails && (
            <div className="p-4 rounded-xl bg-slate-500/5 border border-[var(--border-color)] space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-sky-500 flex items-center gap-1.5">
                <Cpu className="w-4 h-4" /> Architecture & Data Flow
              </h4>
              <p className="text-xs text-[var(--text-muted)]">
                {project.architectureDetails}
              </p>
            </div>
          )}
        </div>

        {/* Key Features List */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-main)] flex items-center gap-2">
            <Layers className="w-4 h-4 text-sky-500" /> Key Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-muted)]">
                <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="space-y-2 pt-2 border-t border-[var(--border-color)]">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technology.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-sky-500/10 text-sky-500 border border-sky-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[var(--text-muted)]">
            Source code hosted publicly on GitHub
          </div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-semibold text-sm bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <GithubIcon className="w-4 h-4" />
            View on GitHub
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>
      </div>
    </div>
  );
}
