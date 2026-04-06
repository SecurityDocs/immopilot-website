"use client";

import {
  Tablet, Mic, FileEdit, QrCode, Info, Shield,
  CheckCircle2, Smartphone, Star, Zap, PhoneOff,
} from "lucide-react";

export default function FeatureTablet() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left: Tablet Mockup */}
      <div className="order-2 lg:order-1 flex justify-center">
        <div className="relative">
          {/* −80% Badge oben links über dem Tablet */}
          <div className="absolute -top-5 left-0 z-10 flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2 shadow-sm">
            <PhoneOff size={14} className="text-primary-600 flex-shrink-0" />
            <div>
              <div className="text-xs font-extrabold text-slate-900">−80 %</div>
              <div className="text-[9px] text-slate-500 leading-tight">weniger Mieteranrufe</div>
            </div>
          </div>

          {/* 2026 Badge oben rechts */}
          <div className="absolute -top-4 -right-2 z-10 flex flex-col gap-1.5">
            <span className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-amber-400 text-white shadow-sm flex items-center gap-1">
              <Star size={10} /> Nur 2026 verfügbar
            </span>
            <span className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-primary-600 text-white shadow-sm flex items-center gap-1">
              <Zap size={10} /> Ab Professional kostenlos
            </span>
          </div>

          {/* Tablet frame */}
          <div className="bg-slate-800 rounded-[2rem] p-3 shadow-2xl w-full max-w-[280px] mt-4">
            <div className="bg-slate-950 rounded-[1.6rem] overflow-hidden" style={{ minHeight: "380px" }}>
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="bg-slate-950 px-5 pt-5 pb-3 text-center border-b border-slate-800">
                  <div className="w-8 h-8 rounded-xl bg-primary-600 flex items-center justify-center mx-auto mb-2">
                    <Tablet size={14} className="text-white" />
                  </div>
                  <h3 className="text-white text-sm font-bold">Hausverwaltung</h3>
                  <p className="text-slate-400 text-[10px] mt-0.5">MFH Rheinufer 12 · Eingang</p>
                </div>

                {/* Content */}
                <div className="flex-1 bg-slate-950 px-4 py-3 space-y-2.5">
                  <p className="text-slate-300 text-[11px] font-semibold text-center">Wie können wir Ihnen helfen?</p>

                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: Mic,        label: "Sprechen",   sub: "Sprachassistent" },
                      { icon: FileEdit,   label: "Formular",   sub: "Ticket erstellen" },
                      { icon: Smartphone, label: "Per Handy",  sub: "QR-Code scannen" },
                      { icon: Info,       label: "Infos",      sub: "Aushänge & News" },
                    ].map(({ icon: Icon, label, sub }) => (
                      <div key={label} className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-center">
                        <Icon size={16} className="text-primary-400 mx-auto mb-1" />
                        <div className="text-[9px] font-bold text-white">{label}</div>
                        <div className="text-[8px] text-slate-500">{sub}</div>
                      </div>
                    ))}
                  </div>

                  {/* Info banner */}
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-1.5">
                      <Info size={10} className="text-amber-400 flex-shrink-0" />
                      <span className="text-[9px] font-semibold text-amber-300">Aufzug: Wartung bis 10.04.</span>
                    </div>
                  </div>

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
            Hardware & Installation inklusive · bis 31.12.2026
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
          oder QR-Code. Die KI strukturiert alles — Sie weisen per Klick zu. Keine Anrufe mehr.
        </p>
        <ul className="space-y-2.5">
          {[
            "Ticket-System: Anliegen per Sprache oder Formular",
            "Sprachassistent erstellt automatisch strukturierte Tickets",
            "QR-Code für Handy-Zugang — auch von unterwegs",
            "Infos, Aushänge & Ankündigungen zentral anzeigen",
            "Alle Tickets in Echtzeit — sortiert nach Priorität",
            "Per Klick an Hausmeister oder Handwerker zuweisen",
            "Wir liefern, montieren & richten ein",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
              <CheckCircle2 size={15} className="text-primary-600 flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
