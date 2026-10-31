import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, ExternalLink, CheckCircle, ShieldCheck } from 'lucide-react';

export const CertificationsWall: React.FC = () => {
  return (
    <section id="credentials" className="py-24 px-4 sm:px-6 relative bg-dark-900/40 border-t border-white/5">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-brand-violet/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/25 text-brand-violet text-xs font-mono uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Verified Competencies
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Industry <span className="text-gradient-violet">Certifications</span> & Credentials
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base">
            Professional credentials in generative AI prompting, enterprise analytics, mobile app advertising, and AI-assisted UX architecture.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="glass-card group p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-brand-violet/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-violet/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-brand-violet/10 border border-brand-violet/20 flex items-center justify-center text-brand-violet group-hover:scale-105 transition-transform">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-brand-emerald font-semibold uppercase tracking-wider block">
                        {cert.issuer}
                      </span>
                      <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-brand-violet transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <span className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 text-[10px] font-mono font-bold">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-white/5 text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  Official Credential
                </span>
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-brand-violet/15 hover:bg-brand-violet text-brand-violet hover:text-white font-semibold text-xs rounded-xl transition-all shadow-sm"
                >
                  <span>{cert.verifyLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
