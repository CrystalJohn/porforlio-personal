import type { Metadata } from "next";

export const metadata: Metadata = { title: "About", description: "Frontend developer on the Fresher → Junior journey" };

const SKILLS = [
  { cat: "Currently Learning", items: ["Next.js 15 App Router", "TypeScript", "React Hooks", "Tailwind CSS v4", "Claude Code Agentic Workflow", "Vercel Deployment"] },
  { cat: "Familiar With", items: ["HTML5 Semantic", "CSS Flexbox/Grid", "JavaScript ES6+", "Git & GitHub", "Vercel AI SDK", "Prompt Engineering"] },
  { cat: "Building Towards", items: ["Unit Testing (Vitest)", "Performance Optimization", "Accessibility (a11y)", "System Design thinking", "Code Review skills"] },
];

export default function AboutPage() {
  return (
    <div className="animate-fade-in" style={{ padding: "48px 32px", maxWidth: 800 }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>06 · About</div>
        <h1 style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 12 }}>
          Hello, I&apos;m a<br /><span style={{ color: "var(--accent-claude)" }}>Frontend Dev</span>
        </h1>
        <p style={{ fontSize: 15, color: "var(--muted)", fontWeight: 300, maxWidth: 520, lineHeight: 1.8 }}>
          Đang trên hành trình từ <strong style={{ color: "var(--text)" }}>Fresher → Junior Frontend Developer</strong>.
          Portfolio này là bằng chứng sống của quá trình đó — mỗi commit là 1 skill mới.
        </p>
      </div>

      {/* Journey status */}
      <div style={{ background: "linear-gradient(135deg, rgba(204,120,92,0.08), rgba(94,142,247,0.06))", border: "1px solid rgba(204,120,92,0.2)", borderRadius: 12, padding: 24, marginBottom: 40 }}>
        <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "var(--muted)", marginBottom: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>📍 Current Status</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 16 }}>
          {[
            { label: "Journey", value: "Fresher → Junior" },
            { label: "Daily goal", value: "1 skill/day" },
            { label: "Method", value: "STAR + SWOT" },
            { label: "Stack", value: "Next.js + Vercel" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 10, color: "var(--muted)", marginBottom: 2 }}>{s.label}</div>
              <div style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: 15, fontWeight: 700, color: "var(--text)" }}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>🛠 Skills Snapshot</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {SKILLS.map((group) => (
            <div key={group.cat}>
              <div style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: 14, fontWeight: 700, marginBottom: 10, color: "var(--text)" }}>{group.cat}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {group.items.map((item) => (
                  <span key={item} style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, padding: "4px 12px", border: "1px solid var(--border)", borderRadius: 4, color: "var(--muted)", letterSpacing: "0.04em" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* This project */}
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 24 }}>
        <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "var(--muted)", marginBottom: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>📦 About This Project</div>
        <h3 style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Frontend Daily Portfolio</h3>
        <p style={{ fontSize: 13, color: "var(--muted)", fontWeight: 300, lineHeight: 1.7, marginBottom: 16 }}>
          Một Next.js app được build từ scratch trong 30 ngày. Mỗi ngày thêm 1 feature / 1 module mới.
          Git history chính là learning proof. AI Research section document những gì tôi nghiên cứu.
          STAR tracker giúp tôi chuẩn bị cho technical interviews.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {["Next.js 15", "TypeScript", "Tailwind CSS v4", "Vercel"].map((tech) => (
            <span key={tech} style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, padding: "3px 10px", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", borderRadius: 4, color: "var(--muted)" }}>{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
