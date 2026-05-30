"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { saidasArmsAndArmaments } from "@/data/saidas-arms-and-armaments";

type SimpleItem = { name: string; cost: string };
type MagicItem = { name: string; cost: string; note: string; description: string };

function PriceList({ label, items }: { label: string; items: SimpleItem[] }) {
  return (
    <div className="mb-6">
      <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.55, letterSpacing: "0.18em" }}>{label}</h4>
      <div className="grid grid-cols-2 gap-x-6 gap-y-1">
        {items.map((item, i) => (
          <div key={i} className="flex items-center justify-between py-1.5 px-3" style={{
            background: i % 2 === 0 ? "rgba(201,168,76,0.03)" : "transparent",
            border: "1px solid rgba(201,168,76,0.08)",
          }}>
            <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.8 }}>{item.name}</p>
            <p className="text-xs font-bold whitespace-nowrap ml-4" style={{ color: "var(--gold)", opacity: 0.85 }}>{item.cost}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MagicItemCard({ item, index }: { item: MagicItem; index: number }) {
  return (
    <div className="px-5 py-5" style={{
      background: index % 2 === 0 ? "rgba(201,168,76,0.06)" : "rgba(201,168,76,0.03)",
      border: "1px solid rgba(201,168,76,0.3)",
    }}>
      <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
        <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{item.name}</p>
        <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--gold)" }}>{item.cost}</p>
      </div>
      {item.note && (
        <p className="text-xs italic mb-2" style={{ color: "var(--gold)", opacity: 0.5 }}>{item.note}</p>
      )}
      <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.8 }}>{item.description}</p>
    </div>
  );
}

export default function SaidasArmsPage() {
  const v = saidasArmsAndArmaments;
  const [backOpen, setBackOpen] = useState(false);
  const [dmOpen, setDmOpen] = useState(false);

  const inv = v.mundaneInventory;

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "Temple Square", href: "/beacon/temple-square" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Temple Square — Beacon</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
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
          <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.owner.appearance}</p>
        </div>

        <div className="gold-divider" />

        {/* Mundane Inventory */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Inventory</h2>
          <p className="text-xs italic mb-8" style={{ color: "var(--parchment)", opacity: 0.4 }}>Practice dummies are available at the back of the shop. Test anything before you buy.</p>

          <div className="mb-2" style={{ height: "1px", background: "linear-gradient(to right, rgba(201,168,76,0.25), transparent)" }} />

          <div className="mt-6">
            <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Weapons</h3>
            <PriceList label="Simple Weapons" items={inv.simpleWeapons} />
            <PriceList label="Martial Melee Weapons" items={inv.martialMeleeWeapons} />
            <PriceList label="Simple Ranged Weapons" items={inv.simpleRangedWeapons} />
            <PriceList label="Martial Ranged Weapons" items={inv.martialRangedWeapons} />
          </div>

          <div className="mt-6 mb-2" style={{ height: "1px", background: "linear-gradient(to right, rgba(201,168,76,0.25), transparent)" }} />

          <div className="mt-6">
            <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Armor &amp; Shields</h3>
            <PriceList label="Light Armor" items={inv.lightArmor} />
            <PriceList label="Medium Armor" items={inv.mediumArmor} />
            <PriceList label="Heavy Armor" items={inv.heavyArmor} />
            <PriceList label="Shields" items={inv.shields} />
          </div>

          <div className="mt-6 mb-2" style={{ height: "1px", background: "linear-gradient(to right, rgba(201,168,76,0.25), transparent)" }} />

          <div className="mt-6">
            <PriceList label="Ammunition" items={inv.ammunition} />
          </div>
        </div>

        <div className="gold-divider" />

        {/* Back Room */}
        <div className="mt-8">
          <div className="mb-4 px-5 py-3 flex items-center justify-between" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <div>
              <p className="text-xs uppercase tracking-widest" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>The Back Room</p>
              <p className="text-xs italic mt-0.5" style={{ color: "var(--parchment)", opacity: 0.45 }}>&ldquo;{v.backRoom.sign}&rdquo;</p>
            </div>
          </div>

          <button
            onClick={() => setBackOpen(!backOpen)}
            className="w-full py-3 px-6 text-sm font-bold tracking-widest uppercase transition-all duration-200"
            style={{
              background: backOpen ? "rgba(201,168,76,0.12)" : "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.35)",
              color: "var(--gold)",
              cursor: "pointer",
              letterSpacing: "0.15em",
            }}
          >
            {backOpen ? "▲ Close Back Room" : "▼ Enter the Back Room"}
          </button>

          {backOpen && (
            <div className="p-6 space-y-8" style={{ background: "rgba(201,168,76,0.03)", border: "1px solid rgba(201,168,76,0.2)", borderTop: "none" }}>

              <div>
                <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Magic Weapons</h3>
                <div className="space-y-3">
                  {v.backRoom.magicWeapons.map((item, i) => (
                    <MagicItemCard key={i} item={item} index={i} />
                  ))}
                </div>
              </div>

              <div className="mt-2" style={{ height: "1px", background: "linear-gradient(to right, rgba(201,168,76,0.25), transparent)" }} />

              <div>
                <h3 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Magic Armor</h3>
                <div className="space-y-3">
                  {v.backRoom.magicArmor.map((item, i) => (
                    <MagicItemCard key={i} item={item} index={i} />
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>

        {/* DM Panel */}
        <div className="mt-6">
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
            <div className="dm-private p-6 mt-0" style={{ borderTop: "none" }}>
              <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>The Back Room — Saida&rsquo;s Call</h4>
              <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.backRoom.dmNote}</p>
            </div>
          )}
        </div>

        {/* Back */}
        <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/temple-square" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Temple Square
          </a>
        </div>
      </div>
    </main>
  );
}
