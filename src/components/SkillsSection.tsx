import React, { useState } from 'react';
import { 
  Square, 
  Spline, 
  Crosshair, 
  FileText, 
  MessageSquare, 
  Box, 
  CheckCircle, 
  Layers, 
  Cpu, 
  Sliders, 
  ArrowUpRight 
} from 'lucide-react';
import { ANNOTATION_TECHNIQUES, ANNOTATION_TOOLS } from '../data/portfolioData';
import { InteractiveAnnotationDemo } from './InteractiveAnnotationDemo';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Computer Vision' | 'Natural Language Processing' | 'Sensor & Audio'>('All');

  const filteredTechniques = selectedCategory === 'All'
    ? ANNOTATION_TECHNIQUES
    : ANNOTATION_TECHNIQUES.filter(t => t.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Square': return <Square className="w-5 h-5 text-blue-600" />;
      case 'Spline': return <Spline className="w-5 h-5 text-emerald-600" />;
      case 'Crosshair': return <Crosshair className="w-5 h-5 text-amber-600" />;
      case 'FileText': return <FileText className="w-5 h-5 text-purple-600" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-rose-600" />;
      case 'Box': return <Box className="w-5 h-5 text-cyan-600" />;
      default: return <Layers className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="skills" className="py-14 sm:py-20 border-b border-[#DFE6E9] bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <span className="text-[10px] font-mono text-[#0984E3] uppercase tracking-[0.3em] font-bold block">
            Domain Capabilities // Taxonomy & Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#2D3436]">
            Annotation Techniques & Tooling Expertise
          </h2>
          <p className="text-xs sm:text-sm text-[#636E72] leading-relaxed">
            Multi-modal proficiency with strict edge tolerances, sub-pixel polygon contours, and semantic span labeling across high-risk datasets.
          </p>
        </div>

        {/* Interactive Annotation Inspector Visualizer */}
        <InteractiveAnnotationDemo />

        {/* 1. Annotation Techniques Subsection */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#2D3436] flex items-center gap-2">
                <span>Annotation Techniques</span>
                <span className="text-[10px] font-mono font-bold text-[#0984E3] bg-[#F1F2F6] border border-[#DFE6E9] px-2 py-0.5">
                  {filteredTechniques.length} PROTOCOLS
                </span>
              </h3>
              <p className="text-xs text-[#636E72]">
                Rigorous adherence to labeling guidelines, edge alignment, and multi-class taxonomies.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F1F2F6] border border-[#DFE6E9] text-[10px] font-bold uppercase tracking-wider self-start sm:self-auto">
              {(['All', 'Computer Vision', 'Natural Language Processing', 'Sensor & Audio'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-white text-[#0984E3] border border-[#DFE6E9] shadow-[2px_2px_0px_#DFE6E9]'
                      : 'text-[#636E72] hover:text-[#2D3436]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Techniques */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredTechniques.map((tech) => (
              <div
                key={tech.id}
                id={`tech-card-${tech.id}`}
                className="bg-white p-5 border border-[#DFE6E9] shadow-[3px_3px_0px_#DFE6E9] hover:border-[#0984E3] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="p-2 bg-[#F1F2F6] border border-[#DFE6E9] text-[#2D3436] group-hover:border-[#0984E3] transition-colors">
                      {getIcon(tech.iconName)}
                    </div>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 bg-[#F1F2F6] text-[#636E72] border border-[#DFE6E9]">
                      {tech.category}
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-black uppercase tracking-tight text-[#2D3436] mb-1.5">
                    {tech.name}
                  </h4>

                  <p className="text-xs text-[#636E72] leading-relaxed mb-4">
                    {tech.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DFE6E9] space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#636E72] font-mono text-[10px] uppercase">Tolerance:</span>
                    <span className="font-mono text-[#2D3436] text-[10px] font-bold text-right">
                      {tech.toleranceStandard}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#636E72] font-mono text-[10px] uppercase">Target:</span>
                    <span className="text-[#0984E3] text-[10px] font-mono font-medium truncate max-w-[180px] text-right">
                      {tech.useCase}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Tooling Familiarity Subsection (Labelbox, CVAT, Prodigy, etc.) */}
        <div className="space-y-6 pt-4 border-t border-[#DFE6E9]">
          <div>
            <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#2D3436] flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#0984E3]" />
              <span>Tooling & Platform Familiarity</span>
            </h3>
            <p className="text-xs text-[#636E72] mt-0.5">
              Extensive hands-on experience in production environments with enterprise and open-source labeling suites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ANNOTATION_TOOLS.map((tool) => (
              <div
                key={tool.id}
                id={`tool-card-${tool.id}`}
                className="bg-white p-5 border border-[#DFE6E9] shadow-[3px_3px_0px_#DFE6E9] hover:border-[#0984E3] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Tool Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-tight text-[#2D3436]">
                        {tool.name}
                      </h4>
                      <span className="text-[10px] text-[#636E72] font-mono uppercase">
                        {tool.category} • {tool.yearsExperience} YRS EXP
                      </span>
                    </div>

                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 bg-[#0984E3] text-white shadow-[2px_2px_0px_#0767B1]">
                      {tool.proficiency}
                    </span>
                  </div>

                  <p className="text-xs text-[#636E72] leading-relaxed mb-4">
                    {tool.highlight}
                  </p>
                </div>

                {/* Formats Supported */}
                <div className="pt-3 border-t border-[#DFE6E9]">
                  <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#636E72] mb-1.5">
                    Export Formats:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {tool.supportedFormats.map((fmt) => (
                      <span
                        key={fmt}
                        className="px-2 py-0.5 text-[9px] font-mono font-bold bg-[#F1F2F6] text-[#2D3436] border border-[#DFE6E9]"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
