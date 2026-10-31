import React, { useState, useEffect } from 'react';
import { Download, ExternalLink, Menu, X, Sparkles, Briefcase, User, Award, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section spy
      const sections = ['hero', 'portfolio', 'experience', 'about', 'credentials', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Featured Work', href: '#portfolio', id: 'portfolio', icon: Sparkles },
    { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
    { name: 'About & Skills', href: '#about', id: 'about', icon: User },
    { name: 'Credentials', href: '#credentials', id: 'credentials', icon: Award },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4 ${
          scrolled ? 'bg-dark-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a
            href="#hero"
            className="group flex items-center gap-3 text-white font-display font-bold text-lg sm:text-xl tracking-tight"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-brand-emerald via-brand-teal to-brand-violet p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-brand-emerald/20">
              <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center font-mono font-bold text-sm text-brand-emerald">
                HK
              </div>
            </div>
            <div className="flex flex-col">
              <span className="group-hover:text-brand-emerald transition-colors leading-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-mono text-slate-400 font-normal">
                UX & Performance Marketing
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-dark-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-lg">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-emerald/20 text-brand-emerald border border-brand-emerald/30 shadow-sm shadow-brand-emerald/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-brand-emerald' : 'text-slate-400'}`} />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Link to V1 Archive */}
            <a
              href="./v1/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-colors"
              title="View original classic version archived in v1"
            >
              <span>Classic V1</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            {/* Resume Download CTA */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Hardev-Kamboe-Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-emerald to-brand-teal text-slate-950 font-semibold text-xs rounded-full shadow-lg shadow-brand-emerald/25 hover:shadow-brand-emerald/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Hardev-Kamboe-Resume.pdf"
              className="p-2 bg-brand-emerald text-black rounded-lg"
              title="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-dark-950/95 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 sm:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-emerald/15 text-brand-emerald border border-brand-emerald/30'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4 text-brand-emerald" />
                  {link.name}
                </a>
              );
            })}

            <div className="h-[1px] bg-white/10 my-2" />

            <a
              href="./v1/index.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 text-sm text-slate-400 bg-white/5 rounded-xl border border-white/10"
            >
              <span className="font-mono text-xs">Switch to Classic V1 Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Hardev-Kamboe-Resume.pdf"
              className="flex items-center justify-center gap-2 mt-4 px-5 py-3 bg-gradient-to-r from-brand-emerald to-brand-teal text-black font-semibold text-sm rounded-xl shadow-lg shadow-brand-emerald/25"
            >
              <Download className="w-4 h-4" />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      )}
    </>
  );
};
