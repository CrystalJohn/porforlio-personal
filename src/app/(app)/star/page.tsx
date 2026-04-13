import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STAR Tracker",
  description: "Track your STAR method examples for interview prep",
};

const STAR_LABELS = [
  { letter: "S", label: "Situation", desc: "Bối cảnh xảy ra vấn đề", color: "#00a1c9", bg: "#e6f6fa", border: "#b3e4f1" },
  { letter: "T", label: "Task", desc: "Nhiệm vụ cụ thể của bạn", color: "#ff9900", bg: "#fff3cd", border: "#ffd966" },
  { letter: "A", label: "Action", desc: "Hành động bạn đã làm", color: "#8b5cf6", bg: "#f3f0ff", border: "#c4b5fd" },
  { letter: "R", label: "Result", desc: "Kết quả đo được", color: "#1d8102", bg: "#e6f4ea", border: "#a3d9a5" },
];

const STAR_EXAMPLES = [
  {
    id: 1, scenario: "Code Review", category: "Collaboration",
    situation: "Sprint review, senior reject PR của tôi vì thiếu error handling.",
    task: "Cần fix PR và học cách viết code defensively.",
    action: "Tôi thêm try-catch, loading states, error boundaries. Hỏi senior review lại và xin feedback cụ thể.",
    result: "PR merged. Từ đó tôi tạo checklist cá nhân trước khi submit PR. Error rate giảm 40% trong sprint tiếp theo.",
  },
  {
    id: 2, scenario: "Task Estimation", category: "Planning",
    situation: 'PM hỏi estimate cho feature "User Profile Page" — tôi nói "2 ngày".',
    task: "Feature thực tế mất 5 ngày vì chưa tính edge cases.",
    action: "Tôi học cách break down: UI (1d) + API integration (1d) + Error handling (0.5d) + Responsive (0.5d) + Testing (1d) + Buffer (1d).",
    result: "Từ đó estimate accuracy tăng từ ~40% lên ~80%. PM trust tôi hơn trong sprint planning.",
  },
  {
    id: 3, scenario: "Asking Questions", category: "Communication",
    situation: "Stuck 3 tiếng vì API trả về 403 Forbidden.",
    task: "Cần fix nhanh vì blocking sprint.",
    action: 'Thay vì hỏi "API bị lỗi", tôi viết: "GET /api/users trả 403. Token valid. Đã check CORS. Suspect: missing role permission."',
    result: "Senior trả lời trong 5 phút thay vì 30 phút back-and-forth. Root cause: middleware thiếu viewer role.",
  },
];

const CATEGORY_COLORS: Record<string, { color: string; bg: string; border: string }> = {
  Collaboration: { color: "#00a1c9", bg: "#e6f6fa", border: "#b3e4f1" },
  Planning:      { color: "#ff9900", bg: "#fff3cd", border: "#ffd966" },
  Communication: { color: "#1d8102", bg: "#e6f4ea", border: "#a3d9a5" },
};

