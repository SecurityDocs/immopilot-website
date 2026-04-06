"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Für wen ist ImmoPilot geeignet?",
    a: "Für private Eigentümer, die 1 bis 250 Wohneinheiten selbst verwalten wollen — egal ob Einsteiger, erfahrener Vermieter oder wachsendes Portfolio. Sie brauchen kein IT-Vorwissen.",
  },
  {
    q: "Was kostet ImmoPilot pro Monat?",
    a: "Ab 49 € Grundgebühr + 5 € pro Wohneinheit. Damit zahlen Sie bei 10 Einheiten 99 € — statt bis zu 350 € bei einer klassischen Hausverwaltung. Keine Einrichtungsgebühr, monatlich kündbar.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "Die meisten Eigentümer sind in unter 24 Stunden einsatzbereit. Wir richten gemeinsam Ihre Objekte, Mieter und Verträge ein — per persönlichem Onboarding. Der KI-Import übernimmt vorhandene Dokumente automatisch.",
  },
  {
    q: "Übernimmt ImmoPilot das Deutsche Mietrecht automatisch?",
    a: "Ja. Mahnfristen, Nebenkostenabrechnung nach BetrKV, Mieterhöhungen nach Mietspiegel und Kündigungsfristen sind direkt eingebaut. Sie müssen das Mietrecht nicht kennen — ImmoPilot hält es automatisch ein.",
  },
  {
    q: "Was ist das Tablet im Treppenhaus?",
    a: "Ein iPad, das wir montieren, einrichten und liefern. Mieter melden Anliegen per Sprache oder Formular direkt vor Ort — ohne Anruf bei Ihnen. Sie erhalten alle Meldungen strukturiert in Ihrem Dashboard. Verfügbar bis 31.12.2026 ab Professional kostenlos.",
  },
  {
    q: "Kann ich meine bestehenden Dokumente importieren?",
    a: "Ja. Laden Sie Mietverträge, Abrechnungen oder Excel-Tabellen hoch — die KI erkennt Mieter, Beträge und Laufzeiten automatisch und legt alles korrekt an.",
  },
  {
    q: "Was passiert, wenn ich eine Immobilie kaufe, die schon mit ImmoPilot verwaltet wird?",
    a: "Der Vorbesitzer übergibt Ihnen das gesamte Objekt digital — alle Mieter, Verträge, Dokumente und die Kommunikationshistorie. Nichts geht verloren.",
  },
  {
    q: "Ist ImmoPilot DSGVO-konform?",
    a: "Ja. Alle Daten werden auf deutschen Servern verarbeitet und gespeichert. Kein Datentransfer in Drittländer, KI-Training nur mit anonymisierten Daten, Löschung auf Anfrage innerhalb von 30 Tagen.",
  },
  {
    q: "Kann ich jederzeit kündigen?",
    a: "Ja — monatlich, ohne Mindestlaufzeit, ohne Kündigungsfristen. Ihre Daten können Sie vollständig exportieren.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-5">
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Häufige Fragen
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Alles was Sie vor dem Start wissen sollten.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all ${
                open === i ? "border-primary-200 shadow-sm" : "border-slate-200"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className={`text-sm sm:text-base font-semibold leading-snug ${open === i ? "text-primary-700" : "text-slate-900"}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-slate-400 transition-transform duration-200 ${open === i ? "rotate-180 text-primary-600" : ""}`}
                />
              </button>
              {open === i && (
                <div
                  className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4"
                  style={{ animation: "slide-up 0.2s ease-out forwards" }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
          Noch eine Frage?{" "}
          <a href="#contact" className="text-primary-600 font-semibold hover:underline">
            Schreiben Sie uns direkt.
          </a>
        </p>
      </div>
    </section>
  );
}
