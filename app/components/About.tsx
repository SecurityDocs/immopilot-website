"use client";

import {
  Shield,
  Code,
  Building2,
  Lock,
  Server,
  Sparkles,
} from "lucide-react";

const milestones = [
  {
    year: "Die Anfänge",
    title: "IT-Unternehmen mit Leidenschaft für Immobilien",
    text: "Wir sind ein erfahrenes IT-Unternehmen mit einem Schwerpunkt auf Softwareentwicklung und Cyber Security. Neben unserem Kerngeschäft haben wir uns schon früh für Immobilien als Kapitalanlage interessiert und unsere erste Eigentumswohnung in einer Wohnungseigentümergemeinschaft erworben.",
  },
  {
    year: "Die Erfahrung",
    title: "Schlechte Hausverwaltungen am eigenen Leib erlebt",
    text: "In der Eigentümergemeinschaft haben wir alles erlebt, was man als Eigentümer nicht erleben möchte. Die Hausverwaltung war kaum erreichbar, Nebenkostenabrechnungen waren fehlerhaft und Reparaturen wurden monatelang verschleppt. Wir mussten die Verwaltung mehrfach wechseln, aber auch die neuen Verwalter hatten dieselben Probleme. Keine Transparenz bei Handwerkeraufträgen, keine digitalen Prozesse, keine zeitgemäße Kommunikation.",
  },
  {
    year: "Die Entscheidung",
    title: "Eigene Mehrfamilienhäuser, eigene Lösung",
    text: "Als wir dann selbst große Mehrfamilienhäuser mit über 150 Einheiten gekauft haben, war klar: Wir brauchen eine eigene Lösung. Keine der vorhandenen Immobilienverwaltung Software am Markt konnte das, was wir brauchten. Also haben wir als IT-Unternehmen getan, was wir am besten können. Wir haben die Software selbst gebaut, die wir als Eigentümer immer vermisst haben.",
  },
  {
    year: "Heute",
    title: "ImmoPilot: Von Eigentümern für Eigentümer",
    text: "ImmoPilot nutzen wir heute selbst für die Verwaltung unserer eigenen Immobilien. Jede Funktion wurde aus echten Erfahrungen und echten Problemen heraus entwickelt. Jetzt stellen wir die Software auch anderen Eigentümern und Verwaltern von Mehrfamilienhäusern zur Verfügung. Damit niemand mehr dieselben Erfahrungen machen muss wie wir.",
  },
];

const values = [
  {
    icon: Sparkles,
    title: "KI-gestützt und DSGVO-konform",
    text: "Unsere KI-Funktionen werden ausschlie��lich mit anonymisierten Daten trainiert. Alle personenbezogenen Daten bleiben geschützt und werden niemals für das Training von KI-Modellen verwendet. Die Plattform erfüllt alle Anforderungen der DSGVO und wird regelmäßig geprüft.",
  },
  {
    icon: Server,
    title: "Deutsche Server, deutsche Daten",
    text: "ImmoPilot wird ausschlie��lich auf Servern in Deutschland gehostet. Ihre Immobiliendaten, Mietverträge und Dokumente verlassen niemals das Land. Wir setzen auf höchste Sicherheitsstandards aus unserer langjährigen Erfahrung im Bereich Cyber Security.",
  },
  {
    icon: Lock,
    title: "Datenschutz und Sicherheit als Grundprinzip",
    text: "Als Unternehmen mit Wurzeln in der IT-Security nehmen wir den Schutz Ihrer Daten besonders ernst. Verschlüsselte Übertragung, sichere Authentifizierung und regelmäßige Sicherheitsprüfungen sind bei uns selbstverständlich.",
  },
  {
    icon: Code,
    title: "Kontinuierliche Weiterentwicklung",
    text: "ImmoPilot wird ständig weiterentwickelt. Neue Funktionen basieren auf echtem Feedback von Eigentümern und Verwaltern. Wir veröffentlichen regelmäßig Updates und verbessern die KI-Modelle laufend, damit die Software immer besser wird.",
  },
];

export default function About() {
  return (
    <section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Gebaut von Eigentümern.{" "}
            <span className="gradient-text">Für Eigentümer.</span>
          </h2>
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-slate-800">
                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary-500 -translate-x-[7px]" />
                <div className="text-xs font-bold text-primary-400 uppercase tracking-wider mb-2">{m.year}</div>
                <h3 className="text-lg font-bold text-white mb-2">{m.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{m.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values / Trust */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {values.map((v) => (
            <div key={v.title} className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                <v.icon size={20} className="text-primary-400" />
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{v.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
