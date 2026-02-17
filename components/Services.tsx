
import React from 'react';
import { Shield, Database, Layout, Globe, ArrowUpRight } from 'lucide-react';

const specializations = [
  {
    title: "Digital Governance Architecture",
    description: "Designing multi-layered internal frameworks that translate complex jurisdictional policy into executable digital operations for global enterprises.",
    icon: Layout,
    code: "GVR-ARCH-01",
    features: ["Policy Digitization", "Enforcement Protocols", "System Auditing"]
  },
  {
    title: "AI Risk & Institutional Oversight",
    description: "Systemic risk assessment for frontier AI deployment. We build the guardrails that protect long-term institutional reputation and operational continuity.",
    icon: Shield,
    code: "AI-RISK-04",
    features: ["Model Bias Audits", "Red Teaming", "Agentic Oversight"]
  },
  {
    title: "Cross-Border Data Strategy",
    description: "Strategic navigation of fragmented data laws. We ensure sovereign data remains compliant across the US, EU, and Asian regulatory blocks.",
    icon: Globe,
    code: "CBD-STRAT-09",
    features: ["Privacy Engineering", "Localization Maps", "Sovereign Cloud"]
  },
  {
    title: "Regulatory Positioning",
    description: "High-stakes engagement strategies for institutions. We bridge the gap between technical reality and legislative intent for better positioning.",
    icon: Database,
    code: "REG-POS-12",
    features: ["Impact Forecasting", "Policy Sandboxing", "Compliance Roadmap"]
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 md:py-48 px-6 bg-slate-900 text-white relative overflow-hidden">
      {/* Deep Background Grids */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(circle, #FFF 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <span className="text-[11px] font-mono font-bold tracking-[0.4em] uppercase text-blue-400 mb-8 block">Operating Specializations</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
                The Anatomy of <br />
                <span className="italic text-blue-400 font-light">Institutional Risk.</span>
              </h2>
            </div>
            <div className="md:w-1/3 pb-2 border-b border-blue-900/30">
               <p className="text-slate-400 font-light leading-relaxed">
                 We provide a diagnostic-led architecture service that treats digital governance as an engineering discipline rather than a legal box-ticking exercise.
               </p>
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-px bg-slate-800 border border-slate-800">
          {specializations.map((item, idx) => (
            <div key={idx} className="bg-slate-900 p-12 md:p-16 group relative hover:bg-slate-800 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-slate-800 font-mono text-sm group-hover:text-blue-900 transition-colors">
                [{item.code}]
              </div>
              
              <div className="mb-12">
                <div className="w-16 h-16 border border-blue-900/50 flex items-center justify-center group-hover:border-blue-400 transition-colors">
                  <item.icon className="w-8 h-8 text-blue-400 stroke-[1px]" />
                </div>
              </div>
              
              <h3 className="text-3xl font-serif font-bold mb-6 group-hover:text-blue-300 transition-colors">{item.title}</h3>
              <p className="text-slate-400 font-light text-lg leading-relaxed mb-10 group-hover:text-slate-300 transition-colors">
                {item.description}
              </p>
              
              <ul className="space-y-4 pt-10 border-t border-slate-800">
                {item.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-[10px] uppercase tracking-widest text-blue-400/60 font-bold group-hover:text-blue-400 transition-colors">
                    <span className="w-1 h-1 bg-blue-400 mr-3 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-12 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                <button className="flex items-center text-xs font-bold uppercase tracking-[0.2em] text-white">
                  Learn More <ArrowUpRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
