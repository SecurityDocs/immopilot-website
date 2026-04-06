"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Check, ChevronRight, Clock, Phone, TrendingUp, Zap } from "lucide-react";

const personas = [
  {
    id: "teuer",
    pill: "Ihre Hausverwaltung ist zu teuer?",
    headline: <>Sie zahlen <span className="text-primary-600">35 € pro Wohnung.</span><br />ImmoPilot kostet 5 €.</>,
    sub: "Unzufrieden, aber keine bessere Alternative gefunden? Das ändert sich jetzt.",
    bullets: [
      "Von bis zu 35 € auf 5 € pro Wohnung — sofort",
      "Alle Funktionen inklusive, keine versteckten Extras",
      "Monatlich kündbar — kein Risiko",
    ],
  },
  {
    id: "selbst",
    pill: "Sie verwalten alles selbst?",
    headline: <>Sie wollen selbst verwalten —<br /><span className="text-primary-600">aber keine Zeit mehr? Oder keine gute Alternative?</span></>,
    sub: "Egal ob Zeitmangel oder fehlende Alternative: ImmoPilot übernimmt die Routine. Sie behalten die Kontrolle.",
    bullets: [
      "Nur noch 2 Stunden Aufwand pro Monat",
      "Keine Mieteranrufe mehr — Selfservice per Tablet",
      "Mahnungen, Abrechnungen & Verträge automatisiert",
    ],
  },
  {
    id: "investor",
    pill: "Ihr Portfolio wächst?",
    headline: <>10 Objekte verwalten <span className="text-primary-600">wie 1 — mit KI.</span></>,
    sub: "ImmoPilot wächst mit Ihrem Portfolio. Kein zusätzlicher Aufwand.",
    bullets: [
      "Alle Objekte & Mieter auf einem Dashboard",
      "Mietpreispotenziale automatisch erkannt",
      "Portfolio-Rendite immer im Blick",
    ],
  },
  {
    id: "erbe",
    pill: "Sie haben geerbt oder neu gekauft?",
    headline: <>Neu als Vermieter? <span className="text-primary-600">Wir führen Sie Schritt für Schritt.</span></>,
    sub: "Kein Papierchaos, keine Telefonate. In 24h einsatzbereit.",
    bullets: [
      "Schritt-für-Schritt Einführung inklusive",
      "Deutsches Mietrecht automatisch eingehalten",
      "Persönlicher Support bis alles läuft",
    ],
  },
];

const stats = [
  { icon: Clock,      value: "< 2h",  label: "Aufwand pro Monat" },
  { icon: Phone,      value: "−80 %", label: "weniger Mieteranrufe" },
  { icon: TrendingUp, value: "5 €",   label: "statt 35 € / Wohnung" },
  { icon: Zap,        value: "24h",   label: "bis zur Einsatzbereitschaft" },
];

export default function Hero() {
  const [activePersona, setActivePersona] = useState(0);
  const [manualPersona, setManualPersona] = useState(false);

  useEffect(() => {
    if (manualPersona) return;
    const t = setInterval(() => setActivePersona((p) => (p + 1) % personas.length), 7000);
    return () => clearInterval(t);
  }, [manualPersona]);

  const persona = personas[activePersona];

  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-36 lg:pb-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-50/60 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">

          <div className="w-full max-w-3xl">
            {/* Persona pills */}
            <div className="flex flex-wrap gap-2 justify-center mb-7">
              {personas.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => { setActivePersona(i); setManualPersona(true); }}
                  className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all ${
                    i === activePersona
                      ? "bg-primary-600 text-white border-primary-600"
                      : "bg-white text-slate-600 border-slate-200 hover:border-primary-300 hover:text-primary-600"
                  }`}
                >
                  {p.pill}
                </button>
              ))}
            </div>

            {/* Headline */}
            <h1
              key={activePersona}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-slate-900"
              style={{ animation: "slide-up 0.3s ease-out forwards" }}
            >
              {persona.headline}
            </h1>

            {/* Sub + Bullets */}
            <div key={`sub-${activePersona}`} style={{ animation: "slide-up 0.35s ease-out forwards" }} className="mt-8">
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                {persona.sub}
              </p>
              <ul className="mt-5 space-y-2.5 text-left inline-block mx-auto">
                {persona.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center">
                      <Check size={11} className="text-white" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary-600 text-white font-semibold text-base hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20"
              >
                Kostenlose Demo anfragen <ArrowRight size={16} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-base hover:border-primary-300 hover:text-primary-600 transition-all"
              >
                Alle Funktionen <ChevronRight size={16} />
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div className="w-full mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-white border border-slate-100 rounded-2xl px-4 py-4 shadow-sm flex flex-col items-center text-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center">
                  <Icon size={18} className="text-primary-600" />
                </div>
                <div className="text-2xl font-extrabold text-slate-900 leading-none">{value}</div>
                <div className="text-xs text-slate-500 leading-tight">{label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
