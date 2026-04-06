import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vorlage Hausordnung Mehrfamilienhaus 2026 kostenlos — ImmoPilot",
  description: "Kostenlose Vorlage Hausordnung für Mehrfamilienhäuser. Mit Ruhezeiten, Müll, Reinigung, Haustiere und Garagennutzung.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
