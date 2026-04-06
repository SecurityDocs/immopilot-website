"use client";

import { useState, useEffect } from "react";
import BrowserMockup from "../BrowserMockup";
import {
  AlertTriangle,
  CheckCircle2,
  Send,
  Clock,
  FileWarning,
  ArrowRight,
} from "lucide-react";

const mahnungen = [
  { mieter: "Laura Weber", betrag: "40,00 €", monat: "März 2026", stufe: 1, tage: 12, status: "entwurf" },
  { mieter: "Michael Becker", betrag: "580,00 €", monat: "März 2026", stufe: 2, tage: 35, status: "versendet" },
  { mieter: "Jens Krueger", betrag: "120,00 €", monat: "Feb 2026", stufe: 3, tage: 62, status: "versendet" },
];

export default function FeatureMahnwesen() {
  // Animate: auto-send the "Entwurf" mahnung after 2.5s, then reset after 5s
  const [sent, setSent] = useState(false);
  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    const run = () => {
      setSent(false);
      t1 = setTimeout(() => setSent(true), 2500);
      t2 = setTimeout(run, 7000);
    };
    run();
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left: Text */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 mb-4">
          <AlertTriangle size={14} className="text-primary-600" />
          <span className="text-xs font-semibold text-primary-700">Mahnwesen</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          Mieter zahlt nicht?{" "}
          <span className="text-primary-600">Mahnung geht automatisch raus.</span>
        </h3>
        <p className="text-slate-500 leading-relaxed mb-6">
          ImmoPilot erkennt Zahlungsrückstände und erstellt Mahnschreiben in drei Stufen.
          Von der Erinnerung bis zur formalen Mahnung, alles lückenlos dokumentiert.
        </p>
        <ul className="space-y-3">
          {[
            "3-stufiges Mahnsystem",
            "Automatische Erkennung von Zahlungsrückständen",
            "Mahnschreiben per Klick generiert",
            "Kompletter Verlauf dokumentiert",
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
        <BrowserMockup url="app.immopilot.de/mahnwesen">
          <div className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-slate-800">Mahnübersicht</h4>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-50 text-red-600 font-semibold">
                3 offene Mahnungen
              </span>
            </div>

            {/* Mahnstufen-Leiste */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { stufe: "Stufe 1", label: "Erinnerung", count: 1, color: "bg-amber-50 text-amber-600 border-amber-200" },
                { stufe: "Stufe 2", label: "1. Mahnung", count: 1, color: "bg-orange-50 text-orange-600 border-orange-200" },
                { stufe: "Stufe 3", label: "2. Mahnung", count: 1, color: "bg-red-50 text-red-600 border-red-200" },
              ].map((s) => (
                <div key={s.stufe} className={`rounded-lg p-2.5 border text-center ${s.color}`}>
                  <div className="text-lg font-bold">{s.count}</div>
                  <div className="text-[10px] font-semibold">{s.stufe}</div>
                  <div className="text-[9px] opacity-70">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Mahnung-Einträge */}
            <div className="space-y-2">
              {mahnungen.map((m, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-200 rounded-xl p-3"
                  style={{ animation: "slide-up 0.4s ease-out forwards", animationDelay: `${i * 0.15}s`, opacity: 0 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold text-white ${
                        m.stufe === 1 ? "bg-amber-400" : m.stufe === 2 ? "bg-orange-500" : "bg-red-500"
                      }`}>
                        {m.stufe}
                      </div>
                      <span className="text-xs font-bold text-slate-800">{m.mieter}</span>
                    </div>
                    <span className="text-xs font-bold text-red-500">{m.betrag}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-[10px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock size={10} /> {m.tage} Tage überfällig
                      </span>
                      <span>Monat: {m.monat}</span>
                    </div>
                    {m.status === "entwurf" && !sent ? (
                      <button
                        className="flex items-center gap-1 px-2 py-1 rounded bg-primary-600 text-white text-[10px] font-semibold"
                        style={{ animation: sent ? undefined : "pulse 1s ease-in-out infinite" }}
                      >
                        <Send size={10} /> Senden
                      </button>
                    ) : (
                      <span className="flex items-center gap-1 text-[10px] text-primary-600 font-semibold">
                        <CheckCircle2 size={10} /> Versendet
                      </span>
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
