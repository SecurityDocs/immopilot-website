"use client";

import Link from "next/link";
import { ArrowLeft, Printer, AlertTriangle, CheckCircle } from "lucide-react";

export default function KuendigungDurchMieterPage() {
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
                  Kündigung & Auszug
                </span>
              </div>
              <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
                Kündigung Mietvertrag durch Mieter
              </h1>
              <p className="text-slate-500">
                Ordentliche Kündigung · 3 Monate Kündigungsfrist · Stand 2026
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
        {/* Checklist */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
            <CheckCircle size={18} /> Vor dem Versenden überprüfen
          </h3>
          <ul className="space-y-3 text-sm text-blue-800">
            <li className="flex gap-3">
              <input type="checkbox" className="w-4 h-4 mt-0.5 shrink-0" />
              <span>
                <strong>Kündigungsfrist beachten:</strong> Mindestens 3 Monate zum Ende eines
                Kalendermonats (§573c BGB)
              </span>
            </li>
            <li className="flex gap-3">
              <input type="checkbox" className="w-4 h-4 mt-0.5 shrink-0" />
              <span>
                <strong>Schriftform:</strong> Original unterschreiben, per Einschreiben mit
                Rückschein versenden
              </span>
            </li>
            <li className="flex gap-3">
              <input type="checkbox" className="w-4 h-4 mt-0.5 shrink-0" />
              <span>
                <strong>Alle Mieter:</strong> Von allen Mietern des Mietvertrags unterschreiben
                lassen
              </span>
            </li>
            <li className="flex gap-3">
              <input type="checkbox" className="w-4 h-4 mt-0.5 shrink-0" />
              <span>
                <strong>Eingangsdatum:</strong> Behalte den Sendungsbeleg mit dem Eingangsdatum des
                Vermieters
              </span>
            </li>
            <li className="flex gap-3">
              <input type="checkbox" className="w-4 h-4 mt-0.5 shrink-0" />
              <span>
                <strong>Kündigungsbestätigung:</strong> Fordern Sie eine schriftliche Bestätigung vom
                Vermieter an
              </span>
            </li>
          </ul>
        </div>

        {/* Template */}
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-12 print:border-0 print:shadow-none print:bg-white mb-8 space-y-8">
          {/* Addresses */}
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Absender (Mieter)
              </p>
              <div className="space-y-1 pb-6 border-b border-slate-200">
                <div className="border-b border-slate-300 h-5"></div>
                <div className="border-b border-slate-300 h-5"></div>
                <div className="border-b border-slate-300 h-5"></div>
                <div className="border-b border-slate-300 h-5"></div>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Empfänger (Vermieter)
              </p>
              <div className="space-y-1 pb-6 border-b border-slate-200">
                <div className="border-b border-slate-300 h-5"></div>
                <div className="border-b border-slate-300 h-5"></div>
                <div className="border-b border-slate-300 h-5"></div>
                <div className="border-b border-slate-300 h-5"></div>
              </div>
            </div>
          </div>

          {/* Date */}
          <div className="pb-1">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Ort und Datum
            </label>
            <div className="border-b border-slate-300 h-6 mt-2"></div>
          </div>

          {/* Subject */}
          <div className="pb-1">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Betreff
            </label>
            <div className="bg-slate-50 border border-slate-200 rounded p-3 text-slate-800 text-sm mt-2 leading-relaxed">
              Kündigung des Mietvertrags für die Wohnung [Straße, Hausnummer, PLZ und Ort]
            </div>
          </div>

          {/* Body */}
          <div className="space-y-6 text-sm leading-relaxed text-slate-800">
            <p>Sehr geehrte Damen und Herren,</p>

            <p>
              ich kündige den Mietvertrag für die Wohnung
              <span className="inline-flex items-center ml-1 mr-1 border-b border-slate-300 w-72 h-5">
                &nbsp;
              </span>
              <br />
              hiermit zum
              <span className="inline-flex items-center ml-1 mr-1 border-b border-slate-300 w-48 h-5">
                &nbsp;
              </span>
              (Ende eines Kalendermonats).
            </p>

            <p>
              Die Kündigung erfolgt ordentlich unter Einhaltung der geltenden Kündigungsfrist von
              drei Monaten zum Ende eines Kalendermonats gemäß §573c BGB.
            </p>

            <p>
              Ich bitte Sie, der Kündigung schriftlich zu bestätigen. Bitte teilen Sie mir auch einen
              Übergabetermin mit, damit wir die Wohnung zusammen inspizieren und alle noch
              ausstehenden Fragen klären können. Ich bin flexibel bei der Terminplanung.
            </p>

            <p>
              Für evtl. ausstehende Forderungen oder Gegenrechnungen stehe ich Ihnen gerne zur
              Verfügung.
            </p>

            <p>Viele Grüße,</p>
          </div>

          {/* Signature Area */}
          <div className="pt-6 border-t border-slate-200">
            <div className="space-y-2 mb-6">
              <div className="border-b border-slate-300 h-16"></div>
              <p className="text-xs text-slate-600">
                (Unterschrift des Mieters / der Mieter – alle Mieter müssen unterschreiben)
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs text-slate-600 space-y-2">
              <p className="font-semibold text-slate-700">Zu beachten:</p>
              <p>
                • <strong>Versendungsart:</strong> Bitte versenden Sie diese Kündigung per Einschreiben
                mit Rückschein an den Vermieter, um einen Nachweis des Eingangs zu erhalten.
              </p>
              <p>
                • <strong>Kündigungsfrist (§573c BGB):</strong> Die Kündigungsfrist beträgt drei Monate
                zum Ende eines Kalendermonats. Das bedeutet, dass eine Kündigung z.B. am 15. März
                eingehen muss, um zum 30. Juni wirksam zu sein.
              </p>
              <p>
                • <strong>Alle Mieter:</strong> Existiert ein gemeinsames Mietverhalten mehrerer
                Personen, müssen alle Mieter die Kündigung unterschreiben.
              </p>
              <p>
                • <strong>Widerrufsrecht:</strong> Nach Absendung können Sie die Kündigung nicht
                einfach zurückziehen. Handeln Sie bedacht.
              </p>
            </div>
          </div>
        </div>

        {/* Warning Box */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8 flex gap-4">
          <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="font-bold text-amber-900 mb-1">Wichtige rechtliche Hinweise</h3>
            <ul className="text-sm text-amber-800 space-y-2">
              <li>
                • <strong>Fristen genau beachten:</strong> Fehler bei der Fristberechnung können zur
                Unwirksamkeit der Kündigung führen.
              </li>
              <li>
                • <strong>Einschreiben erforderlich:</strong> Normale Post genügt nicht – Sie brauchen
                einen Nachweis!
              </li>
              <li>
                • <strong>Alle Bewohner unterschreiben:</strong> Nur mit Unterschriften aller Mieter ist
                die Kündigung wirksam.
              </li>
              <li>
                • <strong>Im Zweifelsfall Anwalt:</strong> Bei Fragen zur Fristberechnung oder speziellen
                Situationen konsultieren Sie einen Fachanwalt.
              </li>
            </ul>
          </div>
        </div>

        {/* Tip Box */}
        <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6 mb-8 flex gap-4">
          <CheckCircle className="text-primary-600 shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="font-bold text-primary-900 mb-1">
              Digitale Kündigungsverwaltung mit ImmoPilot
            </h3>
            <p className="text-sm text-primary-800 mb-3">
              Mit ImmoPilot können Sie Kündigungen systematisch verwalten, Fristen überwachen und
              automatische Erinnerungen erhalten – für Sie als Mieter und als Vermieter.
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
              href="/vorlagen/uebergabeprotokoll"
              className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-primary-300 hover:shadow-sm transition-all group"
            >
              <CheckCircle size={16} className="text-primary-600" />
              <span className="text-sm font-medium text-slate-700 group-hover:text-primary-600">
                Wohnungsübergabeprotokoll
              </span>
            </Link>
            <Link
              href="/vorlagen/aufhebungsvertrag-mietvertrag"
              className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-primary-300 hover:shadow-sm transition-all group"
            >
              <CheckCircle size={16} className="text-primary-600" />
              <span className="text-sm font-medium text-slate-700 group-hover:text-primary-600">
                Aufhebungsvertrag Mietverhältnis
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
