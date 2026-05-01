"use client";

import Link from "next/link";
import { PROJECTS, STATUS_STYLE } from "@/lib/marketing-data";
import { FadeIn } from "@/components/marketing/FadeIn";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Code2, Cpu, Sparkles, Utensils } from "lucide-react";

const getIcon = (id: string) => {
  switch (id) {
    case "frontend-daily":
      return <Sparkles className="h-5 w-5 text-white" />;
    case "real-time-food-delivery":
      return <Utensils className="h-5 w-5 text-white" />;
    case "js-async":
      return <Cpu className="h-5 w-5 text-white" />;
    default:
      return <Code2 className="h-5 w-5 text-white" />;
  }
};

export function MarketingProjects() {
  const showcaseProjects = PROJECTS.slice(0, 4);

  return (
    <div className="relative z-10 w-full max-w-275 mx-auto px-8 py-10">
      {/* Section header */}
      <FadeIn delay={0}>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <span
              style={{
                fontFamily: "var(--font-syne, sans-serif)",
                fontSize: 22,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              Projects
            </span>
            <span
              style={{
                fontFamily: "var(--font-dm-mono, monospace)",
                fontSize: 10,
                color: "#444",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginTop: 2,
              }}
            >
              {showcaseProjects.length} works
            </span>
          </div>
          <div
            style={{
              height: 1,
              flex: 1,
              marginLeft: 24,
              background: "rgba(255,255,255,0.05)",
            }}
          />
        </div>
      </FadeIn>

      {/* Grid: max 4 items, 2 cols per row */}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {showcaseProjects.map((project, idx) => {
          const statusStyle = STATUS_STYLE[project.status];

          const cardInner = (
            <li className="list-none h-full">
                  <div className="relative h-full rounded-2xl border border-white/5 bg-[#0D0D0D] p-2 md:rounded-3xl md:p-3 transition-colors duration-300 group-hover:border-white/10">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                    />
                    <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-white/5 bg-[#111] p-6 md:p-8 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                      
                      <div className="relative flex flex-1 flex-col gap-4">
                        {/* Header: Icon and Category/Status */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-fit rounded-xl border border-white/10 bg-white/5 p-2.5">
                            {getIcon(project.id)}
                          </div>
                          
                          <span
                            className="flex items-center gap-1.5 px-2 py-1 rounded-full shrink-0"
                            style={{
                              background: statusStyle.bg,
                              fontSize: 10,
                              fontFamily: "var(--font-dm-mono, monospace)",
                              color: statusStyle.color,
                              letterSpacing: "0.06em",
                            }}
                          >
                            <span
                              style={{
                                width: 5,
                                height: 5,
                                borderRadius: "50%",
                                background: statusStyle.dot,
                                flexShrink: 0,
                                display: "inline-block",
                              }}
                            />
                            {project.status}
                          </span>
                        </div>

                        {/* Title & Desc */}
                        <div className="space-y-4 relative z-10 w-full">
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
                          <h3
                            style={{
                              fontFamily: "var(--font-syne, sans-serif)",
                              fontSize: 18,
                              fontWeight: 700,
                              color: "#e8e8e8",
                              lineHeight: 1.3,
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {project.title}
                          </h3>
                          <p
                            style={{
                              fontSize: 14,
                              color: "#666",
                              lineHeight: 1.6,
                            }}
                          >
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2 mt-4 pt-6 border-t border-white/5 z-10 relative">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="transition duration-300 group-hover:border-purple-400/25 group-hover:text-purple-100"
                            style={{
                              fontFamily: "var(--font-dm-mono, monospace)",
                              fontSize: 10,
                              color: "#b8a9d6",
                              background: "linear-gradient(180deg, rgba(156,64,255,0.14), rgba(255,255,255,0.035))",
                              border: "1px solid rgba(156,64,255,0.18)",
                              padding: "5px 11px",
                              borderRadius: 999,
                              letterSpacing: "0.04em",
                              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </li>
          );

          return (
            <FadeIn key={project.id} delay={100 + (idx * 50)}>
              {project.internal ? (
                <Link
                  href={`/projects/${project.id}`}
                  style={{ textDecoration: "none", display: "block", height: "100%" }}
                  className="group"
                >
                  {cardInner}
                </Link>
              ) : (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", display: "block", height: "100%" }}
                  className="group"
                >
                  {cardInner}
                </a>
              )}
            </FadeIn>
          );
        })}
      </ul>
    </div>
  );
}
