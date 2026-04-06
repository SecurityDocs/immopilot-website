"use client";

import { useState, useEffect } from "react";
import BrowserMockup from "../BrowserMockup";
import {
  Upload,
  FileText,
  CheckCircle2,
  Check,
  Sparkles,
  Building2,
  ArrowRight,
  Loader2,
} from "lucide-react";

export default function FeatureDokumente() {
  const [step, setStep] = useState<"idle" | "analyzing" | "done">("idle");

  // Auto-play loop
  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    let t3: ReturnType<typeof setTimeout>;
    const run = () => {
      setStep("idle");
      t1 = setTimeout(() => setStep("analyzing"), 2000);
      t2 = setTimeout(() => setStep("done"), 4200);
      t3 = setTimeout(run, 9500);
    };
    run();
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const handleUpload = () => {
    setStep("analyzing");
    setTimeout(() => setStep("done"), 2000);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left: Mockup */}
      <div className="order-2 lg:order-1">
        <BrowserMockup url="app.immopilot.de/dokumente">
          <div className="p-5 min-h-[380px]">
            {step === "idle" && (
              <>
                <h4 className="text-sm font-bold text-slate-800 mb-4">
                  Beleg hochladen
                </h4>
                <div
                  onClick={handleUpload}
                  className="border-2 border-dashed border-slate-300 rounded-2xl p-10 text-center hover:border-primary-400 hover:bg-primary-50/30 transition-all cursor-pointer group"
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-primary-50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Upload size={24} className="text-primary-600" />
                  </div>
                  <h5 className="text-sm font-bold text-slate-800 mb-1">
                    Rechnung oder Beleg hierher ziehen
                  </h5>
                  <p className="text-xs text-slate-500 mb-3">
                    Klicken für eine Demo
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-xs">
                    <FileText size={14} />
                    Rechnung_Heizungswartung_2025.pdf
                  </div>
                </div>
              </>
            )}

            {step === "analyzing" && (
              <div className="py-12 text-center">
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-primary-50 border border-primary-200 mb-6"
                  style={{ animation: "slide-up 0.4s ease-out forwards" }}>
                  <FileText size={20} className="text-primary-600" />
                  <div className="text-left">
                    <div className="text-xs font-semibold text-slate-800">
                      Rechnung_Heizungswartung_2025.pdf
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Wird analysiert...
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                  <Sparkles size={14} className="text-primary-500 animate-pulse" />
                  KI erkennt Inhalt und ordnet zu...
                </div>
                <div className="mt-4 space-y-2 max-w-xs mx-auto">
                  {["Dokument lesen", "Kategorie erkennen", "Objekt zuordnen"].map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-500"
                      style={{ animation: "slide-up 0.4s ease-out forwards", animationDelay: `${i * 0.5}s`, opacity: 0 }}>
                      <Loader2 size={12} className="animate-spin text-primary-400" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === "done" && (
              <>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary-600 flex items-center justify-center">
                      <Check size={14} className="text-white" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-800">
                      Dokument analysiert
                    </h4>
                  </div>
                  <button onClick={() => setStep("idle")} className="text-[10px] text-primary-600 hover:underline">
                    Nochmal
                  </button>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-3">
                  {/* KI-Ergebnisse */}
                  <div className="flex items-center gap-3">
                    <Sparkles size={14} className="text-primary-500" />
                    <span className="text-xs font-semibold text-slate-700">KI-Vorschläge</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg p-3 border border-slate-100">
                      <div className="text-[10px] text-slate-400 mb-1">Kategorie</div>
                      <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        Heizungswartung
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-slate-100">
                      <div className="text-[10px] text-slate-400 mb-1">Objekt</div>
                      <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Building2 size={12} className="text-primary-500" />
                        MFH Rheinufer
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-slate-100">
                      <div className="text-[10px] text-slate-400 mb-1">Betrag</div>
                      <div className="text-xs font-bold text-slate-800">1.240,00 €</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-slate-100">
                      <div className="text-[10px] text-slate-400 mb-1">Umlagefähig?</div>
                      <div className="text-xs font-bold text-green-600 flex items-center gap-1">
                        <Check size={12} />
                        Ja — BetrKV §2 Nr.4a
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-2.5 bg-primary-600 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5">
                    Vorschlag übernehmen <ArrowRight size={12} />
                  </button>
                </div>
              </>
            )}
          </div>
        </BrowserMockup>
      </div>

      {/* Right: Text */}
      <div className="order-1 lg:order-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 mb-4">
          <Upload size={14} className="text-primary-600" />
          <span className="text-xs font-semibold text-primary-700">Dokumenten-Upload</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          Rechnung hochladen,{" "}
          <span className="text-primary-600">KI erkennt und ordnet zu.</span>
        </h3>
        <p className="text-slate-500 leading-relaxed mb-6">
          Belege per Drag and Drop hochladen. Die KI erkennt Kostenart, Objekt und
          Betrag automatisch und prüft, ob die Kosten umlagefähig sind.
        </p>
        <ul className="space-y-3">
          {[
            "Automatische Kategorisierung per KI",
            "Objekt-Zuordnung vorgeschlagen",
            "Prüfung auf Umlagefähigkeit",
            "Alle Belege zentral in der Objektakte",
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
