
import React, { useState } from 'react';
import { Mail, Briefcase, User, MessageSquare, Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-48 px-6 bg-[#0B0F19] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative inline-block mb-12">
            <div className="w-24 h-24 border-2 border-blue-500/50 rotate-45 flex items-center justify-center mx-auto">
               <Send className="w-8 h-8 text-blue-400 -rotate-45" />
            </div>
          </div>
          <h2 className="text-5xl font-serif font-bold mb-6 tracking-tight">Transmission Received</h2>
          <p className="text-slate-400 text-xl font-light max-w-lg mx-auto leading-relaxed">
            Your institutional inquiry has been securely logged. A designated advisory principal will initiate contact via the provided corporate channel.
          </p>
          <div className="mt-16 text-[10px] font-mono text-blue-500/50 uppercase tracking-[0.3em]">
            Reference: AM-INQ-{Math.floor(Math.random() * 90000 + 10000)}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 md:py-56 px-6 bg-[#0B0F19] text-white relative overflow-hidden">
      {/* Structural Grids and Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/5 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-slate-900/50"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-800/50"></div>
        <div className="absolute top-0 left-1/3 w-px h-full bg-slate-800/50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center space-x-3 px-5 py-2 border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-10 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-blue-500/50 shadow-lg"></span>
              <span>Institutional Entry Portal</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-10 leading-[1.05] tracking-tighter">
              Initiate <br />
              <span className="italic text-blue-400 font-light">Advisory</span> <br />
              Engagement.
            </h2>
            <p className="text-slate-400 text-xl font-light leading-relaxed mb-20 max-w-lg">
              Arcus Meridian operates under strict non-disclosure mandates. Please use this secure channel to request a formal capability briefing or diagnostic audit.
            </p>
            
            <div className="space-y-12">
               <div className="flex items-start space-x-6">
                  <div className="mt-1 p-3 bg-slate-800 border border-slate-700">
                     <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                     <h5 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">Corporate Comms</h5>
                     <p className="text-lg font-serif italic text-slate-200">briefing@arcusmeridian.com</p>
                  </div>
               </div>
               <div className="flex items-start space-x-6">
                  <div className="mt-1 p-3 bg-slate-800 border border-slate-700">
                     <Briefcase className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                     <h5 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">London HQ</h5>
                     <p className="text-lg font-serif italic text-slate-200">Level 42, The Shard, London SE1</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative p-1 bg-gradient-to-br from-slate-700 to-slate-900 shadow-2xl">
              <div className="bg-slate-900 p-10 md:p-16">
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 flex items-center">
                        <User className="w-3 h-3 mr-2" /> Principal Representative
                      </label>
                      <input required type="text" className="w-full bg-slate-800/30 border border-slate-700 p-4 text-white focus:outline-none focus:border-blue-400 transition-all font-light" placeholder="Full Name" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 flex items-center">
                        <Briefcase className="w-3 h-3 mr-2" /> Organization / Sovereign Entity
                      </label>
                      <input required type="text" className="w-full bg-slate-800/30 border border-slate-700 p-4 text-white focus:outline-none focus:border-blue-400 transition-all font-light" placeholder="Legal Entity Name" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 flex items-center">
                      <Mail className="w-3 h-3 mr-2" /> Authorized Contact Email
                    </label>
                    <input required type="email" className="w-full bg-slate-800/30 border border-slate-700 p-4 text-white focus:outline-none focus:border-blue-400 transition-all font-light" placeholder="name@organization.com" />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 flex items-center">
                      <MessageSquare className="w-3 h-3 mr-2" /> Context of Inquiry
                    </label>
                    <textarea required rows={5} className="w-full bg-slate-800/30 border border-slate-700 p-5 text-white focus:outline-none focus:border-blue-400 transition-all resize-none font-light leading-relaxed" placeholder="Please summarize the technical and regulatory nature of the engagement..." />
                  </div>
                  <button type="submit" className="w-full group relative overflow-hidden py-6 bg-blue-900 text-white font-bold shadow-xl">
                    <span className="relative z-10 text-[11px] uppercase tracking-[0.4em]">Submit Official Request</span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 text-blue-900 text-[11px] uppercase tracking-[0.4em] transition-opacity duration-300">Proceed</span>
                  </button>
                  <p className="text-center text-[9px] font-mono text-slate-600 uppercase tracking-widest">
                    Encryption: TLS 1.3 // End-to-End Secure Processing
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
