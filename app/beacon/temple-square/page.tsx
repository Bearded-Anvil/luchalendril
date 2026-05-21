import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import NavCard from "@/components/NavCard";
import { templeSquare } from "@/data/temple-square";

export default function TempleSquarePage() {
  const v = templeSquare;

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

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Beacon — City Center</p>
          <h1 className="text-5xl md:text-7xl mb-2" style={{ color: "var(--gold-light)", letterSpacing: "0.08em" }}>{v.name}</h1>
          <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.5 }}>The Roundabout at Braver&rsquo;s Temple</p>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9", maxHeight: "560px" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
        </div>

        <div className="gold-divider" />

        {/* Description */}
        <div className="p-8 mb-12" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}>
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Overview</h2>
          {v.description.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed mb-4 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.85 }}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Braver's Temple */}
        <div className="mb-12 px-6 py-6" style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.3)" }}>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.2em" }}>At the Center</p>
              <p className="text-xl font-bold" style={{ color: "var(--gold-light)" }}>Braver&rsquo;s Temple</p>
              <p className="text-sm mt-1 italic" style={{ color: "var(--parchment)", opacity: 0.55 }}>The blue fire in the statue&rsquo;s eyes burns day and night.</p>
            </div>
            <a
              href="/beacon/temple-square/bravers-temple"
              style={{
                color: "var(--gold)",
                textDecoration: "none",
                fontSize: "0.75rem",
                fontWeight: "700",
                border: "1px solid rgba(201,168,76,0.4)",
                padding: "0.4rem 0.9rem",
                letterSpacing: "0.1em",
                whiteSpace: "nowrap",
              }}
            >
              Enter →
            </a>
          </div>
        </div>

        <div className="gold-divider" />

        {/* Businesses on the Square */}
        <div className="mt-10 mb-14">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>On the Square</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>Four businesses line the roundabout, one at each road.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {v.businesses.map((biz, i) => {
              return biz.status === "live" && biz.path ? (
                <a key={i} href={biz.path} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <div className="px-5 py-4 transition-all duration-200 flex flex-col" style={{
                    border: "1px solid rgba(201,168,76,0.35)",
                    background: "rgba(201,168,76,0.05)",
                    cursor: "pointer",
                    height: "100%",
                  }}>
                    <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{biz.name}</p>
                    <p className="text-xs mt-1 leading-relaxed flex-1" style={{ color: "var(--parchment)", opacity: 0.6 }}>{biz.description}</p>
                    <p className="text-xs mt-2" style={{ color: "var(--gold)", opacity: 0.6 }}>Enter →</p>
                  </div>
                </a>
              ) : (
                <div
                  key={i}
                  className="px-5 py-4 flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.015)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    opacity: 0.5,
                    height: "100%",
                  }}
                >
                  <p className="text-sm font-bold" style={{ color: "var(--parchment)" }}>{biz.name}</p>
                  <p className="text-xs mt-1 leading-relaxed flex-1" style={{ color: "var(--parchment)", opacity: 0.6 }}>{biz.description}</p>
                  <p className="text-xs italic mt-2" style={{ color: "var(--parchment)", opacity: 0.35 }}>Coming soon</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="gold-divider" />

        {/* Roads Out */}
        <div className="mt-10 mb-14">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Roads from the Square</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>Four roads branch from the roundabout in each direction.</p>
          <div className="grid gap-4">
            {v.roads.map((road, i) =>
              road.status === "live" && road.path ? (
                <NavCard key={i} href={road.path} title={road.name} description={`${road.direction} — ${road.description}`} />
              ) : (
                <div
                  key={i}
                  className="p-6 flex items-center justify-between"
                  style={{
                    background: "rgba(255,255,255,0.015)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    opacity: 0.4,
                  }}
                >
                  <div>
                    <h3 className="text-base mb-1" style={{ color: "var(--parchment)" }}>{road.name}</h3>
                    <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.6 }}>{road.direction} — {road.description}</p>
                  </div>
                  <span className="text-xs italic ml-6 whitespace-nowrap" style={{ color: "var(--parchment)", opacity: 0.4 }}>soon</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* DM Notes */}
        <div className="p-6 mb-10" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.3)" }}>
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM Notes</h2>
          {v.dmNotes.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.8 }}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="mt-8 pt-8" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <div className="grid grid-cols-2 gap-3">
            <a href="/beacon/central-bowl-street" style={{ color: "var(--gold)", textDecoration: "none", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "block", textAlign: "center", fontSize: "0.875rem" }}>
              ← Central Bowl Street
            </a>
            <a href="/beacon/northeast-beacon-street" style={{ color: "var(--gold)", textDecoration: "none", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "block", textAlign: "center", fontSize: "0.875rem" }}>
              Northeast Beacon Street →
            </a>
            <div style={{ color: "var(--parchment)", fontWeight: "700", border: "1px solid rgba(255,255,255,0.1)", padding: "0.5rem 1.1rem", textAlign: "center", fontSize: "0.875rem", opacity: 0.3, cursor: "default" }}>
              ← East Main Street
            </div>
            <a href="/beacon/southeast-beacon-street" style={{ color: "var(--gold)", textDecoration: "none", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "block", textAlign: "center", fontSize: "0.875rem" }}>
              Southeast Beacon Street →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
