"use client";

import { useState, useEffect } from "react";
import BrowserMockup from "../BrowserMockup";
import {
  TrendingUp,
  CheckCircle2,
  ArrowUp,
  Minus,
  Info,
  Loader2,
} from "lucide-react";

const analyseData = [
  { mieter: "Müller, T.", whg: "1.OG li.", aktuell: "9,20 €", spiegel: "11,50 €", potenzial: "+24,9%", erhöhbar: true, betrag: "+179,40 €" },
  { mieter: "Schmidt, A.", whg: "2.OG re.", aktuell: "10,80 €", spiegel: "11,50 €", potenzial: "+6,5%", erhöhbar: true, betrag: "+42,00 €" },
  { mieter: "Fischer, S.", whg: "EG mi.", aktuell: "11,20 €", spiegel: "11,50 €", potenzial: "+2,7%", erhöhbar: false, betrag: "—" },
  { mieter: "Weber, L.", whg: "3.OG li.", aktuell: "8,90 €", spiegel: "11,50 €", potenzial: "+29,2%", erhöhbar: true, betrag: "+191,10 €" },
  { mieter: "Hoffmann, S.", whg: "2.OG mi.", aktuell: "10,00 €", spiegel: "11,50 €", potenzial: "+15,0%", erhöhbar: true, betrag: "+127,50 €" },
];

export default function FeatureMietpreis() {
  const [step, setStep] = useState<"loading" | "done">("loading");
  const [animKey, setAnimKey] = useState(0);
  const [highlightRow, setHighlightRow] = useState<number | null>(null);

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    let t3: ReturnType<typeof setTimeout>;
    let t4: ReturnType<typeof setTimeout>;
    const run = () => {
      setStep("loading");
      setHighlightRow(null);
      t1 = setTimeout(() => {
        setStep("done");
        setAnimKey((k) => k + 1);
      }, 1800);
      // Highlight highest-potential row (Weber, index 3) after table appears
      t2 = setTimeout(() => setHighlightRow(3), 3500);
      // Then highlight second highest (Müller, index 0)
      t3 = setTimeout(() => setHighlightRow(0), 5500);
      t4 = setTimeout(run, 9000);
    };
    run();
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left: Mockup */}
      <div className="order-2 lg:order-1">
        <BrowserMockup url="app.immopilot.de/mietpreisanalyse">
          <div className="p-5 min-h-[360px]">
            {step === "loading" && (
              <div className="py-16 text-center">
                <Loader2 size={32} className="text-primary-600 animate-spin mx-auto mb-4" />
                <h4 className="text-sm font-bold text-slate-800 mb-2">Mietspiegel wird abgeglichen...</h4>
                <div className="space-y-2 max-w-xs mx-auto text-left">
                  {["Aktuelle Mieten laden", "Mietspiegel 2025 abrufen", "Kappungsgrenze prüfen"].map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-500"
                      style={{ animation: "slide-up 0.4s ease-out forwards", animationDelay: `${i * 0.4}s`, opacity: 0 }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === "done" && (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-slate-800">Mietpreisanalyse — MFH Rheinufer</h4>
                  <div className="flex items-center gap-1 text-[10px] text-primary-600 font-semibold bg-primary-100/10 px-2 py-0.5 rounded">
                    <ArrowUp size={10} />
                    540,00 €/Monat Potenzial
                  </div>
                </div>

                {/* Headline stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-slate-50 rounded-lg p-3 text-center">
                    <div className="text-xs text-slate-500 mb-0.5">Ø Ist-Miete</div>
                    <div className="text-lg font-bold text-slate-800">10,02 €</div>
                    <div className="text-[10px] text-slate-400">/m²</div>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-3 text-center">
                    <div className="text-xs text-primary-600 mb-0.5">Mietspiegel</div>
                    <div className="text-lg font-bold text-primary-700">11,50 €</div>
                    <div className="text-[10px] text-primary-500">/m²</div>
                  </div>
                  <div className="bg-primary-100/5 rounded-lg p-3 text-center">
                    <div className="text-xs text-primary-600 mb-0.5">Erhöhbar</div>
                    <div className="text-lg font-bold text-primary-700">4</div>
                    <div className="text-[10px] text-primary-600">von 5 Mietern</div>
                  </div>
                </div>

                {/* Table */}
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <div className="grid grid-cols-12 gap-1 px-3 py-2 bg-slate-50 border-b border-slate-200 text-[9px] font-semibold text-slate-500 uppercase tracking-wider">
                    <span className="col-span-3">Mieter</span>
                    <span className="col-span-2">Ist/m²</span>
                    <span className="col-span-2">Spiegel</span>
                    <span className="col-span-2">Potenzial</span>
                    <span className="col-span-3">Erhöhung/Mon.</span>
                  </div>
                  {analyseData.map((row, i) => (
                    <div key={`${animKey}-${i}`} className={`grid grid-cols-12 gap-1 px-3 py-2 border-b border-slate-50 last:border-b-0 items-center transition-colors ${
                      highlightRow === i ? "bg-primary-50/60" : ""
                    }`}
                      style={{ animation: "slide-up 0.3s ease-out forwards", animationDelay: `${i * 0.1}s`, opacity: 0 }}>
                      <div className="col-span-3">
                        <div className="text-[11px] font-medium text-slate-800">{row.mieter}</div>
                        <div className="text-[9px] text-slate-400">{row.whg}</div>
                      </div>
                      <span className="col-span-2 text-[11px] text-slate-600">{row.aktuell}</span>
                      <span className="col-span-2 text-[11px] text-slate-600">{row.spiegel}</span>
                      <div className="col-span-2">
                        <span className={`text-[11px] font-bold ${
                          parseFloat(row.potenzial) > 15 ? "text-primary-600" : parseFloat(row.potenzial) > 5 ? "text-primary-600" : "text-slate-400"
                        }`}>
                          {row.potenzial}
                        </span>
                      </div>
                      <div className="col-span-3">
                        {row.erhöhbar ? (
                          <span className="text-[11px] font-bold text-primary-600 flex items-center gap-1">
                            <ArrowUp size={10} /> {row.betrag}
                          </span>
                        ) : (
                          <span className="text-[11px] text-slate-400 flex items-center gap-1">
                            <Minus size={10} /> Unter Kappungsgrenze
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-3 text-[10px] text-slate-400">
                  <Info size={10} />
                  Berechnung nach Mietspiegel 2025, Kappungsgrenze 15% berücksichtigt
                </div>
              </>
            )}
          </div>
        </BrowserMockup>
      </div>

      {/* Right: Text */}
      <div className="order-1 lg:order-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 mb-4">
          <TrendingUp size={14} className="text-primary-600" />
          <span className="text-xs font-semibold text-primary-700">Mietpreisanalyse</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          Mieterhöhung möglich?{" "}
          <span className="text-primary-600">Die KI sagt Ihnen wann und wie viel.</span>
        </h3>
        <p className="text-slate-500 leading-relaxed mb-6">
          ImmoPilot vergleicht Ihre Mieten automatisch mit dem Mietspiegel und zeigt,
          wo Erhöhungspotenzial besteht. Kappungsgrenze inklusive.
        </p>
        <ul className="space-y-3">
          {[
            "Automatischer Mietspiegel-Abgleich",
            "Kappungsgrenze wird berücksichtigt",
            "Erhöhungspotenzial pro Mieter berechnet",
            "Mieterhöhungsschreiben generierbar",
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
