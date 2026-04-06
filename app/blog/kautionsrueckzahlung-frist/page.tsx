import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kautionsrückzahlung: Fristen, Einbehalte und Mieterrechte 2026",
  description:
    "Wie lange darf der Vermieter die Kaution einbehalten? Welche Abzüge sind zulässig, welche nicht? Alles zur Kautionsrückzahlung nach deutschem Mietrecht.",
  keywords: "Kautionsrückzahlung Frist, Kaution einbehalten Vermieter, §551 BGB Kaution, Kautionsrückgabe Frist, Kaution Rückzahlung wann",
};

export default function Page() {
  return (
    <main className="pt-20 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 mb-8">
          <ArrowLeft size={14} /> Zurück zum Blog
        </Link>

        <div className="mb-8">
          <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">Ratgeber</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4 leading-tight">
            Kautionsrückzahlung: Fristen, Einbehalte und was Mieter fordern können
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1"><Calendar size={14} /> 20. März 2026</span>
            <span className="flex items-center gap-1"><Clock size={14} /> 7 min Lesezeit</span>
          </div>
        </div>

        <div className="bg-primary-50 border border-primary-100 rounded-xl p-5 mb-8">
          <p className="font-bold text-primary-900 mb-1">Häufigster Streitpunkt beim Auszug</p>
          <p className="text-sm text-primary-800">
            Die Kautionsrückzahlung ist nach der Übergabe das häufigste Konfliktthema zwischen Vermieter
            und Mieter. Dieser Ratgeber erklärt, welche Rechte und Pflichten beide Seiten haben —
            aus Vermietersicht.
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Welche Frist gilt für die Kautionsrückzahlung?</h2>
          <p>
            Das Gesetz nennt keine feste Frist für die Rückzahlung der Mietkaution. Die Rechtsprechung hat
            jedoch angemessene Prüffristen entwickelt. Als Vermieter haben Sie das Recht, die Kaution so
            lange einzubehalten, bis Sie alle Ansprüche geprüft haben. Typisch sind:
          </p>

          <div className="not-prose">
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-4 py-3 text-left font-bold text-slate-900">Situation</th>
                    <th className="px-4 py-3 text-left font-bold text-slate-900">Typische Prüffrist</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Keine ausstehenden Ansprüche (klar erkennbar)", "2–4 Wochen nach Auszug"],
                    ["Prüfung möglicher Schäden und Mängel", "1–3 Monate nach Auszug"],
                    ["Ausstehende Betriebskostenabrechnung", "Bis zu 12 Monate (bis Abrechnungsfrist)"],
                    ["Laufende Rechtsstreitigkeiten", "Bis zur rechtskräftigen Entscheidung"],
                  ].map(([situation, frist]) => (
                    <tr key={situation} className="border-b border-slate-100 last:border-0">
                      <td className="px-4 py-3 text-slate-700">{situation}</td>
                      <td className="px-4 py-3 font-semibold text-slate-900">{frist}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p>
            Der BGH hat entschieden, dass das Einbehalten der Kaution wegen einer noch ausstehenden
            Betriebskostenabrechnung bis zum Ablauf der Abrechnungsfrist (12 Monate nach Ende des
            Abrechnungszeitraums) zulässig ist — allerdings nur in der Höhe, die für die zu erwartende
            Nachzahlung erforderlich ist.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Was darf vom Kautionsbetrag einbehalten werden?</h2>
          <p>Als Vermieter dürfen Sie die Kaution für folgende Ansprüche einbehalten:</p>

          <div className="not-prose space-y-2">
            {[
              { ja: true, text: "Ausstehende Mietrückstände (Kalt- und Warmmiete)" },
              { ja: true, text: "Nachzahlungen aus der Betriebskostenabrechnung" },
              { ja: true, text: "Schäden, die über normale Abnutzung hinausgehen" },
              { ja: true, text: "Kosten für nicht durchgeführte Schönheitsreparaturen (bei wirksamer Klausel)" },
              { ja: true, text: "Reinigungskosten bei vertragswidrig hinterlassener Wohnung" },
              { ja: false, text: "Normale Abnutzung und Verschleiß durch vertragsgemäßen Gebrauch" },
              { ja: false, text: "Schäden, die bereits bei Einzug vorhanden waren (kein Übergabeprotokoll = Beweisproblem)" },
              { ja: false, text: "Kosten für Schönheitsreparaturen bei unwirksamer Klausel" },
              { ja: false, text: "Pauschalabzüge ohne konkreten Schadensnachweis" },
            ].map(({ ja, text }) => (
              <div key={text} className={`flex gap-3 text-sm rounded-lg px-4 py-2.5 border ${ja ? "bg-white border-slate-100 text-slate-700" : "bg-white border-slate-100 text-slate-500"}`}>
                <span className={`shrink-0 font-bold ${ja ? "text-primary-600" : "text-slate-300"}`}>{ja ? "✓" : "✗"}</span>
                {text}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Beweislast — wer muss was beweisen?</h2>
          <p>
            Ein häufiges Missverständnis: Als Vermieter müssen <strong>Sie beweisen</strong>, dass Schäden durch
            den Mieter verursacht wurden und über normale Abnutzung hinausgehen. Ohne Übergabeprotokoll
            bei Einzug wird dies schwierig bis unmöglich.
          </p>

          <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="font-bold text-amber-900 mb-1">Warum das Einzugsprotokoll entscheidend ist</p>
            <p className="text-sm text-amber-800">
              Ohne dokumentierten Einzugszustand wird vor Gericht oft zugunsten des Mieters entschieden.
              Fotodokumentation bei Ein- und Auszug ist keine Option, sondern Pflicht für jeden Vermieter,
              der seine Ansprüche durchsetzen will.
            </p>
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Praktische Empfehlungen für Vermieter</h2>

          <div className="not-prose space-y-2">
            {[
              "Erstellen Sie ein detailliertes Übergabeprotokoll bei Ein- und Auszug — mit Fotos",
              "Machen Sie nach dem Auszug eine professionelle Schadensdokumentation",
              "Holen Sie für Reparaturen mindestens ein, besser zwei Vergleichsangebote ein",
              "Teilen Sie dem Mieter schriftlich mit, welche Ansprüche Sie von der Kaution einbehalten",
              "Zahlen Sie den unstrittigen Teil der Kaution sofort zurück — einbehalten nur was konkret beansprucht wird",
              "Beachten Sie die Abrechnungsfristen für die Betriebskostenabrechnung",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 text-sm text-slate-700 bg-slate-50 border border-slate-100 rounded-lg px-4 py-3">
                <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                {item}
              </div>
            ))}
          </div>

          <div className="not-prose mt-6">
            <Link href="/vorlagen/uebergabeprotokoll" className="inline-flex items-center gap-2 bg-primary-600 text-white font-bold px-5 py-3 rounded-xl hover:bg-primary-700 transition-colors text-sm">
              Zum kostenlosen Übergabeprotokoll <ArrowRight size={14} />
            </Link>
          </div>

        </div>

        <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <h3 className="font-bold text-slate-900 mb-2">Kautionen automatisch verwalten</h3>
          <p className="text-sm text-slate-500 mb-4">
            ImmoPilot dokumentiert Einzug, Auszug und Schäden lückenlos — und macht Kautionsabrechnungen
            rechtssicher und transparent.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-primary-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-primary-700 transition-colors text-sm">
            Kostenlose Demo anfragen <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
