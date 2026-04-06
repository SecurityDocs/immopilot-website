import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eigenbedarfskündigung — Voraussetzungen, Fristen und häufige Fehler 2026",
  description:
    "Wann ist eine Eigenbedarfskündigung zulässig? Begründungspflicht, Kündigungsfristen, Sperrfristen und häufige Fehler — alles was Vermieter wissen müssen.",
  keywords: "Eigenbedarfskündigung Voraussetzungen, Eigenbedarf kündigen, §573 BGB, Eigenbedarfskündigung Fristen, Sperrfrist Eigenbedarf",
};

export default function Page() {
  return (
    <main className="pt-20 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 mb-8">
          <ArrowLeft size={14} /> Zurück zum Blog
        </Link>

        <div className="mb-8">
          <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">Mietrecht</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4 leading-tight">
            Eigenbedarfskündigung — Voraussetzungen, Fristen und häufige Fehler
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1"><Calendar size={14} /> 5. April 2026</span>
            <span className="flex items-center gap-1"><Clock size={14} /> 11 min Lesezeit</span>
          </div>
        </div>

        <div className="bg-primary-50 border border-primary-100 rounded-xl p-5 mb-8">
          <p className="font-bold text-primary-900 mb-1">Das Wichtigste vorab</p>
          <p className="text-sm text-primary-800">
            Eine Eigenbedarfskündigung ist das häufigste Streitthema zwischen Vermieter und Mieter.
            Fehlerhafte Begründungen führen zur Unwirksamkeit der Kündigung — und zu teuren Prozessen.
            Dieser Leitfaden zeigt, worauf es wirklich ankommt.
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Was ist Eigenbedarf und wer darf ihn geltend machen?</h2>
          <p>
            Eigenbedarf liegt vor, wenn der Vermieter die Wohnung für sich selbst, seine Familienangehörigen
            oder Angehörige seines Haushalts benötigt (§ 573 Abs. 2 Nr. 1 BGB). Der Begriff der
            „Familienangehörigen" wird vom BGH weit ausgelegt: Er umfasst neben Ehegatten und Kindern auch
            Geschwister, Eltern, Schwiegereltern, Enkel und Nichten oder Neffen.
          </p>
          <p>
            Nicht berechtigt zur Eigenbedarfskündigung sind hingegen Gesellschaften (GmbH, AG) und in der Regel
            auch Wohnungseigentümergemeinschaften als Vermieter. Der Eigenbedarf muss sich auf eine natürliche
            Person beziehen.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Die Begründungspflicht — das häufigste Fehlerfeld</h2>
          <p>
            Das Kündigungsschreiben muss den Eigenbedarf konkret und nachvollziehbar begründen (§ 573 Abs. 3 BGB).
            Allgemeine Formulierungen wie „ich benötige die Wohnung für mich selbst" oder „für Familienbedarf"
            reichen nicht aus — sie führen zur <strong>Unwirksamkeit der Kündigung</strong>.
          </p>
          <p>Eine wirksame Begründung muss enthalten:</p>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 not-prose">
            <ul className="space-y-2">
              {[
                "Den vollständigen Namen der Person, für die der Eigenbedarf geltend gemacht wird",
                "Das Verwandtschafts- oder Haushaltverhältnis zum Vermieter",
                "Die konkrete Beschreibung des Bedarfs (z. B. Umzug nach Heirat, Pflegebedarf der Mutter, Verlust der bisherigen Wohnung)",
                "Warum gerade diese Wohnung benötigt wird (Lage, Größe, Barrierefreiheit etc.)",
                "Warum die aktuelle Wohnsituation der begünstigten Person nicht zumutbar ist",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 not-prose">
            <p className="font-bold text-amber-900 mb-1">Achtung: Vorgetäuschter Eigenbedarf</p>
            <p className="text-sm text-amber-800">
              Wer Eigenbedarf vortäuscht oder ihn nach Auszug des Mieters nicht realisiert, macht sich
              schadensersatzpflichtig (§ 280 BGB). Der Mieter kann Umzugskosten, Mietdifferenz und weitere
              Schäden geltend machen. Der BGH hat dies in mehreren Urteilen bestätigt.
            </p>
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Kündigungsfristen bei Eigenbedarf</h2>
          <p>
            Die Kündigungsfrist richtet sich nach der Dauer des Mietverhältnisses (§ 573c BGB):
          </p>

          <div className="not-prose">
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-4 py-3 text-left font-bold text-slate-900">Mietdauer</th>
                    <th className="px-4 py-3 text-left font-bold text-slate-900">Kündigungsfrist</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Weniger als 5 Jahre", "3 Monate"],
                    ["5 bis 8 Jahre", "6 Monate"],
                    ["Mehr als 8 Jahre", "9 Monate"],
                  ].map(([dauer, frist]) => (
                    <tr key={dauer} className="border-b border-slate-100 last:border-0">
                      <td className="px-4 py-3 text-slate-700">{dauer}</td>
                      <td className="px-4 py-3 font-semibold text-slate-900">{frist}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Die Kündigung muss bis spätestens zum dritten Werktag eines Monats zugehen, damit die Frist
              mit diesem Monat zu laufen beginnt (§ 573c Abs. 1 BGB).
            </p>
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Sperrfristen bei Umwandlung in Eigentumswohnung</h2>
          <p>
            Wer eine Mietwohnung in eine Eigentumswohnung umwandelt und anschließend veräußert, darf dem
            Erwerber nicht sofort die Eigenbedarfskündigung ermöglichen. § 577a BGB sieht eine Sperrfrist vor:
          </p>
          <p>
            Die bundesweite Sperrfrist beträgt <strong>3 Jahre</strong>. In Gebieten mit angespanntem
            Wohnungsmarkt (durch Landesverordnung bestimmte Gebiete) kann sie auf bis zu <strong>10 Jahre</strong>
            verlängert sein. In Bayern, Berlin, Hamburg, Nordrhein-Westfalen und Baden-Württemberg bestehen
            solche Verordnungen mit unterschiedlichen Fristen.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Die Sozialklausel — Schutz für besonders betroffene Mieter</h2>
          <p>
            Mieter können der Eigenbedarfskündigung widersprechen, wenn die Beendigung des Mietverhältnisses
            für sie oder ihre Familie eine nicht zu rechtfertigende Härte darstellt (§ 574 BGB). Häufige
            Härtefallgründe sind:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Hohes Alter des Mieters (BGH: ab ca. 70 Jahre besonderes Gewicht)</li>
            <li>Schwere Erkrankung oder Behinderung</li>
            <li>Langer Aufenthalt in der Wohnung (verwurzelte Lebensumstände)</li>
            <li>Keine zumutbare Ersatzwohnung vorhanden</li>
            <li>Schwangerschaft oder kleine Kinder</li>
          </ul>
          <p>
            Der Widerspruch muss <strong>spätestens 2 Monate vor Mietende</strong> schriftlich beim Vermieter
            eingehen (§ 574b Abs. 2 BGB). Bei einem berechtigten Widerspruch entscheidet das Gericht über
            eine Verlängerung des Mietverhältnisses.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Die häufigsten Fehler bei der Eigenbedarfskündigung</h2>

          <div className="not-prose space-y-3">
            {[
              { titel: "Unkonkrete Begründung", fehler: "Zu allgemeine Formulierung ohne konkrete Angaben zur Person und zum Zweck — führt zur Unwirksamkeit" },
              { titel: "Falsche Person angegeben", fehler: "Eigenbedarf für eine nicht nahestehende Person (z. B. Bekannte) — nicht zulässig" },
              { titel: "Sperrfrist nicht beachtet", fehler: "Kündigung während laufender Sperrfrist nach Umwandlung in WEG" },
              { titel: "Falsche Kündigungsfrist", fehler: "Zu kurze Frist berechnet — Kündigung zum falschen Termin" },
              { titel: "Kein Nachweis des Zugangs", fehler: "Kündigung nicht per Einschreiben oder Boten mit Zeuge zugestellt" },
              { titel: "Eigenbedarf wird nicht realisiert", fehler: "Nach Auszug des Mieters Weitervermietung oder Leerstand — Schadensersatzpflicht" },
            ].map(({ titel, fehler }) => (
              <div key={titel} className="flex gap-3 bg-slate-50 border border-slate-200 rounded-lg p-4">
                <span className="text-slate-400 mt-0.5 shrink-0">✕</span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{titel}</p>
                  <p className="text-xs text-slate-600 mt-0.5">{fehler}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Muster und Vorlage</h2>
          <p>
            Für eine rechtssichere Eigenbedarfskündigung haben wir eine kostenlose Vorlage erstellt,
            die alle Pflichtangaben enthält und durch einen Fachanwalt für Mietrecht geprüft wurde.
          </p>

          <div className="not-prose">
            <Link
              href="/vorlagen/eigenbedarfskuendigung"
              className="inline-flex items-center gap-2 bg-primary-600 text-white font-bold px-5 py-3 rounded-xl hover:bg-primary-700 transition-colors text-sm"
            >
              Zur kostenlosen Vorlage <ArrowRight size={14} />
            </Link>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <h3 className="font-bold text-slate-900 mb-2">ImmoPilot verwaltet Fristen automatisch</h3>
          <p className="text-sm text-slate-500 mb-4">
            Kündigungsfristen, Sperrfristen, Widerspruchsfristen — ImmoPilot überwacht alle relevanten Termine
            und erinnert Sie rechtzeitig an die nächsten Schritte.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-primary-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-primary-700 transition-colors text-sm">
            Kostenlose Demo anfragen <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
