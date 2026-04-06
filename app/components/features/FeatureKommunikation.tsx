"use client";

import { useState, useEffect } from "react";
import BrowserMockup from "../BrowserMockup";
import {
  MessageSquare, Mic, Smartphone, Mail, Check, CheckCircle2,
  Sparkles, ArrowRight, Wrench,
} from "lucide-react";

const tickets = [
  { id: "T-047", text: "Heizung defekt, 2. OG links", quelle: "Sprachassistent", prio: "hoch", zeit: "vor 5 Min." },
  { id: "T-046", text: "Wasserhahn tropft, EG rechts", quelle: "Tablet", prio: "mittel", zeit: "vor 1 Std." },
  { id: "T-045", text: "Klingel kaputt, 3. OG", quelle: "Handy", prio: "niedrig", zeit: "gestern" },
];

const emailDemo = {
  from: "m.mueller@gmx.de",
  betreff: "Kündigung meiner Wohnung zum 31.05.2026",
  ki: [
    { type: "action", label: "Kündigung erkannt", desc: "Vorlage zur schriftlichen Bestätigung automatisch vorbereitet" },
    { type: "ticket", label: "Übergabetermin erfassen", desc: "Ticket für Wohnungsübergabe & Schlüsselrückgabe anlegen" },
  ],
};

export default function FeatureKommunikation() {
  const [activeView, setActiveView] = useState<"tickets" | "email">("tickets");
  const [showKI, setShowKI] = useState(false);

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    let t3: ReturnType<typeof setTimeout>;
    const run = () => {
      setActiveView("tickets");
      setShowKI(false);
      t1 = setTimeout(() => setActiveView("email"), 4000);
      t2 = setTimeout(() => setShowKI(true), 5200);
      t3 = setTimeout(run, 10000);
    };
    run();
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left: Mockup */}
      <div className="order-2 lg:order-1">
        <BrowserMockup url="app.immopilot.de/kommunikation">
          <div className="p-3 sm:p-4 min-h-[340px] sm:min-h-[420px]">
            {/* Tab switcher */}
            <div className="flex gap-1 mb-4 bg-slate-100 rounded-lg p-1">
              {[
                { id: "tickets", label: "Tickets", icon: MessageSquare },
                { id: "email", label: "E-Mail KI", icon: Mail },
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveView(id as "tickets" | "email")}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md text-[11px] font-semibold transition-all ${
                    activeView === id ? "bg-white shadow-sm text-slate-800" : "text-slate-500"
                  }`}
                >
                  <Icon size={12} /> {label}
                </button>
              ))}
            </div>

            {activeView === "tickets" && (
              <div style={{ animation: "slide-up 0.25s ease-out forwards" }}>
                <div className="flex items-center justify-between mb-3">
                  <h5 className="text-xs font-bold text-slate-800">Offene Tickets</h5>
                  <div className="flex items-center gap-1.5">
                    {[
                      { icon: Mic, label: "Sprache" },
                      { icon: Smartphone, label: "Handy" },
                    ].map(({ icon: Icon, label }) => (
                      <span key={label} className="flex items-center gap-0.5 text-[9px] text-slate-400 bg-slate-50 border border-slate-100 px-1.5 py-0.5 rounded-full">
                        <Icon size={9} /> {label}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  {tickets.map((tk) => (
                    <div key={tk.id} className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              tk.prio === "hoch" ? "bg-red-400" : tk.prio === "mittel" ? "bg-amber-400" : "bg-slate-300"
                            }`} />
                            <span className="text-[9px] font-bold text-slate-400">{tk.id}</span>
                          </div>
                          <p className="text-xs font-semibold text-slate-800">{tk.text}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[9px] text-slate-400">via {tk.quelle}</span>
                            <span className="text-[9px] text-slate-300">{tk.zeit}</span>
                          </div>
                        </div>
                        <button className="flex-shrink-0 flex items-center gap-0.5 px-2 py-1 rounded-lg bg-primary-50 border border-primary-100 text-[9px] text-primary-700 font-semibold hover:bg-primary-600 hover:text-white transition-colors">
                          <Wrench size={9} /> Zuweisen
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeView === "email" && (
              <div style={{ animation: "slide-up 0.25s ease-out forwards" }}>
                {/* Email preview */}
                <div className="bg-white border border-slate-200 rounded-xl p-3 mb-3 shadow-sm">
                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-100">
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                      <span className="text-[9px] font-bold text-slate-600">M</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold text-slate-800">{emailDemo.from}</div>
                      <div className="text-[9px] text-slate-500">{emailDemo.betreff}</div>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-500 leading-relaxed">
                    „...hiermit kündige ich meine Wohnung fristgerecht zum 31.05.2026..."
                  </p>
                </div>

                {/* KI analysis */}
                {showKI && (
                  <div style={{ animation: "slide-up 0.3s ease-out forwards" }}>
                    <div className="flex items-center gap-1.5 mb-2">
                      <Sparkles size={11} className="text-primary-600" />
                      <span className="text-[10px] font-bold text-primary-700">KI-Analyse</span>
                    </div>
                    <div className="space-y-2">
                      {emailDemo.ki.map((item) => (
                        <div key={item.label} className="bg-primary-50 border border-primary-100 rounded-lg p-2.5 flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                            {item.type === "action" ? <ArrowRight size={9} className="text-white" /> : <MessageSquare size={9} className="text-white" />}
                          </div>
                          <div>
                            <div className="text-[10px] font-bold text-primary-800">{item.label}</div>
                            <div className="text-[9px] text-primary-600 mt-0.5">{item.desc}</div>
                          </div>
                        </div>
                      ))}
                      <button className="w-full py-1.5 rounded-lg bg-primary-600 text-white text-[10px] font-semibold flex items-center justify-center gap-1 hover:bg-primary-700 transition-colors">
                        <Check size={10} /> Vorlage senden
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </BrowserMockup>
      </div>

      {/* Right: Text */}
      <div className="order-1 lg:order-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 mb-4">
          <MessageSquare size={14} className="text-primary-600" />
          <span className="text-xs font-semibold text-primary-700">Digitale Kommunikation</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          Mieter schreiben — <span className="text-primary-600">KI antwortet und handelt.</span>
        </h3>
        <p className="text-slate-500 leading-relaxed mb-6">
          Ob Tablet im Treppenhaus, Handy-App oder direkte E-Mail: Alle Anliegen laufen zentral in ImmoPilot ein.
          Die KI erkennt Kündigungen, Beschwerden und Reparaturwünsche — und macht sofort einen Vorschlag.
        </p>
        <ul className="space-y-3">
          {[
            "Ticket-System: Handy, Tablet & Sprachassistent",
            "E-Mails automatisch auslesen und einordnen",
            "Kündigung eingehend? → Bestätigungsvorlage in Sekunden",
            "Beschwerde? → Ticket + Handwerker direkt zuweisen",
            "Alle Kanäle, ein Posteingang — nichts geht verloren",
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
