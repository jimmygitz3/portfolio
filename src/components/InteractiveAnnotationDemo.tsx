import React, { useState } from 'react';
import { Square, Spline, FileText, Crosshair, Check, Eye, EyeOff } from 'lucide-react';

export const InteractiveAnnotationDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bboxes' | 'segmentation' | 'ner'>('bboxes');
  const [showLabels, setShowLabels] = useState(true);
  const [hoveredBox, setHoveredBox] = useState<string | null>(null);

  return (
    <div className="bg-white border border-[#DFE6E9] p-5 sm:p-7 shadow-[4px_4px_0px_#DFE6E9]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#DFE6E9]">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#0984E3]"></span>
            <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#2D3436]">
              Interactive Annotation Inspector
            </h3>
          </div>
          <p className="text-xs text-[#636E72] mt-0.5 font-mono">
            Directly test and inspect coordinate geometries, polygon masks, and entity spans.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F1F2F6] border border-[#DFE6E9] text-xs font-bold uppercase tracking-wider self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveTab('bboxes')}
            className={`px-3 py-1.5 flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'bboxes'
                ? 'bg-white text-[#0984E3] border border-[#DFE6E9] shadow-[2px_2px_0px_#DFE6E9]'
                : 'text-[#636E72] hover:text-[#2D3436]'
            }`}
          >
            <Square className="w-3.5 h-3.5" />
            <span>Bounding Boxes</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('segmentation')}
            className={`px-3 py-1.5 flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'segmentation'
                ? 'bg-white text-[#0984E3] border border-[#DFE6E9] shadow-[2px_2px_0px_#DFE6E9]'
                : 'text-[#636E72] hover:text-[#2D3436]'
            }`}
          >
            <Spline className="w-3.5 h-3.5" />
            <span>Segmentation</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ner')}
            className={`px-3 py-1.5 flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'ner'
                ? 'bg-white text-[#0984E3] border border-[#DFE6E9] shadow-[2px_2px_0px_#DFE6E9]'
                : 'text-[#636E72] hover:text-[#2D3436]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>NER Text Tags</span>
          </button>
        </div>
      </div>

      {/* Main Canvas Viewport */}
      <div className="mt-5 relative">
        {/* Toggle overlay labels control */}
        <div className="absolute top-3 right-3 z-20">
          <button
            type="button"
            onClick={() => setShowLabels(!showLabels)}
            className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-[#2D3436] hover:bg-[#0984E3] text-white shadow-[2px_2px_0px_#DFE6E9] cursor-pointer transition-colors"
          >
            {showLabels ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{showLabels ? 'Hide Labels' : 'Show Labels'}</span>
          </button>
        </div>

        {/* TAB 1: Bounding Boxes (Autonomous Driving Scene) */}
        {activeTab === 'bboxes' && (
          <div className="relative w-full h-72 sm:h-80 rounded-xl bg-stone-900 overflow-hidden border border-stone-800 flex items-center justify-center select-none">
            {/* Synthetic Vector Scene: Roadway with vehicles and pedestrian */}
            <svg
              className="w-full h-full"
              viewBox="0 0 600 320"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Sky and City Horizon */}
              <defs>
                <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
              </defs>

              <rect x="0" y="0" width="600" height="180" fill="url(#skyGrad)" />
              {/* Distant buildings silhouette */}
              <polygon points="40,180 40,120 70,120 70,180" fill="#334155" opacity="0.4" />
              <polygon points="80,180 80,100 130,100 130,180" fill="#334155" opacity="0.5" />
              <polygon points="140,180 140,130 190,130 190,180" fill="#334155" opacity="0.4" />
              <polygon points="420,180 420,110 470,110 470,180" fill="#334155" opacity="0.4" />
              <polygon points="480,180 480,90 540,90 540,180" fill="#334155" opacity="0.5" />

              {/* Roadway & Markings */}
              <polygon points="0,320 180,180 420,180 600,320" fill="url(#roadGrad)" />
              {/* Lane lines */}
              <line x1="300" y1="180" x2="300" y2="320" stroke="#f1f5f9" strokeWidth="2" strokeDasharray="14 12" opacity="0.6" />
              <line x1="200" y1="180" x2="60" y2="320" stroke="#e2e8f0" strokeWidth="2" opacity="0.5" />
              <line x1="400" y1="180" x2="540" y2="320" stroke="#e2e8f0" strokeWidth="2" opacity="0.5" />

              {/* Vehicle 1 (Center Sedan) */}
              <g transform="translate(235, 195)">
                <rect x="10" y="30" width="110" height="42" rx="6" fill="#38bdf8" opacity="0.85" />
                <polygon points="25,30 38,10 92,10 105,30" fill="#0284c7" />
                <circle cx="32" cy="70" r="10" fill="#0f172a" />
                <circle cx="98" cy="70" r="10" fill="#0f172a" />
                <rect x="18" y="42" width="12" height="6" fill="#ef4444" />
                <rect x="100" y="42" width="12" height="6" fill="#ef4444" />
              </g>

              {/* Vehicle 2 (SUV on right) */}
              <g transform="translate(390, 185)">
                <rect x="8" y="22" width="90" height="40" rx="5" fill="#e2e8f0" opacity="0.8" />
                <polygon points="18,22 28,6 80,6 86,22" fill="#94a3b8" />
                <circle cx="26" cy="62" r="9" fill="#0f172a" />
                <circle cx="78" cy="62" r="9" fill="#0f172a" />
                <rect x="12" y="32" width="10" height="5" fill="#f59e0b" />
                <rect x="80" y="32" width="10" height="5" fill="#f59e0b" />
              </g>

              {/* Pedestrian (Crossing Left) */}
              <g transform="translate(130, 205)">
                <circle cx="12" cy="10" r="6" fill="#fbbf24" />
                <rect x="8" y="18" width="8" height="24" rx="2" fill="#3b82f6" />
                <line x1="9" y1="42" x2="4" y2="64" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
                <line x1="15" y1="42" x2="19" y2="64" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
              </g>

              {/* ANNOTATION OVERLAYS */}
              {showLabels && (
                <>
                  {/* BBox 1: Vehicle 1 (Center) */}
                  <g
                    className="cursor-pointer transition-opacity"
                    onMouseEnter={() => setHoveredBox('car-1')}
                    onMouseLeave={() => setHoveredBox(null)}
                  >
                    <rect
                      x="240"
                      y="200"
                      width="125"
                      height="80"
                      fill="rgba(37, 99, 235, 0.15)"
                      stroke="#3b82f6"
                      strokeWidth={hoveredBox === 'car-1' ? "2.5" : "1.8"}
                    />
                    {/* BBox corner handles */}
                    <circle cx="240" cy="200" r="3" fill="#3b82f6" />
                    <circle cx="365" cy="200" r="3" fill="#3b82f6" />
                    <circle cx="240" cy="280" r="3" fill="#3b82f6" />
                    <circle cx="365" cy="280" r="3" fill="#3b82f6" />

                    <rect x="240" y="182" width="112" height="18" rx="2" fill="#1d4ed8" />
                    <text x="245" y="194" fill="#ffffff" fontSize="9.5" fontFamily="monospace" fontWeight="600">
                      Vehicle #104 [0.99]
                    </text>
                  </g>

                  {/* BBox 2: Vehicle 2 (SUV) */}
                  <g
                    className="cursor-pointer transition-opacity"
                    onMouseEnter={() => setHoveredBox('car-2')}
                    onMouseLeave={() => setHoveredBox(null)}
                  >
                    <rect
                      x="395"
                      y="190"
                      width="95"
                      height="65"
                      fill="rgba(37, 99, 235, 0.15)"
                      stroke="#3b82f6"
                      strokeWidth={hoveredBox === 'car-2' ? "2.5" : "1.8"}
                    />
                    <circle cx="395" cy="190" r="3" fill="#3b82f6" />
                    <circle cx="490" cy="190" r="3" fill="#3b82f6" />
                    <circle cx="395" cy="255" r="3" fill="#3b82f6" />
                    <circle cx="490" cy="255" r="3" fill="#3b82f6" />

                    <rect x="395" y="172" width="105" height="18" rx="2" fill="#1d4ed8" />
                    <text x="400" y="184" fill="#ffffff" fontSize="9.5" fontFamily="monospace" fontWeight="600">
                      Vehicle #105 [0.98]
                    </text>
                  </g>

                  {/* BBox 3: Pedestrian */}
                  <g
                    className="cursor-pointer transition-opacity"
                    onMouseEnter={() => setHoveredBox('pedestrian')}
                    onMouseLeave={() => setHoveredBox(null)}
                  >
                    <rect
                      x="134"
                      y="202"
                      width="25"
                      height="70"
                      fill="rgba(234, 88, 12, 0.18)"
                      stroke="#ea580c"
                      strokeWidth={hoveredBox === 'pedestrian' ? "2.5" : "1.8"}
                    />
                    <circle cx="134" cy="202" r="3" fill="#ea580c" />
                    <circle cx="159" cy="202" r="3" fill="#ea580c" />
                    <circle cx="134" cy="272" r="3" fill="#ea580c" />
                    <circle cx="159" cy="272" r="3" fill="#ea580c" />

                    <rect x="134" y="184" width="102" height="18" rx="2" fill="#ea580c" />
                    <text x="138" y="196" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="600">
                      Pedestrian #08 [0.99]
                    </text>
                  </g>
                </>
              )}
            </svg>

            {/* Live coordinate inspector footer */}
            <div className="absolute bottom-2 left-3 right-3 bg-stone-900/90 border border-stone-700/80 rounded-lg px-3 py-1.5 flex items-center justify-between text-[11px] font-mono text-stone-300 backdrop-blur-xs">
              <span className="flex items-center gap-1.5 text-blue-400">
                <Crosshair className="w-3.5 h-3.5" />
                Active Class: {hoveredBox ? hoveredBox.toUpperCase() : 'HOVER OBJECT TO INSPECT'}
              </span>
              <span className="text-stone-400 hidden sm:inline">
                Tool: CVAT 2.4 | Tolerance: ±1.5px | Format: YOLOv8 / COCO
              </span>
            </div>
          </div>
        )}

        {/* TAB 2: Semantic & Polygon Segmentation (Medical Scan) */}
        {activeTab === 'segmentation' && (
          <div className="relative w-full h-72 sm:h-80 rounded-xl bg-stone-950 overflow-hidden border border-stone-800 flex items-center justify-center select-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 600 320"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Background CT density rings */}
              <defs>
                <radialGradient id="ctGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="60%" stopColor="#0f172a" />
                  <stop offset="100%" stopColor="#020617" />
                </radialGradient>
              </defs>

              <rect x="0" y="0" width="600" height="320" fill="#020617" />
              {/* Anatomical tissue shapes */}
              <ellipse cx="300" cy="160" rx="220" ry="120" fill="url(#ctGlow)" stroke="#334155" strokeWidth="1.5" />
              <path
                d="M 180,120 Q 240,110 260,160 Q 250,210 180,220 Q 140,180 180,120 Z"
                fill="#1e293b"
                stroke="#475569"
                strokeWidth="1"
              />
              <path
                d="M 420,120 Q 360,110 340,160 Q 350,210 420,220 Q 460,180 420,120 Z"
                fill="#1e293b"
                stroke="#475569"
                strokeWidth="1"
              />
              <circle cx="300" cy="160" r="28" fill="#0f172a" stroke="#475569" strokeWidth="1" />

              {/* ANNOTATED POLYGONS */}
              {showLabels && (
                <>
                  {/* Polygon Mask 1: Right Lung Parenchyma */}
                  <polygon
                    points="175,125 210,120 245,140 255,170 240,205 190,215 155,190 150,150"
                    fill="rgba(16, 185, 129, 0.25)"
                    stroke="#10b981"
                    strokeWidth="1.8"
                    strokeDasharray="4 2"
                  />
                  {/* Vertex points */}
                  {[[175,125],[210,120],[245,140],[255,170],[240,205],[190,215],[155,190],[150,150]].map(([x,y], i) => (
                    <circle key={i} cx={x} cy={y} r="2.5" fill="#34d399" />
                  ))}
                  <rect x="175" y="102" width="115" height="18" rx="2" fill="#047857" />
                  <text x="180" y="114" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="600">
                    Right Lung [IoU 0.99]
                  </text>

                  {/* Polygon Mask 2: Pulmonary Lesion Target */}
                  <polygon
                    points="215,160 230,152 238,165 232,178 218,175"
                    fill="rgba(239, 68, 68, 0.45)"
                    stroke="#ef4444"
                    strokeWidth="2"
                  />
                  {[[215,160],[230,152],[238,165],[232,178],[218,175]].map(([x,y], i) => (
                    <circle key={i} cx={x} cy={y} r="2.5" fill="#f87171" />
                  ))}
                  <rect x="220" y="132" width="118" height="18" rx="2" fill="#b91c1c" />
                  <text x="225" y="144" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="600">
                    Solitary Nodule #01
                  </text>

                  {/* Polygon Mask 3: Left Lung Parenchyma */}
                  <polygon
                    points="425,125 390,120 355,140 345,170 360,205 410,215 445,190 450,150"
                    fill="rgba(16, 185, 129, 0.25)"
                    stroke="#10b981"
                    strokeWidth="1.8"
                    strokeDasharray="4 2"
                  />
                  {[[425,125],[390,120],[355,140],[345,170],[360,205],[410,215],[445,190],[450,150]].map(([x,y], i) => (
                    <circle key={i} cx={x} cy={y} r="2.5" fill="#34d399" />
                  ))}
                  <rect x="345" y="102" width="110" height="18" rx="2" fill="#047857" />
                  <text x="350" y="114" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="600">
                    Left Lung [IoU 0.98]
                  </text>
                </>
              )}
            </svg>

            <div className="absolute bottom-2 left-3 right-3 bg-stone-900/90 border border-stone-700/80 rounded-lg px-3 py-1.5 flex items-center justify-between text-[11px] font-mono text-stone-300 backdrop-blur-xs">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Crosshair className="w-3.5 h-3.5" />
                Modality: Thoracic CT (DICOM Series #402)
              </span>
              <span className="text-stone-400 hidden sm:inline">
                Tool: V7 Darwin | Standard: RECIST 1.1 Criteria
              </span>
            </div>
          </div>
        )}

        {/* TAB 3: Named Entity Recognition & Text Tagging (NLP) */}
        {activeTab === 'ner' && (
          <div className="p-5 sm:p-6 rounded-xl bg-stone-900 border border-stone-800 text-stone-200 font-mono text-xs sm:text-sm leading-relaxed">
            <div className="text-[11px] text-stone-400 pb-3 border-b border-stone-800 flex items-center justify-between">
              <span>DOCUMENT SOURCE: SEC-FORM-10K_SYNTH_SAMPLE.TXT</span>
              <span className="text-purple-400">TOOL: PRODIGY NLP WORKFLOW</span>
            </div>

            <div className="pt-4 space-y-4">
              <p className="leading-loose">
                This Executive Services Agreement is entered into on{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-blue-950 border border-blue-500 text-blue-300 font-semibold text-xs">
                  October 14, 2025
                  <span className="ml-1 text-[9px] px-1 bg-blue-500 text-white rounded font-mono">
                    DATE
                  </span>
                </span>{' '}
                by and between{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500 text-emerald-300 font-semibold text-xs">
                  Apex Neural Dynamics Inc.
                  <span className="ml-1 text-[9px] px-1 bg-emerald-600 text-white rounded font-mono">
                    ORGANIZATION
                  </span>
                </span>
                , a Delaware corporation headquartered in{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-amber-950 border border-amber-500 text-amber-300 font-semibold text-xs">
                  Austin, Texas
                  <span className="ml-1 text-[9px] px-1 bg-amber-600 text-white rounded font-mono">
                    GPE_LOCATION
                  </span>
                </span>
                , and{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-purple-950 border border-purple-500 text-purple-300 font-semibold text-xs">
                  Dr. Catherine Sterling
                  <span className="ml-1 text-[9px] px-1 bg-purple-600 text-white rounded font-mono">
                    PERSON
                  </span>
                </span>
                . The initial base consideration shall not exceed{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-rose-950 border border-rose-500 text-rose-300 font-semibold text-xs">
                  $450,000 USD
                  <span className="ml-1 text-[9px] px-1 bg-rose-600 text-white rounded font-mono">
                    MONEY
                  </span>
                </span>{' '}
                payable under quarterly milestones with mandatory compliance under{' '}
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500 text-cyan-300 font-semibold text-xs">
                  GDPR Article 28
                  <span className="ml-1 text-[9px] px-1 bg-cyan-600 text-white rounded font-mono">
                    LAW_STATUTE
                  </span>
                </span>
                .
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-stone-800 flex flex-wrap items-center justify-between text-[11px] text-stone-400 gap-2">
              <div className="flex items-center gap-3">
                <span className="text-emerald-400">✓ Zero boundary token bleed</span>
                <span className="text-blue-400">✓ 100% Punctuation integrity</span>
              </div>
              <span className="font-mono text-purple-300">Target Schema: CoNLL-2003 Extended</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
