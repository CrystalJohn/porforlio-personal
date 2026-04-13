"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { DAILY_UPGRADES } from "@/lib/daily-data";
import { getCompletedDays } from "@/lib/completion-store";
import type { ResearchReport } from "@/lib/research-data";
import LearningCurveChart from "@/components/LearningCurveChart";

interface Props {
  totalDays: number;
  recentUpgrades: typeof DAILY_UPGRADES;
  reports: ResearchReport[];
}

export default function DashboardProgress({ totalDays, recentUpgrades, reports }: Props) {
  const [completedSet, setCompletedSet] = useState<Set<number>>(new Set([0]));

  useEffect(() => {
    const sync = () => setCompletedSet(new Set(getCompletedDays()));
    sync();
    window.addEventListener("dailyCompletionChanged", sync);
    return () => window.removeEventListener("dailyCompletionChanged", sync);
  }, []);

  const completedCount = completedSet.size;
  const progressPct = Math.round((completedCount / totalDays) * 100);
  const todayUpgrade =
    DAILY_UPGRADES.find((d) => !completedSet.has(d.day)) ?? DAILY_UPGRADES[0];

  const stats = [
    { label: "Days Completed", value: completedCount, suffix: `/${totalDays}`, icon: "📅", color: "#00a1c9" },
    { label: "Reports Published", value: reports.length, suffix: "", icon: "🔬", color: "#1d8102" },
    { label: "Overall Progress", value: `${progressPct}%`, suffix: "", icon: "📈", color: "#ff9900" },
  ];

  return (
    <>
      {/* Stat Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 16,
          marginBottom: 40,
        }}
      >
        {stats.map((s) => (
          <div key={s.label} className="aws-stat-card">
            <div style={{ fontSize: 26, marginBottom: 10 }}>{s.icon}</div>
            <div
              style={{
                fontFamily: "var(--font-syne, sans-serif)",
                fontSize: 34,
                fontWeight: 800,
                color: s.color,
                lineHeight: 1,
              }}
            >
              {s.value}
              {s.suffix && (
                <span style={{ fontSize: 18, color: "#545b64", fontWeight: 400 }}>
                  {s.suffix}
                </span>
              )}
            </div>
            <div
              style={{
                fontFamily: "var(--font-dm-mono, monospace)",
                fontSize: 11,
                color: "#545b64",
                marginTop: 6,
                letterSpacing: "0.04em",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}

        {/* Progress bar card */}
        <div className="aws-stat-card">
          <div style={{ fontSize: 26, marginBottom: 10 }}>🚀</div>
          <div
            style={{
              fontFamily: "var(--font-syne, sans-serif)",
              fontSize: 14,
              fontWeight: 700,
              color: "#16191f",
              marginBottom: 12,
            }}
          >
            Journey Progress
          </div>
          <div style={{ height: 8, background: "#eaeded", borderRadius: 4, overflow: "hidden" }}>
            <div
              style={{
                width: `${progressPct}%`,
                height: "100%",
                background: "linear-gradient(90deg, #00a1c9, #00c2e0)",
                borderRadius: 4,
                transition: "width 0.6s ease",
              }}
            />
          </div>
          <div
            style={{
              fontFamily: "var(--font-dm-mono, monospace)",
              fontSize: 11,
              color: "#545b64",
              marginTop: 8,
            }}
          >
            {completedCount}/{totalDays} days · {progressPct}% complete
          </div>
        </div>
      </div>

      {/* Learning Curve Chart */}
      <div style={{ marginBottom: 40 }}>
        <LearningCurveChart />
      </div>

      {/* Today's Upgrade */}
      <div style={{ marginBottom: 40 }}>
        <div className="aws-section-label">⚡ Today&apos;s Upgrade</div>
        <div className="today-card">
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 12 }}>
            <span
              style={{
                fontFamily: "var(--font-dm-mono, monospace)",
                fontSize: 11,
                background: "#fff3cd",
                color: "#ff9900",
                border: "1px solid #ffd966",
                padding: "3px 10px",
                borderRadius: 4,
                fontWeight: 700,
              }}
            >
              D{todayUpgrade.day}
            </span>
            <span
              style={{
                fontFamily: "var(--font-dm-mono, monospace)",
                fontSize: 10,
                padding: "3px 8px",
                borderRadius: 3,
                background: "#e6f6fa",
                color: "#00a1c9",
                border: "1px solid #b3e4f1",
              }}
            >
              {todayUpgrade.category}
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-syne, sans-serif)",
              fontSize: 22,
              fontWeight: 800,
              marginBottom: 8,
              color: "#16191f",
              letterSpacing: "-0.01em",
            }}
          >
            {todayUpgrade.title}
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "#545b64",
              lineHeight: 1.6,
              marginBottom: 16,
              maxWidth: 600,
            }}
          >
            {todayUpgrade.summary}
          </p>
          <Link
            href="/daily"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-dm-mono, monospace)",
              fontSize: 13,
              fontWeight: 700,
              color: "#ff9900",
              textDecoration: "none",
            }}
          >
            View full daily log
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* 2-col: Research + Checklist */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        {/* Latest Research */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <div className="aws-section-label" style={{ marginBottom: 0 }}>
              🔬 Latest Research
            </div>
            <Link
              href="/research"
              style={{
                fontFamily: "var(--font-dm-mono, monospace)",
                fontSize: 11,
                fontWeight: 700,
                color: "#00a1c9",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              View all
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          {reports.slice(0, 3).map((r) => (
            <Link key={r.slug} href="/research" className="research-row">
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-syne, sans-serif)",
                    fontSize: 14,
                    fontWeight: 700,
                    marginBottom: 4,
                  }}
                >
                  {r.title}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono, monospace)",
                    fontSize: 10,
                    color: "#545b64",
                  }}
                >
                  {r.date} · {r.readingTime}
                </div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#545b64" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        {/* Foundation Checklist */}
        <div>
          <div className="aws-section-label">📅 Phase 1 — Foundation</div>
          <div style={{ background: "#f2f3f5", borderRadius: 16, padding: "4px 20px" }}>
            {recentUpgrades.map((d) => {
              const done = completedSet.has(d.day);
              return (
                <div key={d.day} className="checklist-row">
                  <span
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 5,
                      border: `1.5px solid ${done ? "#1d8102" : "#d5dbdb"}`,
                      background: done ? "#1d8102" : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 11,
                      color: "#ffffff",
                      flexShrink: 0,
                      transition: "all 0.2s ease",
                    }}
                  >
                    {done ? "✓" : ""}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-mono, monospace)",
                      fontSize: 10,
                      color: "#545b64",
                      width: 26,
                    }}
                  >
                    D{d.day}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      color: done ? "#16191f" : "#545b64",
                      flex: 1,
                      fontWeight: done ? 600 : 400,
                    }}
                  >
                    {d.title}
                  </span>
                  {done && (
                    <span
                      style={{
                        fontFamily: "var(--font-dm-mono, monospace)",
                        fontSize: 10,
                        color: "#1d8102",
                        background: "#e6f4ea",
                        padding: "2px 6px",
                        borderRadius: 3,
                      }}
                    >
                      Done
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