export default function StarPage() {
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
        .star-legend-card {
          background: #f2f3f5;
          border-radius: 16px;
          padding: 20px;
          border-top: 3px solid transparent;
          transition: all 0.2s ease;
          cursor: default;
        }
        .star-legend-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        .star-example-card {
          background: #f2f3f5;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid transparent;
          transition: all 0.2s ease;
        }
        .star-example-card:hover {
          background: #ffffff;
          box-shadow: 0 0 0 2px #00a1c9, 0 0 28px rgba(0,161,201,0.2);
        }
        .star-row {
          display: flex;
          gap: 16px;
          margin-bottom: 14px;
          align-items: flex-start;
        }
        .star-row:last-child { margin-bottom: 0; }
        .star-letter {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-syne, sans-serif);
          font-size: 14px;
          font-weight: 800;
          flex-shrink: 0;
          margin-top: 2px;
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
        .star-section { animation: fadeSlideIn 0.3s ease forwards; }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <div style={{ marginBottom: 36 }} className="star-section">
          <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#545b64", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
            04 · STAR Tracker
          </div>
          <h1 style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 12, color: "#16191f" }}>
            STAR Method
          </h1>
          <p style={{ fontSize: 16, color: "#545b64", maxWidth: 560, lineHeight: 1.7 }}>
            <strong style={{ color: "#16191f" }}>S</strong>ituation ·{" "}
            <strong style={{ color: "#16191f" }}>T</strong>ask ·{" "}
            <strong style={{ color: "#16191f" }}>A</strong>ction ·{" "}
            <strong style={{ color: "#16191f" }}>R</strong>esult
            <br />Cách kể chuyện professional trong technical interviews và daily communication.
          </p>
        </div>

        {/* STAR Legend */}
        <div
          className="star-section"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 40, animationDelay: "0.05s" }}
        >
          {STAR_LABELS.map((s) => (
            <div
              key={s.letter}
              className="star-legend-card"
              style={{ borderTopColor: s.color }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                background: s.bg, border: `1px solid ${s.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-syne, sans-serif)", fontSize: 22, fontWeight: 800,
                color: s.color, marginBottom: 12
              }}>
                {s.letter}
              </div>
              <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 12, fontWeight: 700, color: "#16191f", marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 12, color: "#545b64", lineHeight: 1.5 }}>{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Example Bank Label */}
        <div
          className="star-section"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, animationDelay: "0.08s" }}
        >
          <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#545b64", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            📖 Example Bank — {STAR_EXAMPLES.length} stories
          </div>
          <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#545b64" }}>D15-D21 content</div>
        </div>

        {/* Examples */}
        <div
          className="star-section"
          style={{ display: "flex", flexDirection: "column", gap: 20, animationDelay: "0.1s" }}
        >
          {STAR_EXAMPLES.map((ex) => {
            const cat = CATEGORY_COLORS[ex.category] ?? { color: "#545b64", bg: "#f2f3f5", border: "#d5dbdb" };
            const values = [ex.situation, ex.task, ex.action, ex.result];
            const rows = STAR_LABELS.map((starLabel, index) => ({
              ...starLabel,
              value: values[index],
            }));
            return (
              <div key={ex.id} className="star-example-card">
                {/* Card header */}
                <div style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "16px 24px", borderBottom: "1px solid #eaeded", background: "#ffffff"
                }}>
                  <span style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: 16, fontWeight: 700, color: "#16191f" }}>
                    {ex.scenario}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-dm-mono, monospace)", fontSize: 10,
                    color: cat.color, background: cat.bg, border: `1px solid ${cat.border}`,
                    padding: "3px 10px", borderRadius: 4, fontWeight: 700
                  }}>
                    {ex.category}
                  </span>
                </div>

                {/* Card body */}
                <div style={{ padding: "20px 24px" }}>
                  {rows.map((row) => (
                    <div key={row.letter} className="star-row">
                      <div className="star-letter" style={{ background: row.bg, border: `1px solid ${row.border}`, color: row.color }}>
                        {row.letter}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 10, color: row.color, letterSpacing: "0.08em", marginBottom: 4, fontWeight: 700 }}>
                          {row.label.toUpperCase()}
                        </div>
                        <div style={{ fontSize: 13, color: "#545b64", lineHeight: 1.7 }}>{row.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Info box */}
        <div className="info-box star-section" style={{ animationDelay: "0.15s" }}>
          <strong style={{ display: "block", fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#00a1c9", letterSpacing: "0.06em", marginBottom: 8, textTransform: "uppercase" }}>
            💡 D15 Upgrade
          </strong>
          <p style={{ fontSize: 14, color: "#545b64", lineHeight: 1.7 }}>
            Interactive STAR form với localStorage sẽ được thêm vào ngày D15. Bạn sẽ có thể tự fill in STAR examples của mình và export ra cho interview prep.
          </p>
        </div>

      </div>
    </div>
  );
}
