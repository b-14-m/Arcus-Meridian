
import React from 'react';

export const WhyItMatters: React.FC = () => {
  return (
    <section id="about" className="py-32 md:py-56 px-6 relative bg-white overflow-hidden">
      {/* Structural Watermarks */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[18vw] font-serif font-bold text-slate-100/50 leading-none opacity-20">MERIDIAN</span>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <span className="text-[11px] font-mono font-bold tracking-[0.5em] uppercase text-blue-900 mb-8 block underline underline-offset-8">Strategic Intelligence</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-12 leading-[1.05] tracking-tighter">
                Architecture for <br />
                <span className="italic font-light text-blue-900">Permanent</span> <br />
                Stability.
              </h2>
              <div className="space-y-10">
                <p className="text-2xl text-slate-600 font-light leading-relaxed">
                  In an era of rapid technological fragmentation, Arcus Meridian provides the architectural anchor for institutional longevity.
                </p>
                <div className="p-10 bg-slate-50 border border-slate-200">
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-900 mb-6">Engagement Protocol</h4>
                  <p className="text-slate-500 font-light text-sm leading-relaxed mb-8">
                    Our process begins with a 30-day Deep Diagnostic phase. We analyze the intersection of your technical stack and global regulatory exposure.
                  </p>
                  <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-blue-900 flex items-center group">
                    View Methodology <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-12">
              {[
                { 
                  title: "Investor & Board Confidence", 
                  desc: "We provide the verifiable governance artifacts required to satisfy institutional LPs, investment boards, and regulatory examiners.",
                  tag: "TRUST-MATRIX"
                },
                { 
                  title: "Infrastructure Readiness", 
                  desc: "Digital assets future-proofed against evolving technical and legal norms. We build for the next 15 years, not the next 15 weeks.",
                  tag: "INFRA-RDY"
                },
                { 
                  title: "Sovereign Regulatory Durability", 
                  desc: "Our systems are designed to withstand multi-jurisdictional shifts and geopolitical regime changes without operational collapse.",
                  tag: "SOV-DUR"
                }
              ].map((item, idx) => (
                <div key={idx} className="group p-12 border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <span className="text-4xl font-serif italic text-blue-900/20 group-hover:text-blue-900 transition-colors duration-500">0{idx + 1}.</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-bold text-slate-400 mb-2 block">{item.tag}</span>
                    <h4 className="text-2xl font-serif font-bold text-slate-900 mb-4">{item.title}</h4>
                    <p className="text-slate-500 font-light leading-relaxed text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
              
              {/* Complex Graphic Block */}
              <div className="mt-12 h-80 relative bg-slate-900 overflow-hidden flex items-center justify-center p-12">
                 <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%" viewBox="0 0 400 200">
                       {Array.from({length: 20}).map((_, i) => (
                         <circle key={i} cx={200} cy={100} r={i * 15} fill="none" stroke="#3B82F6" strokeWidth="0.5" />
                       ))}
                       <line x1="0" y1="100" x2="400" y2="100" stroke="#3B82F6" strokeWidth="0.5" />
                       <line x1="200" y1="0" x2="200" y2="200" stroke="#3B82F6" strokeWidth="0.5" />
                    </svg>
                 </div>
                 <div className="relative z-10 text-center">
                    <h5 className="text-[11px] font-mono font-bold text-blue-400 uppercase tracking-[0.5em] mb-4">Diagnostic Visualization</h5>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">ARCUS Core Engine // Version 4.2.1-Final</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
