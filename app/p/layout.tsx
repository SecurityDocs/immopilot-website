import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ImmoPilot — Empfohlen von einem Partner",
  description: "Starten Sie kostenlos mit ImmoPilot — der KI-Hausverwaltung für Privatvermieter.",
};

// Kein Navbar / Footer der Hauptseite — die Partner-Page hat eigenes Layout
export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
