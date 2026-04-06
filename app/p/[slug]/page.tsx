"use client";

import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { Check, ArrowRight, Star, Building2, Users, Wrench, Quote } from "lucide-react";

// ─────────────────────────────────────────────────────────────────
// Partner-Datenbank — einfach erweitern
// ─────────────────────────────────────────────────────────────────
export const partners: Record<string, Partner> = {
  // ── Makler / Immobilienprofis ──────────────────────────────────
  "makler-muster": {
    slug: "makler-muster",
    name: "Max Mustermann",
    title: "Immobilienmakler, Frankfurt",
    type: "makler",
    avatar: "MM",
    quote: "Meine Kunden fragen mich ständig nach einer guten Verwaltungslösung. ImmoPilot ist die einzige, die ich ohne Zögern empfehle.",
    highlight: "Als Makler empfehle ich ImmoPilot",
    customHeadline: "Max Mustermann empfiehlt ImmoPilot",
    customSub: "Verwalten Sie Ihre Immobilien wie ein Profi — für 5 € pro Wohneinheit.",
    bonus: "Exklusiv über diesen Link: 1 Monat kostenlos testen",
    bonusCode: "MAKLER-2026",
  },
  // ── Creator / Influencer ───────────────────────────────────────
  "immotips": {
    slug: "immotips",
    name: "ImmoTips",
    title: "YouTube · 45.000 Abonnenten",
    type: "creator",
    avatar: "IT",
    quote: "Ich manage meine eigenen Wohnungen damit — und spare jeden Monat Stunden. Für Privatvermieter gibt es nichts Besseres.",
    highlight: "Empfohlen von ImmoTips",
    customHeadline: "ImmoTips empfiehlt ImmoPilot",
    customSub: "Die KI-Hausverwaltung, die ich selbst täglich nutze. Für 5 € pro Wohneinheit.",
    bonus: "Community-Deal: Erster Monat kostenlos",
    bonusCode: "IMMOTIPS",
  },
  "wohnungsmarkt-podcast": {
    slug: "wohnungsmarkt-podcast",
    name: "Wohnungsmarkt Podcast",
    title: "Podcast · 28.000 Hörer/Episode",
    type: "creator",
    avatar: "WP",
    quote: "Wir haben ImmoPilot im Podcast vorgestellt — die Hörer-Resonanz war überwältigend. Eine Software, die das Versprechen hält.",
    highlight: "Empfohlen vom Wohnungsmarkt Podcast",
    customHeadline: "Wohnungsmarkt Podcast × ImmoPilot",
    customSub: "Als Hörer des Podcasts: Starten Sie kostenlos und überzeugen Sie sich selbst.",
    bonus: "Podcast-Exklusiv: 14 Tage kostenlos + persönliches Onboarding",
    bonusCode: "PODCAST2026",
  },
  // ── Handwerker / Dienstleister ─────────────────────────────────
  "elektro-kaiser": {
    slug: "elektro-kaiser",
    name: "Elektro Kaiser GmbH",
    title: "Elektriker, Berlin",
    type: "handwerker",
    avatar: "EK",
    quote: "Unsere Kunden verwalten ihre Objekte jetzt mit ImmoPilot — und wir bekommen direkt Auftragsanfragen aus der App. Win-Win.",
    highlight: "Dienstleister-Partner von ImmoPilot",
    customHeadline: "Elektro Kaiser empfiehlt ImmoPilot",
    customSub: "Verwalten Sie Ihre Mietobjekte effizienter — und melden Sie Reparaturen direkt über die App.",
    bonus: "Sonderangebot: Erster Monat kostenlos",
    bonusCode: "KAISER",
  },
};

// ─────────────────────────────────────────────────────────────────
// Typen
// ─────────────────────────────────────────────────────────────────
type Partner = {
  slug: string;
  name: string;
  title: string;
  type: "makler" | "creator" | "handwerker";
  avatar: string;
  quote: string;
  highlight: string;
  customHeadline: string;
  customSub: string;
  bonus: string;
  bonusCode: string;
};

const typeConfig = {
  makler:     { icon: Building2, label: "Makler-Partner",      color: "bg-blue-600" },
  creator:    { icon: Users,     label: "Creator-Partner",     color: "bg-purple-600" },
  handwerker: { icon: Wrench,    label: "Dienstleister-Partner", color: "bg-amber-600" },
};

const benefits = [
  "Alle Funktionen 14 Tage kostenlos testen",
  "Persönliches Onboarding durch das ImmoPilot-Team",
  "DSGVO-konform, deutsche Server — kein Risiko",
  "Monatlich kündbar — keine Mindestlaufzeit",
];

// ─────────────────────────────────────────────────────────────────
// Formular mit Partner-Tracking
// ─────────────────────────────────────────────────────────────────
const FORMSPREE_URL = "https://formspree.io/f/xpwzjpqb";

