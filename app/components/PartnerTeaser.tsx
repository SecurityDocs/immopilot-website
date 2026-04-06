import Link from "next/link";
import { Euro, ArrowRight, Star, Building2, Users, Wrench } from "lucide-react";

const examples = [
  { label: "3 Professional-Abschlüsse", earn: "1.350 €", period: "einmalig" },
  { label: "10 Professional-Abschlüsse", earn: "4.500 €", period: "einmalig" },
  { label: "10 Creator-Kunden × 250 €/Monat", earn: "500 €/Monat", period: "dauerhaft" },
];

export default function PartnerTeaser() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 rounded-3xl px-8 py-12 lg:px-14 lg:py-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-900/50 border border-primary-700/40 px-3 py-1.5 rounded-full mb-5">
                <Star size={12} className="text-primary-400" />
                <span className="text-xs font-semibold text-primary-300 uppercase tracking-wider">Partner-Programm</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Kennen Sie jemanden,<br />
                <span className="text-primary-400">der ImmoPilot braucht?</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Makler, Handwerker und Creator verdienen mit jeder Empfehlung — einmalig bis zu 450 € oder monatlich wiederkehrend. Kostenlos, ohne Mindestmengen.
              </p>
              <div className="flex flex-wrap gap-2 mb-7">
                {[
                  { icon: Building2, label: "Makler: bis 450 €" },
                  { icon: Users, label: "Creator: 20 %/Monat" },
                  { icon: Wrench, label: "Handwerker: bis 200 €" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300 font-semibold">
                    <item.icon size={12} className="text-primary-400" />
                    {item.label}
                  </div>
                ))}
              </div>
              <Link
                href="/partner"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold text-sm hover:bg-primary-500 transition-colors"
              >
                Zum Partner-Programm <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right: Earnings examples */}
            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-4">Beispiele — was Sie verdienen könnten</p>
              {examples.map((ex) => (
                <div key={ex.label} className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-primary-900/60 flex items-center justify-center flex-shrink-0">
                      <Euro size={14} className="text-primary-400" />
                    </div>
                    <span className="text-sm text-slate-300 font-medium truncate">{ex.label}</span>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-base font-extrabold text-white">{ex.earn}</div>
                    <div className="text-[10px] text-slate-500">{ex.period}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
