"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { DAILY_UPGRADES } from "@/lib/daily-data";
import { getDayDetail, type Step, type ChecklistItem } from "@/lib/daily-detail-data";
import { setDayCompleted, isDayCompleted } from "@/lib/completion-store";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion, AnimatePresence } from "framer-motion";

function guessLanguage(code: string) {
  if (code.includes("/* globals.css */") || code.trim().startsWith(".")) return "css";
  if (code.trim().startsWith("<") && !code.includes("import") && !code.includes("export")) return "html";
  if (code.trim().startsWith("npx") || code.trim().startsWith("git") || code.trim().startsWith("#")) return "bash";
  return "tsx";
}

/* ─── helpers ─── */
function getStorageKey(day: number, type: "checklist" | "notes") {
  return `daily_d${day}_${type}`;
}

export default function DayDetailPage() {
  const params = useParams();
  const router = useRouter();
  const dayNum = Number(params.day);

  const upgrade = DAILY_UPGRADES.find((d) => d.day === dayNum);
  const detail = getDayDetail(dayNum);

  // ── state ──────────────────────────────────────────────────────
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [notes, setNotes] = useState("");
  const [expandedStep, setExpandedStep] = useState<number | null>(1);
  const [noteSaved, setNoteSaved] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // ── D2 interactive flex demo ───────────────────────────────────
  const [flexDir, setFlexDir] = useState<"row" | "column">("row");
  const [flexJC,  setFlexJC]  = useState("flex-start");
  const [flexAI,  setFlexAI]  = useState("flex-start");

  // ── Scrollspy ──────────────────────────────────────────────────
  const [activeSection, setActiveSection] = useState("section-hero");
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const navSections = [
    { id: "section-hero",        label: "Overview"    },
    { id: "section-steps",       label: "Steps"       },
    ...(dayNum === 2 ? [
      { id: "section-concept",     label: "Concept"     },
      { id: "section-interactive", label: "Interactive" },
    ] : []),
  ];

  useEffect(() => {
    const ids = navSections.map((s) => s.id);
    const handleScroll = () => {
      let active = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 160) active = id;
      }
      setActiveSection(active);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dayNum]); // eslint-disable-line react-hooks/exhaustive-deps

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top, behavior: "smooth" });
  }

  // ── load from localStorage ─────────────────────────────────────
  useEffect(() => {
    const savedChecked = localStorage.getItem(getStorageKey(dayNum, "checklist"));
    const savedNotes   = localStorage.getItem(getStorageKey(dayNum, "notes"));
    if (savedNotes) setNotes(savedNotes);

    if (savedChecked) {
      const parsed: Record<string, boolean> = JSON.parse(savedChecked);
      setChecked(parsed);
      // Migration: nếu session cũ đã check hết nhưng completion store chưa có → sync
      const detail = getDayDetail(dayNum);
      const allDone = detail.checklist.length > 0 && detail.checklist.every((c) => parsed[c.id]);
      if (allDone) setDayCompleted(dayNum, true);
      setIsDone(allDone || isDayCompleted(dayNum));
    } else {
      setIsDone(isDayCompleted(dayNum));
    }
  }, [dayNum]);

  // ── persist checklist + sync completion state ──────────────────
  function toggleCheck(id: string) {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem(getStorageKey(dayNum, "checklist"), JSON.stringify(next));
      // Đánh dấu day hoàn thành khi tất cả checklist items được check
      const allDone = detail.checklist.every((c) => next[c.id]);
      setDayCompleted(dayNum, allDone);
      setIsDone(allDone);
      return next;
    });
  }

  // ── persist notes ──────────────────────────────────────────────
  function handleNotesChange(val: string) {
    setNotes(val);
    localStorage.setItem(getStorageKey(dayNum, "notes"), val);
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 1500);
  }

  const doneCount   = detail?.checklist.filter((c: ChecklistItem) => checked[c.id]).length || 0;
  const totalCount  = detail?.checklist.length || 0;
  const progressPct = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;
  const isCompleted = isDone || (doneCount === totalCount && totalCount > 0);

  // ── save global completed status ───────────────────────────────
  useEffect(() => {
    if (totalCount === 0) return;
    const isDoneStatus = doneCount === totalCount;
    try {
      const saved = localStorage.getItem("daily_completed_status");
      const status = saved ? JSON.parse(saved) : {};
      if (status[dayNum] !== isDoneStatus) {
        status[dayNum] = isDoneStatus;
        localStorage.setItem("daily_completed_status", JSON.stringify(status));
      }
    } catch {}
  }, [doneCount, totalCount, dayNum]);

  if (!upgrade || !detail) {
    return (
      <div style={pageStyle}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px", textAlign: "center", paddingTop: 80 }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
          <h1 style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: 28, fontWeight: 800, color: "#16191f", marginBottom: 12 }}>
            Day {dayNum} not found
          </h1>
          <button onClick={() => router.push("/daily")} style={backBtnStyle}>← Back to Daily</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div style={pageStyle}>
      <style>{`
        /* ── Back button ── */
        .back-btn {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--font-dm-mono, monospace); font-size: 12px; font-weight: 700;
          color: #545b64; padding: 8px 14px; border-radius: 8px;
          border: 1px solid #eaeded; background: #f2f3f5;
          cursor: pointer; text-decoration: none; transition: all 0.15s ease;
          margin-bottom: 32px; width: fit-content;
        }
        .back-btn:hover { background: #e9ecef; border-color: #d5dbdb; color: #16191f; }

        /* ── Steps ── */
        .step-card {
          border-radius: 14px; border: 1px solid #eaeded;
          overflow: hidden; margin-bottom: 14px;
          transition: box-shadow 0.2s ease;
        }
        .step-card.active { border-color: #00a1c9; box-shadow: 0 0 0 1px #00a1c9, 0 0 16px rgba(0,161,201,0.12); }
        .step-header {
          display: flex; align-items: center; gap: 14px;
          padding: 16px 20px; cursor: pointer;
          background: #f2f3f5; transition: background 0.15s ease;
          user-select: none;
        }
        .step-card.active .step-header { background: #ffffff; }
        .step-header:hover { background: #ffffff; }
        .step-num {
          width: 30px; height: 30px; border-radius: 8px;
          background: #eaeded; color: #545b64;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-dm-mono, monospace); font-size: 12px; font-weight: 700;
          flex-shrink: 0; transition: all 0.2s ease;
        }
        .step-card.active .step-num { background: #00a1c9; color: #ffffff; }
        .step-body { padding: 0 20px 20px 64px; background: #ffffff; }
        .step-desc { font-size: 14px; color: #545b64; line-height: 1.7; margin-bottom: 14px; white-space: pre-line; }
        .step-code {
          background: #16191f; color: #e3e7ed;
          border-radius: 10px; padding: 16px; font-size: 12px;
          font-family: var(--font-dm-mono, monospace); line-height: 1.7;
          overflow-x: auto; white-space: pre; margin-bottom: 12px;
        }
        .step-tip {
          display: flex; gap: 10px; align-items: flex-start;
          background: #fff3cd; border: 1px solid #ffd966; border-radius: 8px;
          padding: 12px 14px; font-size: 13px; color: #7a5800; line-height: 1.6;
        }
        .chevron { transition: transform 0.2s ease; }
        .step-card.active .chevron { transform: rotate(180deg); }

        /* ── Checklist ── */
        .check-item {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 12px 16px; border-radius: 10px;
          transition: background 0.15s ease; cursor: pointer;
          margin-bottom: 6px;
        }
        .check-item:hover { background: #f2f3f5; }
        .check-box {
          width: 20px; height: 20px; border-radius: 6px;
          border: 2px solid #d5dbdb; flex-shrink: 0; margin-top: 1px;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s ease; background: #ffffff;
        }
        .check-box.done { background: #1d8102; border-color: #1d8102; }
        .check-label { font-size: 13px; color: #16191f; line-height: 1.5; transition: color 0.15s ease; }
        .check-label.done { color: #545b64; text-decoration: line-through; }

        /* ── Notes ── */
        .notes-area {
          width: 100%; min-height: 160px; resize: vertical;
          background: #f2f3f5; border: 1px solid #eaeded; border-radius: 12px;
          padding: 14px 16px; font-size: 13px; font-family: inherit;
          color: #16191f; line-height: 1.7; outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          box-sizing: border-box;
        }
        .notes-area:focus { border-color: #00a1c9; box-shadow: 0 0 0 2px rgba(0,161,201,0.15); background: #ffffff; }
        .notes-area::placeholder { color: #aab7c4; }

        /* ── Progress ── */
        .progress-bar-track { height: 6px; background: #eaeded; border-radius: 3px; overflow: hidden; }
        .progress-bar-fill  { height: 100%; border-radius: 3px; transition: width 0.4s ease; background: linear-gradient(90deg, #1d8102, #3ecf8e); }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>

        {/* Back */}
        <button className="back-btn" onClick={() => router.push("/daily")}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Daily
        </button>

        {/* ── Hero ── */}
        <motion.div
          id="section-hero"
          layoutId={`daily-card-${upgrade.day}`}
          className="detail-section"
          style={{
            marginBottom: 40,
            background: "#ffffff",
            borderRadius: 16,
            padding: "24px 32px",
            border: "1px solid transparent"
          }}
          transition={{ type: "spring", bounce: 0.05, duration: 0.5 }}
        >
          <motion.h1 
            layoutId={`daily-title-${upgrade.day}`} 
            style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#16191f", lineHeight: 1.1, marginBottom: 16 }}
            transition={{ type: "spring", bounce: 0.05, duration: 0.5 }}
          >
            D{upgrade.day}: {upgrade.title}
          </motion.h1>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, fontWeight: 700, background: "#fff3cd", color: "#ff9900", border: "1px solid #ffd966", padding: "3px 10px", borderRadius: 4 }}>
              D{upgrade.day}
            </span>
            <span style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 10, padding: "3px 10px", borderRadius: 4, background: "#e6f6fa", color: "#00a1c9", border: "1px solid #b3e4f1", fontWeight: 700 }}>
              {upgrade.category}
            </span>
            <span style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 10, padding: "3px 10px", borderRadius: 4, background: isCompleted ? "#e6f4ea" : "#fff3e0", color: isCompleted ? "#1d8102" : "#e65100", border: `1px solid ${isCompleted ? "#a3d9a5" : "#ffe0b2"}`, fontWeight: 700 }}>
              {isCompleted ? "✓ Completed" : "Upcoming"}
            </span>
          </div>

          <p style={{ fontSize: 15, color: "#545b64", lineHeight: 1.7, maxWidth: 680 }}>
            {upgrade.summary}
          </p>

          {upgrade.keyQuestion && (
            <div style={{ marginTop: 32, maxWidth: 680, background: "#f8faff", border: "1px solid #ddecfe", borderLeft: "4px solid #5e8ef7", borderRadius: "8px 14px 14px 8px", padding: "20px 24px", display: "flex", gap: 16, alignItems: "flex-start", boxShadow: "0 4px 12px rgba(94, 142, 247, 0.06)" }}>
              <div style={{ background: "#e8f0fe", width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 20 }}>
                🎯
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-dm-sans, sans-serif)", fontSize: 13, fontWeight: 800, color: "#4285f4", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
                  Key Question 
                  <span style={{ fontSize: 10, background: "#e8f0fe", color: "#4285f4", padding: "3px 8px", borderRadius: 12, fontWeight: 700, letterSpacing: "normal", textTransform: "none" }}>Tự trả lời được = học đủ sâu</span>
                </div>
                <div style={{ fontSize: 16, color: "#16191f", lineHeight: 1.6, fontWeight: 500 }}>
                  {upgrade.keyQuestion}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* ── 2-col layout: Steps | Checklist + Notes ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 32, alignItems: "start" }}>

          {/* ── LEFT: Steps ── */}
          <div id="section-steps" className="detail-section">
            {dayNum === 2 && (
              <div style={{ marginBottom: 24, borderRadius: 14, overflow: "hidden", border: "1px solid #eaeded", boxShadow: "0 4px 20px rgba(0,0,0,0.03)" }}>
                <img src="/d2-css-flexbox/axis-cross-axis.png" alt="Flexbox Axis" style={{ width: "100%", display: "block" }} />
              </div>
            )}

            <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#545b64", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18 }}>
              📋 Step-by-step — {detail.steps.length} bước
            </div>

            {detail.steps.map((step: Step) => {
              const isOpen = expandedStep === step.id;
              return (
                <div key={step.id} className={`step-card ${isOpen ? "active" : ""}`}>
                  <div className="step-header" onClick={() => setExpandedStep(isOpen ? null : step.id)}>
                    <div className="step-num">{step.id}</div>
                    <div style={{ flex: 1, fontFamily: "var(--font-syne, sans-serif)", fontSize: 15, fontWeight: 700, color: "#16191f" }}>
                      {step.title}
                    </div>
                    <svg className="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#545b64" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="step-body">
                          <p className="step-desc">{step.description}</p>
                          {step.code && (
                            <div style={{ marginBottom: 12, borderRadius: 10, overflow: 'hidden' }}>
                              <SyntaxHighlighter
                                language={guessLanguage(step.code)}
                                style={vscDarkPlus}
                                customStyle={{ margin: 0, padding: "16px 20px", fontSize: 13, fontFamily: "var(--font-dm-mono, monospace)" }}
                              >
                                {step.code.replace(/\\n/g, "\n")}
                              </SyntaxHighlighter>
                            </div>
                          )}
                          {step.tip && (
                            <div className="step-tip">
                              <span style={{ fontSize: 16, flexShrink: 0 }}>💡</span>
                              <span>{step.tip}</span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* ── D2: Flexbox 1D Concept Clarification ── */}
            {dayNum === 2 && (
              <div id="section-concept" style={{ marginTop: 40 }}>

                {/* Section label */}
                <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#545b64", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18 }}>
                  🧠 Concept Clarification — Tại sao Flexbox là 1D
                </div>

                {/* ── Card 1: Core mental model ── */}
                <div style={{ background: "#f8faff", border: "1px solid #ddecfe", borderLeft: "4px solid #5e8ef7", borderRadius: "8px 14px 14px 8px", padding: "20px 24px", marginBottom: 14 }}>
                  <div style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: 15, fontWeight: 700, color: "#16191f", marginBottom: 10 }}>
                    Flex = cuộc đàm phán trên 1 trục
                  </div>
                  <p style={{ fontSize: 14, color: "#545b64", lineHeight: 1.8, marginBottom: 12 }}>
                    Flexbox được sinh ra để <strong style={{ color: "#16191f" }}>distribute space dọc theo 1 trục</strong> — và để các items <strong style={{ color: "#16191f" }}>tự negotiate kích thước với nhau</strong>.
                  </p>
                  <p style={{ fontSize: 14, color: "#545b64", lineHeight: 1.8, marginBottom: 12 }}>
                    Flexbox là 1D vì cuộc đàm phán giữa container và items <strong style={{ color: "#16191f" }}>chỉ xảy ra trên 1 trục tại một thời điểm</strong>. Và đó chính là lý do bạn phải chọn trục trước (<code style={{ background: "#e8f0fe", padding: "1px 6px", borderRadius: 4, fontSize: 12 }}>flex-direction</code>): phải có 1 trục để negotiate.
                  </p>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <div style={{ background: "#e6f6fa", border: "1px solid #b3e4f1", borderRadius: 8, padding: "8px 14px", fontSize: 13, color: "#00818a" }}>
                      <strong>Flex</strong> → space phụ thuộc <em>content</em>
                    </div>
                    <div style={{ background: "#f3f0ff", border: "1px solid #c4b5fd", borderRadius: 8, padding: "8px 14px", fontSize: 13, color: "#6d28d9" }}>
                      <strong>Grid</strong> → content phụ thuộc <em>space</em>
                    </div>
                  </div>
                </div>

                {/* ── Card 2: Nav bar "negotiation" visual ── */}
                <div style={{ background: "#ffffff", border: "1px solid #eaeded", borderRadius: 14, padding: "20px 24px", marginBottom: 14 }}>
                  <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#545b64", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>
                    Ví dụ — Nav bar
                  </div>

                  {/* Visual nav */}
                  <div style={{ background: "#16191f", borderRadius: 10, padding: "12px 20px", marginBottom: 12, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                    {["Logo", "Home", "About", "Contact", "Login"].map((item, i) => (
                      <div key={item} style={{
                        fontFamily: "var(--font-dm-mono, monospace)", fontSize: 13, fontWeight: 700,
                        color: i === 0 ? "#5e8ef7" : i === 4 ? "#3ecf8e" : "#e3e7ed",
                        padding: "6px 12px",
                        borderRadius: 6,
                        background: i === 4 ? "rgba(62,207,142,0.1)" : "transparent",
                      }}>
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Axis label */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <div style={{ height: 2, flex: 1, background: "linear-gradient(90deg, #ff9900, #ff990000)", borderRadius: 1 }} />
                    <span style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#ff9900", fontWeight: 700, whiteSpace: "nowrap" }}>
                      ← main axis (row) →
                    </span>
                    <div style={{ height: 2, flex: 1, background: "linear-gradient(270deg, #ff9900, #ff990000)", borderRadius: 1 }} />
                  </div>

                  <div style={{ background: "#fff3cd", border: "1px solid #ffd966", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#7a5800", fontStyle: "italic" }}>
                    Mỗi item hỏi nhau: &quot;Mày cần bao nhiêu? Tao lấy phần còn lại.&quot; — <strong>justify-content</strong> quyết định cách chia phần đó.
                  </div>
                </div>

                {/* ── Card 3: Interactive demo ── */}
                <div id="section-interactive" style={{ background: "#ffffff", border: "1px solid #eaeded", borderRadius: 14, padding: "20px 24px", marginBottom: 14 }}>
                  <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#545b64", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
                    Interactive — thử thay đổi các giá trị
                  </div>

                  {/* Controls */}
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 20 }}>
                    {[
                      { label: "flex-direction", value: flexDir, setter: setFlexDir, opts: ["row", "column"] },
                      { label: "justify-content (main axis)", value: flexJC, setter: setFlexJC, opts: ["flex-start", "center", "flex-end", "space-between", "space-around"] },
                      { label: "align-items (cross axis)", value: flexAI, setter: setFlexAI, opts: ["flex-start", "center", "flex-end", "stretch"] },
                    ].map(({ label, value, setter, opts }) => (
                      <div key={label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                        <span style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#545b64" }}>{label}</span>
                        <select
                          value={value}
                          onChange={(e) => (setter as (v: string) => void)(e.target.value)}
                          style={{ fontSize: 13, padding: "5px 10px", borderRadius: 8, border: "1px solid #eaeded", background: "#f2f3f5", color: "#16191f", cursor: "pointer", fontFamily: "var(--font-dm-mono, monospace)" }}
                        >
                          {opts.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                    ))}
                  </div>

                  {/* Flex demo container */}
                  <div style={{
                    border: "1px solid #eaeded", borderRadius: 10, padding: 16, minHeight: 200,
                    display: "flex",
                    flexDirection: flexDir,
                    justifyContent: flexJC,
                    alignItems: flexAI,
                    gap: 8, background: "#f8faff",
                  }}>
                    {["A", "B", "C"].map((l) => (
                      <div key={l} style={{ background: "#e6f6fa", color: "#00818a", border: "1px solid #b3e4f1", borderRadius: 8, padding: "10px 18px", fontSize: 14, fontWeight: 700, fontFamily: "var(--font-dm-mono, monospace)" }}>
                        {l}
                      </div>
                    ))}
                  </div>

                  {/* Axis description */}
                  <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 4 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#545b64" }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff9900", flexShrink: 0, display: "inline-block" }} />
                      <span style={{ color: "#ff9900", fontWeight: 700 }}>main axis {flexDir === "row" ? "→" : "↓"}</span>
                      <span>— justify-content phân phối space theo chiều này</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#545b64" }}>
                      <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#1d8102", flexShrink: 0, display: "inline-block" }} />
                      <span style={{ color: "#1d8102", fontWeight: 700 }}>cross axis {flexDir === "row" ? "↓" : "→"}</span>
                      <span>— align-items căn chỉnh theo chiều này</span>
                    </div>
                  </div>

                  {/* CSS output */}
                  <div style={{ marginTop: 14, background: "#16191f", borderRadius: 8, padding: "12px 16px", fontFamily: "var(--font-dm-mono, monospace)", fontSize: 12, color: "#e3e7ed", lineHeight: 1.8 }}>
                    <span style={{ color: "#9cdcfe" }}>.container</span> {"{"}<br />
                    {"  "}<span style={{ color: "#9cdcfe" }}>display</span>: <span style={{ color: "#ce9178" }}>flex</span>;<br />
                    {"  "}<span style={{ color: "#9cdcfe" }}>flex-direction</span>: <span style={{ color: "#4fc1ff" }}>{flexDir}</span>;<br />
                    {"  "}<span style={{ color: "#9cdcfe" }}>justify-content</span>: <span style={{ color: "#4fc1ff" }}>{flexJC}</span>; <span style={{ color: "#6a9955" }}>{"/* main axis */"}</span><br />
                    {"  "}<span style={{ color: "#9cdcfe" }}>align-items</span>: <span style={{ color: "#4fc1ff" }}>{flexAI}</span>; <span style={{ color: "#6a9955" }}>{"/* cross axis */"}</span><br />
                    {"}"}
                  </div>
                </div>

                {/* ── Card 4: Thinking order ── */}
                <div style={{ background: "#f2f3f5", border: "1px solid #eaeded", borderRadius: 14, padding: "20px 24px" }}>
                  <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#545b64", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>
                    Thứ tự suy nghĩ khi dùng Flex
                  </div>
                  {[
                    { num: "01", prop: "flex-direction", title: "Chọn trục", desc: "Content chảy theo row hay column? Đây là câu hỏi đầu tiên vì nó quyết định main axis — trục negotiate." },
                    { num: "02", prop: "justify-content", title: "Distribute trên main axis", desc: "Items chia space với nhau như thế nào? flex-start, center, space-between..." },
                    { num: "03", prop: "align-items", title: "Align trên cross axis", desc: "Items thẳng hàng với nhau như thế nào? Chiều vuông góc với main axis." },
                  ].map(({ num, prop, title, desc }) => (
                    <div key={num} style={{ display: "flex", gap: 16, marginBottom: 16, alignItems: "flex-start" }}>
                      <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 18, fontWeight: 800, color: "#eaeded", flexShrink: 0, lineHeight: 1 }}>
                        {num}
                      </div>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                          <span style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: 14, fontWeight: 700, color: "#16191f" }}>{title}</span>
                          <code style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, background: "#e6f6fa", color: "#00818a", padding: "2px 8px", borderRadius: 4 }}>{prop}</code>
                        </div>
                        <p style={{ fontSize: 13, color: "#545b64", lineHeight: 1.6, margin: 0 }}>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}
          </div>

          {/* ── RIGHT: Checklist + Notes ── */}
          <div className="detail-section" style={{ display: "flex", flexDirection: "column", gap: 24, position: "sticky", top: 104 }}>

            {/* Checklist card */}
            <div style={{ background: "#f2f3f5", borderRadius: 16, padding: "20px 4px 12px" }}>
              {/* Header */}
              <div style={{ padding: "0 16px 14px", borderBottom: "1px solid #eaeded", marginBottom: 4 }}>
                <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#545b64", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
                  ✅ Checklist
                </div>
                {/* Progress */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: doneCount === totalCount ? "#1d8102" : "#545b64", fontWeight: 700 }}>
                    {doneCount}/{totalCount} hoàn thành
                  </span>
                  <span style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#545b64" }}>
                    {progressPct}%
                  </span>
                </div>
                <div className="progress-bar-track">
                  <div className="progress-bar-fill" style={{ width: `${progressPct}%` }} />
                </div>
              </div>

              {/* Items */}
              <div style={{ padding: "4px 8px" }}>
                {detail.checklist.map((item: ChecklistItem) => {
                  const isDone = !!checked[item.id];
                  return (
                    <div key={item.id} className="check-item" onClick={() => toggleCheck(item.id)}>
                      <div className={`check-box ${isDone ? "done" : ""}`}>
                        {isDone && (
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        )}
                      </div>
                      <span className={`check-label ${isDone ? "done" : ""}`}>{item.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* All done message */}
              {doneCount === totalCount && totalCount > 0 && (
                <div style={{ margin: "8px 16px 4px", background: "#e6f4ea", border: "1px solid #a3d9a5", borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-dm-mono, monospace)", fontSize: 12, color: "#1d8102", fontWeight: 700 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Hoàn thành ngày D{dayNum}! 🎉
                </div>
              )}
            </div>

            {/* Notes card */}
            <div style={{ background: "#f2f3f5", borderRadius: 16, padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#545b64", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  📝 Notes
                </div>
                {noteSaved && (
                  <span style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 10, color: "#1d8102", background: "#e6f4ea", padding: "2px 8px", borderRadius: 4, border: "1px solid #a3d9a5" }}>
                    Saved ✓
                  </span>
                )}
              </div>
              <textarea
                className="notes-area"
                value={notes}
                onChange={(e) => handleNotesChange(e.target.value)}
                placeholder={detail.notesPlaceholder}
              />
              <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 10, color: "#aab7c4", marginTop: 8 }}>
                Auto-saved to local storage
              </div>
            </div>

            {/* Navigation: prev / next */}
            <div style={{ display: "flex", gap: 10 }}>
              {dayNum > 0 && (
                <button
                  onClick={() => router.push(`/daily/${dayNum - 1}`)}
                  style={{ flex: 1, padding: "10px 14px", background: "#f2f3f5", border: "1px solid #eaeded", borderRadius: 10, fontFamily: "var(--font-dm-mono, monospace)", fontSize: 12, fontWeight: 700, color: "#545b64", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, justifyContent: "center", transition: "all 0.15s ease" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#00a1c9"; (e.currentTarget as HTMLButtonElement).style.color = "#00a1c9"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#eaeded"; (e.currentTarget as HTMLButtonElement).style.color = "#545b64"; }}
                >
                  ← D{dayNum - 1}
                </button>
              )}
              {dayNum < 40 && (
                <button
                  onClick={() => router.push(`/daily/${dayNum + 1}`)}
                  style={{ flex: 1, padding: "10px 14px", background: "#f2f3f5", border: "1px solid #eaeded", borderRadius: 10, fontFamily: "var(--font-dm-mono, monospace)", fontSize: 12, fontWeight: 700, color: "#545b64", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, justifyContent: "center", transition: "all 0.15s ease" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#00a1c9"; (e.currentTarget as HTMLButtonElement).style.color = "#00a1c9"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#eaeded"; (e.currentTarget as HTMLButtonElement).style.color = "#545b64"; }}
                >
                  D{dayNum + 1} →
                </button>
              )}
            </div>

          </div>
        </div>
      </div>
      </div>
      {mounted && createPortal(
        <div style={{
          position: "fixed",
          right: 6,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 9999,
          pointerEvents: "none",
        }}>
          {navSections.map(({ id, label }, i) => {
            const isActive = activeSection === id;
            return (
              <div key={id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {i > 0 && (
                  <div style={{ width: 1, height: 28, background: "#d5dbdb" }} />
                )}
                <div style={{ position: "relative", display: "flex", alignItems: "center", pointerEvents: "auto" }}>
                  {/* Label */}
                  <div style={{
                    position: "absolute",
                    right: "calc(100% + 10px)",
                    whiteSpace: "nowrap",
                    fontFamily: "var(--font-dm-mono, monospace)",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#ffffff",
                    background: "#16191f",
                    padding: "4px 10px",
                    borderRadius: 6,
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateX(0)" : "translateX(6px)",
                    transition: "all 0.2s ease",
                    pointerEvents: "none",
                  }}>
                    {label}
                  </div>
                  {/* Dot */}
                  <button
                    onClick={() => scrollToSection(id)}
                    title={label}
                    style={{
                      width: isActive ? 12 : 6,
                      height: isActive ? 12 : 6,
                      borderRadius: "50%",
                      background: isActive ? "#00a1c9" : "#d5dbdb",
                      border: isActive ? "2px solid rgba(0,161,201,0.25)" : "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 0.25s ease",
                      flexShrink: 0,
                      outline: "none",
                      boxShadow: isActive ? "0 0 8px rgba(0,161,201,0.4)" : "none",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>,
        document.body
      )}
    </>
  );
}

/* ─── shared styles ─── */
const pageStyle: React.CSSProperties = {
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
};

const backBtnStyle: React.CSSProperties = {
  display: "inline-flex", alignItems: "center", gap: 6,
  fontFamily: "var(--font-dm-mono, monospace)", fontSize: 12, fontWeight: 700,
  color: "#545b64", padding: "8px 14px", borderRadius: 8,
  border: "1px solid #eaeded", background: "#f2f3f5",
  cursor: "pointer", marginBottom: 32,
};
