import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vorlage Selbstauskunft Mieter 2026 kostenlos — ImmoPilot",
  description: "Kostenlose Vorlage Selbstauskunft für Mieter. Mit Einkommensnachweise, Beschäftigung, Vormieter und SCHUFA-Einwilligung. DSGVO-konform.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
