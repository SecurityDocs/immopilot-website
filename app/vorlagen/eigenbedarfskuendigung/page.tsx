"use client";

import Link from "next/link";
import { Printer, ArrowLeft } from "lucide-react";

export default function EigenbedarfskuendigungPage() {
  return (
    <main className="pt-20 pb-16 bg-slate-50">
      <div className="bg-white border-b border-slate-200 py-3 print:hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <Link href="/vorlagen" className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600">
            <ArrowLeft size={16} /> Alle Vorlagen
          </Link>
          <button onClick={() => window.print()} className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700">
            <Printer size={15} /> Als PDF speichern
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 print:hidden">
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <h1 className="text-xl font-extrabold text-slate-900 mb-1">Eigenbedarfskündigung §573 BGB</h1>
          <p className="text-sm text-slate-500 mb-3">Rechtssicheres Kündigungsschreiben wegen Eigenbedarf — mit allen Pflichtangaben zur Begründung, Sperrfristen und Sozialklausel-Hinweis.</p>
          <div className="flex flex-wrap gap-2">
            {["2 Seiten", "§573 BGB", "Geprüft"].map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 print:border-0 print:p-0 space-y-6 text-sm text-slate-800">

          <div className="space-y-1">
            {["Vermieter Name / Firma", "Straße, Hausnummer", "PLZ, Ort", "E-Mail / Telefon"].map((f) => (
              <div key={f} className="border-b border-slate-300 h-6" />
            ))}
          </div>

          <div className="space-y-1 pt-2">
            {["Mieter Name, Vorname", "Straße der Mietsache, Wohnungsnr.", "PLZ, Ort"].map((f) => (
              <div key={f} className="border-b border-slate-300 h-6" />
            ))}
          </div>

          <div>
            <div className="text-xs text-slate-400">Datum (Sendedatum entscheidend für Fristen)</div>
            <div className="border-b border-slate-300 h-6 max-w-[200px]" />
          </div>

          <div className="pt-2">
            <p className="font-bold text-slate-900">Betreff: Kündigung des Mietverhältnisses wegen Eigenbedarfs gemäß § 573 Abs. 2 Nr. 1 BGB</p>
            <p className="text-xs text-slate-500 mt-0.5">Mietobjekt: <span className="border-b border-slate-300 inline-block w-56 ml-1" /> · Mietbeginn: <span className="border-b border-slate-300 inline-block w-24 ml-1" /></p>
          </div>

          <div>
            <p>Sehr geehrte(r) <span className="border-b border-slate-300 inline-block w-48" />,</p>
          </div>

          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              hiermit kündige ich das zwischen uns bestehende Mietverhältnis über die oben bezeichnete
              Wohnung ordentlich gemäß § 573 Abs. 2 Nr. 1 BGB wegen Eigenbedarfs.
            </p>

            <div>
              <p className="font-semibold text-slate-900 mb-1">Kündigungstermin:</p>
              <p>
                Das Mietverhältnis endet zum <span className="border-b border-slate-300 inline-block w-32 mx-1" />.
                Die Kündigungsfrist beträgt gemäß § 573c BGB{" "}
                <span className="border-b border-slate-300 inline-block w-24 mx-1" /> Monate.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p className="font-semibold text-slate-900 mb-3">Begründung des Eigenbedarfs (§ 573a BGB — Pflichtangaben):</p>
              <p className="text-xs text-slate-600 mb-3">Die Kündigung wegen Eigenbedarfs setzt eine konkrete, nachvollziehbare Begründung voraus. Allgemeine oder pauschal gehaltene Begründungen sind unzureichend (BGH-Rechtsprechung).</p>
              <div className="space-y-3">
                {[
                  { label: "Person(en), für die der Eigenbedarf geltend gemacht wird:", hint: "Name, Verwandtschaftsverhältnis zum Vermieter" },
                  { label: "Konkrete Begründung des Eigenbedarfs:", hint: "z. B. Eigenbedarf für Eigennutzung als Hauptwohnung, berufliche Gründe, Pflegebedarf, Zusammenziehen mit Familienmitglied" },
                  { label: "Aktuelle Wohnsituation der begünstigten Person:", hint: "Warum ist die aktuelle Situation nicht mehr zumutbar?" },
                ].map(({ label, hint }) => (
                  <div key={label}>
                    <p className="text-xs font-semibold text-slate-700 mb-1">{label}</p>
                    <p className="text-xs text-slate-400 italic mb-1">{hint}</p>
                    <div className="border border-slate-200 rounded-lg p-2 min-h-[60px] bg-white" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-2">Sozialklausel (§ 574 BGB):</p>
              <p className="text-xs text-slate-600">
                Ich weise darauf hin, dass Sie gemäß § 574 BGB der Kündigung widersprechen und die Fortsetzung des Mietverhältnisses verlangen können, wenn die Beendigung für Sie, Ihre Familie oder Angehörige des Haushalts eine Härte bedeuten würde, die auch unter Würdigung meiner berechtigten Interessen nicht zu rechtfertigen ist.
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Den Widerspruch haben Sie spätestens zwei Monate vor Beendigung des Mietverhältnisses schriftlich zu erklären (§ 574b Abs. 2 Satz 1 BGB).
              </p>
            </div>

            <p>
              Ich bitte Sie, mir den Empfang dieses Schreibens schriftlich zu bestätigen.
              Den genauen Übergabetermin möchte ich gern gemeinsam mit Ihnen vereinbaren.
              Bitte nehmen Sie bis spätestens <span className="border-b border-slate-300 inline-block w-28 mx-1" /> Kontakt mit mir auf.
            </p>

            <p>Mit freundlichen Grüßen,</p>
          </div>

          <div className="pt-2">
            <div className="border-b border-slate-300 h-12 mb-1 max-w-xs" />
            <p className="text-xs text-slate-500">Vermieter — Unterschrift und Name in Druckbuchstaben</p>
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-xs text-slate-700">
            <p className="font-semibold mb-1">Wichtige Hinweise vor dem Versand:</p>
            <ul className="space-y-1 list-disc pl-4">
              <li>Zustellung per Einschreiben mit Rückschein oder Boten mit Zeugen empfohlen</li>
              <li>Kündigung muss bis zum dritten Werktag eines Monats zugegangen sein, damit die Frist ab diesem Monat läuft</li>
              <li>Sperrfristen bei Umwandlung in Eigentumswohnung beachten (§ 577a BGB): 3–10 Jahre je nach Bundesland</li>
              <li>Bei Mietern über 70 Jahre oder bei Behinderung: erhöhte Hürde bei Sozialklausel</li>
            </ul>
          </div>

          <div className="border-t border-slate-100 pt-4 text-xs text-slate-400">
            <p>Vorlage nach §§ 573, 574 BGB · Stand: 2026 · ImmoPilot — immopilot.de · Kein Ersatz für individuelle Rechtsberatung.</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 print:hidden">
        <div className="bg-primary-600 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg mb-1">Rechtssichere Kündigung mit ImmoPilot</h3>
            <p className="text-sm text-primary-200">ImmoPilot prüft Fristen und Sperrfristen automatisch und erstellt das Schreiben in Sekunden.</p>
          </div>
          <Link href="/#contact" className="shrink-0 bg-white text-primary-600 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-primary-50 transition-colors">
            Demo anfragen
          </Link>
        </div>
      </div>
    </main>
  );
}
