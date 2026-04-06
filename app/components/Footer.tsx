export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="text-xl font-bold text-white">
                Immo<span className="text-primary-400">Pilot</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Immobilienverwaltung. Komplett digital. Gebaut von Eigentümern,
              für Eigentümer.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Produkt</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Funktionen", href: "/#features" },
                { label: "Preise", href: "/#pricing" },
                { label: "Tablet-Portal", href: "/#features" },
                { label: "Demo anfragen", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Ressourcen</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Blog", href: "/blog" },
                { label: "Vorlagen", href: "/vorlagen" },
                { label: "Partner-Programm", href: "/partner" },
                { label: "Über uns", href: "/ueber-uns" },
                { label: "Kontakt", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Rechtliches</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Impressum", href: "/impressum" },
                { label: "Datenschutz", href: "/datenschutz" },
                { label: "AGB", href: "/agb" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} ImmoPilot. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs">Made with passion in Germany</p>
        </div>
      </div>
    </footer>
  );
}
