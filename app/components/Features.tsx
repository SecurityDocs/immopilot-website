"use client";

import { useState } from "react";
import {
  CreditCard,
  Users,
  Receipt,
  Ticket,
  FolderOpen,
  AlertCircle,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import FeatureCSV from "./features/FeatureCSV";
import FeatureMieter from "./features/FeatureMieter";
import FeatureNK from "./features/FeatureNK";
import FeatureTickets from "./features/FeatureTickets";
import FeatureDokumente from "./features/FeatureDokumente";
import FeatureMahnwesen from "./features/FeatureMahnwesen";
import FeatureMietpreis from "./features/FeatureMietpreis";

const tabs = [
  {
    id: "csv",
    icon: CreditCard,
    label: "Zahlungsabgleich",
    problem: "Wer hat noch nicht gezahlt?",
    component: FeatureCSV,
  },
  {
    id: "mieter",
    icon: Users,
    label: "Mieterportal",
    problem: "Mieter nerven mit Anrufen",
    component: FeatureMieter,
  },
  {
    id: "nk",
    icon: Receipt,
    label: "Nebenkosten",
    problem: "Abrechnung kostet Tage",
    component: FeatureNK,
  },
  {
    id: "tickets",
    icon: Ticket,
    label: "Ticket-System",
    problem: "Kein Überblick über Reparaturen",
    component: FeatureTickets,
  },
  {
    id: "dokumente",
    icon: FolderOpen,
    label: "Dokumente",
    problem: "Verträge nicht auffindbar",
    component: FeatureDokumente,
  },
  {
    id: "mahnung",
    icon: AlertCircle,
    label: "Mahnwesen",
    problem: "Mahnungen schreiben dauert",
    component: FeatureMahnwesen,
  },
  {
    id: "mietpreis",
    icon: TrendingUp,
    label: "Mietpreis-Analyse",
    problem: "Bin ich unter dem Marktniveau?",
    component: FeatureMietpreis,
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState("csv");

  const ActiveComponent = tabs.find((t) => t.id === activeTab)?.component ?? FeatureCSV;

  return (
    <section className="py-20 lg:py-28 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-5">
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">
              Alle Funktionen
            </span>
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
          <div className="lg:w-64 flex-shrink-0">
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
                        ? "bg-primary-600 border-primary-600 text-white shadow-sm"
                        : "bg-white border-slate-200 text-slate-700 hover:border-primary-300 hover:bg-primary-50"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={`mt-0.5 flex-shrink-0 ${isActive ? "text-white" : "text-primary-600"}`}
                    />
                    <div className="min-w-0">
                      <div className={`text-sm font-semibold leading-tight ${isActive ? "text-white" : "text-slate-800"}`}>
                        {tab.label}
                      </div>
                      <div className={`text-xs mt-0.5 leading-tight ${isActive ? "text-primary-200" : "text-slate-400"}`}>
                        {tab.problem}
                      </div>
                    </div>
                    {isActive && (
                      <ChevronRight size={14} className="ml-auto text-primary-200 hidden lg:block mt-1 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content panel */}
          <div className="flex-1 bg-slate-50 rounded-2xl border border-slate-100 p-6 lg:p-8 min-h-[520px]">
            <ActiveComponent />
          </div>
        </div>
      </div>
    </section>
  );
}
