"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { serpentDungeonGreatHall } from "@/data/serpent-dungeon-great-hall";

export default function GreatHallPage() {
  const v = serpentDungeonGreatHall;
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
            <span className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM — The Great Hall</span>
            <span style={{ color: "#e88080", fontSize: "1.1rem" }}>{dmOpen ? "▲" : "▼"}</span>
          </button>

          {dmOpen && (
            <div className="dm-private p-6" style={{ borderTop: "none" }}>

              {/* First Entry */}
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{v.dmNotes.firstEntry.title}</p>
              {v.dmNotes.firstEntry.description.split("\n\n").map((p, i) => (
                <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.9 }}>
                  {p}
                </p>
              ))}

              {/* The Painting */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.15)", paddingTop: "1.5rem", marginTop: "1.5rem" }}>
                <div className="flex items-baseline gap-3 mb-3">
                  <p className="text-xs uppercase tracking-widest" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{v.dmNotes.painting.title}</p>
                  <p className="text-xs" style={{ color: "var(--gold)", opacity: 0.5 }}>{v.dmNotes.painting.type} DC {v.dmNotes.painting.dc}</p>
                </div>
                <p className="text-xs mb-3" style={{ color: "var(--parchment)", opacity: 0.55, fontStyle: "italic" }}>{v.dmNotes.painting.trigger}</p>
                <div className="p-4 mb-3" style={{ background: "rgba(201,168,76,0.04)", borderLeft: "2px solid rgba(201,168,76,0.3)" }}>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.45, letterSpacing: "0.12em" }}>Read to Players</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.88, fontStyle: "italic" }}>{v.dmNotes.painting.description}</p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>{v.dmNotes.painting.dmNote}</p>
              </div>

              {/* Skeletons */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.15)", paddingTop: "1.5rem", marginTop: "1.5rem" }}>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{v.dmNotes.skeletons.title}</p>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmNotes.skeletons.description}</p>

                {v.dmNotes.skeletons.finds.map((find, i) => (
                  <div key={i} className="mb-5 p-4" style={{ borderLeft: "2px solid rgba(201,168,76,0.25)" }}>
                    <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                      <p className="text-xs uppercase tracking-widest" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.12em" }}>{find.type} DC {find.dc}</p>
                      <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.45, fontStyle: "italic" }}>{find.target}</p>
                    </div>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.88, fontStyle: "italic" }}>{find.description}</p>

                    {"item" in find && find.item && (
                      <div className="mt-3 p-4" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
                        <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.7, letterSpacing: "0.15em" }}>{find.item.name}</p>
                        <p className="text-sm mb-2" style={{ color: "var(--parchment)", opacity: 0.85, fontStyle: "italic" }}>{find.item.description}</p>
                        <p className="text-xs mb-3" style={{ color: "#e88080", opacity: 0.7 }}>⚑ {find.item.identification}</p>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.9 }}>{find.item.effect}</p>
                        <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.65 }}>⚑ {find.item.dmNote}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Exits */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.15)", paddingTop: "1.5rem", marginTop: "1.5rem" }}>
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>Exits</p>
                <div className="flex flex-col gap-3">
                  <div className="p-3" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.12em" }}>Brass Doors</p>
                    <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.8 }}>{v.dmNotes.exits.brassDoorsNote}</p>
                  </div>
                  <div className="p-3" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.12em" }}>Open Passage</p>
                    <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.8 }}>{v.dmNotes.exits.openPassageNote}</p>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6 flex items-center justify-between flex-wrap gap-4" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/pine-loft/lonely-path-pines/the-ruins/dungeon" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← The Dungeon
          </a>
          <div className="flex gap-3 flex-wrap">
            <a href="/pine-loft/lonely-path-pines/the-ruins/dungeon/priest-quarters" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
              Priest Quarters →
            </a>
            <a href="/pine-loft/lonely-path-pines/the-ruins/dungeon/preparation-chamber" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
              Preparation Chamber →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
