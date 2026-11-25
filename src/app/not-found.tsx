import { SITE_CONFIG } from "@/data/config";

export default function Custom404() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-white mb-4">404</h1>
        <h2 className="text-2xl font-bold text-cyan-400 mb-6">Página no encontrada</h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all"
        >
          Volver al Inicio
        </a>
      </div>
    </main>
  );
}
