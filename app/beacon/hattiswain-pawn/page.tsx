"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { hattiswainPawn } from "@/data/hattiswain-pawn";

export default function HattiswainPawnPage() {
  const v = hattiswainPawn;
  const [dmOpen, setDmOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Beacon</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9", maxHeight: "540px" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
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

        {/* Owner */}
        <div className="mt-8 mb-10 p-6" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
          <p className="text-base font-bold mb-1" style={{ color: "var(--gold-light)" }}>{v.owner.name}</p>
          <p className="text-xs mb-4" style={{ color: "var(--parchment)", opacity: 0.45 }}>{v.owner.race}</p>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.owner.appearance}</p>
          <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.6 }}>{v.owner.personality}</p>
        </div>

        <div className="gold-divider" />

        {/* Inventory */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Inventory</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>Nothing is marked. Taldo names a price if you ask. It may not be the same price she named yesterday.</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1">
            {v.inventory.map((item, i) => (
              <div key={i} className="flex items-center justify-between py-1.5 px-3" style={{
                background: i % 2 === 0 ? "rgba(201,168,76,0.03)" : "transparent",
                border: "1px solid rgba(201,168,76,0.08)",
              }}>
                <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.8 }}>{item.name}</p>
                <p className="text-xs font-bold whitespace-nowrap ml-4" style={{ color: "var(--gold)", opacity: 0.7 }}>{item.cost}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="gold-divider" />

        {/* The Goggles */}
        <div className="mt-8 mb-10 px-5 py-5" style={{ background: "rgba(201,168,76,0.03)", border: "1px solid rgba(201,168,76,0.15)" }}>
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.15em" }}>Somewhere on the Shelves</p>
          <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.75 }}>{v.magicItem.playerVisible}</p>
          {dmOpen && (
            <div className="mt-4 pt-4 border-t" style={{ borderColor: "rgba(139,26,26,0.3)" }}>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.7 }}>The Goggles — DM Note</p>
              {v.magicItem.dmNote.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.9 }}>{paragraph}</p>
              ))}
            </div>
          )}
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
            <div className="dm-private p-6 mt-0 space-y-6" style={{ borderTop: "none" }}>
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Taldo &amp; the Thieves&rsquo; Guild</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.guild}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Running the Shop</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.runningTheShop}</p>
              </div>
            </div>
          )}
        </div>

        {/* Back — placeholder until street is confirmed */}
        <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Back to Beacon
          </a>
        </div>
      </div>
    </main>
  );
}
