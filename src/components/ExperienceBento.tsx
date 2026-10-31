import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, CheckCircle2, TrendingUp, Sparkles, Building, ExternalLink } from 'lucide-react';

export const ExperienceBento: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Track Record
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Work Experience & <span className="text-gradient-emerald">Industry Co-ops</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base">
            From tier-one enterprise banking digital performance marketing to high-velocity agency design and AI-assisted prototyping.
          </p>
        </div>

        {/* Featured Experience Spotlight: TD Bank Group */}
        {EXPERIENCES.filter((e) => e.id === 'td-bank').map((exp) => (
          <div
            key={exp.id}
            className="mb-12 relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-dark-850/90 via-dark-900/90 to-dark-950/90 border border-brand-emerald/30 shadow-2xl shadow-brand-emerald/10 overflow-hidden"
          >
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-emerald/20 border border-brand-emerald/40 flex items-center justify-center text-brand-emerald font-bold text-lg font-display">
                  TD
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      {exp.company}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-brand-emerald/20 text-brand-emerald border border-brand-emerald/30">
                      Featured Internship
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 font-medium">
                    {exp.role} · {exp.summary}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-mono font-semibold text-brand-emerald block">
                  {exp.period}
                </span>
                <span className="text-xs text-slate-500">{exp.location}</span>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {exp.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-emerald/20 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Tags footer */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
              <span className="text-xs font-mono text-slate-500 mr-2">Competencies:</span>
              {exp.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 text-xs font-mono rounded-lg bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Other Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXPERIENCES.filter((e) => e.id !== 'td-bank').map((exp) => (
            <div
              key={exp.id}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[11px] font-mono text-brand-violet font-semibold uppercase tracking-wider block mb-1">
                      {exp.period}
                    </span>
                    <h4 className="text-lg sm:text-xl font-display font-bold text-white">
                      {exp.role}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {exp.company} {exp.location ? `· ${exp.location}` : ''}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 font-medium mb-4 italic">
                  {exp.summary}
                </p>

                <ul className="space-y-2 mb-6">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/5 text-slate-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
