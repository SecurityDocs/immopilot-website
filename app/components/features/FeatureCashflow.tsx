"use client";

import { useState, useEffect } from "react";
import BrowserMockup from "../BrowserMockup";
import {
  TrendingUp, Check, CheckCircle2, Sparkles, Send,
  AlertTriangle, Landmark, ArrowUp, BarChart3,
} from "lucide-react";

const payments = [
  { name: "Müller, Thomas", soll: "780,00", ist: "780,00", status: "match" },
  { name: "Schmidt, Anna",   soll: "650,00", ist: "650,00", status: "match" },
  { name: "Weber, Laura",    soll: "750,00", ist: "710,00", status: "diff"  },
  { name: "Becker, Michael", soll: "580,00", ist: "—",      status: "miss"  },
];

const forecast = [
  { mon: "Apr", val: 85 },
  { mon: "Mai", val: 85 },
  { mon: "Jun", val: 92 },
  { mon: "Jul", val: 92 },
  { mon: "Aug", val: 98 },
];

export default function FeatureCashflow() {
  const [tab, setTab] = useState<"abgleich" | "forecast">("abgleich");
  const [mahnungSent, setMahnungSent] = useState<Record<number, boolean>>({});

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    let t3: ReturnType<typeof setTimeout>;
    const run = () => {
      setTab("abgleich");
      setMahnungSent({});
      t1 = setTimeout(() => setMahnungSent({ 2: true, 3: true }), 3500);
      t2 = setTimeout(() => setTab("forecast"), 6500);
      t3 = setTimeout(run, 12000);
    };
    run();
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="order-2 lg:order-1">
        <BrowserMockup url="app.immopilot.de/cashflow">
          <div className="p-3 sm:p-4 min-h-[340px] sm:min-h-[420px]">
            {/* Bank badge */}
            <div className="flex items-center gap-2 mb-3 px-2.5 py-1.5 bg-primary-50 border border-primary-100 rounded-lg">
              <Landmark size={12} className="text-primary-600" />
              <span className="text-[10px] font-semibold text-primary-700">Bankverbindung aktiv · Sparkasse</span>
              <span className="ml-auto text-[9px] text-primary-500 bg-primary-100 px-1.5 py-0.5 rounded-full font-bold">Live</span>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 mb-3 bg-slate-100 rounded-lg p-1">
              {[
                { id: "abgleich", label: "Zahlungsabgleich" },
                { id: "forecast", label: "Cashflow-Vorschau" },
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setTab(id as "abgleich" | "forecast")}
                  className={`flex-1 py-1.5 rounded-md text-[10px] font-semibold transition-all ${
                    tab === id ? "bg-white shadow-sm text-slate-800" : "text-slate-500"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {tab === "abgleich" && (
              <div style={{ animation: "slide-up 0.2s ease-out forwards" }}>
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-1 px-3 py-2 bg-slate-50 border-b border-slate-200 text-[9px] font-bold text-slate-400 uppercase">
                    <span className="col-span-1">Mieter</span>
                    <span className="col-span-1 hidden sm:block">Soll</span>
                    <span className="col-span-1">Eingang</span>
                    <span className="col-span-1">Status</span>
                    <span className="col-span-1">Aktion</span>
                  </div>
                  {payments.map((p, i) => (
                    <div key={i} className="grid grid-cols-4 sm:grid-cols-5 gap-1 px-3 py-2.5 border-b border-slate-50 last:border-b-0 items-center"
                      style={{ animation: "slide-up 0.3s ease-out forwards", animationDelay: `${i * 0.08}s`, opacity: 0 }}>
                      <span className="text-[10px] font-medium text-slate-800 truncate col-span-1">{p.name.split(",")[0]}</span>
                      <span className="text-[10px] text-slate-600 col-span-1 hidden sm:block">{p.soll} €</span>
                      <span className={`text-[10px] col-span-1 font-semibold ${p.status === "miss" ? "text-red-500" : p.status === "diff" ? "text-amber-600" : "text-slate-600"}`}>
                        {p.ist === "—" ? "Fehlt" : `${p.ist} €`}
                      </span>
                      <span className="col-span-1">
                        {p.status === "match" && <span className="px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[9px] font-bold">✓</span>}
                        {p.status === "diff" && <span className="px-1 py-0.5 rounded bg-amber-50 text-amber-600 text-[9px] flex items-center gap-0.5"><AlertTriangle size={8}/>−40€</span>}
                        {p.status === "miss" && <span className="px-1 py-0.5 rounded bg-red-50 text-red-500 text-[9px] font-bold">Fehlt</span>}
                      </span>
                      <span className="col-span-1">
                        {p.status === "match" ? <span className="text-slate-200 text-[9px]">—</span>
                          : mahnungSent[i] ? <span className="text-primary-600 text-[9px] font-semibold flex items-center gap-0.5"><Check size={9}/>Gesendet</span>
                          : <button onClick={() => setMahnungSent(prev => ({ ...prev, [i]: true }))} className="px-1.5 py-0.5 rounded bg-primary-600 text-white text-[9px] font-bold flex items-center gap-0.5 hover:bg-primary-700"><Send size={8}/>Mahnen</button>
                        }
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-2 bg-primary-50 border border-primary-100 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5">
                  <Sparkles size={11} className="text-primary-600" />
                  <span className="text-[10px] text-primary-700">KI hat 2 Mahnschreiben automatisch vorbereitet</span>
                </div>
              </div>
            )}

            {tab === "forecast" && (
              <div style={{ animation: "slide-up 0.2s ease-out forwards" }}>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 mb-3">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-slate-700">Cashflow-Vorschau (nächste 5 Monate)</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center gap-0.5">
                      <ArrowUp size={8} />+13 %
                    </span>
                  </div>
                  {/* Mini bar chart */}
                  <div className="flex items-end gap-1.5 h-16">
                    {forecast.map((f, i) => (
                      <div key={f.mon} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className={`w-full rounded-t-sm transition-all ${i === 2 || i === 4 ? "bg-primary-500" : "bg-primary-200"}`}
                          style={{ height: `${f.val}%`, animation: `slide-up 0.4s ease-out ${i * 0.1}s forwards`, opacity: 0 }}
                        />
                        <span className="text-[8px] text-slate-400">{f.mon}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white border border-slate-100 rounded-lg p-2.5 text-center">
                    <div className="text-xs font-bold text-slate-800">Mietsteigerung</div>
                    <div className="text-base font-extrabold text-primary-600 mt-0.5">+ 540 €/Mon.</div>
                    <div className="text-[9px] text-slate-400">erkanntes Potenzial</div>
                  </div>
                  <div className="bg-white border border-slate-100 rounded-lg p-2.5 text-center">
                    <div className="text-xs font-bold text-slate-800">Finanzierung</div>
                    <div className="text-base font-extrabold text-slate-700 mt-0.5">1.450 €/Mon.</div>
                    <div className="text-[9px] text-slate-400">Rate hinterlegt</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </BrowserMockup>
      </div>

      <div className="order-1 lg:order-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 mb-4">
          <TrendingUp size={14} className="text-primary-600" />
          <span className="text-xs font-semibold text-primary-700">Cashflow-Übersicht</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          Wer hat gezahlt — und <span className="text-primary-600">was kommt noch?</span>
        </h3>
        <p className="text-slate-500 leading-relaxed mb-6">
          Direkte Bankanbindung oder CSV-Upload: ImmoPilot gleicht alle Zahlungseingänge mit den Soll-Mieten ab.
          Fehlbeträge werden sofort erkannt, Mahnungen in Sekunden verschickt — und der zukünftige Cashflow ist immer im Blick.
        </p>
        <ul className="space-y-3">
          {[
            "Bankanbindung (SEPA) oder CSV-Import — Ihre Wahl",
            "KI gleicht Eingänge automatisch mit Mietverträgen ab",
            "Mahnschreiben per Klick — Stufe und Betrag automatisch korrekt",
            "Mietsteigerungspotenzial und Zukunftscashflow sichtbar",
            "Finanzierungsdaten hinterlegen für Gesamtrendite-Übersicht",
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
