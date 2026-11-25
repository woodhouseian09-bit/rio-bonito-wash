"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, MapPin, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950">
      {/* Background Hero Image with Dark Overlay & Lighting Gradients */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 transform scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2000&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        <div className="absolute inset-0 bg-radial-gradient opacity-80" />

        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-8 shadow-lg shadow-cyan-500/10"
        >
          <MapPin className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>Servicio A Domicilio en Hermosillo, San Pedro Saucito, Morelos y Juan Bautista</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 max-w-5xl mx-auto leading-[1.1]"
        >
          Professional Car Detailing,{" "}
          <span className="text-gradient">Delivered to Your Door.</span>
        </motion.h1>

        {/* Spanish Secondary Headline / Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-normal mb-10 leading-relaxed"
        >
          {SITE_CONFIG.hero.subtitle}
          <span className="block mt-2 text-slate-400 text-base sm:text-lg">
            (Dale a tu vehículo el cuidado que merece con nuestros servicios profesionales de limpieza y detallado a domicilio.)
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-xl mx-auto"
        >
          <a
            href="#paquetes"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <span>Explorar Servicios</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href={SITE_CONFIG.packages[1].whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Agendar por WhatsApp</span>
          </a>
        </motion.div>

        {/* Quick Highlights / Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left"
        >
          <div className="glass-card p-4 rounded-xl border border-slate-800 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" />
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-wider">100% Móvil</p>
              <p className="text-slate-400 text-xs">Llegamos a tu domicilio</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-slate-800 flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-cyan-400 shrink-0" />
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-wider">Detailing Premium</p>
              <p className="text-slate-400 text-xs">Atención a cada detalle</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-slate-800 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-cyan-400 shrink-0" />
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-wider">Precios Claros</p>
              <p className="text-slate-400 text-xs">Sin costos ocultos</p>
            </div>
          </div>

          <div className="glass-card p-4 rounded-xl border border-slate-800 flex items-center gap-3">
            <MessageCircle className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-wider">Reserva Rápida</p>
              <p className="text-slate-400 text-xs">Confirmación vía WhatsApp</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
