import type { Metadata } from "next";
import { Shield, Server, Building2, Users, ArrowRight, Code, Heart } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns — ImmoPilot",
  description: "ImmoPilot wurde von einem deutschen IT-Unternehmen gegründet, das selbst als Eigentümer schlechte Erfahrungen mit Hausverwaltungen gemacht hat. DSGVO-konform, Made in Germany.",
};

const values = [
  {
    icon: Heart,
    title: "Aus eigener Erfahrung",
    desc: "Wir haben selbst erlebt, wie intransparent, teuer und schwer erreichbar klassische Hausverwaltungen sein können. Das war der Auslöser für ImmoPilot.",
  },
  {
    icon: Code,
    title: "IT-Expertise seit über 10 Jahren",
    desc: "Unser Team kommt aus Cyber Security und Enterprise-Software. Wir wissen, wie man stabile, sichere Systeme baut — und wenden das auf Hausverwaltung an.",
  },
  {
    icon: Shield,
    title: "Datenschutz ist keine Option",
    desc: "DSGVO-Konformität ist für uns selbstverständlich. Alle Daten werden nach deutschem Recht verarbeitet, KI-Training nur mit anonymisierten Informationen.",
  },
  {
    icon: Server,
    title: "Deutsches Hosting",
    desc: "Ihre Mieterdaten, Verträge und Dokumente liegen ausschließlich auf Servern in Deutschland. Kein Datentransfer in Drittländer.",
  },
];

const team = [
  {
    initials: "IK",
    name: "Inan K.",
    role: "Gründer & CEO",
    desc: "IT-Unternehmer mit über 10 Jahren Erfahrung in Cyber Security und Softwareentwicklung. Eigentümer mehrerer Immobilien und frustriert von klassischer Hausverwaltung — so entstand die Idee für ImmoPilot.",
  },
  {
    initials: "FB",
    name: "Faruk Balci",
    role: "Gründer & CEO",
    desc: "Fullstack-Entwickler und Systemarchitekt mit tiefer Expertise in skalierbaren Cloud-Infrastrukturen und KI-Integration. Verantwortlich für die technische Architektur von ImmoPilot.",
  },
];

