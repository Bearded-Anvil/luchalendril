"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { lonelyPathPines } from "@/data/lonely-path-pines";

export default function LonelyPathPinesPage() {
  const v = lonelyPathPines;
  const [dmOpen, setDmOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Pine Loft", href: "/pine-loft" },
            { label: "Pine Loft South", href: "/pine-loft/south" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>South of Pine Loft</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
        </div>

        {/* Image */}
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

        {/* The Sign */}
        <div className="mb-10 p-6" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.25)" }}>
          <h2 className="text-xs uppercase tracking-widest mb-5" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>The Sign</h2>
          {v.signs.map((sign, i) => (
            <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.85, fontStyle: "italic" }}>
              {sign}
            </p>
          ))}
        </div>

        <div className="gold-divider" />

        {/* DM Note */}
        <div className="mt-8 mb-10">
          <button
            onClick={() => setDmOpen(!dmOpen)}
            className="dm-private w-full text-left px-5 py-3 flex items-center justify-between"
            style={{ border: "none", cursor: "pointer" }}
          >
            <span className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM — The Lonely Path Pines</span>
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
        <div className="mt-10 pt-8 flex items-center justify-between" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          {/* North */}
          <a href="/pine-loft/south" style={{ textDecoration: "none" }}>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.4, letterSpacing: "0.15em" }}>North</p>
            <p style={{ color: "var(--gold)", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>← Pine Loft South</p>
          </a>

          {/* South — coming soon */}
          <div style={{ textAlign: "right" }}>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.4, letterSpacing: "0.15em" }}>South</p>
            <p style={{ color: "var(--parchment)", opacity: 0.3, fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(255,255,255,0.1)", padding: "0.5rem 1.1rem", display: "inline-block" }}>Lonely Path — Northern Tract →</p>
          </div>
        </div>
      </div>
    </main>
  );
}
