"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Building2,
  Shield,
  Sparkles,
  CreditCard,
  Users,
  Calculator,
  Wrench,
  TrendingUp,
  Check,
  Mic,
  ChevronRight,
  ArrowUp,
  Plus,
} from "lucide-react";
import BrowserMockup from "./BrowserMockup";

// ─────────────────────────────────────────────
// 4 Zielgruppen-Personas
// ─────────────────────────────────────────────
const personas = [
  {
    id: "teuer",
    pill: "Hausverwaltung zu teuer?",
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
    pill: "Alles selbst verwalten?",
    headline: <>Selbst verwalten, aber <span className="text-primary-600">keine Zeit mehr</span> dafür?</>,
    sub: "ImmoPilot übernimmt die Routine — Sie behalten die Kontrolle.",
    bullets: [
      "Nur noch 2 Stunden Aufwand pro Monat",
      "Keine Mieteranrufe mehr — Selfservice per Tablet",
      "Mahnungen, Abrechnungen & Verträge automatisiert",
    ],
  },
  {
    id: "investor",
    pill: "Portfolio wächst?",
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
    pill: "Geerbt oder gekauft?",
    headline: <>Neu als Vermieter? <span className="text-primary-600">Wir führen Sie Schritt für Schritt.</span></>,
    sub: "Kein Papierchaos, keine Telefonate. In 24h einsatzbereit.",
    bullets: [
      "Schritt-für-Schritt Einführung inklusive",
      "Deutsches Mietrecht automatisch eingehalten",
      "Persönlicher Support bis alles läuft",
    ],
  },
];

