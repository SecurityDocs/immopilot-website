"use client";

import { Check, X, Settings } from "lucide-react";

const included = [
  "Persönliches Onboarding inklusive",
  "Tablet für jeden Standort inklusive",
  "Diebstahlsichere Montage durch uns",
  "DSGVO-konform auf deutschen Servern",
];

export default function Pricing() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-4">
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">
              Transparente Preise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Einfach. Fair.{" "}
            <span className="text-primary-600">Planbar.</span>
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Basispreis plus Einheiten. Keine versteckten Kosten, keine langfristigen Bindungen.
          </p>
        </div>

        {/* Cost comparison strip — labelled as Beispiel */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">Beispielrechnung vs. klassische Hausverwaltung</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { we: "10 Einheiten", hv: "350 €/Mon.", immo: "100 €/Mon.", savings: "3.000 €/Jahr" },
              { we: "30 Einheiten", hv: "1.050 €/Mon.", immo: "250 €/Mon.", savings: "9.600 €/Jahr" },
              { we: "50 Einheiten", hv: "1.750 €/Mon.", immo: "350 €/Mon.", savings: "16.800 €/Jahr" },
            ].map(({ we, hv, immo, savings }) => (
              <div key={we} className="bg-white border border-slate-200 rounded-2xl p-5">
                {/* Einheiten-Zahl groß + fett oben */}
                <p className="text-2xl font-extrabold text-slate-900 leading-none mb-0.5">{we.split(" ")[0]}</p>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4">Einheiten — Beispiel</p>
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-xs">Klassische HV</span>
                    <span className="line-through text-slate-400 text-xs">{hv}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-700 font-semibold text-xs">Mit ImmoPilot</span>
                    <span className="font-extrabold text-primary-600 text-base">{immo}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-slate-100 mt-1">
                    <span className="text-xs font-bold text-slate-500">Ersparnis</span>
                    <span className="text-sm font-extrabold text-slate-900">{savings}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {/* Starter */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col">
            <div className="mb-5">
              <h3 className="text-lg font-bold text-slate-900">Starter</h3>
              <p className="text-sm text-slate-500 mt-0.5">Für den Einstieg</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">49</span>
                <span className="text-lg font-semibold text-slate-500">€</span>
              </div>
              <div className="text-xs text-slate-400 mt-0.5">pro Monat Basispreis</div>
              <div className="mt-1.5 text-sm text-primary-600 font-semibold">+ 5 € pro Einheit</div>
            </div>
            <ul className="space-y-2.5 mb-6 flex-1">
              {[
                { text: "Bis zu 30 Einheiten", on: true },
                { text: "Mieterverwaltung", on: true },
                { text: "Zahlungsabgleich (CSV)", on: true },
                { text: "Nebenkostenabrechnung", on: true },
                { text: "Dokumenten-Upload", on: true },
                { text: "E-Mail Support", on: true },
                { text: "Mieter-Portal & Tablet", on: false },
                { text: "KI-Sprachassistent", on: false },
                { text: "Automatisches Mahnwesen", on: false },
                { text: "Mietpreisanalyse", on: false },
              ].map((f) => (
                <li key={f.text} className={`flex items-center gap-2.5 text-sm ${f.on ? "text-slate-600" : "text-slate-300"}`}>
                  {f.on
                    ? <Check size={15} className="text-primary-600 flex-shrink-0" />
                    : <X size={15} className="text-slate-200 flex-shrink-0" />}
                  {f.text}
                </li>
              ))}
              {/* Included for all */}
              <li className="border-t border-slate-100 pt-2.5 mt-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-2">In jedem Plan enthalten</p>
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-slate-500 mb-1.5">
                    <Check size={12} className="text-primary-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </li>
            </ul>
            <a href="#contact" className="block w-full text-center py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-primary-300 hover:text-primary-600 transition-all">
              Demo anfragen
            </a>
          </div>

          {/* Professional */}
          <div className="bg-white rounded-2xl p-7 border-2 border-primary-600 shadow-xl relative flex flex-col">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary-600 text-white text-xs font-bold whitespace-nowrap">
              Empfohlen
            </div>
            <div className="mb-5">
              <h3 className="text-lg font-bold text-slate-900">Professional</h3>
              <p className="text-sm text-slate-500 mt-0.5">Für ernsthafte Eigentümer</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">100</span>
                <span className="text-lg font-semibold text-slate-500">€</span>
              </div>
              <div className="text-xs text-slate-400 mt-0.5">pro Monat Basispreis</div>
              <div className="mt-1.5 text-sm text-primary-600 font-semibold">+ 5 € pro Einheit</div>
            </div>
            <ul className="space-y-2.5 mb-6 flex-1">
              {[
                "Unbegrenzte Immobilien",
                "Bis zu 150 Einheiten",
                "Mieterverwaltung",
                "Zahlungsabgleich + Bankanbindung",
                "Nebenkostenabrechnung",
                "Dokumenten-Upload",
                "Mieter-Portal & Tablet inklusive",
                "KI-Sprachassistent",
                "Automatisches Mahnwesen mit KI",
                "Mietpreisanalyse mit Mietspiegel",
                "KI-Dokumentenanalyse",
                "Prioritäts-Support",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                  <Check size={15} className="text-primary-600 flex-shrink-0" />
                  {f}
                </li>
              ))}
              <li className="border-t border-slate-100 pt-2.5 mt-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-2">In jedem Plan enthalten</p>
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-slate-500 mb-1.5">
                    <Check size={12} className="text-primary-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </li>
            </ul>
            <a href="#contact" className="block w-full text-center py-3 rounded-xl bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20">
              Demo anfragen
            </a>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col">
            <div className="mb-5">
              <h3 className="text-lg font-bold text-slate-900">Enterprise</h3>
              <p className="text-sm text-slate-500 mt-0.5">Ab 150 Einheiten</p>
            </div>
            <div className="mb-6">
              <div className="text-3xl font-extrabold text-slate-900">Individuell</div>
              <div className="text-xs text-slate-400 mt-1">Preise nach Volumen</div>
            </div>
            <ul className="space-y-2.5 mb-6 flex-1">
              {[
                "Unbegrenzte Immobilien",
                "Unbegrenzte Einheiten (150+)",
                "Alles aus Professional",
                "Mehrere Tablets pro Objekt",
                "API-Zugang",
                "Dedizierter Ansprechpartner",
                "SLA-Garantie",
                "Individuelle Anpassungen",
                "Eigenes Branding im Portal",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                  <Check size={15} className="text-primary-600 flex-shrink-0" />
                  {f}
                </li>
              ))}
              <li className="border-t border-slate-100 pt-2.5 mt-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-2">In jedem Plan enthalten</p>
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-slate-500 mb-1.5">
                    <Check size={12} className="text-primary-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </li>
            </ul>
            <a href="#contact" className="block w-full text-center py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-primary-300 hover:text-primary-600 transition-all">
              Kontakt aufnehmen
            </a>
          </div>
        </div>

        {/* Setup info */}
        <div className="mt-10 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <Settings size={16} className="text-primary-600" />
                  <h3 className="text-sm font-bold text-slate-900">Einrichtung & Datenmigration</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Wir übernehmen auf Wunsch die komplette Ersteinrichtung: Immobilien, Mieter, Verträge, Dokumente und Zahlungshistorie. Alternativ richten Sie alles selbst ein — vollständig kostenlos.
                </p>
              </div>
              <div className="sm:text-right flex-shrink-0">
                <div className="text-xl font-extrabold text-slate-900">Individuell</div>
                <div className="text-xs text-slate-500">Einmalig nach Umfang</div>
                <div className="text-xs text-primary-600 font-semibold mt-1">Selbst einrichten: 0 €</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
