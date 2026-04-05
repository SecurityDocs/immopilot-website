"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Building2,
  CreditCard,
  Shield,
  Upload,
  Check,
  FileSpreadsheet,
  Users,
  Calculator,
  Wrench,
  TrendingUp,
  Mic,
  Sparkles,
  FileText,
  Send,
  Home,
  Search,
  Plus,
  User,
  Mail,
  Phone,
  Loader2,
  ArrowUp,
} from "lucide-react";
import BrowserMockup from "./BrowserMockup";

const featureSlides = [
  {
    id: "csv",
    label: "KI-Zahlungsabgleich",
    icon: CreditCard,
    url: "zahlungen",
    content: (
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-bold text-slate-800">Zahlungseingang April 2026</h4>
          <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-green-50 text-green-600 font-semibold">38/42 gematcht</span>
        </div>
        <div className="border border-slate-200 rounded-lg overflow-hidden text-[10px]">
          <div className="grid grid-cols-5 gap-1 px-2.5 py-1.5 bg-slate-50 border-b border-slate-200 font-semibold text-slate-500 uppercase text-[8px]">
            <span>Mieter</span><span>Soll</span><span>Eingang</span><span>Status</span><span>Aktion</span>
          </div>
          {[
            { n: "Müller, T.", s: "780 €", e: "780 €", ok: "match" },
            { n: "Schmidt, A.", s: "650 €", e: "650 €", ok: "match" },
            { n: "Weber, L.", s: "750 €", e: "710 €", ok: "diff" },
            { n: "Becker, M.", s: "580 €", e: "—", ok: "miss" },
          ].map((r, i) => (
            <div key={i} className="grid grid-cols-5 gap-1 px-2.5 py-1.5 border-b border-slate-50 last:border-b-0 items-center">
              <span className="font-medium text-slate-800">{r.n}</span>
              <span className="text-slate-600">{r.s}</span>
              <span className={r.ok === "miss" ? "text-red-500 font-semibold" : r.ok === "diff" ? "text-amber-600 font-semibold" : "text-slate-600"}>{r.e}</span>
              <span>{r.ok === "match" ? <span className="px-1 py-0.5 rounded bg-green-50 text-green-600 font-semibold text-[8px]">Match</span> : r.ok === "diff" ? <span className="px-1 py-0.5 rounded bg-amber-50 text-amber-600 font-semibold text-[8px]">-40€</span> : <span className="px-1 py-0.5 rounded bg-red-50 text-red-500 font-semibold text-[8px]">Fehlt</span>}</span>
              <span>{r.ok !== "match" ? <span className="px-1 py-0.5 rounded bg-primary-600 text-white font-semibold text-[8px]">Mahnen</span> : <span className="text-slate-300">—</span>}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 bg-primary-50 border border-primary-100 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5">
          <Sparkles size={10} className="text-primary-600" />
          <span className="text-[9px] text-primary-700">KI hat 2 Mahnschreiben automatisch vorbereitet</span>
        </div>
      </div>
    ),
  },
  {
    id: "mieter-neu",
    label: "Mieter anlegen mit KI",
    icon: Users,
    url: "mieter/neu",
    content: (
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-bold text-slate-800">Neuen Mieter anlegen</h4>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-primary-600 text-white font-semibold flex items-center gap-0.5"><Plus size={8} /> Neu</span>
        </div>
        <div className="space-y-2 mb-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-slate-50 rounded-lg px-2.5 py-2 border border-slate-200">
              <div className="text-[8px] text-slate-400 mb-0.5">Vorname</div>
              <div className="text-[10px] font-medium text-slate-800">Thomas</div>
            </div>
            <div className="bg-slate-50 rounded-lg px-2.5 py-2 border border-slate-200">
              <div className="text-[8px] text-slate-400 mb-0.5">Nachname</div>
              <div className="text-[10px] font-medium text-slate-800">Müller</div>
            </div>
          </div>
          <div className="bg-slate-50 rounded-lg px-2.5 py-2 border border-slate-200">
            <div className="text-[8px] text-slate-400 mb-0.5">E-Mail</div>
            <div className="text-[10px] font-medium text-slate-800">t.mueller@email.de</div>
          </div>
          <div className="bg-primary-50 border border-primary-200 rounded-lg px-2.5 py-2">
            <div className="flex items-center gap-1 mb-1">
              <Upload size={9} className="text-primary-600" />
              <span className="text-[8px] font-semibold text-primary-700">Dokumente hochladen</span>
            </div>
            <div className="flex gap-1.5">
              <div className="bg-white rounded px-1.5 py-1 border border-primary-100 text-[8px] text-primary-700">Mietvertrag.pdf</div>
              <div className="bg-white rounded px-1.5 py-1 border border-primary-100 text-[8px] text-primary-700">Ausweis.pdf</div>
            </div>
          </div>
        </div>
        <div className="bg-primary-50 border border-primary-100 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5">
          <Sparkles size={10} className="text-primary-600" />
          <span className="text-[9px] text-primary-700">KI liest Vertragsdaten aus und füllt Felder automatisch</span>
        </div>
      </div>
    ),
  },
  {
    id: "nk",
    label: "Nebenkostenabrechnung",
    icon: Calculator,
    url: "nebenkostenabrechnung",
    content: (
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"><Check size={12} className="text-white" /></div>
          <div>
            <h4 className="text-xs font-bold text-slate-800">25 Abrechnungen erstellt</h4>
            <p className="text-[9px] text-slate-500">3 Nachzahlungen, 22 Guthaben</p>
          </div>
        </div>
        <div className="border border-slate-200 rounded-lg overflow-hidden text-[10px]">
          <div className="grid grid-cols-4 gap-1 px-2.5 py-1.5 bg-slate-50 border-b border-slate-200 font-semibold text-slate-500 uppercase text-[8px]">
            <span>Mieter</span><span>Vorauszahlung</span><span>Anteil</span><span>Ergebnis</span>
          </div>
          {[
            { n: "Müller, T.", v: "2.400 €", a: "2.180 €", d: "+ 219 €", p: true },
            { n: "Fischer, S.", v: "2.640 €", a: "2.890 €", d: "- 250 €", p: false },
            { n: "Weber, L.", v: "2.160 €", a: "1.980 €", d: "+ 179 €", p: true },
          ].map((r, i) => (
            <div key={i} className="grid grid-cols-4 gap-1 px-2.5 py-1.5 border-b border-slate-50 last:border-b-0">
              <span className="font-medium text-slate-800">{r.n}</span>
              <span className="text-slate-600">{r.v}</span>
              <span className="text-slate-600">{r.a}</span>
              <span className={`font-bold ${r.p ? "text-green-600" : "text-red-500"}`}>{r.d}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "docs",
    label: "Rechnungen mit KI analysieren",
    icon: FileText,
    url: "dokumente",
    content: (
      <div className="p-4">
        <div className="flex items-center gap-1.5 mb-3">
          <Sparkles size={12} className="text-primary-600" />
          <h4 className="text-xs font-bold text-slate-800">Rechnung analysiert</h4>
        </div>
        <div className="bg-primary-50 border border-primary-100 rounded-lg p-3 mb-2">
          <div className="flex items-center gap-2 mb-2">
            <FileText size={12} className="text-primary-600" />
            <span className="text-[10px] font-semibold text-slate-800">Rechnung_Heizungswartung.pdf</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {[
              { l: "Kategorie", v: "Heizungswartung" },
              { l: "Objekt", v: "MFH Rheinufer" },
              { l: "Betrag", v: "1.240,00 €" },
              { l: "Umlagefähig?", v: "Ja — BetrKV §2" },
            ].map((f) => (
              <div key={f.l} className="bg-white rounded px-2 py-1.5 border border-slate-100">
                <div className="text-[8px] text-slate-400">{f.l}</div>
                <div className={`text-[10px] font-bold ${f.l === "Umlagefähig?" ? "text-green-600" : "text-slate-800"}`}>{f.v}</div>
              </div>
            ))}
          </div>
        </div>
        <button className="w-full py-1.5 bg-primary-600 text-white text-[9px] font-semibold rounded-lg flex items-center justify-center gap-1">Vorschlag übernehmen <ArrowRight size={9} /></button>
      </div>
    ),
  },
  {
    id: "mietpreis",
    label: "Mietpreisanalyse",
    icon: TrendingUp,
    url: "mietpreisanalyse",
    content: (
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-bold text-slate-800">Mietpreisanalyse</h4>
          <span className="text-[9px] text-green-600 font-semibold bg-green-50 px-1.5 py-0.5 rounded">+540 €/Mon. Potenzial</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 mb-2">
          <div className="bg-slate-50 rounded-lg p-2 text-center"><div className="text-[8px] text-slate-500">Ø Ist</div><div className="text-sm font-bold text-slate-800">10,02 €</div></div>
          <div className="bg-primary-50 rounded-lg p-2 text-center"><div className="text-[8px] text-primary-600">Spiegel</div><div className="text-sm font-bold text-primary-700">11,50 €</div></div>
          <div className="bg-green-50 rounded-lg p-2 text-center"><div className="text-[8px] text-green-600">Erhöhbar</div><div className="text-sm font-bold text-green-700">4/5</div></div>
        </div>
        <div className="border border-slate-200 rounded-lg overflow-hidden text-[10px]">
          {[
            { n: "Müller, T.", ist: "9,20 €", pot: "+24,9%" },
            { n: "Weber, L.", ist: "8,90 €", pot: "+29,2%" },
            { n: "Hoffmann, S.", ist: "10,00 €", pot: "+15,0%" },
          ].map((r, i) => (
            <div key={i} className="flex items-center justify-between px-2.5 py-1.5 border-b border-slate-50 last:border-b-0">
              <span className="font-medium text-slate-800">{r.n}</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-400">{r.ist} → 11,50 €</span>
                <span className="font-bold text-green-600 flex items-center gap-0.5"><ArrowUp size={8} />{r.pot}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "tickets",
    label: "Tickets und Reparaturen",
    icon: Wrench,
    url: "tickets",
    content: (
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-bold text-slate-800">Offene Tickets</h4>
          <div className="flex gap-1">
            <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-red-50 text-red-600 font-semibold">1 Offen</span>
            <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-600 font-semibold">2 In Arbeit</span>
          </div>
        </div>
        <div className="space-y-1.5">
          {[
            { id: "T-042", t: "Heizung defekt, 2. OG links", von: "Sprachassistent", prio: "hoch", st: "Offen" },
            { id: "T-041", t: "Wasserhahn tropft, EG", von: "Tablet", prio: "mittel", st: "→ Hausmeister" },
            { id: "T-040", t: "Klingel defekt, 3. OG", von: "Handy", prio: "niedrig", st: "→ Elektro Schulz" },
          ].map((tk) => (
            <div key={tk.id} className="bg-white border border-slate-100 rounded-lg p-2.5">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[8px] font-bold text-slate-400">{tk.id}</span>
                <div className={`w-1.5 h-1.5 rounded-full ${tk.prio === "hoch" ? "bg-red-400" : tk.prio === "mittel" ? "bg-amber-400" : "bg-slate-300"}`} />
              </div>
              <div className="text-[10px] font-semibold text-slate-800">{tk.t}</div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[8px] text-slate-400 flex items-center gap-0.5"><Mic size={7} />{tk.von}</span>
                <span className={`text-[8px] font-semibold ${tk.st === "Offen" ? "text-red-500" : "text-primary-600"}`}>{tk.st}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % featureSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const slide = featureSlides[activeSlide];

  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: Titel → Mockup → Text. Desktop: 2-Spalten */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left column: On mobile shows title first, then mockup is below, then rest */}
          <div className="max-w-xl order-1">
            {/* Badge + Title — always first */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-4">
              <Sparkles size={14} className="text-primary-600" />
              <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">
                KI-gestützte Hausverwaltung Software
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900">
              Immobilien&shy;verwaltung.{" "}
              <span className="gradient-text">Komplett digital. Mit KI.</span>
            </h1>

            {/* Mockup: On mobile shows right after title. On desktop hidden (shown in right col) */}
            <div className="mt-6 lg:hidden">
              <BrowserMockup url={`app.immopilot.de/${slide.url}`}>
                <div key={`m-${activeSlide}`} style={{ animation: "slide-up 0.3s ease-out forwards" }} className="min-h-[280px]">
                  {slide.content}
                </div>
              </BrowserMockup>
              <div className="flex items-center justify-between mt-3 px-1">
                <div className="flex items-center gap-2">
                  <slide.icon size={12} className="text-primary-600" />
                  <span className="text-[11px] font-semibold text-slate-600">{slide.label}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {featureSlides.map((_, i) => (
                    <button key={i} onClick={() => setActiveSlide(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeSlide ? "w-5 bg-primary-600" : "w-1.5 bg-slate-300"}`} />
                  ))}
                </div>
              </div>
            </div>

            {/* Text + Buttons — after mockup on mobile */}
            <p className="mt-8 lg:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal">
              Schluss mit teuren Hausverwaltungen, Papierchaos und Excel-Listen.
              ImmoPilot ist die intelligente Software für Immobilienverwaltung,
              Mieterverwaltung und Nebenkostenabrechnung. Verwalten Sie Ihre
              Mietwohnungen und Mehrfamilienhäuser selbst, <strong>rund um die Uhr verfügbar</strong>,
              DSGVO-konform und gehostet auf deutschen Servern.
            </p>

            <div className="mt-8 lg:mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary-600 text-white font-semibold text-base hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/25">
                Kostenlose Demo <ArrowRight size={16} />
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-base hover:border-primary-300 hover:text-primary-600 transition-all">
                Alle Funktionen
              </a>
            </div>

            <div className="mt-8 lg:mt-6 flex flex-wrap items-center gap-2.5">
              {[
                { icon: Shield, label: "DSGVO-konform" },
                { icon: Sparkles, label: "KI-gestützt" },
                { icon: Building2, label: "Deutsche Server" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100">
                  <badge.icon size={13} className="text-primary-600" />
                  <span className="text-xs font-semibold text-slate-600">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Desktop-only mockup */}
          <div className="hidden lg:block order-2">
            <BrowserMockup url={`app.immopilot.de/${slide.url}`}>
              <div key={activeSlide} style={{ animation: "slide-up 0.35s ease-out forwards" }} className="min-h-[300px]">
                {slide.content}
              </div>
            </BrowserMockup>

            <div className="flex items-center justify-between mt-4 px-1">
              <div className="flex items-center gap-2">
                <slide.icon size={13} className="text-primary-600" />
                <span className="text-xs font-semibold text-slate-600">{slide.label}</span>
              </div>
              <div className="flex items-center gap-1.5">
                {featureSlides.map((_, i) => (
                  <button key={i} onClick={() => setActiveSlide(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeSlide ? "w-6 bg-primary-600" : "w-1.5 bg-slate-300 hover:bg-slate-400"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
