"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { pineLoftStables } from "@/data/pine-loft-stables";

export default function PineLoftStablesPage() {
  const v = pineLoftStables;
  const [dmOpen, setDmOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Pine Loft", href: "/pine-loft" },
            { label: "Pine Loft North", href: "/pine-loft/north" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Pine Loft North</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image src={v.imageLarge} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        </div>

        <div className="gold-divider" />

        {/* Scene Description */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.88, fontStyle: "italic" }}>
            &ldquo;{v.sceneDescription}&rdquo;
          </p>
        </div>

        <div className="gold-divider" />

        {/* Stable Rules */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Stable Rules</h2>
          <div className="p-6" style={{ background: "rgba(201,168,76,0.03)", border: "1px solid rgba(201,168,76,0.15)" }}>
            <ol className="space-y-2">
              {v.stableRules.map((rule, i) => (
                <li key={i} className="text-sm flex gap-3" style={{ color: "var(--parchment)", opacity: 0.8 }}>
                  <span style={{ color: "var(--gold)", opacity: 0.6, minWidth: "1.2rem" }}>{i + 1}.</span>
                  {rule}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="gold-divider" />

        {/* Stable Hand */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>The Stable Hand</h2>
          <div className="p-6" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <p className="text-base font-bold mb-1" style={{ color: "var(--gold-light)" }}>{v.owner.name}</p>
            <p className="text-xs mb-4" style={{ color: "var(--parchment)", opacity: 0.55 }}>
              {v.owner.race} &mdash; Age {v.owner.age} &mdash; <span style={{ opacity: 0.7 }}>Managed by the Town of Pine Loft</span>
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.owner.appearance}</p>
          </div>
        </div>

        {/* DM Notes */}
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
            <div className="p-6 space-y-5" style={{ background: "rgba(139,26,26,0.06)", border: "1px solid rgba(139,26,26,0.3)", borderTop: "none" }}>
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Personality</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.personality}</p>
              </div>
              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Desires</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.desires}</p>
              </div>
              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Fears</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.fears}</p>
              </div>
              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Quest Hooks</h4>
                {v.dmPrivate.questHooks.map((hook, i) => (
                  <div key={i} className="mb-4">
                    <p className="text-sm font-bold mb-1" style={{ color: "#e8c97a" }}>{hook.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{hook.description}</p>
                  </div>
                ))}
              </div>
              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080" }}>Off the Books</h4>
                {v.dmPrivate.secretItems.map((item, i) => (
                  <div key={i} className="mb-4 pl-4" style={{ borderLeft: "2px solid rgba(139,26,26,0.4)" }}>
                    <p className="text-sm font-bold" style={{ color: "#e8c97a" }}>{item.name} <span style={{ color: "#e88080" }}>— {item.price}</span></p>
                    <p className="text-sm mt-1" style={{ color: "var(--parchment)", opacity: 0.85 }}>{item.description}</p>
                    <p className="text-xs mt-1 italic" style={{ color: "var(--parchment)", opacity: 0.55 }}>{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="gold-divider mt-10" />

        {/* Services */}
        <div className="mt-8">
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Services &amp; Rates</h2>
          <div className="space-y-3">
            {v.services.map((item, i) => (
              <div
                key={i}
                className="px-5 py-4"
                style={{
                  background: i % 2 === 0 ? "rgba(201,168,76,0.03)" : "transparent",
                  border: "1px solid rgba(201,168,76,0.12)",
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-1">
                  <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{item.name}</p>
                  <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--gold)" }}>{item.price}</p>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.7 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back link */}
        <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/pine-loft/north" className="text-sm" style={{ color: "var(--gold)", textDecoration: "none", opacity: 0.7 }}>
            ← Pine Loft North
          </a>
        </div>
      </div>
    </main>
  );
}
