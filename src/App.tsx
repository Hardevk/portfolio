import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsTicker } from './components/MetricsTicker';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { ExperienceBento } from './components/ExperienceBento';
import { About } from './components/About';
import { CertificationsWall } from './components/CertificationsWall';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { VideoModal } from './components/VideoModal';
import { PORTFOLIO_PROJECTS, PortfolioProject } from './data/portfolioData';

export const App: React.FC = () => {
  const [selectedImageProject, setSelectedImageProject] = useState<PortfolioProject | null>(null);
  const [selectedVideoProject, setSelectedVideoProject] = useState<PortfolioProject | null>(null);

  // Filter image projects list for previous/next navigation
  const imageProjects = PORTFOLIO_PROJECTS.filter((p) => p.image);
  const currentImageIdx = selectedImageProject
    ? imageProjects.findIndex((p) => p.id === selectedImageProject.id)
    : -1;

  // Filter video projects list for previous/next navigation
  const videoProjects = PORTFOLIO_PROJECTS.filter((p) => p.videoUrl);
  const currentVideoIdx = selectedVideoProject
    ? videoProjects.findIndex((p) => p.id === selectedVideoProject.id)
    : -1;

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-brand-emerald selection:text-black">
      {/* Top Floating Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <MetricsTicker />
        <PortfolioShowcase
          onOpenLightbox={(project) => setSelectedImageProject(project)}
          onOpenVideo={(project) => setSelectedVideoProject(project)}
        />
        <ExperienceBento />
        <About />
        <CertificationsWall />
        <Contact />
      </main>

      {/* Footer with V1 link */}
      <Footer />

      {/* Lightbox Modal for Images */}
      <LightboxModal
        project={selectedImageProject}
        onClose={() => setSelectedImageProject(null)}
        hasPrev={currentImageIdx > 0}
        hasNext={currentImageIdx < imageProjects.length - 1}
        onPrev={() => {
          if (currentImageIdx > 0) {
            setSelectedImageProject(imageProjects[currentImageIdx - 1]);
          }
        }}
        onNext={() => {
          if (currentImageIdx < imageProjects.length - 1) {
            setSelectedImageProject(imageProjects[currentImageIdx + 1]);
          }
        }}
      />

      {/* Theater Video Modal for YouTube Reels */}
      <VideoModal
        project={selectedVideoProject}
        onClose={() => setSelectedVideoProject(null)}
        hasPrev={currentVideoIdx > 0}
        hasNext={currentVideoIdx < videoProjects.length - 1}
        onPrev={() => {
          if (currentVideoIdx > 0) {
            setSelectedVideoProject(videoProjects[currentVideoIdx - 1]);
          }
        }}
        onNext={() => {
          if (currentVideoIdx < videoProjects.length - 1) {
            setSelectedVideoProject(videoProjects[currentVideoIdx + 1]);
          }
        }}
      />
    </div>
  );
};

export default App;
