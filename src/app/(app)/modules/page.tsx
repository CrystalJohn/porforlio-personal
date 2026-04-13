import type { Metadata } from "next";
import { MODULES } from "@/lib/modules";

export const metadata: Metadata = {
  title: "Modules",
  description: "Learning modules migrated from Intelligence Report",
};

// Map CSS var accent names to real hex for AWS palette consistency
const ACCENT_MAP: Record<string, { hex: string; bg: string; border: string }> = {
  "var(--accent-claude)": { hex: "#8b5cf6", bg: "#f3f0ff", border: "#c4b5fd" },
  "var(--accent-amber)":  { hex: "#ff9900", bg: "#fff3cd", border: "#ffd966" },
  "var(--accent-green)":  { hex: "#1d8102", bg: "#e6f4ea", border: "#a3d9a5" },
  "var(--accent-blue)":   { hex: "#00a1c9", bg: "#e6f6fa", border: "#b3e4f1" },
  "var(--accent-purple)": { hex: "#7c3aed", bg: "#ede9fe", border: "#c4b5fd" },
};

function resolveAccent(accent: string) {
  return ACCENT_MAP[accent] ?? { hex: "#545b64", bg: "#f2f3f5", border: "#d5dbdb" };
}

export default function ModulesPage() {
  return (
    <div
      className="animate-fade-in"
      style={{
        background: "#ffffff",
        color: "#16191f",
        minHeight: "100vh",
        paddingTop: 104,
        paddingBottom: 64,
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        width: "100vw",
        marginTop: -104,
      }}
    >
      <style>{`
        .module-card {
          background: #f2f3f5;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid transparent;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 220px;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .module-card:hover {
          background: #ffffff;
          box-shadow: 0 0 0 2px #00a1c9, 0 0 24px rgba(0,161,201,0.25);
          transform: translateY(-2px);
        }
        .module-card .accent-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 16px 16px 0 0;
        }
        .module-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin-bottom: 16px;
          margin-top: 8px;
        }
        .module-card:hover .module-btn {
          border-color: #00a1c9;
          color: #00a1c9;
          background: #e6f6fa;
        }
        .module-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #d5dbdb;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #545b64;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .modules-section { animation: fadeSlideIn 0.3s ease forwards; }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <div style={{ marginBottom: 36 }} className="modules-section">
          <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#545b64", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
            02 · Modules
          </div>
          <h1 style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 12, color: "#16191f" }}>
            Learning Modules
          </h1>
          <p style={{ fontSize: 16, color: "#545b64", maxWidth: 540, lineHeight: 1.6 }}>
            Structured content modules — migrated từ Intelligence Report, expand dần theo daily upgrades.
          </p>
        </div>

        {/* Stats bar */}
        <div
          className="modules-section"
          style={{ display: "flex", gap: 40, flexWrap: "wrap", marginBottom: 32, paddingBottom: 24, borderBottom: "1px solid #eaeded", animationDelay: "0.05s" }}
        >
          {[
            { label: "Total Modules", value: String(MODULES.length) },
            { label: "Available", value: String(MODULES.filter(m => m.status === "available").length) },
            { label: "Coming Soon", value: String(MODULES.filter(m => m.status !== "available").length) },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: 26, fontWeight: 800, color: "#16191f", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#545b64", letterSpacing: "0.06em", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filter bar */}
        <div
          className="modules-section"
          style={{ display: "flex", gap: 16, marginBottom: 32, animationDelay: "0.08s" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", border: "1px solid #545b64", borderRadius: 20, fontSize: 14, fontWeight: 700, cursor: "pointer", color: "#16191f" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M6 12h12m-9 6h6" />
            </svg>
            Filter
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", border: "1px solid #eaeded", borderRadius: 4, flex: 1, color: "#545b64" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span style={{ fontSize: 14 }}>Search modules...</span>
          </div>
        </div>

        {/* Modules count */}
        <div
          className="modules-section"
          style={{ fontSize: 13, color: "#545b64", fontFamily: "var(--font-dm-mono, monospace)", fontWeight: 700, marginBottom: 16, animationDelay: "0.08s" }}
        >
          All modules — {MODULES.length} items
        </div>

        {/* Module cards grid */}
        <div
          className="modules-section"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20, animationDelay: "0.1s" }}
        >
          {MODULES.map((mod) => {
            const resolved = resolveAccent(mod.accent);
            const isAvailable = mod.status === "available";
            return (
              <div key={mod.slug} className="module-card">
                {/* Accent bar */}
                <div className="accent-bar" style={{ background: resolved.hex }} />

                {/* Icon */}
                <div
                  className="module-icon-wrap"
                  style={{ background: resolved.bg, border: `1px solid ${resolved.border}` }}
                >
                  {mod.icon}
                </div>

                {/* Num */}
                <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#545b64", marginBottom: 6, letterSpacing: "0.06em" }}>
                  {mod.num}
                </div>

                {/* Title */}
                <div style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: 18, fontWeight: 700, marginBottom: 8, color: "#16191f", letterSpacing: "-0.01em" }}>
                  {mod.title}
                </div>

                {/* Description */}
                <div style={{ fontSize: 13, color: "#545b64", lineHeight: 1.6, flex: 1, marginBottom: 16 }}>
                  {mod.description}
                </div>

                {/* Footer */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{
                    fontFamily: "var(--font-dm-mono, monospace)", fontSize: 10, fontWeight: 700,
                    color: isAvailable ? resolved.hex : "#e65100",
                    background: isAvailable ? resolved.bg : "#fff3e0",
                    border: `1px solid ${isAvailable ? resolved.border : "#ffe0b2"}`,
                    padding: "3px 10px", borderRadius: 4, textTransform: "uppercase", letterSpacing: "0.06em"
                  }}>
                    {isAvailable ? "Available" : "Coming Soon"}
                  </span>
                  <div className="module-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
