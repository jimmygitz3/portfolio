import React, { useState } from 'react';
import { 
  Terminal, 
  Table, 
  Cloud, 
  FileCode, 
  Eye, 
  GitBranch, 
  CheckCircle2, 
  Workflow, 
  Copy, 
  Check, 
  Code 
} from 'lucide-react';
import { TOOLS_WORKFLOW, PIPELINE_STEPS } from '../data/portfolioData';

export const ToolsSection: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState(false);

  const samplePythonCode = `# Sample Data Annotator QA Script: Automated BBox Boundary Verification
import json

def validate_coco_bboxes(annotations, img_w, img_h, min_area=16):
    """Flags clipped coordinates, out-of-bound boxes, and degenerated polygons."""
    anomalies = []
    for ann in annotations:
        x, y, w, h = ann['bbox']
        if x < 0 or y < 0 or (x + w) > img_w or (y + h) > img_h:
            anomalies.append({'id': ann['id'], 'error': 'OUT_OF_BOUNDS_CLIP', 'bbox': ann['bbox']})
        elif (w * h) < min_area:
            anomalies.append({'id': ann['id'], 'error': 'DEGENERATE_AREA', 'area': w * h})
    return anomalies
`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(samplePythonCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Terminal className="w-5 h-5 text-blue-600" />;
      case 'Table': return <Table className="w-5 h-5 text-emerald-600" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-sky-600" />;
      case 'FileCode': return <FileCode className="w-5 h-5 text-amber-600" />;
      case 'Eye': return <Eye className="w-5 h-5 text-purple-600" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-rose-600" />;
      default: return <Workflow className="w-5 h-5 text-stone-600" />;
    }
  };

  return (
    <section id="tools" className="py-14 sm:py-20 border-b border-[#DFE6E9] bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-14">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <span className="text-[10px] font-mono text-[#0984E3] uppercase tracking-[0.3em] font-bold block">
            Infrastructure // Platforms & Automation
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#2D3436]">
            Tools, Scripting & Data Workflows
          </h2>
          <p className="text-xs sm:text-sm text-[#636E72] leading-relaxed">
            Beyond standard labeling, I utilize custom Python automation, cloud bucket staging, and spreadsheet auditing to ensure dataset integrity.
          </p>
        </div>

        {/* 1. Workflow Pipeline Steps */}
        <div className="space-y-6">
          <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#2D3436] flex items-center gap-2">
            <span>5-Stage Annotation Quality Lifecycle</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PIPELINE_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white p-5 border border-[#DFE6E9] shadow-[3px_3px_0px_#DFE6E9] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[9px] font-mono font-bold uppercase text-[#0984E3] bg-[#F1F2F6] border border-[#DFE6E9] px-2 py-0.5">
                    PHASE 0{step.step}
                  </span>
                  <h4 className="text-xs sm:text-sm font-black uppercase tracking-tight text-[#2D3436] mt-3 mb-1.5 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#636E72] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Tools & Tech Grid */}
        <div className="space-y-6">
          <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#2D3436]">
            Platform & Automation Stack
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOOLS_WORKFLOW.map((tool, idx) => (
              <div
                key={idx}
                className="bg-white p-5 border border-[#DFE6E9] shadow-[3px_3px_0px_#DFE6E9] hover:border-[#0984E3] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 bg-[#F1F2F6] border border-[#DFE6E9] text-[#2D3436]">
                      {getToolIcon(tool.icon)}
                    </div>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 bg-[#F1F2F6] text-[#2D3436] border border-[#DFE6E9]">
                      {tool.proficiency}
                    </span>
                  </div>

                  <h4 className="text-sm font-black uppercase tracking-tight text-[#2D3436] mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-[10px] font-mono uppercase text-[#0984E3] mb-2 font-bold">
                    {tool.category}
                  </p>
                  <p className="text-xs text-[#636E72] leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Python QA Verification Script Code Box */}
        <div className="bg-[#2D3436] border-2 border-[#2D3436] p-5 sm:p-7 text-white shadow-[6px_6px_0px_#DFE6E9]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/15">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-[#0984E3]" />
              <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                qa_validation_script.py
              </span>
              <span className="text-[9px] font-mono text-white/80 bg-white/10 px-2 py-0.5 border border-white/10">
                PYTHON 3.11 // SANITY CHECK
              </span>
            </div>

            <button
              type="button"
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-[#0984E3] border border-white/20 transition-colors self-start sm:self-auto cursor-pointer shadow-[2px_2px_0px_#1E2325]"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedCode ? 'Copied' : 'Copy Script'}</span>
            </button>
          </div>

          <pre className="mt-4 p-4 bg-[#1E2325] border border-white/10 overflow-x-auto text-xs font-mono text-[#DFE6E9] leading-relaxed">
            <code>{samplePythonCode}</code>
          </pre>

          <div className="mt-4 pt-3 border-t border-white/15 flex flex-wrap items-center justify-between text-[10px] font-mono text-[#B2BEC3] gap-2">
            <span>Automates pre-delivery auditing to catch coordinate shifts, clipping & degenerated geometries.</span>
            <span className="text-emerald-400 font-bold uppercase">100% Geometry Passed</span>
          </div>
        </div>

      </div>
    </section>
  );
};
