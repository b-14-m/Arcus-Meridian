
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 border-t border-slate-200 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-10 h-10 border-2 border-slate-800 rotate-45 flex items-center justify-center">
                 <div className="w-6 h-[1px] bg-slate-800 -rotate-45"></div>
              </div>
              <span className="text-2xl font-bold tracking-tighter text-slate-900">
                ARCUS <span className="text-slate-400 italic font-serif font-light">MERIDIAN</span>
              </span>
            </div>
            <p className="text-slate-500 font-light text-sm max-w-sm leading-relaxed mb-8">
              Architectural resilience for the institutional digital age. We operate globally from our core hubs in London, Singapore, and New York.
            </p>
            <div className="flex space-x-4">
               {['LN', 'SG', 'NY', 'TK'].map(hub => (
                 <span key={hub} className="text-[10px] font-mono font-bold text-slate-300 hover:text-blue-900 transition-colors cursor-default tracking-widest">
                   {hub}
                 </span>
               ))}
            </div>
          </div>
          
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h6 className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-900 mb-6 underline underline-offset-4 decoration-blue-900/30">Mandates</h6>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                <li><a href="#" className="hover:text-blue-900 transition-colors">Digital Governance</a></li>
                <li><a href="#" className="hover:text-blue-900 transition-colors">Risk Oversight</a></li>
                <li><a href="#" className="hover:text-blue-900 transition-colors">Sovereign Data</a></li>
              </ul>
            </div>
            <div>
              <h6 className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-900 mb-6 underline underline-offset-4 decoration-blue-900/30">Intelligence</h6>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                <li><a href="#" className="hover:text-blue-900 transition-colors">Policy Briefs</a></li>
                <li><a href="#" className="hover:text-blue-900 transition-colors">Risk Indices</a></li>
                <li><a href="#" className="hover:text-blue-900 transition-colors">Methodology</a></li>
              </ul>
            </div>
            <div>
              <h6 className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-900 mb-6 underline underline-offset-4 decoration-blue-900/30">Institutional</h6>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                <li><a href="#" className="hover:text-blue-900 transition-colors">Legal Terms</a></li>
                <li><a href="#" className="hover:text-blue-900 transition-colors">Privacy Charter</a></li>
                <li><a href="#" className="hover:text-blue-900 transition-colors">Board Portal</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Arcus Meridian Ltd. Registered in England & Wales.
          </p>
          <div className="flex items-center space-x-6 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
            <span className="text-blue-900">Auth: AM-SEC-OK</span>
            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
            <span>System Pulse: 78ms</span>
          </div>
        </div>
      </div>
      
      {/* Decorative architectural background line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-900/20 to-transparent"></div>
    </footer>
  );
};
