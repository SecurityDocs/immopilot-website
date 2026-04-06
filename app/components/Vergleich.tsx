"use client";

import { Check, X, Minus } from "lucide-react";
import Link from "next/link";

const rows = [
  { criterion: "Kosten pro Wohneinheit", selfManaged: "0 €*", management: "25–40 €/Mon.", other: "8–15 €/Mon.", immopilot: "5 €/Mon." },
  { criterion: "Zeitaufwand", selfManaged: "10+ Std./Mon.", management: "0 Std.", other: "5–8 Std./Mon.", immopilot: "< 2 Std./Mon." },
  { criterion: "KI-Zahlungsabgleich", selfManaged: false, management: false, other: "partial", immopilot: true },
  { criterion: "Nebenkostenabrechnung", selfManaged: false, management: true, other: "partial", immopilot: true },
  { criterion: "Mieter-Selfservice", selfManaged: false, management: false, other: false, immopilot: true },
  { criterion: "Mietpreisanalyse", selfManaged: false, management: false, other: "partial", immopilot: true },
  { criterion: "SEPA-Lastschrift", selfManaged: false, management: true, other: "partial", immopilot: true },
  { criterion: "Deutsches Recht (BGB)", selfManaged: "Manuell", management: true, other: "partial", immopilot: true },
  { criterion: "Monatlich kündbar", selfManaged: "—", management: "—", other: "meistens", immopilot: true },
  { criterion: "Persönliches Onboarding", selfManaged: false, management: false, other: false, immopilot: true },
];

const columns = [
  { key: "selfManaged", label: "Selbst verwalten" },
  { key: "management", label: "Hausverwaltung" },
  { key: "other", label: "Andere Software" },
  { key: "immopilot", label: "ImmoPilot", highlight: true },
];

function Cell({ value }: { value: any }) {
  if (value === true) return <div className="flex justify-center"><Check size={18} className="text-primary-600" strokeWidth={3} /></div>;
  if (value === false) return <div className="flex justify-center"><X size={18} className="text-slate-400" strokeWidth={2} /></div>;
  if (value === "partial") return <div className="flex justify-center"><Minus size={18} className="text-amber-400" strokeWidth={2} /></div>;
  return <div className="text-center text-xs sm:text-sm text-slate-700 font-medium leading-snug">{value}</div>;
}

export default function Vergleich() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-4">
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">Direktvergleich</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Warum Eigentümer zu ImmoPilot wechseln
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            Alle drei Alternativen auf einen Blick — transparent und ehrlich.
          </p>
        </div>

        {/* Mobile: Card per column (ImmoPilot vs. je eine Alternative) */}
        <div className="block lg:hidden space-y-4">
          {/* ImmoPilot highlight card */}
          <div className="bg-primary-600 rounded-2xl p-5 text-white">
            <div className="font-extrabold text-lg mb-1">ImmoPilot</div>
            <div className="inline-block px-2 py-0.5 text-xs font-bold bg-primary-500 rounded-full mb-4">Empfohlen</div>
            <div className="space-y-2.5">
              {rows.map((row) => (
                <div key={row.criterion} className="flex items-start justify-between gap-3">
                  <span className="text-sm text-primary-100 flex-1">{row.criterion}</span>
                  <span className="flex-shrink-0 mt-0.5">
                    {row.immopilot === true ? <Check size={16} strokeWidth={3} className="text-white" /> :
                     row.immopilot === false ? <X size={16} strokeWidth={2} className="text-primary-300" /> :
                     <span className="text-xs font-bold text-white">{String(row.immopilot)}</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Alternatives as compact cards */}
          <div className="grid grid-cols-3 gap-3">
            {columns.slice(0, 3).map((col) => (
              <div key={col.key} className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                <div className="text-xs font-bold text-slate-700 mb-3 leading-tight">{col.label}</div>
                <div className="space-y-2">
                  {rows.map((row) => {
                    const val = (row as any)[col.key];
                    return (
                      <div key={row.criterion} className="flex justify-center">
                        {val === true ? <Check size={14} strokeWidth={3} className="text-slate-500" /> :
                         val === false ? <X size={14} strokeWidth={2} className="text-slate-300" /> :
                         val === "partial" ? <Minus size={14} strokeWidth={2} className="text-amber-400" /> :
                         <span className="text-[9px] text-slate-600 font-medium text-center leading-tight">{String(val)}</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile legend (criteria order) */}
          <div className="bg-white border border-slate-100 rounded-xl p-4">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">Kriterien (Reihenfolge von oben)</p>
            <ol className="space-y-1">
              {rows.map((row, i) => (
                <li key={row.criterion} className="text-xs text-slate-600 flex gap-2">
                  <span className="text-slate-400 font-bold w-4 flex-shrink-0">{i + 1}.</span>
                  {row.criterion}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Desktop: Full table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left px-6 py-4 font-bold text-slate-900 text-sm w-[32%]">Kriterium</th>
                <th className="text-center px-5 py-4 font-semibold text-slate-600 text-sm bg-slate-50">Selbst verwalten</th>
                <th className="text-center px-5 py-4 font-semibold text-slate-600 text-sm bg-slate-50">Hausverwaltung</th>
                <th className="text-center px-5 py-4 font-semibold text-slate-600 text-sm bg-slate-50">Andere Software</th>
                <th className="text-center px-5 py-4 font-bold text-white text-sm bg-primary-600">
                  <div className="flex flex-col items-center gap-1">
                    <span>ImmoPilot</span>
                    <span className="text-[10px] px-2 py-0.5 bg-primary-500 rounded-full font-semibold">Empfohlen</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="text-left px-6 py-4 font-semibold text-slate-900 text-sm">{row.criterion}</td>
                  <td className="text-center px-5 py-4 bg-slate-50"><Cell value={row.selfManaged} /></td>
                  <td className="text-center px-5 py-4 bg-slate-50"><Cell value={row.management} /></td>
                  <td className="text-center px-5 py-4 bg-slate-50"><Cell value={row.other} /></td>
                  <td className="text-center px-5 py-4 bg-primary-50"><Cell value={row.immopilot} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-xs text-slate-400">
          * Versteckter Aufwand: Arbeitszeit, Fehler, Rechtskosten, Buchhaltung. Alle Angaben Marktdurchschnitt 2026.
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
