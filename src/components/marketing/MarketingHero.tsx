"use client";

import Link from "next/link";
import Image from "next/image";
import { CometCard } from "@/components/ui/comet-card";
import { TextFlippingWords } from "@/components/ui/text-flipping-words";

export function MarketingHero() {
  return (
    <div
      className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 relative z-10 w-full max-w-275 mx-auto px-8"
      style={{ marginBottom: 80 }}
    >
      {/* Left: text */}
      <div className="flex-1 min-w-0">

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
          <TextFlippingWords words={["Frontend", "Developer"]} />
        </h1>

        <p
          style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: 16,
            color: "#666",
            lineHeight: 1.7,
            maxWidth: 460,
            marginBottom: "2rem",
          }}
        >
          Learn by doing — building projects, solving real problems, và growing every
          single day. 40-day roadmap từ HTML semantics đến TypeScript + Next.js.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="https://www.linkedin.com/in/thanh-ph%C3%BAc-4071b53a0"
            target="_blank"
            rel="noopener noreferrer"
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
            LinkedIn
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
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
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right: Comet Card */}
      <div className="flex shrink-0 items-center justify-center w-full md:w-auto">
        <CometCard>
          <button
            type="button"
            className="flex w-64 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 transition-all duration-300 hover:saturate-100 saturate-0 scale-100 group"
            aria-label="View invite F7RA"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="p-2 flex-1">
              <div className="relative mt-2 aspect-3/4 w-full">
                <Image
                  loading="lazy"
                  className="absolute inset-0 h-full w-full rounded-[16px] bg-black object-cover contrast-75 transition-all duration-300 group-hover:contrast-100"
                  alt="Avatar"
                  src="/avatar.jpg"
                  fill
                  sizes="256px"
                />
              </div>
            </div>
            <div className="mt-2 flex shrink-0 items-center justify-between p-4 font-mono text-white">
              <div className="text-xs">Hi! I'm Trần Phan Thanh Phúc</div>
            </div>
          </button>
        </CometCard>
      </div>
    </div>
  );
}
