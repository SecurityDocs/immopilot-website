import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ratgeber für Immobilieneigentümer — ImmoPilot Blog",
  description: "Praxiswissen zu Mietrecht, Nebenkostenabrechnung, Hausverwaltung und mehr — kostenlos und werbefrei.",
  keywords: "Mietrecht, Nebenkostenabrechnung, Hausverwaltung, Vermieter Ratgeber, Immobilien selbst verwalten",
};

const articles = [
  {
    slug: "nebenkostenabrechnung-selber-machen",
    category: "Ratgeber",
    title: "Nebenkostenabrechnung selber machen — Schritt-für-Schritt-Anleitung 2026",
    excerpt: "Über 88% aller Nebenkostenabrechnungen sind fehlerhaft. Wir zeigen Ihnen, wie Sie eine rechtssichere Abrechnung erstellen und die BetrKV korrekt anwenden.",
    date: "15. März 2026",
    readTime: "8 min",
  },
  {
    slug: "hausverwaltung-gekuendigt-was-tun",
    category: "Ratgeber",
    title: "Hausverwaltung hat gekündigt — was tun?",
    excerpt: "Bis zu 50% aller Eigentümer verlieren ihre Hausverwaltung. Wenn Sie eine Kündigung erhalten haben, müssen Sie schnell handeln. Dieser Leitfaden zeigt die nächsten Schritte.",
    date: "8. März 2026",
    readTime: "6 min",
  },
  {
    slug: "miethoehung-mietspiegel-2026",
    category: "Mietrecht",
    title: "Mieterhöhung nach Mietspiegel 2026 — so geht's richtig",
    excerpt: "Wann darf ich die Miete erhöhen? Kappungsgrenze berechnen, Mietspiegel anwenden, rechtssicheres Anschreiben — Schritt-für-Schritt nach BGB §558.",
    date: "28. Feb. 2026",
    readTime: "10 min",
  },
  {
    slug: "immobilien-selbst-verwalten-checkliste",
    category: "Checkliste",
    title: "Immobilien selbst verwalten — die komplette Checkliste",
    excerpt: "Was brauche ich, um mein Mehrfamilienhaus selbst zu verwalten? Von Mieterbuchhaltung bis Jahresabrechnung — alles auf einen Blick.",
    date: "14. Feb. 2026",
    readTime: "12 min",
  },
  {
    slug: "hausverwaltung-software-vergleich",
    category: "Vergleich",
    title: "Hausverwaltung Software im Vergleich 2026 — welche lohnt sich?",
    excerpt: "ImmoPilot, klassische Hausverwaltung oder Excel? Wir vergleichen die wichtigsten Optionen objektiv mit Kosten, Funktionen und Aufwand.",
    date: "30. Jan. 2026",
    readTime: "14 min",
  },
  {
    slug: "betriebskostenverordnung-betrkov-erklaert",
    category: "Mietrecht",
    title: "BetrKV erklärt: Welche Kosten sind umlagefähig?",
    excerpt: "Die Betriebskostenverordnung definiert, welche Kosten Vermieter auf Mieter umlegen dürfen. Ein vollständiger Überblick mit Beispielen aus der Praxis.",
    date: "15. Jan. 2026",
    readTime: "9 min",
  },
  {
    slug: "eigenbedarfskuendigung-voraussetzungen",
    category: "Mietrecht",
    title: "Eigenbedarfskündigung — Voraussetzungen, Fristen und häufige Fehler",
    excerpt: "Wann ist eine Eigenbedarfskündigung zulässig? Welche Begründung ist notwendig, welche Fristen gelten und wie schützen Sie sich vor Anfechtung?",
    date: "5. April 2026",
    readTime: "11 min",
  },
  {
    slug: "schoenheitsreparaturen-vermieter-mieter",
    category: "Mietrecht",
    title: "Schönheitsreparaturen: Was darf der Vermieter verlangen?",
    excerpt: "Nicht alle Schönheitsreparaturklauseln im Mietvertrag sind wirksam. Wir erklären, welche Klauseln der BGH für unwirksam erklärt hat und was Vermieter beachten müssen.",
    date: "28. März 2026",
    readTime: "9 min",
  },
  {
    slug: "kautionsrueckzahlung-frist",
    category: "Ratgeber",
    title: "Kautionsrückzahlung: Fristen, Einbehalte und was Mieter fordern können",
    excerpt: "Innerhalb welcher Frist muss die Kaution zurückgezahlt werden? Was darf der Vermieter einbehalten und wie gehen Mieter gegen ungerechtfertigte Abzüge vor?",
    date: "20. März 2026",
    readTime: "7 min",
  },
  {
    slug: "mietausfall-was-tun",
    category: "Ratgeber",
    title: "Mietausfall — was tun wenn der Mieter nicht zahlt?",
    excerpt: "Miete bleibt aus: Die richtigen Schritte von der ersten Mahnung über die fristlose Kündigung bis zur Räumungsklage — rechtssicher und effektiv.",
    date: "12. März 2026",
    readTime: "10 min",
  },
];

export default function BlogPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <div className="bg-slate-50 border-b border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-5">
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">Ratgeber & Wissen</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Wissen für Immobilieneigentümer
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Praxiswissen zu Mietrecht, Nebenkostenabrechnung, Hausverwaltung und mehr —
            kostenlos, werbefrei und von Experten geprüft.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
        {/* Featured article */}
        <div className="mb-10 bg-slate-900 rounded-2xl p-8 text-white">
          <span className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4 bg-white/10 text-slate-300">
            {articles[0].category}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 mb-3 leading-tight">
            {articles[0].title}
          </h2>
          <p className="text-slate-400 mb-6 max-w-2xl">{articles[0].excerpt}</p>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4 text-slate-500 text-sm">
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {articles[0].date}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> {articles[0].readTime} Lesezeit</span>
            </div>
            <Link
              href={`/blog/${articles[0].slug}`}
              className="inline-flex items-center gap-2 bg-primary-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-primary-700 transition-colors text-sm"
            >
              Jetzt lesen <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {articles.slice(1).map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-primary-300 hover:shadow-md transition-all"
            >
              <span className="text-xs font-semibold px-2 py-1 rounded-full inline-block bg-slate-100 text-slate-600">
                {article.category}
              </span>
              <h3 className="font-bold text-slate-900 mt-3 mb-2 group-hover:text-primary-700 transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-sm text-slate-500 mb-4 line-clamp-3">{article.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-extrabold text-slate-900 mb-2">
            Das Wissen direkt in der Software nutzen
          </h3>
          <p className="text-slate-500 mb-6 max-w-xl mx-auto text-sm">
            ImmoPilot setzt alles aus diesen Ratgebern automatisch um — Nebenkostenabrechnung, Mieterhöhung, Mahnwesen.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-primary-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors text-sm"
          >
            Kostenlose Demo anfragen <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}
