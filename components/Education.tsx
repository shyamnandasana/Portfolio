'use client';

import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { educationHistory } from '@/data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-500 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" /> Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-main)]">
            Education Timeline
          </h2>
          <p className="max-w-xl mx-auto text-base text-[var(--text-muted)]">
            My formal engineering degree studies, school foundation, and academic performance.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {educationHistory.map((edu, idx) => (
            <div
              key={edu.id}
              className={`relative bg-[var(--bg-card)] p-6 sm:p-7 rounded-2xl border transition-all shadow-sm ${
                edu.isCurrent 
                  ? 'border-sky-500/50 hover:border-sky-500 shadow-sky-500/5' 
                  : 'border-[var(--border-color)] hover:border-sky-500/30'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[var(--border-color)] pb-5">
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <div className={`p-3 rounded-xl shrink-0 ${
                    edu.isCurrent 
                      ? 'bg-sky-500/15 text-sky-500' 
                      : idx === 1 
                      ? 'bg-emerald-500/15 text-emerald-500' 
                      : 'bg-indigo-500/15 text-indigo-500'
                  }`}>
                    <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-[var(--text-main)]">
                        {edu.degree}
                      </h3>
                      {edu.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                          Pursuing
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-sky-500 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> {edu.institution} • <span className="text-xs text-[var(--text-muted)] font-normal">{edu.location}</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center sm:flex-col sm:items-end gap-2 shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-500/10 text-xs font-semibold text-[var(--text-main)]">
                    <Calendar className="w-3.5 h-3.5 text-sky-500" /> {edu.period}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-xs font-bold text-sky-500">
                    <Award className="w-3.5 h-3.5" /> {edu.score}
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {edu.description}
                </p>

                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {edu.highlights.map((h, hIdx) => (
                      <span
                        key={hIdx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-muted)]"
                      >
                        <CheckCircle2 className="w-3 h-3 text-sky-500" />
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
