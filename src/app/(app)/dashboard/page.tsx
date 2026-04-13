import type { Metadata } from "next";
import { DAILY_UPGRADES } from "@/lib/daily-data";
import { reports } from "@/lib/research-data";
import DashboardProgress from "@/components/DashboardProgress";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Overview của 40-day Frontend upgrade journey",
};

export default function DashboardPage() {
  const recentUpgrades = DAILY_UPGRADES.filter((d) => d.phase === 1);

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
        .aws-stat-card {
          background: #f2f3f5;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid transparent;
          transition: all 0.2s ease;
          cursor: default;
        }
        .aws-stat-card:hover {
          background: #ffffff;
          box-shadow: 0 0 0 2px #00a1c9, 0 0 24px rgba(0,161,201,0.2);
          transform: translateY(-2px);
        }
        .aws-card {
          background: #f2f3f5;
          border-radius: 16px;
          padding: 24px;
          border: 1px solid transparent;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .aws-card:hover {
          background: #ffffff;
          box-shadow: 0 0 0 2px #00a1c9, 0 0 24px rgba(0,161,201,0.2);
          transform: translateY(-2px);
        }
        .aws-section-label {
          font-family: var(--font-dm-mono, monospace);
          font-size: 11px;
          color: #545b64;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .checklist-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 0;
          border-bottom: 1px solid #eaeded;
          transition: background 0.15s ease;
        }
        .checklist-row:last-child { border-bottom: none; }
        .research-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          background: #f2f3f5;
          border-radius: 10px;
          margin-bottom: 10px;
          border: 1px solid transparent;
          transition: all 0.2s ease;
          text-decoration: none;
          color: #16191f;
        }
        .research-row:hover {
          background: #ffffff;
          box-shadow: 0 0 0 2px #00a1c9, 0 0 16px rgba(0,161,201,0.15);
          transform: translateY(-1px);
        }
        .today-card {
          background: #f2f3f5;
          border-radius: 16px;
          padding: 28px;
          border: 2px solid #ff9900;
          position: relative;
          overflow: hidden;
          transition: all 0.2s ease;
        }
        .today-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #ff9900, #ffb84d);
        }
        .today-card:hover {
          box-shadow: 0 0 0 2px #ff9900, 0 0 28px rgba(255,153,0,0.2);
          transform: translateY(-2px);
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dash-section { animation: fadeSlideIn 0.3s ease forwards; }
      `}</style>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>

        {/* Header */}
        <div style={{ marginBottom: 40 }} className="dash-section">
          <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#545b64", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
            Frontend Daily · Apr 2026
          </div>
          <h1 style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 12, color: "#16191f" }}>
            <span style={{ color: "#00a1c9" }}>Fresher</span>
            <span style={{ color: "#545b64", margin: "0 10px" }}>→</span>
            <span>Junior</span>
          </h1>
          <p style={{ fontSize: 16, color: "#545b64", fontWeight: 400, maxWidth: 540 }}>
            40-day journey · Mỗi ngày upgrade 1 skill · Mix Việt-Anh · STAR method · Learn by building.
          </p>
        </div>

        <DashboardProgress
          totalDays={DAILY_UPGRADES.length}
          recentUpgrades={recentUpgrades}
          reports={reports}
        />

      </div>
    </div>
  );
}
