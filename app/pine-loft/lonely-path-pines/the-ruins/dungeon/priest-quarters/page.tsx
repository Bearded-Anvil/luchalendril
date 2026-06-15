"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { serpentPriestQuarters } from "@/data/serpent-priest-quarters";

export default function PriestQuartersPage() {
  const v = serpentPriestQuarters;
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
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
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

        {/* Room Navigation */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>The Rooms</h2>
          <div className="grid gap-4">
            {v.locations.map((loc) =>
              loc.status === "live" ? (
                <a key={loc.name} href={loc.path} style={{ textDecoration: "none", display: "block" }}>
                  <div className="gold-border p-5" style={{ cursor: "pointer" }}>
                    <p style={{ color: "var(--gold-light)", fontWeight: "700", marginBottom: "0.35rem" }}>{loc.name} →</p>
                    <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.75 }}>{loc.description}</p>
                  </div>
                </a>
              ) : (
                <div key={loc.name} className="gold-border p-5">
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-1">
                    <p style={{ color: "var(--gold-light)", fontWeight: "700" }}>{loc.name}</p>
                    {"lockDCs" in loc && loc.lockDCs && (
                      <div className="flex gap-3 text-xs shrink-0" style={{ color: "#e88080", opacity: 0.8 }}>
                        <span>Lockpick DC {loc.lockDCs.pick}</span>
                        <span>·</span>
                        <span>Smash DC {loc.lockDCs.smash}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.75 }}>{loc.description}</p>
                  <p className="text-xs mt-2 uppercase tracking-widest" style={{ color: "var(--parchment)", opacity: 0.35 }}>Coming Soon</p>
                </div>
              )
            )}
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
            <span className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM — Priest Quarters</span>
            <span style={{ color: "#e88080", fontSize: "1.1rem" }}>{dmOpen ? "▲" : "▼"}</span>
          </button>
          {dmOpen && (
            <div className="dm-private p-6" style={{ borderTop: "none" }}>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmNotes.overview}</p>

              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>The Locked Doors</p>
              <p className="text-sm leading-relaxed mb-2" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmNotes.lockedDoors.note}</p>
              <div className="flex gap-4 mt-2 mb-6">
                <div className="p-3 text-center" style={{ border: "1px solid rgba(201,168,76,0.2)", minWidth: "120px" }}>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.5 }}>Lockpick</p>
                  <p className="text-lg font-bold" style={{ color: "var(--gold-light)" }}>DC {v.dmNotes.lockedDoors.lockpick}</p>
                </div>
                <div className="p-3 text-center" style={{ border: "1px solid rgba(201,168,76,0.2)", minWidth: "120px" }}>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.5 }}>Smash Open</p>
                  <p className="text-lg font-bold" style={{ color: "var(--gold-light)" }}>DC {v.dmNotes.lockedDoors.smash}</p>
                </div>
              </div>

              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>The Double Doors</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmNotes.doubleDoors}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/pine-loft/lonely-path-pines/the-ruins/dungeon" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← The Dungeon
          </a>
        </div>
      </div>
    </main>
  );
}
