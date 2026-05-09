"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { aJourneysFirstStep } from "@/data/a-journeys-first-step";

export default function AJourneysFirstStepPage() {
  const v = aJourneysFirstStep;
  const [dmOpen, setDmOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "South Main Street", href: "/beacon/south-main-street" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>South Main Street</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
          <p className="text-sm italic mt-1" style={{ color: "var(--parchment)", opacity: 0.5 }}>{v.tagline}</p>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "4/3", maxHeight: "520px" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        </div>

        <div className="gold-divider" />

        {/* Scene Description */}
        <div className="mt-8 mb-6">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
          <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.88 }}>
            &ldquo;{v.sceneDescription}&rdquo;
          </p>
        </div>

        {/* Merchant */}
        <div className="mb-10 p-6" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
          <p className="text-base font-bold mb-1" style={{ color: "var(--gold-light)" }}>{v.owner.name}</p>
          <p className="text-xs mb-4" style={{ color: "var(--parchment)", opacity: 0.5 }}>{v.owner.race} — {v.owner.age}</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.owner.appearance}</p>
        </div>

        <div className="gold-divider" />

        {/* Inventory — Paired Layout */}
        <div className="mt-8">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Gear & Provisions</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.45 }}>
            Each item comes plain or enchanted. The choice is yours.
          </p>

          <div className="space-y-4">
            {v.inventory.map((pair, i) => (
              <div key={i} style={{ border: "1px solid rgba(201,168,76,0.15)" }}>

                {/* Mundane Row */}
                <div className="px-5 py-4" style={{ background: "rgba(201,168,76,0.02)", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.75 }}>{pair.mundane.name}</p>
                    <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--parchment)", opacity: 0.55, minWidth: "4rem", textAlign: "right" }}>{pair.mundane.price}</p>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.45 }}>{pair.mundane.description}</p>
                </div>

                {/* Enchanted Row */}
                <div className="px-5 py-4" style={{ background: "rgba(201,168,76,0.05)" }}>
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{pair.enchanted.name}</p>
                    <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--gold)", minWidth: "4rem", textAlign: "right" }}>{pair.enchanted.price}</p>
                  </div>
                  <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--parchment)", opacity: 0.75 }}>{pair.enchanted.description}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--gold)", opacity: 0.65 }}>{pair.enchanted.effect}</p>
                </div>

              </div>
            ))}
          </div>
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
            {dmOpen ? "▲ Close DM Notes" : "▼ DM Notes — Private"}
          </button>

          {dmOpen && (
            <div className="dm-private p-6 mt-0 space-y-5" style={{ borderTop: "none" }}>

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>History</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.history}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Fears</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.fears}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Goals</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.goals}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080" }}>Quest Hook</h4>
                {v.dmPrivate.questHooks.map((hook, i) => (
                  <div key={i}>
                    <p className="text-sm font-bold mb-2" style={{ color: "var(--gold-light)" }}>{hook.title}</p>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.9 }}>{hook.description}</p>
                    <p className="text-xs italic" style={{ color: "#e88080", opacity: 0.8 }}>{hook.dmNote}</p>
                  </div>
                ))}
              </div>

            </div>
          )}
        </div>

        {/* Back link */}
        <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/south-main-street" className="text-sm" style={{ color: "var(--gold)", textDecoration: "none", opacity: 0.7 }}>
            ← Back to South Main Street
          </a>
        </div>
      </div>
    </main>
  );
}
