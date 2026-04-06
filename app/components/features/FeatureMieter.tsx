"use client";

import { useState, useEffect } from "react";
import BrowserMockup from "../BrowserMockup";
import {
  Users,
  Search,
  CheckCircle2,
  Home,
} from "lucide-react";

const mieter = [
  { name: "Thomas Müller", whg: "1. OG links", miete: "780,00 €", status: "aktiv", schufa: true },
  { name: "Anna Schmidt", whg: "2. OG rechts", miete: "650,00 €", status: "aktiv", schufa: true },
  { name: "Stefan Fischer", whg: "EG mitte", miete: "920,00 €", status: "aktiv", schufa: true },
  { name: "Laura Weber", whg: "3. OG links", miete: "750,00 €", status: "aktiv", schufa: false },
  { name: "Michael Becker", whg: "1. OG rechts", miete: "580,00 €", status: "gekündigt", schufa: true },
  { name: "Sabine Hoffmann", whg: "2. OG mitte", miete: "850,00 €", status: "aktiv", schufa: true },
];

export default function FeatureMieter() {
  const [selectedRow, setSelectedRow] = useState(0);

  // Auto-cycle through rows to simulate browsing the tenant list
  useEffect(() => {
    const t = setInterval(() => setSelectedRow((p) => (p + 1) % mieter.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left: Text */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 mb-4">
          <Users size={14} className="text-primary-600" />
          <span className="text-xs font-semibold text-primary-700">Mieterverwaltung</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          Alle Mieter auf einen Blick,{" "}
          <span className="text-primary-600">direkt der Wohnung zugeordnet.</span>
        </h3>
        <p className="text-slate-500 leading-relaxed mb-6">
          Jeder Mieter hat ein digitales Profil mit Kontaktdaten, Verträgen und
          Zahlungshistorie. Direkt der Einheit zugeordnet und sofort durchsuchbar.
        </p>
        <ul className="space-y-3">
          {[
            "Mieter direkt der Wohnung zugeordnet",
            "SCHUFA-Status auf einen Blick",
            "Komplette Vertragshistorie",
            "Kontaktdaten immer griffbereit",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
              <CheckCircle2 size={16} className="text-primary-600 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Mockup */}
      <div>
        <BrowserMockup url="app.immopilot.de/mieter">
          <div className="p-5">
            {/* Search bar */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
                <Search size={14} className="text-slate-400" />
                <span className="text-xs text-slate-400">Mieter suchen...</span>
              </div>
              <div className="px-3 py-2 bg-primary-600 text-white text-xs font-semibold rounded-lg">
                + Neuer Mieter
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-primary-50 rounded-lg p-2.5 text-center">
                <div className="text-lg font-bold text-primary-700">80</div>
                <div className="text-[10px] text-primary-600">Gesamt</div>
              </div>
              <div className="bg-slate-50 rounded-lg p-2.5 text-center">
                <div className="text-lg font-bold text-slate-700">74</div>
                <div className="text-[10px] text-slate-500">Aktiv</div>
              </div>
              <div className="bg-amber-50 rounded-lg p-2.5 text-center">
                <div className="text-lg font-bold text-amber-700">6</div>
                <div className="text-[10px] text-amber-600">Gekündigt</div>
              </div>
            </div>

            {/* Table */}
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="grid grid-cols-12 gap-2 px-3 py-2 bg-slate-50 border-b border-slate-200 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                <span className="col-span-4">Name</span>
                <span className="col-span-3">Einheit</span>
                <span className="col-span-2">Miete</span>
                <span className="col-span-2">SCHUFA</span>
                <span className="col-span-1">Status</span>
              </div>
              {mieter.map((m, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-12 gap-2 px-3 py-2.5 border-b border-slate-50 last:border-b-0 items-center transition-colors cursor-pointer ${
                    selectedRow === i ? "bg-primary-50/60" : "hover:bg-slate-50/50"
                  }`}
                >
                  <div className="col-span-4 flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      selectedRow === i ? "bg-primary-600" : "bg-primary-100"
                    }`}>
                      <span className={`text-[9px] font-bold ${selectedRow === i ? "text-white" : "text-primary-700"}`}>
                        {m.name.split(" ").map((n: string) => n[0]).join("")}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-slate-800 truncate">{m.name}</span>
                  </div>
                  <div className="col-span-3 flex items-center gap-1">
                    <Home size={10} className="text-slate-400" />
                    <span className="text-xs text-slate-600 truncate">{m.whg}</span>
                  </div>
                  <span className="col-span-2 text-xs text-slate-600">{m.miete}</span>
                  <div className="col-span-2">
                    {m.schufa ? (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">OK</span>
                    ) : (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-50 text-red-500 font-medium">Ausstehend</span>
                    )}
                  </div>
                  <div className="col-span-1">
                    {m.status === "aktiv" ? (
                      <div className="w-2 h-2 rounded-full bg-primary-400" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BrowserMockup>
      </div>
    </div>
  );
}
