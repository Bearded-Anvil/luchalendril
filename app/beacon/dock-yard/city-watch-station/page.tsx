"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { cityWatchStation } from "@/data/city-watch-station";

export default function CityWatchStationPage() {
  const v = cityWatchStation;
  const [dmOpen, setDmOpen] = useState(false);

  const statKeys = ["STR", "DEX", "CON", "WIS", "INT", "CHA"] as const;

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "Southwest Beacon Street", href: "/beacon/southwest-beacon-street" },
            { label: "Dock Yard", href: "/beacon/dock-yard" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Dock Yard — White Bay</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
          <p className="text-sm italic mt-2" style={{ color: "var(--parchment)", opacity: 0.45 }}>{v.subtitle}</p>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9", maxHeight: "520px" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
        </div>

        <div className="gold-divider" />

        {/* Scene Description */}
        <div className="mt-8 mb-8">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
          <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.88 }}>
            &ldquo;{v.sceneDescription}&rdquo;
          </p>
          <p className="text-sm mt-4 font-bold" style={{ color: "var(--gold-light)", opacity: 0.9 }}>
            {v.guardGreeting}
          </p>
        </div>

        {/* DM Private Panel */}
        <div className="mt-8">
          <button
            onClick={() => setDmOpen(!dmOpen)}
            className="w-full py-3 px-6 text-sm font-bold tracking-widest uppercase transition-all duration-200"
            style={{
              background: dmOpen ? "rgba(139,26,26,0.3)" : "rgba(139,26,26,0.15)",
              border: "1px solid rgba(139,26,26,0.5)",
              color: "#e88080",
              cursor: "pointer",
              letterSpacing: "0.15em",
            }}
          >
            {dmOpen ? "▲ Close DM Notes" : "▼ DM Notes & City Directory — Private"}
          </button>

          {dmOpen && (
            <div className="dm-private p-6 mt-0 space-y-8" style={{ borderTop: "none" }}>

              {/* Guard Stats */}
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-4" style={{ color: "#e88080" }}>City Watch — Average Guard</h4>

                {/* Stat Block */}
                <div className="mb-4" style={{ border: "1px solid rgba(139,26,26,0.35)", background: "rgba(139,26,26,0.08)" }}>

                  {/* Six Stats */}
                  <div className="grid grid-cols-6 divide-x" style={{ borderBottom: "1px solid rgba(139,26,26,0.25)" }}>
                    {statKeys.map((key) => (
                      <div key={key} className="py-3 text-center">
                        <p className="text-xs uppercase font-bold mb-1" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.1em" }}>{key}</p>
                        <p className="text-base font-bold" style={{ color: "var(--parchment)" }}>{v.guardStats[key].score}</p>
                        <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.5 }}>{v.guardStats[key].mod}</p>
                      </div>
                    ))}
                  </div>

                  {/* AC / HP */}
                  <div className="grid grid-cols-2 divide-x" style={{ borderBottom: "1px solid rgba(139,26,26,0.25)" }}>
                    <div className="py-3 text-center">
                      <p className="text-xs uppercase font-bold mb-1" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.1em" }}>AC</p>
                      <p className="text-base font-bold" style={{ color: "var(--parchment)" }}>{v.guardStats.AC}</p>
                    </div>
                    <div className="py-3 text-center">
                      <p className="text-xs uppercase font-bold mb-1" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.1em" }}>HP</p>
                      <p className="text-base font-bold" style={{ color: "var(--parchment)" }}>{v.guardStats.HP}</p>
                    </div>
                  </div>

                  {/* DM Note on Stats */}
                  <div className="px-4 py-3">
                    <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.8 }}>{v.guardStats.dmNote}</p>
                  </div>
                </div>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              {/* City Directory */}
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-1" style={{ color: "#e88080" }}>City Directory</h4>
                <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.45 }}>{v.cityDirectory.updateNote}</p>

                <div className="space-y-6">
                  {v.cityDirectory.categories.map((cat, ci) => (
                    <div key={ci}>
                      <p className="text-xs uppercase tracking-widest mb-3 pb-1 font-bold" style={{
                        color: "#e88080",
                        opacity: 0.7,
                        letterSpacing: "0.15em",
                        borderBottom: "1px solid rgba(139,26,26,0.25)",
                      }}>
                        {cat.label}
                      </p>
                      <div className="space-y-2">
                        {cat.entries.map((entry, ei) => (
                          <div key={ei} className="px-4 py-3" style={{
                            background: ei % 2 === 0 ? "rgba(139,26,26,0.06)" : "transparent",
                            border: "1px solid rgba(139,26,26,0.15)",
                          }}>
                            <div className="flex items-start justify-between gap-4 mb-1 flex-wrap">
                              <p className="text-sm font-bold" style={{ color: "var(--parchment)", opacity: 0.9 }}>{entry.name}</p>
                              <p className="text-xs whitespace-nowrap" style={{ color: "#e88080", opacity: 0.55 }}>{entry.location}</p>
                            </div>
                            <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.6 }}>{entry.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Back */}
        <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/dock-yard" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Back to Dock Yard
          </a>
        </div>
      </div>
    </main>
  );
}
