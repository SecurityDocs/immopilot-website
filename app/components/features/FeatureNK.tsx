"use client";

import { useState } from "react";
import BrowserMockup from "../BrowserMockup";
import { Calculator, CheckCircle2, Loader2, Check, ArrowRight } from "lucide-react";

const abrechnungsPosten = [
  { name: "Heizkosten", gesamt: "18.420,00 €", schlüssel: "Verbrauch", umlagefähig: true },
  { name: "Wasser / Abwasser", gesamt: "4.860,00 €", schlüssel: "Personen", umlagefähig: true },
  { name: "Müllabfuhr", gesamt: "3.240,00 €", schlüssel: "Fläche", umlagefähig: true },
  { name: "Hausmeister", gesamt: "6.000,00 €", schlüssel: "Fläche", umlagefähig: true },
  { name: "Gebäudeversicherung", gesamt: "2.880,00 €", schlüssel: "Fläche", umlagefähig: true },
  { name: "Reparatur Aufzug", gesamt: "1.450,00 €", schlüssel: "—", umlagefähig: false },
];

export default function FeatureNK() {
  const [step, setStep] = useState<"config" | "loading" | "done">("config");

  const handleGenerate = () => {
    setStep("loading");
    setTimeout(() => setStep("done"), 2000);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left: Mockup (reversed) */}
      <div className="order-2 lg:order-1">
        <BrowserMockup url="app.immopilot.de/nebenkostenabrechnung">
          <div className="p-5">
            {step === "config" && (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-slate-800">
                    NK-Abrechnung 2025 — MFH Rheinufer
                  </h4>
                  <span className="text-[10px] text-slate-400">25 Einheiten</span>
                </div>

                {/* Kostenposten */}
                <div className="border border-slate-200 rounded-xl overflow-hidden mb-4">
                  <div className="grid grid-cols-12 gap-2 px-3 py-2 bg-slate-50 border-b border-slate-200 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                    <span className="col-span-4">Kostenart</span>
                    <span className="col-span-3">Betrag</span>
                    <span className="col-span-3">Schlüssel</span>
                    <span className="col-span-2">Umlagefähig</span>
                  </div>
                  {abrechnungsPosten.map((p, i) => (
                    <div key={i} className="grid grid-cols-12 gap-2 px-3 py-2 border-b border-slate-50 last:border-b-0 items-center">
                      <span className="col-span-4 text-xs text-slate-800 font-medium">{p.name}</span>
                      <span className="col-span-3 text-xs text-slate-600">{p.gesamt}</span>
                      <span className="col-span-3 text-xs text-slate-500">{p.schlüssel}</span>
                      <div className="col-span-2">
                        {p.umlagefähig ? (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-50 text-green-600 font-medium">Ja</span>
                        ) : (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-50 text-red-500 font-medium">Nein</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleGenerate}
                  className="w-full py-2.5 bg-primary-600 text-white text-xs font-semibold rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                >
                  Abrechnung generieren
                  <ArrowRight size={14} />
                </button>
              </>
            )}

            {step === "loading" && (
              <div className="py-16 text-center">
                <Loader2 size={32} className="text-primary-600 animate-spin mx-auto mb-4" />
                <h4 className="text-sm font-bold text-slate-800 mb-2">
                  Berechnung läuft...
                </h4>
                <div className="space-y-2 max-w-xs mx-auto text-left">
                  {[
                    "Verteilerschlüssel anwenden",
                    "Vorauszahlungen verrechnen",
                    "Einzelabrechnungen erstellen",
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-500"
                      style={{ animation: "slide-up 0.4s ease-out forwards", animationDelay: `${i * 0.5}s`, opacity: 0 }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === "done" && (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center">
                    <Check size={16} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">
                      25 Abrechnungen erstellt
                    </h4>
                    <p className="text-[10px] text-slate-500">
                      Gesamtkosten umlagefähig: 35.400,00 € — 3 Nachzahlungen, 22 Guthaben
                    </p>
                  </div>
                  <button onClick={() => setStep("config")} className="ml-auto text-[10px] text-primary-600 hover:underline">
                    Zurück
                  </button>
                </div>

                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <div className="grid grid-cols-12 gap-2 px-3 py-2 bg-slate-50 border-b border-slate-200 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                    <span className="col-span-4">Mieter</span>
                    <span className="col-span-3">Vorauszahlung</span>
                    <span className="col-span-3">Anteil</span>
                    <span className="col-span-2">Ergebnis</span>
                  </div>
                  {[
                    { name: "Müller, T.", vz: "2.400,00 €", anteil: "2.180,40 €", diff: "+ 219,60 €", pos: true },
                    { name: "Schmidt, A.", vz: "1.920,00 €", anteil: "1.752,00 €", diff: "+ 168,00 €", pos: true },
                    { name: "Fischer, S.", vz: "2.640,00 €", anteil: "2.890,20 €", diff: "- 250,20 €", pos: false },
                    { name: "Weber, L.", vz: "2.160,00 €", anteil: "1.980,60 €", diff: "+ 179,40 €", pos: true },
                    { name: "Becker, M.", vz: "1.680,00 €", anteil: "1.540,80 €", diff: "+ 139,20 €", pos: true },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-12 gap-2 px-3 py-2 border-b border-slate-50 last:border-b-0 items-center"
                      style={{ animation: "slide-up 0.3s ease-out forwards", animationDelay: `${i * 0.1}s`, opacity: 0 }}>
                      <span className="col-span-4 text-xs font-medium text-slate-800">{row.name}</span>
                      <span className="col-span-3 text-xs text-slate-600">{row.vz}</span>
                      <span className="col-span-3 text-xs text-slate-600">{row.anteil}</span>
                      <span className={`col-span-2 text-xs font-bold ${row.pos ? "text-green-600" : "text-red-500"}`}>
                        {row.diff}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </BrowserMockup>
      </div>

      {/* Right: Text */}
      <div className="order-1 lg:order-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 mb-4">
          <Calculator size={14} className="text-primary-600" />
          <span className="text-xs font-semibold text-primary-700">Nebenkostenabrechnung</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          Nebenkostenabrechnung{" "}
          <span className="gradient-text">per Knopfdruck erstellt.</span>
        </h3>
        <p className="text-slate-500 leading-relaxed mb-6">
          Belege hochladen, Verteilerschlüssel festlegen, fertig. ImmoPilot verteilt
          die Kosten automatisch und prüft, was umlagefähig ist.
        </p>
        <ul className="space-y-3">
          {[
            "Automatische Verteilerschlüssel",
            "Umlagefähigkeit wird geprüft",
            "Vorauszahlungen automatisch verrechnet",
            "PDF-Export für jeden Mieter",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
              <CheckCircle2 size={16} className="text-accent-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
