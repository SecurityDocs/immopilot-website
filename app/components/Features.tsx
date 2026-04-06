"use client";

import { useState } from "react";
import {
  MessageSquare, TrendingUp, Building2, Mail,
  Receipt, Tablet, ChevronRight,
} from "lucide-react";
import FeatureKommunikation from "./features/FeatureKommunikation";
import FeatureCashflow from "./features/FeatureCashflow";
import FeatureBestand from "./features/FeatureBestand";
import FeatureBriefservice from "./features/FeatureBriefservice";
import FeatureAbrechnung from "./features/FeatureAbrechnung";
import FeatureTablet from "./features/FeatureTablet";

const tabs = [
  {
    id: "bestand",
    icon: Building2,
    label: "Bestandsübersicht",
    problem: "Objekte, Mieter & Verträge",
    component: FeatureBestand,
  },
  {
    id: "cashflow",
    icon: TrendingUp,
    label: "Cashflow",
    problem: "Zahlungen & Vorschau",
    component: FeatureCashflow,
  },
  {
    id: "abrechnung",
    icon: Receipt,
    label: "Rechnungen & NK",
    problem: "Nebenkosten per Klick",
    component: FeatureAbrechnung,
  },
  {
    id: "kommunikation",
    icon: MessageSquare,
    label: "Kommunikation",
    problem: "Mieter & E-Mails zentral",
    component: FeatureKommunikation,
  },
  {
    id: "briefservice",
    icon: Mail,
    label: "Briefservice",
    problem: "KI schreibt, Sie klicken",
    component: FeatureBriefservice,
  },
  {
    id: "tablet",
    icon: Tablet,
    label: "Tablet 2026",
    problem: "Mieter-Selfservice · ab Professional",
    component: FeatureTablet,
    special: true,
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState("bestand");

  const ActiveComponent = tabs.find((t) => t.id === activeTab)?.component ?? FeatureBestand;

  return (
    <section className="py-20 lg:py-28 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-5">
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">Alle Funktionen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Was ImmoPilot für Sie{" "}
            <span className="text-primary-600">täglich erledigt</span>
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Wählen Sie eine Funktion — sehen Sie sofort, wie ImmoPilot das Problem löst.
          </p>
        </div>

        {/* Tab layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Sidebar tabs */}
          <div className="lg:w-56 flex-shrink-0">
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-shrink-0 lg:flex-shrink text-left flex items-start gap-3 px-3 py-3 rounded-xl border transition-all w-40 lg:w-full ${
                      isActive
                        ? tab.special
                          ? "bg-amber-500 border-amber-500 text-white shadow-sm"
                          : "bg-primary-600 border-primary-600 text-white shadow-sm"
                        : tab.special
                          ? "bg-amber-50 border-amber-200 text-amber-700 hover:border-amber-400"
                          : "bg-white border-slate-200 text-slate-700 hover:border-primary-300 hover:bg-primary-50"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={`mt-0.5 flex-shrink-0 ${isActive ? "text-white" : tab.special ? "text-amber-600" : "text-primary-600"}`}
                    />
                    <div className="min-w-0">
                      <div className={`text-sm font-semibold leading-tight ${isActive ? "text-white" : "text-slate-800"}`}>
                        {tab.label}
                      </div>
                      <div className={`text-xs mt-0.5 leading-tight ${isActive ? (tab.special ? "text-amber-100" : "text-primary-200") : tab.special ? "text-amber-500" : "text-slate-400"}`}>
                        {tab.problem}
                      </div>
                    </div>
                    {isActive && (
                      <ChevronRight size={14} className="ml-auto text-white/60 hidden lg:block mt-1 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content panel */}
          <div className="flex-1 bg-slate-50 rounded-2xl border border-slate-100 p-4 sm:p-6 lg:p-8 min-h-[400px] sm:min-h-[520px] overflow-hidden">
            <ActiveComponent key={activeTab} />
          </div>
        </div>
      </div>
    </section>
  );
}
