import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — ImmoPilot",
  robots: "noindex",
};

export default function ImpressumPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Impressum</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>ImmoPilot</strong><br />
            [Ihr vollständiger Name oder Firmenname]<br />
            [Straße und Hausnummer]<br />
            [PLZ und Ort]<br />
            Deutschland
          </p>
          <h2 className="text-xl font-bold text-slate-900">Kontakt</h2>
          <p>
            Telefon: [Ihre Telefonnummer]<br />
            E-Mail: <a href="mailto:info@immopilot.de" className="text-primary-600 hover:underline">info@immopilot.de</a>
          </p>
          <h2 className="text-xl font-bold text-slate-900">Umsatzsteuer-ID</h2>
          <p>DE [Ihre USt-IdNr.]</p>
          <h2 className="text-xl font-bold text-slate-900">Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://ec.europa.eu/consumers/odr/</a>.
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
          <p className="text-xs text-slate-400 mt-8 pt-6 border-t border-slate-200">
            Bitte ersetzen Sie die Platzhalter in eckigen Klammern mit Ihren tatsächlichen Angaben vor dem Go-Live.
          </p>
        </div>
      </div>
    </main>
  );
}
