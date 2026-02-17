
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200 nav-glow">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-10 h-10 border-2 border-blue-900 rotate-45 flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-blue-900/5"></div>
               <div className="w-6 h-[1px] bg-blue-900 -rotate-45"></div>
            </div>
            <div className="absolute -bottom-1 -right-1 flex space-x-1">
               <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-sm"></span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter text-slate-900 leading-none">
              ARCUS <span className="text-blue-900 italic font-serif font-light">MERIDIAN</span>
            </span>
            <span className="text-[10px] font-mono font-bold text-slate-400 tracking-[0.2em] mt-1 uppercase">
              Digital Governance Group
            </span>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-12">
          <ul className="flex items-center space-x-10 text-[11px] font-bold tracking-[0.15em] uppercase text-slate-600">
            <li><a href="#services" className="hover:text-blue-900 transition-colors accent-underline">Core Mandates</a></li>
            <li><a href="#about" className="hover:text-blue-900 transition-colors accent-underline">Strategic Pillars</a></li>
            <li><a href="#insights" className="hover:text-blue-900 transition-colors accent-underline">Intelligence</a></li>
          </ul>
          <div className="h-8 w-[1px] bg-slate-200"></div>
          <a href="#contact" className="relative inline-flex items-center justify-center px-6 py-3 bg-blue-900 text-white font-bold group overflow-hidden">
            <span className="relative z-10 text-[10px] uppercase tracking-widest">Request Briefing</span>
            <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </nav>
      </div>
    </header>
  );
};
