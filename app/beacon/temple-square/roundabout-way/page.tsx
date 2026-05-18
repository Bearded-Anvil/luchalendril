"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { roundaboutWay } from "@/data/roundabout-way";

type MenuItem = { name: string; cost: string; description: string };

function MenuSection({ label, items }: { label: string; items: MenuItem[] }) {
  return (
    <div className="mb-8">
      <h3 className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.2em" }}>{label}</h3>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-start justify-between gap-6 py-3 px-4" style={{
            background: i % 2 === 0 ? "rgba(201,168,76,0.03)" : "transparent",
            border: "1px solid rgba(201,168,76,0.1)",
          }}>
            <div className="flex-1">
              <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{item.name}</p>
              <p className="text-xs mt-0.5 italic" style={{ color: "var(--parchment)", opacity: 0.55 }}>{item.description}</p>
            </div>
            <p className="text-xs font-bold whitespace-nowrap mt-0.5" style={{ color: "var(--gold)" }}>{item.cost}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RoundaboutWayPage() {
  const v = roundaboutWay;
  const [dmOpen, setDmOpen] = useState(false);
  const [gardenOpen, setGardenOpen] = useState(false);

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

        {/* The Empty Table */}
        <div className="mb-10 p-6" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}>
          <h2 className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>The Empty Table</h2>
          <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.82 }}>{v.emptyTable.playerDescription}</p>
        </div>

        {/* Lighthouse Voucher */}
        <div className="mb-10 px-5 py-4" style={{ background: "rgba(201,168,76,0.03)", border: "1px solid rgba(201,168,76,0.12)" }}>
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.15em" }}>Lighthouse Inn — Suite Voucher</p>
          <p className="text-xs italic" style={{ color: "var(--parchment)", opacity: 0.55 }}>{v.lighthouseVoucher}</p>
        </div>

        <div className="gold-divider" />

        {/* Owners */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Owners</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-5">
            {[v.owners.myrtellion, v.owners.ursillia].map((owner, i) => (
              <div key={i} className="p-6" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
                <p className="text-base font-bold mb-1" style={{ color: "var(--gold-light)" }}>{owner.name}</p>
                <p className="text-xs mb-3" style={{ color: "var(--parchment)", opacity: 0.5 }}>{owner.race}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{owner.appearance}</p>
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.55 }}>{v.owners.sharedNote}</p>
        </div>

        <div className="gold-divider" />

        {/* Staff */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Staff</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {v.staff.map((member, i) => (
              <div key={i} className="p-6" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.15)" }}>
                <p className="text-base font-bold mb-1" style={{ color: "var(--gold-light)" }}>{member.name}</p>
                <p className="text-xs mb-3" style={{ color: "var(--parchment)", opacity: 0.5 }}>{member.role} — {member.race}, {member.age}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="gold-divider" />

        {/* Menu */}
        <div className="mt-8 mb-4">
          <h2 className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Menu</h2>
          <p className="text-xs italic mb-8" style={{ color: "var(--parchment)", opacity: 0.4 }}>{v.menu.note}</p>

          <MenuSection label="First Course" items={v.menu.firstCourse} />
          <MenuSection label="Main Course" items={v.menu.mainCourse} />
          <MenuSection label="Dessert" items={v.menu.dessert} />

          <div className="mb-6 mt-2" style={{ height: "1px", background: "linear-gradient(to right, rgba(201,168,76,0.3), transparent)" }} />

          <MenuSection label="Wines" items={v.menu.wines} />
          <MenuSection label="Other Drinks" items={v.menu.otherDrinks} />
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
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>The Concept</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.concept}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Staff Notes</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.staffNotes}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Drinking — Mechanical Note</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.menu.drinkingNote}</p>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>The Empty Table — DM Note</h4>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.emptyTable.dmNote}</p>
                <div className="p-4" style={{ background: "rgba(139,26,26,0.12)", border: "1px solid rgba(139,26,26,0.3)" }}>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.7 }}>Quest Hook — The Missing</p>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.emptyTable.questHook}</p>
                  <p className="text-xs italic" style={{ color: "var(--parchment)", opacity: 0.5 }}>{v.emptyTable.dmGuidanceNote}</p>
                </div>
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080" }}>Quest Hook — The Garden District Tour</h4>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.gardenDistrictTour.setup}</p>

                <button
                  onClick={() => setGardenOpen(!gardenOpen)}
                  className="w-full py-2 px-4 text-xs font-bold tracking-widest uppercase"
                  style={{
                    background: gardenOpen ? "rgba(139,26,26,0.2)" : "rgba(139,26,26,0.08)",
                    border: "1px solid rgba(139,26,26,0.35)",
                    color: "#e88080",
                    cursor: "pointer",
                    letterSpacing: "0.12em",
                  }}
                >
                  {gardenOpen ? "▲ Collapse Tour Notes" : "▼ Full Tour Notes"}
                </button>

                {gardenOpen && (
                  <div className="p-5 space-y-4" style={{ background: "rgba(139,26,26,0.06)", border: "1px solid rgba(139,26,26,0.2)", borderTop: "none" }}>
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.6 }}>Trigger</p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.dmPrivate.gardenDistrictTour.trigger}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.6 }}>What the Party Gets</p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.dmPrivate.gardenDistrictTour.whatTheyGet}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.6 }}>How to Use It</p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.dmPrivate.gardenDistrictTour.dmUsage}</p>
                    </div>
                    <div className="p-3" style={{ background: "rgba(139,26,26,0.1)", border: "1px solid rgba(139,26,26,0.25)" }}>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#e88080", opacity: 0.6 }}>The King&rsquo;s Guard</p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.dmPrivate.gardenDistrictTour.kingGuardNote}</p>
                    </div>
                  </div>
                )}
              </div>

            </div>
          )}
        </div>

        {/* Back */}
        <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/temple-square" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Back to Temple Square
          </a>
        </div>
      </div>
    </main>
  );
}
