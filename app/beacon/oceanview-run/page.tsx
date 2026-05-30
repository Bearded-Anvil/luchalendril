import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { oceanviewRun } from "@/data/oceanview-run";

export default function OceanviewRunPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: oceanviewRun.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Beacon</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>
            {oceanviewRun.name}
          </h1>
        </div>

        {/* Road Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image
            src={oceanviewRun.image}
            alt={oceanviewRun.name}
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
              &ldquo;{oceanviewRun.description}&rdquo;
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
              {oceanviewRun.dmNotes}
            </p>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="mt-16 pt-8 flex items-center justify-between" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/south-main-street" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← South Main Street
          </a>
          <a href="/beacon" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            Beacon
          </a>
        </div>
      </div>
    </main>
  );
}
