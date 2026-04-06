import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ImmoPilot — KI-gestützte Immobilienverwaltung | Hausverwaltung Software",
  description:
    "ImmoPilot ist die KI-gestützte Software für Immobilienverwaltung und Hausverwaltung. Nebenkostenabrechnung auf Knopfdruck, automatischer Zahlungsabgleich, Mieterverwaltung, Mahnwesen, Mieter-Portal mit Tablet — DSGVO-konform, deutsche Server, 24/7 verfügbar. Keine teure Hausverwaltung mehr nötig.",
  keywords: [
    "Immobilienverwaltung", "Hausverwaltung Software", "Hausverwaltung digital",
    "Nebenkostenabrechnung Software", "Mieterverwaltung Software", "Immobilien Software",
    "Property Management Software", "Vermietung Software", "Mietverwaltung",
    "Hausverwaltung KI", "Betriebskostenabrechnung", "Wohnungsverwaltung",
    "Mehrfamilienhaus verwalten", "digitale Hausverwaltung", "Mieteinnahmen verwalten",
    "Zahlungsabgleich Miete", "Mahnwesen Vermieter", "Mieterportal",
    "Hausverwaltung ohne Verwalter", "Eigentümer Software", "DSGVO Immobilienverwaltung",
    "Immobilien verwalten ohne Hausverwaltung", "Mietpreisanalyse Software",
    "Nebenkostenabrechnung automatisch", "Vermieter Software",
  ],
  openGraph: {
    title: "ImmoPilot — KI-gestützte Immobilienverwaltung | Keine teure Hausverwaltung mehr nötig",
    description:
      "Die intelligente Software für Eigentümer und Verwalter von Mehrfamilienhäusern. Nebenkostenabrechnung, Mieterverwaltung, Zahlungsabgleich — alles KI-gestützt, DSGVO-konform, 24/7 verfügbar.",
    type: "website",
    locale: "de_DE",
    siteName: "ImmoPilot",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.immopilot.de" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${inter.variable} scroll-smooth`}>
      <head>
        <meta name="author" content="ImmoPilot" />
      </head>
      <body className="min-h-screen bg-white text-slate-900 font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
