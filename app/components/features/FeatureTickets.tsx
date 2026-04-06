"use client";

import { useState, useEffect } from "react";
import BrowserMockup from "../BrowserMockup";
import {
  Wrench,
  CheckCircle2,
  Mic,
  User,
  Clock,
  ArrowRight,
  MessageSquare,
  UserCheck,
} from "lucide-react";

const tickets = [
  { id: "T-042", titel: "Heizung defekt — 2. OG links", melder: "Thomas Müller", zeit: "vor 2 Std.", prio: "hoch", status: "offen", zugewiesen: null },
  { id: "T-041", titel: "Wasserhahn tropft — EG mitte", melder: "Stefan Fischer", zeit: "vor 5 Std.", prio: "mittel", status: "zugewiesen", zugewiesen: "Hausmeister Weber" },
  { id: "T-040", titel: "Klingel defekt — 3. OG rechts", melder: "Anna Schmidt", zeit: "gestern", prio: "niedrig", status: "zugewiesen", zugewiesen: "Elektro Schulz" },
  { id: "T-039", titel: "Treppenlicht flackert", melder: "Via Tablet", zeit: "vor 2 Tagen", prio: "niedrig", status: "erledigt", zugewiesen: "Hausmeister Weber" },
];

export default function FeatureTickets() {
  const [selectedTicket, setSelectedTicket] = useState(0);

  // Auto-cycle through tickets
  useEffect(() => {
    const t = setInterval(() => setSelectedTicket((p) => (p + 1) % tickets.length), 2200);
    return () => clearInterval(t);
  }, []);

  const ticket = tickets[selectedTicket];

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left: Text */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 mb-4">
          <Wrench size={14} className="text-primary-600" />
          <span className="text-xs font-semibold text-primary-700">Tickets & Reparaturen</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
          Schaden gemeldet,{" "}
          <span className="text-primary-600">Handwerker direkt beauftragt.</span>
        </h3>
        <p className="text-slate-500 leading-relaxed mb-6">
          Mieter melden Schäden per Tablet, Sprache oder Handy. Sie sehen die Meldung
          sofort und leiten sie mit einem Klick an den Handwerker weiter.
        </p>
        <ul className="space-y-3">
          {[
            "Meldung per Formular oder Sprachassistent",
            "Automatische Priorität und Kategorisierung",
            "Direkte Zuweisung an Dienstleister",
            "Status-Updates für Mieter in Echtzeit",
            "Kompletter Verlauf dokumentiert",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
              <CheckCircle2 size={16} className="text-primary-600 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Mockup */}
      <div>
        <BrowserMockup url="app.immopilot.de/tickets">
          <div className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-slate-800">Offene Tickets</h4>
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-50 text-red-600 font-semibold">
                  1 Offen
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 font-semibold">
                  2 In Arbeit
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {/* Ticket list */}
              <div className="sm:col-span-3 space-y-2">
                {tickets.map((t, i) => (
                  <div
                    key={t.id}
                    onClick={() => setSelectedTicket(i)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      selectedTicket === i
                        ? "border-primary-300 bg-primary-50/50 shadow-sm"
                        : "border-slate-100 hover:border-slate-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold text-slate-400">{t.id}</span>
                      <div className={`w-2 h-2 rounded-full ${
                        t.prio === "hoch" ? "bg-red-400" : t.prio === "mittel" ? "bg-amber-400" : "bg-slate-300"
                      }`} />
                    </div>
                    <h5 className="text-xs font-semibold text-slate-800 mb-1 leading-tight">
                      {t.titel}
                    </h5>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400">
                      {t.melder.includes("Tablet") ? (
                        <Mic size={10} />
                      ) : (
                        <User size={10} />
                      )}
                      <span>{t.melder}</span>
                      <span>·</span>
                      <Clock size={10} />
                      <span>{t.zeit}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ticket detail */}
              <div className="sm:col-span-2 bg-slate-50 rounded-xl p-3 border border-slate-100">
                <div className="mb-3">
                  <span className="text-[10px] font-bold text-primary-600">{ticket.id}</span>
                  <h5 className="text-xs font-bold text-slate-800 mt-1 leading-tight">
                    {ticket.titel}
                  </h5>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-500">Status</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                      ticket.status === "offen"
                        ? "bg-red-50 text-red-600"
                        : ticket.status === "zugewiesen"
                        ? "bg-amber-50 text-amber-600"
                        : "bg-green-50 text-green-600"
                    }`}>
                      {ticket.status === "offen" ? "Offen" : ticket.status === "zugewiesen" ? "In Arbeit" : "Erledigt"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-500">Priorität</span>
                    <span className={`text-[10px] font-semibold ${
                      ticket.prio === "hoch" ? "text-red-500" : ticket.prio === "mittel" ? "text-amber-500" : "text-slate-400"
                    }`}>
                      {ticket.prio.charAt(0).toUpperCase() + ticket.prio.slice(1)}
                    </span>
                  </div>
                  {ticket.zugewiesen && (
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-slate-500">Zugewiesen</span>
                      <span className="text-[10px] font-medium text-slate-700 flex items-center gap-1">
                        <UserCheck size={10} className="text-primary-600" />
                        {ticket.zugewiesen}
                      </span>
                    </div>
                  )}
                </div>

                {ticket.status === "offen" && (
                  <button className="w-full py-2 bg-primary-600 text-white text-[10px] font-semibold rounded-lg flex items-center justify-center gap-1">
                    Zuweisen <ArrowRight size={10} />
                  </button>
                )}

                {ticket.status !== "offen" && (
                  <div className="bg-white rounded-lg p-2 border border-slate-200">
                    <div className="flex items-center gap-1.5 mb-1">
                      <MessageSquare size={10} className="text-slate-400" />
                      <span className="text-[10px] font-semibold text-slate-600">Letzte Nachricht</span>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-relaxed">
                      {ticket.status === "erledigt"
                        ? "Reparatur abgeschlossen. Leuchtmittel getauscht."
                        : "Termin vereinbart für morgen 10:00 Uhr."
                      }
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </BrowserMockup>
      </div>
    </div>
  );
}
