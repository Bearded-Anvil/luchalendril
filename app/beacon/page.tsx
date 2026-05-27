import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export default function BeaconPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb crumbs={[{ label: "Luchalendril", href: "/" }, { label: "Beacon" }]} />

        {/* City Header */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>City of</p>
          <h1 className="text-5xl md:text-7xl mb-2" style={{ color: "var(--gold-light)", letterSpacing: "0.08em" }}>Beacon</h1>
          <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.5 }}>Braver&rsquo;s Bowl &mdash; The White Bay Coast</p>
        </div>

        <div className="gold-divider" />

        {/* City Description */}
        <div
          className="p-8 mb-10"
          style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}
        >
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Overview</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.85 }}>
            Beacon sits inside Braver&rsquo;s Bowl — a massive three-sided crater of ancient stone. The crater walls rise sharply on the north, east, and west, carved over generations into terraced streets, homes, and fortifications. The southern face opens entirely to the White Bay, a stretch of coastal water perpetually shrouded in dense fog that rolls in off the water and rarely fully lifts.
          </p>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.85 }}>
            The city is built in tiers. The lower city — crowded, loud, and alive with commerce — occupies the crater floor and the lower slopes. The upper ring clings to the higher walls, home to those with coin and influence. Between them runs an unspoken divide that every citizen understands without being told.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>
            Ships arrive and depart through the White Bay constantly, though navigating its fog requires either experience, luck, or both. Beacon has grown into a city of trade precisely because of this — goods that can make it through the fog command a premium, and the merchants who control the routes control the city.
          </p>
        </div>

        <div className="gold-divider" />

        {/* Map */}
        <div className="mt-8 mb-12">
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Map of Beacon</h2>
          <div className="gold-border">
            <Image
              src="/map-of-beacon.jpg"
              alt="Map of Beacon"
              width={1402}
              height={1122}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>
        </div>

        {/* Entry Points */}
        <div className="mt-10 pt-10" style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}>
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Where does your party arrive?</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>Choose the entry point that matches your party&rsquo;s origin.</p>
          <div className="grid gap-4">
            {[
              { href: "/beacon/south-main-street", label: "South Main Street", description: "Arrived overland from the south. The main gate into Beacon — merchant stalls, tradespeople, and the city opening up before you." },
              { href: "/beacon/dock-yard",          label: "The Dock Yard",      description: "Arrived by sea. The White Bay boardwalk — fishing crews, fog, and an information booth ready to welcome you to the city." },
              { href: "/beacon/east-main-street",   label: "East Main Street",   description: "Arrived overland from the east. The quieter gate — a residential approach past the Garden District wall." },
            ].map((entry) => (
              <Link
                key={entry.href}
                href={entry.href}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="p-6 flex items-center justify-between"
                  style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.3)" }}
                >
                  <div>
                    <p className="text-xl mb-1" style={{ color: "var(--gold-light)" }}>{entry.label}</p>
                    <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.65 }}>{entry.description}</p>
                  </div>
                  <span className="text-2xl ml-6 shrink-0" style={{ color: "var(--gold)", opacity: 0.5 }}>›</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
