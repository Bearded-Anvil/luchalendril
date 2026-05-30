"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { cordunsCustomClothier } from "@/data/corduns-custom-clothier";

export default function CordunsCustomClothierPage() {
  const v = cordunsCustomClothier;
  const [dmOpen, setDmOpen] = useState(false);

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
          <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.7 }}>{v.owner.personality}</p>
        </div>

        <div className="gold-divider" />

        {/* Commission */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Commissions</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>Nothing in this store is for sale. Everything in this store is possible.</p>

          {/* Order Info */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="px-5 py-5" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.15em" }}>Turnaround</p>
              <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{v.commission.turnaround}</p>
            </div>
            <div className="px-5 py-5" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.15em" }}>Pricing</p>
              <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{v.commission.pricing}</p>
              <p className="text-xs mt-2 italic" style={{ color: "var(--parchment)", opacity: 0.55 }}>{v.commission.pricingNote}</p>
            </div>
          </div>

          {/* What Can Be Made */}
          <div className="mb-8 px-5 py-5" style={{ background: "rgba(201,168,76,0.03)", border: "1px solid rgba(201,168,76,0.14)" }}>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.15em" }}>Examples of Work</p>
            <ul className="space-y-2">
              {v.commission.whatCanBeMade.map((item, i) => (
                <li key={i} className="text-sm flex items-start gap-2" style={{ color: "var(--parchment)", opacity: 0.8 }}>
                  <span style={{ color: "var(--gold)", opacity: 0.5, marginTop: "2px" }}>—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Materials */}
          <div className="mb-6 px-5 py-5" style={{ background: "rgba(201,168,76,0.03)", border: "1px solid rgba(201,168,76,0.14)" }}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.15em" }}>Materials Available</p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>{v.commission.materials}</p>
          </div>

          {/* No Enchantments Note */}
          <div className="px-5 py-4" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-xs italic" style={{ color: "var(--parchment)", opacity: 0.4 }}>{v.commission.noEnchantments}</p>
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
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Playing Xavien</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.personalityNotes}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>The Measuring Process</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.measuringProcess}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Pricing Guidance</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.pricingGuidance}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div className="p-4" style={{ background: "rgba(139,26,26,0.12)", border: "1px solid rgba(139,26,26,0.3)" }}>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.7 }}>Note — The Wine</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.dmPrivate.wineNote}</p>
              </div>

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
