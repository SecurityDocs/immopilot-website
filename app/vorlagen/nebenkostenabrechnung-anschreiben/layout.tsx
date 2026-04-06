import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vorlage Anschreiben Nebenkostenabrechnung 2026 kostenlos — ImmoPilot",
  description: "Kostenlose Vorlage Anschreiben zur Betriebskostenabrechnung. Mit Erklärung des Saldos, Widerspruchsfrist und neuer Vorauszahlung.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
