"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { cityWatch } from "@/data/city-watch";

export default function CityWatchPage() {
  const v = cityWatch;
  const [dmOpen, setDmOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "Northeast Beacon Street", href: "/beacon/northeast-beacon-street" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Northeast Beacon Street — Beacon</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9", maxHeight: "540px" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
        </div>

        <div className="gold-divider" />

        {/* Entry */}
        <div className="mt-8 mb-8 px-5 py-4" style={{ background: "rgba(201,168,76,0.03)", border: "1px solid rgba(201,168,76,0.15)" }}>
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.15em" }}>Entry</p>
          <p className="text-sm italic leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.7 }}>{v.entry}</p>
        </div>

        {/* Scene Description */}
        <div className="mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
          {v.sceneDescription.split("\n\n").map((paragraph, i, arr) => (
            <p key={i} className="text-sm leading-relaxed italic mb-4" style={{ color: "var(--parchment)", opacity: 0.88 }}>
              {i === 0 ? <>&ldquo;{paragraph}</> : paragraph}
              {i === arr.length - 1 ? <>&rdquo;</> : ""}
            </p>
          ))}
        </div>

        <div className="gold-divider" />

        {/* Captain */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>The Captain</h2>
          <div className="p-6" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <p className="text-base font-bold mb-0.5" style={{ color: "var(--gold-light)" }}>{v.captain.name}</p>
            <p className="text-xs mb-4" style={{ color: "var(--parchment)", opacity: 0.45 }}>{v.captain.race} — {v.captain.age}</p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.captain.appearance}</p>
            <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.65 }}>{v.captain.personality}</p>
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
            <div className="dm-private p-6 mt-0 space-y-6" style={{ borderTop: "none" }}>
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Grayman&rsquo;s Fears</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.fears}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Grayman&rsquo;s Goals</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.goals}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Quest Ideas</h4>
                {v.dmPrivate.questIdeas.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.9 }}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Back */}
        <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/northeast-beacon-street" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Northeast Beacon Street
          </a>
        </div>
      </div>
    </main>
  );
}
