import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { centralBowlStreet } from "@/data/central-bowl-street";

export default function CentralBowlStreetPage() {
  const v = centralBowlStreet;

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "Dock Yard", href: "/beacon/dock-yard" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Beacon Street</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
        </div>

        <div className="gold-divider" />

        {/* Scene + DM Notes */}
        <div className="grid md:grid-cols-2 gap-10 mt-8 mb-10">
          <div>
            <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
            <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.88 }}>
              &ldquo;{v.description}&rdquo;
            </p>
          </div>
          <div className="p-6" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.3)" }}>
            <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM Notes</h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.8 }}>{v.dmNotes}</p>
          </div>
        </div>

        {/* Locations */}
        <div className="gold-divider" />
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Notable Locations</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {v.locations.map((loc, i) => (
              loc.status === "live" ? (
                <a key={i} href={loc.path} style={{ textDecoration: "none" }}>
                  <div className="px-5 py-4 transition-all duration-200" style={{
                    border: "1px solid rgba(201,168,76,0.35)",
                    background: "rgba(201,168,76,0.05)",
                    cursor: "pointer",
                  }}>
                    <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{loc.name}</p>
                    {loc.description && (
                      <p className="text-xs mt-1" style={{ color: "var(--parchment)", opacity: 0.55 }}>{loc.description}</p>
                    )}
                    <p className="text-xs mt-2" style={{ color: "var(--gold)", opacity: 0.6 }}>Enter →</p>
                  </div>
                </a>
              ) : (
                <div key={i} className="px-5 py-4" style={{ border: "1px solid rgba(201,168,76,0.15)", background: "rgba(201,168,76,0.02)", opacity: 0.5 }}>
                  <p className="text-sm" style={{ color: "var(--parchment)" }}>{loc.name}</p>
                  {loc.description && (
                    <p className="text-xs mt-1 italic" style={{ color: "var(--parchment)", opacity: 0.5 }}>{loc.description}</p>
                  )}
                  <p className="text-xs italic mt-2" style={{ color: "var(--parchment)", opacity: 0.4 }}>Coming soon</p>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="mt-16 pt-8 flex items-center justify-between" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/dock-yard" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Back to Dock Yard
          </a>
          <a href="/beacon/temple-square" className="text-right" style={{ textDecoration: "none" }}>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.4, letterSpacing: "0.15em" }}>Continue</p>
            <p style={{ color: "var(--gold)", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>Temple Square →</p>
          </a>
        </div>
      </div>
    </main>
  );
}
