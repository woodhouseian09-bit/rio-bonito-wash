import { SITE_CONFIG } from "@/data/config";
import { MapPin, Info, Users, Car, Home } from "lucide-react";

export default function CoverageSection() {
  return (
    <section id="cobertura" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            WE COME TO YOU.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Servicio a domicilio para tu comodidad. Conoce nuestra cobertura según el número de vehículos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Single Vehicle Area */}
          <div className="glass-card p-8 rounded-2xl border border-cyan-500/20">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
              <Home className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">1 Vehículo</h3>
            <p className="text-slate-400 text-sm mb-6">
              Atención personalizada en tu domicilio o lugar de trabajo en:
            </p>
            <ul className="space-y-2">
              {SITE_CONFIG.serviceAreas.singleVehicle.map((area) => (
                <li key={area} className="flex items-center gap-3 text-white font-medium">
                  <MapPin className="w-4 h-4 text-emerald-500" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Multiple Vehicles Area */}
          <div className="glass-card p-8 rounded-2xl border border-cyan-500/20">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">3+ Vehículos</h3>
            <p className="text-slate-400 text-sm mb-6">
              Para flotillas o grupos, nos trasladamos a cualquier zona de Hermosillo.
            </p>
            <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-800">
              <p className="text-white font-medium text-sm">
                Hermosillo, Sonora (Área Metropolitana)
              </p>
              <p className="text-slate-500 text-xs mt-2 italic">
                *Requiere cita previa para coordinar logística.
              </p>
            </div>
          </div>
        </div>

        {/* Policy Note */}
        <div className="mt-12 flex items-start gap-4 p-6 glass-card rounded-xl border border-slate-800 max-w-3xl mx-auto">
          <Info className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
          <p className="text-slate-300 text-sm italic">
            {SITE_CONFIG.serviceAreas.policyNote}
          </p>
        </div>
      </div>
    </section>
  );
}
