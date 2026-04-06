

import Link from "next/link";
import { Calendar, Clock, ArrowLeft, AlertTriangle, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hausverwaltung hat gekündigt — was tun? Notfall-Ratgeber 2026",
  description:
    "Ihre Hausverwaltung hat gekündigt? So reagieren Sie richtig: Fristen, Checkliste, Alternativen und was Sie sofort tun müssen.",
  openGraph: {
    title: "Hausverwaltung hat gekündigt — was tun?",
    description: "Notfall-Ratgeber: Fristen prüfen, Unterlagen sichern, Nachfolge planen.",
  },
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
            <span className="text-xs font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">Notfall-Ratgeber</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4 leading-tight">
              Hausverwaltung hat gekündigt — was tun?
            </h1>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1"><Calendar size={14} /> 8. März 2026</span>
              <span className="flex items-center gap-1"><Clock size={14} /> 6 min Lesezeit</span>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-8">
            <div className="flex gap-3">
              <AlertTriangle size={20} className="text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-red-900 mb-1">Handeln Sie jetzt</p>
                <p className="text-sm text-red-800">
                  Eine Hausverwaltungskündigung kommt selten ohne Vorwarnung. Aber wenn sie da ist, haben Sie in der Regel <strong>3 Monate</strong> Zeit. Diese Zeit müssen Sie nutzen — sonst stehen Sie ohne laufende Buchhaltung, ohne Handwerkerverträge und ohne Mieterkorrespondenz da.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Warum kündigen Hausverwaltungen?</h2>
            <p>
              Die häufigsten Gründe: steigende Kosten bei gleichbleibenden Gebühren, Personalprobleme, Unternehmensverkauf oder einfach Überforderung mit dem Portfolio. Viele kleinere Hausverwaltungen geben in den nächsten Jahren auf — der Markt konsolidiert sich, und es gibt zu wenig Nachwuchs.
            </p>
            <p>
              Für Sie als Eigentümer ist das eine Chance: Viele stellen danach fest, dass die Selbstverwaltung mit moderner Software nicht nur günstiger, sondern auch besser ist als das, was die Hausverwaltung geleistet hat.
            </p>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Sofortmaßnahmen: Die ersten 48 Stunden</h2>
            <div className="space-y-3">
              {[
                { title: "Kündigung prüfen", desc: "Ist die Kündigung rechtswirksam? Prüfen Sie Verwaltervertrag, Kündigungsfristen und -form. Eine ordentliche Kündigung erfordert in der Regel 3 Monate Frist." },
                { title: "WEG oder Einzeleigentümer?", desc: "Bei WEG: Sofort Eigentümerversammlung einberufen. Bei Einzeleigentum: Sie entscheiden allein über die Nachfolge." },
                { title: "Konten sichern", desc: "Fordern Sie sofort Zugang zu allen Hausgeldkonten, Instandhaltungsrücklagen und Kontoauszügen. Die Hausverwaltung ist zur Herausgabe verpflichtet." },
                { title: "Unterlagen anfordern", desc: "Schriftlich (per Einschreiben) Herausgabe aller Unterlagen anfordern: Mietverträge, Betriebskostenabrechnungen, Wartungsverträge, Versicherungsunterlagen, Dienstleisterverträge." },
                { title: "Mieter informieren", desc: "Informieren Sie Ihre Mieter schriftlich über den Verwalterwechsel und geben Sie vorläufig Ihre eigene Kontaktadresse an." },
              ].map(({ title, desc }, i) => (
                <div key={title} className="flex gap-4 bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">{title}</p>
                    <p className="text-sm text-slate-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Welche Unterlagen müssen übergeben werden?</h2>
            <p>
              Die alte Hausverwaltung ist gesetzlich verpflichtet, alle Verwaltungsunterlagen herauszugeben. Fordern Sie diese schriftlich an und setzen Sie eine angemessene Frist (2-3 Wochen). Folgendes gehört dazu:
            </p>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {[
                  "Alle Mietverträge (Original oder Kopie)",
                  "Mieterkartei mit Kontaktdaten",
                  "Kautionskonten-Nachweise",
                  "Letzte 3 Betriebskostenabrechnungen",
                  "Wirtschaftsplan / Haushaltspläne",
                  "Kontoauszüge der letzten 3 Jahre",
                  "Instandhaltungsrücklagen-Nachweis",
                  "Alle laufenden Dienstleisterverträge",
                  "Wartungsprotokolle (Aufzug, Heizung, etc.)",
                  "Versicherungspolizzen",
                  "Teilungserklärung (bei WEG)",
                  "Protokolle der Eigentümerversammlungen",
                  "Offene Mahnungen / laufende Gerichtsverfahren",
                  "Schlüsselverzeichnis",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-primary-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-slate-500">
              Tipp: Setzen Sie eine schriftliche Frist von 14 Tagen. Reagiert die Hausverwaltung nicht, können Sie die Herausgabe gerichtlich erzwingen. Bei WEG hat der Verwalter nach §18 WEG sofortige Rückgabepflicht.
            </p>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Die drei Wege nach der Kündigung</h2>

            <div className="space-y-4">
              <div className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-2">Option 1: Neue Hausverwaltung beauftragen</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Kosten: 25–40 € pro Wohneinheit pro Monat. Vorteile: Kein eigener Aufwand. Nachteile: Gleiche Abhängigkeit wie bisher, intransparente Abrechnungen, kaum Kontrolle.
                </p>
                <p className="text-xs text-slate-400">Geeignet für: Eigentümer mit 1-2 Objekten, die keinerlei eigene Zeit investieren können oder möchten.</p>
              </div>

              <div className="border border-primary-300 bg-primary-50 rounded-xl p-5">
                <h3 className="font-bold text-primary-900 mb-2">Option 2: Selbst verwalten mit Software ✓ Empfehlung</h3>
                <p className="text-sm text-teal-800 mb-3">
                  Kosten: 5–15 € pro Wohneinheit pro Monat (ca. 80% günstiger). Mit moderner Software wie ImmoPilot übernehmen Sie Mieterverwaltung, Buchhaltung, Nebenkostenabrechnung und Kommunikation — alles digital und rechtssicher.
                </p>
                <p className="text-xs text-primary-600">Geeignet für: Eigentümer mit 5–100 Einheiten, die Kontrolle und Transparenz wollen.</p>
              </div>

              <div className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-2">Option 3: Mischmodell</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Software für Verwaltung + externer Buchhalter für Jahresabschluss + Hausmeisterservice vor Ort. Kostenoptimiert bei voller Transparenz.
                </p>
                <p className="text-xs text-slate-400">Geeignet für: Großeigentümer mit 50+ Einheiten und mehreren Objekten.</p>
              </div>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Was kostet Sie eine neue Hausverwaltung wirklich?</h2>
            <p>
              Ein Rechenbeispiel: Sie haben 30 Wohneinheiten. Eine neue Hausverwaltung kostet Sie 30 × 35 € = <strong>1.050 € pro Monat</strong>, also 12.600 € im Jahr. Dazu kommen Zusatzleistungen, Gebühren für Mieterwechsel (oft 1–2 Monatsmieten), Sonderversammlungen und weitere versteckte Kosten.
            </p>
            <p>
              Mit ImmoPilot (Professional): 99 € Basis + 30 WE × 5 € = <strong>249 € pro Monat</strong>. Das sind rund 2.990 € im Jahr — eine Ersparnis von fast 9.600 € jährlich. Und Sie haben deutlich mehr Kontrolle.
            </p>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Checkliste: Die ersten 30 Tage nach der Kündigung</h2>
            <div className="space-y-2 text-sm">
              {[
                "Kündigung rechtlich prüfen lassen (Rechtsschutzversicherung nutzen)",
                "Alle Unterlagen schriftlich anfordern (Frist: 14 Tage)",
                "Konten identifizieren und Vollmachten klären",
                "Mieter informieren (neue Kontaktdaten mitteilen)",
                "Laufende Dienstleisterverträge prüfen (Kündbar? Zu teuer?)",
                "Versicherungen prüfen (Gebäude, Haftpflicht, Glasbruch)",
                "Software einrichten und Daten importieren",
                "Nächste Nebenkostenabrechnung im Blick behalten",
                "Offene Mahnungen und Gerichtsverfahren übernehmen",
                "Neue Hausgeldkonten eröffnen (falls nötig)",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 bg-slate-50 rounded-lg p-3 border border-slate-100">
                  <input type="checkbox" className="mt-0.5 accent-primary-600" readOnly />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-primary-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-extrabold mb-3">In 24h startklar — ohne Hausverwaltung</h3>
            <p className="text-primary-100 mb-6 max-w-lg mx-auto">
              ImmoPilot hilft Ihnen, die Selbstverwaltung schnell und stressfrei zu übernehmen. Demo-Termin in 5 Minuten vereinbaren.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-white text-primary-600 font-bold px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors"
            >
              Jetzt Demo anfragen
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-200">
            <p className="font-bold text-slate-900 mb-4">Weitere Ratgeber:</p>
            <div className="space-y-2">
              <Link href="/blog/immobilien-selbst-verwalten-checkliste" className="block text-primary-600 hover:underline text-sm">
                → Immobilien selbst verwalten — die komplette Checkliste
              </Link>
              <Link href="/blog/hausverwaltung-software-vergleich" className="block text-primary-600 hover:underline text-sm">
                → Hausverwaltung Software im Vergleich 2026
              </Link>
              <Link href="/blog/nebenkostenabrechnung-selber-machen" className="block text-primary-600 hover:underline text-sm">
                → Nebenkostenabrechnung selber machen — Schritt-für-Schritt
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  );
}
