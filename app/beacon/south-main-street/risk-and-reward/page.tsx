"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { riskAndReward } from "@/data/risk-and-reward";

export default function RiskAndRewardPage() {
  const v = riskAndReward;
  const [dmOpen, setDmOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "South Main Street", href: "/beacon/south-main-street" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>South Main Street</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
          <p className="text-sm italic mt-1" style={{ color: "var(--parchment)", opacity: 0.5 }}>{v.tagline}</p>
        </div>

        {/* Shop Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "4/3", maxHeight: "520px" }}>
          <Image
            src={v.image}
            alt={v.name}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>

        <div className="gold-divider" />

        {/* Scene Description */}
        <div className="mt-8 mb-6">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
          <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.88 }}>
            &ldquo;{v.sceneDescription}&rdquo;
          </p>
        </div>

        {/* Merchant */}
        <div className="mb-10 p-6" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
          <p className="text-base font-bold mb-1" style={{ color: "var(--gold-light)" }}>{v.owner.name}</p>
          <p className="text-xs mb-4" style={{ color: "var(--parchment)", opacity: 0.5 }}>{v.owner.race} — {v.owner.age}</p>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.owner.appearance}</p>
          <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.75 }}>
            &ldquo;{v.owner.greeting}&rdquo;
          </p>
        </div>

        <div className="gold-divider" />

        {/* The Boxes */}
        <div className="mt-8">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Available Boxes</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.45 }}>
            Players may ask to shake any box before purchasing.
          </p>

          <div className="space-y-3">
            {v.boxes.map((box, i) => (
              <div
                key={i}
                className="px-5 py-4"
                style={{
                  background: i % 2 === 0 ? "rgba(201,168,76,0.03)" : "transparent",
                  border: "1px solid rgba(201,168,76,0.12)",
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-1">
                  <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{box.name}</p>
                  <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--gold)", minWidth: "3.5rem", textAlign: "right" }}>{box.price}</p>
                </div>
                <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--parchment)", opacity: 0.75 }}>{box.description}</p>
                <p className="text-xs italic" style={{ color: "var(--parchment)", opacity: 0.5 }}>
                  <span style={{ color: "var(--gold)", opacity: 0.6 }}>When shaken: </span>
                  {box.whenShaken}
                </p>
                {"note" in box && box.note && (
                  <p className="text-xs italic mt-1" style={{ color: "#e88080", opacity: 0.7 }}>{box.note}</p>
                )}
              </div>
            ))}
          </div>
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
            <div className="dm-private p-6 mt-0 space-y-6" style={{ borderTop: "none" }}>

              {/* Lockpick Note */}
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Important Rule</h4>
                <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{v.dmPrivate.lockpickNote}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              {/* Personality */}
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Personality</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.personality}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              {/* Desires */}
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Desires</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.desires}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              {/* Fears & Perception */}
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Fears / Perception Check</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.fears}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              {/* True History */}
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>True History</h4>
                <p className="text-xs italic mb-2" style={{ color: "var(--parchment)", opacity: 0.5 }}>Very difficult to uncover. Reveal only if players earn it.</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.history}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              {/* Quest Hook */}
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080" }}>Quest Hook</h4>
                {v.dmPrivate.questHooks.map((hook, i) => (
                  <div key={i}>
                    <p className="text-sm font-bold mb-1" style={{ color: "var(--gold-light)" }}>{hook.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{hook.description}</p>
                  </div>
                ))}
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              {/* Box Contents */}
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-4" style={{ color: "#e88080" }}>What&rsquo;s Actually Inside</h4>
                <div className="space-y-4">
                  {v.dmPrivate.boxContents.map((box, i) => (
                    <div key={i} className="pl-4" style={{ borderLeft: "2px solid rgba(139,26,26,0.4)" }}>
                      <p className="text-sm font-bold mb-1" style={{ color: "var(--gold-light)" }}>{box.boxName}</p>
                      <ul className="space-y-1">
                        {box.contents.map((item, j) => (
                          <li key={j} className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>
                            › {item}
                          </li>
                        ))}
                      </ul>
                      {"note" in box && box.note && (
                        <p className="text-xs italic mt-1" style={{ color: "#e88080", opacity: 0.7 }}>{box.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Back link */}
        <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/south-main-street" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← South Main Street
          </a>
        </div>
      </div>
    </main>
  );
}
