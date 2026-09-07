import React from 'react';
import { ArrowUp, Terminal, ShieldCheck, Phone, Mail, FileText, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  activePage?: 1 | 2;
  setActivePage?: (page: 1 | 2) => void;
}

export const Footer: React.FC<FooterProps> = ({ activePage, setActivePage }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handlePageSwitch = (page: 1 | 2) => {
    if (setActivePage) {
      setActivePage(page);
    }
    scrollToTop();
  };

  return (
    <footer id="main-footer" className="bg-[#2D3436] text-white py-12 sm:py-16 border-t-2 border-[#2D3436]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Brand and Summary */}
          <div className="space-y-2 max-w-md">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-[#0984E3] text-white flex items-center justify-center font-mono font-black text-xs shadow-[2px_2px_0px_#0767B1]">
                JM
              </div>
              <span className="text-base font-black uppercase text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[9px] font-mono text-[#DFE6E9] bg-white/10 px-2 py-0.5 border border-white/10 font-bold uppercase">
                DATA ANNOTATOR & ML SPECIALIST
              </span>
            </div>
            <p className="text-xs text-[#B2BEC3] leading-relaxed">
              Precision ground truth data annotation, polygon segmentation, and training corpus curation for computer vision and NLP models. Completed 12 verified projects with 99.2% benchmark accuracy.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#DFE6E9] pt-1">
              <a href="tel:+254726995935" className="hover:text-[#0984E3] flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#0984E3]" />
                <span>+254 726 995 935</span>
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#0984E3] flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#0984E3]" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0984E3] flex items-center gap-1.5"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0984E3]" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-1.5"
                title="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5 text-white" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Quick Page Navigation Switcher */}
          <div className="flex flex-col gap-2 font-mono uppercase tracking-wider text-xs">
            <span className="text-[10px] text-[#B2BEC3] font-bold">PORTFOLIO PAGES:</span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => handlePageSwitch(1)}
                className={`px-3 py-1.5 text-[11px] border cursor-pointer transition-colors ${
                  activePage === 1
                    ? 'bg-[#0984E3] text-white border-[#0984E3]'
                    : 'bg-white/5 text-[#DFE6E9] border-white/20 hover:bg-white/15'
                }`}
              >
                Page 1: Profile & Skills
              </button>
              <button
                type="button"
                onClick={() => handlePageSwitch(2)}
                className={`px-3 py-1.5 text-[11px] border cursor-pointer transition-colors ${
                  activePage === 2
                    ? 'bg-[#0984E3] text-white border-[#0984E3]'
                    : 'bg-white/5 text-[#DFE6E9] border-white/20 hover:bg-white/15'
                }`}
              >
                Page 2: Projects & Contact (12)
              </button>
            </div>
          </div>

          {/* Back to top */}
          <div>
            <button
              type="button"
              id="footer-back-to-top"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/10 hover:bg-[#0984E3] text-white text-[10px] font-mono font-bold uppercase tracking-widest border border-white/20 shadow-[2px_2px_0px_#1E2325] transition-all cursor-pointer"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom meta row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[#B2BEC3]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0984E3]" />
            <span>Geometric Balance Theme // Nairobi, Kenya (Remote Worldwide)</span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All dataset rights reserved by respective ML labs.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
