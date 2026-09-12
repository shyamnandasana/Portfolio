'use client';

import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react';
import { educationInfo } from '@/data/portfolioData';

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
            Education
          </h2>
          <p className="max-w-xl mx-auto text-base text-[var(--text-muted)]">
            My formal engineering degree studies and academic focus.
          </p>
        </div>

        {/* Education Card */}
        <div className="bg-[var(--bg-card)] p-6 sm:p-8 rounded-2xl border border-[var(--border-color)] space-y-6 shadow-sm hover:border-sky-500/40 transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--border-color)] pb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-500 shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)]">
                  {educationInfo.degree}
                </h3>
                <p className="text-base font-semibold text-sky-500 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" /> {educationInfo.institution}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-500 text-xs font-semibold self-start sm:self-auto border border-emerald-500/20">
              <Calendar className="w-3.5 h-3.5" /> {educationInfo.status}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-sky-500" /> Academic Overview
            </h4>
            <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              {educationInfo.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
