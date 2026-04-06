import type { Metadata } from "next";
import { Building2, Users, ArrowRight, Heart, Lightbulb, Target, Handshake } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über uns — ImmoPilot",
  description: "ImmoPilot wurde von zwei deutschen IT-Unternehmern gegründet, die selbst als Eigentümer frustrierende Erfahrungen mit klassischer Hausverwaltung gemacht haben.",
};

const values = [
  {
    icon: Heart,
    title: "Aus eigener Erfahrung",
    desc: "Wir haben selbst erlebt, wie intransparent und teuer klassische Hausverwaltungen sein können. Das war der Auslöser für ImmoPilot — nicht eine Marktanalyse.",
  },
  {
    icon: Lightbulb,
    title: "Technologie mit Sinn",
    desc: "KI und Automatisierung haben bei uns nur einen Zweck: Ihnen Zeit zurückzugeben. Kein Tech-Theater — nur echte Erleichterungen im Alltag.",
  },
  {
    icon: Target,
    title: "Ehrlichkeit statt Versprechen",
    desc: "Wir zeigen was geht, was noch kommt und was nicht. Monatlich kündbar, keine Mindestlaufzeit — weil wir glauben, dass Sie bleiben, wenn es gut ist.",
  },
  {
    icon: Handshake,
    title: "Eigentümer-zuerst",
    desc: "Jede Funktion entsteht aus echten Problemen echter Eigentümer. Wir nutzen ImmoPilot selbst täglich — und spüren, wenn etwas nicht stimmt.",
  },
];

const team = [
  {
    initials: "IK",
    name: "Inan Karagöz",
    role: "Gründer & CEO",
    desc: "IT-Unternehmer mit über 10 Jahren Erfahrung in Cyber Security und Unternehmens-Software. Eigentümer mehrerer Immobilien. Hat ImmoPilot gegründet, weil die eigene Hausverwaltung kündigte — und keine bessere Alternative existierte.",
    tags: ["Cyber Security", "Unternehmensführung", "Immobilien"],
  },
  {
    initials: "FB",
    name: "Faruk Balci",
    role: "Gründer & CTO",
    desc: "Fullstack-Entwickler und Systemarchitekt mit über 10 Jahren Erfahrung in skalierbaren Cloud-Systemen und KI-Integration. Eigentümer und frustrierter Vermieter — verantwortlich für die gesamte technische Architektur von ImmoPilot.",
    tags: ["Fullstack Dev", "Cloud-Architektur", "KI-Integration"],
  },
];

const partners = [
  { name: "Cloud & Hosting", desc: "Serverstandort ausschließlich in Deutschland. ISO 27001-zertifizierter Hosting-Partner." },
  { name: "KI & Sprachverarbeitung", desc: "Kooperationen mit führenden KI-Anbietern für Spracherkennung, Textanalyse und Dokumentenverarbeitung." },
  { name: "Brieflogistik", desc: "Lizenzierter Versandpartner für rechtssicheren Briefversand in ganz Deutschland." },
  { name: "Datenschutz & Recht", desc: "Externe Datenschutzbeauftragter und Rechtspartner für DSGVO-Konformität und deutsches Mietrecht." },
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
              ImmoPilot entstand nicht aus einer Marktlückenanalyse, sondern aus echter Frustration.
              Als Eigentümer von Mehrfamilienhäusern haben wir jahrelang mit teuren, intransparenten und kaum erreichbaren Hausverwaltungen gekämpft.
              Irgendwann haben wir entschieden: Das machen wir besser.
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5 tracking-tight">
                Unsere Vision
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Jeder Eigentümer in Deutschland soll seine Immobilien selbst verwalten können — effizient, digital und ohne Stress. Nicht weil er muss, sondern weil es einfach besser ist.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Klassische Hausverwaltungen nehmen 25–40 € pro Wohneinheit und Monat — für Dienstleistungen, die mit moderner Technologie auf ein Bruchteil reduziert werden können. Wir glauben, dass Eigentümer das selbst in die Hand nehmen können und dabei die vollständige Transparenz behalten.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                ImmoPilot ist kein Tool für Verwalter. Es ist ein Tool für Eigentümer, die Kontrolle wollen.
              </p>
            </div>
            <div className="space-y-5">
              {[
                { year: "2018", event: "Erwerb erster Immobilien als Eigentümer" },
                { year: "2021", event: "Erste frustrierende Erfahrungen mit Hausverwaltungsunternehmen — Intransparenz, hohe Kosten, kaum Reaktion" },
                { year: "2023", event: "Hausverwaltung kündigt — Entscheidung, selbst zu verwalten und eine bessere Lösung zu bauen" },
                { year: "2024", event: "Erste Version von ImmoPilot für eigene Objekte entwickelt und im Alltag getestet" },
                { year: "2025", event: "ImmoPilot wird für andere Eigentümer geöffnet — erste externe Kunden" },
                { year: "2026", event: "KI-Features, Tablet-Integration, Sprachassistent und Briefservice live" },
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
              Werte, die wir nicht auf einer Folie aufgeschrieben haben — sondern in jedem Zeile Code leben.
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

      {/* Team — beide Gründer gleich */}
      <div className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Die Gründer
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              Zwei Eigentümer, ein IT-Hintergrund, ein gemeinsames Ziel.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:border-primary-200 hover:shadow-sm transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-extrabold text-white">{member.initials}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
                    <p className="text-xs text-primary-600 font-semibold">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{member.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {member.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold px-2 py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Hinteres Team */}
          <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                <Users size={20} className="text-slate-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Hinter den Kulissen</h3>
                <p className="text-xs text-slate-500">Unser erweitertes Team & Netzwerk</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Hinter ImmoPilot steht ein Netzwerk aus erfahrenen Softwareentwicklern, UX-Designern und
              Immobilienrechtlern, die uns als freie Mitarbeiter und Berater unterstützen. Wir glauben an
              fokussierte Teams statt aufgeblähte Strukturen — und arbeiten mit spezialisierten Partnern
              für jeden Bereich zusammen.
            </p>
          </div>
        </div>
      </div>

      {/* Partner & Infrastruktur */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Technische Partner
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              Wir bauen auf bewährte Infrastruktur — damit Sie sich keine Sorgen um Sicherheit oder Verfügbarkeit machen müssen.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {partners.map((p) => (
              <div key={p.name} className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-primary-200 transition-all">
                <h3 className="text-sm font-bold text-slate-900 mb-2">{p.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
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
