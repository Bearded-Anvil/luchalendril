"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { serpentRuinDiningHall } from "@/data/serpent-ruin-dining-hall";

export default function DiningHallPage() {
  const v = serpentRuinDiningHall;
  const rats = v.dmNotes.rats;
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
            <span className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM — The Dining Hall</span>
            <span style={{ color: "#e88080", fontSize: "1.1rem" }}>{dmOpen ? "▲" : "▼"}</span>
          </button>

          {dmOpen && (
            <div className="dm-private p-6" style={{ borderTop: "none" }}>

              {/* Ceiling Hole */}
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{v.dmNotes.ceilingHole.title}</p>
              {v.dmNotes.ceilingHole.description.split("\n\n").map((p, i) => (
                <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.9 }}>
                  {p}
                </p>
              ))}

              {/* Rats Overview */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.15)", paddingTop: "1.5rem", marginTop: "1.5rem" }}>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{rats.title}</p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--parchment)", opacity: 0.9 }}>{rats.description}</p>

                {/* Stat Block */}
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold)", opacity: 0.55, letterSpacing: "0.15em" }}>Giant Rat — Stat Block</p>
                <div className="grid grid-cols-6 gap-2 mb-4">
                  {Object.entries(rats.stats).filter(([k]) => ["STR","DEX","CON","INT","WIS","CHA"].includes(k)).map(([key, val]) => (
                    <div key={key} className="text-center p-2" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
                      <p className="text-xs uppercase mb-1" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.1em" }}>{key}</p>
                      <p className="text-base font-bold" style={{ color: "var(--parchment)" }}>{(val as { score: number; mod: string }).score}</p>
                      <p className="text-xs" style={{ color: "var(--gold)" }}>{(val as { score: number; mod: string }).mod}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-6 mb-4 flex-wrap">
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.12em" }}>HP</p>
                    <p className="text-sm font-bold" style={{ color: "var(--parchment)" }}>{rats.stats.hp}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.12em" }}>AC</p>
                    <p className="text-sm font-bold" style={{ color: "var(--parchment)" }}>{rats.stats.ac}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.12em" }}>Bite</p>
                    <p className="text-sm font-bold" style={{ color: "var(--parchment)" }}>{rats.stats.attacks[0].hit} · {rats.stats.attacks[0].damage}</p>
                  </div>
                </div>
                <div className="p-3 mb-6" style={{ borderLeft: "2px solid rgba(201,168,76,0.3)" }}>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.1em" }}>{rats.stats.special.name}</p>
                  <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.85 }}>{rats.stats.special.description}</p>
                </div>

                {/* Wave Chart */}
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>Wave Chart</p>
                <div className="mb-3" style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr>
                        {["Party Size", "First Wave", "Each Wave After", "Interval"].map((h) => (
                          <th key={h} className="text-xs uppercase tracking-widest text-left pb-2 pr-4" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.1em", borderBottom: "1px solid rgba(201,168,76,0.15)" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {rats.waveChart.map((row) => (
                        <tr key={row.partySize}>
                          <td className="text-sm py-2 pr-4" style={{ color: "var(--parchment)", opacity: 0.85 }}>{row.partySize}</td>
                          <td className="text-sm py-2 pr-4 font-bold" style={{ color: "var(--gold-light)" }}>{row.firstWave} rats</td>
                          <td className="text-sm py-2 pr-4" style={{ color: "var(--parchment)", opacity: 0.85 }}>{row.subsequentWave}</td>
                          <td className="text-sm py-2" style={{ color: "var(--parchment)", opacity: 0.85 }}>{row.interval}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-3 mb-6" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.15)" }}>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>⚑ {rats.cap}</p>
                </div>

                {/* Torch Fear */}
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{rats.torchFear.title}</p>
                {rats.torchFear.description.split("\n\n").map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.9 }}>
                    {p}
                  </p>
                ))}

                {/* Door Notes */}
                <div style={{ borderTop: "1px solid rgba(232,128,128,0.15)", paddingTop: "1.5rem", marginTop: "1rem" }}>
                  <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>The Doors</p>
                  <div className="flex flex-col gap-3">
                    <div className="p-3" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.12em" }}>Sounds at the Kitchen & Storage Doors</p>
                      <p className="text-sm mb-2" style={{ color: "var(--parchment)", opacity: 0.85 }}>{rats.doorSounds.kitchen}</p>
                      <p className="text-sm mb-2" style={{ color: "var(--parchment)", opacity: 0.85 }}>{rats.doorSounds.priestQuarters}</p>
                      <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.6 }}>⚑ {rats.doorSounds.dmNote}</p>
                    </div>
                    <div className="p-3" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.12em" }}>Storage Room Door</p>
                      <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.85 }}>{rats.storageRoom}</p>
                    </div>
                    <div className="p-3" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.12em" }}>Closing a Door</p>
                      <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.85 }}>{rats.doorNote}</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Secret Passage */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.15)", paddingTop: "1.5rem", marginTop: "1.5rem" }}>
                <div className="flex items-start justify-between gap-6 mb-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{v.dmNotes.secretPassage.title}</p>
                    <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.5 }}>{v.dmNotes.secretPassage.trigger}</p>
                  </div>
                  <p className="text-2xl font-bold flex-shrink-0" style={{ color: "var(--gold)" }}>DC {v.dmNotes.secretPassage.dc}</p>
                </div>
                {v.dmNotes.secretPassage.description.split("\n\n").map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.9 }}>{p}</p>
                ))}
                <div className="p-3" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.15)" }}>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>⚑ {v.dmNotes.secretPassage.dmNote}</p>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6 flex items-center justify-between flex-wrap gap-4" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/pine-loft/lonely-path-pines/the-ruins/dungeon/priest-quarters" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Priest Quarters
          </a>
          <div className="flex gap-3 flex-wrap">
            <a href="/pine-loft/lonely-path-pines/the-ruins/dungeon/kitchen" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
              The Kitchen →
            </a>
            <a href="/pine-loft/lonely-path-pines/the-ruins/dungeon/storage" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
              Storage Room →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
