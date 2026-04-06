import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vorlage Modernisierungsankündigung §555c BGB 2026 kostenlos — ImmoPilot",
  description: "Kostenlose Vorlage Modernisierungsankündigung für Vermieter. Pflichtankündigung vor Modernisierungsmaßnahmen nach §555c BGB.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
