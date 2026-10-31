import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/portfolioData';
import { Play, ZoomIn, ExternalLink, Sparkles, Filter, Layers, Film, Image as ImageIcon, PenTool, Cpu, Camera } from 'lucide-react';

interface PortfolioShowcaseProps {
  onOpenLightbox: (project: PortfolioProject) => void;
  onOpenVideo: (project: PortfolioProject) => void;
}

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({
  onOpenLightbox,
  onOpenVideo,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Creative', icon: Sparkles, count: PORTFOLIO_PROJECTS.length },
    { id: 'figma', label: 'Figma UI/UX', icon: Layers, count: PORTFOLIO_PROJECTS.filter((p) => p.category === 'figma').length },
    { id: 'aftereffect', label: 'Motion & Reels', icon: Film, count: PORTFOLIO_PROJECTS.filter((p) => p.category === 'aftereffect').length },
    { id: 'photoshop', label: 'Photoshop Art', icon: ImageIcon, count: PORTFOLIO_PROJECTS.filter((p) => p.category === 'photoshop').length },
    { id: 'illustrator', label: 'Vector & Logos', icon: PenTool, count: PORTFOLIO_PROJECTS.filter((p) => p.category === 'illustrator').length },
    { id: 'ai', label: 'AI Concepts', icon: Cpu, count: PORTFOLIO_PROJECTS.filter((p) => p.category === 'ai').length },
    { id: 'photo', label: 'Photography', icon: Camera, count: PORTFOLIO_PROJECTS.filter((p) => p.category === 'photo').length },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/25 text-brand-emerald text-xs font-mono uppercase tracking-wider mb-3">
            <Filter className="w-3.5 h-3.5" />
            Curated Portfolio Archive
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Selected Work & <span className="text-gradient-emerald">Creative Media</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl text-base">
            Every prototype, motion sequence, brand mark, and visual campaign—accessible with one click.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-emerald to-brand-teal text-slate-950 font-bold shadow-lg shadow-brand-emerald/25 scale-105'
                    : 'bg-dark-900/80 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-black' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-black/20 text-black font-semibold' : 'bg-white/10 text-slate-400'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Animated Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const isVideo = project.category === 'aftereffect';

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="glass-card group rounded-3xl overflow-hidden border border-white/10 hover:border-brand-emerald/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-emerald/10 flex flex-col justify-between"
                >
                  {/* Media Frame */}
                  <div className="relative aspect-[4/3] bg-dark-950/80 overflow-hidden flex items-center justify-center">
                    {isVideo ? (
                      /* Video Card Preview */
                      <div
                        onClick={() => onOpenVideo(project)}
                        className="relative w-full h-full cursor-pointer flex items-center justify-center group/vid bg-gradient-to-br from-dark-900 via-dark-850 to-dark-950"
                      >
                        {/* Video Thumbnail Background */}
                        <div
                          className="absolute inset-0 bg-cover bg-center opacity-40 group-hover/vid:opacity-60 transition-opacity"
                          style={{
                            backgroundImage: `url('https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg')`,
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />

                        {/* Animated Play Button */}
                        <div className="relative z-10 w-16 h-16 rounded-full bg-brand-emerald/90 text-dark-950 flex items-center justify-center shadow-xl shadow-brand-emerald/30 group-hover/vid:scale-115 transition-transform duration-300">
                          <Play className="w-7 h-7 fill-dark-950 ml-1" />
                        </div>

                        {/* Video Badge */}
                        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-brand-emerald">
                          <Film className="w-3 h-3" />
                          <span>Motion Reel</span>
                        </div>
                      </div>
                    ) : (
                      /* Image Card Preview */
                      <div
                        onClick={() => onOpenLightbox(project)}
                        className="relative w-full h-full cursor-pointer flex items-center justify-center group/img overflow-hidden"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-108"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-dark-950/20 group-hover/img:bg-dark-950/50 transition-colors flex items-center justify-center">
                          <div className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-lg">
                            <ZoomIn className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Category Pill */}
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-dark-950/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-slate-300">
                          <span>{project.categoryLabel}</span>
                        </div>
                      </div>
                    )}

                    {/* Top Right Project Badge */}
                    {project.badge && (
                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-brand-emerald/20 text-brand-emerald border border-brand-emerald/30 text-[10px] font-mono font-semibold">
                        {project.badge}
                      </div>
                    )}
                  </div>

                  {/* Card Content & Details */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-brand-emerald transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tags.slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-slate-400 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Card Action Buttons */}
                      <div className="flex items-center gap-2 pt-3 border-t border-white/5">
                        {isVideo ? (
                          <button
                            onClick={() => onOpenVideo(project)}
                            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-brand-emerald/15 hover:bg-brand-emerald text-brand-emerald hover:text-black font-semibold text-xs rounded-xl transition-all"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Play Theater Reel</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => onOpenLightbox(project)}
                            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-xs rounded-xl border border-white/5 transition-colors"
                          >
                            <ZoomIn className="w-3.5 h-3.5" />
                            <span>View Fullscreen</span>
                          </button>
                        )}

                        {project.externalUrl && (
                          <a
                            href={project.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xl bg-white/5 hover:bg-brand-emerald hover:text-black text-slate-400 transition-all border border-white/5"
                            title={project.externalLabel || 'Open Link'}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
