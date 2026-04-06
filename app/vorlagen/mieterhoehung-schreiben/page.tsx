"use client";

import Link from "next/link";
import { Printer, ArrowLeft } from "lucide-react";

export default function MieterhoehungSchreibenPage() {
  return (
    <main className="pt-20 pb-16 bg-slate-50">
      {/* Toolbar */}
      <div className="bg-white border-b border-slate-200 py-3 print:hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <Link href="/vorlagen" className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600">
            <ArrowLeft size={16} /> Alle Vorlagen
          </Link>
          <button onClick={() => window.print()} className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-colors">
            <Printer size={15} /> Als PDF speichern
          </button>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 print:hidden">
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <h1 className="text-xl font-extrabold text-slate-900 mb-1">Mieterhöhungsschreiben §558 BGB</h1>
          <p className="text-sm text-slate-500 mb-3">Rechtssicheres Mieterhöhungsverlangen nach Mietspiegel. Enthält alle Pflichtangaben nach §558a BGB: Begründung, Kappungsgrenze und Zustimmungsfrist.</p>
          <div className="flex flex-wrap gap-2">
            {["2 Seiten", "§558 BGB", "Rechtssicher geprüft"].map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Template */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 print:border-0 print:p-0 space-y-6 text-sm text-slate-800">

          {/* Absender */}
          <div className="space-y-1">
            <div className="border-b border-slate-200 pb-1 text-xs text-slate-400">Vermieter (Absender)</div>
            {["Name, Vorname / Firma", "Straße, Hausnummer", "PLZ, Ort", "Telefon / E-Mail"].map((f) => (
              <div key={f} className="border-b border-slate-300 h-6" />
            ))}
          </div>

          {/* Empfänger */}
          <div className="space-y-1 pt-2">
            <div className="text-xs text-slate-400 mb-1">Empfänger (Mieter)</div>
            {["Name, Vorname des Mieters", "Straße, Hausnummer der Mietsache", "PLZ, Ort"].map((f) => (
              <div key={f} className="border-b border-slate-300 h-6" />
            ))}
          </div>

          {/* Datum */}
          <div>
            <div className="text-xs text-slate-400">Datum</div>
            <div className="border-b border-slate-300 h-6 max-w-[200px]" />
          </div>

          {/* Betreff */}
          <div className="pt-2">
            <p className="font-bold text-slate-900">Betreff: Mieterhöhungsverlangen gemäß § 558 BGB</p>
            <p className="text-xs text-slate-500 mt-0.5">Mietobjekt: <span className="border-b border-slate-300 inline-block w-48 ml-1" /></p>
          </div>

          {/* Anrede */}
          <div>
            <p>Sehr geehrte(r) <span className="border-b border-slate-300 inline-block w-48" />,</p>
          </div>

          {/* Körper */}
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              ich beabsichtige, die Nettokaltmiete für die oben genannte Wohnung gemäß § 558 BGB
              (Mieterhöhung bis zur ortsüblichen Vergleichsmiete) zu erhöhen.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p className="font-semibold text-slate-900 mb-3">Mieterhöhungsverlangen im Überblick:</p>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ["Bisherige Nettokaltmiete", "_____, _____ €/Monat"],
                    ["Neue Nettokaltmiete", "_____, _____ €/Monat"],
                    ["Erhöhungsbetrag", "_____, _____ €/Monat"],
                    ["Erhöhung in Prozent", "_____, _____ %"],
                    ["Letzte Mieterhöhung", "(mind. 15 Monate vor Wirksamkeit)"],
                    ["Wirksam ab (frühestens 3 Monate nach Zugang)", "___________________"],
                  ].map(([l, v]) => (
                    <tr key={l} className="border-b border-slate-100 last:border-0">
                      <td className="py-1.5 text-slate-600">{l}</td>
                      <td className="py-1.5 font-semibold text-right text-slate-900">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="font-semibold text-slate-900">Begründung (bitte zutreffendes ankreuzen und ausfüllen):</p>
            <div className="space-y-3">
              <div className="border border-slate-200 rounded-lg p-4">
                <p className="font-semibold mb-2">☐ Begründung durch Mietspiegel</p>
                <p className="text-xs text-slate-500 mb-2">Als Begründung verweise ich auf den Mietspiegel <span className="border-b border-slate-300 inline-block w-32" /> der Gemeinde <span className="border-b border-slate-300 inline-block w-32" />.</p>
                <p className="text-xs text-slate-600">Die Wohnung ist einzuordnen in Mietspiegelfeld: <span className="border-b border-slate-300 inline-block w-24" /> · Ortsübliche Vergleichsmiete: <span className="border-b border-slate-300 inline-block w-20" /> €/m²</p>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <p className="font-semibold mb-2">☐ Begründung durch Vergleichswohnungen</p>
                <p className="text-xs text-slate-500">Als Begründung benenne ich folgende drei Vergleichswohnungen in der Gemeinde, die die ortsübliche Vergleichsmiete belegen:</p>
                <div className="mt-2 space-y-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="border-b border-slate-300 h-5 text-xs text-slate-400 flex items-end">Vergleichswohnung {i}: ___________________________</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
              <p className="font-semibold text-slate-900 mb-2">Kappungsgrenze (§ 558 Abs. 3 BGB)</p>
              <p className="text-xs text-slate-600">Die Miete darf sich innerhalb von drei Jahren nicht um mehr als 20 % (in Gebieten mit angespanntem Wohnungsmarkt: 15 %) erhöhen. Die beantragte Erhöhung hält diese Grenze ein.</p>
              <p className="mt-2 text-xs text-slate-600">Miete vor 3 Jahren: <span className="border-b border-slate-300 inline-block w-20" /> € · Kappungsgrenze 20 %: <span className="border-b border-slate-300 inline-block w-20" /> € · Beantragt: <span className="border-b border-slate-300 inline-block w-20" /> €</p>
            </div>

            <p>
              Ich bitte Sie, der Mieterhöhung bis zum Ablauf des zweiten Kalendermonats nach dem Zugang
              dieses Schreibens zuzustimmen (§ 558b Abs. 2 BGB). Ihre Zustimmung kann auch durch
              Überweisung der erhöhten Miete zum nächsten Fälligkeitstermin nach Fristablauf erfolgen.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-600">
              <span className="font-semibold">Hinweis:</span> Bei Verweigerung der Zustimmung kann der Vermieter innerhalb von drei Jahren nach Zugang dieses Schreibens auf Erteilung der Zustimmung klagen (§ 558b Abs. 2 BGB).
            </div>

            <p>Mit freundlichen Grüßen,</p>
          </div>

          {/* Unterschrift */}
          <div className="pt-4">
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <div className="border-b border-slate-300 h-12 mb-1" />
                <p className="text-xs text-slate-500">Ort, Datum</p>
                <div className="border-b border-slate-300 h-12 mt-4 mb-1" />
                <p className="text-xs text-slate-500">Vermieter — Unterschrift und Name</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 text-xs text-slate-400">
            <p>Vorlage nach §§ 558, 558a BGB · Stand: 2026 · Erstellt von ImmoPilot — immopilot.de · Kein Ersatz für individuelle Rechtsberatung.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 print:hidden">
        <div className="bg-primary-600 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg mb-1">Mieterhöhung automatisch berechnen</h3>
            <p className="text-sm text-primary-200">ImmoPilot prüft Kappungsgrenze, Mietspiegel und erstellt das Schreiben in Sekunden.</p>
          </div>
          <Link href="/#contact" className="shrink-0 bg-white text-primary-600 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-primary-50 transition-colors">
            Demo anfragen
          </Link>
        </div>
      </div>
    </main>
  );
}
