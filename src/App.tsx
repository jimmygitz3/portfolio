/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Layers, ShieldCheck, Phone, Mail, ChevronRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ToolsSection } from './components/ToolsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState<1 | 2>(1);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Check initial hash and support browser back/forward
  useEffect(() => {
    const handleHashCheck = () => {
      const hash = window.location.hash;
      if (['#page-2', '#projects', '#testimonials', '#contact'].includes(hash)) {
        setActivePage(2);
      } else if (['#page-1', '#home', '#skills', '#tools'].includes(hash)) {
        setActivePage(1);
      }
    };

    handleHashCheck();
    window.addEventListener('hashchange', handleHashCheck);
    return () => window.removeEventListener('hashchange', handleHashCheck);
  }, []);

  const switchPage = (page: 1 | 2) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.replaceState(null, '', page === 1 ? '#page-1' : '#page-2');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#2D3436] flex flex-col font-sans selection:bg-[#0984E3] selection:text-white">
      {/* Fixed Navigation Bar with Two-Page Switcher & Quick Contacts */}
      <Navbar 
        activePage={activePage} 
        setActivePage={switchPage} 
        activeSection={activeSection} 
      />

      {/* Main Content Area Constrained to Max 2 Pages */}
      <main className="flex-1">
        {activePage === 1 ? (
          /* PAGE 1: Profile & Skills */
          <div id="page-1" className="animate-in fade-in duration-200">
            {/* Section 1: Home / Profile */}
            <HeroSection onNavigateToPage={switchPage} />

            {/* Section 2: Skills (Annotation Techniques & Interactive Sandbox) */}
            <SkillsSection />

            {/* Section 3: Tools & Tech (Pipelines & QA Verification Script) */}
            <ToolsSection />

            {/* Page 1 Bottom Transition Banner */}
            <section className="py-12 bg-[#F1F2F6] border-b border-[#DFE6E9]">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="bg-white p-6 sm:p-8 border border-[#DFE6E9] shadow-[5px_5px_0px_#DFE6E9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-[#0984E3]" />
                      <span className="text-[10px] font-mono text-[#0984E3] uppercase tracking-[0.25em] font-bold">
                        Continue to Page 2 of 2
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black uppercase text-[#2D3436] tracking-tight">
                      Annotated Dataset Archive & Direct Inquiries
                    </h3>
                    <p className="text-xs text-[#636E72] leading-relaxed">
                      Review James Muigai's 12 verified annotation projects (&lt;20 benchmark), client testimonials, and telephone mobile (+254 726 995 935) contact channels.
                    </p>
                  </div>

                  <button
                    type="button"
                    id="page-1-next-page-btn"
                    onClick={() => switchPage(2)}
                    className="px-5 py-3 bg-[#0984E3] hover:bg-[#0767B1] text-white text-[10px] font-mono font-bold uppercase tracking-widest shadow-[3px_3px_0px_#0767B1] transition-all flex items-center gap-2 flex-shrink-0 cursor-pointer"
                  >
                    <span>Proceed to Page 2: Projects & Contact</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>
          </div>
        ) : (
          /* PAGE 2: Projects & Contact */
          <div id="page-2" className="animate-in fade-in duration-200 pt-20">
            {/* Page 2 Header Banner */}
            <div className="bg-[#F1F2F6] border-b border-[#DFE6E9] py-4">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#2D3436]" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#2D3436]">
                    Page 2 of 2 // Annotated Project Archive & Direct Contact
                  </span>
                  <span className="text-[9px] font-mono bg-[#EBF5FB] text-[#0984E3] border border-[#AED6F1] px-1.5 py-0.5 font-bold uppercase">
                    12 Projects Benchmarked
                  </span>
                </div>

                <button
                  type="button"
                  id="page-2-return-btn"
                  onClick={() => switchPage(1)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[#2D3436] bg-white hover:bg-[#F8F9FA] border border-[#DFE6E9] shadow-[2px_2px_0px_#DFE6E9] transition-all cursor-pointer self-start sm:self-auto"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-[#0984E3]" />
                  <span>Return to Page 1 (Profile & Skills)</span>
                </button>
              </div>
            </div>

            {/* Section 4: Projects (Showcasing James's 12 projects benchmark) */}
            <ProjectsSection />

            {/* Section 5: Testimonials (Supervisor & QA evaluations) */}
            <TestimonialsSection />

            {/* Section 6: Contact (Telephone, WhatsApp, Email, Proposal form) */}
            <ContactSection onNavigateToPage={switchPage} />

            {/* Page 2 Bottom Return Bar */}
            <section className="py-8 bg-[#F1F2F6] border-b border-[#DFE6E9]">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#636E72]">
                  <ShieldCheck className="w-4 h-4 text-[#0984E3]" />
                  <span>James Muigai • +254 726 995 935 • jimmygitz3@gmail.com</span>
                </div>
                <button
                  type="button"
                  onClick={() => switchPage(1)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-wider text-[#2D3436] bg-white hover:bg-[#F8F9FA] border border-[#DFE6E9] shadow-[2px_2px_0px_#DFE6E9] transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-[#0984E3]" />
                  <span>Return to Page 1: Profile & Skills</span>
                </button>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer with Page Navigation */}
      <Footer activePage={activePage} setActivePage={switchPage} />
    </div>
  );
}
