"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { serpentSunningChamber } from "@/data/serpent-sunning-chamber";

function SectionLabel({ label }: { label: string }) {
  return (
    <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{label}</p>
  );
}

export default function SunningChamberPage() {
  const v = serpentSunningChamber;
  const k = v.dmNotes.kahthriss;
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
            <span className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM — The Sunning Chamber</span>
            <span style={{ color: "#e88080", fontSize: "1.1rem" }}>{dmOpen ? "▲" : "▼"}</span>
          </button>

          {dmOpen && (
            <div className="dm-private p-6" style={{ borderTop: "none" }}>

              {/* Stealth Check */}
              <div className="flex items-start justify-between gap-6 mb-4">
                <div>
                  <SectionLabel label={v.dmNotes.stealthCheck.title} />
                </div>
              </div>
              {v.dmNotes.stealthCheck.description.split("\n\n").map((p, i) => (
                <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.9 }}>{p}</p>
              ))}
              <div className="p-3 mb-8" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.15)" }}>
                <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>⚑ {v.dmNotes.stealthCheck.dmNote}</p>
              </div>

              {/* Kahthriss */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.15)", paddingTop: "1.5rem" }}>
                <SectionLabel label={k.title} />
                {k.description.split("\n\n").map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.9 }}>{p}</p>
                ))}

                {/* Stat Block */}
                <div className="mt-6 mb-2">
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.55, letterSpacing: "0.15em" }}>Kahthriss — Stat Block</p>
                  <p className="text-xs mb-4" style={{ color: "var(--parchment)", opacity: 0.5 }}>{k.stats.size} {k.stats.type}</p>
                </div>

                <div className="flex gap-6 flex-wrap mb-4">
                  {[
                    { label: "AC", value: `${k.stats.ac.value}` },
                    { label: "HP", value: `${k.stats.hp.value}` },
                    { label: "CR", value: k.stats.challenge.split(" ")[0] },
                  ].map(({ label, value }) => (
                    <div key={label} className="text-center p-3 min-w-[70px]" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
                      <p className="text-xs uppercase mb-1" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.1em" }}>{label}</p>
                      <p className="text-lg font-bold" style={{ color: "var(--parchment)" }}>{value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs mb-6" style={{ color: "var(--parchment)", opacity: 0.55 }}>Speed: {k.stats.speed}</p>

                <div className="grid grid-cols-6 gap-2 mb-4">
                  {(["STR","DEX","CON","INT","WIS","CHA"] as const).map((stat) => (
                    <div key={stat} className="text-center p-2" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
                      <p className="text-xs uppercase mb-1" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.1em" }}>{stat}</p>
                      <p className="text-base font-bold" style={{ color: "var(--parchment)" }}>{k.stats[stat].score}</p>
                      <p className="text-xs" style={{ color: "var(--gold)" }}>{k.stats[stat].mod}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-6 flex-wrap mb-6 text-xs" style={{ color: "var(--parchment)", opacity: 0.7 }}>
                  <p><span style={{ color: "var(--gold)", opacity: 0.7 }}>Saving Throws</span> {k.stats.savingThrows}</p>
                  <p><span style={{ color: "var(--gold)", opacity: 0.7 }}>Senses</span> {k.stats.senses}</p>
                </div>

                {/* HP note */}
                <div className="p-3 mb-6" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.15)" }}>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>⚑ {k.stats.hp.note}</p>
                </div>

                {/* Actions */}
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", opacity: 0.55, letterSpacing: "0.15em" }}>Actions</p>
                <div className="flex flex-col gap-4 mb-6">
                  {k.actions.map((action) => (
                    <div key={action.name} className="p-4" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
                      <p className="text-sm font-bold mb-1" style={{ color: "var(--gold-light)" }}>{action.name}</p>
                      {action.roll && (
                        <p className="text-xs mb-2" style={{ color: "var(--gold)", opacity: 0.65 }}>{action.roll}{action.damage ? ` · ${action.damage}` : ""}</p>
                      )}
                      <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{action.description}</p>
                    </div>
                  ))}
                </div>

                {/* Death Throes */}
                <div className="p-4 mb-2" style={{ border: "1px solid rgba(232,128,128,0.2)", background: "rgba(139,26,26,0.06)" }}>
                  <p className="text-sm font-bold mb-2" style={{ color: "#e88080" }}>{k.deathThroes.title}</p>
                  <p className="text-xs mb-3" style={{ color: "var(--gold)", opacity: 0.65 }}>
                    {k.deathThroes.save} DC {k.deathThroes.dc} · {k.deathThroes.damage} · {k.deathThroes.radius} radius
                  </p>
                  {k.deathThroes.description.split("\n\n").map((p, i) => (
                    <p key={i} className="text-sm leading-relaxed mb-2 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.85 }}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Secret Passage */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.15)", paddingTop: "1.5rem", marginTop: "1.5rem" }}>
                <div className="flex items-start justify-between gap-6 mb-3">
                  <div>
                    <SectionLabel label={v.dmNotes.secretPassage.title} />
                    <p className="text-xs mb-3" style={{ color: "var(--parchment)", opacity: 0.5 }}>{v.dmNotes.secretPassage.trigger}</p>
                  </div>
                  <p className="text-2xl font-bold flex-shrink-0" style={{ color: "var(--gold)" }}>DC {v.dmNotes.secretPassage.dc}</p>
                </div>
                {v.dmNotes.secretPassage.description.split("\n\n").map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.9 }}>{p}</p>
                ))}
                <div className="flex gap-2 flex-wrap mb-4">
                  {v.dmNotes.secretPassage.connects.map((room) => (
                    <span key={room} className="text-xs px-2 py-1" style={{ border: "1px solid rgba(201,168,76,0.25)", color: "var(--gold)", opacity: 0.7 }}>{room}</span>
                  ))}
                </div>
                <div className="p-3" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.15)" }}>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>⚑ {v.dmNotes.secretPassage.dmNote}</p>
                </div>
              </div>

              {/* After the Fight */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.15)", paddingTop: "1.5rem", marginTop: "1.5rem" }}>
                <SectionLabel label={v.dmNotes.loot.title} />
                {v.dmNotes.loot.description.split("\n\n").map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.9 }}>{p}</p>
                ))}
              </div>

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/pine-loft/lonely-path-pines/the-ruins/dungeon/preparation-chamber" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Preparation Chamber
          </a>
        </div>
      </div>
    </main>
  );
}
