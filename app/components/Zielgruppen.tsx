import Link from "next/link";
import { Euro, Clock, TrendingUp, Users, ArrowRight } from "lucide-react";

const gruppen = [
  {
    icon: Euro,
    tag: "Hausverwaltung zu teuer",
    headline: "Sie zahlen bis zu 40 € pro Wohnung — für was genau?",
    pain: "Intransparente Abrechnungen, schlechte Erreichbarkeit, verschleppte Reparaturen — und jeden Monat eine hohe Rechnung. Aber kündigen? Dann stehen Sie allein da.",
    benefit: "ImmoPilot übernimmt alle Aufgaben der Hausverwaltung für 5 €/WE. Endlich volle Transparenz, direkte Kontrolle, keine Abhängigkeit mehr.",
  },
  {
    icon: Clock,
    tag: "Selbst verwalten ohne Zeit",
    headline: "Sie machen alles selbst — und es kostet Sie täglich Stunden.",
    pain: "Mieteranfragen, Reparaturtermine, Betriebskostenabrechnungen — erledigt. Aber die Zeit dafür fehlt. Und eine Hausverwaltung ist zu teuer.",
    benefit: "ImmoPilot reduziert Ihren Verwaltungsaufwand auf 2 Stunden im Monat. Die KI übernimmt Routineaufgaben automatisch — ohne dass Sie etwas missen.",
  },
  {
    icon: TrendingUp,
    tag: "Wachsendes Portfolio",
    headline: "Portfolio wächst, Verwaltung kommt nicht mehr mit?",
    pain: "Excel funktioniert ab 10 Einheiten nicht mehr. Mehrere Hausverwaltungen für verschiedene Objekte sind teuer, inkonsistent und schwer zu überblicken.",
    benefit: "ImmoPilot verwaltet alle Objekte zentral — Zahlungen, Mietausfälle, Nebenkosten und Mietpreispotenziale auf einen Blick. Skaliert bis 500+ Einheiten.",
  },
  {
    icon: Users,
    tag: "Geerbt oder gekauft",
    headline: "Gerade ein Mehrfamilienhaus geerbt oder als Erstinvestment gekauft?",
    pain: "Mietverträge, Abrechnungen, Mahnwesen, Reparaturen — alles auf einmal. Keine Erfahrung, keine Zeit zum Einarbeiten, keine klare Anleitung.",
    benefit: "ImmoPilot begleitet Sie von Anfang an: Persönliches Onboarding, Datenmigration und klare Checklisten — in 24h einsatzbereit, ohne Vorkenntnisse.",
  },
];

export default function Zielgruppen() {
  return (
    <section className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-5">
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">Erkennen Sie sich wieder?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            ImmoPilot ist für Sie, wenn…
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            Vier typische Situationen — eine Lösung.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {gruppen.map(({ icon: Icon, tag, headline, pain, benefit }) => (
            <div
              key={tag}
              className="rounded-2xl p-5 border border-slate-200 bg-white hover:border-primary-300 hover:shadow-md transition-all group flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                <Icon size={18} className="text-primary-600" />
              </div>

              <span className="text-xs font-bold text-primary-700 uppercase tracking-wider mb-2">{tag}</span>

              <h3 className="text-sm font-bold text-slate-900 mb-3 leading-snug">{headline}</h3>

              <div className="mb-3 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-1">Ihr Problem</p>
                <p className="text-xs text-slate-600 leading-relaxed">{pain}</p>
              </div>

              <div className="rounded-xl bg-primary-50 border border-primary-100 px-3 py-2.5 mb-4">
                <p className="text-[10px] font-semibold text-primary-700 mb-1">Unsere Lösung</p>
                <p className="text-xs text-slate-700 leading-relaxed">{benefit}</p>
              </div>

              <Link
                href="#contact"
                className="flex items-center justify-center gap-2 w-full font-semibold py-2.5 rounded-xl text-xs bg-primary-600 text-white hover:bg-primary-700 transition-colors"
              >
                Demo anfragen <ArrowRight size={12} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
