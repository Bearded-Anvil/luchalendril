import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { northwestBeaconStreet } from "@/data/northwest-beacon-street";

type MerchantItem = typeof northwestBeaconStreet.encounter.items[0];

function MerchantItemCard({ item, index }: { item: MerchantItem; index: number }) {
  return (
    <div className="px-5 py-4" style={{
      background: index % 2 === 0 ? "rgba(139,26,26,0.06)" : "rgba(139,26,26,0.03)",
      border: "1px solid rgba(139,26,26,0.2)",
    }}>
      <div className="flex items-start justify-between gap-4 mb-2">
        <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{item.name}</p>
        <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--gold)" }}>{item.price}</p>
      </div>
      <p className="text-xs italic mb-2" style={{ color: "var(--parchment)", opacity: 0.55 }}>{item.description}</p>
      <p className="text-xs leading-relaxed mb-1" style={{ color: "var(--parchment)", opacity: 0.8 }}>
        <span style={{ color: "var(--gold)", opacity: 0.6 }}>Effect — </span>{item.effect}
      </p>
      <p className="text-xs leading-relaxed" style={{ color: "#e88080", opacity: 0.7 }}>
        <span style={{ opacity: 0.8 }}>Side effect — </span>{item.sideEffect}
      </p>
    </div>
  );
}

export default function NorthwestBeaconStreetPage() {
  const v = northwestBeaconStreet;

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "North Main Street Intersection", href: "/beacon/north-main-street-intersection" },
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

        {/* Encounter */}
        <div className="mt-8 mb-10">
          <div className="flex items-baseline gap-4 mb-6">
            <h2 className="text-xs uppercase tracking-widest" style={{ color: "#e88080", letterSpacing: "0.2em" }}>Encounter</h2>
            <span className="text-xs font-bold px-2 py-0.5" style={{ background: "rgba(139,26,26,0.2)", border: "1px solid rgba(139,26,26,0.4)", color: "#e88080" }}>D20 — {v.encounter.trigger}</span>
          </div>

          <div className="p-6 mb-6" style={{ background: "rgba(139,26,26,0.06)", border: "1px solid rgba(139,26,26,0.25)" }}>
            <p className="text-sm leading-relaxed italic mb-4" style={{ color: "var(--parchment)", opacity: 0.88 }}>
              &ldquo;{v.encounter.readAloud}&rdquo;
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.55 }}>{v.encounter.dmNote}</p>
          </div>

          <div className="space-y-3">
            {v.encounter.items.map((item, i) => (
              <MerchantItemCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* DM Notes */}
        <div className="p-6 mb-6" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.3)" }}>
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM Notes</h2>
          {v.dmNotes.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.8 }}>{paragraph}</p>
          ))}
        </div>

        {/* Back */}
        <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/north-main-street-intersection" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Back to North Main Street Intersection
          </a>
        </div>
      </div>
    </main>
  );
}
