import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { eastMainStreet } from "@/data/east-main-street";

export default function EastMainStreetPage() {
  const v = eastMainStreet;

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
          {v.sceneDescription.split("\n\n").map((paragraph, i, arr) => (
            <p key={i} className="text-sm leading-relaxed italic mb-4" style={{ color: "var(--parchment)", opacity: 0.88 }}>
              {i === 0 ? <>&ldquo;{paragraph}</> : paragraph}
              {i === arr.length - 1 ? <>&rdquo;</> : ""}
            </p>
          ))}
        </div>

        <div className="gold-divider" />

        {/* Hubs and Hooves */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Hubs and Hooves</h2>

          {/* Stables */}
          <div className="px-6 py-5 mb-4" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <div className="flex items-baseline gap-3 mb-2">
              <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>The Stables</p>
              <p className="text-xs" style={{ color: "var(--gold)", opacity: 0.45 }}>{v.hubsAndHooves.stables.capacity}</p>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>{v.hubsAndHooves.stables.description}</p>
          </div>

          {/* Vehicles */}
          <div className="grid md:grid-cols-3 gap-3 mb-4">
            {v.hubsAndHooves.vehicles.map((vehicle, i) => (
              <div key={i} className="px-5 py-4" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.18)" }}>
                <p className="text-sm font-bold mb-1" style={{ color: "var(--gold-light)" }}>{vehicle.type}</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.6 }}>{vehicle.description}</p>
              </div>
            ))}
          </div>

          {/* Office — live link */}
          <a href={v.hubsAndHooves.office.path} style={{ textDecoration: "none", display: "block" }}>
            <div className="px-6 py-5 flex items-center justify-between transition-all duration-200" style={{
              border: "1px solid rgba(201,168,76,0.35)",
              background: "rgba(201,168,76,0.05)",
              cursor: "pointer",
            }}>
              <div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.12em" }}>Office</p>
                <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>Offices of Hubs and Hooves</p>
                <p className="text-xs mt-1 italic" style={{ color: "var(--parchment)", opacity: 0.5 }}>{v.hubsAndHooves.office.description}</p>
              </div>
              <p className="text-xs ml-6 whitespace-nowrap" style={{ color: "var(--gold)", opacity: 0.6 }}>Enter →</p>
            </div>
          </a>
        </div>

        <div className="gold-divider" />

        {/* Roads */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Roads</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>Where this street leads.</p>
          <div className="grid md:grid-cols-2 gap-4">
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

        {/* DM Notes */}
        <div className="p-6 mb-6" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.3)" }}>
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM Notes</h2>
          {v.dmNotes.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.8 }}>{paragraph}</p>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/temple-square" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Temple Square
          </a>
        </div>
      </div>
    </main>
  );
}
