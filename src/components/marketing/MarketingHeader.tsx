"use client";

export function MarketingHeader() {
  return (
    <div className="flex items-center justify-between mb-20 relative z-10 w-full max-w-275 mx-auto px-8 pt-20">
      <div className="flex items-center gap-3">
        <span
          className="w-2.5 h-2.5 rounded-full bg-blue-500 block"
          style={{ boxShadow: "0 0 10px 3px rgba(59,130,246,0.7)" }}
        />
        <span
          style={{
            fontFamily: "var(--font-syne, sans-serif)",
            fontSize: 16,
            fontWeight: 800,
            letterSpacing: "-0.02em",
          }}
        >
          Crystal John
        </span>
      </div>
    </div>
  );
}
