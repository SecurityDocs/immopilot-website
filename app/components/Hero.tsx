"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Check, ChevronRight, Clock, Phone, TrendingUp, Zap, Sparkles, Tablet } from "lucide-react";

const personas = [
  {
    id: "teuer",
    tag: "Hausverwaltung zu teuer?",
    headline: <>Sie zahlen <span className="text-primary-600">35 € pro Wohnung.</span><br />Das sind 30 € zu viel.</>,
    sub: "ImmoPilot kostet 5 € — und kann mehr. Bei 10 Wohnungen sparen Sie 300 € jeden Monat. Monatlich kündbar, in 24h startklar.",
    bullets: [
      "30 € gespart pro Wohnung — sofort, ab dem ersten Monat",
      "Alle Funktionen inklusive — keine versteckten Kosten",
      "Monatlich kündbar, kein Risiko",
    ],
  },
  {
    id: "selbst",
    tag: "Selbst verwalten, aber keine Zeit?",
    headline: <>Verwaltung selbst machen —<br /><span className="text-primary-600">aber nicht 8 Stunden pro Woche.</span></>,
    sub: "ImmoPilot übernimmt Mahnungen, Abrechnungen und Mieteranfragen automatisch. Sie behalten die volle Kontrolle — bei nur noch 2 Stunden im Monat.",
    bullets: [
      "Nur noch 2 Stunden Aufwand pro Monat",
      "Keine Mieteranrufe mehr — Self-Service per Tablet",
      "Mahnwesen, NK-Abrechnung & Briefe — automatisch",
    ],
  },
  {
    id: "investor",
    tag: "Portfolio wächst?",
    headline: <>10 Objekte verwalten<br /><span className="text-primary-600">wie 1 — mit KI.</span></>,
    sub: "ImmoPilot wächst mit Ihrem Portfolio. Vom ersten Objekt bis zur 50. Wohneinheit — gleicher Aufwand, voller Überblick.",
    bullets: [
      "Alle Objekte & Mieter auf einem Dashboard",
      "Rendite, Cashflow & Mietpotenziale auf einen Blick",
      "Skaliert von 1 bis 250 Einheiten",
    ],
  },
  {
    id: "erbe",
    tag: "Geerbt oder neu gekauft?",
    headline: <>Frisch Vermieter —<br /><span className="text-primary-600">und kein Papierchaos.</span></>,
    sub: "Kein Vorwissen nötig. ImmoPilot führt Sie Schritt für Schritt — vom ersten Mietvertrag bis zur Nebenkostenabrechnung. In 24h einsatzbereit.",
    bullets: [
      "KI-Import: Dokumente hochladen, Rest erledigt die KI",
      "Deutsches Mietrecht automatisch eingehalten",
      "Persönliches Onboarding — wir sind dabei",
    ],
  },
];

const stats = [
  { icon: Clock,      value: "< 2h",  label: "Aufwand pro Monat" },
  { icon: Phone,      value: "−80 %", label: "weniger Mieteranrufe" },
  { icon: TrendingUp, value: "5 €",   label: "statt 25–40 € / WE" },
  { icon: Zap,        value: "24h",   label: "Einsatzbereit" },
];

const CYCLE_MS = 5500;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min((elapsed / CYCLE_MS) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setActive((a) => (a + 1) % personas.length);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  const persona = personas[active];

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

            {/* Audience tag + progress bar */}
            <div className="flex items-center justify-center gap-3 mb-7">
              <div className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm overflow-hidden">
                {/* Animated progress fill */}
                <div
                  className="absolute left-0 top-0 bottom-0 bg-primary-50 transition-none"
                  style={{ width: `${progress}%` }}
                />
                <span className="relative text-xs font-semibold text-primary-700">{persona.tag}</span>
              </div>
              {/* Dot indicators */}
              <div className="flex items-center gap-1.5">
                {personas.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all ${i === active ? "w-4 h-2 bg-primary-600" : "w-2 h-2 bg-slate-300 hover:bg-slate-400"}`}
                    aria-label={`Zielgruppe ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Headline */}
            <h1
              key={`h-${active}`}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-slate-900"
              style={{ animation: "slide-up 0.3s ease-out forwards" }}
            >
              {persona.headline}
            </h1>

            {/* Sub + Bullets */}
            <div key={`b-${active}`} style={{ animation: "slide-up 0.35s ease-out 0.05s both" }}>
              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
                {persona.sub}
              </p>
              <ul className="mt-5 space-y-2.5 text-left inline-block">
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
              <div className="flex flex-col items-center gap-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary-600 text-white font-bold text-base hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/25"
                >
                  14 Tage kostenlos testen <ArrowRight size={16} />
                </a>
                {/* Trust micro-badges */}
                <div className="flex items-center gap-3 flex-wrap justify-center">
                  <span className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                    <Sparkles size={11} className="text-primary-500" /> KI-gestützt
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                    <Tablet size={11} className="text-amber-500" /> Tablet 2026 gratis
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                    <Check size={11} className="text-emerald-500" /> Monatlich kündbar
                  </span>
                </div>
              </div>
              <a
                href="/#features"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-base hover:border-primary-300 hover:text-primary-600 transition-all"
              >
                Alle Funktionen <ChevronRight size={16} />
              </a>
            </div>

          </div>

          {/* Stats row — gleiche Breite wie Content */}
          <div className="w-full mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-3xl">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="relative overflow-hidden bg-white border border-slate-100 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-3 sm:py-5 shadow-md flex flex-col items-center text-center gap-1.5 sm:gap-2.5 hover:shadow-lg transition-shadow">
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary-600 rounded-t-2xl" />
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary-600 flex items-center justify-center shadow-sm">
                  <Icon size={15} className="text-white sm:hidden" />
                  <Icon size={18} className="text-white hidden sm:block" />
                </div>
                <div className="text-lg sm:text-2xl font-black text-slate-900 leading-none tracking-tight">{value}</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight font-medium">{label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
