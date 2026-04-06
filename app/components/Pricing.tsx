"use client";

import { Check, X, Zap } from "lucide-react";

// ─── Neue Preis-Logik ───────────────────────────────────────────
// Starter   49€ + 5€/WE bis 20 WE    → Einstieg
// Professional 100€ + 5€/WE bis 100 WE → EMPFOHLEN (Mitte = Anker)
// Scale    150€ + 5€/WE bis 250 WE   → Wachstum
// Enterprise  Individuell 250+ WE

const plans = [
  {
    id: "starter",
    name: "Starter",
    sub: "Für den Einstieg",
    base: 49,
    perUnit: 5,
    limit: "Bis 20 Einheiten",
    highlight: false,
    features: [
      { text: "Bestandsübersicht (manuell anlegen)",  on: true },
      { text: "Ticket-System via Handy",              on: true },
      { text: "Zahlungsabgleich per CSV-Import",      on: true },
      { text: "Rechnungen hochladen + KI-Zuordnung", on: true },
      { text: "Nebenkostenabrechnung",               on: true },
      { text: "Digitale Dokumentendatenbank",        on: true },
      { text: "Bankanbindung (SEPA)",                on: false },
      { text: "KI-Zahlungsabgleich & Mahnwesen",    on: false },
      { text: "Briefservice",                        on: false },
      { text: "Sprachassistent & E-Mail-KI",         on: false },
      { text: "Tablet im Treppenhaus",               on: false },
    ],
    cta: "Demo anfragen",
    ctaStyle: "border",
  },
  {
    id: "professional",
    name: "Professional",
    sub: "Für ernsthafte Eigentümer",
    base: 100,
    perUnit: 5,
    limit: "Bis 100 Einheiten",
    highlight: true,
    badge: "Empfohlen",
    features: [
      { text: "Alles aus Starter",                   on: true },
      { text: "Bankanbindung (SEPA) Live-Abgleich",  on: true },
      { text: "KI-Zahlungsabgleich & Mahnwesen",    on: true },
      { text: "Cashflow-Vorschau & Mietsteigerung", on: true },
      { text: "Finanzierungsdaten & Renditeüberblick", on: true },
      { text: "Briefservice (KI schreibt, Sie klicken)", on: true },
      { text: "KI E-Mail-Auswertung + Vorlagen",    on: true },
      { text: "Sprachassistent (Handy & Tablet)",    on: true },
      { text: "Tablet im Treppenhaus kostenlos ★",   on: true },
      { text: "Mehrere Nutzer / Team-Zugang",        on: false },
      { text: "API-Zugang & White-Label",            on: false },
    ],
    cta: "Demo anfragen",
    ctaStyle: "primary",
  },
  {
    id: "scale",
    name: "Scale",
    sub: "Für wachsende Portfolios",
    base: 150,
    perUnit: 5,
    limit: "Bis 250 Einheiten",
    highlight: false,
    features: [
      { text: "Alles aus Professional",              on: true },
      { text: "Mehrere Nutzer / Team-Zugang",        on: true },
      { text: "Mehrere Tablets pro Objekt",          on: true },
      { text: "Portfolio-Reporting & Analyse",       on: true },
      { text: "Immobilien-Übergabe (ImmoPilot → ImmoPilot)", on: true },
      { text: "White-Label Mieter-Portal",           on: true },
      { text: "API-Zugang",                          on: true },
      { text: "Dedizierter Erfolgsmanager",          on: true },
      { text: "SLA-Garantie",                        on: false },
      { text: "Individuelle Integrationen",          on: false },
    ],
    cta: "Demo anfragen",
    ctaStyle: "border",
  },
];

const includedAll = [
  "Persönliches Onboarding inklusive",
  "DSGVO-konform auf deutschen Servern",
  "Monatlich kündbar — keine Mindestlaufzeit",
  "KI-Import beim Einrichten",
];

// ★ Tablet nur bei Professional + Scale kostenlos (2026)

const examples = [
  { units: 10,  base: 49,  monthly: 99,   yearly: 1188  },
  { units: 30,  base: 100, monthly: 250,  yearly: 3000  },
  { units: 50,  base: 100, monthly: 350,  yearly: 4200  },
];

