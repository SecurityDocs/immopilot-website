"use client";

import {
  Tablet,
  Mic,
  FileEdit,
  Smartphone,
  Wrench,
  Bell,
  MessageSquare,
  ExternalLink,
  Lock,
  Send,
  UserCheck,
  Info,
  CheckCircle2,
  QrCode,
} from "lucide-react";
import BrowserMockup from "./BrowserMockup";

export default function TabletPortal() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="portal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-4">
            <Tablet size={14} className="text-primary-600" />
            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
              Mieter-Portal und Tablet
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tablet im Treppenhaus.{" "}
            <span className="gradient-text">Portal auf dem Handy.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Jeder Kunde erhält ein iPad für das Treppenhaus. Diebstahlgesichert in einem Wandgehäuse, von uns installiert und eingerichtet.
            Zusätzlich kann jeder Mieter Anliegen direkt über sein Handy melden.
          </p>
        </div>

        {/* iPad + Text */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: iPad mit nachgebauter Kiosk-App */}
          <div className="flex justify-center">
            <div className="relative">
              {/* iPad Frame */}
              <div className="bg-slate-800 rounded-[2rem] p-3 shadow-2xl w-full max-w-[340px]">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600" />
                <div className="bg-slate-950 rounded-[1.6rem] overflow-hidden" style={{ height: "460px" }}>
                  {/* Kiosk App nachgebaut */}
                  <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="bg-slate-950 px-5 pt-6 pb-4">
                      <div className="text-center">
                        <h3 className="text-white text-sm font-bold">Hausverwaltung</h3>
                        <p className="text-slate-400 text-[10px]">Ihre Immobilie</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-slate-950 px-5 pb-5 overflow-hidden">
                      <h4 className="text-white text-xs font-semibold mb-3">Wie können wir Ihnen heute helfen?</h4>

                      {/* Main Actions */}
                      <div className="grid grid-cols-2 gap-2.5 mb-4">
                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center hover:border-slate-700 transition-colors cursor-pointer">
                          <div className="w-8 h-8 mx-auto rounded-lg bg-primary-500/10 flex items-center justify-center mb-1.5">
                            <Mic size={16} className="text-primary-400" />
                          </div>
                          <div className="text-[10px] font-bold text-white">Sprachassistent</div>
                          <div className="text-[8px] text-slate-500 mt-0.5">Einfach sprechen</div>
                        </div>
                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center hover:border-slate-700 transition-colors cursor-pointer">
                          <div className="w-8 h-8 mx-auto rounded-lg bg-primary-500/10 flex items-center justify-center mb-1.5">
                            <FileEdit size={16} className="text-primary-400" />
                          </div>
                          <div className="text-[10px] font-bold text-white">Ticket erstellen</div>
                          <div className="text-[8px] text-slate-500 mt-0.5">Formular ausfüllen</div>
                        </div>
                      </div>

                      {/* Info banner */}
                      <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-2 mb-3">
                        <div className="flex items-center gap-1.5">
                          <Info size={10} className="text-amber-400" />
                          <span className="text-[9px] font-semibold text-amber-300">Aufzug in Wartung bis 10.04., 14:00 Uhr</span>
                        </div>
                      </div>

                      {/* QR Code section */}
                      <div className="bg-slate-900 border border-slate-800 rounded-lg p-3 flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-white flex items-center justify-center flex-shrink-0">
                          <QrCode size={20} className="text-slate-800" />
                        </div>
                        <div>
                          <div className="text-[9px] font-bold text-white">Auch vom Handy erreichbar</div>
                          <div className="text-[8px] text-slate-500">QR-Code scannen oder Link nutzen</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Label */}
              <div className="flex items-center justify-center gap-2 mt-3">
                <Lock size={11} className="text-slate-400" />
                <span className="text-[10px] text-slate-500">Diebstahlgesichert im Wandgehäuse montiert</span>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Schluss mit ständigem Telefonieren
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                Mieter melden Schäden und Anliegen direkt über das Tablet im Treppenhaus oder über ihr Handy.
                Der Sprachassistent nimmt Meldungen per Sprache entgegen und erstellt automatisch ein Ticket daraus.
                Sie als Eigentümer sehen alles sofort in der Software und können direkt handeln. Kein Anruf mehr nötig.
              </p>

              {/* Rechenbeispiel Zeitersparnis */}
              <div className="mt-4 bg-primary-50 border border-primary-100 rounded-xl p-4">
                <h4 className="text-xs font-bold text-primary-800 mb-2">Rechenbeispiel: 50 Einheiten, 30 Meldungen pro Monat</h4>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600">Ohne ImmoPilot: 30 Anrufe × 15 Min.</span>
                    <span className="text-xs font-bold text-slate-900">7,5 Std./Monat</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600">Mit ImmoPilot: 30 Tickets × 2 Min.</span>
                    <span className="text-xs font-bold text-primary-700">1 Std./Monat</span>
                  </div>
                  <div className="border-t border-primary-200 pt-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-primary-800">Zeitersparnis pro Monat</span>
                      <span className="text-sm font-extrabold text-primary-700">6,5 Stunden</span>
                    </div>
                    <p className="text-[11px] text-primary-600 mt-1">Das sind über 78 Stunden im Jahr, die Sie für Wichtigeres nutzen.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              {[
                { icon: Tablet, title: "iPad im Treppenhaus, diebstahlgesichert", desc: "Jedes Objekt erhält ein iPad im Sicherheitsgehäuse. Wir liefern, montieren und richten alles ein." },
                { icon: Mic, title: "KI-Sprachassistent für Mieter", desc: "Mieter sprechen einfach ins Tablet. Die KI versteht das Anliegen und erstellt automatisch ein Ticket." },
                { icon: Smartphone, title: "Mobiles Portal für jeden Mieter", desc: "Jeder Mieter erhält einen persönlichen Link. Tickets erstellen und Status einsehen, direkt vom Handy." },
                { icon: Bell, title: "Digitales schwarzes Brett", desc: "Wichtige Infos wie Wartungen oder Ausfälle werden direkt auf dem Tablet angezeigt." },
                { icon: Wrench, title: "Tickets direkt an Dienstleister weiterleiten", desc: "Sie weisen Reparaturen per Klick dem Hausmeister oder Handwerker zu. Alles dokumentiert." },
                { icon: ExternalLink, title: "Eigene Portal-URL pro Immobilie", desc: "Jedes Ihrer Objekte bekommt eine eigene Adresse für das Mieter-Portal." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <item.icon size={15} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Admin View: Ticket-Verwaltung */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-slate-900">So sehen Sie die Tickets in der Software</h3>
            <p className="text-sm text-slate-500 mt-1">Alle Meldungen an einem Ort. Weiterleiten, beantworten und Informationen teilen.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <BrowserMockup url="app.immopilot.de/tickets">
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-slate-800">Ticket-Übersicht</h4>
                  <div className="flex gap-2">
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-red-50 text-red-600 font-semibold">2 Offen</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 font-semibold">3 In Arbeit</span>
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-green-50 text-green-600 font-semibold">12 Erledigt</span>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-xl overflow-x-auto">
                  <div className="grid grid-cols-12 gap-2 px-4 py-2 bg-slate-50 border-b border-slate-200 text-[9px] font-semibold text-slate-500 uppercase min-w-[600px]">
                    <span className="col-span-1">Nr.</span>
                    <span className="col-span-3">Meldung</span>
                    <span className="col-span-2">Quelle</span>
                    <span className="col-span-2">Status</span>
                    <span className="col-span-2">Zugewiesen</span>
                    <span className="col-span-2">Aktion</span>
                  </div>
                  {[
                    { id: "T-042", t: "Heizung defekt, 2.OG links", src: "Sprachassistent", st: "offen", to: null },
                    { id: "T-041", t: "Wasserhahn tropft, EG", src: "Tablet-Formular", st: "arbeit", to: "Hausmeister Weber" },
                    { id: "T-040", t: "Klingel defekt, 3.OG rechts", src: "Handy-Portal", st: "arbeit", to: "Elektro Schulz GmbH" },
                    { id: "T-039", t: "Treppenlicht flackert", src: "Tablet-Formular", st: "erledigt", to: "Hausmeister Weber" },
                  ].map((tk, i) => (
                    <div key={i} className="grid grid-cols-12 gap-2 px-4 py-2.5 border-b border-slate-50 last:border-b-0 items-center min-w-[600px]"
                      style={{ animation: "slide-up 0.3s ease-out forwards", animationDelay: `${i * 0.08}s`, opacity: 0 }}>
                      <span className="col-span-1 text-[10px] font-bold text-slate-400">{tk.id}</span>
                      <span className="col-span-3 text-[11px] font-medium text-slate-800">{tk.t}</span>
                      <span className="col-span-2 text-[10px] text-slate-500 flex items-center gap-1">
                        {tk.src.includes("Sprach") ? <Mic size={9} /> : tk.src.includes("Tablet") ? <Tablet size={9} /> : <Smartphone size={9} />}
                        {tk.src}
                      </span>
                      <div className="col-span-2">
                        {tk.st === "offen" && <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-50 text-red-600 font-semibold">Offen</span>}
                        {tk.st === "arbeit" && <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-50 text-amber-600 font-semibold">In Arbeit</span>}
                        {tk.st === "erledigt" && <span className="text-[9px] px-1.5 py-0.5 rounded bg-green-50 text-green-600 font-semibold">Erledigt</span>}
                      </div>
                      <div className="col-span-2">
                        {tk.to ? (
                          <span className="text-[10px] text-slate-600 flex items-center gap-0.5"><UserCheck size={9} className="text-primary-500" />{tk.to}</span>
                        ) : (
                          <button className="text-[9px] px-2 py-0.5 rounded bg-primary-600 text-white font-semibold flex items-center gap-0.5"><Send size={8} />Zuweisen</button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Info broadcast */}
                <div className="mt-4 bg-primary-50 border border-primary-100 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell size={14} className="text-primary-600" />
                      <div>
                        <div className="text-[11px] font-bold text-slate-800">Information an alle Mieter senden</div>
                        <div className="text-[10px] text-slate-500">Wird auf allen Tablets und im Portal angezeigt</div>
                      </div>
                    </div>
                    <button className="text-[9px] px-3 py-1.5 rounded-lg bg-primary-600 text-white font-semibold">Information veröffentlichen</button>
                  </div>
                </div>
              </div>
            </BrowserMockup>
          </div>
        </div>
      </div>
    </section>
  );
}
