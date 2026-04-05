"use client";

import { Zap } from "lucide-react";
import FeatureCSV from "./features/FeatureCSV";
import FeatureMieter from "./features/FeatureMieter";
import FeatureNK from "./features/FeatureNK";
import FeatureTickets from "./features/FeatureTickets";
import FeatureDokumente from "./features/FeatureDokumente";
import FeatureMahnwesen from "./features/FeatureMahnwesen";
import FeatureMietpreis from "./features/FeatureMietpreis";

export default function Features() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-6">
            <Zap size={14} className="text-primary-600" />
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">
              Alle Funktionen
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Sehen Sie selbst,{" "}
            <span className="gradient-text">wie die Hausverwaltung Software funktioniert.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Jede Funktion in ImmoPilot wurde für die Anforderungen von Eigentümern und
            Verwaltern von Mehrfamilienhäusern gebaut. Hier sehen Sie, was die Software im Alltag leistet.
          </p>
        </div>

        {/* Feature showcases */}
        <div className="space-y-24 lg:space-y-32">
          <FeatureCSV />
          <FeatureMieter />
          <FeatureNK />
          <FeatureTickets />
          <FeatureDokumente />
          <FeatureMahnwesen />
          <FeatureMietpreis />
        </div>
      </div>
    </section>
  );
}
