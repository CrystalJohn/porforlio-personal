"use client";

import type { SVGProps } from "react";
import { FadeIn } from "@/components/marketing/FadeIn";
import { cn } from "@/lib/utils";

import {
  IconExpress,
  IconFigma,
  IconFramer,
  IconHtml5,
  IconJavaScript,
  IconMongoDB,
  IconNextJs,
  IconNodeJs,
  IconReact,
  IconTailwindCSS,
  IconTypescript,
  IconVercel,
} from "@/components/ui/brand-icons";

type SkillIcon = (props: SVGProps<SVGSVGElement>) => React.ReactElement;

const skillGroups: {
  title: string;
  accent: string;
  summary: string;
  skills: { label: string; value: string; icon: SkillIcon; className: string }[];
}[] = [
  {
    title: "Frontend Core",
    accent: "Production UI",
    summary: "Build typed, reusable, App Router-based interfaces with strong component structure.",
    skills: [
      { label: "React", value: "Component architecture", icon: IconReact, className: "text-cyan-400" },
      { label: "Next.js", value: "App Router & routing", icon: IconNextJs, className: "" },
      { label: "TypeScript", value: "Strict type safety", icon: IconTypescript, className: "" },
      { label: "JavaScript", value: "Core interaction logic", icon: IconJavaScript, className: "" },
    ],
  },
  {
    title: "UI, Styling & Motion",
    accent: "Portfolio-ready UX",
    summary: "Convert design ideas into responsive, polished interfaces with tasteful animation.",
    skills: [
      { label: "Tailwind CSS", value: "Responsive systems", icon: IconTailwindCSS, className: "text-blue-400" },
      { label: "Framer Motion", value: "Micro-interactions", icon: IconFramer, className: "text-purple-400" },
      { label: "Figma", value: "Design handoff", icon: IconFigma, className: "" },
      { label: "HTML5", value: "Semantic layout", icon: IconHtml5, className: "" },
    ],
  },
  {
    title: "Backend & Delivery",
    accent: "Deployable products",
    summary: "Connect UI to APIs, data, and production hosting workflows.",
    skills: [
      { label: "Node.js", value: "Server runtime", icon: IconNodeJs, className: "text-green-500" },
      { label: "Express", value: "API foundations", icon: IconExpress, className: "text-gray-300" },
      { label: "MongoDB", value: "Document data", icon: IconMongoDB, className: "text-green-600" },
      { label: "Vercel", value: "Production deploy", icon: IconVercel, className: "text-white" },
    ],
  },
];

export function MarketingSkills() {
  return (
    <div className="relative z-10 w-full max-w-275 mx-auto px-8 py-32">
      <FadeIn delay={0}>
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2
            style={{
              fontFamily: "var(--font-syne, sans-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "var(--mk-text)",
              marginBottom: "0.5rem",
            }}
          >
            Tools & <span style={{ color: "#9c40ff" }}>Frameworks</span>
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "var(--mk-text-muted)",
              lineHeight: 1.6,
            }}
          >
            A focused stack for building fast, typed, responsive web products from UI to deployment.
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-4 lg:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <FadeIn key={group.title} delay={100 + groupIndex * 100} className="h-full">
            <section className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/5">
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-purple-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="mb-6">
                <span className="mb-3 inline-flex rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-purple-200">
                  {group.accent}
                </span>
                <h3
                  className="mb-3 text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-syne, sans-serif)" }}
                >
                  {group.title}
                </h3>
                <p className="text-sm leading-6 text-white/55">{group.summary}</p>
              </div>

              <div className="grid gap-3">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.label}
                      className="flex items-center gap-3 rounded-2xl border border-white/8 bg-[#101015] p-3 transition duration-300 hover:border-white/15 hover:bg-[#15151d]"
                    >
                      <div className="grid size-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                        <Icon className={cn("size-7", skill.className)} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white">{skill.label}</div>
                        <div
                          className="mt-0.5 truncate text-[11px] uppercase tracking-[0.08em] text-white/35"
                          style={{ fontFamily: "var(--font-dm-mono, monospace)" }}
                        >
                          {skill.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
