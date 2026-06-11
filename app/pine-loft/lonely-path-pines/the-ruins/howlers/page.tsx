"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { lonelyPinesHowlers } from "@/data/lonely-pines-howlers";

export default function HowlersPage() {
  const v = lonelyPinesHowlers;
  const c = v.creature;
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

        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "4/5" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
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
            <span className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM — The Howlers</span>
            <span style={{ color: "#e88080", fontSize: "1.1rem" }}>{dmOpen ? "▲" : "▼"}</span>
          </button>
          {dmOpen && (
            <div className="dm-private p-6" style={{ borderTop: "none" }}>

              {/* Overview */}
              {v.dmNote.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.9 }}>
                  {paragraph}
                </p>
              ))}

              {/* Entering the Ruins */}
              <p className="text-xs uppercase tracking-widest mt-6 mb-3" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{v.stealth.title}</p>
              {v.stealth.description.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.9 }}>
                  {paragraph}
                </p>
              ))}

              {/* Escalation */}
              <p className="text-xs uppercase tracking-widest mt-6 mb-3" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{v.escalation.title}</p>
              {v.escalation.description.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.9 }}>
                  {paragraph}
                </p>
              ))}

              {/* Creature Block */}
              <div className="mt-8 mb-2" style={{ borderTop: "1px solid rgba(232,128,128,0.2)", paddingTop: "1.5rem" }}>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>Creature</p>
                <p className="text-xl mb-4" style={{ color: "var(--gold-light)", fontWeight: "700" }}>{c.name}</p>

                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--parchment)", opacity: 0.85 }}>{c.description}</p>

                {/* Stat Grid */}
                <div className="grid grid-cols-6 gap-2 mb-6">
                  {Object.entries(c.stats).map(([key, val]) => (
                    <div key={key} className="text-center p-2" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
                      <p className="text-xs uppercase mb-1" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.1em" }}>{key}</p>
                      <p className="text-base font-bold" style={{ color: "var(--parchment)" }}>{(val as { score: number; mod: string }).score}</p>
                      <p className="text-xs" style={{ color: "var(--gold)" }}>{(val as { score: number; mod: string }).mod}</p>
                    </div>
                  ))}
                </div>

                {/* HP / AC */}
                <div className="flex gap-6 mb-6 flex-wrap">
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.15em" }}>HP</p>
                    <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.9 }}>{c.hp}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.15em" }}>AC</p>
                    <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.9 }}>{c.ac}</p>
                  </div>
                </div>

                {/* Attacks */}
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>Attacks</p>
                <div className="flex flex-col gap-4 mb-6">
                  {c.attacks.map((attack) => (
                    <div key={attack.name} className="p-4" style={{ borderLeft: "2px solid rgba(201,168,76,0.4)", paddingLeft: "1rem" }}>
                      <p className="text-sm font-bold mb-1" style={{ color: "var(--gold-light)" }}>{attack.name}</p>
                      <p className="text-xs mb-2" style={{ color: "var(--parchment)", opacity: 0.6 }}>
                        {attack.range}{attack.hit ? ` · ${attack.hit}` : ""}{attack.damage ? ` · ${attack.damage}` : ""}
                      </p>
                      {attack.special && (
                        <div className="mt-2">
                          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.1em" }}>{attack.special.name}</p>
                          {attack.special.description.split("\n\n").map((paragraph, i) => (
                            <p key={i} className="text-xs leading-relaxed mb-2 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.8 }}>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
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
