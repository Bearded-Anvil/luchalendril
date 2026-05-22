import Breadcrumb from "@/components/Breadcrumb";

export default function HubsAndHoovesPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "East Main Street", href: "/beacon/east-main-street" },
            { label: "Offices of Hubs and Hooves" },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>East Main Street</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>Offices of Hubs and Hooves</h1>
        </div>

        <div className="p-10 text-center" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.15)" }}>
          <p className="text-sm italic" style={{ color: "var(--parchment)", opacity: 0.4 }}>This location is being built out. Check back soon.</p>
        </div>

        <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/east-main-street" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Back to East Main Street
          </a>
        </div>
      </div>
    </main>
  );
}
