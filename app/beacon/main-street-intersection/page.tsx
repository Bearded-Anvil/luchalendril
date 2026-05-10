"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { mainStreetIntersection } from "@/data/main-street-intersection";

export default function MainStreetIntersectionPage() {
  const v = mainStreetIntersection;
  const [boyOpen, setBoyOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Beacon</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
        </div>

        <div className="gold-divider" />

        {/* Scene + DM Notes */}
        <div className="grid md:grid-cols-2 gap-10 mt-8">
          <div>
            <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
            <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.88 }}>
              &ldquo;{v.description}&rdquo;
            </p>
          </div>
          <div className="p-6" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.3)" }}>
            <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM Notes</h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.8 }}>{v.dmNotes}</p>
          </div>
        </div>

        {/* The Boy */}
        <div className="mt-10">
          <div className="gold-divider" />
          <div className="mt-8">
            <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
            <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.88 }}>
              &ldquo;{v.theboy.description}&rdquo;
            </p>
          </div>
        </div>

        {/* Navigation Choices */}
        <div className="mt-14">
          <div className="gold-divider" />
          <h2 className="text-xs uppercase tracking-widest mt-8 mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>What do you do?</h2>

          <div className="grid md:grid-cols-2 gap-4">

            {/* Left — Docks */}
            <div className="px-6 py-5" style={{ border: "1px solid rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.02)" }}>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.3, letterSpacing: "0.15em" }}>Head Left</p>
              <p className="text-base" style={{ color: "var(--parchment)", opacity: 0.25 }}>Towards the Docks</p>
              <p className="text-xs italic mt-2" style={{ color: "var(--parchment)", opacity: 0.2 }}>Coming soon</p>
            </div>

            {/* Right — Temple */}
            <div className="px-6 py-5" style={{ border: "1px solid rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.02)" }}>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.3, letterSpacing: "0.15em" }}>Head Right</p>
              <p className="text-base" style={{ color: "var(--parchment)", opacity: 0.25 }}>Towards Braver&apos;s Temple</p>
              <p className="text-xs italic mt-2" style={{ color: "var(--parchment)", opacity: 0.2 }}>Coming soon</p>
            </div>

            {/* South Main Street */}
            <a href="/beacon/south-main-street" className="px-6 py-5 block transition-all duration-200 hover:bg-[rgba(201,168,76,0.06)]" style={{ border: "1px solid rgba(201,168,76,0.3)", background: "rgba(201,168,76,0.03)", textDecoration: "none" }}>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.7, letterSpacing: "0.15em" }}>Head South</p>
              <p className="text-base font-bold" style={{ color: "var(--gold-light)" }}>← South Main Street</p>
              <p className="text-xs italic mt-2" style={{ color: "var(--parchment)", opacity: 0.4 }}>Back the way you came</p>
            </a>

            {/* Enter Hibernations */}
            <a href="/beacon/main-street-intersection/hibernations" className="px-6 py-5 block transition-all duration-200 hover:bg-[rgba(201,168,76,0.06)]" style={{ border: "1px solid rgba(201,168,76,0.3)", background: "rgba(201,168,76,0.03)", textDecoration: "none" }}>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.7, letterSpacing: "0.15em" }}>Step Inside</p>
              <p className="text-base font-bold" style={{ color: "var(--gold-light)" }}>Enter Hibernations →</p>
              <p className="text-xs italic mt-2" style={{ color: "var(--parchment)", opacity: 0.4 }}>Inn &amp; Eatery</p>
            </a>

            {/* Speak to the Boy */}
            <button
              onClick={() => setBoyOpen(!boyOpen)}
              className="px-6 py-5 text-left w-full transition-all duration-200"
              style={{
                border: boyOpen ? "1px solid rgba(201,168,76,0.4)" : "1px solid rgba(201,168,76,0.25)",
                background: boyOpen ? "rgba(201,168,76,0.07)" : "rgba(201,168,76,0.03)",
                cursor: "pointer",
              }}
            >
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.7, letterSpacing: "0.15em" }}>Approach</p>
              <p className="text-base font-bold" style={{ color: "var(--gold-light)" }}>
                {boyOpen ? "▲ Speaking to the boy…" : "Speak to the Boy on the Barrel ▼"}
              </p>
            </button>

          </div>

          {/* Boy Expanded */}
          {boyOpen && (
            <div className="mt-0 p-6 space-y-5" style={{
              background: "rgba(201,168,76,0.04)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderTop: "none",
            }}>
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>The Boy Speaks</h4>
                <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.88 }}>
                  &ldquo;{v.theboy.dmNote}&rdquo;
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Back */}
        <div className="mt-14 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/south-main-street" className="text-sm" style={{ color: "var(--gold)", textDecoration: "none", opacity: 0.7 }}>
            ← Back to South Main Street
          </a>
        </div>
      </div>
    </main>
  );
}
