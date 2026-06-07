"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { stonejutTunnel } from "@/data/stonejut-tunnel";

export default function StonejutTunnelPage() {
  const v = stonejutTunnel;
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
            { label: "Southern Tract", href: "/pine-loft/lonely-path-pines/southern-tract" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Southern Tract</p>
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
            <span className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM — Stonejut Tunnel</span>
            <span style={{ color: "#e88080", fontSize: "1.1rem" }}>{dmOpen ? "▲" : "▼"}</span>
          </button>
          {dmOpen && (
            <div className="dm-private p-6" style={{ borderTop: "none" }}>

              {/* Triggered DM Notes */}
              <div className="grid gap-5 mb-8">
                {v.dmNotes.map((note, i) => (
                  <div key={i}>
                    <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{note.trigger}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{note.note}</p>
                  </div>
                ))}
              </div>

              {/* Creature */}
              <div style={{ borderTop: "1px solid rgba(139,26,26,0.3)", paddingTop: "1.5rem" }}>
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>The Creature</p>

                {/* Creature Image */}
                <div className="relative w-full mb-6 gold-border overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <Image src={c.image} alt={c.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                </div>

                <h3 className="text-2xl mb-4" style={{ color: "var(--gold-light)" }}>{c.name}</h3>

                {/* Description */}
                {c.description.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.9 }}>
                    {paragraph}
                  </p>
                ))}

                {/* DM Note */}
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--parchment)", opacity: 0.65, fontStyle: "italic" }}>{c.dmNote}</p>

                {/* Stats */}
                <div className="grid grid-cols-6 gap-2 mb-6 text-center">
                  {Object.entries(c.stats).map(([stat, val]) => (
                    <div key={stat} className="p-2" style={{ border: "1px solid rgba(201,168,76,0.2)" }}>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.6 }}>{stat}</p>
                      <p className="text-base font-bold" style={{ color: "var(--parchment)" }}>{val.score}</p>
                      <p className="text-xs" style={{ color: "var(--gold)", opacity: 0.8 }}>{val.mod}</p>
                    </div>
                  ))}
                </div>

                {/* HP / AC */}
                <div className="flex gap-6 mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.15em" }}>HP</p>
                    <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.85, fontStyle: "italic" }}>{c.hp}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.15em" }}>AC</p>
                    <p className="text-sm font-bold" style={{ color: "var(--parchment)", opacity: 0.85 }}>{c.ac}</p>
                  </div>
                </div>

                {/* Attacks */}
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>Attacks</p>
                <div className="grid gap-5 mb-6">
                  {c.attacks.map((attack) => (
                    <div key={attack.name} style={{ borderLeft: "2px solid rgba(201,168,76,0.3)", paddingLeft: "1rem" }}>
                      <p className="font-bold mb-1" style={{ color: "var(--gold-light)" }}>{attack.name}</p>
                      <p className="text-xs mb-1" style={{ color: "var(--parchment)", opacity: 0.6 }}>
                        Range: {attack.range} &nbsp;·&nbsp; {attack.hit} &nbsp;·&nbsp; {attack.damage}
                      </p>
                      <p className="text-xs font-bold mt-2 mb-1" style={{ color: "#e88080", opacity: 0.8 }}>{attack.special.name}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{attack.special.description}</p>
                    </div>
                  ))}
                </div>

                {/* Resistances & Vulnerabilities */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.15em" }}>Resistances</p>
                    {c.resistances.map((r) => (
                      <p key={r} className="text-sm mb-1" style={{ color: "var(--parchment)", opacity: 0.85 }}>· {r}</p>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.15em" }}>Vulnerabilities</p>
                    {c.vulnerabilities.map((r) => (
                      <p key={r} className="text-sm mb-1" style={{ color: "var(--parchment)", opacity: 0.85 }}>· {r}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/pine-loft/lonely-path-pines/southern-tract" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Southern Tract
          </a>
        </div>
      </div>
    </main>
  );
}
