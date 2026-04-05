"use client";

import {
  Monitor,
  Handshake,
  Settings,
  Tablet,
  Key,
  Mail,
  PartyPopper,
  ArrowRight,
} from "lucide-react";

const steps = [
  { nr: 1, icon: Monitor, title: "Demo testen", desc: "Kostenloser Zugang zu allen Funktionen. Unverbindlich, ohne Kreditkarte." },
  { nr: 2, icon: Handshake, title: "Gespräch führen", desc: "Offene Fragen klären wir persönlich per Telefon oder Video." },
  { nr: 3, icon: Settings, title: "Onboarding", desc: "Gemeinsame Einrichtung. Immobilien, Mieter, Verträge einpflegen." },
  { nr: 4, icon: Tablet, title: "Tablet installieren", desc: "Diebstahlsichere Montage im Treppenhaus. Durch unser Team." },
  { nr: 5, icon: Key, title: "Zugänge einrichten", desc: "Admin-Dashboard und eigene Portal-URL für jedes Objekt." },
  { nr: 6, icon: Mail, title: "Mieter informieren", desc: "Fertige Anschreiben und E-Mail-Vorlagen. Wir unterstützen Sie." },
  { nr: 7, icon: PartyPopper, title: "Alles digital", desc: "Ihre Immobilienverwaltung läuft. Rund um die Uhr, komplett digital." },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 lg:py-24 bg-white" id="process">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            In 7 Schritten{" "}
            <span className="gradient-text">komplett digital</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500">
            Von der ersten Demo bis zum laufenden Betrieb begleiten wir Sie persönlich.
          </p>
        </div>

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-6 left-[calc(100%/14)] right-[calc(100%/14)] h-0.5 bg-slate-200" />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-2">
            {steps.map((step, i) => {
              const isLast = i === steps.length - 1;
              return (
                <div key={step.nr} className="relative text-center group">
                  {/* Circle */}
                  <div className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center relative z-10 transition-all ${
                    isLast
                      ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20"
                      : "bg-white border-2 border-slate-200 text-slate-400 group-hover:border-primary-300 group-hover:text-primary-600"
                  }`}>
                    <step.icon size={20} />
                  </div>

                  {/* Number */}
                  <div className={`text-[10px] font-bold mt-2.5 ${isLast ? "text-primary-600" : "text-slate-300"}`}>
                    0{step.nr}
                  </div>

                  {/* Title */}
                  <h3 className={`text-xs font-bold mt-1 ${isLast ? "text-primary-600" : "text-slate-900"}`}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20">
            Jetzt starten <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
