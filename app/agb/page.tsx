import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB — ImmoPilot",
  robots: "noindex",
};

export default function AgbPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Allgemeine Geschäftsbedingungen</h1>
        <p className="text-slate-500 text-sm mb-8">Stand: April 2026</p>
        <div className="prose prose-slate max-w-none space-y-5 text-slate-700 text-sm leading-relaxed">
          {[
            { title: "§ 1 Geltungsbereich", text: "Diese AGB gelten für alle Verträge zwischen ImmoPilot und dem Kunden über die Nutzung der ImmoPilot-Software als SaaS. Abweichende Bedingungen des Kunden haben keine Gültigkeit." },
            { title: "§ 2 Leistungsbeschreibung", text: "ImmoPilot stellt dem Kunden eine cloudbasierte Software zur Verwaltung von Mietimmobilien zur Verfügung. Der Umfang ergibt sich aus dem gewählten Tarifplan." },
            { title: "§ 3 Laufzeit und Kündigung", text: "Die Mindestlaufzeit beträgt 1 Monat (ohne Hardware) bzw. 12 Monate (mit Tablet-Inklusion). Nach Ablauf verlängert sich der Vertrag um jeweils einen Monat, sofern er nicht 30 Tage zum Monatsende gekündigt wird." },
            { title: "§ 4 Preise und Zahlung", text: "Preise ergeben sich aus dem aktuellen Tarifplan, zzgl. gesetzlicher Mehrwertsteuer. Abrechnung erfolgt monatlich per SEPA-Lastschrift oder Kreditkarte." },
            { title: "§ 5 Datenschutz", text: "ImmoPilot verarbeitet personenbezogene Daten gemäß DSGVO. Ein Auftragsverarbeitungsvertrag (AVV) wird auf Anfrage abgeschlossen." },
            { title: "§ 6 Verfügbarkeit", text: "Wir streben 99,5% Verfügbarkeit im Jahresmittel an. Eine Garantie der ununterbrochenen Verfügbarkeit kann nicht übernommen werden." },
            { title: "§ 7 Haftung", text: "ImmoPilot haftet nur für Schäden aus der Verletzung wesentlicher Vertragspflichten und bei Vorsatz oder grober Fahrlässigkeit. Eine Haftung für indirekte Schäden ist ausgeschlossen." },
            { title: "§ 8 Schlussbestimmungen", text: "Es gilt deutsches Recht. Gerichtsstand ist der Sitz von ImmoPilot, sofern der Kunde Kaufmann ist." },
          ].map(({ title, text }) => (
            <div key={title}>
              <h2 className="text-lg font-bold text-slate-900 mt-6">{title}</h2>
              <p>{text}</p>
            </div>
          ))}
          <p className="text-xs text-slate-400 mt-8 pt-6 border-t border-slate-200">
            Diese AGB sind ein Entwurf und sollten vor dem Go-Live durch einen Rechtsanwalt geprüft werden.
          </p>
        </div>
      </div>
    </main>
  );
}
