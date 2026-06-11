"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { lonelyPathFootPath } from "@/data/lonely-path-foot-path";

export default function FootPathPage() {
  const v = lonelyPathFootPath;
  const [dmOpen, setDmOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Pine Loft", href: "/pine-loft" },
            { label: "Lonely Path Pines", href: "/pine-loft/lonely-path-pines" },
            { label: "The Campsite", href: "/pine-loft/lonely-path-pines/midbend-tract/campsite" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Off the Road — South of the Campsite</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
        </div>

        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
        </div>

        <div className="gold-divider" />

        {/* Scene Description */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
          {v.sceneDescription.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed mb-4 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.88, fontStyle: "italic" }}>
              {paragraph}
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
            <span className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM — The Cliff</span>
            <span style={{ color: "#e88080", fontSize: "1.1rem" }}>{dmOpen ? "▲" : "▼"}</span>
          </button>
          {dmOpen && (
            <div className="dm-private p-6" style={{ borderTop: "none" }}>
              {/* Climb Down */}
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{v.dmNotes.climbDown.title}</p>
              {v.dmNotes.climbDown.description.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.9 }}>
                  {paragraph}
                </p>
              ))}

              {/* Perception Check */}
              <div className="mt-4 mb-2 p-4" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.7, letterSpacing: "0.15em" }}>Perception — DC {v.dmNotes.climbDown.perceptionCheck.dc}</p>
                <p className="text-xs mb-3" style={{ color: "var(--parchment)", opacity: 0.6, fontStyle: "italic" }}>{v.dmNotes.climbDown.perceptionCheck.trigger}</p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmNotes.climbDown.perceptionCheck.find}</p>

                {/* The Item */}
                <p className="text-xs uppercase tracking-widest mt-4 mb-2" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.15em" }}>{v.dmNotes.climbDown.perceptionCheck.item.name}</p>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.85, fontStyle: "italic" }}>{v.dmNotes.climbDown.perceptionCheck.item.description}</p>
                {v.dmNotes.climbDown.perceptionCheck.item.dmNote.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.9 }}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Climb Up */}
              <p className="text-xs uppercase tracking-widest mt-6 mb-3" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>{v.dmNotes.climbUp.title}</p>
              {v.dmNotes.climbUp.description.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed mb-4 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.9 }}>
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Navigation Footer */}
        <div className="mt-10 pt-8 flex items-center justify-between" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/pine-loft/lonely-path-pines/midbend-tract/campsite" style={{ textDecoration: "none" }}>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.4, letterSpacing: "0.15em" }}>Back</p>
            <p style={{ color: "var(--gold)", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>← The Campsite</p>
          </a>
          <a href="/pine-loft/lonely-path-pines/the-ruins" style={{ textDecoration: "none", textAlign: "right" }}>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.4, letterSpacing: "0.15em" }}>150 ft. Below</p>
            <p style={{ color: "var(--gold)", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>The Ruins →</p>
          </a>
        </div>
      </div>
    </main>
  );
}
