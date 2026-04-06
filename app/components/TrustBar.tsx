import {
  Shield,
  Sparkles,
  Server,
  Clock,
  Euro,
  Star,
} from "lucide-react";

const stats = [
  { value: "< 2 Std.", label: "Verwaltungsaufwand pro Monat und Objekt", icon: Clock },
  { value: "80 %", label: "weniger Anrufe durch Mieter-Selfservice", icon: Clock },
  { value: "5 €", label: "pro Wohnung statt 25–40 € Hausverwaltungsgebühr", icon: Euro },
  { value: "24 Std.", label: "bis zur Einsatzbereitschaft nach Onboarding", icon: Sparkles },
];

const trustPoints = [
  {
    icon: Shield,
    title: "DSGVO-konform & sicher",
    text: "Alle Daten werden nach deutschem Datenschutzrecht verarbeitet. KI-Training nur mit anonymisierten Informationen.",
  },
  {
    icon: Server,
    title: "Deutsches Hosting",
    text: "Ihre Mietverträge, Dokumente und Mieterdaten liegen ausschließlich auf Servern in Deutschland.",
  },
  {
    icon: Star,
    title: "Von Eigentümern für Eigentümer",
    text: "ImmoPilot wurde von einem IT-Unternehmen entwickelt, das selbst Immobilien verwaltet — und weiß, wo der Schuh drückt.",
  },
];

export default function TrustBar() {
  return (
    <section className="py-16 lg:py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats row */}
        <div className="text-center mb-14">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-10">Was Eigentümer bei ImmoPilot erleben</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {stats.map((s) => (
              <div key={s.value} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">{s.value}</div>
                <div className="text-xs sm:text-sm text-slate-400 leading-snug max-w-[160px] mx-auto">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-12" />

        {/* Trust points */}
        <div className="grid sm:grid-cols-3 gap-6">
          {trustPoints.map((tp) => (
            <div key={tp.title} className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                <tp.icon size={18} className="text-primary-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-1">{tp.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{tp.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
