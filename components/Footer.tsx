'use client';

import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';
import { personalInfo } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        {/* Copyright */}
        <div className="space-y-1">
          <p className="text-sm font-medium text-[var(--text-main)]">
            © 2026 {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Built with Next.js, TypeScript & Tailwind CSS for .NET / Full Stack Roles
          </p>
        </div>

        {/* Social Links & Back To Top */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl hover:scale-105 transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-[var(--text-muted)] hover:text-[#0a66c2] bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl hover:scale-105 transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 text-[var(--text-muted)] hover:text-amber-500 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl hover:scale-105 transition-all"
            aria-label="Email Contact"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 text-sky-500 bg-sky-500/10 border border-sky-500/20 rounded-xl hover:bg-sky-500 hover:text-white transition-all ml-2"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
