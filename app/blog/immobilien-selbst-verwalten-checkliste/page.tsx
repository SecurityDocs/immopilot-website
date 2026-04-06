

import Link from "next/link";
import { Calendar, Clock, ArrowLeft, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immobilien selbst verwalten 2026 — die komplette Checkliste",
  description:
    "Was brauche ich, um mein Mehrfamilienhaus selbst zu verwalten? Von Mieterbuchhaltung bis Jahresabrechnung — alles auf einen Blick.",
};

const checkliste = [
  {
    bereich: "Verträge & Dokumente",
    items: [
      "Alle Mietverträge gesammelt und digital gespeichert",
      "Betriebskostenverordnung (BetrKV) kennen",
      "Kautionskonten korrekt angelegt (getrennt von eigenem Vermögen)",
      "Hausordnung schriftlich und zugestellt",
      "Versicherungen geprüft: Gebäude, Haftpflicht, Glasbruch, Rechtsschutz",
    ],
  },
  {
    bereich: "Finanzen & Buchhaltung",
    items: [
      "Eigenes Konto für Mieteinnahmen einrichten",
      "Vorauszahlungen für Nebenkosten festgelegt",
      "Mietkonten je Wohnung führen",
      "Belege für alle Ausgaben sammeln (Aufbewahrung: 10 Jahre)",
      "Jahresabrechnung terminieren (Frist: 12 Monate nach Abrechnungsende)",
      "Steuererklärung: Einnahmen aus Vermietung (Anlage V)",
    ],
  },
  {
    bereich: "Mieterverwaltung",
    items: [
      "Mieterkartei mit Kontaktdaten (inkl. Notfallkontakt)",
      "Mieterwechsel: Übergabeprotokoll erstellen",
      "Kaution dokumentieren und verzinst anlegen",
      "Schriftliche Kommunikation mit Mietern archivieren",
      "Mieterhöhungspotenziale im Blick behalten",
    ],
  },
  {
    bereich: "Instandhaltung & Handwerker",
    items: [
      "Regelmäßige Begehung: mindestens 1x jährlich",
      "Wartungsverträge: Heizung, Aufzug, Rauchwarnmelder",
      "Handwerkerliste mit Stammbetrieben",
      "Reparaturmeldungen dokumentieren und nachverfolgen",
      "Instandhaltungsrücklage planen (Faustregel: 1% des Gebäudewerts p.a.)",
    ],
  },
  {
    bereich: "Rechtliches",
    items: [
      "Aktuelle Mietspiegel der Gemeinde kennen",
      "Mieterhöhungsfristen im Blick behalten",
      "Mahnwesen: Zahlungserinnerung → Abmahnung → ggf. Kündigung",
      "Rauchmelderprüfung nach Landesrecht",
      "Legionellenprüfung bei zentraler Warmwasserversorgung",
      "Heizung: Prüffristen für Heizkesselwartung einhalten",
    ],
  },
];

