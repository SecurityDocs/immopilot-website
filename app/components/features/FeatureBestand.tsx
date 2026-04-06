"use client";

import { useState, useEffect } from "react";
import BrowserMockup from "../BrowserMockup";
import {
  Building2, CheckCircle2, Sparkles,
  ChevronDown, ChevronRight, Upload, TrendingUp, AlertCircle,
} from "lucide-react";

const immobilien = [
  {
    name: "MFH Rheinufer 12",
    ort: "Köln",
    we: 6,
    vermietet: 6,
    kaltmiete: "5.820 €",
    rendite: "4,8 %",
    mieter: [
      { name: "Müller, T.",    wohnung: "EG li",    miete: "870 €",   status: "bezahlt", laufzeit: "bis 31.12.2026" },
      { name: "Schmidt, A.",   wohnung: "EG re",    miete: "890 €",   status: "bezahlt", laufzeit: "unbefristet" },
      { name: "Weber, L.",     wohnung: "1. OG li", miete: "920 €",   status: "offen",   laufzeit: "bis 30.06.2025" },
      { name: "Fischer, S.",   wohnung: "1. OG re", miete: "960 €",   status: "bezahlt", laufzeit: "unbefristet" },
      { name: "Becker, M.",    wohnung: "2. OG li", miete: "980 €",   status: "bezahlt", laufzeit: "bis 31.03.2027" },
      { name: "Hoffmann, K.", wohnung: "2. OG re", miete: "1.200 €", status: "bezahlt", laufzeit: "unbefristet" },
    ],
  },
  {
    name: "ETW Bergstraße 4",
    ort: "Bonn",
    we: 1,
    vermietet: 1,
    kaltmiete: "980 €",
    rendite: "3,9 %",
    mieter: [
      { name: "Schulz, R.", wohnung: "gesamt", miete: "980 €", status: "bezahlt", laufzeit: "bis 31.08.2026" },
    ],
  },
  {
    name: "ZFH Lindenweg 8",
    ort: "Düsseldorf",
    we: 2,
    vermietet: 2,
    kaltmiete: "2.100 €",
    rendite: "4,2 %",
    mieter: [
      { name: "Klein, P.", wohnung: "OG", miete: "1.050 €", status: "bezahlt", laufzeit: "unbefristet" },
      { name: "Lange, M.", wohnung: "EG", miete: "1.050 €", status: "bezahlt", laufzeit: "bis 30.09.2026" },
    ],
  },
];

