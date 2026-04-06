import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — ImmoPilot",
  robots: "noindex",
};

export default function DatenschutzPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Datenschutzerklärung</h1>
        <p className="text-slate-500 text-sm mb-8">Stand: April 2026</p>
        <div className="prose prose-slate max-w-none space-y-5 text-slate-700 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">1. Datenschutz auf einen Blick</h2>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <h2 className="text-xl font-bold text-slate-900">2. Hosting</h2>
          <p>
            Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 801, San Francisco, California 94104, USA gehostet.
            Details:{" "}
            <a href="https://vercel.com/legal/privacy-policy" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
              vercel.com/legal/privacy-policy
            </a>
          </p>
          <h2 className="text-xl font-bold text-slate-900">3. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung. Sie haben außerdem das Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Kontakt: Impressum.
          </p>
          <h2 className="text-xl font-bold text-slate-900">4. Datenerfassung — Kontaktformular</h2>
          <p>
            Wenn Sie uns per Formular Anfragen zukommen lassen, werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert und nicht ohne Ihre Einwilligung weitergegeben. Die Übermittlung erfolgt über Formspree Inc.{" "}
            <a href="https://formspree.io/legal/privacy-policy" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
              formspree.io/legal/privacy-policy
            </a>
          </p>
          <h2 className="text-xl font-bold text-slate-900">5. Cookies & Tracking</h2>
          <p>
            Diese Website verwendet keine Tracking-Tools, keine Social-Media-Plugins und keine Werbenetzwerke. Es werden keine Cookies zu Tracking-Zwecken gesetzt.
          </p>
        </div>
      </div>
    </main>
  );
}
