

import Link from "next/link";
import { Calendar, Clock, ArrowLeft, AlertTriangle, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mieterhöhung nach Mietspiegel 2026 — so geht's richtig",
  description:
    "Wann darf ich die Miete erhöhen? Kappungsgrenze berechnen, Mietspiegel anwenden, rechtssicheres Anschreiben — Schritt-für-Schritt nach BGB §558.",
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
            <span className="text-xs font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">Mietrecht</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4 leading-tight">
              Mieterhöhung nach Mietspiegel 2026 — so geht's richtig
            </h1>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1"><Calendar size={14} /> 28. Februar 2026</span>
              <span className="flex items-center gap-1"><Clock size={14} /> 10 min Lesezeit</span>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <div className="flex gap-3">
              <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-900 mb-1">Wichtiger Hinweis</p>
                <p className="text-sm text-amber-800">
                  Eine formell fehlerhafte Mieterhöhung ist unwirksam — auch wenn sie inhaltlich berechtigt wäre. Beachten Sie alle Formvorschriften nach §558a BGB. Bei Unsicherheit: Rechtsberatung in Anspruch nehmen.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Wann darf ich die Miete erhöhen?</h2>
            <p>
              Das Mieterhöhungsrecht ist in Deutschland streng geregelt. Als Vermieter dürfen Sie die Miete zur ortsüblichen Vergleichsmiete (§558 BGB) verlangen, wenn folgende Voraussetzungen erfüllt sind:
            </p>
            <ul className="space-y-2 text-sm">
              <li><strong>Wartezeit:</strong> Seit dem letzten Einzug oder der letzten Mieterhöhung müssen mindestens 12 Monate vergangen sein.</li>
              <li><strong>Begründungspflicht:</strong> Sie müssen die Mieterhöhung auf den qualifizierten Mietspiegel, ein Sachverständigengutachten, Vergleichswohnungen oder eine Mietdatenbank stützen.</li>
              <li><strong>Kappungsgrenze:</strong> Innerhalb von 3 Jahren darf die Miete maximal um 20% steigen (in angespannten Wohnungsmärkten: 15%).</li>
              <li><strong>Überlegungsfrist:</strong> Der Mieter hat nach Zugang des Erhöhungsverlangens bis zum Ablauf des übernächsten Monats Zeit, zuzustimmen.</li>
            </ul>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Schritt 1: Mietspiegel finden und lesen</h2>
            <p>
              Der Mietspiegel ist das zentrale Instrument zur Bestimmung der ortsüblichen Vergleichsmiete. In vielen Städten gibt es einen <strong>qualifizierten Mietspiegel</strong> (von Gemeinde und Interessenverbänden gemeinsam anerkannt) — dieser hat als Begründung besonderen Beweiswert.
            </p>
            <p>
              So gehen Sie vor:
            </p>
            <ol className="space-y-2 text-sm list-decimal list-inside">
              <li>Mietspiegel der Gemeinde herunterladen (meist auf der Stadtverwaltungswebsite)</li>
              <li>Wohnungsmerkmale zuordnen: Wohnfläche, Baujahr, Lage (einfach/mittel/gut), Ausstattung</li>
              <li>Vergleichsmiete pro m² aus der Tabelle ablesen</li>
              <li>Zu- und Abschläge für besondere Merkmale anwenden (Balkon, Keller, Fahrstuhl, etc.)</li>
              <li>Gesamtmiete = Wohnfläche × ortsübliche Vergleichsmiete pro m²</li>
            </ol>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-5">
              <p className="font-bold text-primary-900 mb-3">Rechenbeispiel</p>
              <div className="text-sm space-y-2 text-teal-800">
                <p>Wohnung: 75 m², Baujahr 2005, gute Lage, vollständig saniertes Bad</p>
                <p>Mietspiegel: 12,50 €/m² (Mittelwert), +0,80 € für Ausstattung</p>
                <p>Ortsübliche Vergleichsmiete: 75 × 13,30 = <strong>997,50 €/Monat</strong></p>
                <p>Aktuelle Miete: 820 €/Monat → Erhöhung möglich auf max. 997,50 €</p>
                <p>Prüfung Kappungsgrenze: 820 € + 20% = 984 €</p>
                <p>→ Kappungsgrenze ist bindend: <strong>max. 984 €/Monat</strong></p>
              </div>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Schritt 2: Kappungsgrenze berechnen</h2>
            <p>
              Die Kappungsgrenze begrenzt die Mieterhöhung unabhängig vom Mietspiegel. Selbst wenn die ortsübliche Vergleichsmiete deutlich höher liegt, dürfen Sie innerhalb von 3 Jahren nicht mehr als:
            </p>
            <ul className="space-y-2 text-sm">
              <li><strong>20%</strong> in normalen Wohnungsmärkten</li>
              <li><strong>15%</strong> in Gebieten mit angespanntem Wohnungsmarkt (§558 Abs. 3 BGB) — gilt für viele Großstädte</li>
            </ul>
            <p>
              Den 3-Jahres-Zeitraum berechnen Sie ab dem letzten Mieterhöhungsverlangen, nicht ab Einzug. Erhöhungen wegen Modernisierung (§559 BGB) oder Staffel-/Indexmiete werden nicht angerechnet.
            </p>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Schritt 3: Das Mieterhöhungsschreiben</h2>
            <p>
              Das Mieterhöhungsverlangen muss schriftlich erfolgen (§558a BGB) und folgende Angaben enthalten:
            </p>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <div className="space-y-2 text-sm">
                {[
                  "Vollständige Absender- und Empfängerdaten",
                  "Datum des Schreibens",
                  "Genauer Bezug auf die Wohnung (Anschrift, Lage im Haus)",
                  "Aktuelle Miete und die neue angestrebte Miete",
                  "Begründung mit konkretem Verweis auf den Mietspiegel (Seite, Spalte, Zeile)",
                  "Nachweis, dass die Kappungsgrenze eingehalten wird",
                  "Aufforderung zur Zustimmung bis zum Ablauf des übernächsten Monats nach Zugang",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-primary-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Schritt 4: Zugang und Fristen im Überblick</h2>
            <div className="space-y-3">
              {[
                { phase: "Zugang des Schreibens", info: "Der Tag, an dem das Schreiben beim Mieter ankommt (nicht das Absendedatum!). Bei Post: i.d.R. am nächsten Werktag." },
                { phase: "Überlegungsfrist", info: "Bis zum Ablauf des übernächsten Monats nach Zugang. Beispiel: Zugang am 5. März → Frist bis 31. Mai." },
                { phase: "Wirksamwerden", info: "Die neue Miete gilt ab dem übernächsten Monat nach Ablauf der Überlegungsfrist, also bei obigem Beispiel ab 1. August." },
                { phase: "Zustimmungsklage", info: "Stimmt der Mieter nicht zu, müssen Sie innerhalb von 3 Monaten nach Ablauf der Frist Klage auf Zustimmung erheben." },
              ].map(({ phase, info }) => (
                <div key={phase} className="border border-slate-200 rounded-xl p-4">
                  <p className="font-bold text-slate-900 text-sm mb-1">{phase}</p>
                  <p className="text-sm text-slate-600">{info}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Sonderfälle: Modernisierungsmieterhöhung</h2>
            <p>
              Wenn Sie in die Wohnung investiert haben (z.B. neue Heizungsanlage, Wärmedämmung, barrierefreier Umbau), können Sie nach §559 BGB jährlich 8% der Modernisierungskosten auf die Miete umlegen. Diese Erhöhung ist unabhängig vom Mietspiegel — sie gilt auch bei hohen Bestandsmieten.
            </p>
            <p>
              Wichtig: Instandhaltungsmaßnahmen (Reparaturen) sind keine Modernisierungen. Nur Maßnahmen, die den Wohnstandard verbessern oder Energie sparen, sind umlagefähig.
            </p>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Häufige Fehler bei Mieterhöhungen</h2>
            <div className="space-y-3">
              {[
                { fehler: "Wartezeit nicht eingehalten", fix: "12 Monate nach letzter Erhöhung oder Einzug abwarten" },
                { fehler: "Kein qualifizierter Mietspiegel als Begründung", fix: "Auf den offiziellen Mietspiegel der Gemeinde verweisen, nicht auf andere Quellen" },
                { fehler: "Kappungsgrenze übersehen", fix: "Immer den 3-Jahreszeitraum rückwirkend prüfen" },
                { fehler: "Formfehler (mündlich oder per E-Mail ohne Zustimmung)", fix: "Schriftform einhalten, per Einwurf-Einschreiben zustellen" },
                { fehler: "Keine konkrete Zustimmungsfrist genannt", fix: "Frist immer ausdrücklich nennen ('bis zum 31. Mai 2026')" },
                { fehler: "Zu späte Zustimmungsklage", fix: "Innerhalb von 3 Monaten nach Fristablauf klagen" },
              ].map(({ fehler, fix }) => (
                <div key={fehler} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <p className="font-bold text-red-600 text-sm mb-1">✕ {fehler}</p>
                  <p className="text-sm text-slate-700">✓ {fix}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Mieterhöhung mit Software verwalten</h2>
            <p>
              Viele Vermieter verpassen Mieterhöhungspotenziale, weil sie den Überblick über Einzugsdaten, letzte Erhöhungen und aktuelle Mietspiegel verlieren. ImmoPilot zeigt Ihnen automatisch, welche Wohnungen erhöhungsfähig sind, berechnet die maximal zulässige neue Miete und erstellt das Schreiben auf Knopfdruck.
            </p>
          </div>

          <div className="mt-12 bg-primary-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-extrabold mb-3">Mieterhöhungen automatisch im Blick behalten</h3>
            <p className="text-primary-100 mb-6 max-w-lg mx-auto">
              ImmoPilot erinnert Sie automatisch an Erhöhungspotenziale und erstellt rechtssichere Schreiben in Sekunden.
            </p>
            <Link href="/#demo" className="inline-block bg-white text-primary-600 font-bold px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors">
              Kostenlose Demo anfragen
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-200">
            <p className="font-bold text-slate-900 mb-4">Weitere Ratgeber:</p>
            <div className="space-y-2">
              <Link href="/blog/nebenkostenabrechnung-selber-machen" className="block text-primary-600 hover:underline text-sm">→ Nebenkostenabrechnung selber machen</Link>
              <Link href="/blog/betriebskostenverordnung-betrkov-erklaert" className="block text-primary-600 hover:underline text-sm">→ BetrKV erklärt: Welche Kosten sind umlagefähig?</Link>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  );
}
