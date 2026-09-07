import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  ExternalLink,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowLeft
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onNavigateToPage?: (page: 1 | 2) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigateToPage }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Computer Vision',
    datasetVolume: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [deliveryStatus, setDeliveryStatus] = useState<'sent' | 'activation_required' | 'fallback'>('sent');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const targetEmail = PERSONAL_INFO.email; // jimmygitz3@gmail.com

  const generateSubject = () => {
    return `[Data Annotation Inquiry] ${formData.projectType} from ${formData.name || 'Client'}`;
  };

  const generateBody = () => {
    return `Hello James,\n\nI am contacting you regarding your Data Annotation and ML Specialist services.\n\n` +
      `PROJECT BRIEF & REQUIREMENTS:\n` +
      `----------------------------------------\n` +
      `• Client Name: ${formData.name}\n` +
      `• Client Email: ${formData.email}\n` +
      `• Domain Taxonomy: ${formData.projectType}\n` +
      `• Estimated Volume & Timeline: ${formData.datasetVolume || 'Not specified'}\n\n` +
      `SPECIFICATIONS & GUIDELINES:\n` +
      `${formData.message}\n\n` +
      `----------------------------------------\n` +
      `Dispatched to: ${targetEmail}`;
  };

  const getGmailUrl = () => {
    const su = encodeURIComponent(generateSubject());
    const body = encodeURIComponent(generateBody());
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${su}&body=${body}`;
  };

  const getMailtoUrl = () => {
    const su = encodeURIComponent(generateSubject());
    const body = encodeURIComponent(generateBody());
    return `mailto:${targetEmail}?subject=${su}&body=${body}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(generateBody());
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Send real POST request to FormSubmit for direct email dispatch to jimmygitz3@gmail.com
      const res = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          projectType: formData.projectType,
          datasetVolume: formData.datasetVolume || 'Not specified',
          message: formData.message,
          _subject: generateSubject(),
          _captcha: 'false',
          _template: 'table'
        })
      });

      const data = await res.json().catch(() => ({}));

      if (data.success === 'true' || data.success === true) {
        setDeliveryStatus('sent');
        setStatusMessage('Email delivered directly to jimmygitz3@gmail.com inbox!');
      } else if (data.message && data.message.includes('Activate Form')) {
        setDeliveryStatus('activation_required');
        setStatusMessage(data.message);
      } else {
        setDeliveryStatus('fallback');
        setStatusMessage(data.message || 'Inquiry prepared.');
      }
    } catch (error) {
      console.warn('Network transmission error, using client fallback', error);
      setDeliveryStatus('fallback');
      setStatusMessage('Network route busy. You can dispatch directly via Gmail or your mail app below.');
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-[#F8F9FA] border-b border-[#DFE6E9] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <span className="text-[10px] font-mono text-[#0984E3] uppercase tracking-[0.3em] font-bold block">
              Contract & Inquiries // Direct Pipeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#2D3436]">
              Contact James Muigai
            </h2>
            <p className="text-xs sm:text-sm text-[#636E72] leading-relaxed">
              Available for Data Annotator and ML Specialist contracts, model dataset curation, pilot calibration batches, or full-time team roles. Contact directly via telephone, WhatsApp, email, or send project specifications below.
            </p>
          </div>

          {onNavigateToPage && (
            <button
              type="button"
              onClick={() => onNavigateToPage(1)}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-[10px] font-mono font-bold uppercase tracking-wider text-[#2D3436] bg-white hover:bg-[#F1F2F6] border border-[#DFE6E9] shadow-[2px_2px_0px_#DFE6E9] transition-all cursor-pointer self-start md:self-auto"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#0984E3]" />
              <span>Back to Page 1 (Profile & Skills)</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          
          {/* Left Column: Direct Links & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Direct Telephone Card */}
            <div className="bg-white p-5 sm:p-6 border border-[#DFE6E9] shadow-[4px_4px_0px_#DFE6E9]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-wider text-[#636E72]">
                  <Phone className="w-3.5 h-3.5 text-[#0984E3]" />
                  <span>TELEPHONE & MOBILE</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#2D3436] bg-[#F1F2F6] hover:bg-white border border-[#DFE6E9] shadow-[1px_1px_0px_#DFE6E9] transition-all cursor-pointer"
                >
                  {copiedPhone ? <Check className="w-3 h-3 text-[#0984E3]" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                id="contact-phone-link"
                className="text-base sm:text-lg font-black font-mono text-[#2D3436] hover:text-[#0984E3] transition-colors block"
              >
                {PERSONAL_INFO.phone}
              </a>
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-[#DFE6E9]">
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex-1 py-1.5 px-2 bg-[#2D3436] hover:bg-[#0984E3] text-white text-[10px] font-mono font-bold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3 h-3" />
                  <span>Direct Call</span>
                </a>
                <a
                  href={`https://wa.me/254726995935?text=Hello%20James,%20I%20would%20like%20to%20discuss%20a%20data%20annotation%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 px-2 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] font-mono font-bold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Direct Email Card */}
            <div className="bg-white p-5 sm:p-6 border border-[#DFE6E9] shadow-[4px_4px_0px_#DFE6E9]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-wider text-[#636E72]">
                  <Mail className="w-3.5 h-3.5 text-[#0984E3]" />
                  <span>DIRECT EMAIL</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#2D3436] bg-[#F1F2F6] hover:bg-white border border-[#DFE6E9] shadow-[1px_1px_0px_#DFE6E9] transition-all cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-[#0984E3]" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                id="contact-email-link"
                className="text-base sm:text-lg font-black font-mono text-[#2D3436] hover:text-[#0984E3] transition-colors break-all block"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-[11px] text-[#636E72] mt-1 font-mono">
                Response time: Quick turnaround within 2 to 6 hours.
              </p>
            </div>

            {/* Social / Professional Profiles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin-link"
                className="bg-white p-4 border border-[#DFE6E9] shadow-[3px_3px_0px_#DFE6E9] hover:border-[#0984E3] transition-all group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#F1F2F6] border border-[#DFE6E9] text-[#2D3436] flex items-center justify-center group-hover:bg-[#0984E3] group-hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-[#2D3436]">LinkedIn</h4>
                    <p className="text-[10px] text-[#636E72] font-mono">in/james-gitau-muigai</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#636E72] group-hover:text-[#0984E3] transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-github-link"
                className="bg-white p-4 border border-[#DFE6E9] shadow-[3px_3px_0px_#DFE6E9] hover:border-[#0984E3] transition-all group flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#F1F2F6] border border-[#DFE6E9] text-[#2D3436] flex items-center justify-center group-hover:bg-[#2D3436] group-hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-[#2D3436]">GitHub</h4>
                    <p className="text-[10px] text-[#636E72] font-mono">jimmygitz3</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#636E72] group-hover:text-[#2D3436] transition-colors" />
              </a>
            </div>

            {/* Quick Commitments / Availability Pill */}
            <div className="p-5 bg-white border border-[#DFE6E9] shadow-[3px_3px_0px_#DFE6E9] space-y-3 text-xs text-[#636E72]">
              <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[10px] text-[#2D3436]">
                <ShieldCheck className="w-4 h-4 text-[#0984E3]" />
                <span>Working Principles & Calibration</span>
              </div>
              <ul className="space-y-1.5 pl-5 list-disc text-[#636E72] text-xs">
                <li>Non-Disclosure Agreement (NDA) compliant before task access</li>
                <li>Pilot batches (50–200 items) for guideline synchronization</li>
                <li>Fast iteration on client QA feedback and revisions</li>
                <li>Flexible engagement: Contract, Hourly, or Per-Task SLA</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact & Project Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 border border-[#DFE6E9] shadow-[5px_5px_0px_#DFE6E9]">
              
              {submitted ? (
                <div className="py-6 sm:py-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 bg-[#0984E3] text-white flex items-center justify-center shadow-[3px_3px_0px_#0767B1]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#0984E3] uppercase tracking-[0.25em] font-bold">
                      INQUIRY DISPATCH PIPELINE
                    </span>
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#2D3436]">
                      Target: jimmygitz3@gmail.com
                    </h3>
                  </div>

                  {/* Delivery Status Banner */}
                  {deliveryStatus === 'activation_required' ? (
                    <div className="w-full text-left bg-amber-50 border-2 border-amber-300 p-4 space-y-2">
                      <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase font-mono">
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                        <span>One-Time Form Activation Required</span>
                      </div>
                      <p className="text-xs text-amber-900 leading-relaxed">
                        FormSubmit has sent a confirmation email with subject <strong>"Activate Form"</strong> to <strong>{targetEmail}</strong>.
                      </p>
                      <p className="text-[11px] text-amber-800 font-mono">
                        👉 <strong>To activate automated forwarding:</strong> Please log into <strong>jimmygitz3@gmail.com</strong> (check Inbox and Spam/Updates folder) and click the <strong>"Activate Form"</strong> button. Once clicked, all future submissions from this website will arrive in your inbox automatically.
                      </p>
                    </div>
                  ) : deliveryStatus === 'sent' ? (
                    <div className="w-full text-left bg-emerald-50 border border-emerald-300 p-3 text-xs text-emerald-800 font-mono">
                      ✓ Inquiry successfully transmitted directly to <strong>{targetEmail}</strong>.
                    </div>
                  ) : (
                    <div className="w-full text-left bg-blue-50 border border-blue-200 p-3 text-xs text-blue-800 font-mono">
                      ℹ️ Inquiry prepared for <strong>{targetEmail}</strong>.
                    </div>
                  )}

                  {/* Immediate 1-Click Sending Options */}
                  <div className="w-full bg-[#F8F9FA] border border-[#DFE6E9] p-4 space-y-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#636E72] block">
                      Guaranteed Instant Send Channels:
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <a
                        href={getGmailUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-3 bg-red-600 hover:bg-red-700 text-white text-xs font-mono font-bold uppercase tracking-wider shadow-[2px_2px_0px_#B91C1C] transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Send via Gmail Web</span>
                      </a>

                      <a
                        href={getMailtoUrl()}
                        className="w-full py-2.5 px-3 bg-[#0984E3] hover:bg-[#0767B1] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-[2px_2px_0px_#0767B1] transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Send via Mail Client</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyBrief}
                      className="w-full py-2 px-3 bg-white hover:bg-[#F1F2F6] text-[#2D3436] border border-[#DFE6E9] text-[11px] font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      {copiedBrief ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied Full Inquiry to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#636E72]" />
                          <span>Copy Formatted Inquiry Text</span>
                        </>
                      )}
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', projectType: 'Computer Vision', datasetVolume: '', message: '' });
                    }}
                    className="mt-2 px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-wider text-[#2D3436] bg-[#F1F2F6] hover:bg-[#2D3436] hover:text-white border border-[#DFE6E9] shadow-[2px_2px_0px_#DFE6E9] transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-inquiry-form" className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-[#DFE6E9] pb-3">
                    <div>
                      <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-[#2D3436]">
                        Project Brief // Send Direct Inquiry
                      </h3>
                      <p className="text-xs text-[#636E72] mt-0.5">
                        Share details regarding your dataset domain, estimated volume, and preferred annotation tooling.
                      </p>
                    </div>
                    <span className="text-[9px] font-mono bg-[#EBF5FB] border border-[#AED6F1] text-[#0984E3] font-bold px-2 py-0.5 self-start sm:self-auto">
                      TO: {targetEmail}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div>
                      <label htmlFor="contact-name" className="block text-[10px] font-mono font-bold uppercase text-[#2D3436] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g., Jane Doe"
                        className="w-full px-3 py-2 text-xs bg-[#F8F9FA] border border-[#DFE6E9] font-mono text-[#2D3436] focus:border-[#0984E3] focus:outline-none shadow-[inset_1px_1px_2px_rgba(0,0,0,0.03)]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-[10px] font-mono font-bold uppercase text-[#2D3436] mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full px-3 py-2 text-xs bg-[#F8F9FA] border border-[#DFE6E9] font-mono text-[#2D3436] focus:border-[#0984E3] focus:outline-none shadow-[inset_1px_1px_2px_rgba(0,0,0,0.03)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-project-type" className="block text-[10px] font-mono font-bold uppercase text-[#2D3436] mb-1">
                        Project Domain
                      </label>
                      <select
                        id="contact-project-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3 py-2 text-xs bg-[#F8F9FA] border border-[#DFE6E9] font-mono text-[#2D3436] focus:border-[#0984E3] focus:outline-none"
                      >
                        <option value="Computer Vision">Computer Vision (BBoxes / Polygons)</option>
                        <option value="Natural Language Processing">NLP (NER / Text Tagging)</option>
                        <option value="Audio Annotation">Audio (Speech / Timestamps)</option>
                        <option value="Medical / AgTech">Agriculture & Medical Imaging</option>
                        <option value="Quality Inspection">Dataset QA & Sanity Audit</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-volume" className="block text-[10px] font-mono font-bold uppercase text-[#2D3436] mb-1">
                        Estimated Volume / Timeline
                      </label>
                      <input
                        type="text"
                        id="contact-volume"
                        value={formData.datasetVolume}
                        onChange={(e) => setFormData({ ...formData, datasetVolume: e.target.value })}
                        placeholder="e.g., 2,000 images / 2 weeks"
                        className="w-full px-3 py-2 text-xs bg-[#F8F9FA] border border-[#DFE6E9] font-mono text-[#2D3436] focus:border-[#0984E3] focus:outline-none shadow-[inset_1px_1px_2px_rgba(0,0,0,0.03)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-[10px] font-mono font-bold uppercase text-[#2D3436] mb-1">
                      Task Description & Guidelines *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify class categories, labeling conventions, tool preferences (CVAT, Roboflow, Label Studio, Excel), and any test batch requirements..."
                      className="w-full px-3 py-2 text-xs bg-[#F8F9FA] border border-[#DFE6E9] font-mono text-[#2D3436] focus:border-[#0984E3] focus:outline-none resize-none shadow-[inset_1px_1px_2px_rgba(0,0,0,0.03)]"
                    />
                  </div>

                  <div className="space-y-2 pt-1">
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      disabled={submitting}
                      className="w-full py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-white bg-[#0984E3] hover:bg-[#0767B1] shadow-[3px_3px_0px_#0767B1] transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                    >
                      {submitting ? (
                        <span>TRANSMITTING INQUIRY TO {targetEmail}...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>TRANSMIT INQUIRY TO JIMMYGITZ3@GMAIL.COM</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-between text-[10px] font-mono text-[#636E72] px-1">
                      <span>Direct email delivery to jimmygitz3@gmail.com</span>
                      <a
                        href={getGmailUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0984E3] hover:underline flex items-center gap-1 font-bold"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Or compose in Gmail</span>
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
