import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="text-sm mb-6" style={{ color: "var(--gold-light)", opacity: 0.8 }}>
      {crumbs.map((crumb, i) => (
        <span key={i}>
          {i > 0 && <span className="mx-2" style={{ color: "var(--gold)", opacity: 0.5 }}>›</span>}
          {crumb.href ? (
            <Link
              href={crumb.href}
              className="hover:opacity-100 transition-opacity"
              style={{ color: "var(--gold-light)", textDecoration: "none" }}
            >
              {crumb.label}
            </Link>
          ) : (
            <span style={{ color: "var(--parchment)" }}>{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
