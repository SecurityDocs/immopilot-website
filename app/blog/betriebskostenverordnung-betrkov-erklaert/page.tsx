

import Link from "next/link";
import { Calendar, Clock, ArrowLeft, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BetrKV erklärt: Welche Betriebskosten sind umlagefähig? 2026",
  description:
    "Die Betriebskostenverordnung (BetrKV) im Überblick: Welche Kosten dürfen Vermieter auf Mieter umlegen? Mit vollständiger Liste und Beispielen.",
};

const umlagefaehig = [
  { nr: "1", kosten: "Grundsteuer", details: "Der Anteil, der auf die Mietsache entfällt. Wichtig: Nicht die Grundsteuer für vermietete Gewerbeeinheiten auf Wohnmieter umlegen." },
  { nr: "2", kosten: "Wasser / Entwässerung", details: "Kosten für Frischwasser, Warmwasser (anteilig Kaltwasseranteil), Abwasser und Niederschlagswasser." },
  { nr: "3", kosten: "Heizung / Warmwasser", details: "Unterliegt der HeizkostenV: mindestens 50-70% nach Verbrauch, Rest nach Fläche. Achtung: Separate Abrechnung erforderlich." },
  { nr: "4", kosten: "Aufzug", details: "Betrieb, Wartung, Prüfung durch TÜV. Bewohner im EG müssen zahlen, wenn der Aufzug erreichbar ist." },
  { nr: "5", kosten: "Straßenreinigung / Müllabfuhr", details: "Öffentliche Straßenreinigungsgebühren und Müllgebühren der Gemeinde." },
  { nr: "6", kosten: "Hausreinigung / Ungezieferbekämpfung", details: "Regelmäßige Reinigung der Gemeinschaftsflächen, Schädlingsbekämpfung (wenn nicht durch Mieter verursacht)." },
  { nr: "7", kosten: "Gartenpflege", details: "Pflege von Gemeinschaftsgärten, Rasenmähen, Heckenschnitt. Nicht umlagefähig: Erstbepflanzung oder größere Umgestaltungen." },
  { nr: "8", kosten: "Allgemeinbeleuchtung", details: "Strom für Gemeinschaftsflächen: Treppenhaus, Keller, Stellplätze, Außenbeleuchtung." },
  { nr: "9", kosten: "Schornsteinreinigung", details: "Gesetzlich vorgeschriebene Kehrgebühren nach Kehrgebührenordnung." },
  { nr: "10", kosten: "Sach- und Haftpflichtversicherung", details: "Gebäudeversicherung, Haftpflicht für das Gebäude, Glasversicherung. Nicht: Hausrat der Mieter." },
  { nr: "11", kosten: "Hauswart", details: "Nur Betriebskostenanteile der Hauswartstätigkeit — Instandhaltungsarbeiten müssen herausgerechnet werden." },
  { nr: "12", kosten: "Gemeinschaftsantenne / Kabelanschluss", details: "Wartung der Gemeinschaftsantenne. Achtung: Seit TKG-Reform 2022 nur noch umlagefähig, wenn Mietvertrag vor dem 1.12.2021 geschlossen wurde oder Mieter zustimmt." },
  { nr: "13", kosten: "Breitbandnetz", details: "Wie Nr. 12 — stark eingeschränkt durch TKG-Reform." },
  { nr: "14", kosten: "Sonstige Betriebskosten", details: "Müssen im Mietvertrag konkret benannt sein. Typisch: Dachrinnenreinigung, Legionellenprüfung, Sicherheitsdienst, Wartung der Rauchwarnmelder." },
];

