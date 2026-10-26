'use client';

import { useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ExternalLink, 
  Zap, 
  UserCheck, 
  Code2 
} from 'lucide-react';
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
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl shadow-2xl p-6 sm:p-8 text-[var(--text-main)] space-y-7"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2.5 text-[var(--text-muted)] hover:text-[var(--text-main)] bg-slate-500/10 hover:bg-slate-500/20 rounded-full transition-colors z-10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10 border-b border-[var(--border-color)] pb-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-md bg-sky-500/10 text-sky-500 text-xs font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            {project.subtitle && (
              <span className="text-xs text-[var(--text-muted)] font-medium">
                • {project.subtitle}
              </span>
            )}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-main)]">
            {project.name}
          </h3>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed pt-1">
            {project.description}
          </p>
        </div>

        {/* Architecture & Role Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.architectureDetails && (
            <div className="p-4 sm:p-5 rounded-xl bg-slate-500/5 border border-[var(--border-color)] space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-sky-500 flex items-center gap-1.5">
                <Cpu className="w-4 h-4" /> Architecture & Data Flow
              </h4>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {project.architectureDetails}
              </p>
            </div>
          )}

          {project.roleContribution && (
            <div className="p-4 sm:p-5 rounded-xl bg-sky-500/5 border border-sky-500/20 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
                <UserCheck className="w-4 h-4" /> Full-Stack Contribution
              </h4>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {project.roleContribution}
              </p>
            </div>
          )}
        </div>

        {/* Technical Highlights / Interview Deep-Dive Modules */}
        {project.technicalHighlights && project.technicalHighlights.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-sky-500" />
              <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-main)]">
                Core Technical Implementations & Engineering Highlights
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.technicalHighlights.map((topic, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[var(--bg-secondary)]/50 border border-[var(--border-color)] hover:border-sky-500/40 transition-all flex flex-col justify-between space-y-2.5"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <h5 className="text-sm font-bold text-[var(--text-main)]">
                        {topic.title}
                      </h5>
                      {topic.badge && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-sky-500/10 text-sky-500 border border-sky-500/20 shrink-0">
                          {topic.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      {topic.description}
                    </p>
                  </div>

                  {topic.keyDetails && topic.keyDetails.length > 0 && (
                    <ul className="space-y-1 pt-1.5 border-t border-[var(--border-color)]/60">
                      {topic.keyDetails.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-1.5 text-[11px] sm:text-xs text-[var(--text-muted)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Features List */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-main)] flex items-center gap-2">
            <Layers className="w-4 h-4 text-sky-500" /> Key Features & Capabilities
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
          <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-sky-500" /> Technologies Used
          </h4>
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
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-slate-500/10 transition-colors"
          >
            Close Overview
          </button>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-sky-600 hover:bg-sky-500 text-white transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <GithubIcon className="w-4 h-4" />
            View Source on GitHub
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>
      </div>
    </div>
  );
}
