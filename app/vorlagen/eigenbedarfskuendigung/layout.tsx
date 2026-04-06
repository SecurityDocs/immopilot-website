import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vorlage Eigenbedarfskündigung §573 BGB 2026 kostenlos — ImmoPilot",
  description: "Kostenlose Vorlage Eigenbedarfskündigung mit Begründungspflicht, Sperrfrist und Sozialklausel-Hinweis. Rechtssicher.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
