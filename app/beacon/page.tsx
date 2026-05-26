import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

type MapZone = {
  label: string;
  href: string;
  left: string;
  top: string;
  width: string;
  height: string;
};

// Set to true to show all zones as visible gold boxes for calibration.
const DEBUG_ZONES = false;

// Zones calibrated to 1402 × 1122 source image.
// Each zone is sized to cover the text label on the map.
// left/width are % of image width; top/height are % of image height.
const mapZones: MapZone[] = [
  // ── Ring roads (curved text along the arc) ──────────────────────────────────
  { label: "N.W. Beacon St.", href: "/beacon/northwest-beacon-street",  left: "14%", top:  "7%", width: "16%", height: "4%" },
  { label: "N.E. Beacon St.", href: "/beacon/northeast-beacon-street",  left: "48%", top:  "6%", width: "17%", height: "4%" },
  { label: "S.W. Beacon St.", href: "/beacon/southwest-beacon-street",  left: "15%", top: "63%", width: "15%", height: "4%" },
  { label: "S.E. Beacon St.", href: "/beacon/southeast-beacon-street",  left: "44%", top: "62%", width: "15%", height: "4%" },

  // ── Entry roads ─────────────────────────────────────────────────────────────
  { label: "The Dockyard",     href: "/beacon/dock-yard",            left:  "7%", top: "35%", width:  "4%", height: "10%" },
  { label: "S. Main Street",   href: "/beacon/south-main-street",   left: "40%", top: "78%", width:  "7%", height:  "5%" },
  { label: "North Main Street",href: "/beacon/north-main-street",   left: "39%", top:  "2%", width:  "8%", height:  "5%" },

  // ── Upper interior ──────────────────────────────────────────────────────────
  { label: "Hattswain Pawn",        href: "/beacon/north-main-street-intersection/hattiswain-pawn", left: "37%", top: "11%", width:  "7%", height: "5%" },
  { label: "City Watch",            href: "/beacon/northeast-beacon-street/city-watch",              left: "48%", top: "11%", width:  "6%", height: "5%" },
  { label: "Warehouse District",    href: "/beacon/dock-yard/warehouse-district",                     left:  "9%", top: "15%", width:  "7%", height: "5%" },
  { label: "White Bay Navigators",  href: "/beacon/dock-yard/white-bay-navigators",                   left: "18%", top: "19%", width: "10%", height: "5%" },
  { label: "Beaver's Gate Brewery", href: "/beacon/central-bowl-street/bravers-gaze-brewery",         left: "31%", top: "19%", width: "10%", height: "5%" },
  { label: "Cordon's Clothiers",    href: "/beacon/temple-square/corduns-custom-clothier",             left: "47%", top: "19%", width:  "9%", height: "5%" },

  // ── Central band ────────────────────────────────────────────────────────────
  { label: "Central Bowl Street", href: "/beacon/central-bowl-street",                    left: "24%", top: "27%", width: "26%", height: "4%" },
  { label: "Temple Square",       href: "/beacon/temple-square",                          left: "59%", top: "28%", width: "10%", height: "4%" },

  // ── Mid-city buildings ───────────────────────────────────────────────────────
  { label: "City Watch Station", href: "/beacon/dock-yard/city-watch-station",        left: "23%", top: "35%", width: "6%", height: "5%" },
  { label: "Reel Works",         href: "/beacon/dock-yard/reel-works",                left: "30%", top: "36%", width: "6%", height: "5%" },
  { label: "Lighthouse Inn",     href: "/beacon/central-bowl-street/lighthouse-inn",  left: "37%", top: "36%", width: "8%", height: "4%" },
  { label: "Bowl Street Grocer", href: "/beacon/central-bowl-street/bowl-street-grocer", left: "45%", top: "37%", width: "7%", height: "6%" },
  { label: "Braver's Temple",    href: "/beacon/temple-square/bravers-temple",         left: "61%", top: "35%", width: "9%", height: "5%" },

  // ── Lower interior ───────────────────────────────────────────────────────────
  { label: "The Hook",        href: "/beacon/dock-yard/the-hook",                       left: "21%", top: "44%", width: "5%", height: "5%" },
  { label: "Saltwater Loaves",href: "/beacon/dock-yard/saltwater-loaves",               left:  "7%", top: "45%", width: "8%", height: "5%" },
  { label: "Roundabout Way",  href: "/beacon/temple-square/roundabout-way",             left: "54%", top: "44%", width: "9%", height: "5%" },
  { label: "Enchanted Steps", href: "/beacon/temple-square/enchanted-steps",            left: "67%", top: "49%", width: "8%", height: "5%" },
  { label: "Traveler's Nest", href: "/beacon/southwest-beacon-street/travelers-nest",   left: "31%", top: "53%", width: "8%", height: "5%" },
  { label: "Hibernations",    href: "/beacon/main-street-intersection/hibernations",    left: "39%", top: "54%", width: "9%", height: "4%" },
  { label: "Tinker Box",      href: "/beacon/southeast-beacon-street/tinker-box",       left: "56%", top: "52%", width: "6%", height: "5%" },

  // ── Saida's Arms (inside Temple Square ring road, east side) ─────────────────
  { label: "Saida's Arms & Armaments", href: "/beacon/temple-square/saidas-arms-and-armaments", left: "78%", top: "33%", width: "12%", height: "6%" },

  // ── Garden District (outside east wall) ────────────────────────────────────
  { label: "Garden District", href: "/beacon/garden-district",                  left: "81%", top: "20%", width: "10%", height: "5%" },
  { label: "Hubs & Hooves",   href: "/beacon/east-main-street/hubs-and-hooves", left: "80%", top: "26%", width:  "8%", height: "5%" },
  { label: "E. Main Street",  href: "/beacon/east-main-street",                  left: "80%", top: "38%", width:  "9%", height: "4%" },

  // ── Far left (Inkwell) ───────────────────────────────────────────────────────
  { label: "The Inkwell — Here & There Maps", href: "/beacon/dock-yard/here-and-there", left: "1%", top: "62%", width: "9%", height: "8%" },

  // ── South ────────────────────────────────────────────────────────────────────
  { label: "Iron End Forge",       href: "/beacon/southwest-beacon-street/irons-end-forge",     left: "18%", top: "77%", width: "8%", height: "5%" },
  { label: "Orphanage",            href: "/beacon/main-street-intersection/the-alley/orphanage",left: "74%", top: "78%", width: "7%", height: "4%" },
  { label: "Home Hearth District", href: "/beacon/home-hearth-district",                        left: "75%", top: "69%", width: "14%", height: "6%" },
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

        {/* Interactive Map */}
        <div className="mt-8 mb-12">
          <h2 className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Navigate Beacon</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>Click any location on the map to navigate there directly.</p>

          <div style={{ position: "relative" }} className="gold-border">
            <Image
              src="/map-of-beacon.jpg"
              alt="Map of Beacon"
              width={1402}
              height={1122}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
            {mapZones.map((zone) => (
              <Link
                key={zone.label}
                href={zone.href}
                className="map-zone"
                title={zone.label}
                style={{
                  left: zone.left,
                  top: zone.top,
                  width: zone.width,
                  height: zone.height,
                  ...(DEBUG_ZONES ? {
                    background: "rgba(201,168,76,0.35)",
                    boxShadow: "inset 0 0 0 1px rgba(201,168,76,0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    fontSize: "7px",
                    color: "#1a0f00",
                    fontWeight: "bold",
                    textAlign: "center",
                    lineHeight: "1.1",
                    padding: "1px",
                    textDecoration: "none",
                  } : {}),
                }}
              >
                {DEBUG_ZONES ? zone.label : null}
              </Link>
            ))}
          </div>
        </div>

        {/* Fast Travel */}
        <div className="mt-10 pt-10" style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}>
          <h2 className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Fast Travel in Beacon</h2>
          <p className="text-sm italic mb-8" style={{ color: "#e88080", opacity: 0.85 }}>
            Skipping streets means skipping what happens on them. Random encounters, rare merchants, and moments of city life will not occur if you fast travel. Use these links when time in session is short — not as a default.
          </p>

          <div className="grid gap-4">
            <Link
              href="/beacon/main-street-intersection/hibernations"
              style={{ textDecoration: "none", color: "var(--gold-light)", background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.3)", padding: "1.25rem 1.5rem", display: "block" }}
            >
              <span className="text-xs uppercase tracking-widest block mb-1" style={{ color: "var(--gold)", letterSpacing: "0.2em", fontSize: "0.65rem" }}>Main Street Intersection</span>
              <span className="text-xl">Hibernations</span>
              <span className="text-sm block mt-1" style={{ color: "var(--parchment)", opacity: 0.6 }}>Inn &amp; Eatery</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
