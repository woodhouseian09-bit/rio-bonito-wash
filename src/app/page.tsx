import { SITE_CONFIG } from "@/data/config";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoverageSection from "@/components/CoverageSection";
import WhyUsSection from "@/components/WhyUsSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />

      {/* Packages Section */}
      <section id="paquetes" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-16">
            Nuestros Paquetes de Detailing
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {SITE_CONFIG.packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`glass-card p-8 rounded-2xl border ${pkg.popular ? "border-cyan-500/50" : "border-slate-800"}`}
              >
                {pkg.badge && (
                  <span className="inline-block px-3 py-1 mb-4 rounded-full bg-cyan-900/30 text-cyan-400 text-xs font-bold uppercase tracking-widest">
                    {pkg.badge}
                  </span>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.nameShort}</h3>
                <p className="text-3xl font-extrabold text-white mb-1">{pkg.priceRange}</p>
                <p className="text-slate-400 text-sm mb-6">{pkg.priceNote}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={pkg.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-4 rounded-xl font-bold transition-all ${
                    pkg.popular
                      ? "bg-cyan-500 hover:bg-cyan-400 text-slate-950"
                      : "bg-slate-800 hover:bg-slate-700 text-white"
                  }`}
                >
                  Agendar este paquete
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CoverageSection />
      <WhyUsSection />
      <GallerySection />
      <AboutSection />

      {/* Floating WhatsApp Button */}
      <a
        href={SITE_CONFIG.whatsappBaseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-transform duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </main>
  );
}
