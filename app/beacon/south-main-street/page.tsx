import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import VendorNav from "@/components/VendorNav";
import { southMainStreet } from "@/data/south-main-street";

export default function SouthMainStreetPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: southMainStreet.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Beacon</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>
            {southMainStreet.name}
          </h1>
        </div>

        {/* Street Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image
            src={southMainStreet.image}
            alt={southMainStreet.name}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <div className="gold-divider" />

        <div className="grid md:grid-cols-2 gap-10 mt-8">
          {/* Scene Description */}
          <div>
            <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>
              Read to Players
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.88, fontStyle: "italic" }}>
              &ldquo;{southMainStreet.description}&rdquo;
            </p>
          </div>

          {/* DM Notes */}
          <div
            className="p-6"
            style={{
              background: "rgba(139,26,26,0.08)",
              border: "1px solid rgba(139,26,26,0.3)",
            }}
          >
            <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "#e88080", letterSpacing: "0.2em" }}>
              DM Notes
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.8 }}>
              {southMainStreet.dmNotes}
            </p>
          </div>
        </div>

        <div className="gold-divider mt-10" />

        {/* Vendor Navigation */}
        <div className="mt-8">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>
            Vendors on This Street
          </h2>
          <VendorNav vendors={southMainStreet.vendors} />
        </div>
      </div>
    </main>
  );
}
