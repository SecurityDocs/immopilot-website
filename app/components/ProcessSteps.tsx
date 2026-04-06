import {
  Monitor,
  Settings,
  Tablet,
  PartyPopper,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    nr: "01",
    icon: Monitor,
    title: "Demo & Beratung",
    desc: "Kostenloser Zugang, persönliche Einführung. Unverbindlich, ohne Kreditkarte.",
  },
  {
    nr: "02",
    icon: Settings,
    title: "Onboarding in 24h",
    desc: "Wir richten gemeinsam Ihre Objekte, Mieter und Verträge ein. Datenmigration inklusive.",
  },
  {
    nr: "03",
    icon: Tablet,
    title: "Tablet installieren",
    desc: "Unser Team montiert das iPad diebstahlgesichert im Treppenhaus — und richtet es ein.",
  },
  {
    nr: "04",
    icon: PartyPopper,
    title: "Vollständig digital",
    desc: "Ihre Verwaltung läuft. Mieter melden sich selbst, Sie behalten den Überblick.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 lg:py-20 bg-white" id="process">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
          {/* Left: Text */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-5">
              <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">Wie es funktioniert</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              In 4 Schritten{" "}
              <span className="text-primary-600">startklar.</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-7">
              Von der ersten Demo bis zum laufenden Betrieb begleiten wir Sie persönlich. Kein IT-Wissen erforderlich.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20"
            >
              Jetzt starten <ArrowRight size={15} />
            </a>
          </div>

          {/* Right: Steps */}
          <div className="flex-1 grid sm:grid-cols-2 gap-4">
            {steps.map((step) => (
              <div
                key={step.nr}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-primary-200 hover:shadow-sm transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                    <step.icon size={18} className="text-primary-600" />
                  </div>
                  <span className="text-xl font-extrabold text-slate-100 group-hover:text-primary-100 transition-colors">
                    {step.nr}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
