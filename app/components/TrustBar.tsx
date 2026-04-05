"use client";

import {
  Shield,
  Sparkles,
  Server,
  Clock,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";

const badges = [
  { icon: Sparkles, label: "KI-gestützt", desc: "Intelligente Automatisierung" },
  { icon: Shield, label: "DSGVO-konform", desc: "Datenschutz garantiert" },
  { icon: Server, label: "Deutsche Server", desc: "Hosting in Deutschland" },
  { icon: Clock, label: "24/7 verfügbar", desc: "Immer erreichbar" },
  { icon: HeartHandshake, label: "Keine Hausverwaltung nötig", desc: "Sie behalten die Kontrolle" },
  { icon: BadgeCheck, label: "Made in Germany", desc: "Entwickelt in Deutschland" },
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge) => (
            <div key={badge.label} className="text-center">
              <badge.icon size={22} className="text-white/90 mx-auto mb-2" />
              <div className="text-sm font-bold text-white">{badge.label}</div>
              <div className="text-[10px] text-white/60">{badge.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
