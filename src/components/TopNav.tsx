"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Daily", href: "/daily" },
  { label: "Research", href: "/research" },
  { label: "Modules", href: "/modules" },
  { label: "STAR", href: "/star" },
  { label: "SWOT", href: "/swot" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50" style={{ width: "max-content", maxWidth: "calc(100vw - 32px)" }}>
      <nav
        className="flex items-center"
        style={{
          background: "rgba(10, 10, 10, 0.90)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.10)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.6), 0 0 0 0.5px rgba(255,255,255,0.04) inset",
          borderRadius: 9999,
          padding: "6px 6px",
          gap: 4,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-all duration-200 hover:opacity-80"
          style={{
            fontFamily: "var(--font-syne, sans-serif)",
            fontSize: 15,
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "-0.02em",
            padding: "10px 20px 10px 16px",
            borderRight: "1px solid rgba(255,255,255,0.08)",
            marginRight: 6,
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#3B82F6",
              boxShadow: "0 0 10px 3px rgba(59,130,246,0.7)",
              flexShrink: 0,
              display: "inline-block",
            }}
          />
          CJ
        </Link>

        {/* Nav items */}
        {NAV_ITEMS.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex items-center transition-all duration-200"
              style={{
                fontFamily: "var(--font-dm-mono, monospace)",
                fontSize: 13,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "#ffffff" : "#777",
                background: isActive ? "rgba(255,255,255,0.10)" : "transparent",
                borderRadius: 9999,
                padding: "10px 18px",
                letterSpacing: "0.01em",
                boxShadow: isActive ? "0 0 0 1px rgba(255,255,255,0.1) inset" : "none",
              }}
            >
              {isActive && (
                <span
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.18) 0%, transparent 70%)",
                  }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

