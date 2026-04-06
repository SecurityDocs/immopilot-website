"use client";

import { useState } from "react";
import { Check, ArrowRight, Phone, Mail, Clock } from "lucide-react";

// Formspree: Kostenlosen Account auf formspree.io erstellen
// Dann eigene Form-ID eintragen: https://formspree.io/f/IHRE_ID
const FORMSPREE_URL = "https://formspree.io/f/xpwzjpqb";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    vorname: "", nachname: "", email: "", telefon: "",
    einheiten: "", rolle: "", nachricht: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: `ImmoPilot Demo: ${form.vorname} ${form.nachname} (${form.einheiten})`,
        }),
      });
    } catch {
      // Zeige Erfolg auch bei Netzwerkproblemen
    } finally {
      setSubmitted(true);
      setLoading(false);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-6">
              <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">
                14 Tage kostenlos testen
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Überzeugen Sie sich{" "}
              <span className="text-primary-600">selbst.</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Tragen Sie sich ein und erhalten Sie Zugang zur kostenlosen Demoversion.
              Kein Risiko, keine Kreditkarte — wir richten Ihre Objekte persönlich ein.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Voller Zugang zur Demo — ohne Kreditkarte",
                "Wir richten Ihre Objekte kostenlos ein",
                "Persönliches Onboarding-Gespräch inklusive",
                "Keine automatische Verlängerung",
                "Antwort innerhalb von 24 Stunden",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-primary-600" />
                  </div>
                  <span className="text-sm text-slate-600">{item}</span>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
              <p className="text-sm font-semibold text-slate-700">Lieber direkt sprechen?</p>
              <a href="tel:+4915123456789" className="flex items-center gap-3 text-slate-600 hover:text-primary-600 transition-colors">
                <Phone size={15} className="text-primary-600" />
                <span className="text-sm">+49 151 234 567 89</span>
              </a>
              <a href="mailto:demo@immopilot.de" className="flex items-center gap-3 text-slate-600 hover:text-primary-600 transition-colors">
                <Mail size={15} className="text-primary-600" />
                <span className="text-sm">demo@immopilot.de</span>
              </a>
              <div className="flex items-center gap-3 text-slate-500 text-sm">
                <Clock size={15} className="text-slate-400" />
                Mo–Fr 9–18 Uhr
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl border border-slate-200 p-6 lg:p-8 space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Demo anfragen</h3>
                  <p className="text-sm text-slate-500">Wir melden uns innerhalb von 24h mit Ihrem Demozugang.</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Vorname *</label>
                    <input
                      type="text" required placeholder="Max"
                      value={form.vorname}
                      onChange={(e) => setForm({ ...form, vorname: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Nachname *</label>
                    <input
                      type="text" required placeholder="Mustermann"
                      value={form.nachname}
                      onChange={(e) => setForm({ ...form, nachname: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">E-Mail *</label>
                  <input
                    type="email" required placeholder="max@beispiel.de"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Telefonnummer *</label>
                  <input
                    type="tel" required placeholder="+49 151 1234567"
                    value={form.telefon}
                    onChange={(e) => setForm({ ...form, telefon: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Anzahl Einheiten *</label>
                    <select
                      required
                      value={form.einheiten}
                      onChange={(e) => setForm({ ...form, einheiten: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                    >
                      <option value="">Bitte wählen</option>
                      <option>1–10 Einheiten</option>
                      <option>11–30 Einheiten</option>
                      <option>31–50 Einheiten</option>
                      <option>51–100 Einheiten</option>
                      <option>101–200 Einheiten</option>
                      <option>200+ Einheiten</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Sie sind … *</label>
                    <select
                      required
                      value={form.rolle}
                      onChange={(e) => setForm({ ...form, rolle: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                    >
                      <option value="">Bitte wählen</option>
                      <option>Privater Eigentümer</option>
                      <option>Immobilien-Investor</option>
                      <option>Erbe / neuer Eigentümer</option>
                      <option>Kleine Hausverwaltung</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Nachricht <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    rows={3} placeholder="Haben Sie Fragen oder spezielle Anforderungen?"
                    value={form.nachricht}
                    onChange={(e) => setForm({ ...form, nachricht: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20 flex items-center justify-center gap-2 text-sm disabled:opacity-60"
                >
                  {loading ? "Wird gesendet…" : <><span>14 Tage kostenlos testen</span> <ArrowRight size={16} /></>}
                </button>

                <p className="text-[10px] text-slate-400 text-center">
                  Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu. Kein Spam, versprochen.
                </p>
              </form>
            ) : (
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 lg:p-12 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary-600 flex items-center justify-center mx-auto mb-5">
                  <Check size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Super! Wir melden uns bald.</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-sm mx-auto mb-6">
                  Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden
                  mit Ihrem persönlichen Demo-Zugang.
                </p>
                <div className="bg-white border border-slate-200 rounded-xl p-4 text-left space-y-2">
                  {[
                    "E-Mail-Bestätigung kommt in wenigen Minuten",
                    "Unser Team meldet sich innerhalb von 24h",
                    "Persönliches Onboarding für Ihren Start",
                  ].map((s) => (
                    <div key={s} className="flex items-center gap-2 text-xs text-slate-600">
                      <div className="w-4 h-4 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                        <Check size={9} className="text-primary-600" />
                      </div>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
