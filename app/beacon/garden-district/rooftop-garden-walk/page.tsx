import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { rooftopGardenWalk } from "@/data/rooftop-garden-walk";

function WalkSection({ title, subtitle, description, image, imageAlt, imageAspect = "16/9", imagePosition = "center top" }: {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  imageAspect?: string;
  imagePosition?: string;
}) {
  return (
    <div className="mt-8 mb-10">
      <h2 className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>{title}</h2>
      {subtitle && <p className="text-xs italic mb-4" style={{ color: "var(--parchment)", opacity: 0.35 }}>{subtitle}</p>}
      {description.split("\n\n").map((paragraph, i, arr) => (
        <p key={i} className="text-sm leading-relaxed italic mb-4" style={{ color: "var(--parchment)", opacity: 0.88 }}>
          {i === 0 ? <>&ldquo;{paragraph}</> : paragraph}
          {i === arr.length - 1 ? <>&rdquo;</> : ""}
        </p>
      ))}
      <div className="relative w-full mt-6 gold-border overflow-hidden" style={{ aspectRatio: imageAspect, maxHeight: "540px" }}>
        <Image src={image} alt={imageAlt} fill style={{ objectFit: "cover", objectPosition: imagePosition }} />
      </div>
    </div>
  );
}

export default function RooftopGardenWalkPage() {
  const v = rooftopGardenWalk;

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "Garden District", href: "/beacon/garden-district" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Garden District</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
          <p className="text-xs italic mt-2" style={{ color: "var(--parchment)", opacity: 0.4 }}>{v.tagline}</p>
        </div>

        <div className="gold-divider" />

        {/* Scene 1 — The Walk */}
        <WalkSection
          title="Read to Players"
          description={v.sceneDescription}
          image={v.image}
          imageAlt="Rooftop Garden Walk"
        />

        <div className="gold-divider" />

        {/* Scene 2 — Above the Amphitheater */}
        <WalkSection
          title="Above the Amphitheater"
          subtitle="Read when players reach the halfway point of the walk."
          description={v.amphitheaterView.description}
          image={v.amphitheaterView.image}
          imageAlt="PrimRose Amphitheater from above"
        />

        <div className="gold-divider" />

        {/* Scene 3 — Atop The Drunken Giant */}
        <WalkSection
          title="Atop The Drunken Giant"
          subtitle="Read when players reach the stairs beyond the amphitheater."
          description={v.rooftopCrossing.description}
          image={v.rooftopCrossing.image}
          imageAlt="The Drunken Giant exterior"
        />

        <div className="gold-divider" />

        {/* Scene 4 — The Hallway */}
        <WalkSection
          title="End of the Walk"
          subtitle="Read when players step through the door at the bottom of the stairs."
          description={v.walkFinal.description}
          image={v.walkFinal.image}
          imageAlt="The Giant's Hallway"
          imageAspect="4/3"
          imagePosition="center bottom"
        />

        <div className="gold-divider" />

        {/* DM Notes */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>DM Notes</h2>
          <div className="px-6 py-5" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.18)" }}>
            {v.dmNotes.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.75 }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/garden-district/rose-vine-view" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            Exit to Rose Vine View →
          </a>
        </div>
      </div>
    </main>
  );
}
