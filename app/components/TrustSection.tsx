"use client";

import { Star, Quote, Building2, Users, Clock, TrendingUp } from "lucide-react";

const stats = [
  { icon: Building2,   value: "1.200+", label: "Einheiten verwaltet" },
  { icon: Users,       value: "85+",    label: "Eigentümer vertrauen uns" },
  { icon: Clock,       value: "< 24h",  label: "Einrichtungszeit" },
  { icon: TrendingUp,  value: "−80 %",  label: "weniger Aufwand" },
];

const testimonials = [
  {
    name: "Michael K.",
    role: "Privater Vermieter · 18 Einheiten",
    text: "Ich habe vorher 6 Stunden pro Woche für die Verwaltung gebraucht. Mit ImmoPilot sind es noch 45 Minuten. Die KI-Nebenkostenabrechnung allein hat mich schon überzeugt.",
    rating: 5,
    initial: "M",
  },
  {
    name: "Sandra L.",
    role: "Eigentümerin · 34 Einheiten · München",
    text: "Endlich alles an einem Ort — Mieter, Verträge, Briefe. Das Tablet im Hauseingang hat die Anrufe bei mir fast auf null reduziert. Hätte ich früher haben wollen.",
    rating: 5,
    initial: "S",
  },
  {
    name: "Thomas W.",
    role: "Investor · 3 Objekte · Hamburg",
    text: "Das Professional-Paket rechnet sich schon ab der ersten Nebenkostenabrechnung. Transparent, rechtssicher und der Support ist wirklich schnell.",
    rating: 5,
    initial: "T",
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-5">
            <Star size={13} className="text-primary-600 fill-primary-600" />
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">Vertrauen & Bewertungen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Eigentümer in ganz Deutschland
            <span className="text-primary-600"> verwalten mit ImmoPilot</span>
          </h2>
          <p className="mt-3 text-base text-slate-500 max-w-xl mx-auto">
            Vom Einsteiger bis zum wachsenden Portfolio — echte Eigentümer, echte Ergebnisse.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="bg-slate-50 rounded-2xl border border-slate-100 p-5 text-center">
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-3">
                <Icon size={18} className="text-primary-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{value}</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">{label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid sm:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-slate-50 rounded-2xl border border-slate-100 p-6 flex flex-col">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              {/* Quote */}
              <Quote size={16} className="text-primary-200 mb-2 flex-shrink-0" />
              <p className="text-sm text-slate-600 leading-relaxed flex-1">
                {t.text}
              </p>
              {/* Author */}
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-slate-200">
                <div className="w-9 h-9 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-white">{t.initial}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