function LeadForm({ partner }: { partner: Partner }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ vorname: "", nachname: "", email: "", telefon: "", einheiten: "" });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: `ImmoPilot Lead via Partner: ${partner.name} | ${form.vorname} ${form.nachname}`,
          partnerSlug: partner.slug,
          partnerName: partner.name,
          bonusCode: partner.bonusCode,
          source: "partner-link",
        }),
      });
    } catch { /* zeige Erfolg */ } finally {
      setSubmitted(true);
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
          <Check size={26} className="text-primary-600" strokeWidth={3} />
        </div>
        <h3 className="text-xl font-extrabold text-slate-900 mb-2">Anfrage eingegangen!</h3>
        <p className="text-slate-500 text-sm max-w-xs mx-auto">
          Wir melden uns innerhalb von 24h. Ihr Bonus-Code <strong className="text-primary-600">{partner.bonusCode}</strong> ist für Sie reserviert.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">Vorname *</label>
          <input required placeholder="Max" value={form.vorname} onChange={set("vorname")}
            className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">Nachname *</label>
          <input required placeholder="Mustermann" value={form.nachname} onChange={set("nachname")}
            className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">E-Mail *</label>
        <input required type="email" placeholder="max@beispiel.de" value={form.email} onChange={set("email")}
          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Telefon (optional)</label>
        <input type="tel" placeholder="+49 170 1234567" value={form.telefon} onChange={set("telefon")}
          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Anzahl Wohneinheiten *</label>
        <select required value={form.einheiten} onChange={set("einheiten")}
          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white">
          <option value="">Bitte wählen</option>
          <option>1–5 Einheiten</option>
          <option>6–20 Einheiten</option>
          <option>21–50 Einheiten</option>
          <option>51–100 Einheiten</option>
          <option>Mehr als 100 Einheiten</option>
        </select>
      </div>

      {/* Bonus code display */}
      <div className="bg-primary-50 border border-primary-200 rounded-xl px-4 py-3 flex items-center gap-3">
        <Star size={15} className="text-primary-600 flex-shrink-0" />
        <div>
          <p className="text-xs font-bold text-primary-700">{partner.bonus}</p>
          <p className="text-[11px] text-primary-500 mt-0.5">Code: <span className="font-bold">{partner.bonusCode}</span> — wird automatisch angewendet</p>
        </div>
      </div>

      <button type="submit" disabled={loading}
        className="w-full py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-60">
        {loading ? "Wird gesendet…" : <><span>Kostenlose Demo anfragen</span><ArrowRight size={15} /></>}
      </button>
      <p className="text-[10px] text-slate-400 text-center">Kostenlos & unverbindlich. Keine Kreditkarte erforderlich.</p>
    </form>
  );
}

// ─────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────
export default function PartnerLandingPage({ params }: { params: { slug: string } }) {
  const partner = partners[params.slug];
  if (!partner) notFound();

  const cfg = typeConfig[partner.type];
  const TypeIcon = cfg.icon;

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Minimal header — no main Navbar distractions */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">I</span>
            </div>
            <span className="font-bold text-slate-900">Immo<span className="text-primary-600">Pilot</span></span>
          </a>
          <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-white text-xs font-bold ${cfg.color}`}>
            <TypeIcon size={11} />
            {cfg.label}
          </div>
        </div>
      </div>

      <div className="pt-14">
        {/* Partner hero */}
        <div className="bg-slate-950 text-white py-14 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                {/* Partner badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-xs font-bold mb-5 ${cfg.color}`}>
                  <TypeIcon size={12} /> {partner.highlight}
                </div>

                {/* Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                  {partner.customHeadline.split("ImmoPilot").map((part, i, arr) =>
                    i < arr.length - 1 ? (
                      <span key={i}>{part}<span className="text-primary-400">ImmoPilot</span></span>
                    ) : <span key={i}>{part}</span>
                  )}
                </h1>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                  {partner.customSub}
                </p>

                {/* Benefits */}
                <ul className="space-y-2.5">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-primary-600/20 border border-primary-500/40 flex items-center justify-center flex-shrink-0">
                        <Check size={10} className="text-primary-400" strokeWidth={3} />
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Form */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
                <h2 className="text-xl font-extrabold text-slate-900 mb-1">Jetzt kostenlos starten</h2>
                <p className="text-sm text-slate-500 mb-6">Empfohlen von <strong>{partner.name}</strong></p>
                <LeadForm partner={partner} />
              </div>
            </div>
          </div>
        </div>

        {/* Quote / Testimonial */}
        <div className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <Quote size={32} className="text-primary-200 mx-auto mb-5" />
            <blockquote className="text-xl sm:text-2xl font-semibold text-slate-800 leading-relaxed mb-6 italic">
              „{partner.quote}"
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-11 h-11 rounded-full bg-primary-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">{partner.avatar}</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-slate-900 text-sm">{partner.name}</div>
                <div className="text-xs text-slate-500">{partner.title}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social proof / stats */}
        <div className="py-10 bg-slate-50 border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { v: "5 €", l: "pro Wohneinheit/Monat" },
                { v: "< 2 Std.", l: "Aufwand pro Monat" },
                { v: "14 Tage", l: "kostenlos testen" },
                { v: "100 %", l: "DSGVO-konform" },
              ].map((s) => (
                <div key={s.l} className="bg-white border border-slate-200 rounded-xl p-4">
                  <div className="text-2xl font-extrabold text-primary-600 mb-1">{s.v}</div>
                  <div className="text-xs text-slate-500 leading-snug">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer minimal */}
        <div className="py-6 border-t border-slate-200 bg-white text-center">
          <p className="text-xs text-slate-400">
            © 2026 ImmoPilot · <a href="/datenschutz" className="hover:text-slate-600">Datenschutz</a> · <a href="/impressum" className="hover:text-slate-600">Impressum</a>
          </p>
        </div>
      </div>
    </main>
  );
}
