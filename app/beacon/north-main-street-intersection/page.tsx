import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { northMainStreetIntersection } from "@/data/north-main-street-intersection";

export default function NorthMainStreetIntersectionPage() {
  const v = northMainStreetIntersection;
  const g = v.encounter.guardStats;

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
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Beacon</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9", maxHeight: "540px" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
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

        {/* Navigation */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>From the Intersection</h2>

          {/* Hattiswain Pawn — featured */}
          <a href="/beacon/north-main-street-intersection/hattiswain-pawn" style={{ textDecoration: "none", display: "block" }}>
            <div className="px-6 py-5 mb-4 transition-all duration-200 flex items-center justify-between" style={{
              border: "1px solid rgba(201,168,76,0.45)",
              background: "rgba(201,168,76,0.07)",
              cursor: "pointer",
            }}>
              <div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.6, letterSpacing: "0.15em" }}>Directly Ahead</p>
                <p className="text-base font-bold" style={{ color: "var(--gold-light)" }}>Hattiswain Pawn</p>
                <p className="text-xs mt-1" style={{ color: "var(--parchment)", opacity: 0.6 }}>The sign is shaped like a half-open trunk. The door is open.</p>
              </div>
              <p className="text-sm font-bold ml-6 whitespace-nowrap" style={{ color: "var(--gold)" }}>Enter →</p>
            </div>
          </a>

          {/* Roads */}
          <div className="grid md:grid-cols-3 gap-4">
            {v.roads.map((road, i) =>
              road.status === "live" && road.path ? (
                <a key={i} href={road.path} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <div className="px-5 py-4 flex flex-col transition-all duration-200" style={{
                    border: "1px solid rgba(201,168,76,0.35)",
                    background: "rgba(201,168,76,0.05)",
                    cursor: "pointer",
                    height: "100%",
                  }}>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.12em" }}>{road.direction}</p>
                    <p className="text-sm font-bold flex-1" style={{ color: "var(--gold-light)" }}>{road.name}</p>
                    <p className="text-xs mt-2" style={{ color: "var(--gold)", opacity: 0.6 }}>Head {road.direction} →</p>
                  </div>
                </a>
              ) : (
                <div key={i} className="px-5 py-4 flex flex-col" style={{
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.015)",
                  opacity: 0.4,
                  height: "100%",
                }}>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.5, letterSpacing: "0.12em" }}>{road.direction}</p>
                  <p className="text-sm font-bold flex-1" style={{ color: "var(--parchment)" }}>{road.name}</p>
                  <p className="text-xs italic mt-2" style={{ color: "var(--parchment)", opacity: 0.35 }}>Coming soon</p>
                </div>
              )
            )}
          </div>
        </div>

        <div className="gold-divider" />

        {/* Encounter */}
        <div className="mt-8 mb-10">
          <div className="flex items-baseline gap-4 mb-6">
            <h2 className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.2em" }}>Encounter</h2>
            <span className="text-xs font-bold px-2 py-0.5" style={{ background: "rgba(139,26,26,0.2)", border: "1px solid rgba(139,26,26,0.4)", color: "#e88080" }}>D20 — Roll {v.encounter.trigger}</span>
          </div>

          {/* Encounter description */}
          <div className="p-6 mb-6" style={{ background: "rgba(139,26,26,0.06)", border: "1px solid rgba(139,26,26,0.25)" }}>
            <p className="text-sm leading-relaxed italic mb-3" style={{ color: "var(--parchment)", opacity: 0.88 }}>
              &ldquo;{v.encounter.description}&rdquo;
            </p>
            <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.45 }}>Formation — {v.encounter.formation}</p>
          </div>

          {/* Guard Stats */}
          <div className="mb-6" style={{ border: "1px solid rgba(139,26,26,0.25)", background: "rgba(139,26,26,0.04)" }}>
            <div className="px-5 py-3" style={{ borderBottom: "1px solid rgba(139,26,26,0.2)" }}>
              <p className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.15em" }}>{g.name} × 4</p>
            </div>
            <div className="px-5 py-4">
              <div className="grid grid-cols-3 gap-x-6 gap-y-2 mb-4">
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.4, letterSpacing: "0.1em" }}>AC</p>
                  <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.85 }}>{g.ac}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.4, letterSpacing: "0.1em" }}>HP</p>
                  <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.85 }}>{g.hp}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.4, letterSpacing: "0.1em" }}>Speed</p>
                  <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.85 }}>{g.speed}</p>
                </div>
              </div>

              <div className="grid grid-cols-6 gap-2 mb-4 py-3 px-4" style={{ background: "rgba(201,168,76,0.03)", border: "1px solid rgba(201,168,76,0.08)" }}>
                {[["STR", g.str], ["DEX", g.dex], ["CON", g.con], ["INT", g.int], ["WIS", g.wis], ["CHA", g.cha]].map(([stat, val]) => (
                  <div key={stat} className="text-center">
                    <p className="text-xs uppercase" style={{ color: "var(--parchment)", opacity: 0.4, letterSpacing: "0.08em" }}>{stat}</p>
                    <p className="text-sm font-bold" style={{ color: "var(--parchment)", opacity: 0.85 }}>{val}</p>
                  </div>
                ))}
              </div>

              <div className="mb-4 space-y-1">
                <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.6 }}><span style={{ opacity: 0.5 }}>Skills —</span> {g.skills}</p>
                <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.6 }}><span style={{ opacity: 0.5 }}>Languages —</span> {g.languages}</p>
                <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.6 }}><span style={{ opacity: 0.5 }}>Challenge —</span> {g.challenge}</p>
              </div>

              <div className="pt-3" style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.12em" }}>Actions</p>
                {g.actions.map((action, i) => (
                  <p key={i} className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.8 }}>
                    <span className="font-bold">{action.name}.</span> {action.description}
                  </p>
                ))}
              </div>

              <p className="text-xs italic mt-4" style={{ color: "var(--parchment)", opacity: 0.4 }}>{g.note}</p>
            </div>
          </div>

          {/* DM Note */}
          <div className="p-5" style={{ background: "rgba(139,26,26,0.1)", border: "1px solid rgba(139,26,26,0.3)" }}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080", letterSpacing: "0.15em" }}>DM Note</p>
            {v.encounter.dmNote.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.9 }}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Back */}
        <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/northeast-beacon-street" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Back to Northeast Beacon Street
          </a>
        </div>
      </div>
    </main>
  );
}
