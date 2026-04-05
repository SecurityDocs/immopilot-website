"use client";

import { ArrowRight, Mail, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 lg:py-28" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 animated-gradient opacity-95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />

          <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Bereit für digitale <br />
              Immobilienverwaltung?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Lassen Sie sich in einer kostenlosen Demo zeigen, wie ImmoPilot
              Ihre Verwaltung revolutioniert. Keine Verpflichtung, kein Risiko.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="mailto:info@immopilot.de"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-primary-700 font-bold text-base hover:bg-slate-50 transition-all shadow-lg"
              >
                Kostenlose Demo vereinbaren
                <ArrowRight size={18} />
              </a>
              <a
                href="tel:+4921112345678"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all"
              >
                <Phone size={18} />
                Jetzt anrufen
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-white/60">
              <span>Keine Kreditkarte nötig</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>Unverbindlich</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>Setup in 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