export default function Pricing() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-4">
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">Transparente Preise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Einfach. Fair. <span className="text-primary-600">Planbar.</span>
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Basispreis plus 5 € pro Einheit. Keine versteckten Kosten.
          </p>
        </div>

        {/* Beispielrechnungen — 10 / 30 / 50 */}
        <div className="max-w-4xl mx-auto mb-14">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
            Beispielrechnung vs. klassische Hausverwaltung (35 €/WE)
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { we: 10,  hv: "350 €",   immo: "99 €",  save: "3.012 €/Jahr",  plan: "Starter" },
              { we: 30,  hv: "1.050 €", immo: "250 €", save: "9.600 €/Jahr",  plan: "Professional" },
              { we: 50,  hv: "1.750 €", immo: "350 €", save: "16.800 €/Jahr", plan: "Professional" },
            ].map(({ we, hv, immo, save, plan }) => (
              <div key={we} className="bg-white border border-slate-200 rounded-2xl p-5">
                <p className="text-3xl font-extrabold text-slate-900 leading-none">{we}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-4">Einheiten — Beispiel</p>
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">Klassische HV</span>
                    <span className="text-xs line-through text-slate-400">{hv}/Mon.</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-slate-700">ImmoPilot ({plan})</span>
                    <span className="text-base font-extrabold text-primary-600">{immo}/Mon.</span>
                  </div>
                  <div className="flex justify-between items-center pt-2.5 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-500">Ersparnis</span>
                    <span className="text-sm font-extrabold text-slate-900">{save}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-7 flex flex-col relative ${
                plan.highlight
                  ? "bg-white border-2 border-primary-600 shadow-2xl shadow-primary-600/10 lg:-mt-4 lg:pb-11"
                  : "bg-white border border-slate-200 shadow-sm"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-primary-600 text-white text-xs font-bold whitespace-nowrap flex items-center gap-1.5">
                  <Zap size={11} />
                  {plan.badge}
                </div>
              )}

              <div className="mb-5 mt-2">
                <h3 className="text-xl font-extrabold text-slate-900">{plan.name}</h3>
                <p className="text-sm text-slate-500 mt-0.5">{plan.sub}</p>
              </div>

              <div className="mb-2">
                <div className="flex items-baseline gap-1">
                  <span className={`font-extrabold ${plan.highlight ? "text-5xl" : "text-4xl"} text-slate-900`}>
                    {plan.base}
                  </span>
                  <span className="text-lg font-semibold text-slate-500">€</span>
                  <span className="text-sm text-slate-400 ml-1">/ Monat</span>
                </div>
                <div className={`text-sm font-bold mt-1.5 ${plan.highlight ? "text-primary-600" : "text-slate-600"}`}>
                  + 5 € pro Einheit
                </div>
              </div>
              <div className={`text-xs font-semibold mb-6 px-2.5 py-1 rounded-lg inline-block w-fit ${
                plan.highlight ? "bg-primary-50 text-primary-700" : "bg-slate-50 text-slate-500"
              }`}>
                {plan.limit}
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f.text} className={`flex items-center gap-2.5 text-sm ${f.on ? "text-slate-700" : "text-slate-300"}`}>
                    {f.on
                      ? <Check size={15} className={plan.highlight ? "text-primary-600 flex-shrink-0" : "text-slate-400 flex-shrink-0"} />
                      : <X size={15} className="text-slate-200 flex-shrink-0" />}
                    {f.text}
                  </li>
                ))}
                <li className="border-t border-slate-100 pt-3 mt-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-2">In jedem Plan inklusive</p>
                  {includedAll.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
                      <Check size={11} className="text-primary-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </li>
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlight
                    ? "bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/20"
                    : "border-2 border-slate-200 text-slate-700 hover:border-primary-300 hover:text-primary-600"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Enterprise */}
        <div className="max-w-5xl mx-auto mt-6">
          <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex-1">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Enterprise</div>
              <h3 className="text-xl font-extrabold mb-1">Ab 250 Einheiten — Individuell</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Alles aus Scale plus SLA-Garantie, individuelle Anpassungen, eigenes Branding, dedizierter Ansprechpartner und unbegrenzte Einheiten. Preis nach Volumen.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold text-sm hover:bg-primary-500 transition-colors whitespace-nowrap">
                Angebot anfragen
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
