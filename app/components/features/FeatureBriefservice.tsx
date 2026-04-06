"use client";

import { useState, useEffect } from "react";
import BrowserMockup from "../BrowserMockup";
import {
  Mail, CheckCircle2, Sparkles, Send, Check, Euro,
} from "lucide-react";

const briefVorschlaege = [
  {
    typ: "Heizkostenvorschuss-Anpassung",
    empfaenger: "Alle Mieter · MFH Rheinufer 12",
    ki: "Energie-Kosten gestiegen — KI schlägt Anpassung um 35 €/Mon. vor",
    kosten: "6 Briefe · 6 × 0,99 € = 5,94 €",
    badge: "Automatisch erkannt",
  },
  {
    typ: "Mieterhöhung nach § 558 BGB",
    empfaenger: "Schmidt, Anna · ETW Bergstraße",
    ki: "Mietspiegel gestiegen — Erhöhung um 12 % zulässig",
    kosten: "1 Brief · 0,99 €",
    badge: "Mietrecht geprüft",
  },
];

export default function FeatureBriefservice() {
  const [step, setStep] = useState(0);
  const [sent, setSent] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    let t3: ReturnType<typeof setTimeout>;
    const run = () => {
      setSent(false);
      setStep(0);
      setActiveIdx(0);
      t1 = setTimeout(() => setStep(1), 2500);
      t2 = setTimeout(() => setSent(true), 5000);
      t3 = setTimeout(run, 10000);
    };
    run();
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const brief = briefVorschlaege[activeIdx];

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="order-2 lg:order-1">
        <BrowserMockup url="app.immopilot.de/briefservice">
          <div className="p-3 sm:p-4 min-h-[340px] sm:min-h-[420px]">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={14} className="text-primary-600" />
              <h5 className="text-xs font-bold text-slate-800">KI-Briefvorschläge</h5>
              <span className="ml-auto text-[9px] text-slate-400">2 Vorschläge heute</span>
            </div>

            {/* Brief selection */}
            <div className="space-y-1.5 mb-3">
              {briefVorschlaege.map((b, i) => (
                <button
                  key={b.typ}
                  onClick={() => { setActiveIdx(i); setStep(0); setSent(false); }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl border transition-all ${
                    i === activeIdx ? "bg-primary-50 border-primary-200" : "bg-white border-slate-100 hover:border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <div className="text-[10px] font-bold text-slate-800">{b.typ}</div>
                      <div className="text-[9px] text-slate-400 mt-0.5">{b.empfaenger}</div>
                    </div>
                    <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-bold flex-shrink-0 ${
                      i === activeIdx ? "bg-primary-600 text-white" : "bg-slate-100 text-slate-500"
                    }`}>{b.badge}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Brief preview */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <div className="px-3 py-2 bg-slate-50 border-b border-slate-100 flex items-center gap-2">
                <Mail size={11} className="text-primary-600" />
                <span className="text-[10px] font-bold text-slate-700">Brief-Vorschau</span>
              </div>
              <div className="p-3">
                <div className="space-y-1.5 mb-3">
                  {[
                    { label: "An:", val: brief.empfaenger },
                    { label: "Betreff:", val: brief.typ },
                  ].map(({ label, val }) => (
                    <div key={label} className="flex gap-2">
                      <span className="text-[9px] text-slate-400 w-12 flex-shrink-0">{label}</span>
                      <span className="text-[9px] text-slate-700 font-medium">{val}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-primary-50 border border-primary-100 rounded-lg p-2 mb-3">
                  <div className="flex items-start gap-1.5">
                    <Sparkles size={10} className="text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-[9px] text-primary-700">{brief.ki}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[9px] text-slate-500">
                    <Euro size={9} />{brief.kosten}
                  </div>
                  {sent ? (
                    <span className="flex items-center gap-1 text-[10px] text-primary-600 font-bold">
                      <Check size={11} /> Abgesendet
                    </span>
                  ) : step === 0 ? (
                    <button
                      onClick={() => setStep(1)}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary-600 text-white text-[10px] font-bold hover:bg-primary-700 transition-colors"
                    >
                      Brief prüfen <Mail size={10} />
                    </button>
                  ) : (
                    <button
                      onClick={() => setSent(true)}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary-600 text-white text-[10px] font-bold hover:bg-primary-700 transition-colors"
                      style={{ animation: "slide-up 0.2s ease-out forwards" }}
                    >
                      <Send size={10} /> Jetzt versenden
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </BrowserMockup>
      </div>

      <div className="order-1 lg:order-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 mb-4">
          <Mail size={14} className="text-primary-600" />
          <span className="text-xs font-semibold text-primary-700">Briefservice</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          KI schreibt — <span className="text-primary-600">Sie klicken auf Senden.</span>
        </h3>
        <p className="text-slate-500 leading-relaxed mb-6">
          ImmoPilot erkennt wann ein Brief nötig ist — Mieterhöhung, Heizkostenvorschuss, Betriebskostenabrechnung.
          Der Brief wird automatisch vorbereitet, rechtssicher formuliert und direkt per Briefservice versendet.
          Kosten: 0,99 € pro Brief.
        </p>
        <ul className="space-y-3">
          {[
            "KI erkennt Anlässe und schlägt Briefe proaktiv vor",
            "Rechtssichere Formulierungen nach deutschem Mietrecht",
            "Briefservice direkt integriert — kein Gang zur Post",
            "0,99 € pro Brief, monatliche Abrechnung",
            "Vorschau und Freigabe immer bei Ihnen",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
              <CheckCircle2 size={16} className="text-primary-600 flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
