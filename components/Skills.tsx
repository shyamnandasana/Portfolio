'use client';

import { Cpu, Server, Database, Layout, Wrench, Check } from 'lucide-react';
import { skillCategories } from '@/data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Backend Development':
        return <Server className="w-5 h-5 text-sky-500" />;
      case 'Database Management':
        return <Database className="w-5 h-5 text-emerald-500" />;
      case 'Frontend Engineering':
        return <Layout className="w-5 h-5 text-indigo-500" />;
      case 'Tools & Utilities':
        return <Wrench className="w-5 h-5 text-amber-500" />;
      default:
        return <Cpu className="w-5 h-5 text-sky-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" /> Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)]">
            Skills & Technologies
          </h2>
          <p className="max-w-2xl mx-auto text-base text-[var(--text-muted)]">
            Technologies and frameworks I work with for software development and relational database management.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[var(--bg-card)] p-6 sm:p-7 rounded-2xl border border-[var(--border-color)] hover:border-sky-500/40 transition-all duration-300 shadow-sm hover:shadow-md space-y-5"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-500/10 dark:bg-slate-800">
                  {getCategoryIcon(category.title)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-main)]">{category.title}</h3>
                  <p className="text-xs text-[var(--text-muted)]">{category.description}</p>
                </div>
              </div>

              {/* Skills Badge Container (No fake percentage bars) */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                      skill.highlight
                        ? 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30 font-semibold shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800/80 text-[var(--text-main)] border border-[var(--border-color)] hover:border-slate-400 dark:hover:border-slate-600'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5 text-sky-500" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Practical Knowledge Note */}
        <div className="p-4 sm:p-5 rounded-xl bg-sky-500/5 border border-sky-500/20 text-center max-w-3xl mx-auto space-y-1">
          <p className="text-xs sm:text-sm font-medium text-[var(--text-main)]">
            💡 Practical Application
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            All skills listed above have been applied in academic coursework, lab exercises, and hands-on projects available on GitHub.
          </p>
        </div>
      </div>
    </section>
  );
}
