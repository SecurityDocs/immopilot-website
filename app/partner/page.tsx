"use client";

import { useState } from "react";
import { Building2, Users, Wrench, Check, ArrowRight, Euro, TrendingUp, Star, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

// Earnings calculator data
const earningsTable = [
  { kunden: 1, starter: 150, professional: 300, scale: 450 },
  { kunden: 3, starter: 450, professional: 900, scale: 1350 },
  { kunden: 5, starter: 750, professional: 1500, scale: 2250 },
  { kunden: 10, starter: 1500, professional: 3000, scale: 4500 },
  { kunden: 20, starter: 3000, professional: 6000, scale: 9000 },
];

const partnerTypes = [
  {
    icon: Building2,
    name: "Makler & Immobilienprofis",
    tag: "Einmalige Provision",
    headline: "Bis zu 450 € pro erfolgreichem Abschluss",
    desc: "Sie kennen Eigentümer, die gerade kaufen, erben oder ihre Hausverwaltung wechseln wollen? Empfehlen Sie ImmoPilot — wir zahlen bei Vertragsabschluss.",
    features: [
      "150 € bei Starter-Abschluss",
      "300 € bei Professional-Abschluss",
      "450 € bei Scale-Abschluss",
      "90 Tage Tracking-Fenster",
      "Monatliche Auszahlung per Überweisung",
    ],
  },
  {
    icon: Users,
    name: "Creator & Influencer",
    tag: "Monatliche Provision",
    headline: "10 % der Abo-Gebühr — dauerhaft",
    desc: "Sie haben eine Community aus Immobilienbesitzern oder Investoren? Verdienen Sie jeden Monat, solange Ihr geworbener Kunde zahlt.",
    features: [
      "10 % der monatlichen Abo-Gebühr",
      "Läuft so lange der Kunde aktiv ist",
      "Eigenes Tracking-Dashboard",
      "Content-Support & Werbematerialien",
      "90 Tage Attribution",
    ],
  },
  {
    icon: Wrench,
    name: "Handwerker & Dienstleister",
    tag: "Provision + Gratis-Eintrag",
    headline: "Bis zu 225 € + kostenloser Verzeichniseintrag",
    desc: "Als Handwerker empfehlen Sie ImmoPilot und werden automatisch in unserem Dienstleister-Verzeichnis eingetragen — für direkte Anfragen von ImmoPilot-Kunden.",
    features: [
      "75 € bei Starter-Abschluss",
      "150 € bei Professional-Abschluss",
      "225 € bei Scale-Abschluss",
      "Kostenloser Eintrag im Dienstleister-Verzeichnis",
      "Direkte Auftragsanfragen von Eigentümern",
    ],
  },
];

const steps = [
  { nr: "01", title: "Anmelden", desc: "Formular unten ausfüllen. Partnerlink innerhalb von 24h." },
  { nr: "02", title: "Empfehlen", desc: "Link teilen — per E-Mail, Social Media oder persönlich." },
  { nr: "03", title: "Verfolgen", desc: "Klicks, Anfragen und Abschlüsse im Dashboard sehen." },
  { nr: "04", title: "Verdienen", desc: "Monatliche Auszahlung per Überweisung, ohne Mindestbetrag." },
];

export default function PartnerPage() {
  const [activeType, setActiveType] = useState(0);
  const [partnerTypeSelect, setPartnerTypeSelect] = useState("Makler / Immobilienmakler");

  return (
    <main className="pt-20">

      {/* Hero */}
      <div className="bg-slate-950 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-900/60 border border-primary-700/40 px-4 py-1.5 rounded-full mb-6">
                <Star size={13} className="text-primary-400" />
                <span className="text-xs font-semibold text-primary-300 uppercase tracking-wider">Partner-Programm</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 tracking-tight leading-[1.1]">
                Empfehlen.<br />
                <span className="text-primary-400">Verdienen.</span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                Kennen Sie Immobilieneigentümer? Werden Sie ImmoPilot-Partner und verdienen Sie attraktive Provisionen — einmalig oder monatlich wiederkehrend.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#anmelden" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-primary-500 transition-colors">
                  Jetzt Partner werden <ArrowRight size={16} />
                </a>
                <a href="#rechner" className="inline-flex items-center justify-center gap-2 border border-slate-700 text-slate-300 font-semibold px-7 py-3.5 rounded-xl hover:border-slate-500 hover:text-white transition-colors">
                  Verdienst berechnen <ChevronRight size={16} />
                </a>
              </div>
            </div>

            {/* Right: Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "450 €", label: "Einmalig pro Scale-Abschluss", icon: Euro },
                { value: "10 %", label: "Monatliche Provision für Creator", icon: TrendingUp },
                { value: "24h", label: "Bis zur Freischaltung Ihres Partnerlinks", icon: Star },
                { value: "0 €", label: "Kosten — für Partner vollständig kostenlos", icon: Check },
              ].map((stat) => (
                <div key={stat.value} className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-400 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Earnings Calculator */}
      <div id="rechner" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-5">
              <Euro size={13} className="text-primary-600" />
              <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">Verdienst-Rechner</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Was können Sie verdienen?
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Wie viel Sie mit ImmoPilot verdienen, hängt davon ab, wie viele Kunden Sie empfehlen — und welches Paket sie wählen.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 gap-0 border-b border-slate-200">
              <div className="px-4 py-4 bg-slate-100">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Kunden</p>
              </div>
              <div className="px-4 py-4 border-l border-slate-200">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Starter</p>
                <p className="text-xs text-slate-400">150 € / Abschluss</p>
              </div>
              <div className="px-4 py-4 border-l border-slate-200 bg-primary-50">
                <p className="text-xs font-bold text-primary-600 uppercase tracking-wide">Professional</p>
                <p className="text-xs text-primary-400">300 € / Abschluss</p>
              </div>
              <div className="px-4 py-4 border-l border-slate-200">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wide">Scale</p>
                <p className="text-xs text-slate-400">450 € / Abschluss</p>
              </div>
            </div>
            {earningsTable.map((row, i) => (
              <div key={row.kunden} className={`grid grid-cols-4 gap-0 border-b border-slate-100 last:border-b-0 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                <div className="px-4 py-4 flex items-center">
                  <span className="text-base font-bold text-slate-900">{row.kunden} {row.kunden === 1 ? "Kunde" : "Kdn."}</span>
                </div>
                <div className="px-4 py-4 border-l border-slate-100 flex items-center">
                  <span className="text-base font-semibold text-slate-700">{row.starter.toLocaleString("de-DE")} €</span>
                </div>
                <div className="px-4 py-4 border-l border-slate-100 bg-primary-50/50 flex items-center">
                  <span className="text-base font-bold text-primary-700">{row.professional.toLocaleString("de-DE")} €</span>
                </div>
                <div className="px-4 py-4 border-l border-slate-100 flex items-center">
                  <span className="text-base font-semibold text-slate-800">{row.scale.toLocaleString("de-DE")} €</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-amber-600 font-medium mt-4 mb-1">Hinweis: Provisionen werden erst ausgezahlt, wenn der geworbene Kunde mindestens 3 Monate aktiv bleibt.</p>
          <p className="text-center text-xs text-slate-400 mt-1">
            Für Creator/Influencer gilt: 10 % der monatlichen Abo-Gebühr, dauerhaft wiederkehrend. Beispiel: 10 Kunden × 250 €/Monat × 10 % = 250 €/Monat passives Einkommen.
          </p>
        </div>
      </div>

      {/* Partner Types — Tab-based */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Für wen ist das Programm?
            </h2>
            <p className="text-slate-500">Drei Modelle — wählen Sie das passende für sich.</p>
          </div>

          {/* Type tabs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            {partnerTypes.map((pt, i) => (
              <button
                key={pt.name}
                onClick={() => setActiveType(i)}
                className={`flex-1 text-left px-4 py-3 rounded-xl border transition-all ${
                  i === activeType
                    ? "bg-primary-600 border-primary-600 text-white"
                    : "bg-white border-slate-200 text-slate-700 hover:border-primary-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <pt.icon size={18} className={i === activeType ? "text-white" : "text-primary-600"} />
                  <div>
                    <div className={`text-sm font-bold ${i === activeType ? "text-white" : "text-slate-800"}`}>{pt.name}</div>
                    <div className={`text-xs mt-0.5 ${i === activeType ? "text-primary-200" : "text-slate-400"}`}>{pt.tag}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active type content */}
          {(() => {
            const pt = partnerTypes[activeType];
            const Icon = pt.icon;
            return (
              <div className="bg-white border border-slate-200 rounded-2xl p-7 lg:p-10" key={activeType} style={{ animation: "slide-up 0.25s ease-out forwards" }}>
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                      <Icon size={22} className="text-primary-600" />
                    </div>
                    <span className="text-xs font-bold text-primary-600 uppercase tracking-wide">{pt.tag}</span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2 mb-3">{pt.headline}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{pt.desc}</p>
                    <a href="#anmelden" className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-colors">
                      Jetzt bewerben <ArrowRight size={14} />
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-4">Was Sie bekommen</p>
                    <ul className="space-y-3">
                      {pt.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                          <div className="w-5 h-5 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={11} className="text-primary-600" />
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      {/* How it works */}
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold text-slate-900 mb-4">So einfach funktioniert es</h2>
          <p className="text-center text-slate-500 text-sm mb-10">In 4 Schritten zum eigenen Partnerlink — kostenlos, kein Risiko.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map(({ nr, title, desc }) => (
              <div key={nr} className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-primary-200 hover:shadow-sm transition-all group">
                <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <span className="text-sm font-extrabold text-white">{nr}</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-1.5 text-sm">{title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sign-up form */}
      <div id="anmelden" className="py-20 bg-slate-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Jetzt Partner werden</h2>
            <p className="text-slate-500 text-sm">Wir melden uns innerhalb von 24h mit Ihrem persönlichen Partnerlink.</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-5 shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Vorname *</label>
                <input type="text" required placeholder="Max" className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Nachname *</label>
                <input type="text" required placeholder="Mustermann" className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">E-Mail *</label>
              <input type="email" required placeholder="max@beispiel.de" className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Ich bin … *</label>
              <select
                required
                value={partnerTypeSelect}
                onChange={(e) => setPartnerTypeSelect(e.target.value)}
                className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
              >
                <option>Makler / Immobilienmakler</option>
                <option>Influencer / Content Creator</option>
                <option>Handwerker / Dienstleister</option>
                <option>Sonstiges</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Website / Social Media (optional)</label>
              <input type="url" placeholder="https://…" className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white" />
            </div>
            <button type="submit" className="w-full py-3.5 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all flex items-center justify-center gap-2 text-sm">
              Partner-Anfrage absenden <ArrowRight size={16} />
            </button>
            <p className="text-[10px] text-slate-400 text-center">Kostenlos & unverbindlich. Wir prüfen Ihre Anfrage und melden uns innerhalb von 24h.</p>
          </div>
        </div>
      </div>

    </main>
  );
}
