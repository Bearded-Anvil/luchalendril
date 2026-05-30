"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { shipwreckTavern } from "@/data/shipwreck-tavern";

export default function ShipwreckTavernPage() {
  const v = shipwreckTavern;
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
          <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.88 }}>
            &ldquo;{v.sceneDescription}&rdquo;
          </p>
        </div>

        {/* Staff */}
        <div className="mb-10 p-6" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
          <p className="text-base font-bold mb-1" style={{ color: "var(--gold-light)" }}>{v.staff.name}</p>
          <p className="text-xs mb-1" style={{ color: "var(--parchment)", opacity: 0.5 }}>{v.staff.race}, {v.staff.age}</p>
          <p className="text-xs mb-4 italic" style={{ color: "var(--gold)", opacity: 0.5 }}>{v.staff.role}</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.staff.appearance}</p>
        </div>

        <div className="gold-divider" />

        {/* Tonight's Events */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Tonight at the Shipwreck</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>A chalkboard near the door lists the evening&rsquo;s events.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {v.tonight.map((event, i) => (
              <div key={i} className="px-5 py-4" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.18)" }}>
                <p className="text-sm font-bold mb-1" style={{ color: "var(--gold-light)" }}>{event.name}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.65 }}>{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="gold-divider" />

        {/* Menu */}
        <div className="mt-8">
          <h2 className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Drinks</h2>
          <p className="text-xs italic mb-8" style={{ color: "var(--parchment)", opacity: 0.4 }}>Food is available. Ask Tinya what&rsquo;s on the spit tonight.</p>

          {/* Featured — Stoutmug Ale */}
          <div className="mb-8 px-5 py-5" style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.4)" }}>
            <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
              <div>
                <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{v.menu.featured.name}</p>
                <p className="text-xs mt-0.5 italic" style={{ color: "var(--gold)", opacity: 0.55 }}>{v.menu.featured.source}</p>
              </div>
              <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--gold)" }}>{v.menu.featured.cost}</p>
            </div>
            <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.75 }}>{v.menu.featured.note}</p>
            <p className="text-xs italic" style={{ color: "var(--gold)", opacity: 0.6 }}>{v.menu.featured.mugPerk}</p>
          </div>

          {/* Two column: Non-Alcoholic | Ales */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Non-Alcoholic */}
            <div>
              <h3 className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.18em" }}>Non-Alcoholic</h3>
              <div className="space-y-2">
                {v.menu.nonAlcoholic.map((item, i) => (
                  <div key={i} className="flex items-start justify-between gap-4 py-3 px-4" style={{
                    background: i % 2 === 0 ? "rgba(201,168,76,0.03)" : "transparent",
                    border: "1px solid rgba(201,168,76,0.1)",
                  }}>
                    <div>
                      <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{item.name}</p>
                      <p className="text-xs mt-0.5 italic" style={{ color: "var(--parchment)", opacity: 0.5 }}>{item.note}</p>
                    </div>
                    <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--gold)" }}>{item.cost}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ales & Beers */}
            <div>
              <h3 className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.18em" }}>Ales &amp; Beers</h3>
              <div className="space-y-2">
                {v.menu.ales.map((item, i) => (
                  <div key={i} className="flex items-start justify-between gap-4 py-3 px-4" style={{
                    background: i % 2 === 0 ? "rgba(201,168,76,0.03)" : "transparent",
                    border: "1px solid rgba(201,168,76,0.1)",
                  }}>
                    <div>
                      <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{item.name}</p>
                      <p className="text-xs mt-0.5 italic" style={{ color: "var(--parchment)", opacity: 0.5 }}>{item.note}</p>
                    </div>
                    <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--gold)" }}>{item.cost}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* DM Private Panel */}
        <div className="mt-12">
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
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Fears — Tinya Bowsithe</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.tinyaFears}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Goals</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.tinyaGoals}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Note — Garren &amp; the Brewery</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.garrenConnection}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div className="p-4" style={{ background: "rgba(139,26,26,0.12)", border: "1px solid rgba(139,26,26,0.3)" }}>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.7 }}>Quest Thread — Garren &amp; Tinya</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.dmPrivate.questThread}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Stoutmug Ale — Full Effect</h4>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.menu.featured.effect}</p>
                <p className="text-xs italic" style={{ color: "var(--parchment)", opacity: 0.55 }}>{v.menu.featured.dmNote}</p>
              </div>

            </div>
          )}
        </div>

        {/* Back */}
        <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/central-bowl-street" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Central Bowl Street
          </a>
        </div>
      </div>
    </main>
  );
}
