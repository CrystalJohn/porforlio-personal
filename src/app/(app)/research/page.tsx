import type { Metadata } from "next";
import { reports } from "@/lib/research-data";

export const metadata: Metadata = {
  title: "AI Researcher",
  description: "Tech intelligence reports — phân tích công nghệ, tools, và trends cho frontend developers.",
};

const COMING_SOON = [
  "React 19 vs Vue 4 — Framework Wars 2026",
  "CSS 2026 — Container Queries & Scroll-driven Animations",
];

export default function ResearchPage() {
  const statItems = [
    { label: "Reports", value: String(reports.length) },
    { label: "Topics covered", value: "6+" },
    { label: "Next report", value: "React 19 vs Vue 4" },
  ];

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
        .research-card {
          background: #f2f3f5;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          min-height: 220px;
          border: 1px solid transparent;
          transition: all 0.2s ease;
          cursor: pointer;
          text-decoration: none;
          color: #16191f;
        }
        .research-card:hover {
          background: #ffffff;
          box-shadow: 0 0 0 2px #00a1c9, 0 0 24px rgba(0,161,201,0.25);
          transform: translateY(-2px);
        }
        .research-card-soon {
          background: #f2f3f5;
          border-radius: 16px;
          padding: 24px;
          min-height: 160px;
          border: 1.5px dashed #d5dbdb;
          opacity: 0.55;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .aws-tag {
          display: inline-block;
          padding: 3px 8px;
          background: #ffffff;
          border: 1px solid #d5dbdb;
          border-radius: 4px;
          font-size: 10px;
          font-family: var(--font-dm-mono, monospace);
          color: #545b64;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .info-box {
          background: #e6f6fa;
          border-left: 3px solid #00a1c9;
          border-radius: 0 12px 12px 0;
          padding: 18px 22px;
          margin-top: 40px;
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .research-section { animation: fadeSlideIn 0.3s ease forwards; }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <div style={{ marginBottom: 36 }} className="research-section">
          <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#545b64", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
            01 · AI Researcher
          </div>
          <h1 style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 12, color: "#16191f" }}>
            Intelligence Reports
          </h1>
          <p style={{ fontSize: 16, color: "#545b64", maxWidth: 560, lineHeight: 1.6 }}>
            Tổng hợp, phân tích, và so sánh các công nghệ mới cho frontend developers.
            Mỗi report = 1 deep dive có code, comparison table, anti-patterns, và vocab boost.
          </p>
        </div>

        {/* Stats bar */}
        <div
          className="research-section"
          style={{ display: "flex", gap: 40, flexWrap: "wrap", marginBottom: 36, paddingBottom: 28, borderBottom: "1px solid #eaeded", animationDelay: "0.05s" }}
        >
          {statItems.map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: 26, fontWeight: 800, color: "#16191f", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#545b64", letterSpacing: "0.06em", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filter bar */}
        <div
          className="research-section"
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
            <span style={{ fontSize: 14 }}>Search reports...</span>
          </div>
        </div>

        {/* Reports grid */}
        <div
          className="research-section"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20, marginBottom: 48, animationDelay: "0.1s" }}
        >
          {reports.map((r) => (
            <div key={r.slug} className="research-card">
              {/* Top tag */}
              <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                <span className="aws-tag">{r.readingTime}</span>
                <span className="aws-tag" style={{ background: "#e6f6fa", color: "#00a1c9", border: "1px solid #b3e4f1" }}>
                  Published
                </span>
              </div>

              {/* Title */}
              <div style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: 18, fontWeight: 700, marginBottom: 10, lineHeight: 1.3, color: "#16191f", flex: 1 }}>
                {r.title}
              </div>

              {/* Summary */}
              <div style={{ fontSize: 13, color: "#545b64", lineHeight: 1.6, marginBottom: 16 }}>
                {r.summary}
              </div>

              {/* Footer */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #eaeded", paddingTop: 14 }}>
                <span style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#545b64" }}>{r.date}</span>
                <span style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 13, fontWeight: 700, color: "#16191f", display: "flex", alignItems: "center", gap: 4 }}>
                  Read more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}

          {/* Coming soon */}
          {COMING_SOON.map((title) => (
            <div key={title} className="research-card-soon">
              <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 10, color: "#e65100", background: "#fff3e0", border: "1px solid #ffe0b2", padding: "3px 8px", borderRadius: 4, display: "inline-block", marginBottom: 12, letterSpacing: "0.08em" }}>
                UPCOMING
              </div>
              <div style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: 17, fontWeight: 700, color: "#545b64", lineHeight: 1.3 }}>{title}</div>
            </div>
          ))}
        </div>

        {/* Info box */}
        <div className="info-box research-section" style={{ animationDelay: "0.15s" }}>
          <strong style={{ display: "block", fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#00a1c9", letterSpacing: "0.06em", marginBottom: 8, textTransform: "uppercase" }}>
            📌 Research Format
          </strong>
          <p style={{ fontSize: 14, color: "#545b64", lineHeight: 1.7 }}>
            Mỗi report gồm: Mental Model → Code Examples → Production Rules → Anti-patterns → Tool Comparison → Vocab Boost (5 từ tiếng Anh chuyên ngành).
            Mục tiêu: đọc xong là dùng được ngay.
          </p>
        </div>

      </div>
    </div>
  );
}
