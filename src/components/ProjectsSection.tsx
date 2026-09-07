import React, { useState } from 'react';
import { Database, CheckCircle2, Layers, ChevronRight, X, ExternalLink, Activity, ShieldAlert, SlidersHorizontal } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectDataset } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectDataset | null>(null);

  const filters = ['All', 'Autonomous Driving', 'Medical AI', 'NLP & LLMs', 'Geospatial'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-14 sm:py-20 border-b border-[#DFE6E9] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-[#0984E3] uppercase tracking-[0.3em] font-bold block">
                Dataset Production // Projects Archive
              </span>
              <span className="text-[9px] font-mono font-bold uppercase bg-[#EBF5FB] text-[#0984E3] border border-[#AED6F1] px-2 py-0.5">
                Beginner Portfolio (&lt;20 Projects)
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#2D3436]">
              Annotated Datasets & ML Projects (12 Completed)
            </h2>
            <p className="text-xs sm:text-sm text-[#636E72] leading-relaxed">
              Curated showcase of James Muigai's 12 production-grade annotation projects across Computer Vision (CVAT, Roboflow) and NLP corpora, achieving a 99.2% benchmark accuracy.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F1F2F6] border border-[#DFE6E9] text-[10px] font-bold uppercase tracking-wider self-start md:self-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                id={`filter-btn-${filter.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 transition-colors cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-white text-[#0984E3] border border-[#DFE6E9] shadow-[2px_2px_0px_#DFE6E9]'
                    : 'text-[#636E72] hover:text-[#2D3436]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-[#F8F9FA] p-6 sm:p-7 border border-[#DFE6E9] shadow-[4px_4px_0px_#DFE6E9] hover:border-[#0984E3] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Domain & Category Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0984E3] bg-white px-2.5 py-1 border border-[#DFE6E9] shadow-[1px_1px_0px_#DFE6E9]">
                    {project.domain}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#2D3436] bg-[#F1F2F6] px-2.5 py-1 border border-[#DFE6E9]">
                    {project.accuracyRate}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#2D3436] group-hover:text-[#0984E3] transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Project Summary */}
                <p className="text-xs text-[#636E72] leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key Metrics Row */}
                <div className="grid grid-cols-2 gap-2 mb-5 p-3.5 bg-white border border-[#DFE6E9] shadow-[2px_2px_0px_#DFE6E9] font-mono text-xs">
                  <div>
                    <span className="text-[#636E72] block text-[9px] uppercase tracking-wider font-bold">
                      VOLUME LABELED
                    </span>
                    <span className="font-black text-[#2D3436] text-xs sm:text-sm">
                      {project.volume}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#636E72] block text-[9px] uppercase tracking-wider font-bold">
                      VERIFICATION STANDARD
                    </span>
                    <span className="font-black text-[#0984E3] text-xs sm:text-sm">
                      {project.accuracyRate}
                    </span>
                  </div>
                </div>

                {/* Contributions List */}
                <div className="space-y-2 mb-5">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#2D3436]">
                    Key Contributions & QA:
                  </h4>
                  <ul className="space-y-1.5">
                    {project.contributions.map((contrib, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#636E72]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0984E3] shrink-0 mt-0.5" />
                        <span>{contrib}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Taxonomy Sample Chips */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#636E72] block mb-1.5">
                    Taxonomy Classes:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.taxonomySample.map((tax) => (
                      <span
                        key={tax}
                        className="px-2 py-0.5 text-[10px] font-mono font-medium bg-white text-[#2D3436] border border-[#DFE6E9]"
                      >
                        {tax}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with Tools and View Specs Action */}
              <div className="mt-6 pt-4 border-t border-[#DFE6E9] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-[#636E72] font-mono uppercase font-bold">Tools:</span>
                  <div className="flex flex-wrap gap-1">
                    {project.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] font-mono font-bold text-[#2D3436] bg-white border border-[#DFE6E9] px-2 py-0.5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  id={`view-specs-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="px-3 py-1.5 bg-[#2D3436] hover:bg-[#0984E3] text-white text-[10px] font-bold uppercase tracking-widest cursor-pointer shadow-[2px_2px_0px_#DFE6E9] hover:shadow-[2px_2px_0px_#0767B1] transition-all inline-flex items-center gap-1"
                >
                  <span>Inspect</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detailed Inspection Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D3436]/60 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white border-2 border-[#2D3436] max-w-2xl w-full p-6 sm:p-8 shadow-[8px_8px_0px_#2D3436] max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-[#DFE6E9] pb-4">
              <div>
                <span className="text-[9px] font-mono text-[#0984E3] uppercase tracking-[0.2em] font-bold">
                  {selectedProject.domain} // SPECIFICATION
                </span>
                <h3 className="text-lg font-black uppercase text-[#2D3436] mt-0.5">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-7 h-7 border border-[#DFE6E9] bg-[#F1F2F6] hover:bg-[#2D3436] hover:text-white text-[#2D3436] font-mono text-xs flex items-center justify-center font-bold"
              >
                ✕
              </button>
            </div>

            <div className="py-5 space-y-5 text-sm text-[#2D3436]">
              <div>
                <h4 className="font-bold uppercase tracking-wider text-xs text-[#2D3436] mb-1">
                  Project Overview
                </h4>
                <p className="text-xs text-[#636E72] leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 p-3.5 bg-[#F8F9FA] border border-[#DFE6E9] font-mono text-xs">
                <div>
                  <span className="text-[#636E72] block text-[10px] uppercase font-bold">Total Volume:</span>
                  <span className="font-black text-[#2D3436] text-sm">{selectedProject.volume}</span>
                </div>
                <div>
                  <span className="text-[#636E72] block text-[10px] uppercase font-bold">QA Consensus:</span>
                  <span className="font-black text-[#0984E3] text-sm">{selectedProject.accuracyRate}</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-wider text-xs text-[#2D3436] mb-2">
                  Detailed Contributions & Protocol
                </h4>
                <ul className="space-y-2">
                  {selectedProject.contributions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#636E72]">
                      <CheckCircle2 className="w-4 h-4 text-[#0984E3] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-wider text-xs text-[#2D3436] mb-2">
                  Class Taxonomy & Labels
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.taxonomySample.map((tax) => (
                    <span
                      key={tax}
                      className="px-2.5 py-1 text-xs font-mono font-medium bg-[#F1F2F6] text-[#2D3436] border border-[#DFE6E9]"
                    >
                      {tax}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#F8F9FA] border border-[#0984E3] text-xs text-[#2D3436] space-y-1">
                <div className="font-bold uppercase tracking-wide flex items-center gap-1.5 text-[#0984E3]">
                  <Activity className="w-4 h-4" />
                  Quality Assurance Protocol
                </div>
                <p className="text-xs text-[#636E72]">
                  Every batch went through double-blind consensus checks with automated geometric bounding validation and IoU threshold verification before final delivery.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-2.5 px-4 bg-[#2D3436] hover:bg-[#0984E3] text-white text-[10px] font-bold uppercase tracking-widest shadow-[3px_3px_0px_#DFE6E9] transition-all"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
