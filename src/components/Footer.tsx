import React from 'react';
import { ArrowUp, ExternalLink, Heart, Sparkles, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-950 border-t border-white/5 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-display font-bold text-lg text-white">
              {PERSONAL_INFO.name}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
            <span className="text-xs font-mono text-slate-400">
              UX Designer & Digital Performance Marketer
            </span>
          </div>
          <p className="text-xs text-slate-500 max-w-md">
            Wilfrid Laurier University BDes · Designed with modern motion architecture and real data in mind.
          </p>
        </div>

        {/* Center / Navigation links & V1 Archive */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
          <a href="#portfolio" className="hover:text-white transition-colors">
            Work
          </a>
          <span>·</span>
          <a href="#experience" className="hover:text-white transition-colors">
            Experience
          </a>
          <span>·</span>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <span>·</span>
          <a href="#credentials" className="hover:text-white transition-colors">
            Credentials
          </a>
          <span>·</span>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
          <span>·</span>
          {/* Classic V1 Archive Link */}
          <a
            href="./v1/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-brand-emerald hover:text-white border border-brand-emerald/20 transition-colors"
          >
            <span>Classic V1 Site</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Back to top button */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.resumeUrl}
            download="Hardev-Kamboe-Resume.pdf"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-colors"
            title="Download Resume (PDF)"
          >
            <Download className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-brand-emerald/15 hover:bg-brand-emerald text-brand-emerald hover:text-black border border-brand-emerald/30 transition-all shadow-lg shadow-brand-emerald/10"
            aria-label="Scroll back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-[11px] text-slate-500 font-mono">
        © {new Date().getFullYear()} Hardev Kamboe. All rights reserved.
      </div>
    </footer>
  );
};
