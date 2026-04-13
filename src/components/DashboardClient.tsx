"use client";
import Link from "next/link";

interface RecentReport {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
}

export function ReportLink({ report }: { report: RecentReport }) {
  return (
    <Link href={`/research/${report.slug}`} style={{ textDecoration: "none" }}>
      <div
        style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, padding: 16, marginBottom: 12, transition: "border-color 0.2s, transform 0.2s", cursor: "pointer" }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
      >
        <div style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: 15, fontWeight: 700, marginBottom: 4, color: "var(--text)" }}>{report.title}</div>
        <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 300 }}>{report.date} · {report.readingTime}</div>
      </div>
    </Link>
  );
}

interface ModuleCardProps {
  title: string;
  description: string;
  accent: string;
  icon: string;
  num: string;
  status: string;
}

export function ModuleCardClient({ title, description, accent, icon, num, status }: ModuleCardProps) {
  return (
    <div
      style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 20, position: "relative", overflow: "hidden", transition: "all 0.2s", cursor: "pointer" }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: accent }} />
      <div style={{ fontSize: 22, marginBottom: 8 }}>{icon}</div>
      <div style={{ fontFamily: "var(--font-dm-mono, monospace)", fontSize: 10, color: "var(--muted)", marginBottom: 4 }}>{num}</div>
      <h3 style={{ fontFamily: "var(--font-syne, sans-serif)", fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{title}</h3>
      <p style={{ fontSize: 12, color: "var(--muted)", fontWeight: 300, lineHeight: 1.5 }}>{description}</p>
    </div>
  );
}
