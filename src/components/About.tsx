import React from 'react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';
import { GraduationCap, MapPin, Mail, Phone, BookOpen, Download, Palette, BarChart3, Wand2, Compass } from 'lucide-react';

export const About: React.FC = () => {
  const skillCategories = [
    {
      title: 'UX & Product Design',
      icon: Palette,
      skills: ['Figma Prototyping', 'Design Systems', 'User Research & Personas', 'Wireframing & Flowcharts', 'App Store Review Sentiment Mining', 'Usability Testing'],
      color: 'from-brand-emerald to-brand-teal'
    },
    {
      title: 'Performance Marketing & Analytics',
      icon: BarChart3,
      skills: ['Full-Funnel Analytics (CTR, LPV, CPLPV)', 'Google Ads & App Campaigns', 'Google Analytics 4 (GA4)', 'Growth Pod Recaps', 'Audience Strategy & A/B Testing', 'Stakeholder Briefing'],
      color: 'from-brand-cyan to-blue-500'
    },
    {
      title: 'Creative Tools & Motion',
      icon: Wand2,
      skills: ['Adobe After Effects (Kinetic Typography)', 'Adobe Photoshop (Branding & Retouching)', 'Adobe Illustrator (Vector Marks)', 'Claude AI UI/UX Workflows', 'Midjourney & Ideogram Prompting', 'Canva'],
      color: 'from-brand-violet to-fuchsia-500'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-dark-900/30">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-emerald/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/25 text-brand-emerald text-xs font-mono uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            Background & Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Bridging <span className="text-gradient-emerald">Human Empathy</span> with{' '}
            <span className="text-gradient-violet">Analytical Precision</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base">
            Why choose between creative aesthetics and measurable business performance? My workflow integrates both from day one.
          </p>
        </div>

        {/* Top Split: Bio Story & Key Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-white/10 relative">
            <div className="absolute -top-3 right-8 px-3 py-1 bg-brand-emerald text-dark-950 text-[11px] font-mono font-bold rounded-full uppercase">
              The Intersection
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              "I work where design meets data."
            </h3>
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                As a <strong className="text-white">Digital Performance Marketing intern at TD Bank Group</strong>, I analyzed paid search, social, and display campaigns across the funnel, wrote weekly performance recaps, and turned customer reviews from the App Store and focus group feedback into actionable UX recommendations.
              </p>
              <p>
                Before that, at <strong className="text-white">Breeze Max Web</strong>, I designed Google Ads creative and website wireframes. Throughout my studies at <strong className="text-white">Wilfrid Laurier University</strong>, I've leveraged Design Thinking and Figma to build intuitive, accessible user journeys for projects like Barkyard, Fruit Hub, UBudget, and ISOW.
              </p>
              <p>
                I'm looking to bring both skill sets to a forward-thinking team that cares deeply about how users experience a brand—and how that satisfaction shows up in the numbers.
              </p>
            </div>

            {/* Downloads Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-white/10">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Hardev-Kamboe-Resume.pdf"
                className="flex items-center gap-2 px-5 py-2.5 bg-brand-emerald text-dark-950 font-bold text-xs rounded-full shadow-lg shadow-brand-emerald/20 hover:scale-105 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                Download Resume (PDF)
              </a>

              <a
                href={PERSONAL_INFO.sketchbookUrl}
                download="Hardev-Kamboe-Sketchbook.pdf"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-xs rounded-full border border-white/10 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-brand-violet" />
                View Design Sketchbook (PDF)
              </a>
            </div>
          </div>

          {/* Quick Info & Education Bento */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Profile Snapshot */}
            <div className="glass-card p-6 rounded-3xl border border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                Personal Snapshot
              </h4>
              <div className="space-y-3.5 text-sm">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-emerald">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Based in</span>
                    <span className="text-white font-medium">{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-cyan">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Direct Email</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-brand-cyan transition-colors font-medium">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-violet">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Telephone</span>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-white hover:text-brand-violet transition-colors font-medium">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Highlight */}
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="glass-card p-6 rounded-3xl border border-white/10 relative overflow-hidden">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-emerald/20 to-brand-violet/20 flex items-center justify-center text-brand-emerald border border-brand-emerald/30 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-brand-emerald font-semibold uppercase tracking-wider block mb-1">
                      {edu.period}
                    </span>
                    <h5 className="text-base font-bold text-white leading-snug">
                      {edu.degree}
                    </h5>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {edu.institution} · {edu.location}
                    </p>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${cat.color} p-[1px]`}>
                    <div className="w-full h-full bg-dark-900 rounded-[11px] flex items-center justify-center text-white">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="font-display font-bold text-base text-white">
                    {cat.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/5 border border-white/5 text-slate-300 hover:text-white hover:border-brand-emerald/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
