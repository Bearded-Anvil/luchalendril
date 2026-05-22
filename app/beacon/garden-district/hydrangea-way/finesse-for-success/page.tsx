"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { finesseForSuccess } from "@/data/finesse-for-success";

type InventoryItem = typeof finesseForSuccess.inventory[0];

function ItemCard({ item }: { item: InventoryItem }) {
  return (
    <div className="px-5 py-4" style={{
      background: "rgba(201,168,76,0.04)",
      border: "1px solid rgba(201,168,76,0.2)",
    }}>
      <div className="flex items-start justify-between gap-4 mb-2">
        <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{item.name}</p>
        <div className="flex flex-col items-end gap-1">
          <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--gold)" }}>{item.price}</p>
          <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.35 }}>{item.stock}</p>
        </div>
      </div>
      <p className="text-xs italic mb-2" style={{ color: "var(--parchment)", opacity: 0.55 }}>{item.description}</p>
      <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.8 }}>
        <span style={{ color: "var(--gold)", opacity: 0.6 }}>Effect — </span>{item.effect}
      </p>
      {item.dmNote && (
        <p className="text-xs leading-relaxed mt-2" style={{ color: "#e88080", opacity: 0.65 }}>
          <span style={{ opacity: 0.8 }}>DM — </span>{item.dmNote}
        </p>
      )}
    </div>
  );
}

export default function FinesseForSuccessPage() {
  const [dmOpen, setDmOpen] = useState(false);
  const v = finesseForSuccess;

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "Garden District", href: "/beacon/garden-district" },
            { label: "Hydrangea Way", href: "/beacon/garden-district/hydrangea-way" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Hydrangea Way — Garden District</p>
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

        {/* Signs */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Signs</h2>
          <div className="space-y-3">
            {v.signs.map((sign, i) => (
              <div key={i} className="px-5 py-3 text-center" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.18)" }}>
                <p className="text-sm italic" style={{ color: "var(--parchment)", opacity: 0.7 }}>{sign}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="gold-divider" />

        {/* Owner */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Owner</h2>
          <div className="px-6 py-5" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.25)" }}>
            <div className="flex items-baseline gap-3 mb-2">
              <p className="text-lg font-bold" style={{ color: "var(--gold-light)" }}>{v.owner.name}</p>
              <p className="text-xs" style={{ color: "var(--gold)", opacity: 0.5 }}>{v.owner.race}</p>
            </div>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.8 }}>{v.owner.appearance}</p>
            <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.6 }}>{v.owner.personality}</p>
          </div>
        </div>

        <div className="gold-divider" />

        {/* Inventory */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Inventory</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>Each piece is one of a kind.</p>
          <div className="space-y-3">
            {v.inventory.map((item, i) => (
              <ItemCard key={i} item={item} />
            ))}
          </div>
        </div>

        <div className="gold-divider" />

        {/* DM Toggle */}
        <div className="mt-8 mb-10">
          <button
            onClick={() => setDmOpen(!dmOpen)}
            className="text-xs uppercase tracking-widest mb-4 flex items-center gap-2"
            style={{ color: "#e88080", letterSpacing: "0.2em", background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <span>{dmOpen ? "▼" : "▶"}</span>
            <span>DM Private</span>
          </button>

          {dmOpen && (
            <div className="px-6 py-5 space-y-5" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.25)" }}>

              {/* Fears */}
              <div>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>What He Carries</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>{v.owner.dmPrivate.fears}</p>
              </div>

              {/* Goals */}
              <div>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>What He Wants</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>{v.owner.dmPrivate.goals}</p>
              </div>

              {/* Hook Note */}
              <div>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>Hook Note</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>{v.owner.dmPrivate.hookNote}</p>
              </div>

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/garden-district/hydrangea-way" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Back to Hydrangea Way
          </a>
        </div>
      </div>
    </main>
  );
}
