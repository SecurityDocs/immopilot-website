"use client";

import {
  Tablet, Mic, FileEdit, QrCode, Info, Shield,
  CheckCircle2, Smartphone, Star, Zap, PhoneOff, Check,
} from "lucide-react";

export default function FeatureTablet() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left: Tablet Mockup */}
      <div className="order-2 lg:order-1 flex justify-center">
        <div className="relative">
          {/* Special badges */}
          <div className="absolute -top-4 -right-2 z-10 flex flex-col gap-1.5">
            <span className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-amber-400 text-white shadow-sm flex items-center gap-1">
              <Star size={10} /> Nur 2026 verfügbar
            </span>
            <span className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-primary-600 text-white shadow-sm flex items-center gap-1">
              <Zap size={10} /> Ab Professional kostenlos
            </span>
          </div>

          {/* Tablet frame */}
          <div className="bg-slate-800 rounded-[2rem] p-3 shadow-2xl w-full max-w-[300px]">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600" />
            <div className="bg-slate-950 rounded-[1.6rem] overflow-hidden" style={{ minHeight: "420px" }}>
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="bg-slate-950 px-5 pt-6 pb-4 text-center border-b border-slate-800">
                  <div className="w-8 h-8 rounded-xl bg-primary-600 flex items-center justify-center mx-auto mb-2">
                    <Tablet size={14} className="text-white" />
                  </div>
                  <h3 className="text-white text-sm font-bold">Hausverwaltung</h3>
                  <p className="text-slate-400 text-[10px] mt-0.5">MFH Rheinufer 12 · Eingang</p>
                </div>

                {/* Content */}
                <div className="flex-1 bg-slate-950 px-4 py-4 space-y-3">
                  <p className="text-slate-300 text-xs font-semibold text-center">Wie können wir Ihnen helfen?</p>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center hover:border-primary-700 transition-colors">
                      <Mic size={18} className="text-primary-400 mx-auto mb-1.5" />
                      <div className="text-[10px] font-bold text-white">Sprechen</div>
                      <div className="text-[8px] text-slate-500">Sprachassistent</div>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center hover:border-primary-700 transition-colors">
                      <FileEdit size={18} className="text-primary-400 mx-auto mb-1.5" />
                      <div className="text-[10px] font-bold text-white">Formular</div>
                      <div className="text-[8px] text-slate-500">Ticket erstellen</div>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center hover:border-primary-700 transition-colors">
                      <Smartphone size={18} className="text-primary-400 mx-auto mb-1.5" />
                      <div className="text-[10px] font-bold text-white">Per Handy</div>
                      <div className="text-[8px] text-slate-500">QR-Code scannen</div>
                    </div>
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center hover:border-primary-700 transition-colors">
                      <Info size={18} className="text-primary-400 mx-auto mb-1.5" />
                      <div className="text-[10px] font-bold text-white">Infos</div>
                      <div className="text-[8px] text-slate-500">Aushänge & News</div>
                    </div>
                  </div>

                  {/* Info banner */}
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-1.5">
                      <Info size={10} className="text-amber-400 flex-shrink-0" />
                      <span className="text-[9px] font-semibold text-amber-300">Aufzug: Wartung bis 10.04.</span>
                    </div>
                  </div>

                  {/* Security note */}
                  <div className="flex items-center gap-1.5">
                    <Shield size={10} className="text-primary-500 flex-shrink-0" />
                    <span className="text-[8px] text-slate-500">Diebstahlgesichert · DSGVO-konform</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-[10px] text-slate-400 mt-3 flex items-center justify-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 inline-block" />
            Hardware & Installation inklusive · bei Buchung bis 31.12.2026
          </p>
        </div>
      </div>

      {/* Right: Text */}
      <div className="order-1 lg:order-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 mb-4">
          <Tablet size={14} className="text-amber-600" />
          <span className="text-xs font-semibold text-amber-700">Exklusiv 2026</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          Mieter melden selbst —{" "}
          <span className="text-primary-600">Sie werden nicht mehr angerufen.</span>
        </h3>
        <p className="text-slate-500 leading-relaxed mb-5">
          Das Tablet im Treppenhaus ist Ihr 24/7-Servicepunkt. Mieter melden Anliegen per Sprache, Formular
          oder QR-Code vom Handy. Die KI strukturiert alles automatisch — Sie weisen per Klick zu.
        </p>

        {/* Core promise */}
        <div className="flex items-center gap-3 p-4 bg-primary-50 border border-primary-100 rounded-2xl mb-5">
          <PhoneOff size={20} className="text-primary-600 flex-shrink-0" />
          <div>
            <p className="text-sm font-bold text-slate-900">−80 % weniger Mieteranrufe</p>
            <p className="text-xs text-slate-600 mt-0.5">Eigentümer mit ImmoPilot reduzieren eingehende Anrufe um über 80 %.</p>
          </div>
        </div>

        <ul className="space-y-2.5 mb-5">
          {[
            "Ticket-System: Mieter melden Anliegen per Sprache oder Formular",
            "Sprachassistent erstellt automatisch strukturierte Tickets",
            "QR-Code für Handy-Zugang — auch unterwegs",
            "Infos, Aushänge & Ankündigungen zentral anzeigen",
            "Sie sehen alle Tickets in Echtzeit — sortiert nach Priorität",
            "Per Klick an Hausmeister oder Handwerker zuweisen",
            "Diebstahlgesichert montiert — wir liefern & installieren",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
              <CheckCircle2 size={15} className="text-primary-600 flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        {/* Tier info */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
          <p className="text-xs font-bold text-slate-700 mb-3">Verfügbarkeit nach Paket:</p>
          {[
            { tier: "Starter",      text: "Tablet als Option (+ 29 €/Mon.)",        included: false },
            { tier: "Professional", text: "1 Tablet pro Objekt kostenlos",           included: true  },
            { tier: "Scale",        text: "Mehrere Tablets pro Objekt inklusive",    included: true  },
          ].map(({ tier, text, included }) => (
            <div key={tier} className="flex items-center gap-2.5">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${included ? "bg-primary-600" : "bg-slate-200"}`}>
                {included
                  ? <Check size={11} className="text-white" />
                  : <span className="text-slate-400 text-[9px] font-bold">+</span>
                }
              </div>
              <div>
                <span className="text-xs font-bold text-slate-800">{tier}: </span>
                <span className="text-xs text-slate-500">{text}</span>
              </div>
            </div>
          ))}
          <p className="text-[10px] text-amber-600 font-semibold mt-2 pt-2 border-t border-slate-100">
            ★ Dieses Angebot gilt nur für Buchungen bis 31.12.2026.
          </p>
        </div>
      </div>
    </div>
  );
}