export default function Page() {
  return (
    <main>
      
      <div className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 mb-8">
            <ArrowLeft size={14} /> Zurück zum Blog
          </Link>

          <div className="mb-8">
            <span className="text-xs font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">Checklisten</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4 leading-tight">
              Immobilien selbst verwalten — die komplette Checkliste 2026
            </h1>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1"><Calendar size={14} /> 14. Februar 2026</span>
              <span className="flex items-center gap-1"><Clock size={14} /> 12 min Lesezeit</span>
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-extrabold text-slate-900 mt-8 mb-4">Lohnt sich die Selbstverwaltung?</h2>
            <p>
              Kurze Antwort: ja — wenn Sie die richtigen Werkzeuge haben. Klassische Hausverwaltungen kosten 25–40 € pro Wohneinheit und Monat. Bei einem 10-Wohnungs-Haus sind das bis zu 4.800 € im Jahr. Dafür bekommen Sie oft wenig: Mieterkorrespondenz, Jahresabrechnung, gelegentliche Handwerkerbeauftragung.
            </p>
            <p>
              Das können Sie selbst — mit einer modernen Software in 2–3 Stunden pro Monat. Die Ersparnis: mehrere tausend Euro jährlich, und Sie behalten die volle Kontrolle.
            </p>
            <p>
              Was Sie brauchen: Grundkenntnisse im Mietrecht, einen guten Handwerker, und eine Software, die Ihnen die Buchhaltung und Abrechnungen abnimmt.
            </p>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Checkliste: Alles was Sie brauchen</h2>
            {checkliste.map(({ bereich, items }) => (
              <div key={bereich} className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{bereich}</h3>
                <div className="space-y-2">
                  {items.map((item) => (
                    <div key={item} className="flex items-start gap-3 bg-slate-50 rounded-lg p-3 border border-slate-100">
                      <CheckCircle size={16} className="text-primary-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Der typische Zeitaufwand</h2>
            <div className="space-y-3">
              {[
                { aufgabe: "Mieteingänge prüfen", frequenz: "Monatlich", zeit: "15–30 Min." },
                { aufgabe: "Mahnungen versenden", frequenz: "Bei Bedarf", zeit: "5 Min. pro Mieter" },
                { aufgabe: "Handwerkerbeauftragung", frequenz: "Unregelmäßig", zeit: "30–60 Min." },
                { aufgabe: "Mieterwechsel (Übergabe)", frequenz: "Selten", zeit: "2–3 Stunden" },
                { aufgabe: "Nebenkostenabrechnung erstellen", frequenz: "Jährlich", zeit: "3–8 Stunden (ohne Software), 30 Min. (mit Software)" },
                { aufgabe: "Wartungsprotokolle prüfen", frequenz: "Jährlich", zeit: "1–2 Stunden" },
              ].map(({ aufgabe, frequenz, zeit }) => (
                <div key={aufgabe} className="grid grid-cols-3 gap-4 text-sm border-b border-slate-100 pb-3">
                  <span className="font-medium text-slate-900">{aufgabe}</span>
                  <span className="text-slate-500">{frequenz}</span>
                  <span className="text-primary-700 font-semibold">{zeit}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Wo die meisten Selbstverwalter scheitern</h2>
            <p>
              Die häufigsten Probleme: fehlerhafte Nebenkostenabrechnung (führt zu Rückforderungen), vergessene Mieterhöhungen (lässt Geld liegen) und unzureichende Dokumentation (problematisch bei Gerichtsverfahren). Mit einer guten Software sind das alles gelöste Probleme — sie erinnert Sie automatisch, rechnet korrekt und archiviert alles rechtssicher.
            </p>
          </div>

          <div className="mt-12 bg-primary-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-extrabold mb-3">Selbstverwaltung leicht gemacht</h3>
            <p className="text-primary-100 mb-6 max-w-lg mx-auto">
              ImmoPilot übernimmt alles, was auf dieser Checkliste steht — automatisch, rechtssicher, DSGVO-konform.
            </p>
            <Link href="/#demo" className="inline-block bg-white text-primary-600 font-bold px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors">
              Kostenlose Demo anfragen
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-200">
            <p className="font-bold text-slate-900 mb-4">Weitere Ratgeber:</p>
            <div className="space-y-2">
              <Link href="/blog/nebenkostenabrechnung-selber-machen" className="block text-primary-600 hover:underline text-sm">→ Nebenkostenabrechnung selber machen</Link>
              <Link href="/blog/miethoehung-mietspiegel-2026" className="block text-primary-600 hover:underline text-sm">→ Mieterhöhung nach Mietspiegel 2026</Link>
              <Link href="/blog/hausverwaltung-software-vergleich" className="block text-primary-600 hover:underline text-sm">→ Hausverwaltung Software im Vergleich 2026</Link>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  );
}
