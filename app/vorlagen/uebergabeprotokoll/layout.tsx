import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vorlage Übergabeprotokoll Wohnung 2026 kostenlos — ImmoPilot",
  description: "Kostenlose Vorlage Wohnungsübergabeprotokoll für Einzug und Auszug. Mit Zählerständen, Raumzustand und Schlüsselübergabe.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
