"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { centaurHoovesAndHubs } from "@/data/centaur-hooves-and-hubs";

type ServiceEntry = typeof centaurHoovesAndHubs.services[0];

function ServiceCard({ service, index }: { service: ServiceEntry; index: number }) {
  return (
    <div className="px-5 py-5" style={{
      background: index % 2 === 0 ? "rgba(201,168,76,0.05)" : "rgba(201,168,76,0.02)",
      border: "1px solid rgba(201,168,76,0.2)",
    }}>
      <p className="text-sm font-bold mb-1" style={{ color: "var(--gold-light)" }}>{service.name}</p>
      <p className="text-xs italic mb-4" style={{ color: "var(--parchment)", opacity: 0.5 }}>{service.tagline}</p>

      <div className="space-y-1 mb-4">
        {service.rates.map((rate, i) => (
          <div key={i} className="flex items-center justify-between py-1.5 px-3" style={{
            background: i % 2 === 0 ? "rgba(201,168,76,0.04)" : "transparent",
            border: "1px solid rgba(201,168,76,0.08)",
          }}>
            <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.8 }}>{rate.label}</p>
            <p className="text-xs font-bold whitespace-nowrap ml-4" style={{ color: "var(--gold)", opacity: 0.85 }}>{rate.price}</p>
          </div>
        ))}
      </div>

      {service.notes.length > 0 && (
        <ul className="space-y-1">
          {service.notes.map((note, i) => (
            <li key={i} className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.5 }}>
              <span style={{ color: "var(--gold)", opacity: 0.4, marginRight: "0.5rem" }}>—</span>{note}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function CentaurHoovesAndHubsPage() {
  const v = centaurHoovesAndHubs;
  const [dmOpen, setDmOpen] = useState(false);

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "Northeast Beacon Street", href: "/beacon/northeast-beacon-street" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Northeast Beacon Street — Beacon</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
          <p className="text-sm italic mt-2" style={{ color: "var(--parchment)", opacity: 0.45 }}>{v.tagline}</p>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9", maxHeight: "540px" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
        </div>

        <div className="gold-divider" />

        {/* Scene Description */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
          <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.88 }}>
            &ldquo;{v.sceneDescription}&rdquo;
          </p>
        </div>

        <div className="gold-divider" />

        {/* Owner */}
        <div className="mt-8 mb-10 p-6" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}>
          <p className="text-base font-bold mb-1" style={{ color: "var(--gold-light)" }}>{v.owner.name}</p>
          <p className="text-xs mb-4" style={{ color: "var(--parchment)", opacity: 0.45 }}>{v.owner.race}</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>{v.owner.appearance}</p>
        </div>

        <div className="gold-divider" />

        {/* Services */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Services &amp; Rates</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>All rates are per journey or per day as noted. Deposits may apply.</p>
          <div className="space-y-3">
            {v.services.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>
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
            <div className="dm-private p-6 mt-0 space-y-6" style={{ borderTop: "none" }}>
              <div>
                <h4 className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080" }}>Current Availability — Read to Players</h4>
                {v.dmPrivate.currentAvailability.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.9 }}>{paragraph}</p>
                ))}
              </div>

              <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

              <div>
                <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Running This Location</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{v.dmPrivate.dmNote}</p>
              </div>
            </div>
          )}
        </div>

        {/* Back */}
        <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/northeast-beacon-street" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Back to Northeast Beacon Street
          </a>
        </div>
      </div>
    </main>
  );
}
