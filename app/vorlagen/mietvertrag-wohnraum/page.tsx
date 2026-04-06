"use client";

import Link from "next/link";
import { Printer, ArrowLeft, Download } from "lucide-react";

export default function MietvertragWohnraumPage() {
  return (
    <main className="pt-20 pb-16 bg-slate-50">
      {/* Toolbar */}
      <div className="bg-white border-b border-slate-200 py-3 print:hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <Link href="/vorlagen" className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600">
            <ArrowLeft size={16} /> Alle Vorlagen
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-colors"
            >
              <Printer size={15} /> Als PDF speichern
            </button>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 print:hidden">
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
              <Download size={20} className="text-primary-600" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-slate-900 mb-1">Mietvertrag für Wohnraum</h1>
              <p className="text-sm text-slate-500 mb-3">Vollständiger Mietvertrag nach aktuellem BGB 2026 — inkl. Betriebskostenvereinbarung, Kautionsklausel und Schönheitsreparaturen. Füllen Sie die Felder aus und drucken Sie das Dokument oder speichern Sie es als PDF.</p>
              <div className="flex flex-wrap gap-2">
                {["8 Seiten", "BGB 2026", "Sofort verwendbar"].map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Template */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 print:border-0 print:rounded-none print:p-0 print:shadow-none space-y-8 text-sm text-slate-800">

          {/* Header */}
          <div className="text-center border-b border-slate-200 pb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Mietvertrag für Wohnraum</h2>
            <p className="text-xs text-slate-400">Stand: 2026 · Nach §§ 535 ff. BGB</p>
          </div>

          {/* §1 Vertragsparteien */}
          <div>
            <h3 className="font-bold text-slate-900 mb-3 text-base border-b border-slate-100 pb-2">§ 1 Vertragsparteien</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="font-semibold text-slate-700">Vermieter</p>
                <div className="space-y-1">
                  {["Name, Vorname / Firma", "Straße, Hausnummer", "PLZ, Ort", "Telefon / E-Mail"].map((f) => (
                    <div key={f}>
                      <span className="text-xs text-slate-400">{f}</span>
                      <div className="border-b border-slate-300 mt-0.5 h-6" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-slate-700">Mieter</p>
                <div className="space-y-1">
                  {["Name, Vorname", "Geburtsdatum", "Bisherige Anschrift", "Telefon / E-Mail"].map((f) => (
                    <div key={f}>
                      <span className="text-xs text-slate-400">{f}</span>
                      <div className="border-b border-slate-300 mt-0.5 h-6" />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 italic">Weitere Mieter: ___________________________</p>
              </div>
            </div>
          </div>

          {/* §2 Mietobjekt */}
          <div>
            <h3 className="font-bold text-slate-900 mb-3 text-base border-b border-slate-100 pb-2">§ 2 Mietobjekt</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Anschrift des Mietobjekts", full: true },
                { label: "Lage (Etage / Wohnungsnummer)" },
                { label: "Wohnfläche (ca.)" },
                { label: "Anzahl Zimmer" },
                { label: "Keller / Stellplatz / Garage" },
                { label: "Weitere Mitmietsache (z. B. Garten)" },
              ].map(({ label, full }) => (
                <div key={label} className={full ? "sm:col-span-2" : ""}>
                  <span className="text-xs text-slate-400">{label}</span>
                  <div className="border-b border-slate-300 mt-0.5 h-6" />
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Die Wohnfläche ist eine Circa-Angabe. Abweichungen bis 10 % führen nicht zur Mietminderung (BGH, Urt. v. 28.09.2011, Az. VIII ZR 249/10).
            </p>
          </div>

          {/* §3 Mietdauer */}
          <div>
            <h3 className="font-bold text-slate-900 mb-3 text-base border-b border-slate-100 pb-2">§ 3 Mietbeginn und Mietdauer</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-slate-400">Mietbeginn</span>
                <div className="border-b border-slate-300 mt-0.5 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400">Mietende (leer lassen = unbefristet)</span>
                <div className="border-b border-slate-300 mt-0.5 h-6" />
              </div>
            </div>
            <div className="mt-3 bg-slate-50 rounded-lg p-3 text-xs text-slate-600">
              <p className="font-semibold mb-1">Kündigung (unbefristetes Mietverhältnis)</p>
              <p>Der Mieter kann das Mietverhältnis mit einer Kündigungsfrist von 3 Monaten kündigen (§ 573c BGB). Für den Vermieter gelten die Fristen des § 573c Abs. 1 BGB (3, 6 oder 9 Monate je nach Mietdauer).</p>
            </div>
          </div>

          {/* §4 Miete */}
          <div>
            <h3 className="font-bold text-slate-900 mb-3 text-base border-b border-slate-100 pb-2">§ 4 Miete und Nebenkosten</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                <tbody>
                  {[
                    ["Nettokaltmiete", "_____, _____ €"],
                    ["Vorauszahlung Betriebskosten (§ 556 BGB)", "_____, _____ €"],
                    ["Vorauszahlung Heizkosten (HeizkostenV)", "_____, _____ €"],
                    ["Gesamtmiete (Warmmiete)", "_____, _____ €"],
                  ].map(([label, val], i) => (
                    <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-3 py-2 text-slate-700">{label}</td>
                      <td className="px-3 py-2 font-semibold text-right text-slate-900">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 space-y-2 text-xs text-slate-500">
              <p><span className="font-semibold">Fälligkeit:</span> Die Miete ist monatlich im Voraus, spätestens am dritten Werktag eines jeden Monats zu zahlen.</p>
              <p><span className="font-semibold">Zahlungsweg:</span> Überweisung auf folgendes Konto: IBAN _________________________ · Kontoinhaber: _______________________</p>
              <p><span className="font-semibold">Betriebskostenabrechnung:</span> Die jährliche Betriebskostenabrechnung erfolgt bis spätestens 12 Monate nach Ende des Abrechnungszeitraums (§ 556 BGB).</p>
            </div>
          </div>

          {/* §5 Kaution */}
          <div>
            <h3 className="font-bold text-slate-900 mb-3 text-base border-b border-slate-100 pb-2">§ 5 Kaution (§ 551 BGB)</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-slate-400">Kautionsbetrag (max. 3 Nettokaltmieten)</span>
                <div className="border-b border-slate-300 mt-0.5 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400">Fälligkeit</span>
                <div className="border-b border-slate-300 mt-0.5 h-6" />
              </div>
            </div>
            <p className="mt-2 text-xs text-slate-500">Der Vermieter hat die Kaution getrennt von seinem Vermögen bei einem Kreditinstitut zu dem für Spareinlagen mit dreimonatiger Kündigungsfrist üblichen Zinssatz anzulegen (§ 551 Abs. 3 BGB). Der Mieter erhält darüber eine schriftliche Quittung.</p>
          </div>

          {/* §6 Nutzung */}
          <div>
            <h3 className="font-bold text-slate-900 mb-3 text-base border-b border-slate-100 pb-2">§ 6 Nutzung der Mietsache</h3>
            <div className="space-y-2 text-xs text-slate-600">
              <p>Die Mietsache darf nur zu Wohnzwecken genutzt werden. Eine gewerbliche Nutzung — auch teilweise — ist ohne schriftliche Zustimmung des Vermieters untersagt.</p>
              <p><span className="font-semibold">Haustierhaltung:</span> ☐ Erlaubt &nbsp;&nbsp; ☐ Nicht erlaubt &nbsp;&nbsp; ☐ Nur Kleintiere erlaubt</p>
              <p><span className="font-semibold">Untervermietung</span> ist ohne schriftliche Zustimmung des Vermieters untersagt (§ 540 BGB). Bei berechtigtem Interesse des Mieters darf der Vermieter die Zustimmung nicht versagen.</p>
            </div>
          </div>

          {/* §7 Schönheitsreparaturen */}
          <div>
            <h3 className="font-bold text-slate-900 mb-3 text-base border-b border-slate-100 pb-2">§ 7 Schönheitsreparaturen</h3>
            <div className="bg-amber-50 border border-amber-100 rounded-lg p-3 text-xs text-slate-600 mb-2">
              <span className="font-semibold">Hinweis:</span> Starre Fristenklauseln (z. B. „alle 3/5/7 Jahre") sind nach BGH-Rechtsprechung unwirksam. Verwenden Sie nur flexible Formulierungen.
            </div>
            <p className="text-xs text-slate-600">Die Schönheitsreparaturen (Tapezieren, Streichen von Wänden, Decken, Heizkörpern, Türen und Fenstern von innen) sind vom Mieter nach Bedarf und Abnutzung zu tragen. Maßgeblich ist der tatsächliche Renovierungsbedarf, nicht starre Fristen.</p>
            <p className="mt-2 text-xs text-slate-600">Bei Auszug: Der Mieter hat die Mietsache in sauberem, besenreinem Zustand und mit allen ausgehändigten Schlüsseln zurückzugeben.</p>
          </div>

          {/* §8 Instandhaltung */}
          <div>
            <h3 className="font-bold text-slate-900 mb-3 text-base border-b border-slate-100 pb-2">§ 8 Instandhaltung und Kleinreparaturen</h3>
            <p className="text-xs text-slate-600 mb-2">Der Mieter trägt die Kosten für Kleinreparaturen bis zu einem Betrag von <strong>100 Euro</strong> im Einzelfall, jedoch nicht mehr als <strong>8 % der Jahresmiete</strong> pro Jahr (§ 538 BGB).</p>
            <p className="text-xs text-slate-600">Mängel und Schäden sind dem Vermieter unverzüglich anzuzeigen. Der Mieter haftet für Schäden, die durch unterlassene Anzeige entstehen.</p>
          </div>

          {/* §9 Schlussbestimmungen */}
          <div>
            <h3 className="font-bold text-slate-900 mb-3 text-base border-b border-slate-100 pb-2">§ 9 Schlussbestimmungen</h3>
            <div className="space-y-2 text-xs text-slate-600">
              <p>Änderungen und Ergänzungen dieses Vertrages bedürfen der Schriftform. Mündliche Nebenabreden bestehen nicht.</p>
              <p>Sollten einzelne Bestimmungen dieses Vertrages unwirksam sein, berührt dies die Wirksamkeit der übrigen Bestimmungen nicht.</p>
              <p>Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist der Ort der Mietsache.</p>
            </div>
          </div>

          {/* §10 Sonstiges */}
          <div>
            <h3 className="font-bold text-slate-900 mb-3 text-base border-b border-slate-100 pb-2">§ 10 Sonstige Vereinbarungen</h3>
            <div className="border border-slate-200 rounded-lg p-3 min-h-[80px] text-xs text-slate-400">
              Hier können individuelle Vereinbarungen eingetragen werden (z. B. Gartennutzung, Parkplatz, Haustierregelung, WLAN-Mitnutzung etc.)
            </div>
          </div>

          {/* Unterschriften */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4 text-base border-b border-slate-100 pb-2">Unterschriften</h3>
            <p className="text-xs text-slate-500 mb-6">Dieser Vertrag wird in zwei gleichlautenden Ausfertigungen erstellt. Jede Partei erhält ein Original.</p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <div className="border-b border-slate-300 mb-1 h-12" />
                <p className="text-xs text-slate-500">Ort, Datum</p>
                <div className="border-b border-slate-300 mt-4 mb-1 h-12" />
                <p className="text-xs text-slate-500">Vermieter — Unterschrift und Name in Druckbuchstaben</p>
              </div>
              <div>
                <div className="border-b border-slate-300 mb-1 h-12" />
                <p className="text-xs text-slate-500">Ort, Datum</p>
                <div className="border-b border-slate-300 mt-4 mb-1 h-12" />
                <p className="text-xs text-slate-500">Mieter — Unterschrift und Name in Druckbuchstaben</p>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="border-t border-slate-100 pt-4 text-xs text-slate-400">
            <p>Diese Vorlage basiert auf dem aktuellen deutschen Mietrecht (BGB 2026). Sie ersetzt keine individuelle Rechtsberatung. Erstellt von ImmoPilot — immopilot.de</p>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 print:hidden">
        <div className="bg-primary-600 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg mb-1">Mietvertrag automatisch ausfüllen</h3>
            <p className="text-sm text-primary-200">Mit ImmoPilot befüllt die KI alle Felder automatisch mit Ihren Mieterdaten.</p>
          </div>
          <Link
            href="/#contact"
            className="shrink-0 bg-white text-primary-600 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-primary-50 transition-colors"
          >
            Demo anfragen
          </Link>
        </div>
      </div>
    </main>
  );
}
