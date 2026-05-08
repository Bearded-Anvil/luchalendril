import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import DmPrivatePanel from "@/components/DmPrivatePanel";
import { whittledThings } from "@/data/whittled-things";

export default function WhittledThingsPage() {
  const v = whittledThings;

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "South Main Street", href: "/beacon/south-main-street" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>South Main Street</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
        </div>

        {/* Vendor Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "4/3", maxHeight: "520px" }}>
          <Image
            src={v.imageLarge}
            alt={v.name}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>

        <div className="gold-divider" />

        {/* Scene Description */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>
            Read to Players
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.88, fontStyle: "italic" }}>
            &ldquo;{v.sceneDescription}&rdquo;
          </p>
        </div>

        <div className="gold-divider" />

        {/* Owner */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>
            The Merchant
          </h2>
          <div
            className="p-6"
            style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}
          >
            <p className="text-base font-bold mb-1" style={{ color: "var(--gold-light)" }}>{v.owner.name}</p>
            <p className="text-xs mb-4" style={{ color: "var(--parchment)", opacity: 0.55 }}>
              {v.owner.race} &mdash; {v.owner.age}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.85 }}>
              {v.owner.appearance}
            </p>
          </div>
        </div>

        {/* DM Private Panel */}
        <DmPrivatePanel dm={v.dmPrivate} />

        <div className="gold-divider mt-10" />

        {/* Inventory */}
        <div className="mt-8">
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>
            Goods for Sale
          </h2>
          <div className="space-y-3">
            {v.inventory.map((item, i) => (
              <div
                key={i}
                className="flex items-start justify-between gap-6 px-5 py-4"
                style={{
                  background: i % 2 === 0 ? "rgba(201,168,76,0.03)" : "transparent",
                  border: "1px solid rgba(201,168,76,0.12)",
                }}
              >
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{item.name}</p>
                    <p className="text-sm font-bold whitespace-nowrap" style={{ color: "var(--gold)", minWidth: "3.5rem", textAlign: "right" }}>{item.price}</p>
                  </div>
                  <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--parchment)", opacity: 0.7 }}>{item.description}</p>
                  {"quote" in item && item.quote && (
                    <p className="text-xs leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.55 }}>
                      &ldquo;{item.quote}&rdquo;{"quoteNote" in item && item.quoteNote ? ` ${item.quoteNote}` : ""}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back link */}
        <div className="mt-12 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a
            href="/beacon/south-main-street"
            className="text-sm"
            style={{ color: "var(--gold)", textDecoration: "none", opacity: 0.7 }}
          >
            ← Back to South Main Street
          </a>
        </div>
      </div>
    </main>
  );
}
