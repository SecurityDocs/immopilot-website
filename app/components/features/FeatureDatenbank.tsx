"use client";

import { useState, useEffect } from "react";
import BrowserMockup from "../BrowserMockup";
import {
  FolderOpen, FileText, Shield, CheckCircle2, Search,
  File, FolderClosed, Lock,
} from "lucide-react";

const kategorien = [
  {
    name: "Mietverträge",
    count: 9,
    icon: FileText,
    color: "text-primary-600",
    bg: "bg-primary-50",
    files: ["Mietvertrag Müller 2019.pdf", "Mietvertrag Schmidt 2021.pdf", "Mietvertrag Weber 2022.pdf"],
  },
  {
    name: "Rechnungen",
    count: 47,
    icon: File,
    color: "text-amber-600",
    bg: "bg-amber-50",
    files: ["Rechnung Stadtwerke Q1.pdf", "Wartung Aufzug 2025.pdf"],
  },
  {
    name: "Grundbuch & Behörden",
    count: 12,
    icon: FolderClosed,
    color: "text-slate-600",
    bg: "bg-slate-50",
    files: ["Grundbuchauszug 2023.pdf", "Baugenehmigung.pdf"],
  },
];

export default function FeatureDatenbank() {
  const [searchActive, setSearchActive] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [expanded, setExpanded] = useState<number | null>(0);

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    let t3: ReturnType<typeof setTimeout>;
    let t4: ReturnType<typeof setTimeout>;
    const run = () => {
      setSearchActive(false);
      setSearchText("");
      setExpanded(0);
      t1 = setTimeout(() => { setSearchActive(true); }, 4000);
      t2 = setTimeout(() => setSearchText("Müller"), 4800);
      t3 = setTimeout(() => setSearchText("Mietvertrag Müller"), 5600);
      t4 = setTimeout(run, 11000);
    };
    run();
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="order-2 lg:order-1">
        <BrowserMockup url="app.immopilot.de/datenbank">
          <div className="p-4 min-h-[420px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <h5 className="text-xs font-bold text-slate-800">Digitale Dokumentenablage</h5>
              <div className="flex items-center gap-1 text-[9px] text-primary-600 bg-primary-50 border border-primary-100 px-2 py-1 rounded-full font-semibold">
                <Lock size={9} /> Ende-zu-Ende verschlüsselt
              </div>
            </div>

            {/* Search */}
            <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border mb-3 transition-all ${searchActive ? "border-primary-300 bg-primary-50" : "border-slate-200 bg-white"}`}>
              <Search size={12} className={searchActive ? "text-primary-600" : "text-slate-400"} />
              <span className="text-[11px] text-slate-600 font-medium flex-1">
                {searchText || <span className="text-slate-400">Dokument suchen…</span>}
                {searchActive && !searchText && <span className="animate-pulse">|</span>}
              </span>
            </div>

            {/* Search result */}
            {searchText === "Mietvertrag Müller" && (
              <div className="mb-3 bg-white border border-primary-200 rounded-xl p-3 shadow-sm" style={{ animation: "slide-up 0.25s ease-out forwards" }}>
                <div className="flex items-center gap-2 mb-1">
                  <FileText size={14} className="text-primary-600 flex-shrink-0" />
                  <div>
                    <div className="text-[11px] font-bold text-slate-800">Mietvertrag Müller 2019.pdf</div>
                    <div className="text-[9px] text-slate-400">Mietverträge · hochgeladen 12.03.2019 · 248 KB</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[9px] text-primary-600 font-semibold mt-1">
                  <Shield size={9} /> Seit 2019 sicher gespeichert
                </div>
              </div>
            )}

            {/* Kategorie-Übersicht */}
            {!searchText && (
              <div className="space-y-2">
                {kategorien.map((kat, i) => {
                  const Icon = kat.icon;
                  return (
                    <div key={kat.name} className="border border-slate-100 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setExpanded(expanded === i ? null : i)}
                        className="w-full flex items-center gap-2.5 px-3 py-2.5 bg-white hover:bg-slate-50 transition-colors"
                      >
                        <div className={`w-7 h-7 rounded-lg ${kat.bg} flex items-center justify-center flex-shrink-0`}>
                          <Icon size={13} className={kat.color} />
                        </div>
                        <div className="flex-1 text-left">
                          <div className="text-[11px] font-semibold text-slate-800">{kat.name}</div>
                        </div>
                        <span className="text-[9px] text-slate-400 font-medium">{kat.count} Dok.</span>
                      </button>
                      {expanded === i && (
                        <div className="border-t border-slate-50 bg-slate-50 px-3 py-2 space-y-1">
                          {kat.files.map((f) => (
                            <div key={f} className="flex items-center gap-2 text-[9px] text-slate-600 py-0.5">
                              <FileText size={9} className="text-slate-400 flex-shrink-0" />
                              {f}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Stats */}
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              {[
                { label: "Dokumente", val: "68" },
                { label: "Objekte", val: "3" },
                { label: "Sicher seit", val: "2019" },
              ].map(({ label, val }) => (
                <div key={label} className="bg-white border border-slate-100 rounded-lg p-2 text-center">
                  <div className="text-sm font-extrabold text-slate-800">{val}</div>
                  <div className="text-[8px] text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </BrowserMockup>
      </div>

      <div className="order-1 lg:order-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 mb-4">
          <FolderOpen size={14} className="text-primary-600" />
          <span className="text-xs font-semibold text-primary-700">Digitale Datenbank</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          Kein Dokument mehr verloren —{" "}
          <span className="text-primary-600">für immer auffindbar.</span>
        </h3>
        <p className="text-slate-500 leading-relaxed mb-6">
          Mietverträge, Rechnungen, Grundbuchauszüge, Genehmigungen — alles an einem Ort, sicher und geordnet.
          Bei einem Immobilienverkauf? Die vollständige Dokumentenhistorie bleibt erhalten. Kein Käufer fängt von vorne an.
        </p>
        <ul className="space-y-3">
          {[
            "Alle Dokumente kategorisiert und sofort durchsuchbar",
            "Ende-zu-Ende verschlüsselt auf deutschen Servern",
            "Vollständige Objekt-Historie — auch für den nächsten Eigentümer",
            "Kein Verlust bei Hausverwaltungswechsel oder Verkauf",
            "KI erkennt und benennt Dokumente automatisch",
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
