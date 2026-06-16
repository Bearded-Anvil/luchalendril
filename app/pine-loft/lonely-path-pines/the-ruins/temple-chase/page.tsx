"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { pineTempleChase } from "@/data/pine-temple-chase";

function Narration({ text }: { text: string }) {
  return (
    <>
      {text.split("\n\n").map((p, i) => (
        <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.88, fontStyle: "italic" }}>
          {p}
        </p>
      ))}
    </>
  );
}

function DmText({ text }: { text: string }) {
  return (
    <>
      {text.split("\n\n").map((p, i) => (
        <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.9 }}>
          {p}
        </p>
      ))}
    </>
  );
}

function SectionLabel({ label, sub }: { label: string; sub?: string }) {
  return (
    <div className="flex items-baseline gap-3 mt-8 mb-4">
      <p className="text-xs uppercase tracking-widest" style={{ color: "#e88080", opacity: 0.8, letterSpacing: "0.15em" }}>{label}</p>
      {sub && <p className="text-xs" style={{ color: "var(--gold)", opacity: 0.5 }}>{sub}</p>}
    </div>
  );
}

function ReadAloudBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 mb-4" style={{ background: "rgba(201,168,76,0.04)", borderLeft: "2px solid rgba(201,168,76,0.3)" }}>
      <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.15em" }}>Read to Players</p>
      {children}
    </div>
  );
}

function CheckResult({ range, label, narration, damage, points }: {
  range: string; label: string; narration: string; damage: string | null; points: number;
}) {
  return (
    <div className="mb-4 p-4" style={{ borderLeft: "2px solid rgba(201,168,76,0.25)" }}>
      <div className="flex items-baseline gap-3 mb-2 flex-wrap">
        <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{range}</p>
        <p className="text-xs uppercase tracking-widest" style={{ color: "var(--parchment)", opacity: 0.5, letterSpacing: "0.1em" }}>{label}</p>
        {points > 0 && (
          <p className="text-xs font-bold" style={{ color: "#e88080" }}>+{points} point{points > 1 ? "s" : ""}</p>
        )}
      </div>
      <p className="text-sm leading-relaxed mb-2" style={{ color: "var(--parchment)", opacity: 0.85, fontStyle: "italic" }}>{narration}</p>
      {damage && (
        <p className="text-xs mt-1" style={{ color: "#e88080", opacity: 0.8 }}>⚔ {damage}</p>
      )}
    </div>
  );
}

