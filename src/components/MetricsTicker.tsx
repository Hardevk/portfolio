import React from 'react';
import { METRICS } from '../data/portfolioData';
import { Building2, Smartphone, Video, Award } from 'lucide-react';

const icons = [Building2, Smartphone, Video, Award];

export const MetricsTicker: React.FC = () => {
  return (
    <section className="relative z-10 py-10 px-4 sm:px-6 border-y border-white/5 bg-dark-900/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {METRICS.map((metric, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="relative group p-6 rounded-2xl bg-dark-850/60 border border-white/5 hover:border-brand-emerald/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-emerald/10"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-emerald border border-white/10 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                    Milestone 0{idx + 1}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight mb-1 group-hover:text-brand-emerald transition-colors">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-slate-300 mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-400 font-normal leading-relaxed">
                  {metric.highlight}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
