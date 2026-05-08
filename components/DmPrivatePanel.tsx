"use client";

import { useState } from "react";
import { whittledThings } from "@/data/whittled-things";

type DmData = typeof whittledThings.dmPrivate;

export default function DmPrivatePanel({ dm }: { dm: DmData }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-3 px-6 text-sm font-bold tracking-widest uppercase transition-all duration-200"
        style={{
          background: open ? "rgba(139,26,26,0.3)" : "rgba(139,26,26,0.15)",
          border: "1px solid rgba(139,26,26,0.5)",
          color: "#e88080",
          cursor: "pointer",
          letterSpacing: "0.15em",
        }}
      >
        {open ? "▲ Close DM Notes" : "▼ DM Notes — Private"}
      </button>

      {open && (
        <div className="dm-private p-6 mt-0 space-y-5" style={{ borderTop: "none" }}>
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Personality</h4>
            <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{dm.personality}</p>
          </div>

          <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Desires</h4>
            <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{dm.desires}</p>
          </div>

          <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Fears</h4>
            <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{dm.fears}</p>
          </div>

          <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-2" style={{ color: "#e88080" }}>Quest Hooks</h4>
            {dm.questHooks.map((hook, i) => (
              <div key={i} className="mb-3">
                <p className="text-sm font-bold mb-1" style={{ color: "#e8c97a" }}>{hook.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--parchment)", opacity: 0.9 }}>{hook.description}</p>
              </div>
            ))}
          </div>

          <div className="gold-divider" style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.5), transparent)" }} />

          <div>
            <h4 className="text-xs uppercase tracking-widest mb-3" style={{ color: "#e88080" }}>Secret Inventory</h4>
            <p className="text-xs mb-3 italic" style={{ color: "var(--parchment)", opacity: 0.6 }}>
              Only offered to trusted customers. Never displayed openly.
            </p>
            {dm.secretItems.map((item, i) => (
              <div key={i} className="mb-4 pl-4" style={{ borderLeft: "2px solid rgba(139,26,26,0.4)" }}>
                <p className="text-sm font-bold" style={{ color: "#e8c97a" }}>{item.name} <span style={{ color: "#e88080" }}>— {item.price}</span></p>
                <p className="text-sm mt-1" style={{ color: "var(--parchment)", opacity: 0.85 }}>{item.description}</p>
                <p className="text-xs mt-1 italic" style={{ color: "var(--parchment)", opacity: 0.55 }}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
