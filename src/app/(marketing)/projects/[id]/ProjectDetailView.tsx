"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { STATUS_STYLE } from "@/lib/marketing-data";
import type { PROJECTS } from "@/lib/marketing-data";

type Project = (typeof PROJECTS)[number];

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: EASE },
  },
};

const pageVariant = {
  hidden: { opacity: 0, scale: 0.97, y: 16 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};

interface Props {
  project: Project;
  icon: React.ReactNode;
}

export function ProjectDetailView({ project, icon }: Props) {
  const statusStyle = STATUS_STYLE[project.status];
  const isExternalProject = project.href.startsWith("http");

  return (
    <motion.div
      variants={pageVariant}
      initial="hidden"
      animate="show"
      className="relative z-10 w-full max-w-275 mx-auto px-8 pt-20 pb-24"
    >
      <motion.div variants={container} initial="hidden" animate="show">
        {/* Back button */}
        <motion.div variants={item}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-12 group"
            style={{
              fontFamily: "var(--font-dm-mono, monospace)",
              fontSize: 12,
              color: "#555",
              textDecoration: "none",
              letterSpacing: "0.05em",
            }}
          >
            <motion.span
              className="inline-flex"
              whileHover={{ x: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <ArrowLeft className="h-3.5 w-3.5" style={{ color: "#555" }} />
            </motion.span>
            BACK TO PROJECTS
          </Link>
        </motion.div>

        {/* Header row */}
        <motion.div variants={item} className="flex items-start justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            <motion.div
              className="w-fit rounded-xl border border-white/10 bg-white/5 p-3"
              initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.18, duration: 0.5, ease: EASE }}
            >
              {icon}
            </motion.div>
            <div>
              <span
                style={{
                  fontFamily: "var(--font-dm-mono, monospace)",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#444",
                  display: "block",
                  marginBottom: 4,
                }}
              >
                {project.category} · {project.year}
              </span>
              <h1
                style={{
                  fontFamily: "var(--font-syne, sans-serif)",
                  fontSize: "clamp(24px, 4vw, 36px)",
                  fontWeight: 700,
                  color: "#e8e8e8",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                {project.title}
              </h1>
            </div>
          </div>

          <motion.span
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full shrink-0 mt-1"
            style={{
              background: statusStyle.bg,
              fontSize: 11,
              fontFamily: "var(--font-dm-mono, monospace)",
              color: statusStyle.color,
              letterSpacing: "0.06em",
            }}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.28, duration: 0.4, ease: EASE }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: statusStyle.dot,
                flexShrink: 0,
                display: "inline-block",
              }}
            />
            {project.status}
          </motion.span>
        </motion.div>

        {project.videoSrc ? (
          <motion.div
            variants={item}
            className="mb-10 overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-2 shadow-[0_24px_80px_-40px_rgba(156,64,255,0.5)]"
          >
            <video
              src={project.videoSrc}
              controls
              preload="metadata"
              playsInline
              className="aspect-video w-full rounded-2xl bg-black object-cover"
            />
          </motion.div>
        ) : null}

        {/* Divider */}
        <motion.div
          variants={item}
          style={{ height: 1, background: "rgba(255,255,255,0.05)", marginBottom: 40 }}
        />

        {/* Description */}
        <motion.p
          variants={item}
          style={{
            fontSize: 16,
            color: "#888",
            lineHeight: 1.75,
            maxWidth: 640,
            marginBottom: 40,
          }}
        >
          {project.description}
        </motion.p>

        {/* Tech stack */}
        <motion.div variants={item} className="mb-12">
          <span
            style={{
              fontFamily: "var(--font-dm-mono, monospace)",
              fontSize: 10,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#444",
              display: "block",
              marginBottom: 12,
            }}
          >
            Tech Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <motion.span
                key={t}
                className="shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_8px_24px_-18px_rgba(156,64,255,0.9)]"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -2, scale: 1.04 }}
                transition={{
                  delay: 0.32 + i * 0.05,
                  duration: 0.35,
                  ease: EASE,
                }}
                style={{
                  fontFamily: "var(--font-dm-mono, monospace)",
                  fontSize: 11,
                  color: "#d8ccff",
                  background: "linear-gradient(180deg, rgba(156,64,255,0.18), rgba(255,255,255,0.04))",
                  border: "1px solid rgba(156,64,255,0.28)",
                  padding: "7px 15px",
                  borderRadius: 999,
                  letterSpacing: "0.05em",
                  display: "inline-block",
                }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={item}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            style={{ display: "inline-block" }}
          >
            {isExternalProject ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 group"
                style={{
                  fontFamily: "var(--font-dm-mono, monospace)",
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  color: "#e8e8e8",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "12px 24px",
                  borderRadius: 10,
                  textDecoration: "none",
                }}
              >
                VIEW PROJECT
                <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : (
              <Link
                href={project.href}
                className="inline-flex items-center gap-2 group"
                style={{
                  fontFamily: "var(--font-dm-mono, monospace)",
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  color: "#e8e8e8",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "12px 24px",
                  borderRadius: 10,
                  textDecoration: "none",
                }}
              >
                VIEW PROJECT
                <ExternalLink className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
