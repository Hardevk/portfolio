import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, ZoomIn, Tag } from 'lucide-react';
import { PortfolioProject } from '../data/portfolioData';

interface LightboxModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
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

  if (!project || !project.image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-fade-in"
      onClick={onClose}
    >
      {/* Content wrapper */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] bg-dark-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-dark-950/80 hover:bg-white/20 text-white transition-colors border border-white/10 shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Previous Button */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-dark-950/80 hover:bg-brand-emerald hover:text-black text-white transition-all border border-white/10 shadow-lg hidden sm:flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Next Button */}
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-dark-950/80 hover:bg-brand-emerald hover:text-black text-white transition-all border border-white/10 shadow-lg hidden sm:flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Image Frame */}
        <div className="lg:w-7/12 bg-dark-950/60 p-6 flex items-center justify-center min-h-[340px] sm:min-h-[460px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-xl transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>

        {/* Project Meta Information */}
        <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 font-semibold uppercase">
                {project.categoryLabel}
              </span>
              {project.badge && (
                <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-slate-300 border border-white/10">
                  {project.badge}
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
              {project.title}
            </h3>

            <p className="text-sm text-slate-300 font-medium leading-relaxed mb-4">
              {project.description}
            </p>

            {project.details && (
              <p className="text-xs text-slate-400 leading-relaxed mb-6 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                {project.details}
              </p>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
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
          </div>

          {/* Action Link */}
          {project.externalUrl && (
            <a
              href={project.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-brand-emerald text-dark-950 font-bold text-xs rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-brand-emerald/20"
            >
              <span>{project.externalLabel || 'Open Live Preview'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
