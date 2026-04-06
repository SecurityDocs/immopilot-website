"use client";

import Link from "next/link";
import { Printer, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function MahnungMietePage() {
  const [variant, setVariant] = useState<"erste" | "zweite" | "abmahnung">("erste");

  const variants = {
    erste: {
      label: "1. Mahnung",
      betreff: "1. Mahnung — Mietrückstand",
      tone: "Ich bitte Sie, den ausstehenden Betrag umgehend auf das oben genannte Konto zu überweisen.",
      frist: "Ich bitte um Zahlung bis spätestens zum",
      hinweis: "Bitte haben Sie Verständnis dafür, dass ich bei weiterem Ausbleiben der Zahlung weitere rechtliche Schritte einleiten muss.",
    },
    zweite: {
      label: "2. Mahnung",
      betreff: "2. Mahnung — Mietrückstand (dringend)",
      tone: "Trotz meiner ersten Mahnung steht der unten genannte Betrag noch immer aus. Ich fordere Sie hiermit erneut auf, den Rückstand unverzüglich zu begleichen.",
      frist: "Ich setze Ihnen eine letzte Frist bis zum",
      hinweis: "Nach fruchtlosem Ablauf dieser Frist werde ich rechtliche Maßnahmen einleiten, einschließlich der Übergabe an einen Rechtsanwalt und gegebenenfalls der Einleitung eines gerichtlichen Mahnverfahrens.",
    },
    abmahnung: {
      label: "Abmahnung / Letzte Mahnung",
      betreff: "Abmahnung — Zahlungsverzug und Ankündigung der fristlosen Kündigung",
      tone: "Sie befinden sich mit der Zahlung der Miete trotz mehrfacher Aufforderung weiterhin in erheblichem Rückstand. Ich mahne Sie hiermit förmlich ab.",
      frist: "Ich fordere Sie auf, den Gesamtrückstand bis spätestens",
      hinweis: "Sollte bis zu dem genannten Datum kein Zahlungseingang erfolgen, werde ich das Mietverhältnis fristlos kündigen (§ 543 Abs. 2 Nr. 3 BGB) und gegebenenfalls Klage auf Räumung und Zahlung erheben.",
    },
  };

  const v = variants[variant];

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
          <h1 className="text-xl font-extrabold text-slate-900 mb-1">Mahnung bei Mietrückstand</h1>
          <p className="text-sm text-slate-500 mb-4">Drei abgestufte Varianten — von der freundlichen Erinnerung bis zur Abmahnung mit Kündigungsankündigung. Wählen Sie die passende Variante:</p>
          <div className="flex gap-2 flex-wrap">
            {(["erste", "zweite", "abmahnung"] as const).map((k) => (
              <button
                key={k}
                onClick={() => setVariant(k)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${variant === k ? "bg-primary-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
              >
                {variants[k].label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Template */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 print:border-0 print:p-0 space-y-6 text-sm text-slate-800">

          {/* Absender */}
          <div className="space-y-1">
            {["Vermieter Name / Firma", "Straße, Hausnummer", "PLZ, Ort"].map((f) => (
              <div key={f} className="border-b border-slate-300 h-6" />
            ))}
          </div>

          <div className="space-y-1 pt-2">
            {["Mieter Name, Vorname", "Straße der Mietsache", "PLZ, Ort"].map((f) => (
              <div key={f} className="border-b border-slate-300 h-6" />
            ))}
          </div>

          <div>
            <div className="text-xs text-slate-400">Datum</div>
            <div className="border-b border-slate-300 h-6 max-w-[200px]" />
          </div>

          <div className="pt-2">
            <p className="font-bold text-slate-900">Betreff: {v.betreff}</p>
            <p className="text-xs text-slate-500 mt-0.5">Mietobjekt: <span className="border-b border-slate-300 inline-block w-56 ml-1" /></p>
          </div>

          <div>
            <p>Sehr geehrte(r) <span className="border-b border-slate-300 inline-block w-48" />,</p>
          </div>

          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>{v.tone}</p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p className="font-semibold text-slate-900 mb-3">Rückstand im Überblick:</p>
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ["Monat(e) der ausstehenden Miete", "___________________________"],
                    ["Monatliche Nettokaltmiete", "_____, _____ €"],
                    ["Monatliche Betriebskostenvorauszahlung", "_____, _____ €"],
                    ["Gesamtbetrag pro Monat", "_____, _____ €"],
                    ["Anzahl Monate", "_____"],
                    ["Gesamtrückstand", "_____, _____ €"],
                  ].map(([l, v]) => (
                    <tr key={l} className="border-b border-slate-100 last:border-0">
                      <td className="py-1.5 text-slate-600">{l}</td>
                      <td className="py-1.5 font-semibold text-right text-slate-900">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              {v.frist} <span className="border-b border-slate-300 inline-block w-32 mx-1" /> zu zahlen.
            </p>

            <p>
              <span className="font-semibold">Zahlungskonto:</span> IBAN: <span className="border-b border-slate-300 inline-block w-48 ml-1" />
              &nbsp;· Kontoinhaber: <span className="border-b border-slate-300 inline-block w-36" />
            </p>

            <p>{v.hinweis}</p>

            {variant === "abmahnung" && (
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-600">
                <span className="font-semibold">Rechtlicher Hinweis:</span> Bei einem Mietrückstand von mehr als zwei Monatsmieten ist der Vermieter gemäß § 543 Abs. 2 Nr. 3 BGB zur fristlosen Kündigung berechtigt. Diese Abmahnung dient als förmliche Voraussetzung vor der Kündigung.
              </div>
            )}

            <p>Mit freundlichen Grüßen,</p>
          </div>

          {/* Unterschrift */}
          <div className="pt-2">
            <div className="border-b border-slate-300 h-12 mb-1 max-w-xs" />
            <p className="text-xs text-slate-500">Vermieter — Unterschrift und Name</p>
          </div>

          <div className="border-t border-slate-100 pt-4 text-xs text-slate-400">
            <p>Vorlage nach §§ 543, 286 BGB · Stand: 2026 · ImmoPilot — immopilot.de · Kein Ersatz für individuelle Rechtsberatung.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 print:hidden">
        <div className="bg-primary-600 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg mb-1">Mahnwesen automatisieren</h3>
            <p className="text-sm text-primary-200">ImmoPilot erkennt Mietrückstände und verschickt Mahnschreiben automatisch — rechtssicher und termingerecht.</p>
          </div>
          <Link href="/#contact" className="shrink-0 bg-white text-primary-600 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-primary-50 transition-colors">
            Demo anfragen
          </Link>
        </div>
      </div>
    </main>
  );
}
