import Link from "next/link";
import { Download, ArrowLeft, Printer, Copy, AlertTriangle, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wohnungsübergabeprotokoll Vorlage 2026 — kostenlos — ImmoPilot",
  description: "Kostenloses Wohnungsübergabeprotokoll für Einzug und Auszug. Mit Zählerständen, Raumzustand, Schlüsseln und Unterschriftenzeile. Sofort verwendbar.",
  keywords: "Wohnungsübergabeprotokoll Vorlage kostenlos, Übergabeprotokoll Vermieter, Wohnungsabnahme Protokoll",
};

const raeume = [
  "Eingangsbereich / Flur",
  "Wohnzimmer",
  "Küche",
  "Schlafzimmer",
  "Bad / WC",
  "Gäste-WC",
  "Abstellraum / Abstellkammer",
  "Balkon / Terrasse",
  "Keller / Kellerabteil",
  "Garage / Stellplatz",
];

export default function UebergabeprotokollPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/vorlagen" className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 mb-8">
          <ArrowLeft size={14} /> Alle Vorlagen
        </Link>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold bg-accent-500/10 text-accent-700 px-2 py-1 rounded-full inline-block mb-3">Übergabe & Protokolle</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Wohnungsübergabeprotokoll
            </h1>
            <p className="text-slate-500 mt-2">Gültig für Einzug & Auszug · 4 Seiten · Stand 2026</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 border border-slate-300 text-slate-600 hover:border-primary-300 hover:text-primary-600 px-4 py-2 rounded-xl text-sm transition-colors"
            >
              <Printer size={15} /> Drucken
            </button>
          </div>
        </div>

        {/* Hinweis */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex gap-3">
          <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-900 text-sm mb-1">So verwenden Sie diese Vorlage</p>
            <p className="text-xs text-amber-800">Drucken Sie das Protokoll aus und füllen Sie es beim Übergabetermin gemeinsam mit dem Mieter aus. Beide Parteien unterschreiben jede Seite. Erstellen Sie zwei Exemplare.</p>
          </div>
        </div>

        {/* Checkliste */}
        <div className="bg-primary-50 border border-primary-200 rounded-xl p-5 mb-8">
          <h3 className="font-bold text-primary-900 mb-3 text-sm">Checkliste: Was Sie zur Übergabe mitbringen</h3>
          <div className="grid sm:grid-cols-2 gap-2 text-sm">
            {[
              "Ausgefülltes Protokoll (2-fach ausgedruckt)",
              "Stift für beide Parteien",
              "Kamera / Smartphone für Fotos",
              "Zählerstandsliste (Strom, Gas, Wasser)",
              "Schlüsselliste",
              "Mietvertrag zur Referenz",
              "Ggf. Vorgängerprotokoll (bei Auszug)",
              "Unterschriftenstempel (optional)",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-primary-800">
                <CheckCircle size={13} className="text-primary-600 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* VORLAGE */}
        <div className="border-2 border-slate-200 rounded-2xl overflow-hidden bg-white print:border-0" id="vorlage">
          <div className="bg-slate-800 text-white px-6 py-4 flex items-center justify-between">
            <h2 className="font-bold text-lg">Wohnungsübergabeprotokoll</h2>
            <span className="text-slate-400 text-sm">ImmoPilot Vorlage 2026</span>
          </div>

          <div className="p-6 sm:p-8 space-y-8 text-sm text-slate-800">
            {/* Grunddaten */}
            <div>
              <h3 className="font-bold text-base border-b border-slate-200 pb-2 mb-4">1. Grunddaten</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {[
                  ["Art der Übergabe", "☐ Einzug   ☐ Auszug"],
                  ["Datum der Übergabe", "________________"],
                  ["Uhrzeit", "________________"],
                  ["Objekt / Anschrift", "________________"],
                  ["Wohnung / Lage", "________________"],
                  ["Wohnfläche ca.", "________________ m²"],
                  ["Vermieter / Eigentümer", "________________"],
                  ["Mieter", "________________"],
                  ["Neuer Mieter (bei Einzug)", "________________"],
                  ["Anwesende Personen", "________________"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-xs text-slate-500 mb-1">{label}</p>
                    <p className="border-b border-slate-300 pb-1 min-h-[24px]">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Zählerstände */}
            <div>
              <h3 className="font-bold text-base border-b border-slate-200 pb-2 mb-4">2. Zählerstände</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="border border-slate-200 px-3 py-2 text-left font-semibold">Zähler / Medium</th>
                      <th className="border border-slate-200 px-3 py-2 text-left font-semibold">Zählernummer</th>
                      <th className="border border-slate-200 px-3 py-2 text-left font-semibold">Ablesung Übergabe</th>
                      <th className="border border-slate-200 px-3 py-2 text-left font-semibold">Einheit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      "Strom", "Gas", "Kaltwasser gesamt", "Warmwasser", "Heizung (HKV)"
                    ].map((medium) => (
                      <tr key={medium}>
                        <td className="border border-slate-200 px-3 py-2">{medium}</td>
                        <td className="border border-slate-200 px-3 py-2"></td>
                        <td className="border border-slate-200 px-3 py-2"></td>
                        <td className="border border-slate-200 px-3 py-2 text-slate-400 text-xs">kWh / m³</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Schlüssel */}
            <div>
              <h3 className="font-bold text-base border-b border-slate-200 pb-2 mb-4">3. Schlüsselübergabe</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="border border-slate-200 px-3 py-2 text-left font-semibold">Schlüsselart</th>
                      <th className="border border-slate-200 px-3 py-2 text-center font-semibold">Anzahl übergeben</th>
                      <th className="border border-slate-200 px-3 py-2 text-center font-semibold">Anzahl zurück</th>
                      <th className="border border-slate-200 px-3 py-2 text-left font-semibold">Bemerkung</th>
                    </tr>
                  </thead>
                  <tbody>
                    {["Wohnungsschlüssel", "Briefkastenschlüssel", "Haustürschlüssel", "Keller-/Garagenschlüssel", "Sonstige"].map((art) => (
                      <tr key={art}>
                        <td className="border border-slate-200 px-3 py-2">{art}</td>
                        <td className="border border-slate-200 px-3 py-2"></td>
                        <td className="border border-slate-200 px-3 py-2"></td>
                        <td className="border border-slate-200 px-3 py-2"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Raumzustand */}
            <div>
              <h3 className="font-bold text-base border-b border-slate-200 pb-2 mb-4">4. Zustand der Räume</h3>
              <p className="text-xs text-slate-500 mb-3">Bewertung: E = Einwandfrei · G = Gebraucht, normal · M = Mängel (beschreiben)</p>
              <div className="space-y-3">
                {raeume.map((raum) => (
                  <div key={raum} className="border border-slate-200 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold">{raum}</p>
                      <div className="flex gap-4 text-xs">
                        <label className="flex items-center gap-1 cursor-pointer">
                          <input type="radio" name={`${raum}-zustand`} /> E
                        </label>
                        <label className="flex items-center gap-1 cursor-pointer">
                          <input type="radio" name={`${raum}-zustand`} /> G
                        </label>
                        <label className="flex items-center gap-1 cursor-pointer">
                          <input type="radio" name={`${raum}-zustand`} /> M
                        </label>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs text-slate-500">
                      <div>Boden: <span className="border-b border-slate-300 inline-block w-20"></span></div>
                      <div>Wände: <span className="border-b border-slate-300 inline-block w-20"></span></div>
                      <div>Decke: <span className="border-b border-slate-300 inline-block w-20"></span></div>
                    </div>
                    <div className="mt-2 text-xs text-slate-500">
                      Mängel/Bemerkungen: <span className="border-b border-slate-300 inline-block w-full mt-1"></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mängel */}
            <div>
              <h3 className="font-bold text-base border-b border-slate-200 pb-2 mb-4">5. Mängelliste (detailliert)</h3>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">Raum</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">Beschreibung des Mangels</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">Verantwortung</th>
                    <th className="border border-slate-200 px-3 py-2 text-left font-semibold">Frist</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <tr key={i}>
                      <td className="border border-slate-200 px-3 py-3"></td>
                      <td className="border border-slate-200 px-3 py-3"></td>
                      <td className="border border-slate-200 px-3 py-3 text-xs text-slate-400">☐ VM ☐ Mieter</td>
                      <td className="border border-slate-200 px-3 py-3"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Vereinbarungen */}
            <div>
              <h3 className="font-bold text-base border-b border-slate-200 pb-2 mb-4">6. Besondere Vereinbarungen</h3>
              <div className="border border-slate-200 rounded-lg p-3 min-h-[80px]">
                <p className="text-slate-400 text-xs">z.B. Nachrüstpflichten, Fristen für Restarbeiten, Kautionsrückgabe etc.</p>
              </div>
            </div>

            {/* Unterschriften */}
            <div>
              <h3 className="font-bold text-base border-b border-slate-200 pb-2 mb-6">7. Unterschriften</h3>
              <p className="text-xs text-slate-500 mb-6">Mit den Unterschriften bestätigen beide Parteien die Richtigkeit der Angaben in diesem Protokoll. Eventuelle Vorbehalte wurden unter Punkt 6 vermerkt.</p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="border-b-2 border-slate-800 mb-2 h-16"></div>
                  <p className="text-xs font-semibold text-slate-700">Vermieter / Bevollmächtigter</p>
                  <p className="text-xs text-slate-500">Ort, Datum, Unterschrift</p>
                </div>
                <div>
                  <div className="border-b-2 border-slate-800 mb-2 h-16"></div>
                  <p className="text-xs font-semibold text-slate-700">Mieter</p>
                  <p className="text-xs text-slate-500">Ort, Datum, Unterschrift</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-6 text-center">
                Dieses Protokoll wurde in 2 gleichlautenden Exemplaren erstellt — je eines für Vermieter und Mieter.
              </p>
            </div>
          </div>
        </div>

        {/* Download actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => window.print()}
            className="flex-1 flex items-center justify-center gap-2 bg-primary-600 text-white font-bold py-3.5 rounded-xl hover:bg-primary-700 transition-colors"
          >
            <Printer size={18} /> Als PDF drucken / speichern
          </button>
          <Link href="/vorlagen" className="flex-1 flex items-center justify-center gap-2 border border-slate-300 text-slate-700 font-semibold py-3.5 rounded-xl hover:border-primary-300 hover:text-primary-600 transition-colors">
            Weitere Vorlagen ansehen
          </Link>
        </div>

        {/* Tipp Box */}
        <div className="mt-8 bg-primary-600 rounded-2xl p-6 text-white text-center">
          <h3 className="font-extrabold text-lg mb-2">Übergabeprotokoll automatisch erstellen</h3>
          <p className="text-primary-200 text-sm mb-5 max-w-lg mx-auto">
            Mit ImmoPilot erstellen Sie Übergabeprotokolle digital — mit Foto-Upload, digitaler Unterschrift und automatischer Archivierung.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-white text-primary-600 font-bold px-5 py-2.5 rounded-xl hover:bg-primary-50 transition-colors text-sm">
            Kostenlose Demo anfragen
          </Link>
        </div>

        {/* Related */}
        <div className="mt-10 pt-8 border-t border-slate-200">
          <p className="font-bold text-slate-900 mb-4 text-sm">Passende Vorlagen:</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/vorlagen/kaution-quittung", label: "Kautionsquittung" },
              { href: "/vorlagen/mietvertrag-wohnraum", label: "Mietvertrag" },
              { href: "/vorlagen/hausordnung", label: "Hausordnung" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="text-sm text-primary-600 border border-primary-200 px-3 py-1.5 rounded-lg hover:bg-primary-50 transition-colors flex items-center gap-1">
                <ArrowLeft size={12} className="rotate-180" /> {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
