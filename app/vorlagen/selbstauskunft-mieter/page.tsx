"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Printer,
  AlertTriangle,
  CheckCircle,
  User,
  Briefcase,
  Home,
  FileText,
} from "lucide-react";

export default function SelbstauskunftMieterPage() {
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
                  Mieterauswahl
                </span>
              </div>
              <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
                Selbstauskunft Mieter
              </h1>
              <p className="text-slate-500">
                Für Neuvermietungen · DSGVO-konform · Stand 2026
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
        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8 flex gap-4">
          <AlertTriangle className="text-blue-600 shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="font-bold text-blue-900 mb-1">
              Verwendungszweck und DSGVO
            </h3>
            <p className="text-sm text-blue-800">
              Dieses Dokument dient der Mieterauswahl vor Vertragsabschluss. Die
              Angaben werden nur für die Bonität- und Zuverlässigkeitsprüfung
              verwendet und nicht an Dritte weitergegeben. Eine Einwilligung zur
              SCHUFA-Abfrage muss separaten vorliegen.
            </p>
          </div>
        </div>

        {/* Template */}
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-12 print:border-0 print:shadow-none print:bg-white mb-8 space-y-8">
          {/* Header */}
          <div className="text-center border-b border-slate-300 pb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              SELBSTAUSKUNFT MIETBEWERBER
            </h2>
            <p className="text-sm text-slate-600">
              zur Überprüfung der Bonität und Zuverlässigkeit
            </p>
          </div>

          {/* Section 1: Persönliche Angaben */}
          <div>
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
              1. PERSÖNLICHE ANGABEN
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

              <div className="grid grid-cols-2 gap-4">
                <div className="pb-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Geburtsdatum
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-2"></div>
                </div>
                <div className="pb-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Geburtsort
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-2"></div>
                </div>
              </div>

              <div className="pb-1">
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Personalausweisnummer
                </label>
                <div className="border-b border-slate-300 h-6 mt-2"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="pb-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Staatsangehörigkeit
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-2"></div>
                </div>
                <div className="pb-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Familienstand
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

          {/* Section 2: Aktuelle Wohnsituation */}
          <div>
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
              2. AKTUELLE WOHNSITUATION
            </h3>
            <div className="space-y-4">
              <div className="pb-1">
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Aktuelle Anschrift
                </label>
                <div className="border-b border-slate-300 h-6 mt-2"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="pb-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Wohnhaft seit (Monat/Jahr)
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-2"></div>
                </div>
                <div className="pb-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Grund des Umzugs
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-2"></div>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Vorvermieter (Name, Adresse, Telefon)
                </label>
                <div className="border-b border-slate-300 h-12 mt-2"></div>
              </div>
            </div>
          </div>

          {/* Section 3: Beschäftigung & Einkommen */}
          <div>
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
              3. BESCHÄFTIGUNG & EINKOMMEN
            </h3>
            <div className="space-y-4">
              <div className="pb-1">
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Arbeitgeber / Firma
                </label>
                <div className="border-b border-slate-300 h-6 mt-2"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="pb-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Berufsbezeichnung
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-2"></div>
                </div>
                <div className="pb-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Beschäftigt seit (Monat/Jahr)
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-2"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="pb-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Monatliches Nettoeinkommen (€)
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-2"></div>
                </div>
                <div className="pb-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Befristung
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-2"></div>
                </div>
              </div>

              <div className="pb-1">
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Weitere Einkommensquellen (z.B. Renteneinkommen)
                </label>
                <div className="border-b border-slate-300 h-6 mt-2"></div>
              </div>
            </div>
          </div>

          {/* Section 4: Finanzen */}
          <div>
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
              4. FINANZIELLE SITUATION
            </h3>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm text-slate-700">
                    <strong>SCHUFA-Abfrage:</strong> Ich erteile dem Vermieter die Erlaubnis, meine
                    Kreditwürdigkeit bei der SCHUFA oder einem ähnlichen Auskunftsdienst abzufragen.
                    Dies dient ausschließlich der Bonitätsprüfung für diese Mietanfrage.
                  </span>
                </label>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="pb-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Laufende Verbindlichkeiten (monatlich in €)
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-2"></div>
                </div>
                <div className="pb-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Insolvenzverfahren: Ja □ Nein □
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Haushalt */}
          <div>
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
              5. HAUSHALT & BESONDERHEITEN
            </h3>
            <div className="space-y-4">
              <div className="pb-1">
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Anzahl einziehender Personen
                </label>
                <div className="border-b border-slate-300 h-6 mt-2"></div>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                <div className="flex gap-6 items-center mb-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm text-slate-700 font-semibold">Haustiere: Ja</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm text-slate-700 font-semibold">Nein</span>
                  </label>
                </div>
                <div className="pb-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Falls ja, welche? (Art, Rasse, Anzahl)
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-2"></div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 bg-slate-50">
                <div className="flex gap-6 items-center mb-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm text-slate-700 font-semibold">Raucher: Ja</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-sm text-slate-700 font-semibold">Nein</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Unterschrift */}
          <div>
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">
              6. UNTERSCHRIFT & BESTÄTIGUNG
            </h3>
            <div className="space-y-6">
              <div className="text-xs text-slate-600 leading-relaxed bg-slate-50 border border-slate-200 rounded-lg p-4">
                <p className="mb-2">
                  <strong>Datenschutzerklärung:</strong> Ich erkläre mich damit einverstanden, dass
                  meine Angaben zur Überprüfung meiner Bonität und Zuverlässigkeit verwendet werden.
                  Die Daten werden gemäß DSGVO behandelt und nicht an Dritte weitergegeben, sofern nicht
                  rechtlich erforderlich. Ich habe die Hinweise zur Datenverarbeitung zur Kenntnis
                  genommen.
                </p>
                <p>
                  <strong>Erklärung der Richtigkeit:</strong> Ich versichere, dass die obigen Angaben
                  vollständig und wahr sind. Ich weiß, dass falsche Angaben zur Ablehnung meines
                  Mietantrags oder zur Beendigung eines zukünftigen Mietvertrags führen können.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Datum
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-4"></div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Unterschrift Mietbewerber
                  </label>
                  <div className="border-b border-slate-300 h-6 mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tip Box */}
        <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6 mb-8 flex gap-4">
          <CheckCircle className="text-primary-600 shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="font-bold text-primary-900 mb-1">
              Digitale Mieterauswahl mit ImmoPilot
            </h3>
            <p className="text-sm text-primary-800 mb-3">
              Mit ImmoPilot können Sie diese Selbstauskunft digital einholen und automatisch
              verarbeiten. Das spart Zeit und erhöht die Datensicherheit.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-700"
            >
              → Demo anfragen
            </Link>
          </div>
        </div>

        {/* Related Templates */}
        <div className="bg-slate-100 rounded-2xl p-6">
          <h3 className="font-bold text-slate-900 mb-4">Weitere nützliche Vorlagen</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <Link
              href="/vorlagen/mietvertrag-wohnraum"
              className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-primary-300 hover:shadow-sm transition-all group"
            >
              <FileText size={16} className="text-primary-600" />
              <span className="text-sm font-medium text-slate-700 group-hover:text-primary-600">
                Mietvertrag für Wohnraum
              </span>
            </Link>
            <Link
              href="/vorlagen/uebergabeprotokoll"
              className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-primary-300 hover:shadow-sm transition-all group"
            >
              <FileText size={16} className="text-primary-600" />
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
