"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { theDrunkenGiant } from "@/data/the-drunken-giant";

function MenuSection({ label, note, food, drinks }: {
  label: string;
  note: string;
  food: { name: string; price: string; description: string }[];
  drinks: { name: string; price: string; description: string }[];
}) {
  return (
    <div>
      <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.45 }}>{note}</p>
      <div className="space-y-3 mb-8">
        <p className="text-xs uppercase tracking-widest pb-2" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.18em", borderBottom: "1px solid rgba(201,168,76,0.12)" }}>Food</p>
        {food.map((item, i) => (
          <div key={i} className="px-5 py-4" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <div className="flex items-start justify-between gap-4 mb-1">
              <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{item.name}</p>
              <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--gold)" }}>{item.price}</p>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.6 }}>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-widest pb-2" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.18em", borderBottom: "1px solid rgba(201,168,76,0.12)" }}>Drinks</p>
        {drinks.map((item, i) => (
          <div key={i} className="px-5 py-4" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <div className="flex items-start justify-between gap-4 mb-1">
              <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{item.name}</p>
              <p className="text-sm font-bold whitespace-nowrap text-right" style={{ color: "var(--gold)" }}>{item.price}</p>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.6 }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TheDrunkenGiantPage() {
  const [dmOpen, setDmOpen] = useState(false);
  const [menuTab, setMenuTab] = useState<"tavern" | "dining">("tavern");
  const v = theDrunkenGiant;

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "Garden District", href: "/beacon/garden-district" },
            { label: "Rose Vine View", href: "/beacon/garden-district/rose-vine-view" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Rose Vine View — Garden District</p>
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
          {v.sceneDescription.split("\n\n").map((paragraph, i, arr) => {
            const isSign = paragraph === "Two Doors. Two Experiences. One Unforgettable Evening.";
            if (isSign) {
              return (
                <div key={i} className="my-5 px-8 py-4 text-center" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.25)" }}>
                  <p className="text-sm italic" style={{ color: "var(--parchment)", opacity: 0.8 }}>{paragraph}</p>
                </div>
              );
            }
            return (
              <p key={i} className="text-sm leading-relaxed italic mb-4" style={{ color: "var(--parchment)", opacity: 0.88 }}>
                {i === 0 ? <>&ldquo;{paragraph}</> : paragraph}
                {i === arr.length - 1 ? <>&rdquo;</> : ""}
              </p>
            );
          })}
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

        {/* Menu */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Menu</h2>

          {/* Tab Toggle */}
          <div className="flex gap-3 mb-8">
            <button
              onClick={() => setMenuTab("tavern")}
              style={{
                padding: "0.45rem 1.2rem",
                fontSize: "0.75rem",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                border: menuTab === "tavern" ? "1px solid rgba(201,168,76,0.6)" : "1px solid rgba(201,168,76,0.2)",
                background: menuTab === "tavern" ? "rgba(201,168,76,0.1)" : "transparent",
                color: menuTab === "tavern" ? "var(--gold-light)" : "var(--gold)",
                cursor: "pointer",
                opacity: menuTab === "tavern" ? 1 : 0.5,
              }}
            >
              Tavern
            </button>
            <button
              onClick={() => setMenuTab("dining")}
              style={{
                padding: "0.45rem 1.2rem",
                fontSize: "0.75rem",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                border: menuTab === "dining" ? "1px solid rgba(201,168,76,0.6)" : "1px solid rgba(201,168,76,0.2)",
                background: menuTab === "dining" ? "rgba(201,168,76,0.1)" : "transparent",
                color: menuTab === "dining" ? "var(--gold-light)" : "var(--gold)",
                cursor: "pointer",
                opacity: menuTab === "dining" ? 1 : 0.5,
              }}
            >
              Fine Dining
            </button>
          </div>

          {menuTab === "tavern" && (
            <MenuSection
              label={v.tavernMenu.label}
              note={v.tavernMenu.note}
              food={v.tavernMenu.food}
              drinks={v.tavernMenu.drinks}
            />
          )}
          {menuTab === "dining" && (
            <MenuSection
              label={v.finingDiningMenu.label}
              note={v.finingDiningMenu.note}
              food={v.finingDiningMenu.food}
              drinks={v.finingDiningMenu.drinks}
            />
          )}
        </div>

        <div className="gold-divider" />

        {/* Upper Floor & Rooftop */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>The Building</h2>
          <div className="space-y-3">
            <div className="px-5 py-4" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.18)" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "var(--gold-light)" }}>Second Floor — Rooms</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.7 }}>{v.upperFloor.description}</p>
            </div>
            <div className="px-5 py-4" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.18)" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "var(--gold-light)" }}>Rooftop — Reservations Only</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.7 }}>{v.rooftopDining.description}</p>
            </div>
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
              <div>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>The Hat</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>{v.owner.dmPrivate.theCirclet}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>What He Carries</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>{v.owner.dmPrivate.fears}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>What He Wants</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>{v.owner.dmPrivate.goals}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>Hook Note</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>{v.owner.dmPrivate.hookNote}</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/garden-district/rose-vine-view" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Rose Vine View
          </a>
        </div>
      </div>
    </main>
  );
}
