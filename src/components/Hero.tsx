import React from 'react';
import { ArrowDown, ArrowUpRight, Download, Sparkles, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ParticleCanvas } from './ParticleCanvas';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Interactive Particle Canvas */}
      <ParticleCanvas />

      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-emerald/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-brand-violet/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Subtle Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-dark-900/90 border border-brand-emerald/30 shadow-lg shadow-brand-emerald/10 mb-8 backdrop-blur-md animate-float">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-emerald"></span>
          </span>
          <span className="text-xs font-mono font-medium text-slate-200">
            Available for UX Design & Performance Marketing Roles · GTA / Toronto
          </span>
        </div>

        {/* Profile Avatar with Glowing Ring */}
        <div className="relative mb-6 group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-[2px] bg-gradient-to-tr from-brand-emerald via-brand-cyan to-brand-violet animate-glow-pulse">
            <img
              src={PERSONAL_INFO.profileImg}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover rounded-full border-2 border-dark-950 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-dark-900 text-brand-emerald border border-brand-emerald/40 p-1 rounded-full shadow-md" title="Verified Designer">
            <CheckCircle2 className="w-4 h-4 fill-brand-emerald text-dark-950" />
          </div>
        </div>

        {/* Main Kinetic Headline */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight text-white max-w-4xl leading-[1.08] mb-6">
          Where <span className="text-gradient-emerald">User Experience</span> Meets{' '}
          <span className="text-gradient-violet">Performance Data</span>.
        </h1>

        {/* Subtitle / Bio Pitch */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8">
          Hi, I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. A 4th-year UX Design student at{' '}
          <span className="text-brand-emerald font-medium">Wilfrid Laurier University</span> and former{' '}
          <span className="text-brand-cyan font-medium">TD Bank Group</span> Digital Performance Marketing Wealth intern. I craft intuitive digital journeys that don't just look stunning—they elevate the metrics that matter.
        </p>

        {/* Fast Skills Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
            <Layers className="w-3.5 h-3.5 text-brand-emerald" />
            Figma Design Systems & Prototypes
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
            <TrendingUp className="w-3.5 h-3.5 text-brand-cyan" />
            Full-Funnel Analytics (CTR, LPV, CPLPV)
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-brand-violet" />
            After Effects Motion & Video
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-brand-emerald via-brand-teal to-brand-cyan text-slate-950 font-bold text-sm rounded-full shadow-xl shadow-brand-emerald/30 hover:shadow-brand-emerald/50 hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <span>Explore Portfolio Work</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>

          <a
            href="#experience"
            className="flex items-center gap-2 px-6 py-3.5 bg-dark-900/80 hover:bg-white/10 text-slate-200 hover:text-white font-medium text-sm rounded-full border border-white/15 transition-all"
          >
            <span>TD Bank Co-op Case Study</span>
            <ArrowUpRight className="w-4 h-4 text-brand-emerald" />
          </a>

          <a
            href={PERSONAL_INFO.resumeUrl}
            download="Hardev-Kamboe-Resume.pdf"
            className="flex items-center gap-2 px-5 py-3.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-sm rounded-full border border-white/10 transition-colors"
          >
            <Download className="w-4 h-4 text-slate-400" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};
