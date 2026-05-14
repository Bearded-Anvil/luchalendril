"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { orphanage } from "@/data/orphanage";

export default function OrphanagePage() {
  const v = orphanage;
  const [dmOpen, setDmOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "Main Street Intersection", href: "/beacon/main-street-intersection" },
            { label: "The Back Road", href: "/beacon/main-street-intersection/the-alley" },
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

        {/* Pip's Welcome — first visit only */}
        <div className="mb-8 p-5" style={{ background: "rgba(139,26,26,0.06)", border: "1px solid rgba(139,26,26,0.25)" }}>
          <h4 className="text-xs uppercase tracking-widest mb-1" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM — First Visit Only</h4>
          <p className="text-xs italic mb-4" style={{ color: "#e88080", opacity: 0.6 }}>Read this aloud on the party&apos;s first entrance. Skip on return visits.</p>
          <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.88 }}>
            &ldquo;{v.pipWelcome}&rdquo;
          </p>
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
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>The Rooms</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmNotes.rooms}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Returning After 2 Days</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmNotes.returning}</p>
              </div>

            </div>
          )}
        </div>

        {/* Back */}
        <div className="mt-14 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/main-street-intersection/the-alley" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Back to the Alley
          </a>
        </div>
      </div>
    </main>
  );
}
