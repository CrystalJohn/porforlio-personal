"use client";

import { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  AreaChart, Area, Tooltip, ResponsiveContainer, Cell,
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { DAILY_UPGRADES, PHASE_LABELS } from "@/lib/daily-data";
import { getCompletedDays } from "@/lib/completion-store";

// ── Data builders ──────────────────────────────────────────────────────────

function buildPhaseData(completedSet: Set<number>) {
  return Object.entries(PHASE_LABELS).map(([phaseNum, label]) => {
    const phase = Number(phaseNum);
    const days = DAILY_UPGRADES.filter((d) => d.phase === phase);
    const completed = days.filter((d) => completedSet.has(d.day)).length;
    const remaining = days.length - completed;
    // Short labels for X axis
    const shortLabel = ["Setup", "Found.", "React", "TS+Next", "Soft", "Interview"][phase] ?? label;
    return { phase, label, shortLabel, completed, remaining, total: days.length };
  });
}

function buildCumulativeData(completedSet: Set<number>) {
  let cumulative = 0;
  return DAILY_UPGRADES.map((d) => {
    if (completedSet.has(d.day)) cumulative++;
    return {
      day: d.day,
      label: `D${d.day}`,
      cumulative,
      phase: d.phase,
    };
  });
}

// ── Config ─────────────────────────────────────────────────────────────────

const phaseChartConfig: ChartConfig = {
  completed: { label: "Completed", color: "#1d8102" },
  remaining: { label: "Remaining", color: "#eaeded" },
};

const cumulativeChartConfig: ChartConfig = {
  cumulative: { label: "Skills Unlocked", color: "#00a1c9" },
};

// ── Custom Tooltip ─────────────────────────────────────────────────────────

function PhaseTooltip({ active, payload, label }: { active?: boolean; payload?: { value: number; name: string }[]; label?: string }) {
  if (!active || !payload?.length) return null;
  const completed = payload.find((p) => p.name === "completed")?.value ?? 0;
  const remaining = payload.find((p) => p.name === "remaining")?.value ?? 0;
  const total = completed + remaining;
  return (
    <div style={{ background: "#fff", border: "1px solid #eaeded", borderRadius: 10, padding: "10px 14px", fontSize: 12, fontFamily: "var(--font-dm-mono, monospace)", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
      <div style={{ fontWeight: 700, color: "#16191f", marginBottom: 6 }}>{label}</div>
      <div style={{ color: "#1d8102" }}>✓ {completed} completed</div>
      <div style={{ color: "#545b64" }}>◦ {remaining} remaining</div>
      <div style={{ color: "#ff9900", marginTop: 4 }}>{Math.round((completed / total) * 100)}% done</div>
    </div>
  );
}

function CumulativeTooltip({ active, payload }: { active?: boolean; payload?: { value: number; payload: { label: string; phase: number } }[] }) {
  if (!active || !payload?.length) return null;
  const { value, payload: { label, phase } } = payload[0];
  const phaseLabel = PHASE_LABELS[phase as keyof typeof PHASE_LABELS];
  return (
    <div style={{ background: "#fff", border: "1px solid #eaeded", borderRadius: 10, padding: "10px 14px", fontSize: 12, fontFamily: "var(--font-dm-mono, monospace)", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
      <div style={{ fontWeight: 700, color: "#16191f", marginBottom: 4 }}>{label}</div>
      <div style={{ color: "#00a1c9" }}>{value} skills unlocked</div>
      <div style={{ color: "#545b64", fontSize: 10, marginTop: 2 }}>{phaseLabel}</div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────

export default function LearningCurveChart() {
  const [completedSet, setCompletedSet] = useState<Set<number>>(new Set([0]));
  const [activeView, setActiveView] = useState<"phase" | "curve">("phase");

  useEffect(() => {
    const sync = () => setCompletedSet(new Set(getCompletedDays()));
    sync();
    window.addEventListener("dailyCompletionChanged", sync);
    return () => window.removeEventListener("dailyCompletionChanged", sync);
  }, []);

  const phaseData = buildPhaseData(completedSet);
  const cumulativeData = buildCumulativeData(completedSet);
  const totalCompleted = completedSet.size;
  const totalDays = DAILY_UPGRADES.length;

  return (
    <div style={{ background: "#f2f3f5", borderRadius: 16, padding: 24 }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
        <div>
          <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#545b64", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
            📊 Learning Curve
          </div>
          <div style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: 18, fontWeight: 800, color: "#16191f" }}>
            {totalCompleted}
            <span style={{ fontSize: 13, color: "#545b64", fontWeight: 400 }}>/{totalDays} skills</span>
          </div>
        </div>

        {/* Toggle */}
        <div style={{ display: "flex", background: "#eaeded", borderRadius: 8, padding: 3, gap: 2 }}>
          {(["phase", "curve"] as const).map((view) => (
            <button
              key={view}
              onClick={() => setActiveView(view)}
              style={{
                padding: "5px 12px",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-dm-mono, monospace)",
                fontSize: 11,
                fontWeight: 700,
                background: activeView === view ? "#ffffff" : "transparent",
                color: activeView === view ? "#16191f" : "#545b64",
                boxShadow: activeView === view ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
                transition: "all 0.15s ease",
              }}
            >
              {view === "phase" ? "By Phase" : "Curve"}
            </button>
          ))}
        </div>
      </div>

      {/* Phase Bar Chart */}
      {activeView === "phase" && (
        <ChartContainer config={phaseChartConfig} className="h-[200px] w-full aspect-auto">
          <BarChart data={phaseData} barSize={32} barGap={2}>
            <CartesianGrid vertical={false} stroke="#eaeded" />
            <XAxis
              dataKey="shortLabel"
              tick={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 10, fill: "#545b64" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 10, fill: "#545b64" }}
              axisLine={false}
              tickLine={false}
              width={24}
            />
            <Tooltip content={<PhaseTooltip />} cursor={{ fill: "rgba(0,161,201,0.06)", radius: 6 }} />
            <Bar dataKey="completed" stackId="a" fill="#1d8102" radius={[0, 0, 0, 0]} name="completed" />
            <Bar dataKey="remaining" stackId="a" fill="#d5dbdb" radius={[4, 4, 0, 0]} name="remaining" />
          </BarChart>
        </ChartContainer>
      )}

      {/* Cumulative Area Chart */}
      {activeView === "curve" && (
        <ChartContainer config={cumulativeChartConfig} className="h-[200px] w-full aspect-auto">
          <AreaChart data={cumulativeData}>
            <defs>
              <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00a1c9" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#00a1c9" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#eaeded" />
            <XAxis
              dataKey="label"
              tick={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 9, fill: "#545b64" }}
              axisLine={false}
              tickLine={false}
              interval={4}
            />
            <YAxis
              tick={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 10, fill: "#545b64" }}
              axisLine={false}
              tickLine={false}
              width={24}
              domain={[0, totalDays]}
            />
            <Tooltip content={<CumulativeTooltip />} cursor={{ stroke: "#00a1c9", strokeWidth: 1, strokeDasharray: "4 4" }} />
            <Area
              type="monotone"
              dataKey="cumulative"
              stroke="#00a1c9"
              strokeWidth={2}
              fill="url(#curveGradient)"
              dot={false}
              activeDot={{ r: 4, fill: "#00a1c9", strokeWidth: 0 }}
            />
          </AreaChart>
        </ChartContainer>
      )}

      {/* Phase legend */}
      {activeView === "phase" && (
        <div style={{ display: "flex", gap: 16, marginTop: 14, flexWrap: "wrap" }}>
          {phaseData.map((p) => (
            <div key={p.phase} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: p.completed === p.total ? "#1d8102" : p.completed > 0 ? "#ff9900" : "#d5dbdb" }} />
              <span style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 10, color: "#545b64" }}>
                {p.shortLabel} {p.completed}/{p.total}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
