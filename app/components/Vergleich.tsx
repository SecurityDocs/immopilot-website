"use client";

import { useState } from "react";
import { Check, X, Minus } from "lucide-react";
import Link from "next/link";

const rows = [
  { criterion: "Kosten pro Wohneinheit",   selfManaged: "0 €*",           management: "25–40 €/Mon.",    other: "8–15 €/Mon.",      immopilot: "5 €/Mon." },
  { criterion: "Zeitaufwand",              selfManaged: "10+ Std./Mon.",   management: "0 Std.",          other: "5–8 Std./Mon.",    immopilot: "< 2 Std./Mon." },
  { criterion: "KI-Zahlungsabgleich",      selfManaged: false,             management: false,             other: "partial",          immopilot: true },
  { criterion: "Nebenkostenabrechnung",    selfManaged: false,             management: true,              other: "partial",          immopilot: true },
  { criterion: "Mieter-Selfservice",       selfManaged: false,             management: false,             other: false,              immopilot: true },
  { criterion: "Mietpreisanalyse",         selfManaged: false,             management: false,             other: "partial",          immopilot: true },
  { criterion: "SEPA-Lastschrift",         selfManaged: false,             management: true,              other: "partial",          immopilot: true },
  { criterion: "Deutsches Recht (BGB)",    selfManaged: "Manuell",         management: true,              other: "partial",          immopilot: true },
  { criterion: "Monatlich kündbar",        selfManaged: "—",               management: "—",               other: "meistens",         immopilot: true },
  { criterion: "Persönliches Onboarding",  selfManaged: false,             management: false,             other: false,              immopilot: true },
];

const competitors = [
  { key: "selfManaged", label: "Selbst verwalten" },
  { key: "management",  label: "Hausverwaltung" },
  { key: "other",       label: "Andere Software" },
];

function CellIcon({ value }: { value: any }) {
  if (value === true)      return <Check size={18} className="text-primary-600" strokeWidth={3} />;
  if (value === false)     return <X size={18} className="text-slate-400" strokeWidth={2} />;
  if (value === "partial") return <Minus size={18} className="text-amber-500" strokeWidth={2} />;
  return <span className="text-sm text-slate-700 font-semibold">{value}</span>;
}

function ImmoCellIcon({ value }: { value: any }) {
  if (value === true)      return <Check size={18} className="text-white" strokeWidth={3} />;
  if (value === false)     return <X size={18} className="text-primary-300" strokeWidth={2} />;
  if (value === "partial") return <Minus size={18} className="text-primary-200" strokeWidth={2} />;
  return <span className="text-sm text-white font-bold">{value}</span>;
}

export default function Vergleich() {
  const [activeComp, setActiveComp] = useState(0);
  const competitor = competitors[activeComp];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-4">
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">Direktvergleich</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Warum Eigentümer zu ImmoPilot wechseln
          </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto">
            Vergleichen Sie ImmoPilot mit jeder Alternative — transparent und ehrlich.
          </p>
        </div>

        {/* Competitor tabs */}
        <div className="flex gap-2 sm:gap-3 mb-6 justify-center flex-wrap">
          {competitors.map((c, i) => (
            <button
              key={c.key}
              onClick={() => setActiveComp(i)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
                i === activeComp
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Comparison table — 3 columns: Kriterium | Competitor | ImmoPilot */}
        <div
          key={activeComp}
          className="rounded-2xl border border-slate-200 overflow-hidden"
          style={{ animation: "slide-up 0.2s ease-out forwards" }}
        >
          {/* Table header */}
          <div className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1fr_160px_160px]">
            <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Kriterium</span>
            </div>
            <div className="px-4 py-3.5 bg-slate-50 border-b border-l border-slate-200 text-center">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wide leading-tight">{competitor.label}</span>
            </div>
            <div className="px-4 py-3.5 bg-primary-600 border-b border-l border-primary-500 text-center">
              <div className="text-xs font-bold text-white uppercase tracking-wide">ImmoPilot</div>
              <div className="text-[9px] font-semibold text-primary-200 mt-0.5">Empfohlen</div>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, idx) => {
            const compVal = (row as any)[competitor.key];
            return (
              <div
                key={row.criterion}
                className={`grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1fr_160px_160px] border-b border-slate-100 last:border-b-0 ${
                  idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                }`}
              >
                <div className="px-5 py-4 flex items-center">
                  <span className="text-sm font-semibold text-slate-800 leading-snug">{row.criterion}</span>
                </div>
                <div className="px-4 py-4 border-l border-slate-100 flex items-center justify-center min-w-[90px]">
                  <CellIcon value={compVal} />
                </div>
                <div className="px-4 py-4 border-l border-primary-100 bg-primary-50 flex items-center justify-center min-w-[90px]">
                  <div className="w-7 h-7 rounded-full bg-primary-600 flex items-center justify-center">
                    <ImmoCellIcon value={row.immopilot} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-xs text-slate-400">
          * Versteckter Aufwand bei „Selbst verwalten": Arbeitszeit, Fehler, Rechtskosten, Buchhaltung. Alle Angaben Marktdurchschnitt 2026.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-3 rounded-xl transition-colors">
            Kostenlose Demo buchen
          </Link>
          <Link href="/vorlagen" className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-primary-300 text-slate-700 hover:text-primary-600 font-semibold px-8 py-3 rounded-xl transition-colors">
            Alle Vorlagen ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
