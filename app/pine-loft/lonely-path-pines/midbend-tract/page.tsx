"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { lonelyPathMidbendTract } from "@/data/lonely-path-midbend-tract";

export default function MidbendTractPage() {
  const v = lonelyPathMidbendTract;
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

        <div className="gold-divider" />

        {/* DM Toggle */}
        <div className="mt-8 mb-10">
          <button
            onClick={() => setDmOpen(!dmOpen)}
            className="dm-private w-full text-left px-5 py-3 flex items-center justify-between"
            style={{ border: "none", cursor: "pointer" }}
          >
            <span className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM — Midbend Tract</span>
            <span style={{ color: "#e88080", fontSize: "1.1rem" }}>{dmOpen ? "▲" : "▼"}</span>
          </button>
          {dmOpen && (
            <div className="dm-private p-6" style={{ borderTop: "none" }}>
              {/* Main DM Note */}
              {v.dmNote.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.9 }}>
                  {paragraph}
                </p>
              ))}

              {/* Campsite Check */}
              <p className="text-xs uppercase tracking-widest mt-6 mb-4" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>At the Campsite</p>
              {v.campsite.dmNote.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.9 }}>
                  {paragraph}
                </p>
              ))}

              {/* Camping */}
              <p className="text-xs uppercase tracking-widest mt-6 mb-4" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>Making Camp</p>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.camping.note}</p>

              {/* Encounter Chart */}
              <p className="text-xs uppercase tracking-widest mt-2 mb-4" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>Random Encounters</p>
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
                      {e.detail && <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.6 }}>{e.detail}</p>}
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
        <div className="mt-10 pt-8" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <div className="flex items-start justify-between flex-wrap gap-6">
            {/* North */}
            <a href="/pine-loft/lonely-path-pines/northern-tract" style={{ textDecoration: "none" }}>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.4, letterSpacing: "0.15em" }}>North — Day 1</p>
              <p style={{ color: "var(--gold)", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>← Northern Tract</p>
            </a>

            {/* Campsite */}
            <a href="/pine-loft/lonely-path-pines/midbend-tract/campsite" style={{ textDecoration: "none", textAlign: "center" }}>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.4, letterSpacing: "0.15em" }}>End of Day 2</p>
              <p style={{ color: "var(--gold)", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>The Campsite</p>
            </a>

            {/* South — live */}
            <a href="/pine-loft/lonely-path-pines/southern-tract" style={{ textDecoration: "none", textAlign: "right" }}>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.4, letterSpacing: "0.15em" }}>South — Day 3</p>
              <p style={{ color: "var(--gold)", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>Southern Tract →</p>
            </a>
          </div>

          {/* Foot Path — DM only */}
          <div className="mt-6 p-4" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.2)" }}>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>DM Only</p>
            <p className="text-xs mb-3" style={{ color: "var(--parchment)", opacity: 0.6, fontStyle: "italic" }}>Only if they noticed with passive perception or passed the campsite check.</p>
            <a href="/pine-loft/lonely-path-pines/midbend-tract/foot-path" style={{ color: "var(--gold)", fontSize: "0.95rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block", textDecoration: "none" }}>The Foot Path →</a>
          </div>
        </div>
      </div>
    </main>
  );
}
