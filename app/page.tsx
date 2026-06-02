import NavCard from "@/components/NavCard";

const cities = [
  {
    id: "beacon",
    name: "Beacon",
    region: "Braver's Bowl",
    description: "A city built into the slopes of a three-sided crater, its fourth wall open to the White Bay. Beacon is a city of trade, secrets, and fog-shrouded opportunity.",
    href: "/beacon",
    available: true,
  },
  {
    id: "pine-loft",
    name: "Pine Loft",
    region: "The Southern Road",
    description: "A quiet working town at the edge of the forest, one day's travel south of Beacon. Smaller, slower, and closer to the treeline — a good place to start a campaign that begins away from the city.",
    href: "/pine-loft",
    available: true,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      {/* Header */}
      <div className="text-center py-20 px-6" style={{ borderBottom: "1px solid rgba(201,168,76,0.2)" }}>
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.3em" }}>
          A World for Adventurers
        </p>
        <h1
          className="text-6xl md:text-8xl mb-6"
          style={{ color: "var(--gold-light)", textShadow: "0 0 40px rgba(201,168,76,0.3)", letterSpacing: "0.1em" }}
        >
          Luchalendril
        </h1>
        <div className="gold-divider max-w-md mx-auto" />
        <p className="text-lg max-w-2xl mx-auto mt-6 leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>
          An original campaign world built for Dungeon Masters. Every city, every street, every shop, and every soul — fully detailed and ready to play.
        </p>
      </div>

      {/* Cities */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-xs uppercase tracking-widest mb-10 text-center" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>
          Cities &amp; Settlements
        </h2>

        <div className="grid gap-6">
          {cities.map((city) =>
            city.available ? (
              <NavCard
                key={city.id}
                href={city.href}
                eyebrow={city.region}
                title={city.name}
                description={city.description}
              />
            ) : (
              <div
                key={city.id}
                className="p-8"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  opacity: 0.4,
                }}
              >
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--parchment)", opacity: 0.5 }}>{city.region}</p>
                <h3 className="text-3xl mb-2" style={{ color: "var(--parchment)" }}>{city.name}</h3>
                <p className="text-xs italic" style={{ color: "var(--parchment)", opacity: 0.5 }}>Coming soon</p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-12 px-6" style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
        <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.3, letterSpacing: "0.1em" }}>
          LUCHALENDRIL &mdash; An Original Campaign World
        </p>
      </div>
    </main>
  );
}
