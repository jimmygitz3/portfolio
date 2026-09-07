import React, { useState, useEffect, useRef } from 'react';
import { Crosshair, CheckCircle, ArrowDown, FileText, Mail, Phone, ExternalLink, ShieldCheck, Database, Award, ArrowRight, Camera, Upload, RefreshCw, User, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onNavigateToPage?: (page: 1 | 2) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigateToPage }) => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize photo from localStorage or public/ppic.jfif
  useEffect(() => {
    const savedPhoto = localStorage.getItem('jm_profile_photo');
    if (savedPhoto) {
      setPhotoUrl(savedPhoto);
      return;
    }

    // Try detecting /ppic.jfif in public root
    const imgTest = new Image();
    imgTest.src = '/ppic.jfif';
    imgTest.onload = () => {
      setPhotoUrl('/ppic.jfif');
    };
    imgTest.onerror = () => {
      // No default public image yet
    };
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processImageFile(file);
    }
  };

  const processImageFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setPhotoUrl(result);
        try {
          localStorage.setItem('jm_profile_photo', result);
        } catch (err) {
          console.warn('Could not cache photo to localStorage (file might be large)', err);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processImageFile(file);
    }
  };

  const handleRemovePhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoUrl(null);
    localStorage.removeItem('jm_profile_photo');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const scrollToSkills = () => {
    const el = document.getElementById('skills');
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-12 md:pt-30 md:pb-16 border-b border-[#DFE6E9] bg-[#F8F9FA] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Hidden file input for ppic.jfif upload */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*,.jfif,.jpg,.jpeg,.png,.webp"
          className="hidden"
          id="profile-photo-file-input"
        />

        {/* Page 1 Architecture Indicator Bar */}
        <div className="mb-4 flex items-center justify-between border border-[#DFE6E9] bg-white px-3 py-1.5 shadow-[2px_2px_0px_#DFE6E9]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#0984E3]"></span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#2D3436]">
              Page 1 of 2 // Profile & Technical Competencies
            </span>
          </div>
          <button
            type="button"
            onClick={() => onNavigateToPage && onNavigateToPage(2)}
            className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0984E3] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Jump to Page 2: Projects & Contact</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Main Hero Card Container with Geometric Balance Shadow */}
        <div className="bg-white border border-[#DFE6E9] p-6 sm:p-10 shadow-[4px_4px_0px_#DFE6E9] relative overflow-hidden">
          
          {/* Geometric Wireframe Watermark */}
          <div className="absolute top-0 right-0 w-44 h-44 opacity-[0.035] pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M0 0 L100 100 M100 0 L0 100 M0 50 L100 50 M50 0 L50 100" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            
            {/* Profile Photo (Geometric Frame with Upload Support) */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start lg:items-center">
              <div 
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={triggerUpload}
                title="Click or drag ppic.jfif here to update photo"
                className={`w-48 h-48 sm:w-56 sm:h-56 bg-[#F1F2F6] flex-shrink-0 border-2 relative group overflow-hidden shadow-[4px_4px_0px_#DFE6E9] cursor-pointer transition-all ${
                  isDragging 
                    ? 'border-[#0984E3] ring-4 ring-[#0984E3]/20 bg-[#EBF5FB]' 
                    : 'border-[#DFE6E9] hover:border-[#0984E3]'
                }`}
              >
                {photoUrl ? (
                  <>
                    {/* User Uploaded Photo */}
                    <img
                      src={photoUrl}
                      alt="James Muigai - Data Annotator and ML Specialist"
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Hover Change Photo Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-xs font-mono p-3 text-center">
                      <Camera className="w-6 h-6 mb-1" />
                      <span className="font-bold uppercase tracking-wider text-[11px]">Change Photo</span>
                      <span className="text-[9px] text-slate-200 mt-0.5">Click or drop ppic.jfif</span>
                    </div>
                  </>
                ) : (
                  /* Placeholder when awaiting user file upload */
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-b from-[#F8F9FA] to-[#EDF2F7]">
                    <div className="w-14 h-14 bg-white border border-[#DFE6E9] flex items-center justify-center shadow-[2px_2px_0px_#DFE6E9] mb-2 text-[#0984E3]">
                      <Upload className="w-6 h-6 animate-bounce" />
                    </div>
                    <span className="font-mono font-bold text-xs uppercase text-[#2D3436] tracking-tight">
                      Upload Photo
                    </span>
                    <span className="text-[10px] font-mono text-[#0984E3] font-bold mt-1 bg-white px-2 py-0.5 border border-[#AED6F1]">
                      Click to select ppic.jfif
                    </span>
                    <span className="text-[9px] font-mono text-[#636E72] mt-1">
                      or drag & drop here
                    </span>
                  </div>
                )}

                {/* Geometric blueprint inner square */}
                <div className="absolute inset-2 border border-white/60 pointer-events-none" />
                
                {/* Corner crosshairs */}
                <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 border-[#0984E3]" />
                <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t-2 border-r-2 border-[#0984E3]" />
                <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b-2 border-l-2 border-[#0984E3]" />
                <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 border-[#0984E3]" />

                {/* Identification tag */}
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[9px] font-mono font-bold text-[#2D3436] uppercase tracking-wider bg-white/95 border border-[#DFE6E9] px-2 py-0.5 shadow-[1px_1px_0px_rgba(0,0,0,0.1)]">
                  <span>PHOTO // JM-KENYA</span>
                  <span className="text-[#0984E3] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {photoUrl ? 'ATTACHED' : 'READY'}
                  </span>
                </div>
              </div>

              {/* Photo Upload / Change Button */}
              <div className="mt-2.5 w-full flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={triggerUpload}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-white hover:bg-[#F1F2F6] text-[#2D3436] hover:text-[#0984E3] border border-[#DFE6E9] text-[10px] font-mono font-bold uppercase tracking-wider shadow-[2px_2px_0px_#DFE6E9] transition-all cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5 text-[#0984E3]" />
                  <span>{photoUrl ? 'Change ppic.jfif' : 'Select ppic.jfif'}</span>
                </button>

                {photoUrl && (
                  <button
                    type="button"
                    onClick={handleRemovePhoto}
                    title="Reset photo"
                    className="p-1.5 bg-white hover:bg-rose-50 text-[#636E72] hover:text-rose-600 border border-[#DFE6E9] shadow-[2px_2px_0px_#DFE6E9] transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Status indicator below photo */}
              <div className="mt-2.5 flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[#636E72]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Active: Available for Work</span>
              </div>

              {/* Direct Phone & Email Fast Contacts */}
              <div className="w-full mt-3 p-3 bg-[#F8F9FA] border border-[#DFE6E9] space-y-2 text-[11px] font-mono">
                <a
                  href="tel:+254726995935"
                  className="flex items-center gap-2 text-[#2D3436] hover:text-[#0984E3] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0984E3] flex-shrink-0" />
                  <span className="font-bold">+254 726 995 935</span>
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 text-[#2D3436] hover:text-[#0984E3] transition-colors truncate block"
                >
                  <Mail className="w-3.5 h-3.5 text-[#0984E3] flex-shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
                <div className="pt-1.5 border-t border-[#DFE6E9] flex items-center justify-between gap-2 text-[10px]">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-1 px-2 bg-white hover:bg-[#0984E3] hover:text-white text-[#2D3436] border border-[#DFE6E9] shadow-[1px_1px_0px_#DFE6E9] transition-all"
                    title="James Gitau Muigai on LinkedIn"
                  >
                    <Linkedin className="w-3 h-3 text-[#0984E3] group-hover:text-white" />
                    <span className="font-bold uppercase">LinkedIn</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-1 px-2 bg-white hover:bg-[#2D3436] hover:text-white text-[#2D3436] border border-[#DFE6E9] shadow-[1px_1px_0px_#DFE6E9] transition-all"
                    title="jimmygitz3 on GitHub"
                  >
                    <Github className="w-3 h-3 text-[#2D3436]" />
                    <span className="font-bold uppercase">GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Intro & Summary (8 cols) */}
            <div className="lg:col-span-8 flex flex-col items-start space-y-4">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono text-[#0984E3] uppercase tracking-[0.3em] font-bold">
                  Data Annotator & ML Specialist // Computer Vision & NLP Models
                </span>
                <span className="text-[9px] font-mono bg-[#EBF5FB] text-[#0984E3] border border-[#AED6F1] px-2 py-0.5 font-bold uppercase">
                  &lt; 20 Projects Track
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.0] tracking-tighter uppercase text-[#2D3436]">
                {PERSONAL_INFO.name}
              </h1>

              <p className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#0984E3]">
                {PERSONAL_INFO.role} • Nairobi, Kenya (Remote Worldwide)
              </p>

              <p className="text-[#636E72] leading-relaxed text-xs sm:text-sm max-w-2xl">
                {PERSONAL_INFO.summary}
              </p>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {['2D Bounding Boxes', 'Polygon Segmentation', 'Named Entity Tagging (NER)', 'Audio Slot Labeling', 'CVAT & Roboflow', 'Quality Focused'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-[#F1F2F6] text-[#2D3436] border border-[#DFE6E9]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  id="hero-view-projects-btn"
                  onClick={() => onNavigateToPage ? onNavigateToPage(2) : scrollToSkills()}
                  className="px-4 py-2.5 bg-[#2D3436] hover:bg-[#0984E3] text-white text-[10px] font-bold uppercase tracking-widest cursor-pointer shadow-[3px_3px_0px_#DFE6E9] hover:shadow-[3px_3px_0px_#0767B1] transition-all inline-flex items-center gap-2"
                >
                  <span>View Projects (Page 2)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  id="hero-skills-btn"
                  onClick={scrollToSkills}
                  className="px-4 py-2.5 border border-[#2D3436] text-[#2D3436] hover:bg-[#2D3436] hover:text-white text-[10px] font-bold uppercase tracking-widest cursor-pointer shadow-[3px_3px_0px_#DFE6E9] transition-all"
                >
                  <span>Technical Skills</span>
                </button>

                <button
                  type="button"
                  id="hero-resume-modal-btn"
                  onClick={() => setShowResumeModal(true)}
                  className="px-4 py-2.5 bg-[#0984E3] hover:bg-[#0767B1] text-white text-[10px] font-bold uppercase tracking-widest cursor-pointer shadow-[3px_3px_0px_#0767B1] transition-all inline-flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Curriculum Vitae</span>
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Stats Grid with Geometric Offset Shadows (<20 projects) */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-5 border border-[#DFE6E9] shadow-[4px_4px_0px_#DFE6E9] hover:border-[#0984E3] transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-black font-mono text-[#2D3436] tracking-tight">
                {stat.value}
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#0984E3] mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#636E72] mt-0.5 leading-snug">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Resume Modal */}
      {showResumeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D3436]/60 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white border-2 border-[#2D3436] max-w-xl w-full p-6 sm:p-8 shadow-[8px_8px_0px_#2D3436] max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-[#DFE6E9] pb-4">
              <div>
                <span className="text-[9px] font-mono text-[#0984E3] uppercase tracking-[0.2em] font-bold">
                  Document // Curriculum Vitae
                </span>
                <h3 className="text-lg font-black uppercase text-[#2D3436] mt-0.5">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-[#636E72] font-mono mt-0.5">
                  Mobile: +254 726 995 935 • Email: jimmygitz3@gmail.com
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowResumeModal(false)}
                className="w-7 h-7 border border-[#DFE6E9] bg-[#F1F2F6] hover:bg-[#2D3436] hover:text-white text-[#2D3436] font-mono text-xs flex items-center justify-center font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-4 text-xs sm:text-sm text-[#2D3436]">
              <div>
                <h4 className="font-bold uppercase tracking-wider text-xs text-[#2D3436] mb-2">
                  Professional Profile
                </h4>
                <div className="p-3 bg-[#F8F9FA] border border-[#DFE6E9] text-xs text-[#636E72] leading-relaxed">
                  Data Annotator and ML Specialist with a solid foundation in computer vision annotation (bounding boxes, polygons) and NLP text spans. Completed 12 benchmark and client-supervised batches totaling 24,000+ annotations with high adherence to strict guideline rubrics.
                </div>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-wider text-xs text-[#2D3436] mb-2">
                  Key Projects & Competencies
                </h4>
                <div className="space-y-2.5">
                  <div className="p-3 bg-[#F8F9FA] border border-[#DFE6E9]">
                    <div className="flex justify-between font-bold text-[#2D3436] text-xs uppercase">
                      <span>Computer Vision Labeling (CVAT & Roboflow)</span>
                      <span className="font-mono text-[10px] text-[#0984E3]">12 PROJECTS COMPLETED</span>
                    </div>
                    <p className="text-xs text-[#636E72] mt-1 leading-relaxed">
                      Generated 4,800+ 2D bounding boxes for vehicle and pedestrian detection in CVAT, and 2,500+ foliage disease polygon segmentation masks in Label Studio.
                    </p>
                  </div>
                  <div className="p-3 bg-[#F8F9FA] border border-[#DFE6E9]">
                    <div className="flex justify-between font-bold text-[#2D3436] text-xs uppercase">
                      <span>NLP & Audio Annotation</span>
                      <span className="font-mono text-[10px] text-[#0984E3]">QUALITY BENCHMARK 99.2%</span>
                    </div>
                    <p className="text-xs text-[#636E72] mt-1 leading-relaxed">
                      Annotated 5,200 commercial invoice text spans with exact token boundaries and labeled 2,400 speech audio time stamps.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-wider text-xs text-[#2D3436] mb-2">
                  Tooling & Standards
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#636E72]">
                  <div className="p-2 border border-[#DFE6E9] bg-[#F8F9FA]">✓ CVAT (Intel) Production</div>
                  <div className="p-2 border border-[#DFE6E9] bg-[#F8F9FA]">✓ Roboflow & Label Studio</div>
                  <div className="p-2 border border-[#DFE6E9] bg-[#F8F9FA]">✓ Python Dataset Sanity Checks</div>
                  <div className="p-2 border border-[#DFE6E9] bg-[#F8F9FA]">✓ Data Privacy & NDA Adherence</div>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <a
                  href="tel:+254726995935"
                  className="flex-1 py-2.5 px-4 bg-[#2D3436] hover:bg-[#0984E3] text-white text-[10px] font-bold uppercase tracking-widest shadow-[3px_3px_0px_#DFE6E9] transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: +254 726 995 935</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setShowResumeModal(false);
                    if (onNavigateToPage) {
                      onNavigateToPage(2);
                    }
                  }}
                  className="flex-1 py-2.5 px-4 bg-[#0984E3] hover:bg-[#0767B1] text-white text-[10px] font-bold uppercase tracking-widest shadow-[3px_3px_0px_#0767B1] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Contact Form</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
