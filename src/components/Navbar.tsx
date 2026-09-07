import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ChevronRight, FileCode, CheckCircle2, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activePage: 1 | 2;
  setActivePage: (page: 1 | 2) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageSwitch = (page: 1 | 2) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string, page: 1 | 2) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (activePage !== page) {
      setActivePage(page);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const navOffset = 80;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        const navOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-[#DFE6E9] ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_0px_#DFE6E9] py-2.5'
          : 'bg-white/95 backdrop-blur-xs py-3'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button
          type="button"
          onClick={() => handlePageSwitch(1)}
          className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer"
          id="navbar-brand-link"
        >
          <div className="w-8 h-8 bg-[#0984E3] flex items-center justify-center text-white font-black text-xs shadow-[2px_2px_0px_#0767B1]">
            JM
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base tracking-tight uppercase text-[#2D3436] leading-none">
              James Muigai<span className="text-[#0984E3]">.</span>
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#636E72] flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Data Annotator & ML Specialist
            </span>
          </div>
        </button>

        {/* Two-Page Primary Switcher (Desktop) */}
        <nav className="hidden md:flex items-center gap-2 p-1 bg-[#F1F2F6] border border-[#DFE6E9]" id="desktop-page-nav">
          <button
            type="button"
            id="nav-page-1-btn"
            onClick={() => handlePageSwitch(1)}
            className={`px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              activePage === 1
                ? 'bg-white text-[#0984E3] border border-[#DFE6E9] shadow-[2px_2px_0px_#DFE6E9]'
                : 'text-[#636E72] hover:text-[#2D3436]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#0984E3]" />
            <span>Page 1: Profile & Skills</span>
          </button>

          <button
            type="button"
            id="nav-page-2-btn"
            onClick={() => handlePageSwitch(2)}
            className={`px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              activePage === 2
                ? 'bg-white text-[#0984E3] border border-[#DFE6E9] shadow-[2px_2px_0px_#DFE6E9]'
                : 'text-[#636E72] hover:text-[#2D3436]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#2D3436]" />
            <span>Page 2: Projects & Contact</span>
            <span className="text-[9px] bg-[#EBF5FB] text-[#0984E3] px-1 py-0.2 border border-[#AED6F1]">12</span>
          </button>
        </nav>

        {/* Right Action: Direct Phone Call, LinkedIn, GitHub & Inquire CTA */}
        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-linkedin-link"
            className="p-1.5 border border-[#DFE6E9] bg-white text-[#2D3436] hover:text-[#0984E3] hover:border-[#0984E3] shadow-[2px_2px_0px_#DFE6E9] transition-all"
            title="LinkedIn: James Gitau Muigai"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-github-link"
            className="p-1.5 border border-[#DFE6E9] bg-white text-[#2D3436] hover:text-[#0984E3] hover:border-[#0984E3] shadow-[2px_2px_0px_#DFE6E9] transition-all"
            title="GitHub: jimmygitz3"
          >
            <Github className="w-3.5 h-3.5" />
          </a>

          <a
            href="tel:+254726995935"
            id="nav-phone-link"
            className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#2D3436] hover:text-[#0984E3] px-2.5 py-1.5 border border-[#DFE6E9] bg-white shadow-[2px_2px_0px_#DFE6E9] transition-all"
            title="Direct Mobile: +254 726 995 935"
          >
            <Phone className="w-3.5 h-3.5 text-[#0984E3]" />
            <span>+254 726 995 935</span>
          </a>

          <button
            type="button"
            id="nav-contact-cta"
            onClick={(e) => handleSubLinkClick(e as any, 'contact', 2)}
            className="px-3.5 py-1.5 bg-[#2D3436] hover:bg-[#0984E3] text-white text-[10px] font-bold uppercase tracking-widest cursor-pointer shadow-[2px_2px_0px_#DFE6E9] transition-all hover:shadow-[2px_2px_0px_#0767B1] inline-flex items-center gap-1.5"
          >
            <span>Inquire</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          className="md:hidden p-2 border border-[#DFE6E9] bg-white text-[#2D3436] hover:bg-[#F1F2F6] focus:outline-hidden cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sub-bar for fast anchor links inside the active page (Desktop) */}
      <div className="hidden md:block border-t border-[#DFE6E9]/60 bg-[#F8F9FA]/80 px-4 sm:px-6 py-1">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#636E72]">
          <div className="flex items-center gap-4">
            <span className="text-[#0984E3] font-bold">
              {activePage === 1 ? 'CURRENT: PAGE 1 (PROFILE & SKILLS)' : 'CURRENT: PAGE 2 (PROJECTS & CONTACT)'}
            </span>
            <span className="text-[#DFE6E9]">|</span>
            {activePage === 1 ? (
              <>
                <a href="#home" onClick={(e) => handleSubLinkClick(e, 'home', 1)} className="hover:text-[#0984E3] transition-colors">
                  Overview
                </a>
                <a href="#skills" onClick={(e) => handleSubLinkClick(e, 'skills', 1)} className="hover:text-[#0984E3] transition-colors">
                  Annotation Skills & Demo
                </a>
                <a href="#tools" onClick={(e) => handleSubLinkClick(e, 'tools', 1)} className="hover:text-[#0984E3] transition-colors">
                  Tools & QA Script
                </a>
              </>
            ) : (
              <>
                <a href="#projects" onClick={(e) => handleSubLinkClick(e, 'projects', 2)} className="hover:text-[#0984E3] transition-colors">
                  Projects (12 Batch Archive)
                </a>
                <a href="#testimonials" onClick={(e) => handleSubLinkClick(e, 'testimonials', 2)} className="hover:text-[#0984E3] transition-colors">
                  Supervisor Reviews
                </a>
                <a href="#contact" onClick={(e) => handleSubLinkClick(e, 'contact', 2)} className="hover:text-[#0984E3] transition-colors">
                  Direct Contact Form
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Collapsible Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-dropdown"
          className="md:hidden border-b border-[#DFE6E9] bg-white px-4 pt-3 pb-5 shadow-[4px_4px_0px_#DFE6E9] animate-in slide-in-from-top-2 duration-150"
        >
          <div className="flex flex-col space-y-3">
            
            {/* Page selection tabs for Mobile */}
            <div className="text-[10px] font-mono font-bold uppercase text-[#636E72] tracking-wider">
              Select Page (2 Pages Available):
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                id="mobile-tab-page-1"
                onClick={() => handlePageSwitch(1)}
                className={`p-2.5 text-center text-xs font-mono font-bold uppercase tracking-wider border cursor-pointer ${
                  activePage === 1
                    ? 'bg-[#0984E3] text-white border-[#0984E3] shadow-[2px_2px_0px_#0767B1]'
                    : 'bg-[#F8F9FA] text-[#2D3436] border-[#DFE6E9]'
                }`}
              >
                Page 1: Profile
              </button>

              <button
                type="button"
                id="mobile-tab-page-2"
                onClick={() => handlePageSwitch(2)}
                className={`p-2.5 text-center text-xs font-mono font-bold uppercase tracking-wider border cursor-pointer ${
                  activePage === 2
                    ? 'bg-[#0984E3] text-white border-[#0984E3] shadow-[2px_2px_0px_#0767B1]'
                    : 'bg-[#F8F9FA] text-[#2D3436] border-[#DFE6E9]'
                }`}
              >
                Page 2: Projects (12)
              </button>
            </div>

            {/* Sub-links depending on active page */}
            <div className="pt-2 border-t border-[#DFE6E9] space-y-1 text-xs font-mono">
              <span className="text-[10px] text-[#636E72] uppercase font-bold">Jump To Section:</span>
              {activePage === 1 ? (
                <>
                  <a
                    href="#home"
                    onClick={(e) => handleSubLinkClick(e, 'home', 1)}
                    className="block px-2 py-1.5 text-[#2D3436] hover:bg-[#F1F2F6]"
                  >
                    • Hero & Professional Summary
                  </a>
                  <a
                    href="#skills"
                    onClick={(e) => handleSubLinkClick(e, 'skills', 1)}
                    className="block px-2 py-1.5 text-[#2D3436] hover:bg-[#F1F2F6]"
                  >
                    • Annotation Techniques & Live Tool
                  </a>
                  <a
                    href="#tools"
                    onClick={(e) => handleSubLinkClick(e, 'tools', 1)}
                    className="block px-2 py-1.5 text-[#2D3436] hover:bg-[#F1F2F6]"
                  >
                    • Tooling & Python QA Verification
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="#projects"
                    onClick={(e) => handleSubLinkClick(e, 'projects', 2)}
                    className="block px-2 py-1.5 text-[#2D3436] hover:bg-[#F1F2F6]"
                  >
                    • Dataset Projects (12 Completed)
                  </a>
                  <a
                    href="#testimonials"
                    onClick={(e) => handleSubLinkClick(e, 'testimonials', 2)}
                    className="block px-2 py-1.5 text-[#2D3436] hover:bg-[#F1F2F6]"
                  >
                    • Supervisor Endorsements
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => handleSubLinkClick(e, 'contact', 2)}
                    className="block px-2 py-1.5 text-[#2D3436] hover:bg-[#F1F2F6]"
                  >
                    • Direct Pipeline & Inquiry Form
                  </a>
                </>
              )}
            </div>

            {/* Direct Mobile Quick Buttons */}
            <div className="pt-2 border-t border-[#DFE6E9] grid grid-cols-2 gap-2">
              <a
                href="tel:+254726995935"
                className="flex items-center justify-center gap-1.5 py-2 px-3 text-[10px] font-mono font-bold uppercase text-white bg-[#2D3436] hover:bg-[#0984E3] shadow-[2px_2px_0px_#DFE6E9]"
              >
                <Phone className="w-3 h-3" />
                <span>Call James</span>
              </a>
              <a
                href="https://wa.me/254726995935?text=Hello%20James,%20I%20would%20like%20to%20discuss%20a%20data%20annotation%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 text-[10px] font-mono font-bold uppercase text-white bg-emerald-600 hover:bg-emerald-700 shadow-[2px_2px_0px_#DFE6E9]"
              >
                <MessageSquare className="w-3 h-3" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Social Links for Mobile */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 text-[10px] font-mono font-bold uppercase text-[#2D3436] hover:text-[#0984E3] bg-[#F1F2F6] hover:bg-white border border-[#DFE6E9] transition-colors"
              >
                <Linkedin className="w-3 h-3 text-[#0984E3]" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 text-[10px] font-mono font-bold uppercase text-[#2D3436] hover:text-black bg-[#F1F2F6] hover:bg-white border border-[#DFE6E9] transition-colors"
              >
                <Github className="w-3 h-3 text-[#2D3436]" />
                <span>GitHub</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
