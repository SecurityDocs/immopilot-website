"use client";

import Link from "next/link";
import { ArrowLeft, Printer, AlertTriangle, CheckCircle } from "lucide-react";
import { useState } from "react";

type TabType = "zahlungsverzug" | "laerm" | "hausordnung";

export default function AbmahnungMieterPage() {
  const [activeTab, setActiveTab] = useState<TabType>("zahlungsverzug");

  const templates = {
    zahlungsverzug: {
      title: "Abmahnung wegen Zahlungsverzug",
      desc: "Wenn der Mieter mit der Mietzahlung im Rückstand ist.",
      subject: "Abmahnung wegen Zahlungsverzug",
      body: `Sehr geehrte/r [Mietername],

mit dieser Abmahnung weisen wir Sie auf einen erheblichen Verstoß gegen Ihre Mietpflichten hin.

Sie sind mit der Mietzahlung für die Wohnung [Adresse] seit [Monat/Jahr] in Höhe von [Betrag] Euro im Rückstand. Bisher haben Sie dieser Zahlungsverpflichtung nicht nachgekommen, obwohl Sie mehrfach aufgefordert wurden.

Das Nichtbezahlen der Miete stellt einen erheblichen Verstoß gegen den Mietvertrag dar und ist ein Grund für die fristlose Kündigung des Mietverhältnisses (§543 Abs. 2 BGB).

Wir fordern Sie hiermit auf, die ausstehende Miete in Höhe von [Betrag] Euro bis zum [Datum – mind. 7 Tage] auf das Konto [Kontodetails] zu überweisen.

Sollten Sie dieser Aufforderung nicht nachkommen, werden wir gezwungen sein, das Mietverhältnis fristlos zu kündigen und rechtliche Schritte einzuleiten.

Mit freundlichen Grüßen,`,
    },
    laerm: {
      title: "Abmahnung wegen Lärmbelästigung",
      desc: "Wenn der Mieter die Hausordnung durch Lärm verletzt.",
      subject: "Abmahnung wegen Lärmbelästigung",
      body: `Sehr geehrte/r [Mietername],

mit dieser Abmahnung weisen wir Sie auf Verstöße gegen die Hausordnung und das Gebot der gegenseitigen Rücksichtnahme hin.

Mehrfach wurden Beschwerden von Nachbarn eingereicht, die angeben, dass Sie in der Wohnung [Adresse] wiederholt Lärm verursachen, der die Ruhezeiten (20:00 – 07:00 Uhr) verletzt und die Nachbarn in ihrer Nachtruhe beeinträchtigt. Die Fälle ereigneten sich an folgenden Daten: [Daten eintragen].

Das Verursachen von übermäßigem Lärm während der Ruhezeiten verstößt gegen die geltende Hausordnung und gegen Ihre vertragliche Pflicht zur gegenseitigen Rücksichtnahme auf andere Bewohner (§536 BGB).

Wir weisen Sie hiermit ab, solche Ruhestörungen unverzüglich einzustellen. Sollten weitere Beschwerden eingehen, werden wir eine Kündigung des Mietverhältnisses in Betracht ziehen.

Mit freundlichen Grüßen,`,
    },
    hausordnung: {
      title: "Abmahnung wegen Verstoß gegen Hausordnung",
      desc: "Allgemeine Verstöße gegen die Hausordnung.",
      subject: "Abmahnung – Verstoß gegen Hausordnung",
      body: `Sehr geehrte/r [Mietername],

mit dieser Abmahnung weisen wir Sie auf einen Verstoß gegen die Hausordnung hin.

Am [Datum] wurde festgestellt, dass Sie gegen folgende Regelungen der Hausordnung verstoßen haben: [Verstoß beschreiben, z.B. „unbefugte Parkplatznutzung", „fehlerhafte Müllentsorgung", „unerlaubte Mieterpartys"].

Diese Verstöße verstoßen gegen die geltende Hausordnung und gefährden das friedliche Zusammenleben aller Bewohner des Hauses.

Wir fordern Sie hiermit auf, diese Verstöße sofort einzustellen und die Hausordnung zukünftig zu beachten. Sollten weitere Verstöße vorkommen, werden wir gezwungen sein, das Mietverhältnis zu kündigen.

Mit freundlichen Grüßen,`,
    },
  };

  const current = templates[activeTab];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 pt-28 pb-12 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/vorlagen"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 text-sm font-medium"
          >
            <ArrowLeft size={16} /> Zurück zu Vorlagen
          </Link>

          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 border border-primary-200 mb-4">
                <span className="w-2 h-2 rounded-full bg-primary-700"></span>
                <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">
                  Mahnwesen & Kündigung
                </span>
              </div>
              <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
                Abmahnung Mieter
              </h1>
              <p className="text-slate-500">
                Pflichtschritt vor fristloser Kündigung · 3 Varianten · Stand 2026
              </p>
            </div>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-4 py-2 rounded-xl transition-colors"
            >
              <Printer size={18} /> Drucken
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-20">
        {/* Warning Box */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8 flex gap-4">
          <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="font-bold text-amber-900 mb-1">
              Abmahnung ist ein Pflichtschritt vor fristloser Kündigung
            </h3>
            <p className="text-sm text-amber-800">
              Nach §543 Abs. 2 BGB ist eine vorherige Abmahnung notwendig, bevor Sie eine fristlose
              Kündigung aussprechen können. Die Abmahnung muss schriftlich erfolgen und den konkreten
              Verstoß beschreiben. Ausnahmen gelten nur bei Zahlungsverzug von mindestens 2 Monatsmieten
              oder mehreren Teilen.
            </p>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {(["zahlungsverzug", "laerm", "hausordnung"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                activeTab === tab
                  ? "bg-primary-600 text-white"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
            >
              {tab === "zahlungsverzug" && "Zahlungsverzug"}
              {tab === "laerm" && "Lärmbelästigung"}
              {tab === "hausordnung" && "Hausordnung"}
            </button>
          ))}
        </div>

        {/* Template */}
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-12 print:border-0 print:shadow-none print:bg-white mb-8 space-y-8">
          {/* Header */}
          <div className="text-center border-b border-slate-300 pb-6">
            <h2 className="text-2xl font-bold text-slate-900">{current.title}</h2>
          </div>

          {/* Addresses */}
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Absender (Vermieter)
              </p>
              <div className="space-y-1 pb-6 border-b border-slate-200">
                <div className="border-b border-slate-300 h-5"></div>
                <div className="border-b border-slate-300 h-5"></div>
                <div className="border-b border-slate-300 h-5"></div>
                <div className="border-b border-slate-300 h-5"></div>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                Empfänger (Mieter)
              </p>
              <div className="space-y-1 pb-6 border-b border-slate-200">
                <div className="border-b border-slate-300 h-5"></div>
                <div className="border-b border-slate-300 h-5"></div>
                <div className="border-b border-slate-300 h-5"></div>
                <div className="border-b border-slate-300 h-5"></div>
              </div>
            </div>
          </div>

          {/* Date */}
          <div className="pb-1">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Ort und Datum
            </label>
            <div className="border-b border-slate-300 h-6 mt-2"></div>
          </div>

          {/* Subject */}
          <div className="pb-1">
            <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Betreff
            </label>
            <div className="bg-slate-50 border border-slate-200 rounded p-3 text-slate-800 text-sm mt-2">
              {current.subject}
            </div>
          </div>

          {/* Body */}
          <div className="text-sm leading-relaxed text-slate-800 space-y-6 whitespace-pre-wrap">
            {current.body}
          </div>

          {/* Signature Area */}
          <div className="pt-6 border-t border-slate-200">
            <div className="space-y-2">
              <div className="border-b border-slate-300 h-16"></div>
              <p className="text-xs text-slate-600">
                (Unterschrift des Vermieters oder bevollmächtigter Vertreter)
              </p>
            </div>
          </div>

          {/* Legal Note */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs text-slate-600 space-y-2">
            <p className="font-semibold text-slate-700">Zu beachten:</p>
            <p>
              • <strong>Schriftform und Versand:</strong> Die Abmahnung muss schriftlich erfolgen und
              sollte per Einschreiben mit Rückschein versendet werden.
            </p>
            <p>
              • <strong>Konkrete Darstellung:</strong> Der Verstoß muss präzise beschrieben werden
              (Datum, Art des Verstoßes, ggf. Zeugen).
            </p>
            <p>
              • <strong>Aufforderung zur Abhilfe:</strong> Geben Sie eine angemessene Frist zur Behebung
              des Mangels (mindestens 7-14 Tage).
            </p>
            <p>
              • <strong>Verweis auf Konsequenzen:</strong> Machen Sie deutlich, dass bei weiteren
              Verstößen eine Kündigung folgen wird.
            </p>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <h3 className="font-bold text-blue-900 mb-3">Unterschied zwischen Abmahnung und Kündigung</h3>
          <div className="space-y-3 text-sm text-blue-800">
            <p>
              <strong>Abmahnung:</strong> Ein Verweis auf einen Verstoß mit der Aufforderung, diesen zu
              beheben. Sie ist ein Vorwarnschreck und gibt dem Mieter die Gelegenheit, sein Verhalten zu
              ändern.
            </p>
            <p>
              <strong>Fristlose Kündigung:</strong> Nach einer Abmahnung können Sie bei erneutem Verstoß
              oder schwerem Fehlverhalten das Mietverhältnis fristlos kündigen – aber nur mit einer
              vorherigen Abmahnung.
            </p>
            <p>
              <strong>Ausnahme:</strong> Bei Zahlungsverzug von mindestens 2 Monatsmieten oder mehreren
              Raten können Sie auch ohne Abmahnung fristlos kündigen.
            </p>
          </div>
        </div>

        {/* Tip Box */}
        <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6 mb-8 flex gap-4">
          <CheckCircle className="text-primary-600 shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="font-bold text-primary-900 mb-1">
              Dokumentation mit ImmoPilot
            </h3>
            <p className="text-sm text-primary-800 mb-3">
              Mit ImmoPilot können Sie Abmahnungen systematisch dokumentieren, Verstoßmeldungen
              verwalten und automatisch Fristen überwachen – alles mit digitaler Bestätigung und
              Nachverfolgung.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-700"
            >
              → Demo anfragen
            </Link>
          </div>
        </div>

        {/* Related Links */}
        <div className="bg-slate-100 rounded-2xl p-6">
          <h3 className="font-bold text-slate-900 mb-4">Weitere nützliche Vorlagen</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <Link
              href="/vorlagen/mahnung-miete"
              className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-primary-300 hover:shadow-sm transition-all group"
            >
              <AlertTriangle size={16} className="text-primary-600" />
              <span className="text-sm font-medium text-slate-700 group-hover:text-primary-600">
                Mahnung bei Mietrückstand
              </span>
            </Link>
            <Link
              href="/vorlagen/eigenbedarfskuendigung"
              className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-primary-300 hover:shadow-sm transition-all group"
            >
              <AlertTriangle size={16} className="text-primary-600" />
              <span className="text-sm font-medium text-slate-700 group-hover:text-primary-600">
                Eigenbedarfskündigung
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
