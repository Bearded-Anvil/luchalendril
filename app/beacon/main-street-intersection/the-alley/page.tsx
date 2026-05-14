"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { theAlley } from "@/data/the-alley";

function rollDie(): number {
  return Math.floor(Math.random() * 6) + 1;
}

function rollSixDice(): number[] {
  return Array.from({ length: 6 }, rollDie);
}

function scoreDice(dice: number[]): { total: number; breakdown: string } {
  const counts: Record<number, number> = {};
  for (const d of dice) counts[d] = (counts[d] || 0) + 1;

  let total = 0;
  const parts: string[] = [];

  for (const [face, count] of Object.entries(counts)) {
    const f = Number(face);
    if (count === 1) {
      total += f;
      parts.push(`${f}`);
    } else if (count === 2) {
      const val = f * 4;
      total += val;
      parts.push(`(${f}+${f})×2=${val}`);
    } else if (count >= 3) {
      const val = f * count * 3;
      total += val;
      parts.push(`(${f}×${count})×3=${val}`);
    }
  }

  return { total, breakdown: parts.join(" + ") };
}

function DiceDisplay({ dice, label }: { dice: number[]; label: string }) {
  const faces = ["⚀","⚁","⚂","⚃","⚄","⚅"];
  const counts: Record<number, number> = {};
  for (const d of dice) counts[d] = (counts[d] || 0) + 1;

  return (
    <div>
      <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold)", opacity: 0.7, letterSpacing: "0.15em" }}>{label}</p>
      <div className="flex gap-3 flex-wrap mb-2">
        {dice.map((d, i) => (
          <span
            key={i}
            className="text-3xl"
            style={{
              color: counts[d] >= 2 ? "var(--gold-light)" : "var(--parchment)",
              opacity: counts[d] >= 2 ? 1 : 0.6,
              filter: counts[d] >= 2 ? "drop-shadow(0 0 6px rgba(201,168,76,0.6))" : "none",
            }}
          >
            {faces[d - 1]}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TheAlleyPage() {
  const v = theAlley;
  const [dmOpen, setDmOpen] = useState(false);
  const [partyDice, setPartyDice] = useState<number[] | null>(null);
  const [childDice, setChildDice] = useState<number[] | null>(null);
  const [rolled, setRolled] = useState(false);

  function handleRoll() {
    const p = rollSixDice();
    const c = rollSixDice();
    setPartyDice(p);
    setChildDice(c);
    setRolled(true);
  }

  function handleReset() {
    setPartyDice(null);
    setChildDice(null);
    setRolled(false);
  }

  const partyScore = partyDice ? scoreDice(partyDice) : null;
  const childScore = childDice ? scoreDice(childDice) : null;
  const partyWins = partyScore && childScore ? partyScore.total > childScore.total : null;
  const tie = partyScore && childScore ? partyScore.total === childScore.total : false;

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "Main Street Intersection", href: "/beacon/main-street-intersection" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Beacon — The Back Streets</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        </div>

        <div className="gold-divider" />

        {/* Scene Description */}
        <div className="mt-8 mb-8">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
          <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.88 }}>
            &ldquo;{v.sceneDescription}&rdquo;
          </p>
        </div>

        {/* DM Approach Note */}
        <div className="mb-8 p-5" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.3)" }}>
          <h4 className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM — If They Approach &amp; Investigate</h4>
          <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.88 }}>{v.dmApproach}</p>
        </div>

        {/* Perception Check */}
        <div className="mb-8 p-5" style={{ background: "rgba(139,26,26,0.06)", border: "1px solid rgba(139,26,26,0.25)" }}>
          <h4 className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM — Call for a Perception Check</h4>
          <p className="text-sm mb-2" style={{ color: "var(--parchment)", opacity: 0.85 }}>
            <span className="font-bold" style={{ color: "var(--gold)" }}>DC 10: </span>{v.perceptionCheck.dc10}
          </p>
          <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.85 }}>
            <span className="font-bold" style={{ color: "var(--gold)" }}>DC 15: </span>{v.perceptionCheck.dc15}
          </p>
        </div>

        <div className="gold-divider" />

        {/* Pip's Intro */}
        <div className="mt-8 mb-8">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players — Pip</h2>
          <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.88 }}>
            &ldquo;{v.pipIntro}&rdquo;
          </p>
        </div>

        {/* Dice Game */}
        <div className="mt-8 p-6" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}>
          <h2 className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>The Dice Game</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.5 }}>
            Cost: 5 sp per attempt. Party must win to earn a room. Doubles score ×2. Triples score ×3. Highest total wins.
          </p>

          {!rolled ? (
            <button
              onClick={handleRoll}
              className="w-full py-4 text-sm font-bold tracking-widest uppercase transition-all duration-200"
              style={{
                background: "rgba(201,168,76,0.1)",
                border: "1px solid rgba(201,168,76,0.4)",
                color: "var(--gold-light)",
                cursor: "pointer",
                letterSpacing: "0.15em",
              }}
            >
              Roll the Dice
            </button>
          ) : (
            <div className="space-y-6">
              {/* Party Roll */}
              <div className="p-4" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.15)" }}>
                {partyDice && <DiceDisplay dice={partyDice} label="The Party" />}
                {partyScore && (
                  <div className="mt-2">
                    <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.5 }}>{partyScore.breakdown}</p>
                    <p className="text-2xl font-bold mt-1" style={{ color: "var(--gold-light)" }}>{partyScore.total}</p>
                  </div>
                )}
              </div>

              {/* Children Roll */}
              <div className="p-4" style={{ background: "rgba(201,168,76,0.03)", border: "1px solid rgba(201,168,76,0.12)" }}>
                {childDice && <DiceDisplay dice={childDice} label="Pip's Children" />}
                {childScore && (
                  <div className="mt-2">
                    <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.5 }}>{childScore.breakdown}</p>
                    <p className="text-2xl font-bold mt-1" style={{ color: "var(--gold)" }}>{childScore.total}</p>
                  </div>
                )}
              </div>

              {/* Result */}
              <div className="py-4 px-5 text-center" style={{
                background: partyWins ? "rgba(201,168,76,0.08)" : tie ? "rgba(100,100,100,0.1)" : "rgba(139,26,26,0.12)",
                border: `1px solid ${partyWins ? "rgba(201,168,76,0.35)" : tie ? "rgba(100,100,100,0.2)" : "rgba(139,26,26,0.35)"}`,
              }}>
                {tie ? (
                  <p className="text-base font-bold" style={{ color: "var(--parchment)" }}>Tie — Roll Again</p>
                ) : partyWins ? (
                  <>
                    <p className="text-base font-bold mb-1" style={{ color: "var(--gold-light)" }}>The Party Wins</p>
                    <p className="text-xs italic" style={{ color: "var(--parchment)", opacity: 0.6 }}>Pip smiles and nods. "Well done. Follow me."</p>
                  </>
                ) : (
                  <>
                    <p className="text-base font-bold mb-1" style={{ color: "#e88080" }}>The Children Win — 5 sp to the house</p>
                    <p className="text-xs italic" style={{ color: "var(--parchment)", opacity: 0.6 }}>Pip holds out his hand, waiting. "Try again whenever you're ready."</p>
                  </>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleRoll}
                  className="flex-1 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-200"
                  style={{
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "var(--gold)",
                    cursor: "pointer",
                    letterSpacing: "0.12em",
                  }}
                >
                  Roll Again
                </button>
                <button
                  onClick={handleReset}
                  className="py-3 px-5 text-sm uppercase transition-all duration-200"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(201,168,76,0.15)",
                    color: "var(--parchment)",
                    opacity: 0.4,
                    cursor: "pointer",
                    letterSpacing: "0.1em",
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>

        {/* DM Private Panel */}
        <div className="mt-8">
          <button
            onClick={() => setDmOpen(!dmOpen)}
            className="w-full py-3 px-6 text-sm font-bold tracking-widest uppercase transition-all duration-200"
            style={{
              background: dmOpen ? "rgba(139,26,26,0.3)" : "rgba(139,26,26,0.15)",
              border: "1px solid rgba(139,26,26,0.5)",
              color: "#e88080",
              cursor: "pointer",
              letterSpacing: "0.15em",
            }}
          >
            {dmOpen ? "▲ Close DM Notes" : "▼ DM Notes — Private"}
          </button>

          {dmOpen && (
            <div className="dm-private p-6 mt-0 space-y-5" style={{ borderTop: "none" }}>
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>The Game</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmGame}</p>
              </div>
              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>{v.dmGorkrun.name} — The Figure in the Shadows</h4>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmGorkrun.description}</p>
                <p className="text-xs italic" style={{ color: "#e88080", opacity: 0.8 }}>{v.dmGorkrun.dmNote}</p>
              </div>
            </div>
          )}
        </div>

        {/* Continue to Orphanage */}
        {partyWins && (
          <div className="mt-8">
            <div className="gold-divider" />
            <div className="mt-6">
              <a
                href="/beacon/main-street-intersection/the-alley/orphanage"
                className="px-6 py-5 block transition-all duration-200"
                style={{
                  border: "1px solid rgba(201,168,76,0.35)",
                  background: "rgba(201,168,76,0.04)",
                  textDecoration: "none",
                }}
              >
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.7, letterSpacing: "0.15em" }}>Follow Pip inside</p>
                <p className="text-base font-bold" style={{ color: "var(--gold-light)" }}>Enter the Orphanage →</p>
              </a>
            </div>
          </div>
        )}

        {/* Back */}
        <div className="mt-14 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/main-street-intersection" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Back to the Intersection
          </a>
        </div>
      </div>
    </main>
  );
}
