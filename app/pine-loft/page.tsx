import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export default function PineLoftPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb crumbs={[{ label: "Luchalendril", href: "/" }, { label: "Pine Loft" }]} />

        {/* Town Header */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Town of</p>
          <h1 className="text-5xl md:text-7xl mb-2" style={{ color: "var(--gold-light)", letterSpacing: "0.08em" }}>Pine Loft</h1>
          <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.5 }}>The Southern Road &mdash; One Day&rsquo;s Travel from Beacon</p>
        </div>

        <div className="gold-divider" />

        {/* Town Description */}
        <div
          className="p-8 mb-10"
          style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}
        >
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Overview</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.85 }}>
            Pine Loft sits at the southern end of the Oceanview Road, pressed between open farmland and the edge of a dense, old-growth forest. It is a working town — a place of smiths, cobblers, tanners, and stable hands — without the commerce or politics of Beacon. Most of what Pine Loft produces feeds or supplies the road north. Most of what comes through Pine Loft is passing through.
          </p>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--parchment)", opacity: 0.85 }}>
            The town runs along a single main road that enters from the north and ends at a wooden gate in the south. Beyond that gate, the forest begins — dense and dark, the treeline pressing close on both sides of the road as it disappears into the trees. Pine Loft&rsquo;s guard tower watches that gate. What comes out of the forest is the town&rsquo;s oldest concern.
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>
            For a party starting away from the city, Pine Loft is a quieter entry into Luchalendril — a place where the stakes are smaller, the faces are familiar, and the forest to the south is always in the back of everyone&rsquo;s mind.
          </p>
        </div>

        <div className="gold-divider" />

        {/* Entry Points */}
        <div className="mt-10 pt-10" style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}>
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Where does your party arrive?</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>Choose the part of town that matches your party&rsquo;s approach.</p>
          <div className="grid gap-4">
            {[
              { href: "/pine-loft/north", label: "Pine Loft North", description: "Arrived from Beacon via the Oceanview Road. The northern end of town — the smithy, stables, inn, and cobbler are all here." },
              { href: "/pine-loft/south", label: "Pine Loft South", description: "The quieter, working end of town. The stone mason and tanner operate here, near the southern gate and the forest beyond." },
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
