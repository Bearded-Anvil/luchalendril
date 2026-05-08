"use client";

import Link from "next/link";

interface NavCardProps {
  href: string;
  eyebrow?: string;
  title: string;
  description: string;
}

export default function NavCard({ href, eyebrow, title, description }: NavCardProps) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <div
        className="p-6 md:p-8 transition-all duration-300 cursor-pointer flex items-center justify-between"
        style={{
          background: "rgba(201,168,76,0.04)",
          border: "1px solid rgba(201,168,76,0.3)",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = "rgba(201,168,76,0.09)")}
        onMouseLeave={e => (e.currentTarget.style.background = "rgba(201,168,76,0.04)")}
      >
        <div>
          {eyebrow && (
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", opacity: 0.7, letterSpacing: "0.2em" }}>
              {eyebrow}
            </p>
          )}
          <h3 className="text-xl md:text-3xl mb-2" style={{ color: "var(--gold-light)" }}>{title}</h3>
          <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--parchment)", opacity: 0.75 }}>{description}</p>
        </div>
        <span className="text-2xl ml-6" style={{ color: "var(--gold)", opacity: 0.5 }}>›</span>
      </div>
    </Link>
  );
}
