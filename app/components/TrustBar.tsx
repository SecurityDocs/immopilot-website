"use client";

import {
  Shield,
  Sparkles,
  Server,
  Clock,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "KI-gestützt",
    text: "Intelligente Automatisierung für Zahlungsabgleich, Dokumentenanalyse und Mahnwesen. Die KI lernt mit und wird ständig besser.",
  },
  {
    icon: Shield,
    title: "DSGVO-konform",
    text: "Alle personenbezogenen Daten werden nach höchsten Datenschutzstandards verarbeitet. KI-Training nur mit anonymisierten Daten.",
  },
  {
    icon: Server,
    title: "Deutsche Server",
    text: "Ihre Immobiliendaten, Mietverträge und Dokumente werden ausschließlich auf Servern in Deutschland gehostet.",
  },
  {
    icon: Clock,
    title: "Rund um die Uhr verfügbar",
    text: "ImmoPilot ist 24 Stunden am Tag erreichbar. Ihre Mieter können jederzeit Anliegen melden, auch am Wochenende.",
  },
  {
    icon: HeartHandshake,
    title: "Keine Hausverwaltung nötig",
    text: "Sie behalten die volle Kontrolle über Ihre Immobilien. Keine Abhängigkeit, keine versteckten Kosten, keine Überraschungen.",
  },
  {
    icon: BadgeCheck,
    title: "Entwickelt in Deutschland",
    text: "Konzipiert und gebaut von einem deutschen IT-Unternehmen mit Erfahrung in Cyber Security und Immobilienverwaltung.",
  },
];

export default function TrustBar() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Warum Eigentümer{" "}
            <span className="gradient-text">ImmoPilot vertrauen</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500">
            Sicherheit, Datenschutz und Zuverlässigkeit stehen bei uns an erster Stelle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div key={item.title} className="bg-white rounded-xl border border-slate-200 p-5 hover:border-primary-200 hover:shadow-sm transition-all">
              <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center mb-3">
                <item.icon size={20} className="text-primary-600" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
