'use client';

import { Target, Terminal, CheckCircle2, User } from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

export default function About() {
  const highlights = [
    "7th Semester B.Tech Computer Science Engineering student at Darshan University",
    "Primary backend foundation: C# & ASP.NET Core (MVC & Web API)",
    "Database experience: SQL Server, Entity Framework Core, ADO.NET, Stored Procedures",
    "Focus on RESTful web APIs and clean architecture fundamentals",
    "Active learner seeking a fresher role as a .NET / Software Developer"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)]/50 border-y border-[var(--border-color)]">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" /> About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)]">
            Engineering Student & Aspiring .NET Developer
          </h2>
          <p className="max-w-2xl mx-auto text-base text-[var(--text-muted)]">
            A quick overview of my academic background, technical focus, and career objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Narrative (Card 1) */}
          <div className="lg:col-span-7 space-y-5 text-base text-[var(--text-muted)] leading-relaxed bg-[var(--bg-card)] p-6 sm:p-8 rounded-2xl border border-[var(--border-color)] shadow-sm h-full">
            <h3 className="text-xl font-semibold text-[var(--text-main)] flex items-center gap-2">
              <Terminal className="w-5 h-5 text-sky-500" />
              Hello & Welcome!
            </h3>
            {personalInfo.aboutContent.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Right Column: Highlights & Key Facts (Card 2) */}
          <div className="lg:col-span-5 bg-[var(--bg-card)] p-6 sm:p-8 rounded-2xl border border-[var(--border-color)] shadow-sm h-full flex flex-col gap-8">
            {/* Core Goal Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--text-main)]">Career Objective</h4>
                  <p className="text-xs text-[var(--text-muted)]">Fresher / Entry-Level Role</p>
                </div>
              </div>
              <p className="text-sm text-[var(--text-muted)] border-t border-[var(--border-color)] pt-3">
                Eager to land my first full-time role in software development where I can apply C# and .NET skills to build scalable enterprise solutions.
              </p>
            </div>

            {/* Quick Checklist Section */}
            <div className="space-y-5">
              <h4 className="text-sm font-semibold text-[var(--text-main)] uppercase tracking-wider">Key Takeaways</h4>
              <ul className="space-y-4">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
