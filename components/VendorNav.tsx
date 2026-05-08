"use client";

import { useRouter } from "next/navigation";

interface Vendor {
  id: string;
  name: string;
  description: string;
  path: string;
  comingSoon?: boolean;
}

export default function VendorNav({ vendors }: { vendors: Vendor[] }) {
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    if (value) router.push(value);
  }

  return (
    <div className="mt-8">
      <label
        className="block text-xs uppercase tracking-widest mb-3"
        style={{ color: "var(--gold)", letterSpacing: "0.15em" }}
      >
        Where would you like to go?
      </label>
      <select
        onChange={handleChange}
        defaultValue=""
        className="w-full md:w-auto text-sm py-3 px-4 min-w-64"
      >
        <option value="" disabled>— Choose a vendor —</option>
        {vendors.map((v) => (
          <option key={v.id} value={v.comingSoon ? "" : v.path} disabled={!!v.comingSoon}>
            {v.name}{v.comingSoon ? " (Coming Soon)" : ""}
          </option>
        ))}
      </select>

      <div className="mt-6 space-y-2">
        {vendors.map((v) => (
          <div
            key={v.id}
            className="flex items-start gap-3 text-sm"
            style={{ opacity: v.comingSoon ? 0.45 : 1 }}
          >
            <span style={{ color: "var(--gold)", minWidth: "1rem" }}>›</span>
            <div>
              <span style={{ color: v.comingSoon ? "var(--parchment)" : "var(--gold-light)" }}>
                {v.name}
              </span>
              <span className="ml-2 text-xs" style={{ color: "var(--parchment)", opacity: 0.6 }}>
                — {v.description}
              </span>
              {v.comingSoon && (
                <span className="ml-2 text-xs italic" style={{ color: "var(--gold)", opacity: 0.5 }}>
                  (coming soon)
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
