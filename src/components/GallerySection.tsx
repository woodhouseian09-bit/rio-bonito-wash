function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function GallerySection() {
  const instagramReels = [
    "https://www.instagram.com/reel/DYgBSZZifAc/",
    "https://www.instagram.com/reel/DYQiMZzs07k/",
    "https://www.instagram.com/reel/DXsRyRpATZw/",
  ];

  return (
    <section id="galeria" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-4">
          Resultados en Acción
        </h2>
        <p className="text-slate-400 text-center mb-16 flex items-center justify-center gap-2">
          Mira nuestros procesos y transformaciones en{" "}
          <a
            href="https://www.instagram.com/rbs.autodetallado"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 font-bold"
          >
            <InstagramIcon className="w-4 h-4" /> @rbs.autodetallado
          </a>
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {instagramReels.map((url, i) => (
            <div key={i} className="glass-card p-4 rounded-2xl border border-slate-800 flex flex-col items-center">
              <iframe
                src={`${url}embed`}
                className="w-full aspect-[9/16] rounded-xl"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                title={`Proceso de Detailing ${i + 1}`}
              ></iframe>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 text-sm text-cyan-400 hover:text-cyan-300 font-medium"
              >
                Ver en Instagram
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
