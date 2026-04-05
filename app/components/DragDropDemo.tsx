"use client";

import { useState } from "react";
import { FileSpreadsheet, Check, ArrowRight, Zap, Upload } from "lucide-react";

const mockPayments = [
  { name: "Mueller, Thomas", amount: "780,00", status: "match", soll: "780,00" },
  { name: "Schmidt, Anna", amount: "650,00", status: "match", soll: "650,00" },
  { name: "Fischer, Stefan", amount: "920,00", status: "match", soll: "920,00" },
  { name: "Weber, Laura", amount: "710,00", status: "diff", soll: "750,00" },
  { name: "Becker, Michael", amount: "-", status: "missing", soll: "580,00" },
  { name: "Hoffmann, Sabine", amount: "850,00", status: "match", soll: "850,00" },
];

export default function DragDropDemo() {
  const [step, setStep] = useState<"idle" | "dropped" | "matched">("idle");

  const handleDemoClick = () => {
    setStep("dropped");
    setTimeout(() => setStep("matched"), 1500);
  };

  const reset = () => setStep("idle");

  return (
    <section className="py-20 lg:py-28 bg-slate-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-4">
            <Zap size={14} className="text-primary-600" />
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">
              So einfach geht's
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            CSV rein.{" "}
            <span className="gradient-text">Zahlungen erkannt.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Laden Sie einfach Ihren Kontoauszug als CSV hoch. ImmoPilot erkennt
            automatisch alle Mietzahlungen und gleicht sie mit Ihren Vertraegen
            ab.
          </p>
        </div>

        {/* Interactive Demo */}
        <div className="max-w-4xl mx-auto">
          <div className="browser-mockup">
            <div className="browser-mockup-bar">
              <div className="browser-mockup-dot bg-red-400" />
              <div className="browser-mockup-dot bg-yellow-400" />
              <div className="browser-mockup-dot bg-green-400" />
              <div className="flex-1 ml-4 bg-slate-700/50 rounded-md h-6 flex items-center px-3">
                <span className="text-xs text-slate-400">
                  app.immopilot.de/zahlungen
                </span>
              </div>
            </div>

            <div className="bg-white p-6 lg:p-8 min-h-[400px]">
              {step === "idle" && (
                <div
                  onClick={handleDemoClick}
                  className="cursor-pointer group"
                >
                  <div className="border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center hover:border-primary-400 hover:bg-primary-50/30 transition-all">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-primary-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Upload size={28} className="text-primary-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">
                      Bank-CSV hierher ziehen
                    </h3>
                    <p className="text-sm text-slate-500 mb-4">
                      oder klicken Sie hier für eine Demo
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-600 text-sm">
                      <FileSpreadsheet size={16} />
                      kontoauszug_april_2026.csv
                    </div>
                  </div>
                </div>
              )}

              {step === "dropped" && (
                <div className="text-center py-12">
                  <div className="animate-drag-in">
                    <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-primary-50 border border-primary-200 mb-6">
                      <FileSpreadsheet size={24} className="text-primary-600" />
                      <div className="text-left">
                        <div className="text-sm font-semibold text-slate-800">
                          kontoauszug_april_2026.csv
                        </div>
                        <div className="text-xs text-slate-500">
                          42 Transaktionen werden analysiert...
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-1 mt-4">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-slate-500 mt-4">
                    Zahlungen werden mit Mietvertraegen abgeglichen...
                  </p>
                </div>
              )}

              {step === "matched" && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="animate-check">
                        <div className="w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center">
                          <Check size={16} className="text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-800">
                          38 von 42 Zahlungen automatisch zugeordnet
                        </h3>
                        <p className="text-xs text-slate-500">
                          1 Abweichung, 1 fehlende Zahlung erkannt
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={reset}
                      className="text-xs text-primary-600 hover:underline"
                    >
                      Nochmal testen
                    </button>
                  </div>

                  {/* Payment table */}
                  <div className="border border-slate-200 rounded-xl overflow-hidden">
                    <div className="grid grid-cols-4 gap-4 px-4 py-2.5 bg-slate-50 border-b border-slate-200 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      <span>Mieter</span>
                      <span>Soll</span>
                      <span>Eingang</span>
                      <span>Status</span>
                    </div>
                    {mockPayments.map((p, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-4 gap-4 px-4 py-3 border-b border-slate-100 last:border-b-0 items-center"
                        style={{
                          animation: "slide-up 0.4s ease-out forwards",
                          animationDelay: `${i * 0.1}s`,
                          opacity: 0,
                        }}
                      >
                        <span className="text-sm font-medium text-slate-800">
                          {p.name}
                        </span>
                        <span className="text-sm text-slate-600">
                          {p.soll} EUR
                        </span>
                        <span
                          className={`text-sm ${
                            p.status === "missing"
                              ? "text-red-500 font-semibold"
                              : p.status === "diff"
                              ? "text-amber-600 font-semibold"
                              : "text-slate-600"
                          }`}
                        >
                          {p.amount === "-" ? "Fehlend" : `${p.amount} EUR`}
                        </span>
                        <span>
                          {p.status === "match" && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent-400/10 text-accent-600 text-xs font-semibold">
                              <Check size={12} /> Match
                            </span>
                          )}
                          {p.status === "diff" && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 text-xs font-semibold">
                              Abweichung
                            </span>
                          )}
                          {p.status === "missing" && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-50 text-red-600 text-xs font-semibold">
                              Fehlend
                            </span>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Process steps below */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            {[
              {
                step: "1",
                title: "CSV hochladen",
                desc: "Kontoauszug per Drag & Drop oder Datei-Upload",
              },
              {
                step: "2",
                title: "Automatischer Abgleich",
                desc: "Zahlungen werden mit Mietvertraegen gematcht",
              },
              {
                step: "3",
                title: "Sofort handeln",
                desc: "Abweichungen und fehlende Zahlungen auf einen Blick",
              },
            ].map((s, i) => (
              <div key={s.step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary-600 text-white text-sm font-bold flex items-center justify-center mx-auto mb-3">
                  {s.step}
                </div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">
                  {s.title}
                </h4>
                <p className="text-xs text-slate-500">{s.desc}</p>
                {i < 2 && (
                  <ArrowRight
                    size={16}
                    className="text-slate-300 mx-auto mt-2 hidden lg:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
