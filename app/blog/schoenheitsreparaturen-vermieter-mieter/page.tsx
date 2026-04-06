import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schönheitsreparaturen: Was darf der Vermieter verlangen? 2026",
  description:
    "Welche Schönheitsreparaturklauseln sind wirksam, welche hat der BGH für unwirksam erklärt? Alles was Vermieter über Renovierungspflichten wissen müssen.",
  keywords: "Schönheitsreparaturen Vermieter, Renovierungsklausel unwirksam, BGH Schönheitsreparaturen, Tapezieren Mieter Pflicht, Mietrecht Renovierung",
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
            Schönheitsreparaturen: Was darf der Vermieter verlangen?
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1"><Calendar size={14} /> 28. März 2026</span>
            <span className="flex items-center gap-1"><Clock size={14} /> 9 min Lesezeit</span>
          </div>
        </div>

        <div className="bg-primary-50 border border-primary-100 rounded-xl p-5 mb-8">
          <p className="font-bold text-primary-900 mb-1">Das Wichtigste auf einen Blick</p>
          <p className="text-sm text-primary-800">
            Schönheitsreparaturklauseln sind eines der streitträchtigsten Themen im Mietrecht.
            Der BGH hat in den letzten Jahren zahlreiche Standardklauseln für unwirksam erklärt.
            Viele Vermieter wissen nicht, dass ihre Mietverträge veraltete und damit unzulässige
            Renovierungsklauseln enthalten.
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Was sind Schönheitsreparaturen?</h2>
          <p>
            Schönheitsreparaturen umfassen das <strong>Tapezieren, Anstreichen oder Kalken der Wände und Decken</strong>,
            das Streichen der Fußböden, Heizkörper (einschließlich Heizrohre), der Innentüren sowie der Fenster und
            Außentüren von innen (§ 28 Abs. 4 Satz 3 II. BVO).
          </p>
          <p>
            Grundsätzlich liegt die Pflicht zur Durchführung von Schönheitsreparaturen beim <strong>Vermieter</strong>
            (§ 535 Abs. 1 BGB). Per Mietvertrag kann diese Pflicht auf den Mieter übertragen werden — aber
            nur unter strengen Voraussetzungen.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Welche Klauseln hat der BGH für unwirksam erklärt?</h2>
          <p>
            Der BGH hat in den letzten Jahren konsequent Vermieterklauseln zu Schönheitsreparaturen
            für unwirksam erklärt. Folgende Klauseltypen sind unwirksam:
          </p>

          <div className="not-prose space-y-3">
            {[
              {
                titel: "Starre Fristenklauseln",
                beschreibung: "Klauseln, die feste Zeiträume vorschreiben (z. B. alle 3 Jahre Küche, alle 5 Jahre Wohnräume) — ohne Rücksicht auf den tatsächlichen Renovierungsbedarf.",
                urteil: "BGH VIII ZR 316/06",
              },
              {
                titel: "Endrenovierungsklauseln bei unrenovierter Übergabe",
                beschreibung: "Wenn die Wohnung unrenoviert übergeben wurde und der Mieter dennoch verpflichtet wird, bei Auszug renoviert zurückzugeben — unwirksam ohne angemessenen Ausgleich.",
                urteil: "BGH VIII ZR 185/14",
              },
              {
                titel: "Quotenabgeltungsklauseln",
                beschreibung: "Klauseln, die den Mieter anteilig an den Renovierungskosten beteiligen, wenn er vor Ablauf der Renovierungsintervalle auszieht — generell unwirksam.",
                urteil: "BGH VIII ZR 152/15",
              },
              {
                titel: "Vorgegebene Farben oder Materialien",
                beschreibung: "Klauseln, die den Mieter auf bestimmte Farben (z. B. weiss) oder Materialien festlegen — unwirksam wegen unangemessener Benachteiligung.",
                urteil: "BGH VIII ZR 198/10",
              },
            ].map(({ titel, beschreibung, urteil }) => (
              <div key={titel} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="text-sm font-bold text-slate-900">{titel}</p>
                  <span className="text-[10px] bg-slate-200 text-slate-600 px-2 py-0.5 rounded font-mono shrink-0">{urteil}</span>
                </div>
                <p className="text-sm text-slate-600">{beschreibung}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Was passiert, wenn die Klausel unwirksam ist?</h2>
          <p>
            Wenn eine Schönheitsreparaturklausel unwirksam ist, entfällt die Renovierungspflicht des Mieters
            vollständig — eine geltungserhaltende Reduktion auf das „gerade noch Zulässige" findet nicht statt
            (BGH-Rechtsprechung). Der Vermieter kann also in diesem Fall keine Renovierung verlangen,
            auch keine anteilige.
          </p>
          <p>
            Gleichzeitig gilt dann die gesetzliche Regelung: <strong>Der Vermieter trägt die Pflicht zur
            Durchführung von Schönheitsreparaturen</strong> selbst.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Was ist wirksam?</h2>
          <p>
            Trotz der restriktiven BGH-Rechtsprechung können Schönheitsreparaturen auf den Mieter übertragen
            werden — wenn die Klausel korrekt formuliert ist:
          </p>

          <div className="not-prose bg-slate-50 border border-slate-200 rounded-xl p-5">
            <p className="text-sm font-bold text-slate-900 mb-3">Wirksame Formulierung (Muster):</p>
            <div className="bg-white border border-slate-200 rounded-lg p-4 text-sm text-slate-700 italic leading-relaxed">
              „Der Mieter ist verpflichtet, die Schönheitsreparaturen nach Bedarf und entsprechend dem
              Grad der Abnutzung auf eigene Kosten durchzuführen. Maßgebend ist der tatsächliche
              Renovierungsbedarf, nicht starre Fristen. Die Wohnung wurde in renoviertem Zustand
              übergeben (Übergabeprotokoll liegt bei)."
            </div>
            <p className="text-xs text-slate-500 mt-2">
              Wichtig: Diese Klausel ist nur wirksam, wenn die Wohnung tatsächlich renoviert übergeben wurde
              und dies im Übergabeprotokoll dokumentiert ist.
            </p>
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Schönheitsreparaturen bei Auszug — was gilt?</h2>
          <p>
            Der BGH-Beschluss vom 22. August 2017 (VIII ZR 19/17) hat klargestellt: Auch bei wirksamer
            Renovierungsklausel kann der Vermieter Schönheitsreparaturen nur verlangen, wenn die Wohnung
            tatsächlich renovierungsbedürftig ist. Eine Auszugsrenovierung auf Vorrat — obwohl die Wohnung
            noch in gutem Zustand ist — kann nicht gefordert werden.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Praktische Empfehlungen für Vermieter</h2>

          <div className="not-prose space-y-2">
            {[
              "Überprüfen Sie Ihren Mietvertrag auf veraltete Renovierungsklauseln — besonders Fristenklauseln",
              "Dokumentieren Sie den Zustand der Wohnung bei Einzug mit einem detaillierten Übergabeprotokoll",
              "Verwenden Sie nur flexible Formulierungen, die auf den tatsächlichen Renovierungsbedarf abstellen",
              "Übergeben Sie die Wohnung renoviert — nur dann kann eine wirksame Renovierungsklausel vereinbart werden",
              "Fotodokumentation bei Ein- und Auszug ist unverzichtbar",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 text-sm text-slate-700 bg-slate-50 border border-slate-100 rounded-lg px-4 py-3">
                <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                {item}
              </div>
            ))}
          </div>

          <div className="not-prose mt-6">
            <Link
              href="/vorlagen/uebergabeprotokoll"
              className="inline-flex items-center gap-2 bg-primary-600 text-white font-bold px-5 py-3 rounded-xl hover:bg-primary-700 transition-colors text-sm"
            >
              Zum kostenlosen Übergabeprotokoll <ArrowRight size={14} />
            </Link>
          </div>

        </div>

        <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <h3 className="font-bold text-slate-900 mb-2">Übergabeprotokoll und Mietvertrag automatisieren</h3>
          <p className="text-sm text-slate-500 mb-4">
            ImmoPilot erstellt rechtssichere Übergabeprotokolle und Mietverträge — und warnt Sie bei
            veralteten oder unwirksamen Klauseln.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-primary-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-primary-700 transition-colors text-sm">
            Kostenlose Demo anfragen <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
