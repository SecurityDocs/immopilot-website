import Link from "next/link";
import { Download, FileText, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kostenlose Vorlagen für Vermieter 2026 — ImmoPilot",
  description:
    "Kostenlose Word- und PDF-Vorlagen für Vermieter: Mietvertrag, Übergabeprotokoll, Mieterhöhung, Mahnung, Hausordnung und mehr. Rechtssicher nach aktuellem BGB.",
  keywords: "Mietvertrag Vorlage kostenlos, Übergabeprotokoll Vorlage, Mieterhöhungsschreiben Vorlage, Mahnung Miete Vorlage, Hausordnung Vorlage, Vermieter Vorlagen",
};

const categories = [
  {
    name: "Vertragsvorlagen",
    templates: [
      {
        slug: "mietvertrag-wohnraum",
        title: "Mietvertrag für Wohnraum",
        desc: "Vollständiger Mietvertrag für Wohnungen nach aktuellem BGB — inkl. Betriebskostenvereinbarung, Kautionsklausel und Schönheitsreparaturen.",
        badge: "Beliebt",
        pages: "8 Seiten",
      },
      {
        slug: "aufhebungsvertrag-mietvertrag",
        title: "Aufhebungsvertrag Mietverhältnis",
        desc: "Einvernehmliche Auflösung des Mietvertrags vor regulärer Kündigungsfrist — mit Übergabetermin und Kautionsregelung.",
        badge: null,
        pages: "3 Seiten",
      },
    ],
  },
  {
    name: "Übergabe & Protokolle",
    templates: [
      {
        slug: "uebergabeprotokoll",
        title: "Wohnungsübergabeprotokoll",
        desc: "Detailliertes Protokoll für Einzug und Auszug — mit Zählerständen, Raumzustand, Schlüsselübergabe und Unterschriftenzeile.",
        badge: "Beliebt",
        pages: "4 Seiten",
      },
      {
        slug: "kaution-quittung",
        title: "Kautionsquittung",
        desc: "Bestätigung des Kautionsempfangs mit Angaben zu Betrag, Anlageform und Rückgabebedingungen nach §551 BGB.",
        badge: null,
        pages: "1 Seite",
      },
    ],
  },
  {
    name: "Mietzins & Erhöhungen",
    templates: [
      {
        slug: "mieterhoehung-schreiben",
        title: "Mieterhöhungsschreiben §558 BGB",
        desc: "Rechtssicheres Mieterhöhungsverlangen nach Mietspiegel — mit Begründungspflicht, Kappungsgrenze und Zustimmungsfrist.",
        badge: "Rechtssicher",
        pages: "2 Seiten",
      },
      {
        slug: "modernisierungsankuendigung",
        title: "Modernisierungsankündigung §555c BGB",
        desc: "Pflichtankündigung vor Modernisierungsmaßnahmen — mit Beschreibung der Maßnahme, Zeitplan und voraussichtlicher Mieterhöhung.",
        badge: null,
        pages: "3 Seiten",
      },
    ],
  },
  {
    name: "Mahnwesen & Kündigung",
    templates: [
      {
        slug: "mahnung-miete",
        title: "Mahnung bei Mietrückstand",
        desc: "Abgestufte Mahnschreiben (1. Mahnung, 2. Mahnung, Abmahnung) bei Zahlungsverzug — rechtssicher nach BGB.",
        badge: "3 Varianten",
        pages: "3 Seiten",
      },
      {
        slug: "eigenbedarfskuendigung",
        title: "Eigenbedarfskündigung §573 BGB",
        desc: "Rechtssicheres Kündigungsschreiben wegen Eigenbedarf — mit Begründungspflicht, Sperrfrist und Sozialklausel-Hinweis.",
        badge: "Geprüft",
        pages: "2 Seiten",
      },
    ],
  },
  {
    name: "Betrieb & Kommunikation",
    templates: [
      {
        slug: "hausordnung",
        title: "Hausordnung Mehrfamilienhaus",
        desc: "Vollständige Hausordnung mit Ruhezeiten, Müllentsorgung, Treppenhausreinigung, Haustier-Regelung und Garagennutzung.",
        badge: "Komplett",
        pages: "3 Seiten",
      },
      {
        slug: "nebenkostenabrechnung-anschreiben",
        title: "Anschreiben Nebenkostenabrechnung",
        desc: "Professionelles Begleitschreiben zur Betriebskostenabrechnung — mit Erläuterung des Saldos, Widerspruchsfrist und neuen Vorauszahlungen.",
        badge: null,
        pages: "2 Seiten",
      },
    ],
  },
];

export default function VorlagenPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <div className="bg-slate-50 border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-5">
            <Download size={14} className="text-primary-600" />
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">
              Kostenlose Vorlagen
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Alle Vorlagen für Vermieter —{" "}
            <span className="text-primary-600">kostenlos & rechtssicher</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-6">
            Von Mietvertrag bis Mahnung: Professionelle Vorlagen nach aktuellem deutschen Mietrecht,
            sofort einsatzbereit, kostenlos zum Download.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
            {["Aktuell nach BGB 2026", "Sofort verwendbar", "Kostenlos — kein Account nötig", "Von Rechtsexperten geprüft"].map((text) => (
              <span key={text} className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-xs">✓</span>
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Templates */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        {categories.map(({ name, templates }) => (
          <div key={name}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                <FileText size={16} className="text-primary-600" />
              </div>
              <h2 className="text-xl font-extrabold text-slate-900">{name}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {templates.map(({ slug, title, desc, badge, pages }) => (
                <div
                  key={slug}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-primary-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      {badge && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full inline-block mb-2 bg-slate-100 text-slate-600">
                          {badge}
                        </span>
                      )}
                      <h3 className="font-bold text-slate-900 text-lg leading-snug">{title}</h3>
                    </div>
                    <span className="text-xs text-slate-400 ml-3 shrink-0 mt-1">{pages}</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-5 leading-relaxed">{desc}</p>
                  <div className="flex gap-3">
                    <Link
                      href={`/vorlagen/${slug}`}
                      className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
                    >
                      <Download size={15} /> Vorlage ansehen
                    </Link>
                    <Link
                      href={`/vorlagen/${slug}`}
                      className="flex items-center gap-1 border border-slate-200 text-slate-600 hover:border-primary-300 hover:text-primary-600 px-3 py-2.5 rounded-xl text-sm transition-colors"
                    >
                      Details <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Hinweis & CTA */}
      <div className="bg-slate-50 border-t border-slate-200 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-2">Rechtlicher Hinweis</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Alle Vorlagen basieren auf dem aktuellen deutschen Mietrecht (Stand: 2026) und wurden sorgfältig erstellt. Sie ersetzen jedoch keine individuelle Rechtsberatung. Bei besonderen Sachverhalten empfehlen wir die Rücksprache mit einem Fachanwalt für Mietrecht.
              </p>
            </div>
            <div className="bg-primary-600 text-white rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">Vorlagen automatisch befüllen</h3>
              <p className="text-sm text-primary-200 mb-5 leading-relaxed">
                Mit ImmoPilot erstellen Sie Mieterhöhungsschreiben, Mahnungen und Anschreiben automatisch — KI befüllt alle Felder mit Ihren Mieterdaten.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white text-primary-600 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-primary-50 transition-colors"
              >
                Demo anfragen <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
