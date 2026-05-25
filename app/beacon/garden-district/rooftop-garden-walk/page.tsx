"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { rooftopGardenWalk } from "@/data/rooftop-garden-walk";

export default function RooftopGardenWalkPage() {
  const [hallwayLoaded, setHallwayLoaded] = useState(false);
  const v = rooftopGardenWalk;

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "Garden District", href: "/beacon/garden-district" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Garden District</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
          <p className="text-xs italic mt-2" style={{ color: "var(--parchment)", opacity: 0.4 }}>{v.tagline}</p>
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
        </div>

        <div className="gold-divider" />

        {/* Amphitheater View */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Above the Amphitheater</h2>
          <p className="text-xs italic mb-4" style={{ color: "var(--parchment)", opacity: 0.35 }}>Read when players reach the halfway point of the walk.</p>
          {v.amphitheaterView.split("\n\n").map((paragraph, i, arr) => (
            <p key={i} className="text-sm leading-relaxed italic mb-4" style={{ color: "var(--parchment)", opacity: 0.88 }}>
              {i === 0 ? <>&ldquo;{paragraph}</> : paragraph}
              {i === arr.length - 1 ? <>&rdquo;</> : ""}
            </p>
          ))}
        </div>

        <div className="gold-divider" />

        {/* Walk Final — The Hallway */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>End of the Walk</h2>
          <p className="text-xs italic mb-4" style={{ color: "var(--parchment)", opacity: 0.35 }}>Read when players descend from the rooftop and enter the hallway.</p>
          {v.walkFinal.description.split("\n\n").map((paragraph, i, arr) => (
            <p key={i} className="text-sm leading-relaxed italic mb-4" style={{ color: "var(--parchment)", opacity: 0.88 }}>
              {i === 0 ? <>&ldquo;{paragraph}</> : paragraph}
              {i === arr.length - 1 ? <>&rdquo;</> : ""}
            </p>
          ))}
          {/* Hallway Image */}
          <div className="relative w-full mt-6 gold-border overflow-hidden" style={{ aspectRatio: "4/3", maxHeight: "480px" }}>
            <Image
              src={v.walkFinal.image}
              alt="The Giant's Hallway"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              onError={() => setHallwayLoaded(false)}
            />
          </div>
        </div>

        <div className="gold-divider" />

        {/* DM Notes */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>DM Notes</h2>
          <div className="px-6 py-5" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.18)" }}>
            {v.dmNotes.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.75 }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="gold-divider" />

        {/* Connections */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Access Points</h2>
          <div className="space-y-3">
            {v.connections.map((conn, i) => {
              const isLive = conn.status === "live" && conn.path;
              return isLive ? (
                <a
                  key={i}
                  href={conn.path!}
                  style={{ display: "block", textDecoration: "none" }}
                >
                  <div className="px-5 py-4" style={{
                    background: "rgba(201,168,76,0.04)",
                    border: "1px solid rgba(201,168,76,0.25)",
                  }}>
                    <p className="text-sm font-bold mb-1" style={{ color: "var(--gold-light)" }}>{conn.name}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.6 }}>{conn.description}</p>
                  </div>
                </a>
              ) : (
                <div key={i} className="px-5 py-4" style={{
                  background: "rgba(201,168,76,0.02)",
                  border: "1px solid rgba(201,168,76,0.1)",
                  opacity: 0.5,
                }}>
                  <p className="text-sm font-bold mb-1" style={{ color: "var(--parchment)" }}>{conn.name}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.5 }}>{conn.description}</p>
                  <p className="text-xs mt-1" style={{ color: "var(--gold)", opacity: 0.4 }}>Coming soon</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/garden-district" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Back to Garden District
          </a>
        </div>
      </div>
    </main>
  );
}
