"use client";

import { useState } from "react";
import { Send, Check, ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 lg:py-28 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-6">
              <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">
                Kostenlose Demo
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Überzeugen Sie sich{" "}
              <span className="gradient-text">selbst.</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Tragen Sie sich ein und erhalten Sie Zugang zur kostenlosen Demoversion
              unserer Hausverwaltung Software. Testen Sie alle Funktionen unverbindlich
              oder vereinbaren Sie direkt ein persönliches Gespräch mit unserem Team.
            </p>

            <div className="space-y-4">
              {[
                "Voller Zugang zur Demo — ohne Kreditkarte",
                "Persönliches Gespräch bei Fragen jederzeit möglich",
                "Unverbindlich — keine automatische Verlängerung",
                "Antwort innerhalb von 24 Stunden",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-accent-600" />
                  </div>
                  <span className="text-sm text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl border border-slate-200 p-6 lg:p-8 space-y-5">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Demo anfragen</h3>
                <p className="text-sm text-slate-500 mb-4">Füllen Sie das Formular aus — wir melden uns innerhalb von 24h.</p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Vorname *</label>
                    <input type="text" required placeholder="Max" className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Nachname *</label>
                    <input type="text" required placeholder="Mustermann" className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">E-Mail *</label>
                  <input type="email" required placeholder="max@beispiel.de" className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Telefonnummer *</label>
                  <input type="tel" required placeholder="+49 211 1234567" className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Anzahl Einheiten *</label>
                    <select required className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white">
                      <option value="">Bitte wählen</option>
                      <option value="1-10">1–10 Einheiten</option>
                      <option value="11-30">11–30 Einheiten</option>
                      <option value="31-50">31–50 Einheiten</option>
                      <option value="51-100">51–100 Einheiten</option>
                      <option value="101-200">101–200 Einheiten</option>
                      <option value="200+">200+ Einheiten</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Sie sind... *</label>
                    <select required className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white">
                      <option value="">Bitte wählen</option>
                      <option value="privat">Privater Eigentümer</option>
                      <option value="hausverwaltung">Hausverwaltung</option>
                      <option value="weg">WEG-Verwalter</option>
                      <option value="investor">Investor</option>
                      <option value="sonstige">Sonstiges</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Nachricht <span className="text-slate-400 font-normal">(optional)</span></label>
                  <textarea rows={3} placeholder="Haben Sie Fragen oder spezielle Anforderungen?" className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white resize-none" />
                </div>

                <button type="submit" className="w-full py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20 flex items-center justify-center gap-2 text-sm">
                  Kostenlose Demo anfragen
                  <ArrowRight size={16} />
                </button>

                <p className="text-[10px] text-slate-400 text-center">
                  Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu. Keine Spam-Mails, versprochen.
                </p>
              </form>
            ) : (
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 lg:p-12 text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent-500 flex items-center justify-center mx-auto mb-5">
                  <Check size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Vielen Dank!</h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
                  Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden
                  mit Ihrem persönlichen Demo-Zugang.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
