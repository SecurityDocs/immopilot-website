"use client";

import Link from "next/link";
import { Printer, ArrowLeft } from "lucide-react";

export default function HausordnungPage() {
  return (
    <main className="pt-20 pb-16 bg-slate-50">
      <div className="bg-white border-b border-slate-200 py-3 print:hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <Link href="/vorlagen" className="flex items-center gap-2 text-sm text-slate-600 hover:text-primary-600">
            <ArrowLeft size={16} /> Alle Vorlagen
          </Link>
          <button onClick={() => window.print()} className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700">
            <Printer size={15} /> Als PDF speichern
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 print:hidden">
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <h1 className="text-xl font-extrabold text-slate-900 mb-1">Hausordnung Mehrfamilienhaus</h1>
          <p className="text-sm text-slate-500 mb-3">Vollständige Hausordnung mit Ruhezeiten, Müllentsorgung, Treppenhausreinigung, Haustieren und weiteren Regelungen — als Mietvertragsanlage oder Aushang.</p>
          <div className="flex flex-wrap gap-2">
            {["3 Seiten", "Vollständig", "Als Aushang geeignet"].map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 print:border-0 print:p-0 space-y-6 text-sm text-slate-800">

          <div className="text-center border-b border-slate-200 pb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Hausordnung</h2>
            <p className="text-slate-500">für das Mehrfamilienhaus</p>
            <div className="border-b border-slate-300 h-6 max-w-xs mx-auto mt-2" />
            <p className="text-xs text-slate-400 mt-1">Straße, Hausnummer, PLZ, Ort</p>
          </div>

          <p className="text-slate-600 leading-relaxed">
            Diese Hausordnung ist Bestandteil des Mietvertrages und gilt für alle Mieter, Bewohner und deren Gäste. Sie dient dem geordneten und rücksichtsvollen Zusammenleben im Haus.
          </p>

          {[
            {
              title: "§ 1 Ruhezeiten",
              content: [
                "Nachtruhe: täglich von 22:00 Uhr bis 06:00 Uhr",
                "Mittagsruhe: täglich von 13:00 Uhr bis 15:00 Uhr",
                "Sonntagsruhe: ganztägig eingeschränkte Lautstärke",
                "Musizieren und lautes Musizieren ist in den Ruhezeiten untersagt. Außerhalb der Ruhezeiten ist auf die Mitmieter Rücksicht zu nehmen.",
                "Betriebsgeräte (z. B. Waschmaschinen, Staubsauger) dürfen in den Ruhezeiten nicht benutzt werden.",
              ],
            },
            {
              title: "§ 2 Treppenhausreinigung",
              content: [
                "Das Treppenhaus, die Flure, der Keller und sonstige Gemeinschaftsflächen sind von allen Mietern sauber und ordentlich zu halten.",
                "Die Reinigung des Treppenhauses erfolgt nach folgendem Turnus: ___________________________",
                "Jeder Mieter hat den auf ihn entfallenden Reinigungsbereich regelmäßig zu reinigen, zu kehren und zu wischen.",
                "Der Hauseingangsbereich ist bei Schnee und Eis zu räumen und zu streuen (soweit nicht durch Reinigungsdienst geregelt).",
              ],
            },
            {
              title: "§ 3 Müllentsorgung",
              content: [
                "Müll ist ausschließlich in die dafür vorgesehenen Behälter zu entsorgen (Restmüll, Gelber Sack, Papier, Bio, Glas).",
                "Sperrmüll darf nicht im Hausflur oder Keller abgestellt werden, sondern ist beim Sperrmüllservice der Gemeinde anzumelden.",
                "Die Mülltonnen sind nach der Leerung vom Straßenrand in den vorgesehenen Bereich zurückzustellen.",
                "Glas darf nur werktags zwischen 07:00 und 20:00 Uhr entsorgt werden.",
              ],
            },
            {
              title: "§ 4 Gemeinschaftsräume und -flächen",
              content: [
                "Keller, Dachboden, Waschküche und sonstige Gemeinschaftsräume sind nach der Benutzung ordentlich zu hinterlassen.",
                "Fahrräder dürfen nur in den dafür vorgesehenen Bereichen abgestellt werden — nicht im Treppenhaus oder Hauseingang.",
                "Kinderwagen und Rollatoren dürfen im Eingangsbereich abgestellt werden, sofern Fluchtwege frei bleiben.",
                "Das Lagern von brennbaren oder explosiven Materialien im Keller oder in Gemeinschaftsräumen ist untersagt.",
              ],
            },
            {
              title: "§ 5 Haustiere",
              content: [
                "Die Haltung von Kleintieren (Hamster, Zierfische, Vögel in Käfigen) ist ohne gesonderte Erlaubnis gestattet.",
                "Die Haltung von Hunden und Katzen bedarf der vorherigen schriftlichen Genehmigung des Vermieters.",
                "Haustiere sind so zu halten, dass Mitmieter und Nachbarn nicht belästigt werden.",
                "Die Verunreinigung von Gemeinschaftsflächen durch Haustiere ist unverzüglich zu beseitigen.",
              ],
            },
            {
              title: "§ 6 Rauchen",
              content: [
                "Das Rauchen ist in allen Gemeinschaftsbereichen (Treppenhaus, Keller, Waschküche, Tiefgarage) untersagt.",
                "Im Außenbereich ist auf die Mitmieter Rücksicht zu nehmen; Zigarettenkippen sind in vorgesehene Behälter zu entsorgen.",
                "Ob in der eigenen Wohnung geraucht werden darf, richtet sich nach dem Mietvertrag.",
              ],
            },
            {
              title: "§ 7 Garagennutzung und Parkplätze",
              content: [
                "Garagen und Stellplätze dürfen nur für Kraftfahrzeuge genutzt werden — nicht als Lager- oder Werkstattraum.",
                "Reparaturarbeiten, die mit Lärm oder Ölwechsel verbunden sind, sind in der Garage untersagt.",
                "Besucher dürfen Besucherstellplätze nur kurzzeitig nutzen. Dauerparken ist nicht gestattet.",
              ],
            },
            {
              title: "§ 8 Sicherheit",
              content: [
                "Haustür und Kellertür sind stets geschlossen zu halten. Haustüren dürfen nicht aufgekeilt werden.",
                "Verteiler, Sicherungsschränke und Feuerlöscheinrichtungen dürfen nicht verdeckt oder blockiert werden.",
                "Verdächtige Personen oder Sachverhalte sind dem Vermieter oder der Polizei zu melden.",
                "Schlüssel sind sorgfältig aufzubewahren. Verlust ist dem Vermieter unverzüglich zu melden.",
              ],
            },
            {
              title: "§ 9 Wassernutzung",
              content: [
                "Wasserhähne und Spülungen sind nach Benutzung stets vollständig zu schließen.",
                "Wasserschäden sind dem Vermieter unverzüglich zu melden.",
                "Das Ablassen größerer Wassermengen (z. B. Füllen von Swimmingpools) ist vorher mit dem Vermieter abzustimmen.",
              ],
            },
            {
              title: "§ 10 Schlussbestimmungen",
              content: [
                "Verstöße gegen diese Hausordnung berechtigen den Vermieter, nach vorheriger Abmahnung, das Mietverhältnis zu kündigen.",
                "Änderungen der Hausordnung werden den Mietern rechtzeitig schriftlich mitgeteilt.",
                "Stand dieser Hausordnung: 2026",
              ],
            },
          ].map(({ title, content }) => (
            <div key={title}>
              <h3 className="font-bold text-slate-900 mb-2 text-base border-b border-slate-100 pb-1">{title}</h3>
              <ul className="space-y-1">
                {content.map((item, i) => (
                  <li key={i} className="flex gap-2 text-slate-600">
                    <span className="text-primary-400 shrink-0 mt-0.5">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-bold text-slate-900 mb-4 text-base border-b border-slate-100 pb-2">Kenntnisnahme durch Mieter</h3>
            <p className="text-xs text-slate-500 mb-4">Die Mieter bestätigen durch ihre Unterschrift, die Hausordnung erhalten und von ihrem Inhalt Kenntnis genommen zu haben.</p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <div className="border-b border-slate-300 h-12 mb-1" />
                <p className="text-xs text-slate-500">Ort, Datum</p>
                <div className="border-b border-slate-300 mt-4 h-12 mb-1" />
                <p className="text-xs text-slate-500">Vermieter — Unterschrift</p>
              </div>
              <div>
                <div className="border-b border-slate-300 h-12 mb-1" />
                <p className="text-xs text-slate-500">Ort, Datum</p>
                <div className="border-b border-slate-300 mt-4 h-12 mb-1" />
                <p className="text-xs text-slate-500">Mieter — Unterschrift(en)</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 text-xs text-slate-400">
            <p>Hausordnung Vorlage · Stand: 2026 · ImmoPilot — immopilot.de · Kein Ersatz für individuelle Rechtsberatung.</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 print:hidden">
        <div className="bg-primary-600 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg mb-1">Hausordnung digital verwalten</h3>
            <p className="text-sm text-primary-200">Mit ImmoPilot stellen Sie die Hausordnung als digitales Dokument im Mieter-Portal bereit.</p>
          </div>
          <Link href="/#contact" className="shrink-0 bg-white text-primary-600 font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-primary-50 transition-colors">
            Demo anfragen
          </Link>
        </div>
      </div>
    </main>
  );
}
