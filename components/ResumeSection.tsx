'use client';

import { FileText, Download, CheckCircle, Sparkles } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)]/50 border-y border-[var(--border-color)]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 text-xs font-semibold uppercase tracking-wider">
          <FileText className="w-3.5 h-3.5" /> Resume / CV
        </div>

        {/* Callout Card */}
        <div className="relative bg-[var(--bg-card)] p-8 sm:p-12 rounded-3xl border border-[var(--border-color)] shadow-xl overflow-hidden space-y-6">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-3 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
              Interested in knowing more about my skills and projects?
            </h2>
            <p className="max-w-xl mx-auto text-sm sm:text-base text-[var(--text-muted)]">
              Download my updated resume to view detailed academic history, technical proficiencies, and GitHub project summaries.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--text-muted)] pt-2 relative z-10">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-sky-500" /> Fresher Profile (.NET focus)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-sky-500" /> Standard PDF Format
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-sky-500" /> Ready for Recruiters
            </span>
          </div>

          {/* Download Action */}
          <div className="pt-4 relative z-10">
            <a
              href={personalInfo.resumePath}
              download="Shyam Nandasana pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-600/25 hover:scale-105 active:scale-95 transition-all"
            >
              <Download className="w-5 h-5" />
              Download Resume
              <Sparkles className="w-4 h-4 opacity-70" />
            </a>
          </div>

          <p className="text-xs text-[var(--text-muted)] italic pt-2">
          </p>
        </div>
      </div>
    </section>
  );
}
