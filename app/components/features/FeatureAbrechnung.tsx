"use client";

import { useState, useEffect } from "react";
import BrowserMockup from "../BrowserMockup";
import {
  Receipt, CheckCircle2, Sparkles, Upload, Check,
  Zap, FileSpreadsheet,
} from "lucide-react";

const steps = [
  { id: "upload", label: "Rechnung hochladen" },
  { id: "ki",     label: "KI analysiert" },
  { id: "result", label: "Freigabe" },
  { id: "done",   label: "NK erstellt ✓" },
];

const rechnungen = [
  { typ: "Wasserversorgung", betrag: "1.240,00 €", umlegbar: true,  verteilung: "Pro m² Wohnfläche", erledigt: true  },
  { typ: "Heizöl",           betrag: "3.850,00 €", umlegbar: true,  verteilung: "Nach Verbrauch (HKV)", erledigt: true  },
  { typ: "Hausmeister",      betrag: "620,00 €",   umlegbar: true,  verteilung: "Pro Wohneinheit", erledigt: false },
  { typ: "Reparatur Aufzug", betrag: "480,00 €",   umlegbar: false, verteilung: "—",               erledigt: false },
];

export default function FeatureAbrechnung() {
  const [step, setStep] = useState<"upload" | "ki" | "result" | "done">("upload");

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    let t3: ReturnType<typeof setTimeout>;
    let t4: ReturnType<typeof setTimeout>;
    const run = () => {
      setStep("upload");
      t1 = setTimeout(() => setStep("ki"), 2500);
      t2 = setTimeout(() => setStep("result"), 4500);
      t3 = setTimeout(() => setStep("done"), 7500);
      t4 = setTimeout(run, 14000);
    };
    run();
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="order-2 lg:order-1">
        <BrowserMockup url="app.immopilot.de/rechnungen">
          <div className="p-3 sm:p-4 min-h-[340px] sm:min-h-[420px]">
            {/* Stepper */}
            <div className="flex items-center gap-1 mb-4">
              {steps.map((s, i) => (
                <div key={s.id} className="flex items-center gap-1 flex-1">
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-[9px] font-bold transition-all flex-1 justify-center ${
                    step === s.id ? "bg-primary-600 text-white" :
                    (steps.findIndex(x => x.id === step) > i) ? "bg-primary-100 text-primary-600" :
                    "bg-slate-100 text-slate-400"
                  }`}>
                    {(steps.findIndex(x => x.id === step) > i) && <Check size={8} />}
                    {s.label}
                  </div>
                  {i < steps.length - 1 && <div className="w-2 h-px bg-slate-200 flex-shrink-0" />}
                </div>
              ))}
            </div>

            {step === "upload" && (
              <div style={{ animation: "slide-up 0.25s ease-out forwards" }}>
                <div
                  onClick={() => setStep("ki")}
                  className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center cursor-pointer hover:border-primary-400 hover:bg-primary-50/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Upload size={22} className="text-primary-600" />
                  </div>
                  <h6 className="text-xs font-bold text-slate-800 mb-1">Rechnungen hochladen</h6>
                  <p className="text-[10px] text-slate-500 mb-3">PDF, JPG oder Excel — KI erkennt den Rest</p>
                  <div className="inline-flex items-center gap-1.5 text-[9px] text-slate-500 bg-slate-100 px-2 py-1 rounded-lg">
                    <FileSpreadsheet size={10} /> rechnung_stadtwerke_q1.pdf
                  </div>
                </div>
              </div>
            )}

            {step === "ki" && (
              <div className="text-center py-10" style={{ animation: "slide-up 0.25s ease-out forwards" }}>
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-3">
                  <Sparkles size={24} className="text-primary-600" />
                </div>
                <div className="flex justify-center gap-1 mb-3">
                  {[0,1,2].map(i => (
                    <div key={i} className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" style={{ animationDelay: `${i * 0.25}s` }} />
                  ))}
                </div>
                <p className="text-xs font-semibold text-slate-700 mb-1">KI analysiert Ihre Rechnung…</p>
                <div className="space-y-1 mt-3 text-left max-w-xs mx-auto">
                  {["Rechnungstyp erkennen", "Umlagefähigkeit prüfen (BetrKV)", "Verteilungsschlüssel vorschlagen"].map((l, i) => (
                    <div key={l} className="flex items-center gap-2 text-[9px] text-slate-500" style={{ animation: `slide-up 0.3s ease-out ${i * 0.3}s forwards`, opacity: 0 }}>
                      <div className="w-3 h-3 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                      </div>
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === "done" && (
              <div style={{ animation: "slide-up 0.3s ease-out forwards" }}>
                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-5 text-center mb-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 size={24} className="text-emerald-600" />
                  </div>
                  <h6 className="text-xs font-bold text-emerald-800 mb-1">Nebenkostenabrechnung erstellt!</h6>
                  <p className="text-[10px] text-emerald-600">Für alle 6 Mieter — rechtskonform nach BetrKV</p>
                </div>
                <div className="space-y-2">
                  {[
                    { mieter: "Müller, T.", betrag: "1.240,00 €", wf: "72 m²" },
                    { mieter: "Schmidt, A.", betrag: "1.180,00 €", wf: "68 m²" },
                    { mieter: "Weber, L.", betrag: "1.310,00 €", wf: "76 m²" },
                  ].map((row, i) => (
                    <div key={row.mieter}
                      className="flex items-center justify-between px-3 py-2 bg-white border border-slate-100 rounded-lg"
                      style={{ animation: `slide-up 0.3s ease-out ${i * 0.1}s forwards`, opacity: 0 }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                          <span className="text-[7px] font-bold text-primary-700">{row.mieter[0]}</span>
                        </div>
                        <div>
                          <div className="text-[9px] font-semibold text-slate-800">{row.mieter}</div>
                          <div className="text-[8px] text-slate-400">{row.wf} Wohnfläche</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[9px] font-bold text-slate-800">{row.betrag}</div>
                        <div className="text-[8px] text-emerald-600 font-medium">✓ verschickt</div>
                      </div>
                    </div>
                  ))}
                  <p className="text-[9px] text-slate-400 text-center pt-1">+ 3 weitere Mieter</p>
                </div>
              </div>
            )}

            {step === "result" && (
              <div style={{ animation: "slide-up 0.25s ease-out forwards" }}>
                <div className="border border-slate-200 rounded-xl overflow-hidden mb-2">
                  <div className="grid grid-cols-4 gap-1 px-3 py-2 bg-slate-50 border-b border-slate-200 text-[9px] font-bold text-slate-400 uppercase">
                    <span className="col-span-1">Typ</span>
                    <span className="col-span-1">Betrag</span>
                    <span className="col-span-1">Verteilung</span>
                    <span className="col-span-1">Umlegbar</span>
                  </div>
                  {rechnungen.map((r, i) => (
                    <div key={r.typ} className="grid grid-cols-4 gap-1 px-3 py-2 border-b border-slate-50 last:border-b-0 items-center"
                      style={{ animation: `slide-up 0.3s ease-out ${i * 0.1}s forwards`, opacity: 0 }}>
                      <span className="text-[9px] font-medium text-slate-800 col-span-1 truncate">{r.typ}</span>
                      <span className="text-[9px] text-slate-600 col-span-1">{r.betrag}</span>
                      <span className="text-[9px] text-slate-500 col-span-1 truncate">{r.verteilung}</span>
                      <span className={`text-[9px] font-bold col-span-1 ${r.umlegbar ? "text-primary-600" : "text-slate-400"}`}>
                        {r.umlegbar ? "✓ Ja" : "✗ Nein"}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setStep("done")}
                  className="w-full py-2 rounded-xl bg-primary-600 text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-primary-700 transition-colors"
                >
                  <Zap size={13} /> Nebenkostenabrechnung erstellen
                </button>
              </div>
            )}
          </div>
        </BrowserMockup>
      </div>

      <div className="order-1 lg:order-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 mb-4">
          <Receipt size={14} className="text-primary-600" />
          <span className="text-xs font-semibold text-primary-700">Rechnungswesen & Nebenkosten</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          Rechnung hochladen —{" "}
          <span className="text-primary-600">Abrechnung fertig.</span>
        </h3>
        <p className="text-slate-500 leading-relaxed mb-6">
          Laden Sie Rechnungen einfach hoch — die KI erkennt sofort was es ist, prüft die Umlagefähigkeit nach BetrKV
          und schlägt den richtigen Verteilungsschlüssel vor. Auf Knopfdruck entsteht die vollständige
          Nebenkostenabrechnung für alle Mieter.
        </p>
        <ul className="space-y-3">
          {[
            "Rechnungen hochladen — KI erkennt Typ automatisch",
            "Umlagefähigkeit nach BetrKV automatisch geprüft",
            "Verteilungsschlüssel (m², WE, Verbrauch) vorgeschlagen",
            "Nebenkostenabrechnung auf Knopfdruck für alle Mieter",
            "Rechtssicher — konform mit deutschem Mietrecht",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
              <CheckCircle2 size={16} className="text-primary-600 flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
