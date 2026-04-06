"use client";

import Link from "next/link";
import { Printer, ArrowLeft } from "lucide-react";

export default function NebenkostenabrechnungAnschreibenPage() {
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
          <h1 className="text-xl font-extrabold text-slate-900 mb-1">Anschreiben zur Nebenkostenabrechnung</h1>
          <p className="text-sm text-slate-500 mb-3">Professionelles Begleitschreiben zur Betriebskostenabrechnung — mit Erläuterung des Saldos, Widerspruchsfrist und Anpassung der Vorauszahlungen.</p>
          <div className="flex flex-wrap gap-2">
            {["2 Seiten", "§556 BGB", "Zwei Varianten (Guthaben / Nachzahlung)"].map((tag) => (
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
            <div className="text-xs text-slate-400">Datum</div>
            <div className="border-b border-slate-300 h-6 max-w-[200px]" />
          </div>

          <div className="pt-2">
            <p className="font-bold text-slate-900">Betreff: Betriebskostenabrechnung für das Jahr <span className="border-b border-slate-300 inline-block w-16" /></p>
            <p className="text-xs text-slate-500 mt-0.5">Mietobjekt: <span className="border-b border-slate-300 inline-block w-56 ml-1" /></p>
          </div>

          <div><p>Sehr geehrte(r) <span className="border-b border-slate-300 inline-block w-48" />,</p></div>

          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              in der Anlage überreiche ich Ihnen die Betriebskostenabrechnung für den Zeitraum
              01.01.<span className="border-b border-slate-300 inline-block w-12 mx-1" /> bis 31.12.<span className="border-b border-slate-300 inline-block w-12 mx-1" />.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p className="font-semibold text-slate-900 mb-3">Zusammenfassung der Abrechnung:</p>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ["Gesamte Betriebskosten (Ihr Anteil)", "_____, _____ €"],
                    ["Geleistete Vorauszahlungen", "_____, _____ €"],
                    ["Saldo (positiv = Guthaben / negativ = Nachzahlung)", "_____, _____ €"],
                  ].map(([l, v]) => (
                    <tr key={l} className="border-b border-slate-100 last:border-0">
                      <td className="py-2 text-slate-600">{l}</td>
                      <td className="py-2 font-bold text-right text-slate-900">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Variante Guthaben */}
            <div className="border border-slate-200 rounded-xl p-4">
              <p className="font-semibold text-slate-900 mb-2">Variante A: Guthaben</p>
              <p className="text-slate-600 text-xs">
                Sie haben in diesem Jahr mehr Vorauszahlungen geleistet als Betriebskosten angefallen sind.
                Das Guthaben in Höhe von <span className="border-b border-slate-300 inline-block w-20 mx-1" /> € wird Ihnen bis zum
                <span className="border-b border-slate-300 inline-block w-28 mx-1" /> auf folgendes Konto überwiesen:
                IBAN: <span className="border-b border-slate-300 inline-block w-48 ml-1" />.
              </p>
            </div>

            {/* Variante Nachzahlung */}
            <div className="border border-slate-200 rounded-xl p-4">
              <p className="font-semibold text-slate-900 mb-2">Variante B: Nachzahlung</p>
              <p className="text-slate-600 text-xs">
                Aus der Abrechnung ergibt sich eine Nachzahlung in Höhe von <span className="border-b border-slate-300 inline-block w-20 mx-1" /> €.
                Ich bitte Sie, diesen Betrag bis spätestens zum <span className="border-b border-slate-300 inline-block w-28 mx-1" /> auf mein Konto
                IBAN: <span className="border-b border-slate-300 inline-block w-48 ml-1" /> zu überweisen.
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-900 mb-2">Anpassung der Vorauszahlungen</p>
              <p className="text-slate-600 leading-relaxed">
                Auf Grundlage der tatsächlich angefallenen Kosten passe ich Ihre monatliche
                Betriebskostenvorauszahlung ab dem <span className="border-b border-slate-300 inline-block w-28 mx-1" /> wie folgt an:
              </p>
              <div className="mt-2 grid sm:grid-cols-2 gap-3">
                {[
                  { label: "Bisherige Vorauszahlung", val: "_____, _____ €/Monat" },
                  { label: "Neue Vorauszahlung", val: "_____, _____ €/Monat" },
                ].map(({ label, val }) => (
                  <div key={label} className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="font-semibold text-slate-900">{val}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs text-slate-600">
              <p className="font-semibold text-slate-900 mb-1">Widerspruchsfrist</p>
              <p>
                Sie haben das Recht, der Abrechnung innerhalb von 12 Monaten nach Erhalt schriftlich zu widersprechen (§ 556 BGB).
                Eine inhaltliche Prüfung durch den Mieterverein oder einen Anwalt ist möglich.
                Auf Wunsch stelle ich Ihnen die Originalbelege zur Einsichtnahme zur Verfügung.
              </p>
            </div>

            <p>Bei Fragen stehe ich Ihnen gerne zur Verfügung.</p>
            <p>Mit freundlichen Grüßen,</p>
          </div>

          <div className="pt-2">
            <div className="border-b border-slate-300 h-12 mb-1 max-w-xs" />
            <p className="text-xs text-slate-500">Vermieter — Unterschrift und Name</p>
          </div>

          <div className="border-t border-slate-100 pt-4 text-xs text-slate-400">
            <p>Anschreiben zur Betriebskostenabrechnung nach § 556 BGB · Stand: 2026 · ImmoPilot — immopilot.de</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 print:hidden">
        <div className="bg-primary-600 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg mb-1">Nebenkostenabrechnung automatisieren</h3>
            <p className="text-sm text-primary-200">ImmoPilot erstellt rechtssichere Betriebskostenabrechnungen für alle Mieter per Knopfdruck.</p>
          </div>
          <Link href="/#contact" className="shrink-0 bg-white text-primary-600 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-primary-50 transition-colors">
            Demo anfragen
          </Link>
        </div>
      </div>
    </main>
  );
}