export default function FeatureBestand() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({ 0: true });
  const [showImport, setShowImport] = useState(false);
  const [importStep, setImportStep] = useState(0);

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    let t3: ReturnType<typeof setTimeout>;
    const run = () => {
      setShowImport(false);
      setImportStep(0);
      setExpanded({ 0: true });
      t1 = setTimeout(() => setShowImport(true), 6000);
      t2 = setTimeout(() => setImportStep(1), 7500);
      t3 = setTimeout(run, 14000);
    };
    run();
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="order-2 lg:order-1">
        <BrowserMockup url="app.immopilot.de/bestand">
          <div className="p-4 min-h-[420px]">
            {/* Portfolio Header */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <h5 className="text-xs font-bold text-slate-800">Ihr Portfolio</h5>
                <p className="text-[9px] text-slate-400">9 WE · 8.900 € Kaltmiete/Monat</p>
              </div>
              <button
                onClick={() => { setShowImport(true); setImportStep(0); }}
                className="flex items-center gap-1 px-2 py-1 rounded-lg bg-primary-600 text-white text-[9px] font-bold hover:bg-primary-700 transition-colors"
              >
                <Upload size={9} /> KI-Import
              </button>
            </div>

            {!showImport ? (
              <div className="space-y-2">
                {immobilien.map((immo, i) => (
                  <div key={immo.name} className="border border-slate-200 rounded-xl overflow-hidden">
                    {/* Objekt-Zeile */}
                    <button
                      onClick={() => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }))}
                      className="w-full flex items-center gap-2 px-3 py-2.5 bg-white hover:bg-slate-50 transition-colors"
                    >
                      <Building2 size={13} className="text-primary-600 flex-shrink-0" />
                      <div className="flex-1 text-left">
                        <div className="text-xs font-semibold text-slate-800">{immo.name}</div>
                        <div className="text-[9px] text-slate-400">{immo.ort} · {immo.we} WE · {immo.vermietet}/{immo.we} vermietet</div>
                      </div>
                      <div className="text-right mr-1">
                        <div className="text-[9px] font-bold text-slate-700">{immo.kaltmiete}</div>
                        <div className="text-[8px] text-emerald-600 font-semibold flex items-center justify-end gap-0.5">
                          <TrendingUp size={8} />{immo.rendite}
                        </div>
                      </div>
                      {expanded[i] ? <ChevronDown size={11} className="text-slate-400 flex-shrink-0" /> : <ChevronRight size={11} className="text-slate-400 flex-shrink-0" />}
                    </button>

                    {/* Mieter-Details */}
                    {expanded[i] && (
                      <div className="border-t border-slate-100 bg-slate-50">
                        {/* Spaltenköpfe */}
                        <div className="grid grid-cols-4 gap-1 px-3 py-1.5 border-b border-slate-100">
                          <span className="text-[8px] font-bold text-slate-400 uppercase col-span-1">Mieter</span>
                          <span className="text-[8px] font-bold text-slate-400 uppercase">Miete</span>
                          <span className="text-[8px] font-bold text-slate-400 uppercase">Status</span>
                          <span className="text-[8px] font-bold text-slate-400 uppercase">Vertrag</span>
                        </div>
                        {immo.mieter.map((m) => (
                          <div key={m.name} className="grid grid-cols-4 gap-1 px-3 py-1.5 border-b border-slate-100 last:border-b-0 items-center">
                            <div className="col-span-1 flex items-center gap-1.5">
                              <div className="w-4 h-4 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                                <span className="text-[7px] font-bold text-primary-700">{m.name[0]}</span>
                              </div>
                              <span className="text-[8px] text-slate-700 font-medium truncate">{m.name}</span>
                            </div>
                            <span className="text-[8px] font-semibold text-slate-700">{m.miete}</span>
                            <span className={`text-[8px] font-bold flex items-center gap-0.5 ${
                              m.status === "bezahlt" ? "text-emerald-600" : "text-amber-600"
                            }`}>
                              {m.status === "offen" && <AlertCircle size={8} />}
                              {m.status === "bezahlt" ? "✓ ok" : "! offen"}
                            </span>
                            <span className="text-[8px] text-slate-400 truncate">{m.laufzeit}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ animation: "slide-up 0.3s ease-out forwards" }}>
                <div className="border-2 border-dashed border-primary-300 rounded-xl p-6 text-center bg-primary-50/30">
                  <Sparkles size={24} className="text-primary-600 mx-auto mb-2" />
                  <h6 className="text-xs font-bold text-slate-800 mb-1">Neue Immobilie per KI anlegen</h6>
                  <p className="text-[10px] text-slate-500 mb-3">PDF, Mietvertrag oder Excel hochladen — KI übernimmt alles</p>
                  {importStep === 0 ? (
                    <button
                      onClick={() => setImportStep(1)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary-600 text-white text-xs font-semibold hover:bg-primary-700 transition-colors"
                    >
                      <Upload size={12} /> Datei hochladen
                    </button>
                  ) : (
                    <div style={{ animation: "slide-up 0.3s ease-out forwards" }}>
                      <div className="flex justify-center gap-1 mb-2">
                        {[0, 1, 2].map((i) => (
                          <div key={i} className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                        ))}
                      </div>
                      <p className="text-[10px] text-primary-700 font-semibold">KI liest Mieter, Verträge & Daten aus...</p>
                      <div className="mt-3 space-y-1 text-left max-w-xs mx-auto">
                        {[
                          "✓ Objekt erkannt: MFH, 4 WE",
                          "✓ 4 Mieter + Mietpreise importiert",
                          "✓ Mietverträge & Laufzeiten zugeordnet",
                          "✓ Rendite automatisch berechnet",
                        ].map((line) => (
                          <div key={line} className="text-[9px] text-primary-600 font-medium">{line}</div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </BrowserMockup>
      </div>

      <div className="order-1 lg:order-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 mb-4">
          <Building2 size={14} className="text-primary-600" />
          <span className="text-xs font-semibold text-primary-700">Bestandsübersicht</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          Alle Objekte, Mieter & Verträge —{" "}
          <span className="text-primary-600">auf einen Blick.</span>
        </h3>
        <p className="text-slate-500 leading-relaxed mb-6">
          Legen Sie jede Immobilie einmalig an — manuell oder per KI-Import aus vorhandenen Dokumenten.
          Miete, Vertragslaufzeit, Zahlungsstatus: alles sofort sichtbar. Kein Wühlen in Ordnern mehr.
        </p>
        <ul className="space-y-3">
          {[
            "Alle Objekte, Wohneinheiten & Mieter im Dashboard",
            "Miethöhe, Vertragslaufzeit & Zahlungsstatus auf einen Blick",
            "Rendite automatisch berechnet pro Objekt",
            "KI-Import: Dokumente hochladen, Rest erledigt die KI",
            "Kauf mit ImmoPilot-Vorbesitzer: vollständige nahtlose Übergabe",
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
