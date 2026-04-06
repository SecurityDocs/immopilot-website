"use client";

import Link from "next/link";
import { Printer, ArrowLeft } from "lucide-react";

export default function AufhebungsvertragPage() {
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
          <h1 className="text-xl font-extrabold text-slate-900 mb-1">Aufhebungsvertrag Mietverhältnis</h1>
          <p className="text-sm text-slate-500 mb-3">Einvernehmliche Auflösung des Mietverhältnisses vor Ablauf der regulären Kündigungsfrist — mit Übergabetermin, Kautionsregelung und Schlüsselrückgabe.</p>
          <div className="flex flex-wrap gap-2">
            {["3 Seiten", "§311 BGB", "Einvernehmlich"].map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 print:border-0 print:p-0 space-y-8 text-sm text-slate-800">

          <div className="text-center border-b border-slate-200 pb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Aufhebungsvertrag</h2>
            <p className="text-slate-500 text-sm">über das Mietverhältnis bezüglich der Wohnung</p>
            <div className="border-b border-slate-300 h-6 max-w-md mx-auto mt-2" />
            <p className="text-xs text-slate-400 mt-1">Anschrift der Mietsache</p>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-3 text-base border-b border-slate-100 pb-2">§ 1 Vertragsparteien</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-slate-700 mb-2">Vermieter</p>
                {["Name, Vorname / Firma", "Straße, Hausnummer", "PLZ, Ort"].map((f) => (
                  <div key={f}>
                    <span className="text-xs text-slate-400">{f}</span>
                    <div className="border-b border-slate-300 h-6 mb-1" />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-semibold text-slate-700 mb-2">Mieter</p>
                {["Name, Vorname", "Aktuelle Anschrift (falls abweichend)", "Telefon / E-Mail"].map((f) => (
                  <div key={f}>
                    <span className="text-xs text-slate-400">{f}</span>
                    <div className="border-b border-slate-300 h-6 mb-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-3 text-base border-b border-slate-100 pb-2">§ 2 Bestehender Mietvertrag</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Mietvertrag vom" },
                { label: "Mietbeginn" },
                { label: "Reguläres Mietende / Kündigungsfrist" },
                { label: "Aktuelle monatliche Gesamtmiete" },
              ].map(({ label }) => (
                <div key={label}>
                  <span className="text-xs text-slate-400">{label}</span>
                  <div className="border-b border-slate-300 h-6" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-3 text-base border-b border-slate-100 pb-2">§ 3 Aufhebungsvereinbarung</h3>
            <p className="text-slate-600 mb-3 leading-relaxed">
              Die Vertragsparteien vereinbaren einvernehmlich, das oben genannte Mietverhältnis
              vorzeitig zu beenden. Das Mietverhältnis endet am:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-xs text-slate-400">Vereinbartes Mietende</span>
                  <div className="border-b border-slate-300 h-8 mt-1" />
                </div>
                <div>
                  <span className="text-xs text-slate-400">Übergabetermin (Schlüsselrückgabe)</span>
                  <div className="border-b border-slate-300 h-8 mt-1" />
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Bis zum vereinbarten Mietende trägt der Mieter alle Pflichten aus dem Mietvertrag,
              insbesondere die Zahlung der Miete.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-3 text-base border-b border-slate-100 pb-2">§ 4 Zustand der Mietsache bei Rückgabe</h3>
            <div className="space-y-2 text-slate-600">
              <p>Der Mieter verpflichtet sich, die Mietsache zum Übergabetermin in folgendem Zustand zurückzugeben:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li>Besenrein und in vertragsgemäßem Zustand</li>
                <li>Alle Schlüssel vollständig zurückgegeben (Anzahl: <span className="border-b border-slate-300 inline-block w-16 mx-1" /> Schlüssel)</li>
                <li>Sämtliche eingebrachte Gegenstände entfernt</li>
                <li>Schönheitsreparaturen gemäß Mietvertrag: ☐ Ja &nbsp; ☐ Nein &nbsp; ☐ Gesonderte Vereinbarung</li>
              </ul>
            </div>
            <div className="mt-3">
              <span className="text-xs text-slate-400">Gesonderte Vereinbarungen zum Zustand (optional)</span>
              <div className="border border-slate-200 rounded-lg p-2 min-h-[60px] mt-1 bg-slate-50" />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-3 text-base border-b border-slate-100 pb-2">§ 5 Kaution</h3>
            <div className="space-y-2 text-slate-600">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-xs text-slate-400">Hinterlegte Kaution</span>
                  <div className="border-b border-slate-300 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400">Rückzahlung voraussichtlich bis</span>
                  <div className="border-b border-slate-300 h-6" />
                </div>
              </div>
              <p className="text-xs text-slate-500">
                Die Kaution wird nach ordnungsgemäßer Rückgabe der Mietsache und abschließender Prüfung aller
                Ansprüche (insbesondere Betriebskostenabrechnung, Schäden) zurückgezahlt.
                Der Vermieter behält sich vor, die Kaution für ausstehende Forderungen einzubehalten.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-3 text-base border-b border-slate-100 pb-2">§ 6 Gegenseitige Anerkennung</h3>
            <p className="text-slate-600 leading-relaxed">
              Mit Unterzeichnung dieses Vertrages heben die Parteien das Mietverhältnis einvernehmlich
              auf. Alle weiteren Ansprüche aus dem Mietverhältnis — mit Ausnahme der in diesem Vertrag
              ausdrücklich genannten — gelten als erledigt, soweit nichts anderes vereinbart ist.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-4 text-base border-b border-slate-100 pb-2">Unterschriften</h3>
            <p className="text-xs text-slate-500 mb-6">Dieser Aufhebungsvertrag wird in zwei Ausfertigungen erstellt. Jede Partei erhält ein Original.</p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <div className="border-b border-slate-300 h-12 mb-1" />
                <p className="text-xs text-slate-500">Ort, Datum</p>
                <div className="border-b border-slate-300 mt-4 h-12 mb-1" />
                <p className="text-xs text-slate-500">Vermieter — Unterschrift und Name</p>
              </div>
              <div>
                <div className="border-b border-slate-300 h-12 mb-1" />
                <p className="text-xs text-slate-500">Ort, Datum</p>
                <div className="border-b border-slate-300 mt-4 h-12 mb-1" />
                <p className="text-xs text-slate-500">Mieter — Unterschrift und Name</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 text-xs text-slate-400">
            <p>Aufhebungsvertrag Mietverhältnis · Stand: 2026 · ImmoPilot — immopilot.de · Kein Ersatz für individuelle Rechtsberatung.</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 print:hidden">
        <div className="bg-primary-600 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg mb-1">Mieterwechsel digital abwickeln</h3>
            <p className="text-sm text-primary-200">ImmoPilot automatisiert Übergabeprotokoll, Kautionsabrechnung und Neuvermietung in einem Workflow.</p>
          </div>
          <Link href="/#contact" className="shrink-0 bg-white text-primary-600 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-primary-50 transition-colors">
            Demo anfragen
          </Link>
        </div>
      </div>
    </main>
  );
}
