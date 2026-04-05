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
  { icon: Monitor, title: "Demo testen", desc: "Kostenloser Zugang zu allen Funktionen. Unverbindlich und ohne Kreditkarte." },
  { icon: Handshake, title: "Gespräch führen", desc: "Offene Fragen klären wir persönlich per Telefon, Video oder vor Ort." },
  { icon: Settings, title: "Onboarding", desc: "Wir richten alles gemeinsam ein. Immobilien, Mieter, Verträge, Dokumente." },
  { icon: Tablet, title: "Tablet installieren", desc: "Wir liefern und montieren das Tablet diebstahlsicher im Treppenhaus." },
  { icon: Key, title: "Zugänge einrichten", desc: "Sie erhalten Ihren Admin-Zugang und jedes Objekt eine eigene Portal-URL." },
  { icon: Mail, title: "Mieter informieren", desc: "Fertige Vorlagen für Anschreiben. Wir helfen bei der Kommunikation." },
  { icon: PartyPopper, title: "Fertig, alles digital", desc: "Ihre Immobilienverwaltung läuft komplett digital. Rund um die Uhr." },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50" id="process">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            In 7 Schritten{" "}
            <span className="gradient-text">komplett digital</span>
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Von der ersten Demo bis zum laufenden Betrieb begleiten wir Sie persönlich.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.slice(0, 4).map((step, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-4 hover:border-primary-200 hover:shadow-sm transition-all">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
                  <step.icon size={16} />
                </div>
                <span className="text-[10px] font-bold text-primary-500">0{i + 1}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">{step.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-4">
          {steps.slice(4).map((step, i) => (
            <div key={i} className={`rounded-xl border p-4 hover:shadow-sm transition-all ${
              i === 2 ? "bg-primary-600 border-primary-500 text-white" : "bg-white border-slate-200 hover:border-primary-200"
            }`}>
              <div className="flex items-center gap-2.5 mb-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  i === 2 ? "bg-white/20 text-white" : "bg-primary-50 text-primary-600"
                }`}>
                  <step.icon size={16} />
                </div>
                <span className={`text-[10px] font-bold ${i === 2 ? "text-white/60" : "text-primary-500"}`}>0{i + 5}</span>
              </div>
              <h3 className={`text-sm font-bold mb-1 ${i === 2 ? "text-white" : "text-slate-900"}`}>{step.title}</h3>
              <p className={`text-xs leading-relaxed ${i === 2 ? "text-white/70" : "text-slate-500"}`}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20">
            Jetzt starten <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
