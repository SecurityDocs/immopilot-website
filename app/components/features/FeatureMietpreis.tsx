"use client";

import BrowserMockup from "../BrowserMockup";
import {
  TrendingUp,
  CheckCircle2,
  ArrowUp,
  Minus,
  Info,
} from "lucide-react";

const analyseData = [
  { mieter: "Müller, T.", whg: "1.OG li.", aktuell: "9,20 €", spiegel: "11,50 €", potenzial: "+24,9%", erhöhbar: true, betrag: "+179,40 €" },
  { mieter: "Schmidt, A.", whg: "2.OG re.", aktuell: "10,80 €", spiegel: "11,50 €", potenzial: "+6,5%", erhöhbar: true, betrag: "+42,00 €" },
  { mieter: "Fischer, S.", whg: "EG mi.", aktuell: "11,20 €", spiegel: "11,50 €", potenzial: "+2,7%", erhöhbar: false, betrag: "—" },
  { mieter: "Weber, L.", whg: "3.OG li.", aktuell: "8,90 €", spiegel: "11,50 €", potenzial: "+29,2%", erhöhbar: true, betrag: "+191,10 €" },
  { mieter: "Hoffmann, S.", whg: "2.OG mi.", aktuell: "10,00 €", spiegel: "11,50 €", potenzial: "+15,0%", erhöhbar: true, betrag: "+127,50 €" },
];

export default function FeatureMietpreis() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left: Mockup */}
      <div className="order-2 lg:order-1">
        <BrowserMockup url="app.immopilot.de/mietpreisanalyse">
          <div className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-slate-800">Mietpreisanalyse — MFH Rheinufer</h4>
              <div className="flex items-center gap-1 text-[10px] text-accent-600 font-semibold bg-accent-400/10 px-2 py-0.5 rounded">
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
              <div className="bg-accent-400/5 rounded-lg p-3 text-center">
                <div className="text-xs text-accent-600 mb-0.5">Erhöhbar</div>
                <div className="text-lg font-bold text-accent-700">4</div>
                <div className="text-[10px] text-accent-600">von 5 Mietern</div>
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
                <div key={i} className="grid grid-cols-12 gap-1 px-3 py-2 border-b border-slate-50 last:border-b-0 items-center"
                  style={{ animation: "slide-up 0.3s ease-out forwards", animationDelay: `${i * 0.1}s`, opacity: 0 }}>
                  <div className="col-span-3">
                    <div className="text-[11px] font-medium text-slate-800">{row.mieter}</div>
                    <div className="text-[9px] text-slate-400">{row.whg}</div>
                  </div>
                  <span className="col-span-2 text-[11px] text-slate-600">{row.aktuell}</span>
                  <span className="col-span-2 text-[11px] text-slate-600">{row.spiegel}</span>
                  <div className="col-span-2">
                    <span className={`text-[11px] font-bold ${
                      parseFloat(row.potenzial) > 15 ? "text-accent-600" : parseFloat(row.potenzial) > 5 ? "text-primary-600" : "text-slate-400"
                    }`}>
                      {row.potenzial}
                    </span>
                  </div>
                  <div className="col-span-3">
                    {row.erhöhbar ? (
                      <span className="text-[11px] font-bold text-accent-600 flex items-center gap-1">
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
          <span className="gradient-text">Die KI sagt Ihnen wann und wie viel.</span>
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
              <CheckCircle2 size={16} className="text-accent-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
