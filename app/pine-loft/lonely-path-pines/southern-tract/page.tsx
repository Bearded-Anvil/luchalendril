"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { lonelyPathSouthernTract } from "@/data/lonely-path-southern-tract";

export default function SouthernTractPage() {
  const v = lonelyPathSouthernTract;
  const [dmOpen, setDmOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Pine Loft", href: "/pine-loft" },
            { label: "Lonely Path Pines", href: "/pine-loft/lonely-path-pines" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Lonely Path Pines &mdash; {v.day}</p>
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

        {/* Stone Tunnel */}
        <div className="gold-divider" />
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Along This Section</h2>
          <div className="grid gap-4">
            {v.locations.map((loc) => (
              <div key={loc.name} className="gold-border p-5" style={{ opacity: loc.status === "coming-soon" ? 0.4 : 1 }}>
                <p style={{ color: "var(--gold-light)", fontWeight: "700", marginBottom: "0.35rem" }}>{loc.name}</p>
                <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.75 }}>{loc.description}</p>
                {loc.status === "coming-soon" && (
                  <p className="text-xs mt-2 uppercase tracking-widest" style={{ color: "var(--parchment)", opacity: 0.35 }}>Coming Soon</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="gold-divider" />

        {/* DM Toggle */}
        <div className="mt-8 mb-10">
          <button
            onClick={() => setDmOpen(!dmOpen)}
            className="dm-private w-full text-left px-5 py-3 flex items-center justify-between"
            style={{ border: "none", cursor: "pointer" }}
          >
            <span className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM — Southern Tract</span>
            <span style={{ color: "#e88080", fontSize: "1.1rem" }}>{dmOpen ? "▲" : "▼"}</span>
          </button>
          {dmOpen && (
            <div className="dm-private p-6" style={{ borderTop: "none" }}>
              {v.dmNote.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.9 }}>
                  {paragraph}
                </p>
              ))}

              <p className="text-xs uppercase tracking-widest mt-6 mb-4" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>Random Encounters (Optional)</p>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.encounters.noEncounterNote}</p>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--parchment)", opacity: 0.7, fontStyle: "italic" }}>{v.encounters.note}</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.15em" }}>Common</p>
                  {v.encounters.common.map((e) => (
                    <div key={e.name} className="mb-2">
                      <p className="text-sm font-bold" style={{ color: "var(--parchment)", opacity: 0.9 }}>{e.name}</p>
                      {e.detail && <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.6 }}>{e.detail}</p>}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.15em" }}>Uncommon</p>
                  {v.encounters.uncommon.map((e) => (
                    <div key={e.name} className="mb-2">
                      <p className="text-sm font-bold" style={{ color: "var(--parchment)", opacity: 0.9 }}>{e.name}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.15em" }}>Rare</p>
                  {v.encounters.rare.map((e) => (
                    <div key={e.name} className="mb-2">
                      <p className="text-sm font-bold" style={{ color: "var(--parchment)", opacity: 0.9 }}>{e.name}</p>
                      {e.detail && <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.6 }}>{e.detail}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Footer */}
        <div className="mt-10 pt-8 flex items-center justify-between" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/pine-loft/lonely-path-pines/midbend-tract/campsite" style={{ textDecoration: "none" }}>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.4, letterSpacing: "0.15em" }}>West</p>
            <p style={{ color: "var(--gold)", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>← Campsite</p>
          </a>
          <div style={{ textAlign: "right" }}>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.4, letterSpacing: "0.15em" }}>East — Forest Exit</p>
            <p style={{ color: "var(--parchment)", opacity: 0.3, fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(255,255,255,0.1)", padding: "0.5rem 1.1rem", display: "inline-block" }}>Coming Soon →</p>
          </div>
        </div>
      </div>
    </main>
  );
}
