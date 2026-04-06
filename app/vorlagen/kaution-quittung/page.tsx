"use client";

import Link from "next/link";
import { Printer, ArrowLeft } from "lucide-react";

export default function KautionQuittungPage() {
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
          <h1 className="text-xl font-extrabold text-slate-900 mb-1">Kautionsquittung</h1>
          <p className="text-sm text-slate-500 mb-3">Bestätigung des Kautionsempfangs nach §551 BGB — mit Angaben zu Betrag, Anlageform und Rückgabebedingungen.</p>
          <div className="flex flex-wrap gap-2">
            {["1 Seite", "§551 BGB", "Sofort verwendbar"].map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 print:border-0 print:p-0 space-y-6 text-sm text-slate-800">

          <div className="text-center border-b border-slate-200 pb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Kautionsquittung</h2>
            <p className="text-xs text-slate-400">Gemäß § 551 BGB</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-slate-700 mb-2">Vermieter (Empfänger)</p>
              <div className="space-y-1">
                {["Name, Vorname / Firma", "Straße, Hausnummer", "PLZ, Ort"].map((f) => (
                  <div key={f}>
                    <span className="text-xs text-slate-400">{f}</span>
                    <div className="border-b border-slate-300 h-6" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold text-slate-700 mb-2">Mieter (Einzahler)</p>
              <div className="space-y-1">
                {["Name, Vorname", "Straße der Mietsache", "PLZ, Ort"].map((f) => (
                  <div key={f}>
                    <span className="text-xs text-slate-400">{f}</span>
                    <div className="border-b border-slate-300 h-6" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <p className="font-semibold text-slate-900 mb-3">Kautionsdetails</p>
            <div className="space-y-2">
              {[
                ["Kautionsbetrag", "_____, _____ €"],
                ["Eingezahlt am", "___________________"],
                ["Zahlungsart", "☐ Bar  ☐ Überweisung  ☐ Anderes: ________"],
                ["Nettokaltmiete laut Mietvertrag", "_____, _____ €/Monat"],
                ["Kaution entspricht", "___ Nettokaltmieten (max. 3 gemäß § 551 BGB)"],
              ].map(([l, v]) => (
                <div key={l} className="flex items-start justify-between gap-4 border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                  <span className="text-slate-600">{l}</span>
                  <span className="font-semibold text-slate-900 text-right shrink-0">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-slate-900 mb-2">Anlage der Kaution (§ 551 Abs. 3 BGB)</p>
            <p className="text-slate-600 mb-2">
              Der Vermieter bestätigt, die Kaution getrennt von seinem Vermögen bei einem Kreditinstitut
              angelegt zu haben:
            </p>
            <div className="space-y-2">
              {[
                ["Kreditinstitut (Bank / Sparkasse)", ""],
                ["IBAN des Sparkontos / Anlagekontos", ""],
                ["Kontoinhaber", ""],
              ].map(([l]) => (
                <div key={l}>
                  <span className="text-xs text-slate-400">{l}</span>
                  <div className="border-b border-slate-300 h-6" />
                </div>
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Die Anlage erfolgt zum für Spareinlagen mit dreimonatiger Kündigungsfrist üblichen Zinssatz.
              Die Zinsen werden dem Mieter gutgeschrieben (§ 551 Abs. 3 BGB).
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-900 mb-2">Rückgabe der Kaution</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Die Kaution wird nach Beendigung des Mietverhältnisses und ordnungsgemäßer Rückgabe der
              Mietsache zurückgezahlt, soweit der Vermieter nicht berechtigt ist, darauf zurückzugreifen
              (z. B. wegen Mietschulden, Schäden oder ausstehender Betriebskostennachzahlungen).
              Der Vermieter hat zur Prüfung von Ansprüchen eine angemessene Frist, in der Regel
              3–6 Monate nach Auszug des Mieters.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 pt-4">
            <div>
              <div className="border-b border-slate-300 h-12 mb-1" />
              <p className="text-xs text-slate-500">Ort, Datum</p>
              <div className="border-b border-slate-300 mt-4 h-12 mb-1" />
              <p className="text-xs text-slate-500">Vermieter — Unterschrift (Empfangsbestätigung)</p>
            </div>
            <div>
              <div className="border-b border-slate-300 h-12 mb-1" />
              <p className="text-xs text-slate-500">Ort, Datum</p>
              <div className="border-b border-slate-300 mt-4 h-12 mb-1" />
              <p className="text-xs text-slate-500">Mieter — Unterschrift (Einzahlungsbestätigung)</p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 text-xs text-slate-400">
            <p>Kautionsquittung nach § 551 BGB · Stand: 2026 · ImmoPilot — immopilot.de · Kein Ersatz für individuelle Rechtsberatung.</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 print:hidden">
        <div className="bg-primary-600 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg mb-1">Kaution digital verwalten</h3>
            <p className="text-sm text-primary-200">ImmoPilot verwaltet Kautionen, Abrechnungen und Rückzahlungen für alle Ihre Mieter zentral.</p>
          </div>
          <Link href="/#contact" className="shrink-0 bg-white text-primary-600 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-primary-50 transition-colors">
            Demo anfragen
          </Link>
        </div>
      </div>
    </main>
  );
}
