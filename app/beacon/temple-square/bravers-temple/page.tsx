"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { braversTemple } from "@/data/bravers-temple";

function TapestryCard({ tapestry, index, dmOpen }: {
  tapestry: typeof braversTemple.tapestries[0];
  index: number;
  dmOpen: boolean;
}) {
  return (
    <div className="px-5 py-5" style={{
      background: index % 2 === 0 ? "rgba(201,168,76,0.05)" : "rgba(201,168,76,0.02)",
      border: "1px solid rgba(201,168,76,0.2)",
    }}>
      <div className="flex items-baseline gap-3 mb-2">
        <span className="text-xs uppercase tracking-widest" style={{ color: "var(--gold)", opacity: 0.5 }}>Tapestry {tapestry.label}</span>
        <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{tapestry.title}</p>
      </div>
      <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.82 }}>{tapestry.description}</p>
      {dmOpen && (
        <div className="mt-4 pt-4 border-t" style={{ borderColor: "rgba(139,26,26,0.3)" }}>
          <p className="text-xs leading-relaxed" style={{ color: "#e88080", opacity: 0.85 }}>{tapestry.dmNote}</p>
        </div>
      )}
    </div>
  );
}

export default function BraversTemplePage() {
  const v = braversTemple;
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
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Temple Square — Beacon</p>
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

        {/* Tapestries */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>The Tapestries</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>Six tapestries hang at intervals around the main hall, each floor-to-ceiling.</p>
          <div className="space-y-3">
            {v.tapestries.map((tapestry, i) => (
              <TapestryCard key={i} tapestry={tapestry} index={i} dmOpen={dmOpen} />
            ))}
          </div>
        </div>

        <div className="gold-divider" />

        {/* Services */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Services</h2>
          <div className="space-y-4">
            {v.services.map((service, i) => (
              <div key={i} className="px-5 py-5" style={{
                background: i % 2 === 0 ? "rgba(201,168,76,0.05)" : "rgba(201,168,76,0.02)",
                border: "1px solid rgba(201,168,76,0.2)",
              }}>
                <p className="text-sm font-bold mb-2" style={{ color: "var(--gold-light)" }}>{service.name}</p>
                <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.82 }}>{service.playerDescription}</p>
                {dmOpen && (
                  <div className="mt-4 pt-4 border-t" style={{ borderColor: "rgba(139,26,26,0.3)" }}>
                    <p className="text-xs leading-relaxed" style={{ color: "#e88080", opacity: 0.85 }}>{service.dmNote}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="gold-divider" />

        {/* Monks */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>The Monks</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[v.monks.brotherHotence, v.monks.fatherUndoubted].map((monk, i) => (
              <div key={i} className="p-6" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
                <p className="text-base font-bold mb-0.5" style={{ color: "var(--gold-light)" }}>{monk.name}</p>
                <p className="text-xs mb-1" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.1em" }}>{monk.role}</p>
                <p className="text-xs mb-3" style={{ color: "var(--parchment)", opacity: 0.45 }}>{monk.race}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{monk.appearance}</p>
                {dmOpen && (
                  <div className="mt-4 pt-4 border-t" style={{ borderColor: "rgba(139,26,26,0.3)" }}>
                    <p className="text-xs leading-relaxed" style={{ color: "#e88080", opacity: 0.85 }}>{monk.dmNote}</p>
                  </div>
                )}
              </div>
            ))}
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
            <div className="dm-private p-6 mt-0" style={{ borderTop: "none" }}>
              <p className="text-xs italic" style={{ color: "var(--parchment)", opacity: 0.5 }}>DM notes are shown inline above — within each tapestry, service, and monk entry.</p>
            </div>
          )}
        </div>

        {/* Back */}
        <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/temple-square" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Temple Square
          </a>
        </div>
      </div>
    </main>
  );
}
