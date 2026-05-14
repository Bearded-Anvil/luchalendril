"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { saltwaterLoaves } from "@/data/saltwater-loaves";

export default function SaltwaterLoavesPage() {
  const v = saltwaterLoaves;
  const [dmOpen, setDmOpen] = useState(false);

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
          <p className="text-sm italic mt-2" style={{ color: "var(--parchment)", opacity: 0.45 }}>{v.tagline}</p>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "4/3", maxHeight: "520px" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
        </div>

        <div className="gold-divider" />

        {/* Scene Description */}
        <div className="mt-8 mb-8">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
          <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.88 }}>
            &ldquo;{v.sceneDescription}&rdquo;
          </p>
        </div>

        {/* Owner */}
        <div className="mb-10 p-6" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
          <p className="text-base font-bold mb-1" style={{ color: "var(--gold-light)" }}>{v.owner.name}</p>
          <p className="text-xs mb-4" style={{ color: "var(--parchment)", opacity: 0.5 }}>{v.owner.race} — {v.owner.age}</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.owner.appearance}</p>
        </div>

        <div className="gold-divider" />

        {/* Enchantment Banner */}
        <div className="mt-8 mb-8 px-5 py-4" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.25)" }}>
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.15em" }}>Enchantment — All Items</p>
          <p className="text-sm italic" style={{ color: "var(--gold-light)", opacity: 0.85 }}>{v.enchantment}</p>
        </div>

        {/* Inventory — Two Columns */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">

          {/* Pastries */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xs uppercase tracking-widest" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Pastries</h2>
              <p className="text-sm font-bold" style={{ color: "var(--gold)" }}>{v.pastryPrice}</p>
            </div>
            <div className="space-y-2">
              {v.pastries.map((item, i) => (
                <div key={i} className="px-4 py-3" style={{
                  background: i % 2 === 0 ? "rgba(201,168,76,0.03)" : "transparent",
                  border: "1px solid rgba(201,168,76,0.1)",
                }}>
                  <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.85 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Taffy */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xs uppercase tracking-widest" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Saltwater Taffy</h2>
              <p className="text-sm font-bold" style={{ color: "var(--gold)" }}>{v.taffyPrice}</p>
            </div>
            <div className="space-y-2">
              {v.taffy.map((flavor, i) => (
                <div key={i} className="px-4 py-3" style={{
                  background: i % 2 === 0 ? "rgba(201,168,76,0.03)" : "transparent",
                  border: "1px solid rgba(201,168,76,0.1)",
                }}>
                  <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.85 }}>{flavor}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* DM Private Panel */}
        <div className="mt-4">
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
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Personality</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.personality}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>The Enchantment — Running It at the Table</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.enchantmentNote}</p>
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
