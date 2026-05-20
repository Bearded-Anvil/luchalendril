"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { northeastBeaconStreet } from "@/data/northeast-beacon-street";

export default function NortheastBeaconStreetPage() {
  const v = northeastBeaconStreet;
  const [dmOpen, setDmOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "Temple Square", href: "/beacon/temple-square" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Beacon</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9", maxHeight: "540px" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        </div>

        <div className="gold-divider" />

        {/* Scene Description */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
          {v.sceneDescription.split("\n\n").map((paragraph, i, arr) => (
            <p key={i} className="text-sm leading-relaxed italic mb-4" style={{ color: "var(--parchment)", opacity: 0.88 }}>
              {i === 0 ? <>&ldquo;{paragraph}</> : paragraph}
              {i === arr.length - 1 ? <>&rdquo;</> : ""}
            </p>
          ))}
        </div>

        <div className="gold-divider" />

        {/* Garden District Gate */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>The Garden District Gate</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>Right side of the street, halfway up.</p>

          <div className="p-6 mb-6" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}>
            {v.gardenDistrictGate.playerDescription.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed italic mb-3 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.85 }}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Guards */}
          <div className="grid md:grid-cols-2 gap-4">
            {v.gardenDistrictGate.guards.map((guard, i) => (
              <div key={i} className="px-5 py-4" style={{ background: "rgba(201,168,76,0.03)", border: "1px solid rgba(201,168,76,0.15)" }}>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.15em" }}>King&rsquo;s Guard</p>
                <p className="text-sm font-bold mb-2" style={{ color: "var(--gold-light)" }}>{guard.race}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>{guard.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 px-5 py-3" style={{ background: "rgba(201,168,76,0.03)", border: "1px solid rgba(201,168,76,0.12)" }}>
            <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.4 }}>
              Silver armor, gold trim — royal blue sleeves — dark leather breeches — sword at the hip — halberd at attention.
            </p>
          </div>

          {dmOpen && (
            <div className="mt-4 p-6" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.3)" }}>
              <h4 className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080", letterSpacing: "0.15em" }}>The King&rsquo;s Guard — DM Note</h4>
              {v.gardenDistrictGate.dmNote.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.9 }}>
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="gold-divider" />

        {/* Locations */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>On This Street</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>Businesses and landmarks along Northeast Beacon Street.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {v.locations.map((loc, i) => (
              <div key={i} className="px-5 py-4 flex flex-col" style={{
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.015)",
                opacity: 0.5,
                height: "100%",
              }}>
                <p className="text-sm font-bold" style={{ color: "var(--parchment)" }}>{loc.name}</p>
                <p className="text-xs mt-1 leading-relaxed flex-1" style={{ color: "var(--parchment)", opacity: 0.6 }}>{loc.description}</p>
                <p className="text-xs italic mt-2" style={{ color: "var(--parchment)", opacity: 0.35 }}>Coming soon</p>
              </div>
            ))}
          </div>
        </div>

        <div className="gold-divider" />

        {/* Roads */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Roads</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>Where this street leads.</p>
          <div className="grid gap-3">
            {v.roads.map((road, i) =>
              road.status === "live" && road.path ? (
                <a key={i} href={road.path} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <div className="px-5 py-4 transition-all duration-200 flex flex-col" style={{
                    border: "1px solid rgba(201,168,76,0.35)",
                    background: "rgba(201,168,76,0.05)",
                    cursor: "pointer",
                    height: "100%",
                  }}>
                    <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{road.name}</p>
                    <p className="text-xs mt-1 leading-relaxed flex-1" style={{ color: "var(--parchment)", opacity: 0.6 }}>{road.direction} — {road.description}</p>
                    <p className="text-xs mt-2" style={{ color: "var(--gold)", opacity: 0.6 }}>Enter →</p>
                  </div>
                </a>
              ) : (
                <div key={i} className="px-5 py-4 flex items-center justify-between" style={{
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.015)",
                  opacity: 0.4,
                }}>
                  <div>
                    <p className="text-sm font-bold" style={{ color: "var(--parchment)" }}>{road.name}</p>
                    <p className="text-xs mt-1" style={{ color: "var(--parchment)", opacity: 0.6 }}>{road.direction} — {road.description}</p>
                  </div>
                  <span className="text-xs italic ml-6 whitespace-nowrap" style={{ color: "var(--parchment)", opacity: 0.4 }}>Coming soon</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* DM Panel */}
        <div className="mt-6">
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
            {dmOpen ? "▲ Close DM Notes" : "▼ DM Notes — Private"}
          </button>

          {dmOpen && (
            <div className="dm-private p-6 mt-0 space-y-5" style={{ borderTop: "none" }}>
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Running the Street</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmNotes}</p>
              </div>
            </div>
          )}
        </div>

        {/* Back */}
        <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/temple-square" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Back to Temple Square
          </a>
        </div>
      </div>
    </main>
  );
}
