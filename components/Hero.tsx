
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-32 px-6 overflow-hidden">
      {/* Complex Architectural Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg viewBox="0 0 1440 900" className="w-full h-full text-blue-900/5 opacity-60">
          <circle cx="1200" cy="450" r="600" fill="none" stroke="currentColor" strokeWidth="0.5" className="meridian-arc" />
          <circle cx="1200" cy="450" r="500" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 10" />
          <path d="M 0,450 L 1440,450" stroke="currentColor" strokeWidth="0.5" />
          <path d="M 720,0 L 720,900" stroke="currentColor" strokeWidth="0.5" />
          {Array.from({length: 40}).map((_, i) => (
            <line key={i} x1={i * 40} y1="0" x2={i * 40} y2="900" stroke="currentColor" strokeWidth="0.2" />
          ))}
          {Array.from({length: 25}).map((_, i) => (
            <line key={i} x1="0" y1={i * 40} x2="1440" y2={i * 40} stroke="currentColor" strokeWidth="0.2" />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center space-x-4 mb-12">
               <div className="h-[2px] w-16 bg-blue-900"></div>
               <span className="text-[10px] font-mono font-bold tracking-[0.5em] uppercase text-blue-900">
                 Institutional Advisory Portfolio 2024
               </span>
            </div>
            
            <h1 className="text-6xl md:text-[5.5rem] font-serif font-bold text-slate-900 leading-[0.95] mb-12 tracking-tighter">
              Governance for a <br />
              <span className="italic font-light text-slate-500 border-b-4 border-blue-900/20 pb-2">Data-Driven</span> <br />
              Global Economy.
            </h1>
            
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="max-w-md">
                <p className="text-xl text-slate-600 font-light leading-relaxed mb-10">
                  We design the regulatory and digital risk architecture for the world's most critical infrastructure providers and sovereign wealth entities.
                </p>
                <div className="flex flex-wrap gap-6">
                  <a href="#contact" className="inline-flex items-center justify-center px-10 py-5 bg-blue-900 text-white font-bold group shadow-2xl shadow-blue-900/20">
                    <span className="text-[11px] uppercase tracking-[0.2em]">Initiate Briefing</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="hidden md:block pt-4 border-l border-slate-200 pl-10">
                <div className="space-y-8">
                   <div>
                      <h4 className="text-[10px] font-mono font-bold text-blue-900 uppercase tracking-widest mb-1">Status</h4>
                      <p className="text-sm font-semibold text-slate-900">Active Advisory Mode</p>
                   </div>
                   <div>
                      <h4 className="text-[10px] font-mono font-bold text-blue-900 uppercase tracking-widest mb-1">Focus</h4>
                      <p className="text-sm font-semibold text-slate-900">Sovereign Data Resilience</p>
                   </div>
                   <div>
                      <h4 className="text-[10px] font-mono font-bold text-blue-900 uppercase tracking-widest mb-1">Tier</h4>
                      <p className="text-sm font-semibold text-slate-900">Level 1 Infrastructure</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative side badge */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block px-6 py-24 border-l border-y border-slate-200 bg-white/50 backdrop-blur-md vertical-text">
        <span className="text-[10px] font-mono font-bold uppercase tracking-[1em] text-slate-400 rotate-180" style={{writingMode: 'vertical-rl'}}>
          STABILITY THROUGH ARCHITECTURE
        </span>
      </div>
    </section>
  );
};