export default function TempleChase() {
  const v = pineTempleChase;
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
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>The Ruins — DM Encounter</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
        </div>

        {/* Map */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "4/3" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "contain", background: "#0f0d0a" }} priority />
        </div>

        <div className="gold-divider" />

        {/* DM Toggle — entire encounter lives here */}
        <div className="mt-8 mb-10">
          <button
            onClick={() => setDmOpen(!dmOpen)}
            className="dm-private w-full text-left px-5 py-3 flex items-center justify-between"
            style={{ border: "none", cursor: "pointer" }}
          >
            <span className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM — Full Chase Sequence</span>
            <span style={{ color: "#e88080", fontSize: "1.1rem" }}>{dmOpen ? "▲" : "▼"}</span>
          </button>

          {dmOpen && (
            <div className="dm-private p-6" style={{ borderTop: "none" }}>

              {/* Trigger */}
              <SectionLabel label="Trigger" />
              <DmText text={v.trigger.dm} />
              <ReadAloudBlock><Narration text={v.trigger.narration} /></ReadAloudBlock>

              {/* Phases */}
              {v.phases.map((phase, idx) => (
                <div key={phase.id} style={{ borderTop: idx > 0 ? "1px solid rgba(232,128,128,0.12)" : "none", paddingTop: idx > 0 ? "1.5rem" : "0" }}>
                  <SectionLabel label={phase.title} />

                  {phase.narration && (
                    <ReadAloudBlock><Narration text={phase.narration} /></ReadAloudBlock>
                  )}

                  {phase.dm && <DmText text={phase.dm} />}

                  {"bridgeFollowup" in phase && phase.bridgeFollowup && (
                    <div className="mt-3 mb-3">
                      <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.45, letterSpacing: "0.12em" }}>If rope bridge was not cut</p>
                      <ReadAloudBlock><Narration text={phase.bridgeFollowup} /></ReadAloudBlock>
                    </div>
                  )}

                  {/* Howler stat reminder for Run 3 */}
                  {"howlerReminder" in phase && phase.howlerReminder && (
                    <div className="mt-4 p-4" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.15)" }}>
                      <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.15em" }}>Howler — Quick Reference</p>
                      <div className="grid grid-cols-6 gap-2 mb-3">
                        {[
                          { k: "STR", s: 16, m: "+3" }, { k: "DEX", s: 16, m: "+3" }, { k: "CON", s: 14, m: "+2" },
                          { k: "WIS", s: 14, m: "+2" }, { k: "INT", s: 8, m: "-1" }, { k: "CHA", s: 6, m: "-2" },
                        ].map(({ k, s, m }) => (
                          <div key={k} className="text-center p-2" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.12)" }}>
                            <p className="text-xs uppercase mb-1" style={{ color: "var(--gold)", opacity: 0.5 }}>{k}</p>
                            <p className="text-sm font-bold" style={{ color: "var(--parchment)" }}>{s}</p>
                            <p className="text-xs" style={{ color: "var(--gold)" }}>{m}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-6 text-sm" style={{ color: "var(--parchment)", opacity: 0.8 }}>
                        <span><strong style={{ color: "var(--gold)" }}>HP</strong> 40 (DM discretion)</span>
                        <span><strong style={{ color: "var(--gold)" }}>AC</strong> 15</span>
                        <span><strong style={{ color: "var(--gold)" }}>Bite</strong> +5, 1d6+3</span>
                        <span><strong style={{ color: "var(--gold)" }}>Tail</strong> +5, 1d6+3 (10 ft.)</span>
                      </div>
                    </div>
                  )}

                  {/* Check block */}
                  {phase.check && (
                    <div className="mt-4">
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.55, letterSpacing: "0.15em" }}>
                        {phase.check.stat}{"dc" in phase.check && phase.check.dc ? ` — DC ${phase.check.dc}` : ""}
                      </p>
                      <div className="mt-3">
                        {phase.check.results.map((r) => (
                          <CheckResult key={r.range} range={r.range} label={r.label} narration={r.narration} damage={r.damage} points={"points" in r ? r.points : 0} />
                        ))}
                      </div>
                      {phase.check.dmNotes && phase.check.dmNotes.length > 0 && (
                        <div className="mt-3 p-3" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.15)" }}>
                          {phase.check.dmNotes.map((note, i) => (
                            <p key={i} className="text-xs leading-relaxed mb-2 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.75 }}>⚑ {note}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Temple Room */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.12)", paddingTop: "1.5rem" }}>
                <SectionLabel label="Inside the Temple" />
                <ReadAloudBlock><Narration text={v.templeRoom.narration} /></ReadAloudBlock>
                <DmText text={v.templeRoom.dm} />
              </div>

              {/* Points Table */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.12)", paddingTop: "1.5rem" }}>
                <SectionLabel label="Points Tally — Rounds Before Howlers Arrive" />
                <div className="grid grid-cols-2 gap-2 mb-4" style={{ maxWidth: "280px" }}>
                  <div className="text-xs uppercase tracking-widest" style={{ color: "var(--gold)", opacity: 0.5 }}>Points</div>
                  <div className="text-xs uppercase tracking-widest" style={{ color: "var(--gold)", opacity: 0.5 }}>Rounds</div>
                  {v.pointsTable.map((row) => (
                    <>
                      <div key={row.points + "-pts"} className="text-sm" style={{ color: "var(--parchment)", opacity: 0.85 }}>{row.points}</div>
                      <div key={row.points + "-rnd"} className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{row.rounds}</div>
                    </>
                  ))}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.bottleneck.dm}</p>
              </div>

              {/* The Puzzle */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.12)", paddingTop: "1.5rem" }}>
                <SectionLabel label="The Serpent Puzzle" />
                {v.puzzle.phases.map((phase, i) => (
                  <div key={i} className="mb-5">
                    <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.12em" }}>
                      {phase.stat} — DC {phase.dc}
                    </p>
                    <ReadAloudBlock><Narration text={phase.narration} /></ReadAloudBlock>
                    {"dmReveal" in phase && phase.dmReveal && (
                      <p className="text-sm leading-relaxed mt-2" style={{ color: "var(--parchment)", opacity: 0.8 }}>{phase.dmReveal}</p>
                    )}
                  </div>
                ))}
                <div className="mt-3 p-3" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.15)" }}>
                  {v.puzzle.dmNotes.map((note, i) => (
                    <p key={i} className="text-xs leading-relaxed mb-2 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.75 }}>⚑ {note}</p>
                  ))}
                </div>
              </div>

              {/* The Solve */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.12)", paddingTop: "1.5rem" }}>
                <SectionLabel label="The Solve — The Elevator" />
                <ReadAloudBlock><Narration text={v.puzzle.solve.narration} /></ReadAloudBlock>
                <div className="mt-3 p-3" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.15)" }}>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>⚑ {v.elevatorReturn.dm}</p>
                </div>
              </div>

              {/* Iron Door */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.12)", paddingTop: "1.5rem" }}>
                <SectionLabel label="The Iron Door" />
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.ironDoor.dm}</p>
                <div className="flex flex-col gap-2 mb-4" style={{ maxWidth: "320px" }}>
                  {v.ironDoor.locks.map((lock) => (
                    <div key={lock.position} className="flex items-center justify-between p-3" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
                      <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.8 }}>{lock.position}</p>
                      <p className="text-sm font-bold" style={{ color: "var(--gold)" }}>DC {lock.dc}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 mb-2" style={{ border: "1px solid rgba(201,168,76,0.2)", maxWidth: "320px" }}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs uppercase tracking-widest" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.12em" }}>Force the Door</p>
                    <p className="text-sm font-bold" style={{ color: "var(--gold)" }}>{v.ironDoor.forceOpen.stat} DC {v.ironDoor.forceOpen.dc}</p>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>{v.ironDoor.forceOpen.note}</p>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6 flex items-center justify-between flex-wrap gap-4" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/pine-loft/lonely-path-pines/the-ruins" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← The Ruins
          </a>
          <a href="/pine-loft/lonely-path-pines/the-ruins/dungeon/great-hall" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            The Great Hall →
          </a>
        </div>
      </div>
    </main>
  );
}
