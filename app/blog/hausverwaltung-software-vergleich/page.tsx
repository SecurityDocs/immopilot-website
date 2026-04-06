

import Link from "next/link";
import { Calendar, Clock, ArrowLeft, CheckCircle, X } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hausverwaltung Software Vergleich 2026 — welche lohnt sich?",
  description:
    "ImmoPilot vs. klassische Hausverwaltung vs. Excel — Kosten, Funktionen und Aufwand im objektiven Vergleich für Immobilieneigentümer.",
};

export default function Page() {
  return (
    <main>
      
      <div className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 mb-8">
            <ArrowLeft size={14} /> Zurück zum Blog
          </Link>

          <div className="mb-8">
            <span className="text-xs font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">Software-Vergleich</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4 leading-tight">
              Hausverwaltung Software im Vergleich 2026 — welche lohnt sich?
            </h1>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1"><Calendar size={14} /> 30. Januar 2026</span>
              <span className="flex items-center gap-1"><Clock size={14} /> 14 min Lesezeit</span>
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">

            <h2 className="text-2xl font-extrabold text-slate-900 mt-8 mb-4">Überblick: Welche Optionen gibt es?</h2>
            <p>
              Wer sein Mehrfamilienhaus verwalten will, steht vor vier grundsätzlichen Optionen: klassische Hausverwaltung, Desktop-Software (legacy), cloud-basierte Hausverwaltungssoftware oder Excel/manuell. Jede Option hat unterschiedliche Kosten, Vorteile und Nachteile — je nach Größe Ihres Portfolios und Ihrem zeitlichen Einsatz.
            </p>

            {/* Vergleichstabelle */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 my-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="text-left p-4 font-bold text-slate-900">Kriterium</th>
                    <th className="text-center p-4 font-bold text-slate-500">Excel / manuell</th>
                    <th className="text-center p-4 font-bold text-slate-500">Hausverwaltung</th>
                    <th className="text-center p-4 font-bold text-primary-700 bg-primary-50">ImmoPilot</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { k: "Kosten pro WE/Monat", excel: "0 €", hv: "25–40 €", immo: "5–15 €" },
                    { k: "Zeitaufwand pro Monat", excel: "10–20 h", hv: "< 1 h", immo: "1–2 h" },
                    { k: "Nebenkostenabrechnung", excel: "Manuell / fehleranfällig", hv: "Inklusive", immo: "Automatisch, rechtssicher" },
                    { k: "Mietermitteilungen", excel: "Per Hand", hv: "Übernimmt HV", immo: "Digital, automatisiert" },
                    { k: "Mahnwesen", excel: "Manuell", hv: "Übernimmt HV", immo: "Automatisch" },
                    { k: "KI-gestützte Analyse", excel: "Nein", hv: "Nein", immo: "Ja" },
                    { k: "Mieter-App", excel: "Nein", hv: "Oft nicht", immo: "Ja" },
                    { k: "Transparenz & Kontrolle", excel: "Voll", hv: "Gering", immo: "Voll" },
                    { k: "Skalierbarkeit", excel: "Schlecht (ab 5 WE)", hv: "Gut", immo: "Sehr gut" },
                  ].map((row) => (
                    <tr key={row.k} className="hover:bg-slate-50">
                      <td className="p-4 font-medium text-slate-700">{row.k}</td>
                      <td className="p-4 text-center text-slate-500">{row.excel}</td>
                      <td className="p-4 text-center text-slate-500">{row.hv}</td>
                      <td className="p-4 text-center font-semibold text-primary-700 bg-primary-50">{row.immo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Option 1: Excel und manuelle Verwaltung</h2>
            <p>
              Für Eigentümer mit 1–2 Wohnungen ist Excel durchaus machbar. Bei 3 und mehr Wohneinheiten wird es schnell unübersichtlich — besonders bei Mieterwechseln, gemischten Vorauszahlungen und der Jahresabrechnung.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <p className="font-bold text-green-900 text-sm mb-2">Vorteile</p>
                <ul className="space-y-1 text-xs text-green-800">
                  <li>✓ Kostenlos</li>
                  <li>✓ Flexibel</li>
                  <li>✓ Vollständige Kontrolle</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                <p className="font-bold text-red-900 text-sm mb-2">Nachteile</p>
                <ul className="space-y-1 text-xs text-red-800">
                  <li>✕ Extrem fehleranfällig</li>
                  <li>✕ Kein automatisches Mahnwesen</li>
                  <li>✕ Keine rechtliche Prüfung</li>
                  <li>✕ Skaliert schlecht</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Option 2: Klassische Hausverwaltung</h2>
            <p>
              Das traditionelle Modell: Sie übergeben die komplette Verwaltung an einen externen Dienstleister und zahlen 25–40 € pro Wohneinheit und Monat. Dazu kommen oft versteckte Zusatzkosten für Mieterwechsel (1–2 Monatsmieten), Handwerkerbeauftragungen, Sonderversammlungen und Jahresabrechnungen.
            </p>
            <p>
              Das Problem: Sie verlieren die Kontrolle. Abrechnungen sind oft intransparent, Handwerkerrechnungen werden ohne Preisvergleich beauftragt, und Probleme in der Mieterbetreuung erfahren Sie manchmal Monate zu spät.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
              <p className="font-bold text-amber-900 mb-1">Kostenbeispiel: 20 Wohneinheiten</p>
              <p className="text-amber-800">20 WE × 35 €/Monat = <strong>8.400 € pro Jahr</strong> — nur für die Grundverwaltung. Ohne Sonderleistungen.</p>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Option 3: Cloud-Software (ImmoPilot)</h2>
            <p>
              Moderne Hausverwaltungssoftware kombiniert das Beste aus beiden Welten: Sie behalten die volle Kontrolle, sparen aber trotzdem Zeit durch Automatisierung. Alles läuft in der Cloud — keine Installation, keine Backups, überall abrufbar.
            </p>
            <div className="space-y-3">
              {[
                { title: "Automatische Nebenkostenabrechnung", desc: "Einfach Belege erfassen, Software verteilt auf Mieter und erstellt rechtssicheres PDF." },
                { title: "KI-gestützter Zahlungsabgleich", desc: "Mietzahlungen werden automatisch erkannt und zugeordnet — ohne manuelles Abgleichen." },
                { title: "Mahnwesen auf Knopfdruck", desc: "Zahlungsverzug wird automatisch erkannt, Mahnung in einer Klick versendet." },
                { title: "Mieter-Portal & Tablet", desc: "Mieter melden Probleme digital — als Sprachmemo über Tablet im Treppenhaus oder per Smartphone." },
                { title: "Mietpreisanalyse", desc: "KI analysiert den Mietspiegel und zeigt Ihnen, wo Erhöhungspotenzial besteht." },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-3">
                  <CheckCircle size={18} className="text-primary-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{title}</p>
                    <p className="text-xs text-slate-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 text-sm mt-4">
              <p className="font-bold text-primary-900 mb-1">Kostenbeispiel: 20 Wohneinheiten mit ImmoPilot</p>
              <p className="text-teal-800">Professional-Plan: 100 € + 20 WE × 5 € = <strong>200 € pro Monat</strong> = 2.400 € pro Jahr.</p>
              <p className="text-primary-700 font-semibold mt-1">Ersparnis gegenüber Hausverwaltung: über 6.000 € im Jahr.</p>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Unser Urteil: Für wen eignet sich was?</h2>
            <div className="space-y-3">
              {[
                { wer: "1–3 Wohneinheiten, wenig Zeit", emp: "Hausverwaltung oder Excel", grund: "Aufwand und Einsparung in einem Verhältnis" },
                { wer: "4–100 Wohneinheiten, Kontrollbedarf", emp: "ImmoPilot", grund: "Maximale Ersparnis, volle Transparenz" },
                { wer: "100+ Wohneinheiten", emp: "ImmoPilot Enterprise oder Kombination", grund: "Individuelle Anpassung und Skalierung" },
              ].map(({ wer, emp, grund }) => (
                <div key={wer} className="border border-slate-200 rounded-xl p-4">
                  <p className="text-xs text-slate-500 mb-1">{wer}</p>
                  <p className="font-bold text-slate-900">{emp}</p>
                  <p className="text-xs text-slate-600 mt-1">{grund}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-primary-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-extrabold mb-3">Selbst überzeugen — in 14 Tagen kostenlos</h3>
            <p className="text-primary-100 mb-6 max-w-lg mx-auto">
              Testen Sie ImmoPilot 14 Tage unverbindlich — keine Kreditkarte, kein Abo.
            </p>
            <Link href="/#demo" className="inline-block bg-white text-primary-600 font-bold px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors">
              Kostenlose Demo anfragen
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-200">
            <p className="font-bold text-slate-900 mb-4">Weitere Ratgeber:</p>
            <div className="space-y-2">
              <Link href="/blog/immobilien-selbst-verwalten-checkliste" className="block text-primary-600 hover:underline text-sm">→ Immobilien selbst verwalten — die komplette Checkliste</Link>
              <Link href="/blog/hausverwaltung-gekuendigt-was-tun" className="block text-primary-600 hover:underline text-sm">→ Hausverwaltung hat gekündigt — was tun?</Link>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  );
}
