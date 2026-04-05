"use client";

import { Check, X, Building2, Tablet, Headphones, Settings } from "lucide-react";

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
            langfristigen Verträge. Günstiger als jede Hausverwaltung.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-900">Starter</h3>
              <p className="text-sm text-slate-500 mt-1">Für den Einstieg</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">49</span>
                <span className="text-lg font-semibold text-slate-500">EUR</span>
              </div>
              <div className="text-sm text-slate-500">pro Monat Basispreis</div>
              <div className="mt-2 text-sm text-primary-600 font-semibold">+ 5 EUR pro Einheit</div>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                { text: "Bis zu 2 Immobilien", included: true },
                { text: "Bis zu 30 Einheiten", included: true },
                { text: "Mieterverwaltung", included: true },
                { text: "Zahlungsabgleich (CSV-Import)", included: true },
                { text: "Nebenkostenabrechnung", included: true },
                { text: "Dokumenten-Upload", included: true },
                { text: "E-Mail Support", included: true },
                { text: "Mieter-Portal und Tablet", included: false },
                { text: "KI-Sprachassistent", included: false },
                { text: "Automatisches Mahnwesen", included: false },
                { text: "Mietpreisanalyse", included: false },
                { text: "KI-Dokumentenanalyse", included: false },
              ].map((f) => (
                <li key={f.text} className={`flex items-center gap-2.5 text-sm ${f.included ? "text-slate-600" : "text-slate-400"}`}>
                  {f.included ? (
                    <Check size={16} className="text-accent-500 flex-shrink-0" />
                  ) : (
                    <X size={16} className="text-slate-300 flex-shrink-0" />
                  )}
                  {f.text}
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
              Empfohlen
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-bold text-slate-900">Professional</h3>
              <p className="text-sm text-slate-500 mt-1">Für Eigentümer die es ernst meinen</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">100</span>
                <span className="text-lg font-semibold text-slate-500">EUR</span>
              </div>
              <div className="text-sm text-slate-500">pro Monat Basispreis</div>
              <div className="mt-2 text-sm text-primary-600 font-semibold">+ 5 EUR pro Einheit</div>
            </div>
            <ul className="space-y-3 mb-8">
              {[
                "Unbegrenzte Immobilien",
                "Bis zu 150 Einheiten",
                "Mieterverwaltung",
                "Zahlungsabgleich (CSV-Import und Bankanbindung)",
                "Nebenkostenabrechnung",
                "Dokumenten-Upload",
                "Mieter-Portal und Tablet inklusive",
                "KI-Sprachassistent",
                "Automatisches Mahnwesen mit KI",
                "Mietpreisanalyse mit Mietspiegel",
                "KI-Dokumentenanalyse und Zuordnung",
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
              <p className="text-sm text-slate-500 mt-1">Ab 150 Einheiten</p>
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
                "Unbegrenzte Einheiten (ab 150)",
                "Alles aus Professional",
                "Mehrere Tablets pro Objekt",
                "API-Zugang",
                "Dedizierter Ansprechpartner",
                "SLA-Garantie",
                "Individuelle Anpassungen",
                "Eigenes Branding im Portal",
                "Individuelle Preisgestaltung",
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

        {/* Setup */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Settings size={18} className="text-primary-600" />
                  <h3 className="text-lg font-bold text-slate-900">Einrichtung und Datenmigration</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Wir übernehmen auf Wunsch die komplette Ersteinrichtung: Immobilien anlegen, Mieter importieren,
                  Verträge und Dokumente migrieren, Zahlungshistorie übertragen. Der Preis richtet sich nach Umfang
                  und Anzahl der Einheiten. Alternativ können Sie alles auch selbst einrichten.
                </p>
              </div>
              <div className="sm:text-right flex-shrink-0">
                <div className="text-2xl font-extrabold text-slate-900">Individuell</div>
                <div className="text-xs text-slate-500 mt-0.5">Einmalige Gebühr je nach Umfang</div>
                <div className="text-xs text-primary-600 font-semibold mt-1">Selbst einrichten: kostenlos</div>
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
