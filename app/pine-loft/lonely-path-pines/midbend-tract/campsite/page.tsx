"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { lonelyPathCampsite } from "@/data/lonely-path-campsite";

export default function CampsitePage() {
  const v = lonelyPathCampsite;
  const [dmOpen, setDmOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Pine Loft", href: "/pine-loft" },
            { label: "Lonely Path Pines", href: "/pine-loft/lonely-path-pines" },
            { label: "Midbend Tract", href: "/pine-loft/lonely-path-pines/midbend-tract" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Midbend Tract</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
        </div>

        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        </div>

        <div className="gold-divider" />

        {/* Scene Description */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
          {v.sceneDescription.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed mb-4 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.88, fontStyle: "italic" }}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="gold-divider" />

        {/* DM Toggle */}
        <div className="mt-8 mb-10">
          <button
            onClick={() => setDmOpen(!dmOpen)}
            className="dm-private w-full text-left px-5 py-3 flex items-center justify-between"
            style={{ border: "none", cursor: "pointer" }}
          >
            <span className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM — The Campsite</span>
            <span style={{ color: "#e88080", fontSize: "1.1rem" }}>{dmOpen ? "▲" : "▼"}</span>
          </button>
          {dmOpen && (
            <div className="dm-private p-6" style={{ borderTop: "none" }}>
              {v.dmNote.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed mb-4 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.9 }}>
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Navigation Footer */}
        <div className="mt-10 pt-8" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <div className="flex items-center justify-between mb-6">
            <a href="/pine-loft/lonely-path-pines/midbend-tract" style={{ textDecoration: "none" }}>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.4, letterSpacing: "0.15em" }}>West</p>
              <p style={{ color: "var(--gold)", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>← Midbend Tract</p>
            </a>
            <a href="/pine-loft/lonely-path-pines/southern-tract" style={{ textDecoration: "none", textAlign: "right" }}>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.4, letterSpacing: "0.15em" }}>East — Day 3</p>
              <p style={{ color: "var(--gold)", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>Southern Tract →</p>
            </a>
          </div>

          {/* Foot Path — DM only */}
          <div className="p-4" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.2)" }}>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>DM Only</p>
            <p className="text-xs mb-3" style={{ color: "var(--parchment)", opacity: 0.6, fontStyle: "italic" }}>Only if they noticed with passive perception or passed the campsite check.</p>
            <p style={{ color: "var(--parchment)", opacity: 0.3, fontSize: "0.95rem", fontWeight: "700", border: "1px solid rgba(255,255,255,0.1)", padding: "0.5rem 1.1rem", display: "inline-block" }}>The Foot Path → (coming soon)</p>
          </div>
        </div>
      </div>
    </main>
  );
}
