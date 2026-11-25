import { SITE_CONFIG } from "@/data/config";
import { UserCheck, Shield, PhoneCall } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-slate-800 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-cyan-400 font-bold text-xs uppercase tracking-widest block mb-2">
                Atención Personalizada
              </span>
              <h2 className="text-3xl font-extrabold text-white mb-4">
                El Compromiso de RB Autodetallado
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                En <strong>Rio Bonito Car Wash</strong> (RB Autodetallado), dirigido por <strong>Ian Woodhouse</strong>, entendemos el valor y el cuidado que tu automóvil merece. Nuestro objetivo no es solo lavar un auto, sino brindarle un tratamiento meticuloso que conserve su brillo, limpie a fondo cada rincón y te devuelva esa sensación de auto nuevo.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <UserCheck className="w-5 h-5 text-cyan-400" />
                  <span>Trato directo y profesional</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <Shield className="w-5 h-5 text-cyan-400" />
                  <span>Cuidado exhaustivo en interiores y exteriores</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-6 bg-slate-900/60 rounded-2xl border border-slate-800 text-center">
              <PhoneCall className="w-10 h-10 text-emerald-400 mb-3 animate-pulse" />
              <h3 className="text-white font-bold text-lg mb-1">¿Tienes alguna duda o solicitud especial?</h3>
              <p className="text-slate-400 text-xs mb-6 max-w-xs">
                Contáctanos directamente por WhatsApp y te atenderemos con gusto.
              </p>
              <a
                href={SITE_CONFIG.whatsappBaseUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
              >
                Enviar Mensaje
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
