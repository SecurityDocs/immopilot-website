import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vorlage Mahnung Mietrückstand 2026 kostenlos — ImmoPilot",
  description: "Kostenlose Vorlage Mahnung bei Mietrückstand. 3 Stufen: Zahlungserinnerung, Mahnung, Abmahnung. Rechtssicher nach BGB.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
