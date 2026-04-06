import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mietausfall: Was tun wenn der Mieter nicht zahlt? 2026",
  description:
    "Miete bleibt aus: Von der ersten Mahnung über die fristlose Kündigung bis zur Räumungsklage — rechtssichere Schritte bei Mietrückstand nach BGB.",
  keywords: "Mietausfall was tun, Mieter zahlt nicht, fristlose Kündigung Mietrückstand, Räumungsklage, Mahnung Miete, §543 BGB Kündigung",
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
            Mietausfall — was tun wenn der Mieter nicht zahlt?
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1"><Calendar size={14} /> 12. März 2026</span>
            <span className="flex items-center gap-1"><Clock size={14} /> 10 min Lesezeit</span>
          </div>
        </div>

        <div className="bg-primary-50 border border-primary-100 rounded-xl p-5 mb-8">
          <p className="font-bold text-primary-900 mb-1">Schnelles Handeln ist entscheidend</p>
          <p className="text-sm text-primary-800">
            Bei Mietrückstand gilt: Je länger Sie warten, desto größer wird der Schaden.
            Die richtigen rechtlichen Schritte in der richtigen Reihenfolge schützen Sie und
            ermöglichen die schnellste Lösung — ob durch Zahlung oder durch Kündigung.
          </p>
        </div>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Schritt 1: Sofortige Reaktion bei ausbleibender Miete</h2>
          <p>
            Die Miete ist am dritten Werktag des Monats fällig. Bleibt sie aus, sollten Sie ab dem
            vierten Werktag handeln — nicht Wochen warten. Prüfen Sie zunächst:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Ist ein Buchungsfehler möglich? (z. B. IBAN-Fehler, vergessene Kontoänderung)</li>
            <li>Hat der Mieter sich gemeldet und einen Grund genannt?</li>
            <li>Handelt es sich um einen einzelnen vergessenen Monat oder ein Muster?</li>
          </ul>
          <p>
            Bei erstmaligem Ausbleiben ohne Nachricht: Nehmen Sie sofort schriftlich Kontakt auf —
            per E-Mail und Brief. Damit beginnen Sie die Dokumentationskette, die für spätere
            rechtliche Schritte wichtig ist.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Schritt 2: Abgestufte Mahnschreiben</h2>
          <p>
            Nach dem ersten schriftlichen Kontakt folgen bei ausbleibender Reaktion oder Zahlung
            formelle Mahnschreiben. Die Reihenfolge ist wichtig für die Rechtssicherheit:
          </p>

          <div className="not-prose space-y-3">
            {[
              {
                schritt: "1. Mahnung",
                timing: "ab dem 5. Werktag des Monats",
                inhalt: "Freundliche Erinnerung mit Zahlungsfrist (10–14 Tage). Konkrete Nennung des ausstehenden Betrags. Zahlung auf bestimmtes Konto.",
              },
              {
                schritt: "2. Mahnung",
                timing: "nach Ablauf der ersten Mahnung",
                inhalt: "Zweite Zahlungsaufforderung mit kürzerer Frist (7 Tage). Hinweis auf mögliche rechtliche Konsequenzen.",
              },
              {
                schritt: "Abmahnung",
                timing: "bei weiterem Rückstand (2+ Monate)",
                inhalt: "Förmliche Abmahnung mit Ankündigung der fristlosen Kündigung. Konkrete Fristsetzung. Wichtige Voraussetzung für die Kündigung.",
              },
            ].map(({ schritt, timing, inhalt }) => (
              <div key={schritt} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-bold text-slate-900">{schritt}</p>
                  <span className="text-xs bg-primary-50 text-primary-700 px-2 py-0.5 rounded-full font-medium">{timing}</span>
                </div>
                <p className="text-sm text-slate-600">{inhalt}</p>
              </div>
            ))}
          </div>

          <div className="not-prose mt-4">
            <Link href="/vorlagen/mahnung-miete" className="inline-flex items-center gap-2 bg-primary-600 text-white font-semibold px-4 py-2.5 rounded-xl hover:bg-primary-700 transition-colors text-sm">
              Zum kostenlosen Mahnschreiben <ArrowRight size={14} />
            </Link>
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Schritt 3: Fristlose Kündigung nach §543 BGB</h2>
          <p>
            Bei einem Mietrückstand von mehr als zwei Monatsmieten ist der Vermieter zur fristlosen
            Kündigung berechtigt (§ 543 Abs. 2 Nr. 3 BGB). Die Voraussetzungen im Detail:
          </p>

          <div className="not-prose bg-slate-50 border border-slate-200 rounded-xl p-5">
            <ul className="space-y-2">
              {[
                "Rückstand übersteigt zwei Monatsmieten in zwei aufeinanderfolgenden Monaten (§ 543 Abs. 2 Nr. 3a BGB)",
                "Oder: Rückstand übersteigt zwei Monatsmieten über einen längeren Zeitraum (§ 543 Abs. 2 Nr. 3b BGB)",
                "Schriftliche Kündigung mit konkreter Begründung und Rückstandshöhe",
                "Abmahnung ist vor der fristlosen Kündigung zu empfehlen (rechtliche Sicherheit)",
                "Gleichzeitig kann ordentliche Kündigung hilfsweise ausgesprochen werden",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 not-prose">
            <p className="font-bold text-amber-900 mb-1">Wichtig: Schonfrist nach §569 Abs. 3 BGB</p>
            <p className="text-sm text-amber-800">
              Zahlt der Mieter den vollen Rückstand innerhalb von 2 Monaten nach Zustellung der Räumungsklage,
              wird die fristlose Kündigung unwirksam (Schonfristzahlung). Diese Schonfrist gilt jedoch nicht,
              wenn in den letzten 2 Jahren bereits einmal eine Schonfristzahlung erfolgte.
            </p>
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Schritt 4: Gerichtliches Mahnverfahren und Räumungsklage</h2>
          <p>
            Zieht der Mieter nach der Kündigung nicht aus, bleibt nur der Gerichtsweg:
          </p>

          <div className="not-prose space-y-3">
            {[
              {
                titel: "Gerichtliches Mahnverfahren",
                desc: "Für die Geldforderungen (ausstehende Miete) können Sie beim Amtsgericht einen Mahnbescheid beantragen. Schneller und günstiger als eine Klage.",
              },
              {
                titel: "Räumungsklage",
                desc: "Für den Anspruch auf Rückgabe der Wohnung. Zuständig ist das Amtsgericht am Ort der Mietsache. Anwaltliche Vertretung ist bei Räumungsklagen nicht zwingend, aber empfohlen.",
              },
              {
                titel: "Einstweilige Verfügung",
                desc: "In dringenden Fällen (z. B. Gefährdung der Mietsache) möglich, um schnell vorläufigen Rechtsschutz zu erhalten.",
              },
            ].map(({ titel, desc }) => (
              <div key={titel} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <p className="text-sm font-bold text-slate-900 mb-1">{titel}</p>
                <p className="text-sm text-slate-600">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Mietausfallversicherung — sinnvoll?</h2>
          <p>
            Eine Mietausfallversicherung übernimmt ausbleibende Mietzahlungen für einen definierten Zeitraum.
            Die Kosten liegen typischerweise bei 2–4 % der Jahresnettomiete. Bei professioneller Mieterauswahl
            (Bonitätsprüfung, Schufa-Auskunft, Einkommensnachweis) und konsequentem Forderungsmanagement ist
            das Risiko oft überschaubar. Für Vermieter mit wenigen Einheiten kann eine Versicherung dennoch
            sinnvoll sein, um existenzielle Risiken abzusichern.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Prävention ist besser als Kuration</h2>

          <div className="not-prose space-y-2">
            {[
              "Bonitätsprüfung vor Vertragsabschluss (Schufa-Auskunft, Einkommensnachweis)",
              "Kaution in maximaler Höhe (3 Nettokaltmieten) vereinbaren",
              "SEPA-Lastschrift statt Überweisung vereinbaren (weniger Vergessen)",
              "Regelmäßiger Zahlungsabgleich — Rückstände sofort erkennen",
              "Keine langen Wartezeiten — bereits bei einem Monat Rückstand reagieren",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 text-sm text-slate-700 bg-slate-50 border border-slate-100 rounded-lg px-4 py-3">
                <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                {item}
              </div>
            ))}
          </div>

        </div>

        <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <h3 className="font-bold text-slate-900 mb-2">Automatisches Mahnwesen mit ImmoPilot</h3>
          <p className="text-sm text-slate-500 mb-4">
            ImmoPilot erkennt Mietrückstände sofort nach dem Zahlungsabgleich und verschickt Mahnschreiben
            automatisch — rechtssicher, termingerecht und ohne manuellen Aufwand.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-primary-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-primary-700 transition-colors text-sm">
            Kostenlose Demo anfragen <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </main>
  );
}
