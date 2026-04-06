"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Funktionen", href: "#features" },
  { label: "Preise", href: "#pricing" },
  { label: "Vorlagen", href: "/vorlagen" },
  { label: "Blog", href: "/blog" },
  { label: "Partner", href: "/partner" },
  { label: "Über uns", href: "/ueber-uns" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo → Homepage */}
          <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-primary-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <span className="text-xl font-bold text-slate-900">
              Immo<span className="text-primary-600">Pilot</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href="#contact"
              className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors"
            >
              Login
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20 whitespace-nowrap"
            >
              Demo anfragen
            </a>
          </div>

          {/* Mobile: CTA + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-colors"
            >
              Demo
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              aria-label="Menue oeffnen"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu — slide down */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-slate-100 rounded-b-2xl shadow-xl pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-5 py-3.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-600 transition-colors border-b border-slate-50 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <div className="px-5 pt-3">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-xl bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-colors"
              >
                Kostenlose Demo anfragen
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3 mt-2 rounded-xl border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
