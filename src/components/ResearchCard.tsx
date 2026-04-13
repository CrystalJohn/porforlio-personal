"use client";
import Link from "next/link";
import type { ResearchReport } from "@/lib/research-data";
import { TAG_COLORS } from "@/lib/research-data";

export default function ResearchCard({ report }: { report: ResearchReport }) {
  return (
    <Link
      href={`/research/${report.slug}`}
      style={{ textDecoration: "none" }}
    >
      <article
        className="group transition-all duration-200"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 12,
          padding: 24,
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        {/* Top accent line */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, var(--accent-claude), var(--accent-blue))", opacity: 0, transition: "opacity 0.2s" }} className="group-hover:opacity-100" />

        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 10, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            🔬 Intelligence Report
          </div>
          <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 10, color: "var(--muted)" }}>
            {report.date}
          </div>
        </div>

        {/* Title */}
        <h2 style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: 22, fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 4, color: "var(--text)" }}>
          {report.title}
        </h2>
        <p style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: 14, fontWeight: 400, color: "var(--muted)", marginBottom: 12 }}>
          {report.subtitle}
        </p>

        {/* Summary */}
        <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, marginBottom: 16, fontWeight: 300 }}>
          {report.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {report.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-dm-mono, monospace)",
                fontSize: 10,
                padding: "2px 8px",
                borderRadius: 3,
                letterSpacing: "0.05em",
                color: TAG_COLORS[tag] || "var(--muted)",
                background: `${TAG_COLORS[tag] || "var(--muted)"}18`,
                border: `1px solid ${TAG_COLORS[tag] || "var(--muted)"}30`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "var(--muted)" }}>
            ⏱ {report.readingTime}
          </div>
          <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "var(--accent-blue)" }}>
            Read report →
          </div>
        </div>
      </article>
    </Link>
  );
}

