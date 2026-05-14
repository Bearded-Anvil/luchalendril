"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { hibernations } from "@/data/hibernations";

export default function HibernationsPage() {
  const v = hibernations;
  const [dmOpen, setDmOpen] = useState(false);

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
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Beacon</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
          <p className="text-sm italic mt-1" style={{ color: "var(--parchment)", opacity: 0.5 }}>{v.tagline}</p>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
        </div>

        <div className="gold-divider" />

        {/* Scene Description */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
          <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.88 }}>
            &ldquo;{v.sceneDescription}&rdquo;
          </p>
        </div>

        <div className="gold-divider" />

        {/* Owner */}
        <div className="mt-8 mb-6">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Innkeeper</h2>
          <div className="p-6" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <p className="text-base font-bold mb-1" style={{ color: "var(--gold-light)" }}>{v.owner.name}</p>
            <p className="text-xs mb-4" style={{ color: "var(--parchment)", opacity: 0.5 }}>{v.owner.race} — {v.owner.age}</p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.owner.appearance}</p>
            <p className="text-xs italic" style={{ color: "var(--parchment)", opacity: 0.5 }}>{v.owner.quirk}</p>
          </div>
        </div>

        {/* Staff */}
        <div className="mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Staff</h2>
          {v.staff.map((s, i) => (
            <div key={i} className="p-6" style={{ background: "rgba(201,168,76,0.03)", border: "1px solid rgba(201,168,76,0.15)" }}>
              <p className="text-base font-bold mb-1" style={{ color: "var(--gold-light)" }}>{s.name}</p>
              <p className="text-xs mb-4" style={{ color: "var(--parchment)", opacity: 0.4 }}>{s.role}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{s.description}</p>
            </div>
          ))}
        </div>

        <div className="gold-divider" />

        {/* Food & Drink */}
        <div className="mt-8">
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Food & Drink</h2>
          <div className="space-y-2">
            {v.food.map((item, i) => (
              <div key={i} className="px-5 py-4" style={{
                background: i % 2 === 0 ? "rgba(201,168,76,0.03)" : "transparent",
                border: "1px solid rgba(201,168,76,0.1)",
              }}>
                <div className="flex items-start justify-between gap-4 mb-1">
                  <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{item.name}</p>
                  <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--gold)", minWidth: "4rem", textAlign: "right" }}>{item.price}</p>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.6 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="gold-divider mt-10" />

        {/* Rooms */}
        <div className="mt-8">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Lodging</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>
            16 rooms total — 6 on the ground floor, 10 above.
          </p>
          <div className="space-y-4">
            {v.rooms.map((room, i) => (
              <div key={i} className="px-5 py-5" style={{
                background: "rgba(201,168,76,0.03)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{room.name}</p>
                  <div className="text-right">
                    <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--gold)" }}>{room.price}</p>
                    <p className="text-xs whitespace-nowrap" style={{ color: "var(--parchment)", opacity: 0.4 }}>{room.weekly}</p>
                  </div>
                </div>
                <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--parchment)", opacity: 0.7 }}>{room.description}</p>
                <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.35 }}>{room.floors}</p>
                {"note" in room && room.note && (
                  <p className="text-xs italic mt-2" style={{ color: "var(--gold)", opacity: 0.5 }}>{room.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* DM Private Panel */}
        <div className="mt-10">
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
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Goals</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.goals}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080" }}>Quest Hook</h4>
                <p className="text-sm font-bold mb-2" style={{ color: "var(--gold-light)" }}>{v.dmPrivate.questHook.title}</p>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.questHook.description}</p>
                <p className="text-xs italic" style={{ color: "#e88080", opacity: 0.8 }}>{v.dmPrivate.questHook.dmNote}</p>
              </div>

            </div>
          )}
        </div>

        {/* Back */}
        <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/main-street-intersection" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Back to Main Street Intersection
          </a>
        </div>
      </div>
    </main>
  );
}
