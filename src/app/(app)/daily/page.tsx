"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { DAILY_UPGRADES, PHASE_LABELS } from "@/lib/daily-data";
import { getCompletedDays } from "@/lib/completion-store";

const phases = Object.entries(PHASE_LABELS).map(([phaseNum, label]) => {
  const phase = Number(phaseNum);
  return {
    phase,
    label,
    days: DAILY_UPGRADES.filter((d) => d.phase === phase),
  };
});

export default function DailyPage() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [search, setSearch] = useState("");
  const [completedDays, setCompletedDays] = useState<Record<number, boolean>>({});

  // Hydrate from localStorage on mount + listen for cross-component updates
  useEffect(() => {
    const savedTab = sessionStorage.getItem("daily_active_tab");
    if (savedTab !== null) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveTab(Number(savedTab));
    }

    const syncCompleted = () => {
      const days = getCompletedDays();
      const map: Record<number, boolean> = {};
      days.forEach((d) => { map[d] = true; });
      setCompletedDays(map);
    };

    syncCompleted();
    window.addEventListener("dailyCompletionChanged", syncCompleted);
    return () => window.removeEventListener("dailyCompletionChanged", syncCompleted);
  }, []);

  const handleTabChange = (idx: number) => {
    setActiveTab(idx);
    setSearch("");
    sessionStorage.setItem("daily_active_tab", String(idx));
  };

  const activePhase = phases[activeTab] || phases[0];
  const filteredDays = activePhase.days.filter(
    (d) =>
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.summary.toLowerCase().includes(search.toLowerCase()) ||
      d.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
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
        .aws-card {
          background: #f2f3f5;
          box-shadow: none;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          min-height: 260px;
          transition: all 0.2s ease;
          cursor: pointer;
          border: 1px solid transparent;
        }
        .aws-card.completed {
          background: #ffffff;
          border: 1px solid #eaeded;
        }
        .aws-card:hover {
          background: #ffffff;
          border-color: transparent;
          box-shadow: 0 0 0 2px #00a1c9, 0 0 24px rgba(0, 161, 201, 0.25);
          transform: translateY(-2px);
        }
        .aws-card:active {
          transform: translateY(0) scale(0.98);
          box-shadow: 0 0 0 1px #00a1c9, 0 0 8px rgba(0, 161, 201, 0.15);
          transition: all 0.05s ease;
        }
        .aws-card-icon {
          color: #545b64;
          transition: color 0.2s ease;
        }
        .aws-card:hover .aws-card-icon {
          color: #16191f;
        }
        .aws-card-btn {
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
        }
        .aws-card:hover .aws-card-btn {
          border-color: #00a1c9;
          color: #00a1c9;
          background: #e6f6fa;
        }
        .week-tab {
          padding-bottom: 12px;
          border-bottom: 2px solid transparent;
          color: #545b64;
          font-weight: 400;
          cursor: pointer;
          font-size: 14px;
          white-space: nowrap;
          transition: color 0.15s ease, border-color 0.15s ease;
          user-select: none;
        }
        .week-tab:hover {
          color: #16191f;
        }
        .week-tab.active {
          border-bottom-color: #ff9900;
          color: #16191f;
          font-weight: 700;
        }
        .search-input {
          background: none;
          border: none;
          outline: none;
          font-size: 14px;
          color: #16191f;
          width: 100%;
        }
        .search-input::placeholder {
          color: #545b64;
        }
        .cards-grid {
          /* removed fadeSlideIn to prevent screen flash */
        }
        .empty-state {
          text-align: center;
          padding: 64px 0;
          color: #545b64;
          font-size: 15px;
        }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: 32, fontWeight: 800, color: "#16191f", marginBottom: 12 }}>
            Explore our daily upgrades
          </h1>
          <p style={{ fontSize: 16, color: "#545b64" }}>
            40-day journey · Mỗi ngày 1 skill · Consistent progression over perfection.
          </p>
        </div>

        {/* Week Tabs */}
        <div style={{ display: "flex", gap: 32, borderBottom: "1px solid #eaeded", marginBottom: 32, overflowX: "auto" }}>
          {phases.map((p, idx) => (
            <div
              key={idx}
              className={`week-tab${activeTab === idx ? " active" : ""}`}
              onClick={() => handleTabChange(idx)}
            >
              {p.phase === 0 ? "Setup" : `Phase ${p.phase} — ${p.label}`}
            </div>
          ))}
        </div>

        {/* Filter Bar */}
        <div style={{ display: "flex", gap: 16, marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", border: "1px solid #545b64", borderRadius: 20, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M6 12h12m-9 6h6" />
            </svg>
            Filter
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", border: "1px solid #eaeded", borderRadius: 4, flex: 1, color: "#545b64" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              className="search-input"
              placeholder="Search daily items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Active Week Content */}
        <div>
          <div style={{ fontSize: 13, color: "#545b64", marginBottom: 16, fontFamily: "var(--font-dm-mono, monospace)", fontWeight: 700 }}>
            {activePhase.label} — {filteredDays.length} item{filteredDays.length !== 1 ? "s" : ""}
          </div>

          {filteredDays.length === 0 ? (
            <div className="empty-state">
              No results found for &ldquo;{search}&rdquo;
            </div>
          ) : (
            <div
              key={activeTab}
              className="cards-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 24,
              }}
            >
              {filteredDays.map((d) => {
                const isCompleted = d.completed || completedDays[d.day];
                return (
                  <Link
                    key={d.day}
                    href={`/daily/${d.day}`}
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <motion.div 
                      layoutId={`daily-card-${d.day}`}
                      className={`aws-card ${isCompleted ? "completed" : ""}`}
                      transition={{ type: "spring", bounce: 0.05, duration: 0.5 }}
                    >
                      {/* Category tag */}
                      <div style={{
                        display: "inline-block",
                        padding: "4px 8px",
                        background: "#ffffff",
                        border: "1px solid #d5dbdb",
                        borderRadius: 4,
                        fontSize: 10,
                        color: "#545b64",
                        marginBottom: 16,
                        alignSelf: "flex-start",
                        fontFamily: "var(--font-dm-mono, monospace)",
                        textTransform: "uppercase",
                      }}>
                        {d.category}
                      </div>

                      {/* Status */}
                      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: isCompleted ? "#1d8102" : "#e65100", marginBottom: 16, fontFamily: "var(--font-dm-mono, monospace)" }}>
                        {isCompleted ? (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        ) : (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                          </svg>
                        )}
                        {isCompleted ? "Completed upgrade" : "Upcoming assignment"}
                      </div>

                      {/* Title */}
                      <motion.div 
                        layoutId={`daily-title-${d.day}`} 
                        className="aws-card-icon" 
                        style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, fontFamily: "var(--font-syne, sans-serif)", letterSpacing: "-0.01em", color: "#16191f" }}
                        transition={{ type: "spring", bounce: 0.05, duration: 0.5 }}
                      >
                        D{d.day}: {d.title}
                      </motion.div>

                      {/* Summary */}
                      <div style={{ fontSize: 14, color: "#16191f", lineHeight: 1.5, flex: 1, fontWeight: 400 }}>
                        {d.summary}
                      </div>

                    {/* Bottom action */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 24 }}>
                      <div className="aws-card-icon" style={{ fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", gap: 4, color: "#16191f" }}>
                        Learn more{" "}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                      <div className="aws-card-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    </motion.div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
