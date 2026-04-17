"use client";

import Link from "next/link";

export function MarketingFooter() {
  return (
    <div
      className="mt-20 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10 w-full max-w-275 mx-auto px-8"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <p
        style={{
          fontFamily: "var(--font-syne, sans-serif)",
          fontSize: 14,
          fontWeight: 600,
          color: "#444",
        }}
      >
        Building everyday. · 2026
      </p>
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-white"
        style={{
          fontFamily: "var(--font-dm-mono, monospace)",
          fontSize: 11,
          color: "#444",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        Enter Dashboard
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </Link>
    </div>
  );
}
