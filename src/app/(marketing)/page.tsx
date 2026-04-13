import Link from "next/link";
import Image from "next/image";
import { CometCard } from "@/components/ui/comet-card";

const PROJECTS = [
  {
    id: "frontend-daily",
    category: "Learning Dashboard",
    title: "Frontend Daily — Fresher → Junior",
    description: "40-day roadmap tracker với progress dashboard, learning curve chart, và daily checklist. Built với Next.js 16 App Router + Recharts.",
    tech: ["Next.js", "TypeScript", "Recharts", "localStorage"],
    href: "/dashboard",
    internal: true,
    year: "2026",
    status: "Live",
  },
  {
    id: "html-css-layout",
    category: "UI Practice",
    title: "CSS Layout Mastery",
    description: "Responsive layouts thực chiến: Flexbox, Grid, và positioning. Từ 1-column mobile đến complex dashboard grids.",
    tech: ["HTML5", "CSS3", "Flexbox", "Grid"],
    href: "/daily/2",
    internal: true,
    year: "2026",
    status: "In Progress",
  },
  {
    id: "js-async",
    category: "JavaScript",
    title: "Async / Event Loop Deep Dive",
    description: "Visual demo về event loop, Promise chain, async/await, và AbortController pattern để clean up fetch khi unmount.",
    tech: ["JavaScript", "Promises", "AbortController"],
    href: "/daily/7",
    internal: true,
    year: "2026",
    status: "In Progress",
  },
  {
    id: "react-components",
    category: "React",
    title: "Component Architecture",
    description: "Xây dựng component system với props, controlled/uncontrolled state, custom hooks, và performance optimization với useMemo/useCallback.",
    tech: ["React 19", "Hooks", "TypeScript"],
    href: "/daily/11",
    internal: true,
    year: "2026",
    status: "Coming Soon",
  },
];

const STATUS_STYLE: Record<string, { bg: string; color: string; dot: string }> = {
  "Live": { bg: "rgba(29,129,2,0.15)", color: "#4ade80", dot: "#1d8102" },
  "In Progress": { bg: "rgba(255,153,0,0.12)", color: "#ff9900", dot: "#ff9900" },
  "Coming Soon": { bg: "rgba(255,255,255,0.05)", color: "#666", dot: "#444" },
};

