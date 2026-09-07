import React from 'react';
import { Quote, Star, CheckCircle, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-14 sm:py-20 border-b border-[#DFE6E9] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="max-w-2xl space-y-2">
          <span className="text-[10px] font-mono text-[#0984E3] uppercase tracking-[0.3em] font-bold block">
            Endorsements // QA Reputation
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#2D3436]">
            Recommendations & Lead Feedback
          </h2>
          <p className="text-xs sm:text-sm text-[#636E72] leading-relaxed">
            Direct evaluations and feedback from Machine Learning engineering leads and QA supervisors regarding James Muigai's dataset delivery and edge-case diligence.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              id={`testimonial-${test.id}`}
              className="bg-[#F8F9FA] p-6 sm:p-7 border border-[#DFE6E9] shadow-[4px_4px_0px_#DFE6E9] hover:border-[#0984E3] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 bg-[#0984E3] text-white flex items-center justify-center shadow-[2px_2px_0px_#0767B1]">
                    <Quote className="w-4 h-4 fill-white" />
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Project Tag */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0984E3] bg-white px-2 py-0.5 border border-[#DFE6E9]">
                    {test.projectFocus}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-[#2D3436] leading-relaxed italic mb-6">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#DFE6E9] flex items-center gap-3">
                <div className="w-10 h-10 bg-[#2D3436] text-white flex items-center justify-center text-xs font-black font-mono shadow-[2px_2px_0px_#DFE6E9] shrink-0">
                  {test.avatarInitials}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-black uppercase tracking-tight text-[#2D3436]">
                    {test.author}
                  </h4>
                  <p className="text-[11px] text-[#636E72]">
                    {test.role}
                  </p>
                  <p className="text-[10px] font-mono font-bold uppercase text-[#0984E3]">
                    {test.organization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Consensus Verification Footnote */}
        <div className="p-4 sm:p-5 bg-white border border-[#DFE6E9] shadow-[3px_3px_0px_#DFE6E9] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#2D3436]">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#0984E3] shrink-0" />
            <span className="text-xs text-[#636E72]">
              All project recommendations reflect verified ground-truth delivery contracts and blind consensus QA benchmarks.
            </span>
          </div>
          <span className="font-mono text-[10px] font-bold uppercase text-[#2D3436] bg-[#F1F2F6] border border-[#DFE6E9] px-2 py-1">
            AVERAGE FLEISS' KAPPA: 0.94+
          </span>
        </div>

      </div>
    </section>
  );
};
