import {
  Tablet,
  Mic,
  Smartphone,
  PhoneOff,
  Check,
  QrCode,
  Info,
  FileEdit,
} from "lucide-react";

const channels = [
  {
    icon: Tablet,
    title: "Tablet im Treppenhaus",
    desc: "Jedes Objekt bekommt ein iPad — von uns geliefert, diebstahlgesichert montiert, sofort einsatzbereit.",
  },
  {
    icon: Mic,
    title: "Sprachassistent",
    desc: "Mieter beschreiben ihr Anliegen per Sprache. Die KI erstellt automatisch ein strukturiertes Ticket.",
  },
  {
    icon: Smartphone,
    title: "Handy-Ticket",
    desc: "Mieter können jederzeit und von überall Anliegen melden — direkt vom Smartphone aus.",
  },
];

export default function TabletPortal() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="portal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 mb-5">
            <Tablet size={14} className="text-primary-600" />
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">Mieter-Selfservice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Sie werden{" "}
            <span className="text-primary-600">nicht mehr angerufen.</span>
          </h2>
          <p className="text-base text-slate-500 leading-relaxed">
            Mieter melden Anliegen selbst — per Tablet im Treppenhaus, per Sprachassistent oder per Handy.
            Sie sehen alles als Admin und weisen Aufgaben per Klick zu.
          </p>
        </div>

        {/* 3 Channels + iPad */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">

          {/* Left: iPad Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="bg-slate-800 rounded-[2rem] p-3 shadow-2xl w-full max-w-[300px]">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-slate-700 border border-slate-600" />
                <div className="bg-slate-950 rounded-[1.6rem] overflow-hidden" style={{ height: "420px" }}>
                  <div className="h-full flex flex-col">
                    <div className="bg-slate-950 px-5 pt-6 pb-4 text-center">
                      <h3 className="text-white text-sm font-bold">Hausverwaltung</h3>
                      <p className="text-slate-400 text-[10px]">MFH Rheinufer · EG</p>
                    </div>
                    <div className="flex-1 bg-slate-950 px-4 pb-4 space-y-2.5 overflow-hidden">
                      <p className="text-slate-300 text-xs font-semibold">Wie können wir helfen?</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
                          <Mic size={18} className="text-primary-400 mx-auto mb-1.5" />
                          <div className="text-[10px] font-bold text-white">Sprechen</div>
                          <div className="text-[8px] text-slate-500">Sprachassistent</div>
                        </div>
                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
                          <FileEdit size={18} className="text-primary-400 mx-auto mb-1.5" />
                          <div className="text-[10px] font-bold text-white">Formular</div>
                          <div className="text-[8px] text-slate-500">Ticket erstellen</div>
                        </div>
                      </div>
                      <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-2">
                        <div className="flex items-center gap-1.5">
                          <Info size={10} className="text-amber-400" />
                          <span className="text-[9px] font-semibold text-amber-300">Aufzug: Wartung bis 10.04.</span>
                        </div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 rounded-lg p-2.5 flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded bg-white flex items-center justify-center flex-shrink-0">
                          <QrCode size={18} className="text-slate-800" />
                        </div>
                        <div>
                          <div className="text-[9px] font-bold text-white">Auch per Handy</div>
                          <div className="text-[8px] text-slate-500">QR-Code scannen</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-[10px] text-slate-400 mt-3 flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 inline-block" />
                Hardware inklusive — bei rechtzeitiger Buchung
              </p>
            </div>
          </div>

          {/* Right: Channels */}
          <div className="space-y-5">
            {/* Core promise */}
            <div className="flex items-center gap-3 p-4 bg-primary-50 border border-primary-100 rounded-2xl">
              <PhoneOff size={20} className="text-primary-600 flex-shrink-0" />
              <div>
                <p className="text-sm font-bold text-slate-900">Keine Anrufe mehr</p>
                <p className="text-xs text-slate-600 mt-0.5">Eigentümer mit ImmoPilot reduzieren eingehende Mieter-Anrufe um über 80 %.</p>
              </div>
            </div>

            {channels.map((ch) => (
              <div key={ch.title} className="flex gap-4 p-4 bg-slate-50 border border-slate-100 rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0">
                  <ch.icon size={18} className="text-primary-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-0.5">{ch.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{ch.desc}</p>
                </div>
              </div>
            ))}

            {/* What you see as admin */}
            <div className="border border-slate-200 rounded-xl p-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Sie als Admin sehen</p>
              <div className="space-y-2">
                {[
                  "Alle Tickets in Echtzeit — sortiert nach Priorität",
                  "Per Klick an Hausmeister oder Handwerker zuweisen",
                  "Infos & Aushänge an alle Mieter senden",
                ].map((line) => (
                  <div key={line} className="flex items-start gap-2">
                    <Check size={14} className="text-primary-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