export default function UeberUnsPage() {
  return (
    <main className="pt-20">

      {/* Hero */}
      <div className="bg-slate-950 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-900/50 border border-primary-700/40 px-4 py-1.5 rounded-full mb-6">
              <Building2 size={13} className="text-primary-400" />
              <span className="text-xs font-semibold text-primary-300 uppercase tracking-wider">Über ImmoPilot</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 tracking-tight leading-[1.1]">
              Wir haben das Problem<br />
              <span className="text-primary-400">selbst erlebt.</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              ImmoPilot entstand nicht in einem Startup-Inkubator, sondern aus echter Frustration: Als Eigentümer von Mehrfamilienhäusern haben wir jahrelang mit teuren, intransparenten und schwer erreichbaren Hausverwaltungen gekämpft. Irgendwann haben wir entschieden: Das machen wir besser.
            </p>
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Die Geschichte hinter ImmoPilot
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Wir sind ein deutsches IT-Unternehmen mit Schwerpunkt auf Cyber Security und Unternehmens-Software. Seit über 10 Jahren entwickeln wir Systeme, auf die Unternehmen sich verlassen können.
                </p>
                <p>
                  Als wir selbst Immobilien erwarben, stießen wir schnell auf ein massives Problem: Die Hausverwaltungsbranche ist antiquiert. Papierkram statt Digitalisierung, Telefonate statt Self-Service, intransparente Abrechnungen, monatelange Reaktionszeiten. Und das alles für 25–40 € pro Wohneinheit und Monat.
                </p>
                <p>
                  Als unsere eigene Hausverwaltung schließlich kündigte, war die Entscheidung klar: Wir bauen es selbst. Mit allem, was wir an IT-Wissen mitbringen — KI, Automatisierung, sichere Systeme, deutsche Server, DSGVO-Konformität.
                </p>
                <p>
                  ImmoPilot ist das Ergebnis. Nicht ein Produkt, das wir von außen gebaut haben, sondern eines, das wir selbst täglich nutzen — und das mit den echten Schmerzen echter Eigentümer entstanden ist.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              {[
                { year: "2018", event: "Erwerb erster Immobilien als Eigentümer" },
                { year: "2021", event: "Erste frustrierende Erfahrungen mit Hausverwaltungsunternehmen" },
                { year: "2023", event: "Hausverwaltung kündigt — Entscheidung, selbst zu verwalten" },
                { year: "2024", event: "Erste Version von ImmoPilot für eigene Objekte entwickelt" },
                { year: "2025", event: "ImmoPilot wird für andere Eigentümer geöffnet" },
                { year: "2026", event: "KI-Features, Tablet-Integration und Sprachassistent live" },
              ].map((item) => (
                <div key={item.year} className="flex gap-5 items-start">
                  <div className="text-sm font-extrabold text-primary-600 w-12 flex-shrink-0 pt-0.5">{item.year}</div>
                  <div className="flex-1 pb-5 border-b border-slate-100 last:border-b-0">
                    <p className="text-sm text-slate-700 leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Was uns antreibt
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              Werte, die wir nicht auf einer Folie aufgeschrieben haben, sondern in jedem Zeile Code leben.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-primary-200 hover:shadow-sm transition-all">
                <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <v.icon size={20} className="text-primary-600" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-10">Das Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-600 flex items-center justify-center mb-4">
                  <span className="text-lg font-extrabold text-white">{member.initials}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
                <p className="text-xs text-primary-600 font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{member.desc}</p>
              </div>
            ))}
            {/* Placeholder: We're growing */}
            <div className="bg-slate-50 border border-dashed border-slate-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
                <Users size={24} className="text-slate-400" />
              </div>
              <h3 className="text-sm font-bold text-slate-700 mb-1">Wir wachsen</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Wir suchen Menschen, die Lust haben, die Hausverwaltungsbranche zu verändern.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical infrastructure */}
      <div className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-extrabold text-white mb-4">Technische Infrastruktur</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Wir nehmen Datenschutz ernst — nicht als Compliance-Checkbox, sondern als Versprechen an unsere Nutzer.
                </p>
                <ul className="space-y-3">
                  {[
                    "Hosting ausschließlich in Deutschland (ISO 27001-zertifiziert)",
                    "DSGVO-konform — kein Datentransfer in Drittländer",
                    "KI-Training nur mit vollständig anonymisierten Daten",
                    "Ende-zu-Ende-Verschlüsselung für sensible Dokumente",
                    "Regelmäßige Sicherheitsaudits durch externes Pentesting",
                    "Datenlöschung auf Anfrage innerhalb von 30 Tagen",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-primary-900 border border-primary-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Shield size={9} className="text-primary-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Serverstandort", value: "Deutschland (Frankfurt)" },
                  { label: "Datenschutz", value: "DSGVO-konform" },
                  { label: "Zertifizierung", value: "ISO 27001 Hosting-Partner" },
                  { label: "KI-Training", value: "Nur anonymisierte Daten" },
                  { label: "Verschlüsselung", value: "TLS 1.3 + AES-256" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-3 border-b border-slate-800 last:border-b-0">
                    <span className="text-sm text-slate-400">{row.label}</span>
                    <span className="text-sm font-semibold text-white">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Überzeugt? Lernen Sie ImmoPilot kennen.</h2>
          <p className="text-slate-500 text-sm mb-7">Kostenlose Demo, kein Risiko, keine Kreditkarte nötig.</p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20"
          >
            Demo anfragen <ArrowRight size={16} />
          </Link>
        </div>
      </div>

    </main>
  );
}