// ─────────────────────────────────────────────
// Demo-Slides für den Browser-Mockup
// ─────────────────────────────────────────────
const slides = [
  {
    id: "csv",
    label: "KI-Zahlungsabgleich",
    icon: CreditCard,
    url: "zahlungen",
    content: (
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-bold text-slate-800">Zahlungseingang April 2026</h4>
          <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-primary-50 text-primary-600 font-semibold border border-primary-100">38/42 gematcht</span>
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
              <span>{r.ok === "match" ? <span className="px-1 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold text-[8px]">Match</span> : r.ok === "diff" ? <span className="px-1 py-0.5 rounded bg-amber-50 text-amber-600 font-semibold text-[8px]">-40€</span> : <span className="px-1 py-0.5 rounded bg-red-50 text-red-500 font-semibold text-[8px]">Fehlt</span>}</span>
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
    id: "mieter",
    label: "Mieterverwaltung",
    icon: Users,
    url: "mieter",
    content: (
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-bold text-slate-800">Mieterübersicht</h4>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-primary-600 text-white font-semibold flex items-center gap-0.5"><Plus size={8} /> Neu</span>
        </div>
        <div className="space-y-1.5">
          {[
            { name: "Müller, Thomas", whg: "1. OG links", miete: "780 €", ok: true },
            { name: "Schmidt, Anna", whg: "2. OG rechts", miete: "650 €", ok: true },
            { name: "Weber, Laura", whg: "3. OG links", miete: "750 €", ok: false },
            { name: "Becker, Michael", whg: "1. OG rechts", miete: "580 €", ok: true },
          ].map((m, i) => (
            <div key={i} className="flex items-center gap-2 px-2.5 py-2 bg-slate-50 rounded-lg border border-slate-100">
              <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                <span className="text-[8px] font-bold text-primary-700">{m.name.split(",")[0][0]}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-semibold text-slate-800 truncate">{m.name}</div>
                <div className="text-[8px] text-slate-400">{m.whg} · {m.miete}/Monat</div>
              </div>
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${m.ok ? "bg-primary-400" : "bg-amber-400"}`} />
            </div>
          ))}
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
          <div className="w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center"><Check size={12} className="text-white" /></div>
          <div>
            <h4 className="text-xs font-bold text-slate-800">25 Abrechnungen erstellt</h4>
            <p className="text-[9px] text-slate-500">3 Nachzahlungen · 22 Guthaben</p>
          </div>
        </div>
        <div className="border border-slate-200 rounded-lg overflow-hidden text-[10px]">
          {[
            { n: "Müller, T.", v: "2.400 €", a: "2.180 €", d: "+ 219 €", p: true },
            { n: "Fischer, S.", v: "2.640 €", a: "2.890 €", d: "- 250 €", p: false },
            { n: "Weber, L.", v: "2.160 €", a: "1.980 €", d: "+ 179 €", p: true },
          ].map((r, i) => (
            <div key={i} className="grid grid-cols-4 gap-1 px-2.5 py-1.5 border-b border-slate-50 last:border-b-0">
              <span className="font-medium text-slate-800">{r.n}</span>
              <span className="text-slate-600">{r.v}</span>
              <span className="text-slate-600">{r.a}</span>
              <span className={`font-bold ${r.p ? "text-primary-600" : "text-red-500"}`}>{r.d}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "tickets",
    label: "Tickets & Reparaturen",
    icon: Wrench,
    url: "tickets",
    content: (
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-bold text-slate-800">Offene Tickets</h4>
          <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-red-50 text-red-600 font-semibold">1 Offen</span>
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
  {
    id: "mietpreis",
    label: "Mietpreisanalyse",
    icon: TrendingUp,
    url: "mietpreisanalyse",
    content: (
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-bold text-slate-800">Mietpreisanalyse</h4>
          <span className="text-[9px] text-primary-600 font-semibold bg-primary-50 px-1.5 py-0.5 rounded border border-primary-100">+540 €/Mon.</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 mb-2">
          <div className="bg-slate-50 rounded-lg p-2 text-center"><div className="text-[8px] text-slate-500">Ø Ist</div><div className="text-sm font-bold text-slate-800">10,02 €</div></div>
          <div className="bg-primary-50 rounded-lg p-2 text-center"><div className="text-[8px] text-primary-600">Spiegel</div><div className="text-sm font-bold text-primary-700">11,50 €</div></div>
          <div className="bg-slate-50 rounded-lg p-2 text-center"><div className="text-[8px] text-slate-500">Erhöhbar</div><div className="text-sm font-bold text-slate-800">4/5</div></div>
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
                <span className="font-bold text-primary-600 flex items-center gap-0.5"><ArrowUp size={8} />{r.pot}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export default function Hero() {
  const [activePersona, setActivePersona] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Wird manuell gesetzt -> pausiert Auto-Cycle
  const [manualPersona, setManualPersona] = useState(false);

  // Auto-rotate slides
  useEffect(() => {
    const t = setInterval(() => setActiveSlide((p) => (p + 1) % slides.length), 2600);
    return () => clearInterval(t);
  }, [activeSlide]);

  // Auto-cycle personas (Fragen) alle 4 Sekunden
  useEffect(() => {
    if (manualPersona) return;
    const t = setInterval(() => setActivePersona((p) => (p + 1) % personas.length), 4000);
    return () => clearInterval(t);
  }, [manualPersona]);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) setActiveSlide((p) => diff > 0 ? (p + 1) % slides.length : (p - 1 + slides.length) % slides.length);
    setTouchStart(null);
  };

  const slide = slides[activeSlide];
  const persona = personas[activePersona];

  return (
    <section className="relative overflow-hidden pt-24 pb-16 lg:pt-36 lg:pb-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-50/60 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="max-w-xl">
            {/* Persona pills */}
            <div className="flex flex-wrap gap-2 mb-7">
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

            {/* Headline — changes with persona */}
            <h1
              key={activePersona}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight text-slate-900"
              style={{ animation: "slide-up 0.3s ease-out forwards" }}
            >
              {persona.headline}
            </h1>

            {/* Mobile mockup */}
            <div className="mt-8 lg:hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
              <BrowserMockup url={`app.immopilot.de/${slide.url}`}>
                <div key={`m-${activeSlide}`} style={{ animation: "slide-up 0.25s ease-out forwards" }} className="min-h-[240px]">
                  {slide.content}
                </div>
              </BrowserMockup>
              <div className="flex items-center justify-between mt-3 px-1">
                <div className="flex items-center gap-1.5">
                  <slide.icon size={12} className="text-primary-600" />
                  <span className="text-[11px] font-semibold text-slate-500">{slide.label}</span>
                </div>
                <div className="flex items-center gap-1">
                  {slides.map((_, i) => <button key={i} onClick={() => setActiveSlide(i)} className={`h-1 rounded-full transition-all ${i === activeSlide ? "w-5 bg-primary-600" : "w-1.5 bg-slate-200"}`} />)}
                </div>
              </div>
            </div>

            {/* Sub text + Bullets */}
            <div key={`sub-${activePersona}`} style={{ animation: "slide-up 0.35s ease-out forwards" }} className="mt-8">
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                {persona.sub}
              </p>
              <ul className="mt-5 space-y-2.5">
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
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary-600 text-white font-semibold text-base hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20">
                Kostenlose Demo anfragen <ArrowRight size={16} />
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-base hover:border-primary-300 hover:text-primary-600 transition-all">
                Alle Funktionen <ChevronRight size={16} />
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-7 flex flex-wrap items-center gap-2">
              {[
                { icon: Shield, label: "DSGVO-konform" },
                { icon: Building2, label: "Deutsche Server" },
                { icon: Sparkles, label: "KI-gestützt" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                  <b.icon size={13} className="text-primary-600" />
                  <span className="text-xs font-semibold text-slate-600">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Desktop mockup */}
          <div className="hidden lg:block" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <BrowserMockup url={`app.immopilot.de/${slide.url}`}>
              <div key={activeSlide} style={{ animation: "slide-up 0.25s ease-out forwards" }} className="min-h-[300px]">
                {slide.content}
              </div>
            </BrowserMockup>
            <div className="flex items-center justify-between mt-4 px-1">
              <div className="flex items-center gap-2">
                <slide.icon size={13} className="text-primary-600" />
                <span className="text-xs font-semibold text-slate-500">{slide.label}</span>
              </div>
              <div className="flex items-center gap-1.5">
                {slides.map((_, i) => <button key={i} onClick={() => setActiveSlide(i)} className={`h-1 rounded-full transition-all ${i === activeSlide ? "w-6 bg-primary-600" : "w-1.5 bg-slate-200 hover:bg-slate-300"}`} />)}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
