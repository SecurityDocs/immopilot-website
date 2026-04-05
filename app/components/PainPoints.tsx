"use client";

import { ArrowDown, AlertTriangle } from "lucide-react";

const stats = [
  {
    value: "25–40 €",
    unit: "pro Einheit und Monat",
    headline: "So teuer ist eine klassische Hausverwaltung",
    text: "Bei 50 Einheiten sind das über 18.000 Euro im Jahr. Mit ImmoPilot zahlen Sie nur 2.328 Euro.",
    detail: [
      { label: "Hausverwaltung pro Jahr", value: "18.300 €" },
      { label: "ImmoPilot pro Jahr", value: "2.328 €" },
      { label: "Ihre Ersparnis", value: "15.972 €" },
    ],
    cta: "Bis zu 87 Prozent günstiger als eine klassische Hausverwaltung.",
  },
  {
    value: "88 %",
    unit: "aller Nebenkostenabrechnungen fehlerhaft",
    headline: "Nebenkostenabrechnung als Fehlermarathon",
    text: "Über 149.000 geprüfte Abrechnungen zeigen: Mieter zahlen im Schnitt 515 Euro zu viel pro Jahr.",
    detail: [
      { label: "Fehlerquote bundesweit", value: "88 %" },
      { label: "Überzahlung pro Mieter", value: "515 €" },
      { label: "Zeitaufwand pro Abrechnung", value: "40+ Std." },
    ],
    cta: "ImmoPilot erstellt fehlerfreie Abrechnungen per Knopfdruck.",
  },
  {
    value: "33 %",
    unit: "der Eigentümer ohne Rückmeldung",
    headline: "Hausverwaltungen sind nicht erreichbar",
    text: "Mangelnde Kommunikation ist die häufigste Beschwerde. Reparaturen werden verschleppt, Sanierungen blockiert.",
    detail: [
      { label: "Eigentümer ohne Antwort", value: "33 %" },
      { label: "Häufigste Beschwerde", value: "Kommunikation" },
      { label: "Sanierungen blockiert", value: "85 %" },
    ],
    cta: "ImmoPilot ist rund um die Uhr erreichbar. Ohne Wartezeiten.",
  },
  {
    value: "Bis 50 %",
    unit: "der Eigentümer verlieren ihren Verwalter",
    headline: "Totale Abhängigkeit von der Hausverwaltung",
    text: "Immer mehr Verwaltungen kündigen ihren Kunden. Wer gekündigt wird, findet oft monatelang keinen Ersatz.",
    detail: [
      { label: "Von Kündigung betroffen", value: "bis 50 %" },
      { label: "Finden keinen Ersatz", value: "33 %" },
      { label: "Lehnen kleine Bestände ab", value: "55 %" },
    ],
    cta: "Mit ImmoPilot sind Sie unabhängig. Ihre Daten, Ihre Kontrolle.",
  },
  {
    value: "10.000+ €",
    unit: "Mehrkosten durch überteuerte Aufträge",
    headline: "Hausverwaltungen vergeben Aufträge an Bekannte",
    text: "Ohne Vergleichsangebote werden Reparaturen an befreundete Firmen vergeben. Versteckte Provisionen sind üblich.",
    detail: [
      { label: "Vergleichsangebote eingeholt", value: "Oft nicht" },
      { label: "Versteckte Aufschläge", value: "Üblich" },
      { label: "Dokumentierter Einzelfall", value: "10.000 €" },
    ],
    cta: "Bei ImmoPilot entscheiden Sie selbst über Ihre Handwerker.",
  },
  {
    value: "2.300+",
    unit: "Hausverwaltungen weniger in vier Jahren",
    headline: "Verwaltermangel in Deutschland verschärft sich",
    text: "Die Zahl sank von 24.300 auf unter 22.000. Wer heute keinen Verwalter findet, braucht eine digitale Lösung.",
    detail: [
      { label: "Verwalter 2020 bis 2024", value: "24.300 → <22.000" },
      { label: "Stellen unbesetzt", value: "24,2 %" },
      { label: "Aufgaben nicht umsetzbar", value: "85 %" },
    ],
    cta: "Keine Hausverwaltung nötig. ImmoPilot gibt Ihnen alle Werkzeuge.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden" id="problems">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Hausverwaltungen sind öfter eine Belastung{" "}
            <span className="text-primary-400">als eine Entlastung</span>
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Das ist nicht unsere Meinung. Das sagen die Zahlen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-slate-700 transition-all flex flex-col">
              {/* Big number */}
              <div className="mb-3">
                <div className="text-3xl font-extrabold text-white leading-none">{stat.value}</div>
                <div className="text-xs font-bold text-primary-400 mt-1">{stat.unit}</div>
              </div>

              <h3 className="text-sm font-bold text-white mb-2">{stat.headline}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">{stat.text}</p>

              {/* Detail rows */}
              <div className="space-y-2 mb-4 flex-1">
                {stat.detail.map((d, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">{d.label}</span>
                    <span className="text-[11px] font-bold text-white">{d.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-2.5 text-center">
                <p className="text-[11px] font-semibold text-primary-400">{stat.cta}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#features" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-primary-400 transition-colors">
            Die Lösung? Sehen Sie selbst
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
