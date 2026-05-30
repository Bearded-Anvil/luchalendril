"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { bowlStreetGrocer } from "@/data/bowl-street-grocer";

type InventoryItem = {
  name: string;
  cost: string;
  stock: string;
  stockCount?: number;
  outOfStock?: boolean;
  description: string;
  effect: string;
  quote?: string;
};

function ItemCard({ item, index, tint }: { item: InventoryItem; index: number; tint?: "red" | "gold" }) {
  const isRed = tint === "red";
  const bg = item.outOfStock
    ? "rgba(255,255,255,0.015)"
    : isRed
    ? index % 2 === 0 ? "rgba(100,20,20,0.06)" : "transparent"
    : index % 2 === 0 ? "rgba(201,168,76,0.04)" : "transparent";
  const border = item.outOfStock
    ? "1px solid rgba(255,255,255,0.07)"
    : isRed
    ? "1px solid rgba(139,26,26,0.25)"
    : "1px solid rgba(201,168,76,0.14)";

  return (
    <div className="px-5 py-5" style={{ background: bg, border, opacity: item.outOfStock ? 0.55 : 1 }}>
      <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
        <div className="flex items-center gap-3 flex-wrap">
          <p className="text-sm font-bold" style={{ color: item.outOfStock ? "var(--parchment)" : "var(--gold-light)" }}>
            {item.name}
          </p>
          {item.outOfStock && (
            <span className="text-xs px-2 py-0.5 font-bold uppercase tracking-wider" style={{
              background: "rgba(139,26,26,0.2)",
              border: "1px solid rgba(139,26,26,0.4)",
              color: "#e88080",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
            }}>
              Out of Stock
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.35 }}>{item.stock}</p>
          <p className="text-sm font-bold whitespace-nowrap" style={{ color: item.outOfStock ? "var(--parchment)" : "var(--gold)", opacity: item.outOfStock ? 0.4 : 1 }}>{item.cost}</p>
        </div>
      </div>
      <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--parchment)", opacity: 0.7 }}>{item.description}</p>
      <p className="text-xs leading-relaxed" style={{ color: isRed ? "#e88080" : "var(--gold)", opacity: 0.85 }}>{item.effect}</p>
      {item.quote && (
        <p className="text-xs italic mt-3 pt-3" style={{ color: "var(--parchment)", opacity: 0.5, borderTop: "1px solid rgba(201,168,76,0.1)" }}>
          &ldquo;{item.quote}&rdquo; — Gretta
        </p>
      )}
    </div>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="mt-10 mb-4">
      <h3 className="text-xs uppercase tracking-widest" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>{label}</h3>
      <div className="mt-2" style={{ height: "1px", background: "linear-gradient(to right, rgba(201,168,76,0.3), transparent)" }} />
    </div>
  );
}

export default function BowlStreetGrocerPage() {
  const v = bowlStreetGrocer;
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
          {v.sceneDescription.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed italic mb-4" style={{ color: "var(--parchment)", opacity: 0.88 }}>
              {i === 0 ? <>&ldquo;{paragraph}</> : paragraph}
              {i === v.sceneDescription.split("\n\n").length - 1 ? <>&rdquo;</> : ""}
            </p>
          ))}
        </div>

        {/* Owner */}
        <div className="mb-10 p-6" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
          <p className="text-base font-bold mb-1" style={{ color: "var(--gold-light)" }}>{v.owner.name}</p>
          <p className="text-xs mb-4" style={{ color: "var(--parchment)", opacity: 0.5 }}>{v.owner.race}</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.owner.appearance}</p>
        </div>

        <div className="gold-divider" />

        {/* Inventory */}
        <div className="mt-8">
          <h2 className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Inventory</h2>
          <p className="text-xs italic mb-2" style={{ color: "var(--parchment)", opacity: 0.4 }}>Jars, bundles, pouches, and pots — the shelves run deep.</p>

          {/* Healing Herbs notice */}
          <div className="mt-6 mb-2 px-5 py-4" style={{ background: "rgba(139,26,26,0.06)", border: "1px solid rgba(139,26,26,0.2)" }}>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#e88080", letterSpacing: "0.15em" }}>Notice</p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>
              One of the herb bins near the center shelves sits conspicuously empty with a small handwritten card in it: <span className="italic">&ldquo;More coming. — G&rdquo;</span>
            </p>
          </div>

          <SectionHeader label="Herbs" />
          <div className="space-y-3 mb-2">
            {v.herbs.map((item, i) => (
              <ItemCard key={i} item={item} index={i} />
            ))}
          </div>

          <SectionHeader label="Soups — Powdered Mixes" />
          <p className="text-xs italic mb-4" style={{ color: "var(--parchment)", opacity: 0.4 }}>Just add water. One jar feeds four.</p>
          <div className="space-y-3 mb-2">
            {v.soups.map((item, i) => (
              <ItemCard key={i} item={item} index={i} />
            ))}
          </div>

          <SectionHeader label="Incense" />
          <p className="text-xs italic mb-4" style={{ color: "var(--parchment)", opacity: 0.4 }}>Burn during a long or short rest unless otherwise noted.</p>
          <div className="space-y-3 mb-2">
            {v.incense.map((item, i) => (
              <ItemCard key={i} item={item} index={i} />
            ))}
          </div>

          <SectionHeader label="Magic Items" />
          <div className="space-y-3 mb-10">
            {v.magicItems.map((item, i) => (
              <ItemCard key={i} item={item} index={i} tint="gold" />
            ))}
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
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Fears — Gretta Haymuck</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.fears}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Goals</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.goals}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Quest Hook — Business Dealings</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.questHook1}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Quest Hook — Healing Herbs</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.questHook2}</p>
              </div>

              <div className="p-4" style={{ background: "rgba(139,26,26,0.12)", border: "1px solid rgba(139,26,26,0.3)" }}>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.7 }}>DM Note — Whispershade Woods</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.dmPrivate.questNote}</p>
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
