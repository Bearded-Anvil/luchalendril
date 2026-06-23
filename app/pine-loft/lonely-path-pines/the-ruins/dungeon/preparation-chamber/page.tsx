"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { serpentPreparationChamber } from "@/data/serpent-preparation-chamber";

export default function PreparationChamberPage() {
  const v = serpentPreparationChamber;
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
            <span className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM — The Preparation Chamber</span>
            <span style={{ color: "#e88080", fontSize: "1.1rem" }}>{dmOpen ? "▲" : "▼"}</span>
          </button>

          {dmOpen && (
            <div className="dm-private p-6" style={{ borderTop: "none" }}>

              {/* Prison Cell */}
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{v.dmNotes.prisonCell.title}</p>
              {v.dmNotes.prisonCell.description.split("\n\n").map((p, i) => (
                <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.9 }}>{p}</p>
              ))}

              {/* The Table */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.15)", paddingTop: "1.5rem", marginTop: "1rem" }}>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{v.dmNotes.table.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmNotes.table.description}</p>
              </div>

              {/* Workbench */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.15)", paddingTop: "1.5rem", marginTop: "1.5rem" }}>
                <div className="flex items-start justify-between gap-6 mb-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{v.dmNotes.workbench.title}</p>
                    <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.55 }}>{v.dmNotes.workbench.skill}</p>
                  </div>
                  <p className="text-2xl font-bold flex-shrink-0" style={{ color: "var(--gold)" }}>DC {v.dmNotes.workbench.dc}</p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmNotes.workbench.description}</p>
              </div>

              {/* Inscription */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.15)", paddingTop: "1.5rem", marginTop: "1.5rem" }}>
                <div className="flex items-start justify-between gap-6 mb-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{v.dmNotes.inscription.title}</p>
                    <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.55 }}>{v.dmNotes.inscription.skill}</p>
                  </div>
                  <p className="text-2xl font-bold flex-shrink-0" style={{ color: "var(--gold)" }}>DC {v.dmNotes.inscription.dc}</p>
                </div>
                {v.dmNotes.inscription.description.split("\n\n").map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.9 }}>{p}</p>
                ))}
                <div className="my-4 p-4 text-center" style={{ border: "1px solid rgba(201,168,76,0.25)", background: "rgba(201,168,76,0.04)" }}>
                  <p className="text-base" style={{ color: "var(--gold-light)", fontStyle: "italic", letterSpacing: "0.05em" }}>{v.dmNotes.inscription.text}</p>
                </div>
                <div className="p-3" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.15)" }}>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>⚑ {v.dmNotes.inscription.dmNote}</p>
                </div>
              </div>

              {/* Secret Passage */}
              <div style={{ borderTop: "1px solid rgba(232,128,128,0.15)", paddingTop: "1.5rem", marginTop: "1.5rem" }}>
                <div className="flex items-start justify-between gap-6 mb-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{v.dmNotes.secretPassage.title}</p>
                    <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.5 }}>{v.dmNotes.secretPassage.trigger}</p>
                  </div>
                  <p className="text-2xl font-bold flex-shrink-0" style={{ color: "var(--gold)" }}>DC {v.dmNotes.secretPassage.dc}</p>
                </div>
                {v.dmNotes.secretPassage.description.split("\n\n").map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.9 }}>{p}</p>
                ))}
                <div className="p-3" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.15)" }}>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>⚑ {v.dmNotes.secretPassage.dmNote}</p>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6 flex items-center justify-between flex-wrap gap-4" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/pine-loft/lonely-path-pines/the-ruins/dungeon/great-hall" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← The Great Hall
          </a>
          <a href="/pine-loft/lonely-path-pines/the-ruins/dungeon/sunning-chamber" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            The Sunning Chamber →
          </a>
        </div>
      </div>
    </main>
  );
}
