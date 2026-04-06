

import Link from "next/link";
import { Calendar, Clock, ArrowLeft, CheckCircle, AlertTriangle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nebenkostenabrechnung selber machen 2026 — Schritt-für-Schritt",
  description:
    "Wie erstelle ich eine rechtssichere Nebenkostenabrechnung? Fristen, Pflichtangaben, BetrKV — vollständige Anleitung für Vermieter mit Checkliste.",
  openGraph: {
    title: "Nebenkostenabrechnung selber machen 2026 — Schritt-für-Schritt",
    description: "Rechtssichere Nebenkostenabrechnung erstellen: Fristen, Pflichtangaben, BetrKV — vollständige Anleitung.",
  },
};

export default function Page() {
  return (
    <main>
      
      <div className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 mb-8">
            <ArrowLeft size={14} /> Zurück zum Blog
          </Link>

          {/* Header */}
          <div className="mb-8">
            <span className="text-xs font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">Ratgeber</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4 leading-tight">
              Nebenkostenabrechnung selber machen — Schritt-für-Schritt-Anleitung 2026
            </h1>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1"><Calendar size={14} /> 15. März 2026</span>
              <span className="flex items-center gap-1"><Clock size={14} /> 8 min Lesezeit</span>
            </div>
          </div>

          {/* Intro */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <div className="flex gap-3">
              <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-900 mb-1">Das sollten Sie wissen</p>
                <p className="text-sm text-amber-800">
                  Laut Mieterbund sind über 88% aller Nebenkostenabrechnungen fehlerhaft. Das bedeutet für Vermieter: Nachforderungen fallen weg, im schlimmsten Fall zahlen Sie zurück. Dieser Leitfaden zeigt Ihnen, wie Sie es von Anfang an richtig machen.
                </p>
              </div>
            </div>
          </div>

          {/* Artikel-Inhalt */}
          <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Was ist eine Nebenkostenabrechnung?</h2>
            <p>
              Die Nebenkostenabrechnung — auch Betriebskostenabrechnung genannt — ist die jährliche Abrechnung aller Kosten, die über die Kaltmiete hinaus anfallen und vertraglich auf den Mieter umgelegt werden dürfen. Grundlage ist die <strong>Betriebskostenverordnung (BetrKV)</strong> in Verbindung mit dem Mietvertrag.
            </p>
            <p>
              Als Vermieter müssen Sie die Abrechnung einmal pro Jahr erstellen und dem Mieter zustellen. Die Frist ist klar geregelt: <strong>spätestens 12 Monate nach Ende des Abrechnungszeitraums</strong>. Bei einem Abrechnungsjahr 1. Januar bis 31. Dezember 2025 muss die Abrechnung also bis zum 31. Dezember 2026 beim Mieter sein. Verpassen Sie diese Frist, verlieren Sie das Recht auf Nachzahlungen — der Mieter aber nicht sein Recht auf Rückerstattung.
            </p>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Schritt 1: Welche Kosten darf ich umlegen?</h2>
            <p>
              Nicht jede Ausgabe rund ums Haus ist umlagefähig. Die BetrKV listet in §2 abschließend auf, welche Betriebskosten auf Mieter umgelegt werden dürfen. Nur Kosten, die dort aufgeführt sind <em>und</em> im Mietvertrag explizit vereinbart wurden, dürfen in der Abrechnung erscheinen.
            </p>

            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <p className="font-bold text-slate-900 mb-3">Typisch umlagefähige Kosten (§2 BetrKV):</p>
              <ul className="space-y-2 text-sm">
                {[
                  "Grundsteuer",
                  "Wasser und Entwässerung (Kaltwasser)",
                  "Heizung und Warmwasser (nach HeizkostenV!)",
                  "Aufzug (Betrieb, Wartung, Prüfung)",
                  "Straßenreinigung und Müllabfuhr",
                  "Hausreinigung und Ungezieferbekämpfung",
                  "Gartenpflege",
                  "Beleuchtung (Gemeinschaftsflächen)",
                  "Schornsteinreinigung",
                  "Sach- und Haftpflichtversicherung",
                  "Hauswart (nur Betriebskosten, keine Instandhaltung!)",
                  "Gemeinschaftsantenne / Kabelanschluss",
                  "Breitbandnetz (seit TKG-Reform eingeschränkt)",
                  "Sonstige Betriebskosten (müssen im Vertrag benannt sein)",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-primary-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 rounded-xl p-5 border border-red-200">
              <p className="font-bold text-red-900 mb-3">Nicht umlagefähig (häufigste Fehlerquelle):</p>
              <ul className="space-y-1 text-sm text-red-800">
                {[
                  "Verwaltungskosten (Buchhaltung, Kontoführung, Hausverwaltung)",
                  "Instandhaltungs- und Reparaturkosten",
                  "Leerstandskosten",
                  "Abschreibungen",
                  "Finanzierungskosten (Zinsen, Tilgung)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Schritt 2: Den richtigen Verteilerschlüssel wählen</h2>
            <p>
              Betriebskosten müssen nach einem nachvollziehbaren Maßstab auf die Mieter verteilt werden. Ist kein Schlüssel vertraglich vereinbart, gilt nach §556a BGB die <strong>Wohnfläche</strong> als Standard. Es gibt jedoch mehrere zulässige Schlüssel:
            </p>
            <ul className="space-y-2 text-sm">
              <li><strong>Wohnfläche (m²):</strong> Standard, wenn nichts anderes vereinbart</li>
              <li><strong>Personenzahl:</strong> Sinnvoll für wasserintensive Kosten</li>
              <li><strong>Verbrauch (Zähler):</strong> Pflicht bei Heizung nach HeizkostenV (mindestens 50-70%)</li>
              <li><strong>Wohneinheiten:</strong> Pro Wohnung gleich — seltener, muss vereinbart sein</li>
            </ul>
            <p>
              Wichtig: Sie müssen für alle Mieter denselben Schlüssel verwenden. Ein Mix ist nur möglich, wenn unterschiedliche Kostenarten unterschiedliche Schlüssel verlangen (z.B. Heizung nach Verbrauch, Müll nach Wohnfläche).
            </p>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Schritt 3: Pflichtangaben in der Abrechnung</h2>
            <p>
              Eine Nebenkostenabrechnung ist nur dann rechtsgültig, wenn sie alle Pflichtangaben enthält. Fehlt eine davon, kann der Mieter die Abrechnung anfechten:
            </p>
            <ol className="space-y-3 text-sm list-decimal list-inside">
              <li>Name und Anschrift von Vermieter und Mieter</li>
              <li>Genaue Bezeichnung der Wohnung (Anschrift, Lage)</li>
              <li>Abrechnungszeitraum (z.B. 01.01.2025 – 31.12.2025)</li>
              <li>Aufstellung aller abgerechneten Kostenarten mit Gesamtbetrag</li>
              <li>Gewählter Verteilerschlüssel je Kostenart</li>
              <li>Anteil des Mieters je Kostenart (mit Rechenweg)</li>
              <li>Summe der geleisteten Vorauszahlungen</li>
              <li>Saldo: Nachzahlung oder Guthaben</li>
            </ol>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Schritt 4: Heizkosten — Sonderfall HeizkostenV</h2>
            <p>
              Heizkosten unterliegen der <strong>Heizkostenverordnung (HeizkostenV)</strong>, nicht nur der BetrKV. Das bedeutet:
            </p>
            <ul className="space-y-2 text-sm">
              <li>Mindestens <strong>50%, maximal 70%</strong> der Heizkosten müssen nach individuellem Verbrauch (Wärmezähler/Heizkostenverteiler) abgerechnet werden</li>
              <li>Der Rest kann nach Wohnfläche verteilt werden</li>
              <li>Warmwasserkosten: Mindestens 50% nach Verbrauch (Warmwasserzähler)</li>
              <li>Ohne Verbrauchserfassung darf der Mieter den Ansatz um 15% kürzen</li>
            </ul>
            <p>
              Tipp: Bei älteren Gebäuden ohne Heizkostenverteiler müssen Sie diese nachrüsten. Ab 2027 gilt EU-weit die Pflicht zur Fernauslesbarkeit.
            </p>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Schritt 5: Abrechnung erstellen und zustellen</h2>
            <p>
              Die Abrechnung muss dem Mieter schriftlich zugehen — per Brief (empfohlen: Einwurf-Einschreiben oder persönlich gegen Quittung) oder per E-Mail, wenn der Mieter dem zugestimmt hat. Der Zugang muss nachweisbar sein, da ab diesem Zeitpunkt die Einspruchsfrist des Mieters beginnt.
            </p>
            <p>
              Der Mieter hat nach Zugang <strong>12 Monate Zeit, Einwendungen zu erheben</strong> (§556 Abs. 3 BGB). Danach sind seine Einsprüche ausgeschlossen — außer er konnte die Abrechnung nicht früher anfechten.
            </p>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Die häufigsten Fehler — und wie Sie sie vermeiden</h2>
            <div className="space-y-3">
              {[
                { fehler: "Frist versäumt", loesung: "Kalender-Erinnerung setzen: Abrechnung muss bis 31.12. des Folgejahres zugestellt sein" },
                { fehler: "Nicht umlagefähige Kosten enthalten", loesung: "Jeden Posten gegen §2 BetrKV prüfen, bevor er in die Abrechnung kommt" },
                { fehler: "Falscher oder inkonsistenter Verteilerschlüssel", loesung: "Schlüssel aus dem Mietvertrag entnehmen und für alle Mieter gleich anwenden" },
                { fehler: "Fehlende Belege", loesung: "Alle Rechnungen 10 Jahre aufbewahren — Mieter darf Einsicht verlangen" },
                { fehler: "Heizkosten nicht nach HeizkostenV", loesung: "Mindestens 50% nach Verbrauch abrechnen, Zählerablesung dokumentieren" },
                { fehler: "Mieterwechsel vergessen", loesung: "Bei Auszug im Abrechnungsjahr: zeitanteilige Abrechnung erstellen (§556 BGB)" },
              ].map(({ fehler, loesung }) => (
                <div key={fehler} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <p className="font-bold text-red-600 text-sm mb-1">✕ {fehler}</p>
                  <p className="text-sm text-slate-700">✓ {loesung}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Abrechnung mit Software vs. manuell</h2>
            <p>
              Eine Nebenkostenabrechnung für ein Mehrfamilienhaus mit 10 Wohnungen enthält leicht 200+ Rechenschritte. Manuell in Excel ist das fehleranfällig — besonders bei Mieterwechseln, unterschiedlichen Vorauszahlungen und gemischten Verteilerschlüsseln.
            </p>
            <p>
              Moderne Hausverwaltungssoftware wie ImmoPilot übernimmt die Berechnung automatisch: Sie tragen die Belege ein, das System verteilt die Kosten auf die Mieter, erstellt die Abrechnung als PDF und versendet sie auf Wunsch direkt. Die KI prüft dabei auf häufige Fehler — fehlende Posten, falsche Schlüssel, Fristüberschreitungen.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-extrabold mb-3">Nebenkostenabrechnung automatisieren</h3>
            <p className="text-primary-100 mb-6 max-w-lg mx-auto">
              ImmoPilot erstellt Ihre Betriebskostenabrechnung rechtssicher, automatisch und in wenigen Minuten — statt Stunden in Excel.
            </p>
            <Link
              href="/#demo"
              className="inline-block bg-white text-primary-600 font-bold px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors"
            >
              Kostenlose Demo anfragen
            </Link>
          </div>

          {/* Related */}
          <div className="mt-10 pt-8 border-t border-slate-200">
            <p className="font-bold text-slate-900 mb-4">Weitere Ratgeber:</p>
            <div className="space-y-2">
              <Link href="/blog/betriebskostenverordnung-betrkov-erklaert" className="block text-primary-600 hover:underline text-sm">
                → BetrKV erklärt: Welche Kosten sind umlagefähig?
              </Link>
              <Link href="/blog/immobilien-selbst-verwalten-checkliste" className="block text-primary-600 hover:underline text-sm">
                → Immobilien selbst verwalten — die komplette Checkliste
              </Link>
              <Link href="/blog/hausverwaltung-software-vergleich" className="block text-primary-600 hover:underline text-sm">
                → Hausverwaltung Software im Vergleich 2026
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  );
}
