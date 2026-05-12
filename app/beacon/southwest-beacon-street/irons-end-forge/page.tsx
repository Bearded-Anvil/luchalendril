"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { ironsEndForge } from "@/data/irons-end-forge";

export default function IronsEndForgePage() {
  const v = ironsEndForge;
  const [dmOpen, setDmOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "Southwest Beacon Street", href: "/beacon/southwest-beacon-street" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Southwest Beacon Street</p>
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

        {/* Owner */}
        <div className="mb-10 p-6" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
          <p className="text-base font-bold mb-1" style={{ color: "var(--gold-light)" }}>{v.owner.name}</p>
          <p className="text-xs mb-4" style={{ color: "var(--parchment)", opacity: 0.5 }}>{v.owner.race} — {v.owner.age}</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.owner.appearance}</p>
        </div>

        <div className="gold-divider" />

        {/* Services */}
        <div className="mt-8">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Services</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.45 }}>All work is custom. Bring your weapon or armor. Drogga does the rest.</p>

          <div className="space-y-3">
            {v.services.map((service, i) => (
              <div key={i} className="px-5 py-5" style={{
                background: i % 2 === 0 ? "rgba(201,168,76,0.03)" : "transparent",
                border: "1px solid rgba(201,168,76,0.12)",
              }}>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{service.name}</p>
                  <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--gold)", minWidth: "4rem", textAlign: "right" }}>{service.cost}</p>
                </div>

                <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--parchment)", opacity: 0.7 }}>{service.description}</p>

                {service.effect && (
                  <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--gold)", opacity: 0.7 }}>{service.effect}</p>
                )}

                {/* Masterwork options */}
                {"options" in service && service.options && (
                  <div className="mt-3 space-y-2">
                    <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.15em" }}>Choose One Benefit</p>
                    {service.options.map((opt, oi) => (
                      <div key={oi} className="flex items-start justify-between gap-4 px-3 py-2" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.1)" }}>
                        <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.8 }}>{opt.benefit}</p>
                        <p className="text-xs font-bold whitespace-nowrap" style={{ color: "var(--gold)", opacity: 0.8 }}>{opt.cost}</p>
                      </div>
                    ))}
                  </div>
                )}

                {service.drawback && (
                  <p className="text-xs mt-2" style={{ color: "#e88080", opacity: 0.7 }}>
                    <span className="font-bold">Drawback: </span>{service.drawback}
                  </p>
                )}

                {"note" in service && service.note && (
                  <p className="text-xs italic mt-2" style={{ color: "#e88080", opacity: 0.6 }}>{service.note}</p>
                )}

                <p className="text-xs mt-2" style={{ color: "var(--parchment)", opacity: 0.4 }}>
                  <span className="font-bold">Time: </span>{service.timeRequired}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* DM Private Panel */}
        <div className="mt-8">
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
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Note — Torgin Connection</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.note}</p>
              </div>

            </div>
          )}
        </div>

        {/* Back */}
        <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/southwest-beacon-street" className="text-sm" style={{ color: "var(--gold)", textDecoration: "none", opacity: 0.7 }}>
            ← Back to Southwest Beacon Street
          </a>
        </div>
      </div>
    </main>
  );
}
