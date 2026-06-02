import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { lighthouseUpperLanding } from "@/data/lighthouse-upper-landing";

export default function LighthouseUpperLandingPage() {
  const v = lighthouseUpperLanding;

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "Beacon Lighthouse", href: "/beacon/lighthouse" },
            { label: "Lighthouse Interior", href: "/beacon/lighthouse/interior" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Beacon</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>
            {v.name}
          </h1>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "4/3", maxHeight: "620px" }}>
          <Image
            src={v.image}
            alt={v.name}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
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
              &ldquo;{v.description}&rdquo;
            </p>
          </div>

          {/* DM Notes */}
          <div className="p-6" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.3)" }}>
            <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "#e88080", letterSpacing: "0.2em" }}>
              DM Notes
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.8 }}>
              {v.dmNotes}
            </p>
            <p className="text-sm leading-relaxed mt-4" style={{ color: "var(--parchment)", opacity: 0.8 }}>
              &bull;&nbsp;&nbsp;{v.dmNotesBullet}
            </p>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="mt-16 pt-8" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/lighthouse/interior" style={{ textDecoration: "none" }}>
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.4, letterSpacing: "0.15em" }}>Descend</p>
            <p style={{ color: "var(--gold)", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>← Lighthouse Interior</p>
          </a>
        </div>
      </div>
    </main>
  );
}
