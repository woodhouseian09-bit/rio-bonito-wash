import Link from "next/link";
import { SITE_CONFIG } from "@/data/config";
import { Clock } from "lucide-react";

export default function Footer() {
  const { workingHours } = SITE_CONFIG;
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-2">{SITE_CONFIG.name}</h3>
          <p className="text-slate-500 text-xs leading-relaxed mb-4">
            Servicios profesionales de detailing automotriz entregados a la puerta de tu hogar en Hermosillo y zonas de cobertura.
          </p>
          <p className="text-xs text-slate-600">
            Atendido por <strong>Ian Woodhouse</strong>
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#paquetes" className="hover:text-cyan-400 transition-colors">Paquetes</a></li>
            <li><a href="#cobertura" className="hover:text-cyan-400 transition-colors">Área de Servicio</a></li>
            <li><a href="#por-que-nosotros" className="hover:text-cyan-400 transition-colors">¿Por Qué Elegirnos?</a></li>
            <li><a href="#galeria" className="hover:text-cyan-400 transition-colors">Galería</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/privacidad" className="hover:text-cyan-400 transition-colors">Aviso de Privacidad</Link></li>
            <li><Link href="/terminos" className="hover:text-cyan-400 transition-colors">Términos de Servicio</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            Horarios
          </h4>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-center gap-2">
              <span className="text-slate-500 w-32">{workingHours.weekdays.days}:</span>
              <span>{workingHours.weekdays.hours}</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-slate-500 w-32">{workingHours.weekends.days}:</span>
              <span>{workingHours.weekends.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-900 text-center text-xs text-slate-600">
        <p>© 2026 {SITE_CONFIG.name}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
