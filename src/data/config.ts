export const SITE_CONFIG = {
  name: "Rio Bonito Car Wash",
  tagline: "Detailing Automotriz Profesional a Domicilio",
  city: "Hermosillo, Sonora, México",
  phoneDisplay: "+52 662 107 9268",
  phoneRaw: "526621079268",
  whatsappBaseUrl: "https://wa.me/526621079268",
  domain: "https://riobonitocarwash.com",
  hero: {
    title: "Detailing Automotriz Profesional, a la Puerta de tu Hogar.",
    titleEn: "Professional Car Detailing, Delivered to Your Door.",
    subtitle: "Give your vehicle the care it deserves. Professional car cleaning services delivered directly to your home.",
    subtitleEs: "Dale a tu vehículo el cuidado que merece. Servicios profesionales de limpieza y detailing automotriz entregados directamente en tu domicilio.",
  },
  packages: [
    {
      id: "package-1",
      name: "PAQUETE 1 – LAVADO EXTERIOR + ASPIRADO",
      nameShort: "Lavado Exterior + Aspirado",
      priceRange: "$150 – $200 MXN",
      priceNote: "El precio final depende del tamaño del vehículo.",
      popular: true,
      badge: "Esencial",
      includes: [
        "Lavado exterior completo del vehículo.",
        "Limpieza profunda de superficies exteriores.",
        "Limpieza detallada de rines y llantas.",
        "Aspirado minucioso de interiores (asientos y alfombras).",
      ],
      whatsappMsg: "Hello! I'm interested in booking the Exterior Wash + Vacuum package with Rio Bonito Car Wash. My vehicle is [vehicle model]. My location is [location]. Could you let me know your availability?",
      whatsappUrl: "https://wa.me/526621079268?text=Hello%21%20I%27m%20interested%20in%20booking%20the%20Exterior%20Wash%20%2B%20Vacuum%20package.",
    },
    {
      id: "package-2",
      name: "PAQUETE 2 – DETAILING COMPLETO INTERIOR + EXTERIOR",
      nameShort: "Detailing Completo Interior + Exterior",
      priceRange: "$250 – $300 MXN",
      priceNote: "El precio final depende del tamaño del vehículo.",
      popular: false,
      badge: "Esencial",
      includes: [
        "Todo lo incluido en el Paquete 1.",
        "Limpieza y detallado completo de interiores.",
        "Limpieza de tablero.",
        "Limpieza profunda de consola central.",
        "Limpieza detallada de paneles de puertas.",
        "Desinfección de superficies interiores.",
        "Aspirado detallado en esquinas y zonas de difícil acceso.",
        "Limpieza de compartimentos interiores accesibles.",
      ],
      whatsappMsg: "Hello! I'm interested in booking the Complete Interior + Exterior Detailing package with Rio Bonito Car Wash. My vehicle is [vehicle model]. My location is [location]. Could you let me know your availability?",
      whatsappUrl: "https://wa.me/526621079268?text=Hello%21%20I%27m%20interested%20in%20booking%20the%20Complete%20Interior%20%2B%20Exterior%20Detailing%20package.",
    },
  ],
  serviceAreas: {
    singleVehicle: [
      "San Pedro Saucito",
      "Morelos",
      "Juan Bautista",
    ],
    multipleVehicles: [
      "Hermosillo (Cualquier colonia/zona para 3 o más vehículos)",
    ],
    policyNote: "Atendemos 1 vehículo a domicilio en San Pedro Saucito, Morelos y Juan Bautista. Para acudir a otras zonas de Hermosillo requerimos un mínimo de 3 vehículos para optimizar traslados e insumos.",
  },
  whyUs: [
    {
      title: "Comodidad a Tu Puerta",
      description: "Nos trasladamos directamente a tu hogar o trabajo con todo el equipo profesional necesario.",
      icon: "Home",
    },
    {
      title: "Atención Meticulosa al Detalle",
      description: "Tratamos cada vehículo como si fuera nuestro. Limpieza profunda rincón por rincón.",
      icon: "Sparkles",
    },
    {
      title: "Productos de Calidad Premium",
      description: "Insumos especializados que protegen la pintura, plásticos y vestiduras de tu vehículo.",
      icon: "ShieldCheck",
    },
    {
      title: "Resultados Profesionales",
      description: "Acabados impolutos con un brillo duradero y un interior fresco y libre de polvo.",
      icon: "Award",
    },
    {
      title: "Reserva Fácil vía WhatsApp",
      description: "Sin formularios complicados. Agenda tu cita en menos de 1 minuto por mensaje directo.",
      icon: "MessageSquare",
    },
  ],
  workingHours: {
    weekdays: {
      days: "Lunes a Viernes",
      hours: "15:00 - 19:00",
    },
    weekends: {
      days: "Sábado y Domingo",
      hours: "9:00 - 17:00",
    },
  },
};