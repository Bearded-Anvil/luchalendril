"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { serpentPriestOpenRooms } from "@/data/serpent-priest-open-rooms";

export default function OpenRoomsPage() {
  const v = serpentPriestOpenRooms;
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
            <span className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM — The Open Rooms</span>
            <span style={{ color: "#e88080", fontSize: "1.1rem" }}>{dmOpen ? "▲" : "▼"}</span>
          </button>
          {dmOpen && (
            <div className="dm-private p-6" style={{ borderTop: "none" }}>

              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmNotes.overview}</p>

              {/* Drawers */}
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{v.dmNotes.drawers.trigger}</p>
              <div className="p-4 mb-3" style={{ background: "rgba(201,168,76,0.04)", borderLeft: "2px solid rgba(201,168,76,0.3)" }}>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.45, letterSpacing: "0.12em" }}>Read to Players</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.88, fontStyle: "italic" }}>{v.dmNotes.drawers.description}</p>
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--parchment)", opacity: 0.8 }}>⚑ {v.dmNotes.drawers.dmNote}</p>

              {/* Extra details */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.15)", paddingTop: "1.5rem" }}>
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>Optional Details</p>
                <div className="flex flex-col gap-3 mb-4">
                  {v.dmNotes.details.map((detail, i) => (
                    <div key={i} className="p-3" style={{ borderLeft: "2px solid rgba(201,168,76,0.25)" }}>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.88 }}>{detail}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.6 }}>⚑ {v.dmNotes.note}</p>
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
