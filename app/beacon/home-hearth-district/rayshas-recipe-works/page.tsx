"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { rayshasRecipeWorks } from "@/data/rayshas-recipe-works";

function ItemCard({ name, cost, description }: { name: string; cost: string; description: string }) {
  return (
    <div className="px-5 py-4" style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.03)" }}>
      <div className="flex items-start justify-between gap-4 mb-1">
        <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{name}</p>
        <p className="text-sm shrink-0" style={{ color: "var(--gold)", opacity: 0.8 }}>{cost}</p>
      </div>
      <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.7 }}>{description}</p>
    </div>
  );
}

export default function RayshasRecipeWorksPage() {
  const v = rayshasRecipeWorks;
  const [dmOpen, setDmOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "Home Hearth District", href: "/beacon/home-hearth-district" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Home Hearth District</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
          <p className="text-xs italic mt-2" style={{ color: "var(--parchment)", opacity: 0.4 }}>{v.tagline}</p>
        </div>

        {/* Signs */}
        <div className="mb-8 flex flex-col gap-2">
          {v.signs.map((sign, i) => (
            <p key={i} className="text-xs italic" style={{ color: "var(--parchment)", opacity: 0.5 }}>{sign}</p>
          ))}
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9", maxHeight: "540px" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center center" }} priority />
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

        {/* Owner */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>The Owner</h2>
          <div className="p-6" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <p className="text-lg mb-1" style={{ color: "var(--gold-light)" }}>{v.owner.name}</p>
            <p className="text-xs mb-3" style={{ color: "var(--parchment)", opacity: 0.5 }}>{v.owner.race}</p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.8 }}>{v.owner.appearance}</p>
            <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.7 }}>{v.owner.personality}</p>
          </div>

          <button
            onClick={() => setDmOpen(!dmOpen)}
            className="dm-private w-full text-left px-5 py-3 flex items-center justify-between mt-2"
            style={{ border: "none", cursor: "pointer" }}
          >
            <span className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM — {v.owner.name}</span>
            <span style={{ color: "#e88080", fontSize: "1.1rem" }}>{dmOpen ? "▲" : "▼"}</span>
          </button>
          {dmOpen && (
            <div className="dm-private p-6" style={{ borderTop: "none" }}>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>The Goggles</p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.owner.dmPrivate.theGoggles}</p>
              <p className="text-xs uppercase tracking-widest mb-2 mt-4" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>What She Knows</p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.owner.dmPrivate.whatSheKnows}</p>
              <p className="text-xs uppercase tracking-widest mb-2 mt-4" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>Quest Hook</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.owner.dmPrivate.questHook}</p>
            </div>
          )}
        </div>

        <div className="gold-divider" />

        {/* Inventory */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Inventory</h2>

          <h3 className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.15em" }}>Dried Herbs</h3>
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {v.inventory.driedHerbs.map((item, i) => <ItemCard key={i} {...item} />)}
          </div>

          <h3 className="text-xs uppercase tracking-widest mb-3 mt-6" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.15em" }}>Oils</h3>
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {v.inventory.oils.map((item, i) => <ItemCard key={i} {...item} />)}
          </div>

          <h3 className="text-xs uppercase tracking-widest mb-3 mt-6" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.15em" }}>Raw Components</h3>
          <div className="grid md:grid-cols-2 gap-3 mb-6">
            {v.inventory.rawComponents.map((item, i) => <ItemCard key={i} {...item} />)}
          </div>

          <h3 className="text-xs uppercase tracking-widest mb-3 mt-6" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.15em" }}>Essences</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {v.inventory.essences.map((item, i) => <ItemCard key={i} {...item} />)}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/home-hearth-district" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Home Hearth District
          </a>
        </div>
      </div>
    </main>
  );
}
