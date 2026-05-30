"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { dockYard } from "@/data/dock-yard";

export default function DockYardPage() {
  const v = dockYard;
  const [dmOpen, setDmOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "Southwest Beacon Street", href: "/beacon/southwest-beacon-street" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>White Bay — Beacon</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9", maxHeight: "540px" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        </div>

        <div className="gold-divider" />

        {/* Scene Description */}
        <div className="mt-8 mb-8">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
          <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.88 }}>
            &ldquo;{v.sceneDescription}&rdquo;
          </p>
        </div>

        {/* Atmosphere */}
        <div className="mb-10 px-5 py-4" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.15)" }}>
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.15em" }}>Atmosphere</p>
          <p className="text-sm italic leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.65 }}>{v.atmosphere}</p>
        </div>

        <div className="gold-divider" />

        {/* Locations */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Boardwalk Shops</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>Shops line the eastern side of the boardwalk for the full length of the Dock Yard.</p>

          <div className="grid md:grid-cols-2 gap-4">
            {v.locations.map((loc, i) => (
              loc.status === "live" ? (
                <a key={i} href={loc.path} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <div className="px-5 py-4 transition-all duration-200 flex flex-col" style={{
                    border: "1px solid rgba(201,168,76,0.35)",
                    background: "rgba(201,168,76,0.05)",
                    cursor: "pointer",
                    height: "100%",
                  }}>
                    <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{loc.name}</p>
                    <p className="text-xs mt-1 leading-relaxed flex-1" style={{ color: "var(--parchment)", opacity: 0.6 }}>{loc.description}</p>
                    <p className="text-xs mt-2" style={{ color: "var(--gold)", opacity: 0.6 }}>Enter →</p>
                  </div>
                </a>
              ) : (
                <div key={i} className="px-5 py-4 flex flex-col" style={{
                  border: "1px solid rgba(201,168,76,0.15)",
                  background: "rgba(201,168,76,0.02)",
                  opacity: 0.5,
                  height: "100%",
                }}>
                  <p className="text-sm font-bold" style={{ color: "var(--parchment)" }}>{loc.name}</p>
                  <p className="text-xs mt-1 leading-relaxed flex-1" style={{ color: "var(--parchment)", opacity: 0.55 }}>{loc.description}</p>
                  <p className="text-xs italic mt-2" style={{ color: "var(--parchment)", opacity: 0.35 }}>Coming soon</p>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Connecting Streets */}
        <div className="gold-divider" />
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Leaving the Dock Yard</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>The road north leads into the city proper.</p>
          <a href="/beacon/central-bowl-street" style={{ textDecoration: "none" }}>
            <div className="px-5 py-4 transition-all duration-200" style={{
              border: "1px solid rgba(201,168,76,0.35)",
              background: "rgba(201,168,76,0.05)",
              cursor: "pointer",
            }}>
              <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>Central Bowl Street</p>
              <p className="text-xs mt-1 leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.6 }}>Runs straight from the Dock Yard to Braver&rsquo;s Temple at the city&rsquo;s center. Wildflower median, lantern posts, and the temple visible from one end to the other.</p>
              <p className="text-xs mt-2" style={{ color: "var(--gold)", opacity: 0.6 }}>Enter →</p>
            </div>
          </a>
        </div>

        {/* DM Notes Toggle */}
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
            {dmOpen ? "▲ Close DM Notes" : "▼ DM Notes — Private"}
          </button>

          {dmOpen && (
            <div className="dm-private p-6 mt-0" style={{ borderTop: "none" }}>
              <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Running the Dock Yard</h4>
              <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmNotes}</p>
            </div>
          )}
        </div>

        {/* Navigation Footer */}
        <div className="mt-16 pt-8 flex items-center justify-between" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/southwest-beacon-street" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Southwest Beacon Street
          </a>
          <a href="/beacon/central-bowl-street" className="text-right" style={{ textDecoration: "none" }}>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.4, letterSpacing: "0.15em" }}>Continue</p>
            <p style={{ color: "var(--gold)", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>Central Bowl Street →</p>
          </a>
        </div>
      </div>
    </main>
  );
}
