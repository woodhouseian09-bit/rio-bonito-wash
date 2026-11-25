import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rio Bonito Car Wash | Detailing Profesional a Domicilio en Hermosillo",
  description: "Servicio profesional de detailing automotriz a domicilio en Hermosillo por Ian Woodhouse. Limpieza exterior, interior y lavado a profundidad con los mejores resultados.",
  keywords: "detailing hermosillo, lavado de autos a domicilio, rio bonito car wash, limpieza interior autos, autolavado a domicilio, san pedro saucito, Ian Woodhouse",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-200">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
