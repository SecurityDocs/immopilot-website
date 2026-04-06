"use client";

import { Check, X, Minus } from "lucide-react";
import Link from "next/link";

export default function Vergleich() {
  const rows = [
    {
      criterion: "Kosten pro Wohneinheit",
      selfManaged: "0 €*",
      management: "25–40 €/Monat",
      other: "8–15 €/Monat",
      immopilot: "5 €/Monat",
    },
    {
      criterion: "Zeitaufwand",
      selfManaged: "10+ Std./Monat",
      management: "0 Std.",
      other: "5–8 Std./Monat",
      immopilot: "< 2 Std./Monat",
    },
    {
      criterion: "KI-Zahlungsabgleich",
      selfManaged: false,
      management: false,
      other: "partial",
      immopilot: true,
    },
    {
      criterion: "Automatische Nebenkostenabrechnung",
      selfManaged: false,
      management: true,
      other: "partial",
      immopilot: true,
    },
    {
      criterion: "Mieter-Selfservice (Tablet/App)",
      selfManaged: false,
      management: false,
      other: false,
      immopilot: true,
    },
    {
      criterion: "Mietpreisanalyse",
      selfManaged: false,
      management: false,
      other: "partial",
      immopilot: true,
    },
    {
      criterion: "SEPA-Lastschrift",
      selfManaged: false,
      management: true,
      other: "partial",
      immopilot: true,
    },
    {
      criterion: "Transparenz für Eigentümer",
      selfManaged: "—",
      management: "—",
      other: "partial",
      immopilot: true,
    },
    {
      criterion: "Deutsches Recht (BGB, BetrKV)",
      selfManaged: "Manual",
      management: true,
      other: "partial",
      immopilot: true,
    },
    {
      criterion: "Kündbar monatlich",
      selfManaged: "—",
      management: "—",
      other: "meistens",
      immopilot: true,
    },
    {
      criterion: "Persönliches Onboarding",
      selfManaged: false,
      management: false,
      other: false,
      immopilot: true,
    },
  ];

  const renderCell = (value: any) => {
    if (typeof value === "boolean") {
      if (value === true) {
        return (
          <div className="flex justify-center">
            <Check size={20} className="text-primary-600" strokeWidth={3} />
          </div>
        );
      } else {
        return (
          <div className="flex justify-center">
            <X size={20} className="text-slate-400" strokeWidth={3} />
          </div>
        );
      }
    } else if (value === "partial") {
      return (
        <div className="flex justify-center">
          <Minus size={20} className="text-slate-400" strokeWidth={3} />
        </div>
      );
    }
    return <div className="text-center text-sm text-slate-700 font-medium">{value}</div>;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-4">
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">
              Direktvergleich
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Warum Eigentümer zu ImmoPilot wechseln
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Alle drei Alternativen auf einen Blick — transparent und ehrlich.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="text-left px-6 py-4 font-bold text-slate-900 text-sm">
                  Kriterium
                </th>
                <th className="text-center px-6 py-4 font-semibold text-slate-600 text-sm bg-slate-50">
                  Selbst verwalten
                </th>
                <th className="text-center px-6 py-4 font-semibold text-slate-600 text-sm bg-slate-50">
                  Hausverwaltung
                </th>
                <th className="text-center px-6 py-4 font-semibold text-slate-600 text-sm bg-slate-50">
                  Andere Software
                </th>
                <th className="text-center px-6 py-4 font-bold text-white text-sm bg-primary-600">
                  <div className="flex flex-col items-center gap-2">
                    <span>ImmoPilot</span>
                    <span className="inline-block px-2 py-0.5 text-xs font-semibold bg-primary-500 rounded-full">
                      Empfohlen
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="text-left px-6 py-5 font-semibold text-slate-900 text-sm">
                    {row.criterion}
                  </td>
                  <td className="text-center px-6 py-5 bg-slate-50">
                    {renderCell(row.selfManaged)}
                  </td>
                  <td className="text-center px-6 py-5 bg-slate-50">
                    {renderCell(row.management)}
                  </td>
                  <td className="text-center px-6 py-5 bg-slate-50">
                    {renderCell(row.other)}
                  </td>
                  <td className="text-center px-6 py-5 bg-primary-50">
                    {renderCell(row.immopilot)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Notes */}
        <div className="mt-10 space-y-4 text-sm text-slate-600">
          <p>
            <strong>* Versteckter Aufwand bei "Selbst verwalten":</strong> Arbeitszeit,
            Fehler bei Abrechnungen, Rechtskosten bei Streitigkeiten, Buchhaltung und
            Steuern.
          </p>
          <p className="text-xs text-slate-500">
            Alle Angaben basieren auf Marktdurchschnittswerten 2026. Preise können je nach
            Anbieter variieren. Kosten für ImmoPilot inkl. MwSt.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-3 rounded-xl transition-colors"
          >
            Kostenlose Demo buchen
          </Link>
          <Link
            href="/vorlagen"
            className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-primary-300 text-slate-700 hover:text-primary-600 font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            Alle Vorlagen ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}
