import Breadcrumb from "@/components/Breadcrumb";
import NavCard from "@/components/NavCard";

const streets = [
  {
    id: "south-main-street",
    name: "South Main Street",
    description: "The main commercial strip of the lower city. Open-air vendors, tradespeople, and the constant hum of coin changing hands.",
    href: "/beacon/south-main-street",
    available: true,
  },
  {
    id: "central-bowl-street",
    name: "Central Bowl Street",
    description: "Runs straight from the Dock Yard to Braver's Temple at the city's center. A wide median of wildflowers, iron benches, and lantern posts arching overhead.",
    href: "/beacon/central-bowl-street",
    available: true,
  },
  {
    id: "dock-row",
    name: "Dock Row",
    description: "Where the White Bay meets the city. Ships, sailors, fishmongers, and fog.",
    href: "/beacon/dock-row",
    available: false,
  },
  {
    id: "the-upper-ring",
    name: "The Upper Ring",
    description: "The wealthier tier of the city, carved into the higher crater walls. Government buildings, temples, and the homes of those who matter.",
    href: "/beacon/the-upper-ring",
    available: false,
  },
  {
    id: "the-bowl-flats",
    name: "The Bowl Flats",
    description: "The low ground at the crater's center. Markets, inns, and the kind of establishments that don't require a sign.",
    href: "/beacon/the-bowl-flats",
    available: false,
  },
];

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
          className="p-8 mb-12"
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

        {/* Entry Points */}
        <div className="mb-14">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Where does your party arrive?</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>Choose the entry point that matches your party&rsquo;s origin. Each begins a different path through Beacon.</p>
          <div className="flex flex-col gap-4">
            <NavCard
              href="/beacon/south-main-street"
              title="South Main Street"
              description="Arrived overland. The main gate into Beacon — merchant stalls, tradespeople, and the city opening up before you."
            />
            <NavCard
              href="/beacon/dock-yard"
              title="Beacon Dock Yard"
              description="Arrived by sea. The White Bay boardwalk — fishing crews, fog, and an information booth ready to welcome you to the city."
            />
          </div>
        </div>

        <div className="gold-divider" />

        {/* Streets */}
        <h2 className="text-xs uppercase tracking-widest mb-8 mt-10" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Districts &amp; Streets</h2>

        <div className="grid gap-4">
          {streets.map((street) =>
            street.available ? (
              <NavCard
                key={street.id}
                href={street.href}
                title={street.name}
                description={street.description}
              />
            ) : (
              <div
                key={street.id}
                className="p-6 flex items-center justify-between"
                style={{
                  background: "rgba(255,255,255,0.015)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  opacity: 0.4,
                }}
              >
                <div>
                  <h3 className="text-xl mb-1" style={{ color: "var(--parchment)" }}>{street.name}</h3>
                  <p className="text-sm" style={{ color: "var(--parchment)", opacity: 0.6 }}>{street.description}</p>
                </div>
                <span className="text-xs italic ml-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>soon</span>
              </div>
            )
          )}
        </div>
        {/* Fast Travel */}
        <div className="mt-16 pt-10" style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}>
          <h2 className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Fast Travel in Beacon</h2>
          <p className="text-sm italic mb-8" style={{ color: "#e88080", opacity: 0.85 }}>
            Skipping streets means skipping what happens on them. Random encounters, rare merchants, and moments of city life will not occur if you fast travel. Use these links when time in session is short — not as a default.
          </p>

          <div className="grid gap-4">
            <NavCard
              href="/beacon/main-street-intersection/hibernations"
              title="Hibernations"
              description="Inn & Eatery — Main Street Intersection"
            />
          </div>
        </div>

      </div>
    </main>
  );
}
