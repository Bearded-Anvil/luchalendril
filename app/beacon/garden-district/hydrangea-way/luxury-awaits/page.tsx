import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { luxuryAwaits } from "@/data/luxury-awaits";

type InventoryItem = typeof luxuryAwaits.inventory[0];

function ItemCard({ item }: { item: InventoryItem }) {
  return (
    <div className="px-5 py-4" style={{
      background: "rgba(201,168,76,0.04)",
      border: "1px solid rgba(201,168,76,0.2)",
    }}>
      <div className="flex items-start justify-between gap-4 mb-2">
        <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{item.name}</p>
        <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--gold)" }}>{item.price}</p>
      </div>
      <p className="text-xs italic mb-2" style={{ color: "var(--parchment)", opacity: 0.55 }}>{item.description}</p>
      <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.8 }}>
        <span style={{ color: "var(--gold)", opacity: 0.6 }}>Effect — </span>{item.effect}
      </p>
      {item.dmNote && (
        <p className="text-xs leading-relaxed mt-2" style={{ color: "#e88080", opacity: 0.65 }}>
          <span style={{ opacity: 0.8 }}>DM — </span>{item.dmNote}
        </p>
      )}
    </div>
  );
}

export default function LuxuryAwaitsPage() {
  const v = luxuryAwaits;

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "Garden District", href: "/beacon/garden-district" },
            { label: "Hydrangea Way", href: "/beacon/garden-district/hydrangea-way" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Hydrangea Way — Garden District</p>
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
          {v.sceneDescription.split("\n\n").map((paragraph, i, arr) => (
            <p key={i} className="text-sm leading-relaxed italic mb-4" style={{ color: "var(--parchment)", opacity: 0.88 }}>
              {i === 0 ? <>&ldquo;{paragraph}</> : paragraph}
              {i === arr.length - 1 ? <>&rdquo;</> : ""}
            </p>
          ))}
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

        {/* Inventory */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Inventory</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>Everything in this room is for sale.</p>
          <div className="space-y-3">
            {v.inventory.map((item, i) => (
              <ItemCard key={i} item={item} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/garden-district/hydrangea-way" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Hydrangea Way
          </a>
        </div>
      </div>
    </main>
  );
}
