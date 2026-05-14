"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { hereAndThereInkwell } from "@/data/here-and-there-inkwell";

export default function HereAndTherePage() {
  const v = hereAndThereInkwell;
  const maps = v.mapsShop;
  const scrolls = v.scrollsShop;
  const [dmOpen, setDmOpen] = useState(false);
  const [bryOpen, setBryOpen] = useState(false);
  const [sylOpen, setSylOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "Southwest Beacon Street", href: "/beacon/southwest-beacon-street" },
            { label: "Dock Yard", href: "/beacon/dock-yard" },
            { label: "Here & There / The Inkwell" },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Dock Yard — White Bay</p>
          <h1 className="text-4xl md:text-5xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>Here &amp; There</h1>
          <h1 className="text-4xl md:text-5xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em", opacity: 0.65 }}>/ The Inkwell</h1>
          <p className="text-sm italic mt-2" style={{ color: "var(--parchment)", opacity: 0.45 }}>{v.tagline}</p>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9", maxHeight: "520px" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
        </div>

        <div className="gold-divider" />

        {/* Scene Description */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
          <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.88 }}>
            &ldquo;{v.sceneDescription}&rdquo;
          </p>
        </div>

        {/* ── HERE & THERE ── */}
        <div className="mb-2 px-1">
          <div className="flex items-center gap-4 mb-6">
            <div style={{ flex: 1, height: "1px", background: "rgba(201,168,76,0.2)" }} />
            <p className="text-xs uppercase tracking-widest font-bold" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Here &amp; There</p>
            <div style={{ flex: 1, height: "1px", background: "rgba(201,168,76,0.2)" }} />
          </div>
        </div>

        {/* Bryan */}
        <div className="mb-8 p-6" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
          <p className="text-base font-bold mb-1" style={{ color: "var(--gold-light)" }}>{maps.owner.name}</p>
          <p className="text-xs mb-4" style={{ color: "var(--parchment)", opacity: 0.5 }}>{maps.owner.race} — {maps.owner.age}</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{maps.owner.appearance}</p>
        </div>

        {/* Maps Inventory */}
        <div className="mb-12">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Maps</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>Purchased maps are physical scrolls. They only benefit the holder and only while in the bay.</p>
          <div className="space-y-3">
            {maps.inventory.map((item, i) => (
              <div key={i} className="px-5 py-5" style={{
                background: i % 2 === 0 ? "rgba(201,168,76,0.03)" : "transparent",
                border: "1px solid rgba(201,168,76,0.12)",
              }}>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{item.name}</p>
                  <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--gold)", minWidth: "4rem", textAlign: "right" }}>{item.cost}</p>
                </div>
                <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--parchment)", opacity: 0.7 }}>{item.description}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--gold)", opacity: 0.75 }}>{item.effect}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── THE INKWELL ── */}
        <div className="mb-2 px-1">
          <div className="flex items-center gap-4 mb-6">
            <div style={{ flex: 1, height: "1px", background: "rgba(201,168,76,0.2)" }} />
            <p className="text-xs uppercase tracking-widest font-bold" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>The Inkwell</p>
            <div style={{ flex: 1, height: "1px", background: "rgba(201,168,76,0.2)" }} />
          </div>
        </div>

        {/* Sylas */}
        <div className="mb-8 p-6" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
          <p className="text-base font-bold mb-1" style={{ color: "var(--gold-light)" }}>{scrolls.owner.name}</p>
          <p className="text-xs mb-4" style={{ color: "var(--parchment)", opacity: 0.5 }}>{scrolls.owner.race} — {scrolls.owner.age}</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{scrolls.owner.appearance}</p>
        </div>

        {/* Scrolls — Utility */}
        <ScrollSection label="Utility" scrolls={scrolls.utility} />
        {/* Scrolls — Protection */}
        <ScrollSection label="Protection" scrolls={scrolls.protection} />
        {/* Scrolls — Offensive */}
        <ScrollSection label="Offensive" scrolls={scrolls.offensive} />

        {/* DM Private Panel */}
        <div className="mt-10">
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
            <div className="dm-private p-6 mt-0 space-y-6" style={{ borderTop: "none" }}>

              {/* Bryan section */}
              <div>
                <button
                  onClick={() => setBryOpen(!bryOpen)}
                  className="w-full text-left mb-3"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  <p className="text-xs uppercase tracking-widest font-bold" style={{ color: "#e88080", letterSpacing: "0.2em" }}>
                    {bryOpen ? "▲" : "▼"} Bryan Valuth — Here &amp; There
                  </p>
                </button>
                {bryOpen && (
                  <div className="space-y-4 pl-2">
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#e88080", opacity: 0.6 }}>Fears</p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.bryan.fears}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#e88080", opacity: 0.6 }}>Goals</p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.bryan.goals}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#e88080", opacity: 0.6 }}>Quest Hook</p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.bryan.questHook}</p>
                    </div>
                    <div className="p-3" style={{ background: "rgba(139,26,26,0.12)", border: "1px solid rgba(139,26,26,0.3)" }}>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.dmPrivate.bryan.note}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.4), transparent)" }} />

              {/* Sylas section */}
              <div>
                <button
                  onClick={() => setSylOpen(!sylOpen)}
                  className="w-full text-left mb-3"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  <p className="text-xs uppercase tracking-widest font-bold" style={{ color: "#e88080", letterSpacing: "0.2em" }}>
                    {sylOpen ? "▲" : "▼"} Sylas Penleaf — The Inkwell
                  </p>
                </button>
                {sylOpen && (
                  <div className="p-3" style={{ background: "rgba(139,26,26,0.12)", border: "1px solid rgba(139,26,26,0.3)" }}>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.sylas.note}</p>
                  </div>
                )}
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

/* ── Scroll Section Component ── */
type ScrollItem = {
  name: string;
  description: string;
  effect: string;
  cost: string;
  stock: number;
};

function ScrollSection({ label, scrolls }: { label: string; scrolls: ScrollItem[] }) {
  return (
    <div className="mb-10">
      <h3 className="text-xs uppercase tracking-widest mb-5" style={{ color: "var(--gold)", opacity: 0.55, letterSpacing: "0.2em" }}>
        — {label} —
      </h3>
      <div className="space-y-3">
        {scrolls.map((s, i) => (
          <div key={i} className="px-5 py-4" style={{
            background: i % 2 === 0 ? "rgba(201,168,76,0.03)" : "transparent",
            border: "1px solid rgba(201,168,76,0.12)",
          }}>
            <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
              <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{s.name}</p>
              <div className="flex items-center gap-3">
                <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.35 }}>
                  {s.stock} in stock
                </p>
                <p className="text-sm font-bold" style={{ color: "var(--gold)" }}>{s.cost}</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--parchment)", opacity: 0.7 }}>{s.description}</p>
            <p className="text-xs leading-relaxed italic" style={{ color: "var(--gold)", opacity: 0.65 }}>{s.effect}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
