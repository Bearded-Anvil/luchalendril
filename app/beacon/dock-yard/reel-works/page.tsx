"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { reelWorks } from "@/data/reel-works";

export default function ReelWorksPage() {
  const v = reelWorks;
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

        {/* Inventory */}
        <div className="mt-8">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Inventory</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>All equipment is built for serious use. Nothing here is decorative.</p>

          <div className="space-y-4 mb-10">
            {v.inventory.map((item, i) => (
              <div key={i} className="px-5 py-5" style={{
                background: item.unique
                  ? "rgba(201,168,76,0.07)"
                  : i % 2 === 0 ? "rgba(201,168,76,0.03)" : "transparent",
                border: item.unique
                  ? "1px solid rgba(201,168,76,0.4)"
                  : "1px solid rgba(201,168,76,0.12)",
              }}>
                <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                  <div className="flex items-center gap-3">
                    <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{item.name}</p>
                    {item.unique && (
                      <span className="text-xs px-2 py-0.5 font-bold uppercase tracking-wider" style={{
                        background: "rgba(201,168,76,0.15)",
                        border: "1px solid rgba(201,168,76,0.4)",
                        color: "var(--gold)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.12em",
                      }}>
                        One of a Kind
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.35 }}>
                      {item.stock === 1 && item.unique ? "Only 1 exists" : `${item.stock} in stock`}
                    </p>
                    <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--gold)" }}>{item.cost}</p>
                  </div>
                </div>

                <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.7 }}>{item.description}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--gold)", opacity: 0.8 }}>{item.effect}</p>
              </div>
            ))}
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
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Goals — The Black Whale</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.goals}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Note — The Eye Patch</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.eyePatchNote}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div className="p-4" style={{ background: "rgba(139,26,26,0.12)", border: "1px solid rgba(139,26,26,0.3)" }}>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.7 }}>Quest Note</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.dmPrivate.questNote}</p>
              </div>

            </div>
          )}
        </div>

        {/* Back */}
        <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/dock-yard" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Dock Yard
          </a>
        </div>
      </div>
    </main>
  );
}
