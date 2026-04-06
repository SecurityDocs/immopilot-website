"use client";

import { useState, useEffect } from "react";
import BrowserMockup from "../BrowserMockup";
import {
  CreditCard,
  CheckCircle2,
  FileSpreadsheet,
  Upload,
  Check,
  ArrowRight,
  Send,
  Sparkles,
  AlertTriangle,
} from "lucide-react";

const mockPayments = [
  { name: "Müller, Thomas", amount: "780,00", status: "match", soll: "780,00" },
  { name: "Schmidt, Anna", amount: "650,00", status: "match", soll: "650,00" },
  { name: "Fischer, Stefan", amount: "920,00", status: "match", soll: "920,00" },
  { name: "Weber, Laura", amount: "710,00", status: "diff", soll: "750,00" },
  { name: "Becker, Michael", amount: "-", status: "missing", soll: "580,00" },
  { name: "Hoffmann, Sabine", amount: "850,00", status: "match", soll: "850,00" },
];

export default function FeatureCSV() {
  const [step, setStep] = useState<"idle" | "dropped" | "matched">("idle");
  const [mahnungSent, setMahnungSent] = useState<Record<number, boolean>>({});

  // Auto-play loop: idle → dropped → matched → auto-send mahnung → reset
  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    let t3: ReturnType<typeof setTimeout>;
    let t4: ReturnType<typeof setTimeout>;

    const run = () => {
      setStep("idle");
      setMahnungSent({});
      t1 = setTimeout(() => setStep("dropped"), 1800);
      t2 = setTimeout(() => setStep("matched"), 3400);
      t3 = setTimeout(() => setMahnungSent({ 3: true, 4: true }), 5500);
      t4 = setTimeout(run, 9000);
    };
    run();
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  const reset = () => { setStep("idle"); setMahnungSent({}); };
  const handleDemoClick = () => setStep("dropped");
  const sendMahnung = (idx: number) => setMahnungSent((prev) => ({ ...prev, [idx]: true }));

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left: Mockup */}
      <div className="order-2 lg:order-1">
        <BrowserMockup url="app.immopilot.de/zahlungen">
          <div className="p-5 min-h-[420px]">
            {step === "idle" && (
              <div onClick={handleDemoClick} className="cursor-pointer group">
                <div className="border-2 border-dashed border-slate-300 rounded-2xl p-10 text-center hover:border-primary-400 hover:bg-primary-50/30 transition-all">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-primary-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Upload size={24} className="text-primary-600" />
                  </div>
                  <h5 className="text-sm font-bold text-slate-800 mb-1">
                    Bank-CSV hierher ziehen
                  </h5>
                  <p className="text-xs text-slate-500 mb-3">
                    oder klicken Sie hier für eine Demo
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-xs">
                    <FileSpreadsheet size={14} />
                    kontoauszug_april_2026.csv
                  </div>
                </div>
              </div>
            )}

            {step === "dropped" && (
              <div className="text-center py-14">
                <div style={{ animation: "slide-up 0.4s ease-out forwards" }}>
                  <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-primary-50 border border-primary-200 mb-6">
                    <FileSpreadsheet size={20} className="text-primary-600" />
                    <div className="text-left">
                      <div className="text-xs font-semibold text-slate-800">kontoauszug_april_2026.csv</div>
                      <div className="text-[10px] text-slate-500">42 Transaktionen werden analysiert...</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-1 mt-4">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                  ))}
                </div>
                <p className="text-sm text-slate-500 mt-4">KI gleicht Zahlungen mit Mietverträgen ab...</p>
              </div>
            )}

            {step === "matched" && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center">
                      <Check size={16} className="text-white" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-800">38 von 42 Zahlungen zugeordnet</h5>
                      <p className="text-[10px] text-slate-500">1 Abweichung, 1 fehlende Zahlung erkannt</p>
                    </div>
                  </div>
                  <button onClick={reset} className="text-xs text-primary-600 hover:underline">Nochmal</button>
                </div>

                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <div className="grid grid-cols-5 gap-2 px-3 py-2.5 bg-slate-50 border-b border-slate-200 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                    <span className="col-span-1">Mieter</span>
                    <span className="col-span-1">Soll</span>
                    <span className="col-span-1">Eingang</span>
                    <span className="col-span-1">Status</span>
                    <span className="col-span-1">Mahnung</span>
                  </div>
                  {mockPayments.map((p, i) => (
                    <div key={i} className="grid grid-cols-5 gap-2 px-3 py-2.5 border-b border-slate-100 last:border-b-0 items-center"
                      style={{ animation: "slide-up 0.4s ease-out forwards", animationDelay: `${i * 0.1}s`, opacity: 0 }}>
                      <span className="col-span-1 text-xs font-medium text-slate-800 truncate">{p.name}</span>
                      <span className="col-span-1 text-xs text-slate-600">{p.soll} €</span>
                      <span className={`col-span-1 text-xs ${p.status === "missing" ? "text-red-500 font-semibold" : p.status === "diff" ? "text-amber-600 font-semibold" : "text-slate-600"}`}>
                        {p.amount === "-" ? "Fehlend" : `${p.amount} €`}
                      </span>
                      <div className="col-span-1">
                        {p.status === "match" && (
                          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-primary-100/10 text-primary-600 text-[10px] font-semibold">
                            <Check size={10} /> Match
                          </span>
                        )}
                        {p.status === "diff" && (
                          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-600 text-[10px] font-semibold">
                            <AlertTriangle size={10} /> -40 €
                          </span>
                        )}
                        {p.status === "missing" && (
                          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-red-50 text-red-600 text-[10px] font-semibold">
                            Fehlend
                          </span>
                        )}
                      </div>
                      <div className="col-span-1">
                        {p.status === "match" ? (
                          <span className="text-[10px] text-slate-300">—</span>
                        ) : mahnungSent[i] ? (
                          <span className="inline-flex items-center gap-0.5 text-[10px] text-green-600 font-semibold">
                            <Check size={10} /> Gesendet
                          </span>
                        ) : (
                          <button
                            onClick={() => sendMahnung(i)}
                            className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-primary-600 text-white text-[10px] font-semibold hover:bg-primary-700 transition-colors"
                          >
                            <Send size={9} /> Mahnen
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 bg-primary-50 border border-primary-100 rounded-lg px-3 py-2 flex items-start gap-2">
                  <Sparkles size={14} className="text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[11px] text-primary-800 font-medium">KI-Mahnschreiben bereit</p>
                    <p className="text-[10px] text-primary-600">
                      Für Weber und Becker wurden automatisch Mahnschreiben generiert.
                      Stufe, Betrag und Frist sind bereits korrekt eingesetzt.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </BrowserMockup>
      </div>

      {/* Right: Text */}
      <div className="order-1 lg:order-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 mb-4">
          <CreditCard size={14} className="text-primary-600" />
          <span className="text-xs font-semibold text-primary-700">KI-Zahlungsabgleich</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          Kontoauszug hochladen,{" "}
          <span className="text-primary-600">alle Zahlungen sofort geprüft.</span>
        </h3>
        <p className="text-slate-500 leading-relaxed mb-6">
          Laden Sie Ihren Kontoauszug als CSV hoch. ImmoPilot erkennt alle Mietzahlungen und
          gleicht sie automatisch mit den Mietverträgen ab. Bei fehlenden Zahlungen erstellt
          die KI direkt ein Mahnschreiben.
        </p>
        <ul className="space-y-3">
          {[
            "Bank-CSV per Drag & Drop hochladen",
            "Automatischer Abgleich mit Mietverträgen",
            "Abweichungen und Fehlbeträge sofort erkannt",
            "KI generiert Mahnschreiben automatisch",
            "Mahnung per Klick versenden — direkt aus der Übersicht",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
              <CheckCircle2 size={16} className="text-primary-600 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
