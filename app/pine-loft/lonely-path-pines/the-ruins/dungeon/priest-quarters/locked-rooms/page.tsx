"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { serpentPriestLockedRooms } from "@/data/serpent-priest-locked-rooms";

export default function LockedRoomsPage() {
  const v = serpentPriestLockedRooms;
  const n = v.dmNotes;
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
            { label: "Priest Quarters", href: "/pine-loft/lonely-path-pines/the-ruins/dungeon/priest-quarters" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Priest Quarters</p>
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

        {/* DM Toggle */}
        <div className="mt-8 mb-10">
          <button
            onClick={() => setDmOpen(!dmOpen)}
            className="dm-private w-full text-left px-5 py-3 flex items-center justify-between"
            style={{ border: "none", cursor: "pointer" }}
          >
            <span className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM — The Locked Rooms</span>
            <span style={{ color: "#e88080", fontSize: "1.1rem" }}>{dmOpen ? "▲" : "▼"}</span>
          </button>

          {dmOpen && (
            <div className="dm-private p-6" style={{ borderTop: "none" }}>

              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--parchment)", opacity: 0.9 }}>{n.overview}</p>

              {/* Drawers — both rooms */}
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{n.drawers.trigger}</p>
              <div className="p-4 mb-2" style={{ background: "rgba(201,168,76,0.04)", borderLeft: "2px solid rgba(201,168,76,0.3)" }}>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.45, letterSpacing: "0.12em" }}>Read to Players</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.88, fontStyle: "italic" }}>{n.drawers.read}</p>
              </div>
              <p className="text-xs leading-relaxed mb-8" style={{ color: "var(--parchment)", opacity: 0.65 }}>⚑ {n.drawers.dmNote}</p>

              {/* Room 1 */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.15)", paddingTop: "1.5rem" }}>
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{n.room1.title}</p>
                <p className="text-xs mb-3" style={{ color: "var(--parchment)", opacity: 0.5, fontStyle: "italic" }}>{n.room1.trigger}</p>
                <div className="p-4 mb-4" style={{ background: "rgba(201,168,76,0.04)", borderLeft: "2px solid rgba(201,168,76,0.3)" }}>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.45, letterSpacing: "0.12em" }}>Read to Players</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.88, fontStyle: "italic" }}>{n.room1.read}</p>
                </div>
                <div className="p-4" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.7, letterSpacing: "0.15em" }}>{n.room1.item.name}</p>
                  <p className="text-sm mb-3" style={{ color: "var(--parchment)", opacity: 0.85, fontStyle: "italic" }}>{n.room1.item.description}</p>
                  <p className="text-xs mb-2" style={{ color: "var(--parchment)", opacity: 0.7 }}>{n.room1.item.mechanics}</p>
                  <div className="flex gap-4 flex-wrap mt-3 mb-3">
                    <div className="p-2 px-3" style={{ border: "1px solid rgba(201,168,76,0.2)" }}>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.5 }}>Weapon Shop</p>
                      <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{n.room1.item.value.weaponShop}</p>
                    </div>
                    <div className="p-2 px-3" style={{ border: "1px solid rgba(201,168,76,0.2)" }}>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.5 }}>Antiques Dealer</p>
                      <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{n.room1.item.value.antiquesDealer}</p>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.65 }}>⚑ {n.room1.item.dmNote}</p>
                </div>
              </div>

              {/* Room 2 */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.15)", paddingTop: "1.5rem", marginTop: "2rem" }}>
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{n.room2.title}</p>
                <p className="text-xs mb-3" style={{ color: "var(--parchment)", opacity: 0.5, fontStyle: "italic" }}>{n.room2.trigger}</p>
                <div className="p-4 mb-4" style={{ background: "rgba(201,168,76,0.04)", borderLeft: "2px solid rgba(201,168,76,0.3)" }}>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.45, letterSpacing: "0.12em" }}>Read to Players</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.88, fontStyle: "italic" }}>{n.room2.read}</p>
                </div>

                {/* Bed search */}
                <p className="text-xs mb-3" style={{ color: "var(--parchment)", opacity: 0.5, fontStyle: "italic" }}>{n.room2.bedSearch.trigger}</p>
                <div className="p-4 mb-5" style={{ background: "rgba(201,168,76,0.04)", borderLeft: "2px solid rgba(201,168,76,0.3)" }}>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.45, letterSpacing: "0.12em" }}>Read to Players</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.88, fontStyle: "italic" }}>{n.room2.bedSearch.read}</p>
                </div>

                {/* Lockbox */}
                <div className="p-4 mb-5" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.2)" }}>
                  <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080", opacity: 0.8, letterSpacing: "0.15em" }}>Lockbox — DC {n.room2.lockbox.dc}</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.9 }}>{n.room2.lockbox.trapCheck.dmNote}</p>
                  <div className="flex gap-4 flex-wrap mb-4">
                    <div className="p-2 px-3" style={{ border: "1px solid rgba(232,128,128,0.3)" }}>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#e88080", opacity: 0.6 }}>Detect Trap</p>
                      <p className="text-sm font-bold" style={{ color: "var(--parchment)" }}>DC {n.room2.lockbox.trapCheck.detectDC}</p>
                    </div>
                    <div className="p-2 px-3" style={{ border: "1px solid rgba(232,128,128,0.3)" }}>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#e88080", opacity: 0.6 }}>Disarm Trap</p>
                      <p className="text-sm font-bold" style={{ color: "var(--parchment)" }}>DC {n.room2.lockbox.trapCheck.disarmDC}</p>
                    </div>
                    <div className="p-2 px-3" style={{ border: "1px solid rgba(232,128,128,0.3)" }}>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#e88080", opacity: 0.6 }}>Open Lock</p>
                      <p className="text-sm font-bold" style={{ color: "var(--parchment)" }}>DC {n.room2.lockbox.dc}</p>
                    </div>
                  </div>

                  {/* Trap */}
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.6, letterSpacing: "0.12em" }}>If Trap Fires</p>
                  <div className="p-3 mb-3" style={{ background: "rgba(201,168,76,0.04)", borderLeft: "2px solid rgba(201,168,76,0.3)" }}>
                    <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.45, letterSpacing: "0.12em" }}>Read to Players</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.88, fontStyle: "italic" }}>{n.room2.lockbox.trap.read}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.85 }}>
                      <strong style={{ color: "var(--gold)" }}>DEX Save DC {n.room2.lockbox.trap.dexSave.dc}</strong> or take {n.room2.lockbox.trap.dexSave.damage}
                    </p>
                    <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.85, fontStyle: "italic" }}>{n.room2.lockbox.trap.dexSave.onHit}</p>
                    <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.85 }}>
                      <strong style={{ color: "var(--gold)" }}>CON Save DC {n.room2.lockbox.trap.dexSave.conSave.dc}</strong> or take {n.room2.lockbox.trap.dexSave.conSave.damage}
                    </p>
                  </div>
                </div>

                {/* Contents */}
                <div className="p-4 mb-3" style={{ background: "rgba(201,168,76,0.04)", borderLeft: "2px solid rgba(201,168,76,0.3)" }}>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.45, letterSpacing: "0.12em" }}>Read to Players — Box Open</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.88, fontStyle: "italic" }}>{n.room2.lockbox.openRead}</p>
                </div>

                <div className="flex flex-col gap-4 mt-4">
                  {n.room2.lockbox.contents.map((item) => (
                    <div key={item.name} className="p-4" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
                      <div className="flex items-center gap-3 mb-2">
                        <p className="text-xs uppercase tracking-widest" style={{ color: "var(--gold)", opacity: 0.7, letterSpacing: "0.15em" }}>{item.name}</p>
                        {item.magic && <p className="text-xs" style={{ color: "#e88080", opacity: 0.7 }}>Magic Item</p>}
                      </div>
                      <p className="text-sm mb-2" style={{ color: "var(--parchment)", opacity: 0.85, fontStyle: "italic" }}>{item.description}</p>
                      {"value" in item && item.value && (
                        <p className="text-sm mb-2" style={{ color: "var(--gold-light)", fontWeight: "700" }}>{item.value}</p>
                      )}
                      {"identification" in item && item.identification && (
                        <p className="text-xs mb-2" style={{ color: "#e88080", opacity: 0.75 }}>⚑ {item.identification}</p>
                      )}
                      {"effect" in item && item.effect && (
                        <p className="text-sm leading-relaxed mb-2" style={{ color: "var(--parchment)", opacity: 0.9 }}>{item.effect}</p>
                      )}
                      {"limitation" in item && item.limitation && (
                        <p className="text-sm leading-relaxed mb-2" style={{ color: "var(--parchment)", opacity: 0.75, fontStyle: "italic" }}>{item.limitation}</p>
                      )}
                      {"dmNote" in item && item.dmNote && (
                        <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.6 }}>⚑ {item.dmNote}</p>
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
          <a href="/pine-loft/lonely-path-pines/the-ruins/dungeon/priest-quarters" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Priest Quarters
          </a>
        </div>
      </div>
    </main>
  );
}
