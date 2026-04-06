import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vorlage Wohnungsgeberbestätigung 2026 kostenlos — ImmoPilot",
  description: "Kostenlose Vorlage Wohnungsgeberbestätigung (Vermieterbescheinigung) für die Anmeldung beim Einwohnermeldeamt. Pflichtdokument nach §19 BMG.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
