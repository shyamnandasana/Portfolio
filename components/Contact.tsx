'use client';

import { Mail, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';
import { personalInfo } from '@/data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" /> Reach me directly
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)]">
            Contact Me
          </h2>
          <p className="max-w-xl mx-auto text-base text-[var(--text-muted)]">
            I am actively looking for entry-level .NET and Full Stack Developer roles. Feel free to connect or drop a message via email or WhatsApp!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center max-w-3xl mx-auto">
          {/* Email Card */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-4 p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-amber-500/50 hover:scale-[1.01] transition-all shadow-sm group"
          >
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Email</p>
              <p className="text-sm sm:text-base font-semibold text-[var(--text-main)] truncate group-hover:text-amber-500 transition-colors">
                {personalInfo.email}
              </p>
            </div>
          </a>

          {/* WhatsApp / Phone Card */}
          <a
            href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-emerald-500/50 hover:scale-[1.01] transition-all shadow-sm group"
          >
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">WhatsApp</p>
              <p className="text-sm sm:text-base font-semibold text-[var(--text-main)] truncate group-hover:text-emerald-500 transition-colors">
                {personalInfo.phone}
              </p>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-sky-500/50 hover:scale-[1.01] transition-all shadow-sm group"
          >
            <div className="p-3 rounded-xl bg-slate-500/10 text-[var(--text-main)] group-hover:scale-110 transition-transform">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">GitHub</p>
              <p className="text-sm sm:text-base font-semibold text-[var(--text-main)] truncate group-hover:text-sky-500 transition-colors">
                {personalInfo.githubUrl.replace('https://', '').replace(/\/$/, '')}
              </p>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[#0a66c2]/50 hover:scale-[1.01] transition-all shadow-sm group"
          >
            <div className="p-3 rounded-xl bg-[#0a66c2]/10 text-[#0a66c2] group-hover:scale-110 transition-transform">
              <LinkedinIcon className="w-6 h-6" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">LinkedIn</p>
              <p className="text-sm sm:text-base font-semibold text-[var(--text-main)] truncate group-hover:text-[#0a66c2] transition-colors">
                {personalInfo.linkedinUrl.replace('https://www.', '').replace(/\/$/, '')}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