export default function Page() {
  return (
    <main>
      
      <div className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 mb-8">
            <ArrowLeft size={14} /> Zurück zum Blog
          </Link>

          <div className="mb-8">
            <span className="text-xs font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">Mietrecht</span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4 leading-tight">
              BetrKV erklärt: Welche Kosten sind umlagefähig?
            </h1>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1"><Calendar size={14} /> 15. Januar 2026</span>
              <span className="flex items-center gap-1"><Clock size={14} /> 9 min Lesezeit</span>
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">

            <h2 className="text-2xl font-extrabold text-slate-900 mt-8 mb-4">Was ist die BetrKV?</h2>
            <p>
              Die <strong>Betriebskostenverordnung (BetrKV)</strong> definiert in §2, welche laufenden Kosten eines Gebäudes Vermieter auf Mieter umlegen dürfen. Sie ist die zentrale Grundlage für jede Nebenkostenabrechnung in Deutschland.
            </p>
            <p>
              Wichtig: Die BetrKV listet die umlagefähigen Kosten <em>abschließend</em> auf. Kosten, die dort nicht erscheinen, dürfen grundsätzlich nicht auf Mieter umgelegt werden — egal, was im Mietvertrag steht. Verstößt eine Klausel im Mietvertrag gegen die BetrKV, ist sie unwirksam.
            </p>
            <p>
              Zweite Voraussetzung: Die Kosten müssen auch <em>im Mietvertrag</em> vereinbart sein. Nur weil etwas in der BetrKV steht, dürfen Sie es nicht automatisch umlegen.
            </p>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Alle 14 Betriebskostenarten im Überblick</h2>
            <div className="space-y-3">
              {umlagefaehig.map(({ nr, kosten, details }) => (
                <div key={nr} className="border border-slate-200 rounded-xl p-4">
                  <div className="flex gap-3 items-start">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-lg flex items-center justify-center text-xs font-bold shrink-0">
                      {nr}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 mb-1">{kosten}</p>
                      <p className="text-sm text-slate-600">{details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Was definitiv NICHT umlagefähig ist</h2>
            <div className="bg-red-50 rounded-xl p-5 border border-red-200">
              <div className="space-y-2 text-sm">
                {[
                  "Verwaltungskosten (Hausverwaltungsgebühren, Buchhaltung, Kontoführung)",
                  "Instandhaltungs- und Reparaturkosten (Austausch defekter Teile, Renovierung)",
                  "Modernisierungskosten (werden über §559 BGB separat umgelegt)",
                  "Leerstandskosten (anteilige Kosten für leerstehende Wohnungen)",
                  "Abschreibungen und Finanzierungskosten",
                  "Einmalige Anschaffungskosten (z.B. neue Möbel für Gemeinschaftsräume)",
                  "Versicherungskosten für das Sondereigentum einzelner Wohnungen",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-red-500 font-bold shrink-0">✕</span>
                    <span className="text-red-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Der Sonderfall: Sonstige Betriebskosten (§2 Nr. 17)</h2>
            <p>
              Die Sammelkategorie "sonstige Betriebskosten" erlaubt es, weitere Kosten umzulegen — aber nur wenn diese <strong>konkret im Mietvertrag benannt</strong> sind. Formulierungen wie "sonstige Kosten wie üblich" reichen nicht.
            </p>
            <p>Typische Positionen, die unter diese Kategorie fallen und umgelegt werden dürfen (wenn vertraglich vereinbart):</p>
            <div className="space-y-2 text-sm">
              {[
                "Dachrinnenreinigung",
                "Legionellenprüfung (Trinkwasser-Installationsinspektion)",
                "Wartung der Rauchwarnmelder (Mieter können alternativ selbst prüfen)",
                "Wartung von CO-Meldern und Sicherheitssystemen",
                "Reinigung von Regenwasserzisternen",
                "Kosten für Sicherheitsdienst / Portier",
                "Kosten für Mülltonnenreinigung",
                "Inspektion von Feuerlöschern",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Praxistipp: Checkliste vor der Abrechnung</h2>
            <div className="space-y-2 text-sm">
              {[
                "Jeden Posten gegen §2 BetrKV prüfen: Steht er in der Liste?",
                "Im Mietvertrag nachschauen: Ist der Posten dort vereinbart?",
                "Verwaltungskosten herausrechnen (insb. beim Hauswart)",
                "Instandhaltungsanteile herausrechnen (z.B. aus Hauswartsrechnung)",
                "Heizkosten separat nach HeizkostenV abrechnen",
                "Alle Belege aufbewahren — Mieter darf Einsicht verlangen",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-slate-50 rounded-lg p-3 border border-slate-100">
                  <CheckCircle size={16} className="text-primary-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-primary-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-extrabold mb-3">Nebenkostenabrechnung rechtssicher automatisieren</h3>
            <p className="text-primary-100 mb-6 max-w-lg mx-auto">
              ImmoPilot prüft automatisch, welche Kosten umlagefähig sind, und erstellt die Abrechnung nach aktueller BetrKV.
            </p>
            <Link href="/#demo" className="inline-block bg-white text-primary-600 font-bold px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors">
              Kostenlose Demo anfragen
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-200">
            <p className="font-bold text-slate-900 mb-4">Weitere Ratgeber:</p>
            <div className="space-y-2">
              <Link href="/blog/nebenkostenabrechnung-selber-machen" className="block text-primary-600 hover:underline text-sm">→ Nebenkostenabrechnung selber machen — Schritt-für-Schritt</Link>
              <Link href="/blog/miethoehung-mietspiegel-2026" className="block text-primary-600 hover:underline text-sm">→ Mieterhöhung nach Mietspiegel 2026</Link>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  );
}
