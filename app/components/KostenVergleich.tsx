import Link from "next/link";
import { TrendingDown, ArrowRight } from "lucide-react";

const beispiele = [
  { wohnungen: "10 Einheiten", hv: "350 €", immo: "99 €",  ersparnis: "3.012 €/Jahr" },
  { wohnungen: "30 Einheiten", hv: "1.050 €", immo: "249 €", ersparnis: "9.612 €/Jahr" },
  { wohnungen: "50 Einheiten", hv: "1.750 €", immo: "349 €", ersparnis: "16.812 €/Jahr" },
];

export default function KostenVergleich() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-5">
          <TrendingDown size={14} className="text-accent-400" />
          <span className="text-xs font-semibold uppercase tracking-wider">Kostenvergleich</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
          Was zahlen Sie gerade für Ihre Hausverwaltung?
        </h2>
        <p className="text-primary-200 mb-10 max-w-xl mx-auto">
          Rechnen Sie nach — die meisten Eigentümer sparen über 80% ihrer bisherigen Verwaltungskosten.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {beispiele.map(({ wohnungen, hv, immo, ersparnis }) => (
            <div key={wohnungen} className="bg-white/10 border border-white/20 rounded-2xl p-5 text-left">
              <p className="font-bold text-sm mb-4">{wohnungen}</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-primary-300">Hausverwaltung</span>
                  <span className="line-through text-primary-300">{hv}/Monat</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white font-medium">ImmoPilot</span>
                  <span className="font-bold text-accent-400">{immo}/Monat</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/20">
                  <span className="font-semibold">Ersparnis</span>
                  <span className="font-extrabold text-accent-400">{ersparnis}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="#contact"
          className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold px-8 py-3.5 rounded-xl hover:bg-primary-50 transition-colors shadow-lg shadow-primary-900/30"
        >
          Jetzt 14 Tage kostenlos testen <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
