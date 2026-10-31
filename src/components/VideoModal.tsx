import React, { useEffect } from 'react';
import { X, ExternalLink, Play, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { PortfolioProject } from '../data/portfolioData';

interface VideoModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  project,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!project || !project.videoUrl) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-dark-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-dark-950/80 hover:bg-white/20 text-white transition-colors border border-white/10 shadow-lg"
          aria-label="Close video player"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Frame with 16:9 Aspect Ratio */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            src={`${project.videoUrl}?autoplay=1&rel=0`}
            title={project.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Video Information & Actions */}
        <div className="p-6 sm:p-8 bg-dark-900">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-brand-violet/20 text-brand-violet border border-brand-violet/30 font-semibold uppercase">
                  Motion Graphics
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-slate-300 border border-white/10">
                  After Effects Reel
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                {project.title}
              </h3>
            </div>

            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white font-medium text-xs rounded-full border border-white/10 transition-colors"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5 text-brand-emerald" />
              </a>
            )}
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            {project.description}
          </p>

          {project.details && (
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              {project.details}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono rounded-md bg-white/5 text-slate-400 border border-white/5"
                >
                  <Tag className="w-3 h-3 text-slate-500" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Prev/Next Video Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={onPrev}
                disabled={!hasPrev}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev Reel</span>
              </button>
              <button
                onClick={onNext}
                disabled={!hasNext}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                <span>Next Reel</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
