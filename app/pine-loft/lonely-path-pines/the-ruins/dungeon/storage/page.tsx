"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { serpentRuinStorage } from "@/data/serpent-ruin-storage";

export default function StoragePage() {
  const v = serpentRuinStorage;
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
            { label: "The Dungeon", href: "/pine-loft/lonely-path-pines/the-ruins/dungeon" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>The Serpent Dungeon</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
        </div>

        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
        </div>

        <div className="gold-divider" />

        {/* Scene Description */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
          {v.sceneDescription.split("\n\n").map((p, i) => (
            <p key={i} className="text-sm leading-relaxed mb-4 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.88, fontStyle: "italic" }}>
              {p}
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
            <span className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM — The Storage Room</span>
            <span style={{ color: "#e88080", fontSize: "1.1rem" }}>{dmOpen ? "▲" : "▼"}</span>
          </button>

          {dmOpen && (
            <div className="dm-private p-6" style={{ borderTop: "none" }}>

              {/* Investigation Check */}
              <div className="flex items-start justify-between gap-6 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{v.dmNotes.search.title}</p>
                  <p className="text-xs mb-3" style={{ color: "var(--parchment)", opacity: 0.6 }}>{v.dmNotes.search.skill}</p>
                </div>
                <p className="text-2xl font-bold flex-shrink-0" style={{ color: "var(--gold)" }}>DC {v.dmNotes.search.dc}</p>
              </div>
              <div className="flex flex-col gap-3 mb-8">
                <div className="p-3" style={{ borderLeft: "2px solid rgba(201,168,76,0.4)" }}>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.55, letterSpacing: "0.1em" }}>Success</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmNotes.search.success}</p>
                </div>
                <div className="p-3" style={{ borderLeft: "2px solid rgba(232,128,128,0.3)" }}>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#e88080", opacity: 0.55, letterSpacing: "0.1em" }}>Failure</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmNotes.search.fail}</p>
                </div>
              </div>

              {/* Potions */}
              <div className="p-4 mb-8" style={{ border: "1px solid rgba(201,168,76,0.2)" }}>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.12em" }}>{v.dmNotes.potions.title} ×{v.dmNotes.potions.quantity}</p>
                <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.dmNotes.potions.description}</p>
              </div>

              {/* Rats */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.15)", paddingTop: "1.5rem" }}>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{v.dmNotes.rats.title}</p>
                {v.dmNotes.rats.description.split("\n\n").map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.9 }}>{p}</p>
                ))}
                <div className="mt-4 p-3" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.15)" }}>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>⚑ {v.dmNotes.rats.dmNote}</p>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/pine-loft/lonely-path-pines/the-ruins/dungeon/dining-hall" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← The Dining Hall
          </a>
        </div>
      </div>
    </main>
  );
}
