"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { theCallousedHand } from "@/data/the-calloused-hand";

function InventorySection({ title, subtitle, items }: {
  title: string;
  subtitle?: string;
  items: { name: string; description: string; price: string }[];
}) {
  return (
    <div className="mt-8">
      <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>{title}</h2>
      {subtitle && (
        <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.45 }}>{subtitle}</p>
      )}
      {!subtitle && <div className="mb-6" />}
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="px-5 py-3 flex items-start justify-between gap-4" style={{
            background: i % 2 === 0 ? "rgba(201,168,76,0.03)" : "transparent",
            border: "1px solid rgba(201,168,76,0.1)",
          }}>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold mb-0.5" style={{ color: "var(--gold-light)" }}>{item.name}</p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.6 }}>{item.description}</p>
            </div>
            <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--gold)", minWidth: "4rem", textAlign: "right" }}>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TheCallousedHandPage() {
  const v = theCallousedHand;
  const [dmOpen, setDmOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "South Main Street", href: "/beacon/south-main-street" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>South Main Street</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
          <p className="text-sm italic mt-1" style={{ color: "var(--parchment)", opacity: 0.5 }}>{v.tagline}</p>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "4/3", maxHeight: "520px" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        </div>

        <div className="gold-divider" />

        {/* Scene Description */}
        <div className="mt-8 mb-6">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
          <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.88 }}>
            &ldquo;{v.sceneDescription}&rdquo;
          </p>
        </div>

        {/* Merchant */}
        <div className="mb-10 p-6" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
          <p className="text-base font-bold mb-1" style={{ color: "var(--gold-light)" }}>{v.owner.name}</p>
          <p className="text-xs mb-4" style={{ color: "var(--parchment)", opacity: 0.5 }}>{v.owner.race} — {v.owner.age}</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.owner.appearance}</p>
        </div>

        <div className="gold-divider" />

        <InventorySection
          title="Artisan Tools"
          subtitle="Every trade represented. Every kit complete."
          items={v.artisanTools}
        />

        <div className="gold-divider mt-10" />

        <InventorySection
          title="Specialist & Utility Kits"
          subtitle="For work that doesn't always get talked about openly."
          items={v.specialistKits}
        />

        <div className="gold-divider mt-10" />

        <InventorySection
          title="General Trade Goods"
          subtitle="The small things that hold everything else together."
          items={v.tradeGoods}
        />

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
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Fears</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.fears}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Goals</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.goals}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080" }}>Quest Hook</h4>
                {v.dmPrivate.questHooks.map((hook, i) => (
                  <div key={i}>
                    <p className="text-sm font-bold mb-2" style={{ color: "var(--gold-light)" }}>{hook.title}</p>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.9 }}>{hook.description}</p>
                    <p className="text-xs italic" style={{ color: "#e88080", opacity: 0.8 }}>{hook.dmNote}</p>
                  </div>
                ))}
              </div>

            </div>
          )}
        </div>

        {/* Back link */}
        <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/south-main-street" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Back to South Main Street
          </a>
        </div>
      </div>
    </main>
  );
}
