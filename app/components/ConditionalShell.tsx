"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ConditionalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPartnerPage = pathname.startsWith("/p/");

  return (
    <>
      {!isPartnerPage && <Navbar />}
      {children}
      {!isPartnerPage && <Footer />}
    </>
  );
}
