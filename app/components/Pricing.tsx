"use client";

import { Check, Building2, Tablet, Headphones, Settings, X } from "lucide-react";

export default function Pricing() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-4">
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">
              Transparente Preise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Einfach. Fair.{" "}
            <span className="gradient-text">Planbar.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Basispreis plus Einheiten. Keine versteckten Kosten, keine
            langfristigen Verträge. Günstiger als jede Hausverwaltung — und 24/7 verfügbar.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-900">Starter</h3>
              <p className="text-sm text-slate-500 mt-1">Für kleine Portfolios</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">49</span>
                <span className="text-lg font-semibold text-slate-500">EUR</span>
              </div>
              <div className="text-sm text-slate-500">/ Monat Basispreis</div>
              <div className="mt-2 text-sm text-primary-600 font-semibold">+ 2,90 EUR / Einheit</div>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Bis zu 1 Immobilie",
                "Bis zu 30 Einheiten",
                "Nebenkostenabrechnung",
                "Zahlungsabgleich",
                "Dokumenten-Upload",
                "E-Mail Support",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                  <Check size={16} className="text-accent-500 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="block w-full text-center py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-primary-300 hover:text-primary-600 transition-all">
              Demo anfragen
            </a>
          </div>

          {/* Professional */}
          <div className="bg-white rounded-2xl p-8 border-2 border-primary-600 shadow-xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary-600 text-white text-xs font-bold">
              Beliebteste Wahl
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-900">Professional</h3>
              <p className="text-sm text-slate-500 mt-1">Für wachsende Portfolios</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">99</span>
                <span className="text-lg font-semibold text-slate-500">EUR</span>
              </div>
              <div className="text-sm text-slate-500">/ Monat Basispreis</div>
              <div className="mt-2 text-sm text-primary-600 font-semibold">+ 1,90 EUR / Einheit</div>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Unbegrenzte Immobilien",
                "Bis zu 150 Einheiten",
                "Alles aus Starter",
                "Mieter-Portal + Tablet",
                "Sprachassistent",
                "Mahnwesen automatisiert",
                "Mietpreisanalyse",
                "Prioritäts-Support",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                  <Check size={16} className="text-accent-500 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="block w-full text-center py-3 rounded-xl bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20">
              Demo anfragen
            </a>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-900">Enterprise</h3>
              <p className="text-sm text-slate-500 mt-1">Für große Bestände</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">Individuell</span>
              </div>
              <div className="text-sm text-slate-500 mt-2">Preise nach Volumen</div>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Unbegrenzte Immobilien",
                "Unbegrenzte Einheiten",
                "Alles aus Professional",
                "Mehrere Tablets pro Objekt",
                "API-Zugang",
                "Dedizierter Ansprechpartner",
                "SLA-Garantie",
                "Individuelle Anpassungen",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                  <Check size={16} className="text-accent-500 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="block w-full text-center py-3 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-primary-300 hover:text-primary-600 transition-all">
              Kontakt aufnehmen
            </a>
          </div>
        </div>

        {/* Einmalzahlung / Setup */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Settings size={18} className="text-primary-600" />
                  <h3 className="text-lg font-bold text-slate-900">Einrichtung & Datenmigration</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  Sie möchten, dass wir die komplette Ersteinrichtung übernehmen? Wir migrieren alle
                  Ihre bestehenden Daten — Mieter, Verträge, Dokumente, Zahlungshistorie — und richten
                  ImmoPilot für Sie vollständig ein. Optional, nicht verpflichtend.
                </p>
                <p className="text-xs text-slate-400">
                  Alternativ können Sie die Einrichtung auch komplett selbst vornehmen — kostenlos.
                </p>
              </div>
              <div>
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                    Einmalige Setup-Gebühr
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-slate-800">Basis-Setup</div>
                        <div className="text-xs text-slate-500">Immobilien, Einheiten, Mieter anlegen</div>
                      </div>
                      <span className="text-lg font-extrabold text-slate-900">299 €</span>
                    </div>
                    <div className="border-t border-slate-200" />
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-slate-800">Komplett-Migration</div>
                        <div className="text-xs text-slate-500">Alle Daten, Verträge, Dokumente, Zahlungen</div>
                      </div>
                      <span className="text-lg font-extrabold text-slate-900">599 €</span>
                    </div>
                    <div className="border-t border-slate-200" />
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-slate-800">Selbst einrichten</div>
                        <div className="text-xs text-slate-500">Sie machen alles selbst mit unserer Anleitung</div>
                      </div>
                      <span className="text-lg font-extrabold text-accent-600">Kostenlos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Included extras */}
        <div className="mt-12 max-w-3xl mx-auto">
          <h3 className="text-center text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">
            Bei allen Plänen inklusive
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Tablet, title: "Tablet inklusive", desc: "Kostenloses Tablet für jeden Standort" },
              { icon: Headphones, title: "Persönliches Onboarding", desc: "Wir begleiten Sie bei der Einrichtung" },
              { icon: Building2, title: "Tablet-Installation", desc: "Diebstahlsichere Montage durch uns" },
            ].map((item) => (
              <div key={item.title} className="text-center p-4 rounded-xl bg-white border border-slate-100">
                <item.icon size={20} className="text-primary-600 mx-auto mb-2" />
                <div className="text-sm font-bold text-slate-800">{item.title}</div>
                <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
