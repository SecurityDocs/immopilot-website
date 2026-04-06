import type { Metadata } from "next";
import { Building2, Users, ArrowRight, Heart, Lightbulb, Target, Handshake, Mail, MessageSquare, Phone } from "lucide-react";
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
    desc: "Jede Funktion entsteht aus echten Problemen echter Eigentümer. Wir nutzen ImmoPilot selbst täglich — und spüren sofort, wenn etwas nicht stimmt.",
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
    role: "Gründer & CEO",
    desc: "IT-Unternehmer mit über 10 Jahren Erfahrung in Softwareentwicklung und Cloud-Systemen. Eigentümer und frustrierter Vermieter — hat ImmoPilot mitgegründet, weil die Branche eine bessere Lösung verdient.",
    tags: ["Softwareentwicklung", "Cloud-Systeme", "Immobilien"],
  },
];

const timeline = [
  { year: "2018", event: "Erwerb erster Immobilien als Eigentümer" },
  { year: "2021", event: "Erste frustrierende Erfahrungen — Intransparenz, hohe Kosten, kaum Reaktion" },
  { year: "2023", event: "Hausverwaltung kündigt — Entscheidung, es selbst zu bauen" },
  { year: "2024", event: "Erste Version für eigene Objekte entwickelt und täglich getestet" },
  { year: "2025", event: "ImmoPilot öffnet für externe Eigentümer" },
  { year: "2026", event: "KI-Features, Tablet-Integration, Sprachassistent und Briefservice live" },
];

const partners = [
  { name: "Cloud & Hosting", desc: "Serverstandort ausschließlich in Deutschland. ISO 27001-zertifizierter Partner." },
  { name: "KI & Sprachverarbeitung", desc: "Führende KI-Anbieter für Spracherkennung, Textanalyse und Dokumentenverarbeitung." },
  { name: "Brieflogistik", desc: "Lizenzierter Versandpartner für rechtssicheren Briefversand in ganz Deutschland." },
  { name: "Datenschutz & Recht", desc: "Externer Datenschutzbeauftragter und Rechtspartner für DSGVO und deutsches Mietrecht." },
];

