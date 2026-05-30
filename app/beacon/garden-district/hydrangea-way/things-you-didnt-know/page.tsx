"use client";

import { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { thingsYouDidntKnow } from "@/data/things-you-didnt-know";

type Book = typeof thingsYouDidntKnow.inventory[0];

function BookCard({ book }: { book: Book }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      background: "rgba(201,168,76,0.04)",
      border: "1px solid rgba(201,168,76,0.2)",
    }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-5 py-4 text-left"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <div className="flex items-start justify-between gap-4 mb-1">
          <p className="text-sm font-bold" style={{ color: "var(--gold-light)" }}>{book.name}</p>
          <div className="flex flex-col items-end gap-1 shrink-0">
            <p className="text-sm font-bold" style={{ color: "var(--gold)" }}>{book.price}</p>
            <p className="text-xs" style={{ color: "var(--parchment)", opacity: 0.35 }}>
              {book.nights === 1 ? "1 night to read" : `${book.nights} nights to read`}
            </p>
          </div>
        </div>
        <p className="text-xs italic mb-2" style={{ color: "var(--parchment)", opacity: 0.55 }}>{book.description}</p>
        <p className="text-xs" style={{ color: "var(--gold)", opacity: 0.5 }}>
          {open ? "▼ Hide chapters" : "▶ Show chapters"}
        </p>
      </button>

      {open && (
        <div className="px-5 pb-5 space-y-4" style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
          <p className="text-xs uppercase tracking-widest pt-4" style={{ color: "var(--gold)", opacity: 0.4, letterSpacing: "0.15em" }}>
            Chapters
          </p>
          {book.chapters.map((chapter) => (
            <div key={chapter.number} className="pl-4" style={{ borderLeft: "2px solid rgba(201,168,76,0.2)" }}>
              <p className="text-xs font-bold mb-1" style={{ color: "var(--gold)", opacity: 0.7 }}>
                Chapter {chapter.number}{"title" in chapter && chapter.title ? ` — ${chapter.title}` : ""}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>{chapter.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ThingsYouDidntKnowPage() {
  const [dmOpen, setDmOpen] = useState(false);
  const v = thingsYouDidntKnow;

  return (
    <main className="min-h-screen" style={{ background: "#0f0d0a" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Breadcrumb
          crumbs={[
            { label: "Luchalendril", href: "/" },
            { label: "Beacon", href: "/beacon" },
            { label: "Garden District", href: "/beacon/garden-district" },
            { label: "Hydrangea Way", href: "/beacon/garden-district/hydrangea-way" },
            { label: v.name },
          ]}
        />

        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--gold)", letterSpacing: "0.25em" }}>Hydrangea Way — Garden District</p>
          <h1 className="text-4xl md:text-6xl" style={{ color: "var(--gold-light)", letterSpacing: "0.06em" }}>{v.name}</h1>
          <p className="text-xs italic mt-2" style={{ color: "var(--parchment)", opacity: 0.4 }}>{v.tagline}</p>
        </div>

        {/* Image */}
        <div className="relative w-full mb-10 gold-border overflow-hidden" style={{ aspectRatio: "16/9", maxHeight: "540px" }}>
          <Image src={v.image} alt={v.name} fill style={{ objectFit: "cover", objectPosition: "center top" }} priority />
        </div>

        <div className="gold-divider" />

        {/* Scene Description */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Read to Players</h2>
          {v.sceneDescription.split("\n\n").map((paragraph, i, arr) => {
            const isSign = paragraph.startsWith("Knowledge is Power.");
            if (isSign) {
              const lines = paragraph.split("\n");
              return (
                <div key={i} className="my-6 px-8 py-5 text-center" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.25)" }}>
                  {lines.map((line, j) => (
                    <p key={j} className="text-sm italic leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.8 }}>{line}</p>
                  ))}
                </div>
              );
            }
            return (
              <p key={i} className="text-sm leading-relaxed italic mb-4" style={{ color: "var(--parchment)", opacity: 0.88 }}>
                {i === 0 ? <>&ldquo;{paragraph}</> : paragraph}
                {i === arr.length - 1 ? <>&rdquo;</> : ""}
              </p>
            );
          })}
        </div>

        <div className="gold-divider" />

        {/* Signs */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Signs</h2>
          <div className="space-y-3">
            {v.signs.map((sign, i) => (
              <div key={i} className="px-5 py-3 text-center" style={{ background: "rgba(201,168,76,0.04)", border: "1px solid rgba(201,168,76,0.18)" }}>
                <p className="text-sm italic" style={{ color: "var(--parchment)", opacity: 0.7 }}>{sign}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="gold-divider" />

        {/* Owner */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Owner</h2>
          <div className="px-6 py-5" style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.25)" }}>
            <div className="flex items-baseline gap-3 mb-2">
              <p className="text-lg font-bold" style={{ color: "var(--gold-light)" }}>{v.owner.name}</p>
              <p className="text-xs" style={{ color: "var(--gold)", opacity: 0.5 }}>{v.owner.race}</p>
            </div>
            <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--parchment)", opacity: 0.8 }}>{v.owner.appearance}</p>
            <p className="text-sm leading-relaxed italic" style={{ color: "var(--parchment)", opacity: 0.6 }}>{v.owner.personality}</p>
          </div>
        </div>

        <div className="gold-divider" />

        {/* Inventory */}
        <div className="mt-8 mb-10">
          <h2 className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)", letterSpacing: "0.2em" }}>Books for Sale</h2>
          <p className="text-xs italic mb-2" style={{ color: "var(--parchment)", opacity: 0.4 }}>{v.dmNote}</p>
          <p className="text-xs italic mb-6" style={{ color: "var(--parchment)", opacity: 0.3 }}>Select a title to read its chapters.</p>
          <div className="space-y-3">
            {v.inventory.map((book, i) => (
              <BookCard key={i} book={book} />
            ))}
          </div>
        </div>

        <div className="gold-divider" />

        {/* DM Toggle */}
        <div className="mt-8 mb-10">
          <button
            onClick={() => setDmOpen(!dmOpen)}
            className="text-xs uppercase tracking-widest mb-4 flex items-center gap-2"
            style={{ color: "#e88080", letterSpacing: "0.2em", background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <span>{dmOpen ? "▼" : "▶"}</span>
            <span>DM Private</span>
          </button>

          {dmOpen && (
            <div className="px-6 py-5 space-y-5" style={{ background: "rgba(139,26,26,0.08)", border: "1px solid rgba(139,26,26,0.25)" }}>

              <div>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>What He Fears</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>{v.owner.dmPrivate.fears}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080", opacity: 0.7, letterSpacing: "0.15em" }}>Quest Hook</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.75 }}>{v.owner.dmPrivate.questHook}</p>
              </div>

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <a href="/beacon/garden-district/hydrangea-way" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "1rem", fontWeight: "700", border: "1px solid rgba(201,168,76,0.4)", padding: "0.5rem 1.1rem", display: "inline-block" }}>
            ← Hydrangea Way
          </a>
        </div>
      </div>
    </main>
  );
}
