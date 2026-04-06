import Link from "next/link";
import { Euro, ArrowRight, Star, Building2, Users, Wrench } from "lucide-react";

const examples = [
  { label: "3 Professional-Abschlüsse", earn: "900 €", period: "einmalig" },
  { label: "10 Professional-Abschlüsse", earn: "3.000 €", period: "einmalig" },
  { label: "10 Creator × 250 €/Mon.", earn: "250 €/Mon.", period: "dauerhaft · 10 %" },
];

const badges = [
  { icon: Building2, label: "Makler: bis 450 €" },
  { icon: Users, label: "Creator: 10 %/Mon." },
  { icon: Wrench, label: "Handwerker: bis 225 €" },
];

export default function PartnerTeaser() {
  return (
    <section className="py-16 lg:py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 rounded-2xl sm:rounded-3xl px-5 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-900/50 border border-primary-700/40 px-3 py-1.5 rounded-full mb-5">
                <Star size={12} className="text-primary-400" />
                <span className="text-xs font-semibold text-primary-300 uppercase tracking-wider">Partner-Programm</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
                Kennen Sie jemanden,<br />
                <span className="text-primary-400">der ImmoPilot braucht?</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                Makler, Handwerker und Creator verdienen mit jeder Empfehlung — einmalig bis zu 450 € oder 10 % monatlich wiederkehrend. Mindestlaufzeit 3 Monate. Kostenlos & unverbindlich.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {badges.map((item) => (
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
            <div className="space-y-3 mt-2 lg:mt-0">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Beispiele — was Sie verdienen könnten</p>
              {examples.map((ex) => (
                <div key={ex.label} className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-3.5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-primary-900/60 flex items-center justify-center flex-shrink-0">
                      <Euro size={14} className="text-primary-400" />
                    </div>
                    <span className="text-sm text-slate-300 font-medium leading-snug">{ex.label}</span>
                  </div>
                  <div className="text-right flex-shrink-0 ml-2">
                    <div className="text-base font-extrabold text-white whitespace-nowrap">{ex.earn}</div>
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
