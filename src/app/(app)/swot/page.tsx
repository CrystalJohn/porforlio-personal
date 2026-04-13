import type { Metadata } from "next";

export const metadata: Metadata = { title: "SWOT Board", description: "Personal SWOT analysis for career planning" };

const SAMPLE_SWOT = {
  strengths: ["Đang học AI Tooling trước peers", "Production mindset sớm", "Chủ động build portfolio", "Biết dùng Claude Code & Vercel"],
  weaknesses: ["CSS fundamentals cần strengthen", "Chưa có React project thực tế", "English technical reading còn chậm", "Chưa quen Agile workflow"],
  opportunities: ["AI Tooling demand cao 2026", "Next.js + Vercel là stack hot nhất", "Open source contribution", "Fresher với portfolio nổi bật"],
  threats: ["Nhiều fresher có cùng stack", "Tool changes nhanh", "Interview còn hỏi JS fundamentals", "Shallow knowledge = không debug được"],
};

const QUADRANT = [
  { key: "strengths" as const, label: "Strengths", icon: "🟢", color: "var(--accent-green)", bg: "rgba(62,207,142,0.05)", border: "rgba(62,207,142,0.2)", desc: "Tôi giỏi gì?" },
  { key: "weaknesses" as const, label: "Weaknesses", icon: "🔴", color: "#f87171", bg: "rgba(248,113,113,0.05)", border: "rgba(248,113,113,0.2)", desc: "Tôi yếu gì?" },
  { key: "opportunities" as const, label: "Opportunities", icon: "🟡", color: "var(--accent-amber)", bg: "rgba(240,180,41,0.05)", border: "rgba(240,180,41,0.2)", desc: "Cơ hội nào?" },
  { key: "threats" as const, label: "Threats", icon: "⚫", color: "var(--muted)", bg: "rgba(122,122,140,0.05)", border: "rgba(122,122,140,0.2)", desc: "Rủi ro gì?" },
];

export default function SwotPage() {
  return (
    <div className="animate-fade-in" style={{ padding: "48px 32px", maxWidth: 1000 }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>05 · SWOT Board</div>
        <h1 style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 12 }}>Personal SWOT</h1>
        <p style={{ fontSize: 15, color: "var(--muted)", fontWeight: 300, maxWidth: 560 }}>
          Framework phân tích bản thân. Cập nhật mỗi 30 ngày để track growth.
          <br />Date: 30 Mar 2026 — D0 Baseline Assessment
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 40 }}>
        {QUADRANT.map((q) => (
          <div key={q.key} style={{ background: q.bg, border: `1px solid ${q.border}`, borderRadius: 12, padding: 24 }}>
            <div className="flex items-center gap-3" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 20 }}>{q.icon}</span>
              <div>
                <div style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: 17, fontWeight: 700, color: q.color }}>{q.label}</div>
                <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 10, color: "var(--muted)" }}>{q.desc}</div>
              </div>
            </div>
            <ul style={{ listStyle: "none" }}>
              {SAMPLE_SWOT[q.key].map((item, i) => (
                <li key={i} className="flex gap-3" style={{ marginBottom: 8, fontSize: 13, color: "var(--muted)", fontWeight: 300 }}>
                  <span style={{ color: q.color, fontFamily: "var(--font-dm-mono, monospace)", flexShrink: 0 }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Strategy box */}
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 24, marginBottom: 24 }}>
        <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>�� Strategy — Từ SWOT → Action</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[
            { label: "Leverage (S + O)", desc: "Dùng AI Tooling skills → đóng góp vào AI-first projects", color: "var(--accent-green)" },
            { label: "Defend (S + T)", desc: "Build fundamentals mạnh → vượt qua phỏng vấn kỹ thuật", color: "var(--accent-blue)" },
            { label: "Improve (W + O)", desc: "Practice React qua project thực tế portfolio này", color: "var(--accent-amber)" },
            { label: "Avoid (W + T)", desc: "Không skip JS fundamentals để chase tools mới", color: "#f87171" },
          ].map((s) => (
            <div key={s.label} style={{ padding: 16, borderLeft: `2px solid ${s.color}`, background: `${s.color}08` }}>
              <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: s.color, marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontSize: 13, color: "var(--muted)", fontWeight: 300 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "rgba(94,142,247,0.05)", border: "1px solid rgba(94,142,247,0.15)", borderLeft: "3px solid var(--accent-blue)", borderRadius: "0 8px 8px 0", padding: "14px 18px" }}>
        <strong style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "var(--accent-blue)", letterSpacing: "0.06em", display: "block", marginBottom: 6 }}>💡 D21 UPGRADE</strong>
        <p style={{ fontSize: 13, color: "var(--muted)", fontWeight: 300 }}>Interactive SWOT với drag-and-drop và localStorage sẽ được build vào D21. Bạn sẽ điền SWOT cá nhân trực tiếp trên trang này.</p>
      </div>
    </div>
  );
}