export default function EntryPage() {
  return (
    <div
      className="min-h-screen text-white relative overflow-x-hidden selection:bg-blue-500/20"
      style={{ fontFamily: "var(--font-dm-sans, sans-serif)", backgroundColor: "#050505" }}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none fixed z-0" style={{ top: 0, left: 0, width: "60vw", height: "60vh", background: "radial-gradient(ellipse at top left, rgba(59,130,246,0.10) 0%, transparent 70%)" }} />
      <div className="pointer-events-none fixed z-0" style={{ bottom: 0, right: 0, width: "40vw", height: "40vh", background: "radial-gradient(ellipse at bottom right, rgba(59,130,246,0.06) 0%, transparent 70%)" }} />

      <main className="relative z-10 w-full max-w-[1100px] mx-auto px-8 py-20">

        {/* ── HEADER ── */}
        <div className="flex items-center justify-between mb-20">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 block" style={{ boxShadow: "0 0 10px 3px rgba(59,130,246,0.7)" }} />
            <span style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: 16, fontWeight: 800, letterSpacing: "-0.02em" }}>
              Crystal John
            </span>
          </div>
          <Link
            href="/dashboard"
            style={{
              fontFamily: "var(--font-dm-mono, monospace)",
              fontSize: 11,
              color: "#666",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: 6,
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            className="hover:text-white"
          >
            Enter Dashboard
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>

        {/* ── HERO ── */}
        <div className="flex items-center justify-between gap-12" style={{ marginBottom: 80 }}>

          {/* Left: text */}
          <div className="flex-1 min-w-0">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 mb-8"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 relative shrink-0">
                <span className="absolute inset-0 rounded-full animate-ping bg-blue-500 opacity-75" />
              </span>
              <span style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#777" }}>
                Front-end Developer In Training · Apr 2026
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-syne, sans-serif)",
                fontSize: "clamp(3.5rem, 6vw, 7rem)",
                fontWeight: 700,
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
                marginBottom: "1.5rem",
              }}
            >
              Fresher<br />
              <span style={{ color: "#333" }}>→ Junior.</span>
            </h1>

            <p style={{ fontSize: 16, color: "#666", lineHeight: 1.7, maxWidth: 460, marginBottom: "2rem" }}>
              Learn by doing — building projects, solving real problems, và growing every single day.
              40-day roadmap từ HTML semantics đến TypeScript + Next.js.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 transition-all duration-300 hover:bg-white hover:text-black"
                style={{
                  fontFamily: "var(--font-dm-mono, monospace)",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  background: "transparent",
                  padding: "12px 24px",
                  borderRadius: 9999,
                }}
              >
                View Journey
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-all duration-300 hover:border-white/30 hover:text-white"
                style={{
                  fontFamily: "var(--font-dm-mono, monospace)",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#666",
                  background: "transparent",
                  padding: "12px 24px",
                  borderRadius: 9999,
                }}
              >
                GitHub
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Comet Card */}
          <div className="hidden md:flex shrink-0 items-center justify-center">
            <CometCard>
              <button
                type="button"
                className="flex w-64 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2"  // thêm saturate-0 nếu muốn ảnh đen trắng
                aria-label="View invite F7RA"
                style={{ transformStyle: "preserve-3d", transform: "none", opacity: 1 }}
              >
                <div className="mx-2 flex-1">
                  <div className="relative mt-2 aspect-3/4 w-full">
                    <Image
                      loading="lazy"
                      className="absolute inset-0 h-full w-full rounded-[16px] bg-black object-cover contrast-75"
                      alt="Avatar"
                      src="/avatar.jpg"
                      fill
                      sizes="256px"
                    />
                  </div>
                </div>
                <div className="mt-2 flex shrink-0 items-center justify-between p-4 font-mono text-white">
                  <div className="text-xs">Trần Phan Thanh Phúc</div>
                  {/* <div className="text-xs text-gray-300 opacity-50">#Frontend</div> */}
                </div>
              </button>
            </CometCard>
          </div>

        </div>

        {/* ── PROJECTS ── */}
        <div>
          {/* Section header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <span style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: 22, fontWeight: 700, color: "#fff" }}>
                Projects
              </span>
              <span style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 10, color: "#444", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 }}>
                {PROJECTS.length} works
              </span>
            </div>
            <div style={{ height: 1, flex: 1, marginLeft: 24, background: "rgba(255,255,255,0.05)" }} />
          </div>

          {/* 2-column grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
            }}
          >
            {PROJECTS.map((project) => {
              const statusStyle = STATUS_STYLE[project.status];
              const CardTag = project.internal ? Link : "a";
              const cardProps = project.internal
                ? { href: project.href }
                : { href: project.href, target: "_blank", rel: "noreferrer" };

              return (
                <CardTag
                  key={project.id}
                  {...(cardProps as Record<string, string>)}
                  style={{ textDecoration: "none", display: "block" }}
                  className="group"
                >
                  <div
                    style={{
                      background: "#0D0D0D",
                      border: "1px solid rgba(255,255,255,0.05)",
                      borderRadius: 20,
                      overflow: "hidden",
                      transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                    }}
                    className="group-hover:border-white/10 group-hover:-translate-y-1 group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
                  >
                    {/* Preview area */}
                    <div
                      style={{
                        height: 220,
                        background: "#111",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                        position: "relative",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {/* Placeholder grid pattern */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
                          backgroundSize: "32px 32px",
                        }}
                      />
                      {/* Glow */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "radial-gradient(ellipse at 50% 60%, rgba(59,130,246,0.07) 0%, transparent 70%)",
                          transition: "opacity 0.4s",
                        }}
                        className="opacity-0 group-hover:opacity-100"
                      />
                      {/* Icon placeholder */}
                      <div
                        style={{
                          width: 56,
                          height: 56,
                          borderRadius: 16,
                          background: "#161616",
                          border: "1px solid rgba(255,255,255,0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 24,
                          position: "relative",
                          zIndex: 1,
                        }}
                      >
                        {project.id === "frontend-daily" ? "📊" :
                         project.id === "html-css-layout" ? "🎨" :
                         project.id === "js-async" ? "⚡" : "⚛️"}
                      </div>
                      {/* View overlay on hover */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "rgba(0,0,0,0.6)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          opacity: 0,
                          transition: "opacity 0.25s",
                          zIndex: 2,
                        }}
                        className="group-hover:opacity-100"
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-dm-mono, monospace)",
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#fff",
                            background: "rgba(255,255,255,0.1)",
                            border: "1px solid rgba(255,255,255,0.2)",
                            padding: "10px 20px",
                            borderRadius: 9999,
                            backdropFilter: "blur(8px)",
                          }}
                        >
                          View Project →
                        </span>
                      </div>
                    </div>

                    {/* Card body */}
                    <div style={{ padding: "20px 24px 24px" }}>
                      {/* Category row */}
                      <div className="flex items-center justify-between mb-3">
                        <span
                          style={{
                            fontFamily: "var(--font-dm-mono, monospace)",
                            fontSize: 10,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#444",
                          }}
                        >
                          {project.category}
                        </span>
                        <span
                          className="flex items-center gap-1.5 px-2 py-1 rounded-full"
                          style={{
                            background: statusStyle.bg,
                            fontSize: 10,
                            fontFamily: "var(--font-dm-mono, monospace)",
                            color: statusStyle.color,
                            letterSpacing: "0.06em",
                          }}
                        >
                          <span style={{ width: 5, height: 5, borderRadius: "50%", background: statusStyle.dot, flexShrink: 0, display: "inline-block" }} />
                          {project.status}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontFamily: "var(--font-syne, sans-serif)",
                          fontSize: 16,
                          fontWeight: 700,
                          color: "#e8e8e8",
                          lineHeight: 1.3,
                          marginBottom: 10,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: 13,
                          color: "#555",
                          lineHeight: 1.6,
                          marginBottom: 16,
                        }}
                      >
                        {project.description}
                      </p>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontFamily: "var(--font-dm-mono, monospace)",
                              fontSize: 10,
                              color: "#555",
                              background: "#161616",
                              border: "1px solid rgba(255,255,255,0.05)",
                              padding: "3px 8px",
                              borderRadius: 6,
                              letterSpacing: "0.03em",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardTag>
              );
            })}
          </div>
        </div>

        {/* ── FOOTER ── */}
        <div
          className="mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: 14, fontWeight: 600, color: "#444" }}>
            Building everyday. · 2026
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-white"
            style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 11, color: "#444", letterSpacing: "0.06em", textTransform: "uppercase" }}
          >
            Enter Dashboard
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>

      </main>
    </div>
  );
}
