import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vorlage Mieterhöhungsschreiben §558 BGB 2026 kostenlos — ImmoPilot",
  description: "Kostenlose Vorlage Mieterhöhungsschreiben nach Mietspiegel. Mit Begründungspflicht und Kappungsgrenze. Rechtssicher.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
