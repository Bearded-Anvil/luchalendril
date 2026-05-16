"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { lighthouseInn } from "@/data/lighthouse-inn";

export default function LighthouseInnPage() {
  const v = lighthouseInn;
  const [dmOpen, setDmOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "Central Bowl Street", href: "/beacon/central-bowl-street" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Central Bowl Street — Beacon</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
          <p className="text-sm italic mt-2" style={{ color: "var(--parchment)", opacity: 0.45 }}>{v.tagline}</p>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9", maxHeight: "540px" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
        </div>

        <div className="gold-divider" />

        {/* Scene Description */}
        <div className="mt-8 mb-8">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
          {v.sceneDescription.split("\n\n").map((paragraph, i, arr) => (
            <p key={i} className="text-sm leading-relaxed italic mb-4" style={{ color: "var(--parchment)", opacity: 0.88 }}>
              {i === 0 ? <>&ldquo;{paragraph}</> : paragraph}
              {i === arr.length - 1 ? <>&rdquo;</> : ""}
            </p>
          ))}
        </div>

        {/* Owner */}
        <div className="mb-10 p-6" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
          <p className="text-base font-bold mb-1" style={{ color: "var(--gold-light)" }}>{v.owner.name}</p>
          <p className="text-xs mb-4" style={{ color: "var(--parchment)", opacity: 0.5 }}>{v.owner.race}</p>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.owner.appearance}</p>
          <p className="text-xs italic" style={{ color: "var(--gold)", opacity: 0.5 }}>{v.owner.note}</p>
        </div>

        <div className="gold-divider" />

        {/* Rooms */}
        <div className="mt-8">
          <h2 className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Rooms</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>{v.longStays}</p>

          <div className="space-y-4 mb-10">
            {v.rooms.map((room, i) => {
              const isSuite = room.tier === "suite";
              return (
                <div key={i} className="px-5 py-5" style={{
                  background: isSuite ? "rgba(201,168,76,0.07)" : i % 2 === 0 ? "rgba(201,168,76,0.03)" : "transparent",
                  border: isSuite ? "1px solid rgba(201,168,76,0.4)" : "1px solid rgba(201,168,76,0.14)",
                }}>
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                    <div className="flex items-center gap-3">
                      <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{room.name}</p>
                      {isSuite && (
                        <span className="text-xs px-2 py-0.5 font-bold uppercase tracking-wider" style={{
                          background: "rgba(201,168,76,0.15)",
                          border: "1px solid rgba(201,168,76,0.4)",
                          color: "var(--gold)",
                          fontSize: "0.6rem",
                          letterSpacing: "0.12em",
                        }}>
                          Suite
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--gold)" }}>{room.cost}</p>
                  </div>

                  <ul className="space-y-1 mb-0">
                    {room.included.map((item, ii) => (
                      <li key={ii} className="text-xs flex items-start gap-2" style={{ color: "var(--parchment)", opacity: 0.75 }}>
                        <span style={{ color: "var(--gold)", opacity: 0.5, marginTop: "1px" }}>—</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {isSuite && (
                    <p className="text-xs italic mt-4 pt-3" style={{ color: "var(--gold)", opacity: 0.55, borderTop: "1px solid rgba(201,168,76,0.12)" }}>
                      The Roundabout Way voucher is valid at the restaurant beside Braver&rsquo;s Temple.
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* DM Private Panel */}
        <div className="mt-4">
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
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Vyncel Finrise — Goals</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.goals}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>City of Beacon — Government Property</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.cityNote}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Suite Balcony — Tactical Note</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.suiteBalcony}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div className="p-4" style={{ background: "rgba(139,26,26,0.12)", border: "1px solid rgba(139,26,26,0.3)" }}>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.7 }}>Coming Soon — Roundabout Way</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.dmPrivate.roundaboutWayNote}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              {/* Room DM Details */}
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-4" style={{ color: "#e88080" }}>Room Details</h4>
                <div className="space-y-4">
                  {v.rooms.map((room, i) => (
                    <div key={i}>
                      <p className="text-xs font-bold mb-1" style={{ color: "var(--gold-light)" }}>{room.name}</p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{room.dmNote}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Back */}
        <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/central-bowl-street" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Back to Central Bowl Street
          </a>
        </div>
      </div>
    </main>
  );
}
