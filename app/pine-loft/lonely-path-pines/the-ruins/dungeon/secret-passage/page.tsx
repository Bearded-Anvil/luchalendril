"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { serpentSecretPassage } from "@/data/serpent-secret-passage";

function SectionLabel({ label }: { label: string }) {
  return (
    <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{label}</p>
  );
}

export default function SecretPassagePage() {
  const v = serpentSecretPassage;
  const sp = v.dmNotes.spiders;
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
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center bottom" }} priority />
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
            <span className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM — The Secret Passageway</span>
            <span style={{ color: "#e88080", fontSize: "1.1rem" }}>{dmOpen ? "▲" : "▼"}</span>
          </button>

          {dmOpen && (
            <div className="dm-private p-6" style={{ borderTop: "none" }}>

              {/* Navigation */}
              <SectionLabel label={v.dmNotes.navigation.title} />
              {v.dmNotes.navigation.description.split("\n\n").map((p, i) => (
                <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.9 }}>{p}</p>
              ))}
              <div className="flex gap-2 flex-wrap mb-8">
                {v.connects.map((room) => (
                  <a key={room.name} href={room.path} style={{ color: "var(--gold)", textDecoration: "none", fontSize: "0.75rem", border: "1px solid rgba(201,168,76,0.3)", padding: "0.25rem 0.75rem", opacity: 0.8 }}>
                    {room.name}
                  </a>
                ))}
              </div>

              {/* Spiders */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.15)", paddingTop: "1.5rem" }}>
                <SectionLabel label={sp.title} />
                {sp.description.split("\n\n").map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.9 }}>{p}</p>
                ))}

                {/* Spider image */}
                <div className="relative w-full my-6 gold-border overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <Image src={sp.spiderImage} alt="Giant Spider" fill style={{ objectFit: "cover", objectPosition: "center 40%" }} />
                </div>

                {/* Stat Block */}
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.55, letterSpacing: "0.15em" }}>{sp.stats.name} — Stat Block</p>
                  <p className="text-xs mb-4" style={{ color: "var(--parchment)", opacity: 0.5 }}>{sp.stats.size} {sp.stats.type}</p>
                </div>

                <div className="flex gap-4 flex-wrap mb-4">
                  {[
                    { label: "AC", value: String(sp.stats.ac.value) },
                    { label: "HP", value: sp.stats.hp.value },
                    { label: "Speed", value: sp.stats.speed },
                  ].map(({ label, value }) => (
                    <div key={label} className="p-3" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)", minWidth: label === "Speed" ? "auto" : "70px" }}>
                      <p className="text-xs uppercase mb-1" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.1em" }}>{label}</p>
                      <p className={`font-bold ${label === "Speed" ? "text-xs" : "text-lg"}`} style={{ color: "var(--parchment)" }}>{value}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 mb-4" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.15)" }}>
                  <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.75 }}>⚑ {sp.stats.hp.note}</p>
                </div>

                <div className="grid grid-cols-6 gap-2 mb-4">
                  {(["STR","DEX","CON","INT","WIS","CHA"] as const).map((stat) => (
                    <div key={stat} className="text-center p-2" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
                      <p className="text-xs uppercase mb-1" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.1em" }}>{stat}</p>
                      <p className="text-base font-bold" style={{ color: "var(--parchment)" }}>{sp.stats[stat].score}</p>
                      <p className="text-xs" style={{ color: "var(--gold)" }}>{sp.stats[stat].mod}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-6 flex-wrap mb-6 text-xs" style={{ color: "var(--parchment)", opacity: 0.7 }}>
                  <p><span style={{ color: "var(--gold)", opacity: 0.7 }}>Skills</span> {sp.stats.skills}</p>
                  <p><span style={{ color: "var(--gold)", opacity: 0.7 }}>Senses</span> {sp.stats.senses}</p>
                </div>

                {/* Traits */}
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold)", opacity: 0.55, letterSpacing: "0.15em" }}>Traits</p>
                <div className="flex flex-col gap-3 mb-6">
                  {sp.stats.traits.map((trait) => (
                    <div key={trait.name} className="p-3" style={{ borderLeft: "2px solid rgba(201,168,76,0.25)" }}>
                      <p className="text-xs font-bold mb-1" style={{ color: "var(--gold-light)" }}>{trait.name}</p>
                      <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.85 }}>{trait.description}</p>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold)", opacity: 0.55, letterSpacing: "0.15em" }}>Actions</p>
                <div className="flex flex-col gap-4 mb-6">
                  {sp.actions.map((action) => (
                    <div key={action.name} className="p-4" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
                      <p className="text-sm font-bold mb-1" style={{ color: "var(--gold-light)" }}>{action.name}</p>
                      {"roll" in action && action.roll && (
                        <p className="text-xs mb-1" style={{ color: "var(--gold)", opacity: 0.65 }}>
                          {action.type} · {action.roll}{action.damage && action.damage !== "No damage" ? ` · ${action.damage}` : ""}
                        </p>
                      )}
                      <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{action.description}</p>
                    </div>
                  ))}
                </div>

                {/* Envenomed */}
                <div className="p-4" style={{ border: "1px solid rgba(232,128,128,0.2)", background: "rgba(139,26,26,0.06)" }}>
                  <p className="text-sm font-bold mb-3" style={{ color: "#e88080" }}>{sp.envenomed.title}</p>
                  {sp.envenomed.description.split("\n\n").map((p, i) => (
                    <p key={i} className="text-sm leading-relaxed mb-2 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.85 }}>{p}</p>
                  ))}
                </div>

              </div>
            </div>
          )}
        </div>

        {/* Footer — connects to all three rooms */}
        <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.15em" }}>Passage Exits</p>
          <div className="flex gap-3 flex-wrap">
            {v.connects.map((room) => (
              <a key={room.name} href={room.path} style={{ color: "var(--gold)", textDecoration: "none", fontSize: "0.9rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
                {room.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
