import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { warehouseDistrict } from "@/data/warehouse-district";

export default function WarehouseDistrictPage() {
  const v = warehouseDistrict;

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "Northwest Beacon Street", href: "/beacon/northwest-beacon-street" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Beacon — Dock Yard</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
          <p className="text-xs italic mt-2" style={{ color: "var(--parchment)", opacity: 0.4 }}>{v.subtitle}</p>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9", maxHeight: "540px" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        </div>

        <div className="gold-divider" />

        {/* First Visit Encounter */}
        <div className="mt-8 mb-10">
          <div className="flex items-baseline gap-4 mb-6">
            <h2 className="text-xs uppercase tracking-widest" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>First Visit</h2>
            <span className="text-xs italic" style={{ color: "var(--parchment)", opacity: 0.4 }}>Play this the first time the party approaches.</span>
          </div>

          <div className="p-6 mb-4" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.65 }}>{v.firstVisitEncounter.setup}</p>
            <p className="text-sm leading-relaxed italic mb-4" style={{ color: "var(--parchment)", opacity: 0.9 }}>
              &ldquo;{v.firstVisitEncounter.dialogue.replace(/^"|"$/g, "")}&rdquo;
            </p>
            <p className="text-xs leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.45 }}>{v.firstVisitEncounter.note}</p>
          </div>
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

        {/* DM Notes */}
        <div className="mt-8 mb-6">
          <div className="p-6" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.3)" }}>
            <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM Notes</h2>

            <div className="mb-5">
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.6, letterSpacing: "0.15em" }}>Reality of the Place</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.8 }}>{v.dmNotes.realityOfThePlace}</p>
            </div>

            <div style={{ borderTop: "1px solid rgba(139,26,26,0.25)", marginBottom: "1.25rem" }} />

            <div className="mb-5">
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.6, letterSpacing: "0.15em" }}>The Trafficking Rumor</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.8 }}>{v.dmNotes.traffickingRumor}</p>
            </div>

            <div style={{ borderTop: "1px solid rgba(139,26,26,0.25)", marginBottom: "1.25rem" }} />

            <div>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.6, letterSpacing: "0.15em" }}>City Complicity</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.8 }}>{v.dmNotes.cityComplicity}</p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/northwest-beacon-street" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Back to Northwest Beacon Street
          </a>
        </div>
      </div>
    </main>
  );
}
