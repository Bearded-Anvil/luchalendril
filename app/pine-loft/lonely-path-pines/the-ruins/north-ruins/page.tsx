"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { pineTempleNorthRuins } from "@/data/pine-temple-north-ruins";

export default function NorthRuinsPage() {
  const v = pineTempleNorthRuins;
  const [dmOpen, setDmOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Pine Loft", href: "/pine-loft" },
            { label: "Lonely Path Pines", href: "/pine-loft/lonely-path-pines" },
            { label: "The Ruins", href: "/pine-loft/lonely-path-pines/the-ruins" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>The Ruins</p>
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
            <span className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM — North Ruins</span>
            <span style={{ color: "#e88080", fontSize: "1.1rem" }}>{dmOpen ? "▲" : "▼"}</span>
          </button>
          {dmOpen && (
            <div className="dm-private p-6" style={{ borderTop: "none" }}>

              {/* Howler Territory */}
              <div className="mb-8">
                <div className="flex items-baseline gap-3 mb-3">
                  <p className="text-xs uppercase tracking-widest" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{v.dmNotes.howlerTerritory.title}</p>
                  <p className="text-xs" style={{ color: "var(--gold)", opacity: 0.5 }}>Passive Perception DC {v.dmNotes.howlerTerritory.dc}</p>
                </div>
                {v.dmNotes.howlerTerritory.description.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.9 }}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Hidden Shaft */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.15)", paddingTop: "1.5rem" }}>
                <div className="flex items-baseline gap-3 mb-3">
                  <p className="text-xs uppercase tracking-widest" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{v.dmNotes.hiddenShaft.title}</p>
                  <p className="text-xs" style={{ color: "var(--gold)", opacity: 0.5 }}>Passive Perception or Investigation DC {v.dmNotes.hiddenShaft.dc}</p>
                </div>
                {v.dmNotes.hiddenShaft.description.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.9 }}>
                    {paragraph}
                  </p>
                ))}
              </div>

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/pine-loft/lonely-path-pines/the-ruins" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← The Ruins
          </a>
        </div>
      </div>
    </main>
  );
}
