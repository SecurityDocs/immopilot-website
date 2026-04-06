"use client";

import Link from "next/link";
import { Printer, ArrowLeft } from "lucide-react";

export default function ModernisierungsankuendigungPage() {
  return (
    <main className="pt-20 pb-16 bg-slate-50">
      <div className="bg-white border-b border-slate-200 py-3 print:hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <Link href="/vorlagen" className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600">
            <ArrowLeft size={16} /> Alle Vorlagen
          </Link>
          <button onClick={() => window.print()} className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700">
            <Printer size={15} /> Als PDF speichern
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 print:hidden">
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <h1 className="text-xl font-extrabold text-slate-900 mb-1">Modernisierungsankündigung §555c BGB</h1>
          <p className="text-sm text-slate-500 mb-3">Pflichtankündigung vor Modernisierungsmaßnahmen — mit Beschreibung der Maßnahme, Zeitplan, voraussichtlicher Mieterhöhung und Duldungspflicht des Mieters.</p>
          <div className="flex flex-wrap gap-2">
            {["3 Seiten", "§555c BGB", "Rechtssicher"].map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 print:border-0 print:p-0 space-y-6 text-sm text-slate-800">

          <div className="space-y-1">
            {["Vermieter Name / Firma", "Straße, Hausnummer", "PLZ, Ort"].map((f) => (
              <div key={f} className="border-b border-slate-300 h-6" />
            ))}
          </div>

          <div className="space-y-1 pt-2">
            {["Mieter Name, Vorname", "Straße der Mietsache, Wohnungsnr.", "PLZ, Ort"].map((f) => (
              <div key={f} className="border-b border-slate-300 h-6" />
            ))}
          </div>

          <div>
            <div className="text-xs text-slate-400">Datum (mind. 3 Monate vor Maßnahmenbeginn)</div>
            <div className="border-b border-slate-300 h-6 max-w-[200px]" />
          </div>

          <div className="pt-2">
            <p className="font-bold text-slate-900">Betreff: Ankündigung von Modernisierungsmaßnahmen gemäß § 555c BGB</p>
          </div>

          <div><p>Sehr geehrte(r) <span className="border-b border-slate-300 inline-block w-48" />,</p></div>

          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              ich beabsichtige, an der von Ihnen gemieteten Wohnung bzw. am Gebäude folgende
              Modernisierungsmaßnahmen durchzuführen und kündige diese hiermit gemäß § 555c BGB an.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4">
              <div>
                <p className="font-semibold text-slate-900 mb-2">Art und Beschreibung der Modernisierungsmaßnahme:</p>
                <div className="border border-slate-200 rounded-lg p-3 min-h-[80px] bg-white text-xs text-slate-400">
                  Beschreiben Sie die Maßnahme konkret (z. B. Einbau einer Zentralheizung, Dämmung der Außenwände, Erneuerung der Fenster, Einbau eines Aufzugs, energetische Sanierung etc.)
                </div>
              </div>

              <div>
                <p className="font-semibold text-slate-900 mb-2">Voraussichtlicher Zeitplan:</p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { label: "Beginn der Arbeiten", hint: "Datum" },
                    { label: "Voraussichtliche Dauer", hint: "Wochen / Monate" },
                    { label: "Voraussichtliches Ende", hint: "Datum" },
                  ].map(({ label, hint }) => (
                    <div key={label}>
                      <span className="text-xs text-slate-400">{label}</span>
                      <div className="border-b border-slate-300 h-6 mt-0.5" />
                      <span className="text-[10px] text-slate-300">{hint}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-semibold text-slate-900 mb-2">Auswirkungen auf die Nutzung der Wohnung:</p>
                <div className="border border-slate-200 rounded-lg p-3 min-h-[60px] bg-white text-xs text-slate-400">
                  z. B. Betreten des Mietobjekts erforderlich, vorübergehende Einschränkungen (welche Räume, welcher Zeitraum), Lärm- und Schmutzbeeinträchtigungen
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p className="font-semibold text-slate-900 mb-3">Angaben zur Mieterhöhung nach § 559 BGB</p>
              <div className="space-y-2">
                {[
                  ["Gesamtkosten der Modernisierung", "_____, _____ €"],
                  ["Davon auf Ihre Wohnung entfallend", "_____, _____ €"],
                  ["Mögliche jährliche Erhöhung (8 % der Kosten)", "_____, _____ €/Jahr"],
                  ["Mögliche monatliche Erhöhung", "_____, _____ €/Monat"],
                  ["Bisherige Nettokaltmiete", "_____, _____ €/Monat"],
                  ["Neue Nettokaltmiete (voraussichtlich)", "_____, _____ €/Monat"],
                ].map(([l, v]) => (
                  <div key={l} className="flex justify-between border-b border-slate-100 pb-1.5 last:border-0 last:pb-0">
                    <span className="text-slate-600 text-xs">{l}</span>
                    <span className="font-semibold text-slate-900 text-xs">{v}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Diese Angaben sind voraussichtliche Schätzungen. Die endgültige Mieterhöhung wird Ihnen nach
                Abschluss der Maßnahmen gemäß § 559b BGB mitgeteilt.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs text-slate-600">
              <p className="font-semibold text-slate-900 mb-2">Duldungspflicht (§ 555d BGB)</p>
              <p>Der Mieter hat die Modernisierungsmaßnahmen zu dulden. Eine Ausnahme gilt, wenn die Maßnahme für den Mieter oder seine Familie eine besondere Härte bedeuten würde. Ein Widerspruch muss schriftlich und spätestens einen Monat nach Zugang dieser Ankündigung erfolgen (§ 555d Abs. 3 BGB).</p>
            </div>

            <p>Für Rückfragen stehe ich Ihnen gerne zur Verfügung. Ich bitte Sie, mir den Zugang zu Ihrer Wohnung für die Dauer der Arbeiten zu ermöglichen.</p>

            <p>Mit freundlichen Grüßen,</p>
          </div>

          <div className="pt-2">
            <div className="border-b border-slate-300 h-12 mb-1 max-w-xs" />
            <p className="text-xs text-slate-500">Vermieter — Unterschrift und Name</p>
          </div>

          <div className="border-t border-slate-100 pt-4 text-xs text-slate-400">
            <p>Vorlage nach §§ 555c, 555d BGB · Stand: 2026 · ImmoPilot — immopilot.de · Kein Ersatz für individuelle Rechtsberatung.</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 print:hidden">
        <div className="bg-primary-600 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg mb-1">Modernisierung digital planen</h3>
            <p className="text-sm text-primary-200">ImmoPilot verwaltet Ihre Modernisierungsmaßnahmen, Kosten und Mieterhöhungen zentral.</p>
          </div>
          <Link href="/#contact" className="shrink-0 bg-white text-primary-600 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-primary-50 transition-colors">
            Demo anfragen
          </Link>
        </div>
      </div>
    </main>
  );
}
