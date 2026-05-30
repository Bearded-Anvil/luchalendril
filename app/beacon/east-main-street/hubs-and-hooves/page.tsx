"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { hubsAndHooves } from "@/data/hubs-and-hooves";

export default function HubsAndHoovesPage() {
  const v = hubsAndHooves;
  const [dmOpen, setDmOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "East Main Street", href: "/beacon/east-main-street" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>East Main Street</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
          <p className="text-xs italic mt-2" style={{ color: "var(--parchment)", opacity: 0.4 }}>{v.subtitle}</p>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9", maxHeight: "540px" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
        </div>

        <div className="gold-divider" />

        {/* Scene Description */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
          {v.sceneDescription.split("\n\n").map((paragraph, i, arr) => (
            <p key={i} className="text-sm leading-relaxed italic mb-4" style={{ color: "var(--parchment)", opacity: 0.88 }}>
              {i === 0 ? <>&ldquo;{paragraph}</> : paragraph}
              {i === arr.length - 1 ? <>&rdquo;</> : ""}
            </p>
          ))}
          <div className="mt-4 px-5 py-3 inline-block" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <p className="text-xs italic" style={{ color: "var(--parchment)", opacity: 0.55 }}>{v.sign}</p>
          </div>
        </div>

        <div className="gold-divider" />

        {/* Clerk */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Behind the Counter</h2>
          <div className="px-6 py-5 mb-4" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.25)" }}>
            <div className="flex items-baseline gap-3 mb-2">
              <p className="text-lg font-bold" style={{ color: "var(--gold-light)" }}>{v.clerk.name}</p>
              <p className="text-xs" style={{ color: "var(--gold)", opacity: 0.5 }}>{v.clerk.race} · {v.clerk.age}</p>
            </div>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.8 }}>{v.clerk.appearance}</p>
            <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.6 }}>{v.clerk.personality}</p>
          </div>
        </div>

        <div className="gold-divider" />

        {/* Stable Boy */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>In the Stables</h2>
          <div className="px-6 py-5" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.25)" }}>
            <div className="flex items-baseline gap-3 mb-2">
              <p className="text-lg font-bold" style={{ color: "var(--gold-light)" }}>{v.stableBoy.name}</p>
              <p className="text-xs" style={{ color: "var(--gold)", opacity: 0.5 }}>{v.stableBoy.race} · Age {v.stableBoy.age} · {v.stableBoy.relation}</p>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.8 }}>{v.stableBoy.appearance}</p>
          </div>
        </div>

        <div className="gold-divider" />

        {/* DM Panel */}
        <div className="mt-8 mb-6">
          <button
            onClick={() => setDmOpen(!dmOpen)}
            className="w-full flex items-center justify-between px-6 py-4"
            style={{ background: "rgba(139,26,26,0.1)", border: "1px solid rgba(139,26,26,0.35)", cursor: "pointer" }}
          >
            <span className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM Notes</span>
            <span style={{ color: "#e88080", fontSize: "1rem" }}>{dmOpen ? "▲" : "▼"}</span>
          </button>

          {dmOpen && (
            <div className="dm-private p-6 space-y-6" style={{ borderTop: "none" }}>
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", letterSpacing: "0.15em" }}>Missy — Running This Location</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.clerk.dmNote}</p>
              </div>
              <div style={{ borderTop: "1px solid rgba(139,26,26,0.25)" }} />
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", letterSpacing: "0.15em" }}>Bedrick — Fears</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.stableBoy.dmPrivate.fears}</p>
              </div>
              <div style={{ borderTop: "1px solid rgba(139,26,26,0.25)" }} />
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", letterSpacing: "0.15em" }}>Bedrick — Goals</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.stableBoy.dmPrivate.goals}</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/east-main-street" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← East Main Street
          </a>
        </div>
      </div>
    </main>
  );
}
