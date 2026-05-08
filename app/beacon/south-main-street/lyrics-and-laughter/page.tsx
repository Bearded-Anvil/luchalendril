"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { lyricsAndLaughter } from "@/data/lyrics-and-laughter";

export default function LyricsAndLaughterPage() {
  const v = lyricsAndLaughter;
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

        {/* Instruments */}
        <div className="mt-8">
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Instruments for Sale</h2>
          <div className="space-y-3">
            {v.inventory.map((item, i) => (
              <div key={i} className="px-5 py-4" style={{
                background: i % 2 === 0 ? "rgba(201,168,76,0.03)" : "transparent",
                border: "1px solid rgba(201,168,76,0.12)",
              }}>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{item.name}</p>
                  <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--gold)", minWidth: "3.5rem", textAlign: "right" }}>{item.price}</p>
                </div>
                <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--parchment)", opacity: 0.75 }}>{item.description}</p>
                {"quote" in item && item.quote && (
                  <p className="text-xs leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.55 }}>
                    &ldquo;{item.quote}&rdquo;
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="gold-divider mt-10" />

        {/* Magic Items */}
        <div className="mt-8">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Magical Instruments & Accessories</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.45 }}>Alvin keeps these towards the back. He doesn't push them — but he doesn't hide them either.</p>
          <div className="space-y-3">
            {v.magicItems.map((item, i) => (
              <div key={i} className="px-5 py-4" style={{
                background: "rgba(201,168,76,0.04)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{item.name}</p>
                  <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--gold)", minWidth: "4rem", textAlign: "right" }}>{item.price}</p>
                </div>
                <p className="text-xs leading-relaxed mb-1" style={{ color: "var(--parchment)", opacity: 0.75 }}>{item.description}</p>
                <p className="text-xs mb-2" style={{ color: "var(--gold)", opacity: 0.6 }}>{item.effect}</p>
                {"quote" in item && item.quote && (
                  <p className="text-xs leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.55 }}>
                    &ldquo;{item.quote}&rdquo;{"quoteNote" in item && item.quoteNote ? ` ${item.quoteNote}` : ""}
                  </p>
                )}
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
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Personality</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.personality}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Desires</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.desires}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Fears</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.fears}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080" }}>Quest Hook</h4>
                {v.dmPrivate.questHooks.map((hook, i) => (
                  <div key={i}>
                    <p className="text-sm font-bold mb-1" style={{ color: "var(--gold-light)" }}>{hook.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{hook.description}</p>
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
