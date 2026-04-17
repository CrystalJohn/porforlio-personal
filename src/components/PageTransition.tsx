"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Nav order for direction-aware transitions
const NAV_ORDER: Record<string, number> = {
  "/dashboard": 0,
  "/daily": 1,
  "/research": 2,
  "/modules": 3,
  "/star": 4,
  "/swot": 5,
};

function getNavIndex(pathname: string): number {
  // Exact match first
  if (pathname in NAV_ORDER) return NAV_ORDER[pathname];
  // Prefix match (e.g. /daily/3 → 1)
  for (const [key, idx] of Object.entries(NAV_ORDER)) {
    if (key !== "/dashboard" && pathname.startsWith(key)) return idx;
  }
  return -1;
}

const SLIDE_DISTANCE = 24; // px

const variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? SLIDE_DISTANCE : direction < 0 ? -SLIDE_DISTANCE : 0,
    scale: 0.985,
    filter: "blur(3px)",
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -SLIDE_DISTANCE : direction < 0 ? SLIDE_DISTANCE : 0,
    scale: 0.99,
    filter: "blur(2px)",
  }),
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [tracker, setTracker] = useState({ path: pathname, direction: 0 });

  if (tracker.path !== pathname) {
    const prevIdx = getNavIndex(tracker.path);
    const currIdx = getNavIndex(pathname);
    let newDirection = 0;
    if (prevIdx !== -1 && currIdx !== -1 && prevIdx !== currIdx) {
      newDirection = currIdx > prevIdx ? 1 : -1;
    }
    setTracker({ path: pathname, direction: newDirection });
  }

  const currentDirection = tracker.path === pathname ? tracker.direction : 0;

  return (
    <AnimatePresence mode="popLayout" custom={currentDirection}>
      <motion.div
        key={pathname}
        custom={currentDirection}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          opacity: { duration: 0.18, ease: "easeOut" },
          x: { type: "spring", stiffness: 380, damping: 32, mass: 0.9 },
          scale: { type: "spring", stiffness: 380, damping: 32, mass: 0.9 },
          filter: { duration: 0.15, ease: "easeOut" },
        }}
        style={{ width: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
