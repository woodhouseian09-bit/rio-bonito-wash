"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X, Car, Shield } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-panel py-3 shadow-xl border-b border-cyan-500/10"
          : "bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Area - Designed for easy custom logo swap */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1"
            aria-label="Rio Bonito Car Wash - Inicio"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center border border-cyan-400/30">
                <Car className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg tracking-wider text-white uppercase group-hover:text-cyan-300 transition-colors">
                Rio Bonito
              </span>
              <span className="text-[10px] tracking-[0.25em] font-semibold text-cyan-400 uppercase">
                Car Wash & Detailing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#paquetes"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Paquetes
            </Link>
            <Link
              href="#cobertura"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Área de Servicio
            </Link>
            <Link
              href="#por-que-nosotros"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              ¿Por qué elegirnos?
            </Link>
            <Link
              href="#galeria"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Galería
            </Link>
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={SITE_CONFIG.packages[1].whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-sm px-4 py-2.5 rounded-full shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Agendar por WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-cyan-400" />
              ) : (
                <Menu className="w-6 h-6 text-slate-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-cyan-500/20 px-4 pt-4 pb-6 mt-3 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            <Link
              href="#paquetes"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-cyan-400 font-medium py-2 px-3 rounded-lg hover:bg-slate-800/50"
            >
              Paquetes y Precios
            </Link>
            <Link
              href="#cobertura"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-cyan-400 font-medium py-2 px-3 rounded-lg hover:bg-slate-800/50"
            >
              Área de Servicio ("We Come To You")
            </Link>
            <Link
              href="#por-que-nosotros"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-cyan-400 font-medium py-2 px-3 rounded-lg hover:bg-slate-800/50"
            >
              ¿Por Qué Elegirnos?
            </Link>
            <Link
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-200 hover:text-cyan-400 font-medium py-2 px-3 rounded-lg hover:bg-slate-800/50"
            >
              Galería
            </Link>
          </nav>
          <div className="pt-2 border-t border-slate-800">
            <a
              href={SITE_CONFIG.packages[1].whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-emerald-500/30"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Agendar por WhatsApp (+52 662 107 9268)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
