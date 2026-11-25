import { SITE_CONFIG } from "@/data/config";
import * as Icons from "lucide-react";

export default function WhyUsSection() {
  return (
    <section id="por-que-nosotros" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-16">
          ¿Por qué elegir Rio Bonito?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_CONFIG.whyUs.map((item, index) => {
            const Icon = (Icons as any)[item.icon];
            return (
              <div key={index} className="glass-card p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all">
                <div className="w-12 h-12 bg-cyan-900/20 rounded-xl flex items-center justify-center mb-6">
                  {Icon && <Icon className="w-6 h-6 text-cyan-400" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
