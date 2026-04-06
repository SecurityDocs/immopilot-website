"use client";

import { ArrowDown } from "lucide-react";

const stats = [
  {
    value: "25–40 €",
    unit: "pro Einheit und Monat",
    headline: "So teuer ist eine klassische Hausverwaltung",
    text: "Bei 50 Einheiten sind das bis zu 24.000 Euro im Jahr. Mit ImmoPilot zahlen Sie nur 4.200 Euro — ohne Qualitätsverlust.",
    detail: [
      { label: "Hausverwaltung pro Jahr (40 € × 50 × 12)", value: "24.000 €" },
      { label: "ImmoPilot pro Jahr (Basis + 5 €/WE)", value: "4.200 €" },
      { label: "Ihre jährliche Ersparnis", value: "19.800 €" },
    ],
    cta: "Bis zu 83 % günstiger als eine klassische Hausverwaltung.",
  },
  {
    value: "88 %",
    unit: "aller Nebenkostenabrechnungen fehlerhaft",
    headline: "Nebenkostenabrechnung als Fehlermarathon",
    text: "Über 149.000 geprüfte Abrechnungen zeigen: Mieter zahlen im Schnitt 515 Euro zu viel pro Jahr — wegen fehlerhafter Verwaltung.",
    detail: [
      { label: "Fehlerquote bundesweit", value: "88 %" },
      { label: "Überzahlung pro Mieter", value: "515 €" },
      { label: "Zeitaufwand pro Abrechnung", value: "40+ Std." },
    ],
    cta: "ImmoPilot erstellt rechtssichere Abrechnungen per Knopfdruck.",
  },
  {
    value: "33 %",
    unit: "der Eigentümer ohne Rückmeldung",
    headline: "Hausverwaltungen sind nicht erreichbar",
    text: "Mangelnde Kommunikation ist die häufigste Beschwerde. Reparaturen werden verschleppt, Sanierungen blockiert, Mieter unzufrieden.",
    detail: [
      { label: "Eigentümer ohne Antwort", value: "33 %" },
      { label: "Häufigste Beschwerde", value: "Kommunikation" },
      { label: "Sanierungen blockiert", value: "85 %" },
    ],
    cta: "ImmoPilot ist rund um die Uhr verfügbar — ohne Wartezeiten.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-16 lg:py-28 bg-slate-950 text-white relative overflow-hidden" id="problems">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Hausverwaltungen sind öfter eine Belastung{" "}
            <span className="text-primary-400">als eine Entlastung</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Das ist nicht unsere Meinung. Das sagen die Zahlen.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6 hover:border-slate-700 transition-all flex flex-col">
              <div className="mb-4">
                <div className="text-3xl sm:text-4xl font-extrabold text-white leading-none">{stat.value}</div>
                <div className="text-sm font-bold text-primary-400 mt-1.5">{stat.unit}</div>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-white mb-2">{stat.headline}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">{stat.text}</p>

              <div className="space-y-2.5 mb-5 flex-1">
                {stat.detail.map((d, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{d.label}</span>
                    <span className="text-sm font-bold text-white ml-2 shrink-0">{d.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-3">
                <p className="text-xs sm:text-sm font-semibold text-primary-400">{stat.cta}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#features" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-primary-400 transition-colors">
            Die Lösung? Sehen Sie selbst
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
