import Breadcrumb from "@/components/Breadcrumb";
import { beaconGovernment } from "@/data/beacon-government";

export default function BeaconGovernmentPage() {
  const v = beaconGovernment;

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Beacon</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
        </div>

        <div className="gold-divider" />

        {/* Overview */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Overview</h2>
          {v.overview.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-sm leading-relaxed mb-4 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.85 }}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* DM Note */}
        <div className="mb-10">
          <div className="p-6" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.3)" }}>
            <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "#e88080", letterSpacing: "0.2em" }}>DM Notes</h2>
            {v.dmNote.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "var(--parchment)", opacity: 0.8 }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="gold-divider" />

        {/* Grand Magister */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Grand Magister of Law</h2>
          <a href={v.grandMagister.path} style={{ textDecoration: "none", display: "block" }}>
            <div className="p-6 flex items-center justify-between" style={{
              background: "rgba(201,168,76,0.05)",
              border: "1px solid rgba(201,168,76,0.4)",
            }}>
              <div>
                <p className="text-xl mb-1" style={{ color: "var(--gold-light)" }}>{v.grandMagister.name}</p>
                <p className="text-xs uppercase tracking-widest" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.15em" }}>{v.grandMagister.title}</p>
              </div>
              <span className="text-2xl ml-6 shrink-0" style={{ color: "var(--gold)", opacity: 0.5 }}>›</span>
            </div>
          </a>
        </div>

        <div className="gold-divider" />

        {/* The Council */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>The Council</h2>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.4 }}>Nine seats. Nine domains.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {v.council.map((member, i) =>
              member.status === "live" && member.path ? (
                <a key={i} href={member.path} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <div className="px-5 py-4 flex flex-col" style={{
                    border: "1px solid rgba(201,168,76,0.35)",
                    background: "rgba(201,168,76,0.05)",
                    height: "100%",
                  }}>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.5, letterSpacing: "0.12em" }}>{member.seat}</p>
                    <p className="text-sm font-bold flex-1" style={{ color: "var(--gold-light)" }}>{member.name}</p>
                    <p className="text-xs mt-2" style={{ color: "var(--gold)", opacity: 0.6 }}>View →</p>
                  </div>
                </a>
              ) : (
                <div key={i} className="px-5 py-4 flex flex-col" style={{
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.015)",
                  opacity: 0.4,
                  height: "100%",
                }}>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.5, letterSpacing: "0.12em" }}>{member.seat}</p>
                  <p className="text-sm font-bold flex-1" style={{ color: "var(--parchment)" }}>{member.name || "—"}</p>
                  <p className="text-xs italic mt-2" style={{ color: "var(--parchment)", opacity: 0.35 }}>Coming soon</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            Map of Beacon
          </a>
        </div>
      </div>
    </main>
  );
}
