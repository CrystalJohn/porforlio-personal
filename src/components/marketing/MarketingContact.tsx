"use client";

import { SOCIALS } from "@/lib/marketing-data";
import { FadeIn } from "@/components/marketing/FadeIn";

export function MarketingContact() {
  return (
    <div className="relative z-10 w-full max-w-275 mx-auto px-8 pb-32 pt-20 text-center flex flex-col items-center">
      <FadeIn delay={0}>
        <div
          className="w-12 h-12 flex items-center justify-center rounded-full mb-8 relative mx-auto"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <span
            className="absolute w-full h-full rounded-full"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 80%)" }}
          />
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white relative z-10"
          >
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9z" />
          </svg>
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <h2
          style={{
            fontFamily: "var(--font-syne, sans-serif)",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 700,
            color: "var(--mk-text)",
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          Have a project in mind?<br />
          <span style={{ color: "var(--mk-text-muted)" }}>Let's connect.</span>
        </h2>
      </FadeIn>

      <FadeIn delay={200}>
        <p
          style={{
            fontSize: 18,
            color: "var(--mk-text-muted)",
            lineHeight: 1.7,
            maxWidth: 600,
            marginBottom: "2.5rem",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          I'm currently looking to join a cross-functional team that values improving people's lives through accessible design.
        </p>
      </FadeIn>

      <FadeIn delay={300}>
        <a
          href="mailto:ibrhaimmemon930@gmail.com"
          className="inline-flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white hover:text-black mb-16"
          style={{
            fontFamily: "var(--font-dm-mono, monospace)",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff",
            background: "transparent",
            padding: "16px 32px",
            borderRadius: 9999,
          }}
        >
          Email Me
        </a>
      </FadeIn>

      <FadeIn delay={400}>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          {SOCIALS.map((s, idx) => (
            <div key={s.name} className="flex items-center gap-6">
              <a
                href={s.href}
                className="transition-colors hover:text-white"
                style={{
                  fontFamily: "var(--font-dm-mono, monospace)",
                  fontSize: 11,
                  color: "var(--mk-text-muted)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {s.name}
              </a>
              {idx < SOCIALS.length - 1 && (
                <span className="text-[#333] select-none text-xs leading-none mt-0.5">
                  &gt;&gt;
                </span>
              )}
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  );
}
