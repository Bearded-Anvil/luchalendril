"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { southwestBeaconStreet } from "@/data/southwest-beacon-street";

function rollD20() { return Math.floor(Math.random() * 20) + 1; }
function rollD6() { return Math.floor(Math.random() * 6) + 1; }

export default function SouthwestBeaconStreetPage() {
  const v = southwestBeaconStreet;
  const [dmOpen, setDmOpen] = useState(false);
  const [d20Result, setD20Result] = useState<number | null>(null);
  const [d6Result, setD6Result] = useState<number | null>(null);
  const [openEncounter, setOpenEncounter] = useState<number | null>(null);
  const [childRescued, setChildRescued] = useState(false);

  useEffect(() => {
    const rescued = localStorage.getItem("luchalendril_child_rescued");
    if (rescued === "true") setChildRescued(true);
  }, []);

  function handleD20() {
    setD20Result(rollD20());
    setD6Result(null);
    setOpenEncounter(null);
  }

  function handleD6() {
    setD6Result(rollD6());
    setOpenEncounter(null);
  }

  function handleReset() {
    setD20Result(null);
    setD6Result(null);
    setOpenEncounter(null);
  }

  function markChildRescued() {
    localStorage.setItem("luchalendril_child_rescued", "true");
    setChildRescued(true);
  }

  const triggersEncounter = d20Result === 1 || d20Result === 20;

  const encounters = v.encounters.onOne;

  // If result 1 has already happened, swap it for result 3 (shady merchant)
  function getEffectiveEncounter(roll: number) {
    if (roll === 1 && childRescued) return encounters[2]; // shady merchant
    return encounters[roll - 1];
  }

  const currentEncounter = d6Result ? getEffectiveEncounter(d6Result) : null;

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
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Beacon Street</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        </div>

        <div className="gold-divider" />

        {/* Scene + DM Notes */}
        <div className="grid md:grid-cols-2 gap-10 mt-8 mb-10">
          <div>
            <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
            <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.88 }}>
              &ldquo;{v.description}&rdquo;
            </p>
          </div>
          <div className="p-6" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.3)" }}>
            <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM Notes</h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.8 }}>{v.dmNotes}</p>
          </div>
        </div>

        {/* Notable Locations */}
        <div className="gold-divider" />
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Notable Locations</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {v.locations.map((loc, i) => (
              loc.status === "live" ? (
                <a key={i} href={loc.path} style={{ textDecoration: "none" }}>
                  <div className="px-5 py-4 transition-all duration-200" style={{
                    border: "1px solid rgba(201,168,76,0.35)",
                    background: "rgba(201,168,76,0.05)",
                    cursor: "pointer",
                  }}>
                    <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{loc.name}</p>
                    <p className="text-xs mt-1" style={{ color: "var(--gold)", opacity: 0.6 }}>Enter →</p>
                  </div>
                </a>
              ) : (
                <div key={i} className="px-5 py-4" style={{ border: "1px solid rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.02)", opacity: 0.5 }}>
                  <p className="text-sm" style={{ color: "var(--parchment)" }}>{loc.name}</p>
                  <p className="text-xs italic mt-1" style={{ color: "var(--parchment)", opacity: 0.4 }}>Coming soon</p>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Encounter Table */}
        <div className="gold-divider" />
        <div className="mt-8">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Street Encounters</h2>
          <p className="text-sm italic mb-6" style={{ color: "var(--parchment)", opacity: 0.5 }}>{v.encounters.instruction}</p>

          {/* D20 Roller */}
          <div className="p-6 mb-4" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={handleD20}
                className="py-3 px-8 text-sm font-bold tracking-widest uppercase transition-all duration-200"
                style={{
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.4)",
                  color: "var(--gold-light)",
                  cursor: "pointer",
                  letterSpacing: "0.15em",
                }}
              >
                Roll D20
              </button>

              {d20Result && (
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-bold" style={{ color: triggersEncounter ? "var(--gold-light)" : "var(--parchment)", opacity: triggersEncounter ? 1 : 0.4 }}>
                    {d20Result}
                  </span>
                  {triggersEncounter ? (
                    <span className="text-sm" style={{ color: "var(--gold)", opacity: 0.8 }}>— Roll the D6</span>
                  ) : (
                    <span className="text-sm italic" style={{ color: "var(--parchment)", opacity: 0.35 }}>— No encounter this pass</span>
                  )}
                </div>
              )}

              {d20Result && (
                <button onClick={handleReset} className="text-xs uppercase" style={{ color: "var(--parchment)", opacity: 0.3, cursor: "pointer", background: "none", border: "none", letterSpacing: "0.1em" }}>
                  Reset
                </button>
              )}
            </div>

            {/* D6 Roller — only shows when encounter triggered */}
            {triggersEncounter && (
              <div className="mt-5 pt-5" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
                <div className="flex items-center gap-4 flex-wrap">
                  <button
                    onClick={handleD6}
                    className="py-3 px-8 text-sm font-bold tracking-widest uppercase transition-all duration-200"
                    style={{
                      background: "rgba(201,168,76,0.08)",
                      border: "1px solid rgba(201,168,76,0.35)",
                      color: "var(--gold)",
                      cursor: "pointer",
                      letterSpacing: "0.15em",
                    }}
                  >
                    Roll D6
                  </button>
                  {d6Result && (
                    <span className="text-4xl font-bold" style={{ color: "var(--gold-light)" }}>{d6Result}</span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Encounter Result */}
          {currentEncounter && (
            <div className="mt-4 p-6 space-y-4" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.25)" }}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.15em" }}>
                    Encounter {d6Result === 1 && childRescued ? "1 → 3" : d6Result}
                  </p>
                  <p className="text-xl font-bold" style={{ color: "var(--gold-light)" }}>{currentEncounter.title}</p>
                </div>
              </div>

              {"readAloud" in currentEncounter && currentEncounter.readAloud && (
                <div>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.15em" }}>Read to Players</p>
                  <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.88 }}>
                    &ldquo;{currentEncounter.readAloud}&rdquo;
                  </p>
                </div>
              )}

              {"dmNote" in currentEncounter && currentEncounter.dmNote && (
                <div className="p-4" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.25)" }}>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", letterSpacing: "0.15em" }}>DM</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{currentEncounter.dmNote}</p>
                </div>
              )}

              {"resolution" in currentEncounter && currentEncounter.resolution && (
                <div>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.15em" }}>Read to Players</p>
                  <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.88 }}>
                    &ldquo;{currentEncounter.resolution}&rdquo;
                  </p>
                </div>
              )}

              {"reward" in currentEncounter && currentEncounter.reward && (
                <p className="text-sm" style={{ color: "var(--gold)", opacity: 0.8 }}>
                  <span className="font-bold">Reward: </span>{currentEncounter.reward}
                </p>
              )}

              {"rewardNote" in currentEncounter && currentEncounter.rewardNote && (
                <div className="p-4" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.25)" }}>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", letterSpacing: "0.15em" }}>DM Note</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{currentEncounter.rewardNote}</p>
                </div>
              )}

              {"afterText" in currentEncounter && currentEncounter.afterText && !childRescued && (
                <div className="flex items-center gap-3 pt-2" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
                  <p className="text-xs italic flex-1" style={{ color: "#e88080", opacity: 0.7 }}>{currentEncounter.afterText}</p>
                  <button
                    onClick={markChildRescued}
                    className="text-xs py-2 px-4 uppercase whitespace-nowrap"
                    style={{
                      background: "rgba(139,26,26,0.2)",
                      border: "1px solid rgba(139,26,26,0.4)",
                      color: "#e88080",
                      cursor: "pointer",
                      letterSpacing: "0.1em",
                    }}
                  >
                    Mark as Done
                  </button>
                </div>
              )}

              {/* Shady Merchant Items */}
              {"items" in currentEncounter && currentEncounter.items && (
                <div className="mt-2 space-y-3">
                  {currentEncounter.items.map((item, i) => (
                    <div key={i} className="px-4 py-3" style={{
                      background: i % 2 === 0 ? "rgba(201,168,76,0.03)" : "transparent",
                      border: "1px solid rgba(201,168,76,0.1)",
                    }}>
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{item.name}</p>
                        <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--gold)" }}>{item.price}</p>
                      </div>
                      <p className="text-xs mb-1" style={{ color: "var(--parchment)", opacity: 0.65 }}>{item.description}</p>
                      <p className="text-xs mb-1" style={{ color: "var(--gold)", opacity: 0.65 }}>{item.effect}</p>
                      <p className="text-xs italic" style={{ color: "#e88080", opacity: 0.6 }}><span className="font-bold not-italic">Side Effect: </span>{item.sideEffect}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Full Chart Reference — DM Panel */}
          <div className="mt-6">
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
              {dmOpen ? "▲ Close Full Encounter Chart" : "▼ Full Encounter Chart — DM Reference"}
            </button>

            {dmOpen && (
              <div className="dm-private p-6 mt-0 space-y-6" style={{ borderTop: "none" }}>
                {encounters.map((enc, i) => (
                  <div key={i}>
                    <button
                      className="w-full text-left py-2"
                      onClick={() => setOpenEncounter(openEncounter === i ? null : i)}
                      style={{ background: "none", border: "none", cursor: "pointer" }}
                    >
                      <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>
                        {openEncounter === i ? "▲" : "▼"} D6 Result {enc.result} — {enc.title}
                        {enc.result === 1 && childRescued ? " (replaced by Result 3)" : ""}
                      </p>
                    </button>

                    {openEncounter === i && (
                      <div className="mt-3 pl-4 space-y-3" style={{ borderLeft: "2px solid rgba(201,168,76,0.2)" }}>
                        {"readAloud" in enc && enc.readAloud && (
                          <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.85 }}>
                            &ldquo;{enc.readAloud}&rdquo;
                          </p>
                        )}
                        {"dmNote" in enc && enc.dmNote && (
                          <p className="text-sm leading-relaxed" style={{ color: "#e88080", opacity: 0.85 }}>{enc.dmNote}</p>
                        )}
                        {"resolution" in enc && enc.resolution && (
                          <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.75 }}>
                            &ldquo;{enc.resolution}&rdquo;
                          </p>
                        )}
                        {"reward" in enc && enc.reward && (
                          <p className="text-xs" style={{ color: "var(--gold)", opacity: 0.75 }}><span className="font-bold">Reward: </span>{enc.reward}</p>
                        )}
                        {"rewardNote" in enc && enc.rewardNote && (
                          <div className="p-3" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.25)" }}>
                            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#e88080", letterSpacing: "0.15em" }}>DM Note</p>
                            <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{enc.rewardNote}</p>
                          </div>
                        )}
                        {"afterText" in enc && enc.afterText && (
                          <p className="text-xs italic" style={{ color: "#e88080", opacity: 0.6 }}>{enc.afterText}</p>
                        )}
                        {"items" in enc && enc.items && (
                          <div className="mt-2 space-y-2">
                            {enc.items.map((item, ii) => (
                              <div key={ii} className="px-3 py-2" style={{ border: "1px solid rgba(201,168,76,0.1)", background: "rgba(201,168,76,0.02)" }}>
                                <div className="flex items-start justify-between gap-4 mb-1">
                                  <p className="text-xs font-bold" style={{ color: "var(--gold-light)" }}>{item.name}</p>
                                  <p className="text-xs font-bold whitespace-nowrap" style={{ color: "var(--gold)" }}>{item.price}</p>
                                </div>
                                <p className="text-xs mb-1" style={{ color: "var(--gold)", opacity: 0.65 }}>{item.effect}</p>
                                <p className="text-xs italic" style={{ color: "#e88080", opacity: 0.6 }}><span className="font-bold not-italic">Side Effect: </span>{item.sideEffect}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                    {i < encounters.length - 1 && (
                      <div className="mt-4" style={{ borderBottom: "1px solid rgba(201,168,76,0.08)" }} />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="mt-16 pt-8 flex items-center justify-between" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/main-street-intersection" className="text-sm" style={{ color: "var(--gold)", textDecoration: "none", opacity: 0.7 }}>
            ← Back to Intersection
          </a>
          <a href="/beacon/dock-yard" className="text-right" style={{ textDecoration: "none" }}>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.4, letterSpacing: "0.15em" }}>Continue</p>
            <p className="text-sm" style={{ color: "var(--gold)", opacity: 0.7 }}>Dock Yard →</p>
          </a>
        </div>
      </div>
    </main>
  );
}
