"use client";

import BrowserMockup from "../BrowserMockup";
import {
  BarChart3,
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  ArrowUp,
} from "lucide-react";

const monate = ["Okt", "Nov", "Dez", "Jan", "Feb", "Mär"];
const einnahmen = [82, 85, 84, 88, 86, 92];
const ausgaben = [28, 35, 31, 24, 38, 26];

export default function FeatureFinanzen() {
  const maxVal = 100;

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left: Text */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 mb-4">
          <BarChart3 size={14} className="text-primary-600" />
          <span className="text-xs font-semibold text-primary-700">Finanzübersicht</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          Cashflow im Blick.{" "}
          <span className="text-primary-600">Jederzeit.</span>
        </h3>
        <p className="text-slate-500 leading-relaxed mb-6">
          Einnahmen, Ausgaben, Cashflow — pro Objekt oder über alle Immobilien hinweg.
          Immer wissen, wie Ihre Objekte performen.
          Keine Überraschungen mehr am Jahresende.
        </p>
        <ul className="space-y-3">
          {[
            "Echtzeit-Cashflow pro Objekt",
            "Einnahmen vs. Ausgaben auf einen Blick",
            "Monatliche Entwicklung visualisiert",
            "Export für Steuerberater",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
              <CheckCircle2 size={16} className="text-accent-500 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Mockup */}
      <div>
        <BrowserMockup url="app.immopilot.de/finanzen">
          <div className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-slate-800">Finanzübersicht — Alle Objekte</h4>
              <span className="text-[10px] text-slate-400">Letzte 6 Monate</span>
            </div>

            {/* Top stats */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="bg-green-50 rounded-lg p-3">
                <div className="flex items-center gap-1 text-[10px] text-green-600 mb-1">
                  <TrendingUp size={10} />
                  Einnahmen
                </div>
                <div className="text-lg font-bold text-green-700">92.400 €</div>
                <div className="text-[10px] text-green-500 flex items-center gap-0.5">
                  <ArrowUp size={8} /> +7,0% ggü. Vormonat
                </div>
              </div>
              <div className="bg-red-50 rounded-lg p-3">
                <div className="flex items-center gap-1 text-[10px] text-red-500 mb-1">
                  <TrendingDown size={10} />
                  Ausgaben
                </div>
                <div className="text-lg font-bold text-red-600">26.800 €</div>
                <div className="text-[10px] text-green-500 flex items-center gap-0.5">
                  <ArrowUp size={8} style={{ transform: "rotate(180deg)" }} /> -31,6%
                </div>
              </div>
              <div className="bg-primary-50 rounded-lg p-3">
                <div className="text-[10px] text-primary-600 mb-1">Cashflow</div>
                <div className="text-lg font-bold text-primary-700">65.600 €</div>
                <div className="text-[10px] text-primary-500">positiv</div>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-700">
                  Einnahmen vs. Ausgaben (in Tsd. €)
                </span>
                <div className="flex items-center gap-3 text-[10px]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary-500" /> Einnahmen
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400" /> Ausgaben
                  </span>
                </div>
              </div>

              <div className="flex items-end gap-4 h-36">
                {monate.map((m, i) => (
                  <div key={m} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full flex items-end justify-center gap-1 h-28">
                      {/* Einnahmen bar */}
                      <div
                        className="w-3 rounded-t bg-gradient-to-t from-primary-600 to-primary-400"
                        style={{
                          height: `${(einnahmen[i] / maxVal) * 100}%`,
                          animation: "slide-up 0.5s ease-out forwards",
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                      {/* Ausgaben bar */}
                      <div
                        className="w-3 rounded-t bg-gradient-to-t from-red-500 to-red-300"
                        style={{
                          height: `${(ausgaben[i] / maxVal) * 100}%`,
                          animation: "slide-up 0.5s ease-out forwards",
                          animationDelay: `${i * 0.1 + 0.05}s`,
                        }}
                      />
                    </div>
                    <span className="text-[9px] text-slate-400">{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Object breakdown */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="bg-white border border-slate-200 rounded-lg p-2.5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-500">MFH Rheinufer</div>
                  <div className="text-xs font-bold text-slate-800">38.200 €</div>
                </div>
                <div className="text-[10px] text-green-600 font-semibold">+5,2%</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-2.5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-500">MFH Stadtpark</div>
                  <div className="text-xs font-bold text-slate-800">54.200 €</div>
                </div>
                <div className="text-[10px] text-green-600 font-semibold">+8,1%</div>
              </div>
            </div>
          </div>
        </BrowserMockup>
      </div>
    </div>
  );
}
