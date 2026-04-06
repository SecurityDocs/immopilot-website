"use client";

import { useState, useEffect } from "react";
import BrowserMockup from "../BrowserMockup";
import {
  Building2, Users, FileText, CheckCircle2, Sparkles,
  ChevronDown, ChevronRight, Upload, ArrowRight,
} from "lucide-react";

const immobilien = [
  {
    name: "MFH Rheinufer 12",
    ort: "Köln",
    we: 6,
    mieter: ["Müller, T.", "Schmidt, A.", "Weber, L.", "Fischer, S.", "Becker, M.", "Hoffmann, K."],
    vertraege: 6,
    expanded: true,
  },
  {
    name: "ETW Bergstraße 4",
    ort: "Bonn",
    we: 1,
    mieter: ["Schulz, R."],
    vertraege: 1,
    expanded: false,
  },
  {
    name: "ZFH Lindenweg 8",
    ort: "Düsseldorf",
    we: 2,
    mieter: ["Klein, P.", "Lange, M."],
    vertraege: 2,
    expanded: false,
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
      t1 = setTimeout(() => setShowImport(true), 5000);
      t2 = setTimeout(() => setImportStep(1), 6200);
      t3 = setTimeout(run, 12000);
    };
    run();
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="order-2 lg:order-1">
        <BrowserMockup url="app.immopilot.de/bestand">
          <div className="p-4 min-h-[420px]">
            <div className="flex items-center justify-between mb-3">
              <h5 className="text-xs font-bold text-slate-800">Ihr Portfolio</h5>
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-slate-400">9 WE gesamt · 9 vermietet</span>
                <button
                  onClick={() => { setShowImport(true); setImportStep(0); }}
                  className="flex items-center gap-1 px-2 py-1 rounded-lg bg-primary-600 text-white text-[9px] font-bold hover:bg-primary-700 transition-colors"
                >
                  <Upload size={9} /> KI-Import
                </button>
              </div>
            </div>

            {!showImport ? (
              <div className="space-y-2">
                {immobilien.map((immo, i) => (
                  <div key={immo.name} className="border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setExpanded((prev) => ({ ...prev, [i]: !prev[i] }))}
                      className="w-full flex items-center gap-2 px-3 py-2.5 bg-white hover:bg-slate-50 transition-colors"
                    >
                      <Building2 size={14} className="text-primary-600 flex-shrink-0" />
                      <div className="flex-1 text-left">
                        <div className="text-xs font-semibold text-slate-800">{immo.name}</div>
                        <div className="text-[9px] text-slate-400">{immo.ort} · {immo.we} WE</div>
                      </div>
                      {expanded[i] ? <ChevronDown size={12} className="text-slate-400" /> : <ChevronRight size={12} className="text-slate-400" />}
                    </button>
                    {expanded[i] && (
                      <div className="border-t border-slate-100 px-3 py-2 bg-slate-50">
                        <div className="flex items-center gap-1 mb-1.5">
                          <Users size={10} className="text-slate-400" />
                          <span className="text-[9px] text-slate-500 font-semibold">Mieter</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          {immo.mieter.map((m) => (
                            <div key={m} className="flex items-center gap-1.5 text-[9px] text-slate-600">
                              <div className="w-4 h-4 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                                <span className="text-[7px] font-bold text-primary-700">{m[0]}</span>
                              </div>
                              {m}
                            </div>
                          ))}
                        </div>
                        <div className="flex items-center gap-3 mt-2 pt-2 border-t border-slate-100">
                          <span className="flex items-center gap-1 text-[9px] text-slate-400"><FileText size={9}/>{immo.vertraege} Verträge</span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-primary-50 text-primary-700 font-bold">Vollständig</span>
                        </div>
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
                      <div className="mt-3 space-y-1 text-left">
                        {["✓ Objekt erkannt: MFH, 4 WE", "✓ 4 Mieter importiert", "✓ Mietverträge zugeordnet"].map((line) => (
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
          Kaufen Sie eine Immobilie von einem ImmoPilot-Nutzer? Alles wird nahtlos übertragen, kein Wissen geht verloren.
        </p>
        <ul className="space-y-3">
          {[
            "Alle Immobilien, Wohneinheiten & Mieter im Dashboard",
            "KI-Import: Dokumente hochladen, Rest erledigt die KI",
            "Verträge, Konditionen und Laufzeiten sofort sichtbar",
            "Kauf einer Immobilie mit ImmoPilot-Vorbesitzer: komplette Übergabe",
            "Nichts geht verloren — vollständige Historie ab Tag 1",
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
