'use client';

import { Mail, ArrowDown, Download, Code, Database, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';
import { personalInfo } from '@/data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl dark:bg-sky-500/10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-3xl dark:bg-indigo-500/10"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Fresher Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
          Aspiring .NET & Full Stack Developer • {personalInfo.semester} Student
        </div>

        {/* Heading & Title */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-main)]">
            Hi, I&apos;m <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[var(--text-muted)] tracking-tight">
            {personalInfo.title}
          </p>
        </div>

        {/* Short Intro */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
          {personalInfo.shortBio}
        </p>

        {/* Tech Focus Pill Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)]">
            <Code className="w-3.5 h-3.5 text-sky-500" /> C# & ASP.NET Core
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)]">
            <Database className="w-3.5 h-3.5 text-emerald-500" /> SQL Server & EF Core
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)]">
            <Layers className="w-3.5 h-3.5 text-indigo-500" /> Web APIs & Next.js
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-xl text-white bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-600/25 dark:shadow-sky-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            View Projects
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.resumePath}
            download="Shyam-Resume.pdf"
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-xl text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:bg-[var(--bg-card-hover)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-sky-500" />
            Download Resume
          </a>
        </div>

        {/* Social Icons & Email */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-[var(--text-muted)] hover:text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl hover:border-sky-500/50 hover:scale-110 transition-all shadow-sm"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-[var(--text-muted)] hover:text-[#0a66c2] bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl hover:border-[#0a66c2]/50 hover:scale-110 transition-all shadow-sm"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 text-[var(--text-muted)] hover:text-amber-500 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl hover:border-amber-500/50 hover:scale-110 transition-all shadow-sm"
            aria-label="Email Contact"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
