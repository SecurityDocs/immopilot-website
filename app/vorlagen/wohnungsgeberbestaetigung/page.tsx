"use client";

import Link from "next/link";
import { ArrowLeft, Printer, AlertTriangle, CheckCircle, Info } from "lucide-react";

export default function WohnungsgeberbestaetlungPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 pt-28 pb-12 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/vorlagen"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 text-sm font-medium"
          >
            <ArrowLeft size={16} /> Zurück zu Vorlagen
          </Link>

          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 border border-primary-200 mb-4">
                <span className="w-2 h-2 rounded-full bg-primary-700"></span>
                <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">
                  Pflichtdokument
                </span>
              </div>
              <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
                Wohnungsgeberbestätigung
              </h1>
              <p className="text-slate-500">
                Pflicht bei Anmeldung beim Einwohnermeldeamt · §19 Bundesmeldegesetz · Stand 2026
              </p>
            </div>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-4 py-2 rounded-xl transition-colors"
            >
              <Printer size={18} /> Drucken
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        {/* Warning Box */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8 flex gap-4">
          <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="font-bold text-amber-900 mb-1">
              Rechtlich erforderlich — Strafen bis 1.000€
            </h3>
            <p className="text-sm text-amber-800">
              Diese Bestätigung muss innerhalb von <strong>2 Wochen nach Einzug</strong> dem
              Einwohnermeldeamt vorgelegt werden. Versäumnisse können zu Ordnungswidrigkeitsverfahren
              und Geldstrafen bis 1.000€ führen (§54 BMG).
            </p>
          </div>
        </div>

        {/* Template */}
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-12 print:border-0 print:shadow-none print:bg-white mb-8 space-y-8">
          {/* Header */}
          <div className="text-center border-b border-slate-300 pb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              WOHNUNGSGEBERBESTÄTIGUNG
            </h2>
            <p className="text-sm text-slate-600">
              gemäß §19 Abs. 1 Bundesmeldegesetz (BMG)
            </p>
          </div>

          {/* Section 1: Angaben zum Wohnungsgeber */}
          <div>
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
              ANGABEN ZUM WOHNUNGSGEBER (VERMIETER)
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="pb-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Vorname
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-2"></div>
                </div>
                <div className="pb-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Nachname
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-2"></div>
                </div>
              </div>

              <div className="pb-1">
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Straße und Hausnummer
                </label>
                <div className="border-b border-slate-300 h-6 mt-2"></div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="pb-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    PLZ
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-2"></div>
                </div>
                <div className="pb-1 col-span-2">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Ort
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-2"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="pb-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Telefon
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-2"></div>
                </div>
                <div className="pb-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    E-Mail
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Angaben zur Wohnung */}
          <div>
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
              ANGABEN ZUR WOHNUNG
            </h3>
            <div className="space-y-4">
              <div className="pb-1">
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Straße und Hausnummer der vermieteten Wohnung
                </label>
                <div className="border-b border-slate-300 h-6 mt-2"></div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="pb-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    PLZ
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-2"></div>
                </div>
                <div className="pb-1 col-span-2">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Ort
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-2"></div>
                </div>
              </div>

              <div className="pb-1">
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Wohnungsnummer / Stockwerk
                </label>
                <div className="border-b border-slate-300 h-6 mt-2"></div>
              </div>
            </div>
          </div>

          {/* Section 3: Angaben zum Einziehenden */}
          <div>
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
              ANGABEN ZUM EINZIEHENDEN / ZU DEN EINZIEHENDEN PERSONEN
            </h3>
            <div className="space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
                  Person 1 (Hauptmieterin/Hauptmieter)
                </p>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className="pb-1">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Vorname
                    </label>
                    <div className="border-b border-slate-300 h-6 mt-2"></div>
                  </div>
                  <div className="pb-1">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Nachname
                    </label>
                    <div className="border-b border-slate-300 h-6 mt-2"></div>
                  </div>
                </div>
                <div className="pb-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Geburtsdatum
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-2"></div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
                  Weitere Personen (optional)
                </p>
                <div className="pb-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Name und Geburtsdatum zusätzlicher Bewohner (bei Bedarf fortlaufend auflisten)
                  </label>
                  <div className="border-b border-slate-300 h-12 mt-2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Einzugsdatum */}
          <div>
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
              EINZUGSDATUM
            </h3>
            <div className="pb-1">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Einzugsdatum (Tag.Monat.Jahr)
              </label>
              <div className="border-b border-slate-300 h-6 mt-2"></div>
            </div>
          </div>

          {/* Section 5: Unterschrift */}
          <div>
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
              UNTERSCHRIFT WOHNUNGSGEBER
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Ort und Datum
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-4"></div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Unterschrift Wohnungsgeber
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-4"></div>
                </div>
              </div>

              <div className="text-xs text-slate-600 leading-relaxed bg-slate-50 border border-slate-200 rounded-lg p-4">
                <p className="mb-2">
                  <strong>Rechtlicher Hinweis:</strong> Diese Bestätigung muss vom Wohnungsgeber
                  (Vermieter oder berechtigter Vertreter) ausgefüllt und unterschrieben werden. Sie ist
                  erforderlich für die Anmeldung des Mieters beim Einwohnermeldeamt (Anmeldung beim
                  Einzug).
                </p>
                <p>
                  <strong>Ausstellungsdatum:</strong> Das Ausstellungsdatum dieser Bestätigung darf
                  nicht länger als 2 Wochen vor dem Einzugsdatum liegen. Bitte bewahren Sie eine Kopie
                  auf.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tip Box */}
        <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6 mb-8 flex gap-4">
          <CheckCircle className="text-primary-600 shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="font-bold text-primary-900 mb-1">
              Automatische Dokumentenerstellung mit ImmoPilot
            </h3>
            <p className="text-sm text-primary-800 mb-3">
              Mit ImmoPilot erstellen Sie diese Bestätigung automatisch bei der Erfassung eines neuen
              Mietverhältnisses. Alle Angaben werden aus Ihrer Mieter- und Wohnungsverwaltung
              vorausgefüllt.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-700"
            >
              → Demo anfragen
            </Link>
          </div>
        </div>

        {/* Related Links */}
        <div className="bg-slate-100 rounded-2xl p-6">
          <h3 className="font-bold text-slate-900 mb-4">Weitere nützliche Vorlagen</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <Link
              href="/vorlagen/mietvertrag-wohnraum"
              className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-primary-300 hover:shadow-sm transition-all group"
            >
              <Info size={16} className="text-primary-600" />
              <span className="text-sm font-medium text-slate-700 group-hover:text-primary-600">
                Mietvertrag für Wohnraum
              </span>
            </Link>
            <Link
              href="/vorlagen/uebergabeprotokoll"
              className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-primary-300 hover:shadow-sm transition-all group"
            >
              <Info size={16} className="text-primary-600" />
              <span className="text-sm font-medium text-slate-700 group-hover:text-primary-600">
                Wohnungsübergabeprotokoll
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