export default function UeberUnsPage() {
  return (
    <main className="pt-20 bg-white">

      {/* Hero — dark gradient */}
      <div className="relative bg-slate-950 text-white py-24 lg:py-32 overflow-hidden">
        {/* Decorative gradient orb */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-600/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-primary-500/5 blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-900/60 border border-primary-700/40 px-4 py-1.5 rounded-full mb-6">
              <Building2 size={13} className="text-primary-400" />
              <span className="text-xs font-semibold text-primary-300 uppercase tracking-wider">Über ImmoPilot</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-[1.08]">
              Wir haben das Problem<br />
              <span className="text-primary-400">selbst erlebt.</span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
              ImmoPilot entstand aus echter Frustration — als Eigentümer, nicht als Startup.
              Wir haben jahrelang mit teuren, intransparenten Hausverwaltungen gekämpft. Irgendwann haben wir entschieden: Das machen wir besser.
            </p>
          </div>
          {/* Stat row in hero */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-12 max-w-2xl">
            {[
              { value: "10+", label: "Jahre IT-Erfahrung" },
              { value: "2018", label: "Erste eigene Immobilien" },
              { value: "2026", label: "KI & Tablet live" },
            ].map((s) => (
              <div key={s.value} className="border border-slate-700/60 rounded-2xl px-5 py-4 bg-slate-900/40 backdrop-blur-sm">
                <div className="text-2xl font-extrabold text-white">{s.value}</div>
                <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-6">
                <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">Unsere Vision</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-5 tracking-tight">
                Jeder Eigentümer soll selbst verwalten können.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-4">
                Klassische Hausverwaltungen nehmen 25–40 € pro Wohneinheit — für Dienstleistungen, die mit moderner Technologie auf ein Bruchteil reduziert werden können. Wir glauben: Eigentümer, die es selbst in die Hand nehmen wollen, verdienen ein Werkzeug auf Augenhöhe.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                ImmoPilot ist kein Tool für Verwalter. Es ist ein Tool für Eigentümer, die Kontrolle, Transparenz und Zeit wollen.
              </p>
            </div>
            <div className="space-y-4">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-5 items-start">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center flex-shrink-0 shadow-sm shadow-primary-600/20">
                      <span className="text-xs font-extrabold text-white">{item.year}</span>
                    </div>
                    {i < timeline.length - 1 && <div className="w-0.5 h-4 bg-primary-100" />}
                  </div>
                  <div className="flex-1 pb-1">
                    <p className="text-sm text-slate-700 leading-relaxed pt-2.5">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values — dark stripe */}
      <div className="py-20 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">Was uns antreibt</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">Kein Leitbild für die Wand — sondern Überzeugungen, die jede Entscheidung prägen.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-primary-700/60 transition-all">
                <div className="w-11 h-11 rounded-xl bg-primary-900/60 border border-primary-700/40 flex items-center justify-center mb-4">
                  <v.icon size={20} className="text-primary-400" />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-5">
              <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">Gründer</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Die Köpfe hinter ImmoPilot</h2>
            <p className="text-slate-500 max-w-lg mx-auto text-sm">Zwei Eigentümer. Ein IT-Hintergrund. Ein gemeinsames Ziel.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {team.map((member) => (
              <div key={member.name} className="relative bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:border-primary-300 hover:shadow-lg transition-all overflow-hidden group">
                {/* Subtle bg accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-700 rounded-t-2xl" />
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-primary-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-600/20">
                    <span className="text-xl font-extrabold text-white">{member.initials}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                    <p className="text-sm text-primary-600 font-semibold">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{member.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {member.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-primary-50 text-primary-700 border border-primary-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Extended team */}
          <div className="mt-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-200 flex items-center justify-center flex-shrink-0">
              <Users size={22} className="text-slate-500" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Hinter den Kulissen</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Unterstützt von einem Netzwerk aus erfahrenen Entwicklern, UX-Designern und Immobilienrechtlern.
                Wir glauben an fokussierte Teams statt aufgeblähte Strukturen — und arbeiten mit spezialisierten Partnern für jeden Bereich zusammen.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Technische Partner</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">Bewährte Infrastruktur — damit Sie sich keine Sorgen machen müssen.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {partners.map((p) => (
              <div key={p.name} className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-primary-200 hover:shadow-sm transition-all">
                <h3 className="text-sm font-bold text-slate-900 mb-2">{p.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Erreichbarkeit / Kontakt */}
      <div className="py-20 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-900/60 border border-primary-700/40 px-4 py-1.5 rounded-full mb-6">
            <span className="text-xs font-semibold text-primary-300 uppercase tracking-wider">Immer erreichbar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 tracking-tight">
            Wir sind für Sie da —{" "}
            <span className="text-primary-400">sofort.</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Keine Warteschleife, kein Ticket-System ohne Antwort. Als Gründer sind wir persönlich erreichbar — per E-Mail, WhatsApp oder Telefon.
            Wenn es dringend ist, rufen wir zurück.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
            {[
              { icon: Mail,          label: "E-Mail",    val: "hallo@immopilot.de",      sub: "Antwort innerhalb von 24h" },
              { icon: MessageSquare, label: "WhatsApp",  val: "Direkt chatten",           sub: "Schnellste Route" },
              { icon: Phone,         label: "Telefon",   val: "Rückruf auf Anfrage",      sub: "Persönlich, nicht automatisch" },
            ].map(({ icon: Icon, label, val, sub }) => (
              <div key={label} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-primary-700/60 transition-all">
                <div className="w-10 h-10 rounded-xl bg-primary-900/60 border border-primary-700/40 flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} className="text-primary-400" />
                </div>
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wide mb-1">{label}</div>
                <div className="text-sm font-semibold text-white mb-1">{val}</div>
                <div className="text-[11px] text-slate-500">{sub}</div>
              </div>
            ))}
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-500 transition-colors shadow-lg shadow-primary-600/30 text-base"
          >
            Demo anfragen <ArrowRight size={17} />
          </Link>
        </div>
      </div>

    </main>
  );
}
