import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vorlage Mietvertrag Wohnraum 2026 kostenlos — ImmoPilot",
  description: "Kostenlose Mietvertrag Vorlage für Wohnraum nach aktuellem BGB. Mit Betriebskosten, Kaution und Schönheitsreparaturen. Sofort verwendbar.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
